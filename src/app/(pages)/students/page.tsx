import Section, { TeamDataType } from "./_components/Section"
import getStudents from "@/lib/notion/students"
import { v4 as uuidv4 } from "uuid"

export default async function Students() {
  const students = await getStudents();

  let teamNamesSet = new Set<string>();
  for(const student of students){
    teamNamesSet.add(student.team)
  }

  const teamNamesArray = Array.from(teamNamesSet)
  const teams: TeamDataType[] = []
  for(const teamName of teamNamesArray){
    const teamMembers = students.filter(student => (student.team == teamName))
    teams.push({teamName, teamMembers})
  }

  return (
    <div>
      <div className=" min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-full space-y-24 relative pb-24">
          <section className="content container">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col items-center mb-8">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center pt-6">
                  Meet the Team
                </h1>
                <p className="text-lg text-center w-3/4">
                  Our community brings together expertise in diverse disciplines, unified by our commitment to supporting nonprofits and our passion for technology.
                </p>
              </div>
              <div className="flex flex-col space-y-24 text-center">
                {teams.map(team => (
                  <Section team={team} key={uuidv4()}/>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
