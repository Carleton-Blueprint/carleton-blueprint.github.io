import notion from '.';
import { parseISO, format } from 'date-fns';
import { getPageIds } from './utils';

export type EventDataType = {
  eventPageId: string;
  slug: string;
  eventName: string;
  date: string;
  venue: string;
  status: string;
  description: string;
  coverURL: string;
  homePageURL?: string;
};

export const EVENTS_DATABASE_ID = 'f988151abd6448ebb70053c5ca1278f9';

export async function getEvent(slug: string) {
  const events = await getEvents();
  const event = events.find(e => e.slug === slug);
  if (!event) return undefined;
  return event;
}

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
    const page = (await notion.pages.retrieve({ page_id: eventPageId })) as any;

    if ((featuredOnly && !page.properties.Featured.checkbox) || !page.properties.Visibility.checkbox) {
      continue;
    }

    const eventName = page.properties.Name.title[0].text.content;
    let date = '';
    if (page.properties.Date.date.start.includes('T')) {
      date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy h:mm a');
    } else {
      date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy');
    }

    const venue = page.properties.Venue.rich_text[0].plain_text;
    const status = page.properties.Status.status.name;
    const description = page.properties.Description.rich_text[0]?.plain_text || '';
    const coverURL = page.properties['Cover URL'].rich_text[0]?.plain_text || '/default';
    const slug = page.properties.Slug.rich_text[0]?.plain_text || eventPageId;

    events.push({
      eventPageId,
      eventName,
      date,
      venue,
      status,
      description,
      coverURL,
      slug,
    });
  }

  return events;
}
