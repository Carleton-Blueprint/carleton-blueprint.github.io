import notion from ".";

export type ProjectDataType = {
  pageId: string;
  companyName: string;
  productName: string | undefined | null;
  description: string | undefined | null;
  year: string | undefined | null;
  logoUrl: string | undefined | null;
  externalUrl: string | undefined | null;
  status: "Not started" | "Done" | "In progress" | undefined | null;
};

export function isCurrentProject(project: ProjectDataType) {
  return project.status === "In progress";
}

export async function getProjects() {
  const databaseId = "f0725682a6134d0f8174876e083eee19";

  const res = await notion.databases.query({
    database_id: databaseId,
    // filter: {
    //   property: "Status",
    //   select: {
    //     equals: "Done",
    //   },
    // },
    sorts: [
      {
        property: "Year",
        direction: "descending",
      },
    ],
  });

  const projectPageIds = res.results.map((result) => result.id);

  const projects: ProjectDataType[] = [];

  for (const pageId of projectPageIds) {
    const page = (await notion.pages.retrieve({ page_id: pageId })) as any;

    const companyName = page.properties.Name.title[0].plain_text;
    const productName =
      page.properties["Product Name"].rich_text[0]?.plain_text;
    const description = page.properties.Description.rich_text[0]?.plain_text;
    const year = page.properties.Year.rich_text[0]?.plain_text;
    const logoUrl =
      page.properties["Logo URL"].rich_text[0]?.plain_text || "/default";
    const externalUrl = page.properties.URL.url;
    const status = page.properties.Status.select.name;

    projects.push({
      pageId,
      companyName,
      productName,
      description,
      year,
      logoUrl,
      externalUrl,
      status,
    });
  }

  return projects;
}
