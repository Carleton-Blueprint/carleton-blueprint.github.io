import Section, { TeamDataType } from "./_components/Section";
import getStudents from "@/lib/notion/students";
import { v4 as uuidv4 } from "uuid";

export default async function Students() {
  const students = await getStudents();

  let teamNamesSet = new Set<string>();
  for (const student of students) {
    teamNamesSet.add(student.team);
  }

  const teamNamesArray = Array.from(teamNamesSet);
  const teams: TeamDataType[] = [];
  for (const teamName of teamNamesArray) {
    const teamMembers = students.filter((student) => student.team == teamName);
    teams.push({ teamName, teamMembers });
  }

  return (
    <div className="bg-blueprint-100 min-h-screen overflow-x-hidden">
      <div className="flex flex-col space-y-24 relative pb-24 content container">
        <div className="flex flex-col space-y-2">
          <div className="m-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center pt-6">
              Meet Our <span className="text-blueprint-500">Team</span>
            </h1>
          </div>
          <div className="flex flex-col space-y-24 text-center">
            {teams.map((team) => (
              <Section team={team} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
