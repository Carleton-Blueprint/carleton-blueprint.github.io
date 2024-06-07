import notion from ".";
import { parseISO, format } from "date-fns";

export type EventDataType = {
  eventPageId: string;
  eventName: string;
  date: string;
  venue: string;
  status: string;
  description: string;
  coverURL: string;
};

export async function getEventPageIds() {
  const database_id = "f988151abd6448ebb70053c5ca1278f9";
  const res = await notion.databases.query({
    database_id: database_id,
  });
  const eventPageIds = res.results.map((result) => result.id);
  return eventPageIds;
}

export default async function getEvents() {
  const eventPageIds = await getEventPageIds();
  const events: EventDataType[] = [];

  for (const eventPageId of eventPageIds) {
    const page = (await notion.pages.retrieve({ page_id: eventPageId })) as any;
    const eventName = page.properties.Name.title[0].text.content;
    //const date = parseISO(page.properties.Date.date.start);
    const date = format(
      parseISO(page.properties.Date.date.start),
      "MMMM dd, yyyy h:mm a"
    );
    const venue = page.properties.Venue.rich_text[0].plain_text;
    const status = page.properties.Status.status.name;
    const description =
      page.properties.Description.rich_text[0]?.plain_text || "";
    const coverURL =
      page.properties["Cover URL"].rich_text[0]?.plain_text || "/default";

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
