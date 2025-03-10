import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
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

  for (const student of res.results as PageObjectResponse[]) {
    if (student.properties.Visibility.type !== 'checkbox') continue;
    if (!student.properties.Visibility.checkbox) {
      continue;
    }

    if (student.properties.Name.type !== 'title') continue;
    if (student.properties.Team.type !== 'select') continue;
    if (student.properties.Roles.type !== 'select') continue;
    if (student.properties.Photo.type !== 'rich_text') continue;
    if (student.properties.Link.type !== 'url') continue;
    if (student.properties.Image.type !== 'files') continue;

    if (student.properties.Image.files[0] && !('file' in student.properties.Image.files[0])) continue;

    const name = student.properties.Name.title[0]?.plain_text || 'Name';
    const team = student.properties.Team.select?.name || 'Executive';
    const role = student.properties.Roles.select?.name || 'Role';
    const imageUrl = student.properties['Image'].files[0]?.file.url || '/default.png';
    const personalUrl = student.properties.Link.url !== null ? student.properties.Link.url : 'No URL';
    studentsArray.push({ name, team, role, imageUrl, personalUrl });
  }

  return studentsArray;
});
