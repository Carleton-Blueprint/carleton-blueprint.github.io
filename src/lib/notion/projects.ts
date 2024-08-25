import notion from '.';
import { getPageIds } from './utils';

export type ProjectDataType = {
  pageId: string;
  companyName: string;
  productName: string | undefined | null;
  description: string | undefined | null;
  year: string | undefined | null;
  logoUrl: string | undefined | null;
  externalUrl: string | undefined | null;
  status: "Not started" | "Done" | "In progress" | undefined | null;
  gitHubUrl: string | undefined | "";
};

export const PROJECTS_DATABASE_ID = 'f0725682a6134d0f8174876e083eee19';

export function isCurrentProject(project: ProjectDataType) {
  return project.status === 'In progress';
}

export async function getProjectPageIds() {
  return await getPageIds(PROJECTS_DATABASE_ID);
}

export async function getFeaturedProjects() {
  const projectPageIds = await getProjectPageIds();
  const projects: ProjectDataType[] = [];

  for (const pageId of projectPageIds) {
    const page = (await notion.pages.retrieve({ page_id: pageId })) as any;
    if (page.properties.Featured.checkbox) {
      const companyName = page.properties.Name.title[0].plain_text;
      const productName = page.properties['Product Name'].rich_text[0]?.plain_text || '';
      const logoUrl = page.properties['Logo URL'].rich_text[0]?.plain_text || '/default';
      const externalUrl = page.properties.URL.url;
      const gitHubUrl = page.properties.gitHubUrl;
      projects.push({
        pageId,
        companyName,
        productName,
        description: '',
        year: '',
        logoUrl,
        externalUrl,
        status: "Done",
        gitHubUrl,
      });
    }
  }
  return projects;
}

export async function getProjects() {
  const projectPageIds = await getProjectPageIds();
  const projects: ProjectDataType[] = [];

  for (const pageId of projectPageIds) {
    const page = (await notion.pages.retrieve({ page_id: pageId })) as any;

    const companyName = page.properties.Name.title[0].plain_text;
    const productName = page.properties['Product Name'].rich_text[0]?.plain_text;
    const description = page.properties.Description.rich_text[0]?.plain_text;
    const year = page.properties.Year.rich_text[0]?.plain_text;
    const logoUrl = page.properties['Logo URL'].rich_text[0]?.plain_text || '/default';
    const externalUrl = page.properties.URL.url;
    const status = page.properties.Status.select.name;
    const gitHubUrl = page.properties.gitHubUrl.url;

    projects.push({
      pageId,
      companyName,
      productName,
      description,
      year,
      logoUrl,
      externalUrl,
      status,
      gitHubUrl,
    });
  }

  return projects;
}
