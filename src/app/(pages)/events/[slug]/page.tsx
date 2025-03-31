import NotionPage from '@/components/NotionPage';
import { getEventPageBySlug, getEvents } from '@/lib/notion/events';
import { getRecordMap } from '@/lib/notion/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map(event => ({ slug: event.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventPageBySlug(slug);

  if (!event) notFound();

  const recordMap = await getRecordMap(event.eventPageId);
  const title = event.eventName;

  return <NotionPage recordMap={recordMap} title={title} eventDetails={event} />;
}
