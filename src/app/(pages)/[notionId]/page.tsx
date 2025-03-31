import NotionPage from '@/components/NotionPage';
import { getAllPageIds, getRecordMap, getTitleByPageId } from '@/lib/notion/utils';

export async function generateStaticParams() {
  const pageIds = await getAllPageIds();
  return pageIds.map(pageId => ({ notionId: pageId.replace(/-/g, '') }));
}

export default async function ArbitraryNotionPage({ params }: { params: Promise<{ notionId: string }> }) {
  const { notionId } = await params;
  const recordMap = await getRecordMap(notionId);
  const title = await getTitleByPageId(notionId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
