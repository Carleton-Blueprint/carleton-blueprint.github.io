import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import notion from '.';
import { getPageIds } from './utils';

export const EXTERNAL_DATABASE_ID = '71d87c840be547e28a6711d5cae70863';

export async function getExternalPageIds() {
  return await getPageIds(EXTERNAL_DATABASE_ID);
}

export async function getExternalPageSlugs(): Promise<string[]> {
  const res = await notion.databases.query({
    database_id: EXTERNAL_DATABASE_ID,
  });

  const results = res.results.map(result => {
    const typedResult = result as PageObjectResponse;
    if (typedResult.properties.Slug.type !== 'url' || !typedResult.properties.Slug.url) return '';
    const slug = typedResult.properties.Slug.url;
    return slug;
  });

  return results;
}

export async function getExternalPageIdBySlug(slug: string): Promise<string> {
  const res = await notion.databases.query({
    database_id: EXTERNAL_DATABASE_ID,
    filter: {
      property: 'Slug',
      url: {
        equals: slug,
      },
    },
  });

  return res.results[0].id;
}
