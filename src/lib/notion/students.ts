import notion from '.';
import { cache } from 'react';

export type StudentDataType = {
  name: string;
  team: string;
  role: string;
  imageUrl: string;
  personalUrl: string;
};

export const STUDENTS_DATABASE_ID = '87bdbb9cb7bc432a850aea09e9d1e4c6';

export const getStudents = cache(async () => {
  const res = await notion.databases.query({
    database_id: STUDENTS_DATABASE_ID,
    sorts: [
      {
        property: 'Team',
        direction: 'ascending',
      },
      {
        property: 'Roles',
        direction: 'ascending',
      },
    ],
  });

  const studentsArray: StudentDataType[] = [];

  for (const student of res.results as any) {
    const name = student.properties.Name.title[0].plain_text;
    const team = student.properties.Team.select.name;
    const role = student.properties.Roles.select.name;
    const imageUrl = student.properties.Photo.rich_text[0]?.plain_text || '/default';
    const personalUrl = student.properties.Link.url !== null ? student.properties.Link.url : 'No URL';
    studentsArray.push({ name, team, role, imageUrl, personalUrl });
  }

  return studentsArray;
});
