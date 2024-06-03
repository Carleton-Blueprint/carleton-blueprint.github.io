import notion from ".";
import { cache } from "react";

export type StudentDataType = {
  name: string;
  team: string;
  role: string;
  imageUrl: string;
  personalUrl: string;
};

const getStudents = cache(async () => {
  const database_id = "87bdbb9cb7bc432a850aea09e9d1e4c6";
  const res = await notion.databases.query({
    database_id: database_id,
    sorts: [
      {
        property: "Team",
        direction: "ascending",
      },
      {
        property: "Roles",
        direction: "ascending",
      },
    ],
  });

  const studentsArray: StudentDataType[] = [];

  for (const student of res.results as any) {
    const name = student.properties.Name.title[0].plain_text;
    const team = student.properties.Team.select.name;
    const role = student.properties.Roles.select.name;
    const imageUrl = student.properties.Photo.files[0]?.file.url || "No URL";
    const personalUrl =
      student.properties.Link.url !== null
        ? student.properties.Link.url
        : "No URL";
    studentsArray.push({ name, team, role, imageUrl, personalUrl });
  }

  return studentsArray;
});

export default getStudents;
