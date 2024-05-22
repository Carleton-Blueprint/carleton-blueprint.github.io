import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export type PageDataType = {
  name: string;
  href: string;
};

export type ProjectCardDataType = {
  companyName: string;
  product: string;
  description: string;
  logo: string;
  link: string;
};

export type ContactCardDataType = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export async function fetchPages() {
  const res = await client.getEntries({
    content_type: "navLinks",
    select: ["fields"],
    limit: 1,
  });

  if (res.items.length === 0) throw new Error("No pages found");

  const raw = res.items[0].fields.links as { fields: PageDataType }[];
  if (!raw) throw new Error("No links found");

  return raw.map((item) => item.fields) as PageDataType[];
}

// export async function fetchProjects(current: number) {
//   const res = await client.getEntries({
//     content_type: "projects",
//     select: ["fields"],
//   });

//   let projects = [];

//   if (res.items.length == 0) throw new Error("No projects found");
//   if (current == 0) {
//     const projectCards = res.items.find(
//       (item) => item.fields.name === "Current Projects"
//     )?.fields.projectCards as ProjectCardDataType[];
//     if (projectCards) {
//       for (const projectCard of projectCards) {
//         projects.push(projectCard.fields);
//       }
//     } else {
//       throw new Error("No project cards found");
//     }
//   } else {
//     const projectCards = res.items.find(
//       (item) => item.fields.name === "Past Projects"
//     )?.fields.projectCards as ProjectCardDataType[];
//     if (projectCards) {
//       for (const projectCard of projectCards) {
//         projects.push(projectCard.fields);
//       }
//     } else {
//       throw new Error("No project cards found");
//     }
//   }
//   for (var project of projects) {
//     project.logo = project.logo.fields.file.url;
//   }
//   return projects;
// }

export async function fetchContact() {
  const res = await client.getEntries({
    content_type: "contact",
    select: ["fields"],
    limit: 1,
  });
  if (res.items.length === 0) throw new Error("No contact cards found");

  const raw = res.items[0].fields.contactCards as {
    fields: ContactCardDataType;
  }[];
  if (!raw) throw new Error("No contact cards found");

  return raw.map((item) => item.fields) as ContactCardDataType[];
}

export default client;
