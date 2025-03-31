import Section, { TeamDataType } from './_components/Section';
import { getStudents } from '@/lib/notion/students';
import { v4 as uuidv4 } from 'uuid';
import bluePeople from './_assets/blue_people.svg';
import Image from 'next/image';

export const revalidate = 3600;

export default async function Students() {
  const students = await getStudents();

  let teamNamesSet = new Set<string>();
  for (const student of students) {
    teamNamesSet.add(student.team);
  }

  const teamNamesArray = Array.from(teamNamesSet);
  const teams: TeamDataType[] = [];
  for (const teamName of teamNamesArray) {
    const teamMembers = students.filter(student => student.team == teamName);
    teams.push({ teamName, teamMembers });
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-blueprint-50">
      <div className="content container relative flex flex-col space-y-24 pb-24">
        <div className="flex flex-col space-y-2">
          <div className="m-4 ml-0 flex flex-row gap-5 md:m-8 md:justify-start">
            <h1 className="mb-4 pt-6 text-4xl font-bold md:mb-8 md:text-5xl">
              Meet our <span className="text-blueprint-500">Team</span>
            </h1>
            <Image src={bluePeople} width={188.5} alt="Image of blue figures" className="hidden md:block" />
          </div>
          <div className="flex flex-col space-y-12 text-center md:space-y-24">
            {teams.map(team => (
              <Section team={team} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
