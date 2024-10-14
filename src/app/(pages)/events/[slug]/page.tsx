import { NotionPage, EventDetailsType } from '@/components/NotionPage';
import { getEvent, getEventPageIds } from '@/lib/notion/events';
import { getRecordMap, getTitleByPageId } from '@/lib/notion/utils';

export async function generateStaticParams() {
  const pageIds = await getEventPageIds();
  return pageIds.map((slug: string) => ({ slug }));
}

type PropsType = {
  params: { slug: string };
};

export default async function EventPage({ params }: PropsType) {
  const pageId = params.slug;
  const event = await getEvent(pageId);
  const eventDetails: EventDetailsType = {
    date: event.date,
    venue: event.venue,
    status: event.status,
  };

  const recordMap = await getRecordMap(pageId);
  const title = await getTitleByPageId(pageId);

  return (
    <NotionPage
      recordMap={recordMap}
      title={title}
      eventDetails={eventDetails}
    />
  );
}
