import NotionPage from '@/components/NotionPage';
import { getEventPageIds } from '@/lib/notion/events';
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

  const recordMap = await getRecordMap(pageId);
  const title = await getTitleByPageId(pageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
