import { isFullPage } from '@notionhq/client';
import notion from '.';
import { getPageBySlug, getPageIds } from './utils';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type ProjectDataType = {
  pageId: string;
  slug: string;
  companyName: string;
  productName: string | undefined | null;
  description: string | undefined | null;
  year: string | undefined | null;
  logoUrl: string | undefined | null;
  externalUrl: string | undefined | null;
  status: 'Not started' | 'Done' | 'In progress' | string | undefined | null;
  gitHubUrl: string | undefined | '';
};

export const PROJECTS_DATABASE_ID = 'f0725682a6134d0f8174876e083eee19';

export function isCurrentProject(project: ProjectDataType) {
  return project.status === 'In progress';
}

export async function getProjectPageIds() {
  return await getPageIds(PROJECTS_DATABASE_ID);
}

export async function getFeaturedProjects() {
  return await getProjects({ featuredOnly: true });
}

export async function getProjects(options?: { featuredOnly: boolean }) {
  const featuredOnly = options?.featuredOnly ?? false;

  const projectPageIds = await getProjectPageIds();
  const projects: ProjectDataType[] = [];

  for (const pageId of projectPageIds) {
    const page = await notion.pages.retrieve({ page_id: pageId });

    if (!isFullPage(page)) continue;
    if (page.properties.Featured.type !== 'checkbox') continue;
    if (page.properties.Visibility.type !== 'checkbox') continue;

    if ((featuredOnly && !page.properties.Featured.checkbox) || !page.properties.Visibility.checkbox) {
      continue;
    }

    const properties = getProjectPageProperties(page, pageId);
    if (!properties) continue;

    projects.push({ pageId, ...properties });
  }

  return projects;
}

export async function getProjectPageBySlug(slug: string) {
  return getPageBySlug(PROJECTS_DATABASE_ID, slug);
}

function getProjectPageProperties(page: PageObjectResponse, pageId: string) {
  if (page.properties.Name.type !== 'title') return false;
  if (page.properties['Product Name'].type !== 'rich_text') return false;
  if (page.properties.Description.type !== 'rich_text') return false;
  if (page.properties.Year.type !== 'rich_text') return false;
  if (page.properties['Logo URL'].type !== 'rich_text') return false;
  if (page.properties.URL.type !== 'url') return false;
  if (page.properties.Status.type !== 'status' || !page.properties.Status.status) return false;
  if (page.properties.gitHubUrl.type !== 'url') return false;
  if (page.properties.Slug.type !== 'rich_text') return false;

  return {
    companyName: page.properties.Name.title[0]?.plain_text || 'Company Name',
    productName: page.properties['Product Name'].rich_text[0]?.plain_text,
    description: page.properties.Description.rich_text[0]?.plain_text,
    year: page.properties.Year.rich_text[0]?.plain_text,
    logoUrl: page.properties['Logo URL'].rich_text[0]?.plain_text || '/default',
    externalUrl: page.properties.URL.url,
    status: page.properties.Status.status.name,
    gitHubUrl: page.properties.gitHubUrl.url || '',
    slug: page.properties.Slug.rich_text[0]?.plain_text || pageId,
  };
}
