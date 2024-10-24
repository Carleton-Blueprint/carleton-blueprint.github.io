import notion from '.';
import { parseISO, format } from 'date-fns';
import { getPageIds } from './utils';

export type EventDataType = {
  eventPageId: string;
  eventName: string;
  date: string;
  venue: string;
  status: string;
  description: string;
  coverURL: string;
  homePageURL?: string;
};

export const EVENTS_DATABASE_ID = 'f988151abd6448ebb70053c5ca1278f9';

export async function getEvent(id: string) {
  const page = (await notion.pages.retrieve({ page_id: id })) as any;
  let date = '';
  if (page.properties.Date.date.start.includes('T')) {
    date = format(
      parseISO(page.properties.Date.date.start),
      'MMMM dd, yyyy h:mm a'
    );
  } else {
    date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy');
  }
  const event: EventDataType = {
    eventPageId: id,
    eventName: page.properties.Name.title[0].text.content,
    date: date,
    venue: page.properties.Venue.rich_text[0].plain_text,
    status: page.properties.Status.status.name,
    description: page.properties.Description.rich_text[0]?.plain_text || '',
    coverURL:
      page.properties['Cover URL'].rich_text[0]?.plain_text || '/default',
  };
  return event;
}

export async function getEventPageIds() {
  return await getPageIds(EVENTS_DATABASE_ID);
}

export async function getFeaturedEvents() {
  const eventPageIds = await getEventPageIds();
  const events: EventDataType[] = [];

  for (const eventPageId of eventPageIds) {
    const page = (await notion.pages.retrieve({ page_id: eventPageId })) as any;
    if (page.properties.Featured.checkbox) {
      const eventName = page.properties.Name.title[0].plain_text;
      const coverURL =
        page.properties['Cover URL'].rich_text[0]?.plain_text || '/default';
      const homePageURL =
        page.properties['Home Cover URL'].rich_text[0]?.plain_text ||
        '/default';
      const description = page.properties.Description.rich_text[0]?.plain_text;
      events.push({
        eventPageId,
        eventName,
        date: '',
        venue: '',
        status: '',
        description,
        coverURL,
        homePageURL,
      });
    }
  }
  return events;
}

export async function getEvents() {
  const eventPageIds = await getEventPageIds();
  const events: EventDataType[] = [];

  for (const eventPageId of eventPageIds) {
    const page = (await notion.pages.retrieve({ page_id: eventPageId })) as any;
    if (!page.properties.Visibility.checkbox) {
      continue;
    }
    const eventName = page.properties.Name.title[0].text.content;
    let date = '';
    if (page.properties.Date.date.start.includes('T')) {
      date = format(
        parseISO(page.properties.Date.date.start),
        'MMMM dd, yyyy h:mm a'
      );
    } else {
      date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy');
    }
    const venue = page.properties.Venue.rich_text[0].plain_text;
    const status = page.properties.Status.status.name;
    const description =
      page.properties.Description.rich_text[0]?.plain_text || '';
    const coverURL =
      page.properties['Cover URL'].rich_text[0]?.plain_text || '/default';

    events.push({
      eventPageId,
      eventName,
      date,
      venue,
      status,
      description,
      coverURL,
    });
  }

  return events;
}
