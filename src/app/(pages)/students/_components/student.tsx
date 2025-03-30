import { getStudents } from '@/lib/notion/students';
import Section, { TeamDataType } from './Section';
import { v4 as uuidv4 } from 'uuid';

export default async function Student() {
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

  return teams.map(team => <Section team={team} key={uuidv4()} />);
}
