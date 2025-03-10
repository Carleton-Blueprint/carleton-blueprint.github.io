import notion from '.';
import { parseISO, format } from 'date-fns';
import { getPageBySlug, getPageIds } from './utils';
import { isFullPage } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type EventDataType = {
  eventPageId: string;
  slug: string;
  eventName: string;
  date: string;
  venue: string;
  status: string;
  description: string;
  homePageImageURL?: string;
  imageURL: string;
};

export const EVENTS_DATABASE_ID = 'f988151abd6448ebb70053c5ca1278f9';

export async function getEventPageIds() {
  return await getPageIds(EVENTS_DATABASE_ID);
}

export async function getFeaturedEvents() {
  return await getEvents({ featuredOnly: true });
}

export async function getEvents(options?: { featuredOnly: boolean }) {
  const featuredOnly = options?.featuredOnly ?? false;

  const eventPageIds = await getEventPageIds();
  const events: EventDataType[] = [];

  for (const eventPageId of eventPageIds) {
    const page = await notion.pages.retrieve({ page_id: eventPageId });

    if (!isFullPage(page)) continue;
    if (page.properties.Featured.type !== 'checkbox') continue;
    if (page.properties.Visibility.type !== 'checkbox') continue;

    if ((featuredOnly && !page.properties.Featured.checkbox) || !page.properties.Visibility.checkbox) {
      continue;
    }

    const properties = getEventPageProperties(page, eventPageId);
    if (!properties) continue;

    events.push({ eventPageId, ...properties });
  }

  return events;
}

export async function getEventPageBySlug(slug: string) {
  const eventPage = await getPageBySlug(EVENTS_DATABASE_ID, slug);
  if (!eventPage) return undefined;
  if (!isFullPage(eventPage)) return undefined;

  const eventPageId = eventPage.id;
  const properties = getEventPageProperties(eventPage, eventPageId);
  if (!properties) return undefined;

  return { eventPageId, ...properties };
}

function getEventPageProperties(page: PageObjectResponse, pageId: string) {
  if (page.properties.Date.type !== 'date') return false;
  if (page.properties.Name.type !== 'title') return false;
  if (page.properties.Venue.type !== 'rich_text') return false;
  if (page.properties.Status.type !== 'status' || !page.properties.Status.status) return false;
  if (page.properties.Description.type !== 'rich_text') return false;
  if (page.properties.Slug.type !== 'rich_text') return false;
  if (page.properties.Image.type !== 'files') return false;

  if (page.properties.Image.files[0] && !('file' in page.properties.Image.files[0])) return false;
  if (page.properties.Image.files[1] && !('file' in page.properties.Image.files[1])) return false;

  const homeImage =
    page.properties.Image.files[1]?.file.url || page.properties.Image.files[0]?.file.url || '/default.png';

  let date = '';
  if (!page.properties.Date.date) {
    date = 'January 1, 2000';
  } else {
    if (page.properties.Date.date.start.includes('T')) {
      date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy h:mm a');
    } else {
      date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy');
    }
  }

  return {
    eventName: page.properties.Name.title[0]?.plain_text || 'Event',
    date,
    venue: page.properties.Venue.rich_text[0]?.plain_text || 'Carleton University',
    status: page.properties.Status.status.name,
    description: page.properties.Description.rich_text[0]?.plain_text || '',
    homePageImageURL: homeImage,
    slug: page.properties.Slug.rich_text[0]?.plain_text || pageId,
    imageURL: page.properties['Image'].files[0]?.file.url || '/default.png',
  };
}
