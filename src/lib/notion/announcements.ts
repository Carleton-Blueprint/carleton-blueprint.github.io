import notion from '.';
import { getPageBySlug, getPageIds } from './utils';
import { RichTextType } from '@/components/RichText';

export type AnnouncementDataType = {
  announcementPageId: string;
  slug: string;
  title: string;
  description: string;
  homePageImageURL: string;
  callout: RichTextType[];
  latest: boolean;
};

export const ANNOUNCEMENTS_DATABASE_ID = '1499b397383480bab1c9c97d9756a162';

export async function getAnnouncementsPageIds() {
  return await getPageIds(ANNOUNCEMENTS_DATABASE_ID);
}

export async function getFeaturedAnnouncements() {
  return await getAnnouncements({ featuredOnly: true });
}

export async function getAnnouncements(options?: { featuredOnly: boolean }) {
  const featuredOnly = options?.featuredOnly ?? false;

  const announcementsPageIds = await getAnnouncementsPageIds();
  const announcements: AnnouncementDataType[] = [];
  for (const announcementPageId of announcementsPageIds) {
    const page = (await notion.pages.retrieve({ page_id: announcementPageId })) as any;

    if (featuredOnly && !page.properties.Featured.checkbox) {
      continue;
    }

    announcements.push({
      ...getAnnouncementPageProperties(page, announcementPageId),
    });
  }
  return announcements;
}

export async function getNewsPageBySlug(slug: string) {
  const newsPage = await getPageBySlug(ANNOUNCEMENTS_DATABASE_ID, slug);

  if (!newsPage) return undefined;

  const newsPageId = newsPage.id;

  return { newsPageId, ...getAnnouncementPageProperties(newsPage, newsPageId) };
}

function getAnnouncementPageProperties(page: any, pageId: string) {
  return {
    announcementPageId: pageId,
    slug: page.properties.Slug.rich_text[0]?.plain_text || pageId,
    title: page.properties.Name.title[0].text.content,
    description: page.properties.Description.rich_text[0]?.text.content,
    homePageImageURL: page.properties['Cover URL'].rich_text[0]?.plain_text || '/default',
    callout: page.properties.Callout.rich_text,
    latest: page.properties['Latest Callout'].checkbox,
  };
}

export async function getLatestCallout() {
  const res = await notion.databases.query({
    database_id: ANNOUNCEMENTS_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Latest Callout',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Callout',
          rich_text: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
  if (res.results.length === 0) {
    return null;
  }
  return getAnnouncementPageProperties(res.results[0], res.results[0].id);
}
