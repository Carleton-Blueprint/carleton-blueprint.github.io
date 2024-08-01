import NotionPage from '@/components/NotionPage';
import { EventDataType } from '@/lib/notion/events';
import getEventPageIds from '@/lib/notion/events';
import BlockContainer from '@/components/BlockContainer';
import { getRecordMap } from '@/lib/notion/utils';
import { getAllPageIds } from '@/lib/notion/pages';

export async function generateStaticParams() {
  const pageIds = await getAllPageIds();

  return pageIds.map((pageId: string) => ({
    slug: pageId,
  }));
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const recordMap = await getRecordMap(params.slug);

  // const title = (Object.values(blockMap) as any)[0].value.properties.title[0][0];
  const title = 'hey';

  return <NotionPage recordMap={recordMap} />;
}
