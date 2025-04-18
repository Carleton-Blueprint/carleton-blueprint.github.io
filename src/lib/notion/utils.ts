import { NotionAPI } from 'notion-client';
import { getExternalPages } from './external';
import notion from '.';
import { getEventPageIds } from './events';
import { getProjectPageIds } from './projects';
import { getAnnouncementsPageIds } from './announcements';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

/*
 * `notion-client` is the unofficial notion API library (not the same as – @notionhq/client)
 *  https://github.com/NotionX/react-notion-x
 *
 *  API Key not required – We're only using this for publicly published pages.
 */
const reactNotionXClient = new NotionAPI();

export const getRecordMap = async (pageId: string) => {
  return await reactNotionXClient.getPage(pageId);
};

export async function getAllPageIds() {
  const eventPageIds = await getEventPageIds();
  const externalPageIds = (await getExternalPages()).map(ePage => ePage.pageId);
  const projectPageIds = await getProjectPageIds();
  const newsPageIds = await getAnnouncementsPageIds();

  return [...eventPageIds, ...externalPageIds, ...projectPageIds, ...newsPageIds];
}

export async function getPageIds(database_id: string): Promise<string[]> {
  const res = await notion.databases.query({
    database_id,
  });

  const pageIds = res.results.map(result => result.id);
  return pageIds;
}

export async function getTitleByPageId(page_id: string) {
  const res = await notion.pages.retrieve({ page_id });
  const typedRes = res as PageObjectResponse;

  if ('Name' in typedRes.properties) {
    if (typedRes.properties.Name.type !== 'title')
      throw new Error('Found a page that has a non-title typed property called "Name"!');
    return typedRes.properties.Name.title[0].plain_text ?? 'Untitled';
  }

  // TODO: fix this if we decide not to move to PayloadCMS
  // @ts-ignore
  return typedRes.properties.title.title[0].plain_text;
}

export async function getPageBySlug(database_id: string, slug: string) {
  const res = await notion.databases.query({
    database_id,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  if (!res.results.length) return undefined;

  return res.results[0] as PageObjectResponse;
}
