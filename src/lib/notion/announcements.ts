import notion from '.';
import { getPageIds } from './utils';
import { RichTextType } from '@/components/RichText';

export type AnnouncementDataType = {
  announcementPageId: string;
  title: string;
  callout: RichTextType[];
};

export const ANNOUNCEMENTS_DATABASE_ID = '1499b397383480bab1c9c97d9756a162';

export async function getAnnouncementsPageIds() {
  return await getPageIds(ANNOUNCEMENTS_DATABASE_ID);
}

export async function getLatestCallout() {
  const announcementPageIds = await getAnnouncementsPageIds();

  const page = (await notion.pages.retrieve({ page_id: announcementPageIds[1] })) as any;
  const title = page.properties.Name.title[0].plain_text;
  const callout = page.properties.Callout.rich_text;

  const announcement: AnnouncementDataType = {
    announcementPageId: announcementPageIds[1],
    title,
    callout,
  };
  return announcement;
}
