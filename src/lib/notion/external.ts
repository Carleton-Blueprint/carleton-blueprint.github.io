import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import notion from '.';
import { getRecordMap } from './utils';
import { ExtendedRecordMap } from 'notion-types';
import { cache } from 'react';

export const EXTERNAL_DATABASE_ID = '71d87c840be547e28a6711d5cae70863';

export type ExternalPage = {
  slug: string;
  title: string;
  pageId: string;
  recordMap: ExtendedRecordMap;
};

/**
 * Check out how caching works:
 * - https://react.dev/reference/react/cache
 * - https://nextjs.org/docs/app/building-your-application/caching#react-cache-function
 */
export const getExternalPages = cache(async () => {
  const res = await notion.databases.query({ database_id: EXTERNAL_DATABASE_ID });
  const results = res.results as PageObjectResponse[];

  const externalPages: ExternalPage[] = [];

  for (let item of results) {
    if (item.properties.Slug.type !== 'url')
      throw new Error('Found an "External" page that has a non-URL typed property called "Slug"!');
    if (item.properties.Name.type !== 'title')
      throw new Error('Found an "External" page that has a non-title typed property called "Name"!');

    const slug = item.properties.Slug.url ?? '';
    const title = item.properties.Name.title[0].plain_text;
    const pageId = item.id;
    const recordMap = await getRecordMap(pageId);

    externalPages.push({ slug, title, pageId, recordMap });
  }

  return externalPages;
});
