import NotionPage from '@/components/NotionPage';
import { getAllPageIds, getRecordMap, getTitleByPageId } from '@/lib/notion/utils';

export async function generateStaticParams() {
  const allPageIds = await getAllPageIds();
  return allPageIds.map((pageId: string) => ({
    slug: pageId,
  }));
}

type PropsType = {
  params: { slug: string };
};

export default async function ArbitraryNotionPage({ params }: PropsType) {
  const pageId = params.slug;

  const title = await getTitleByPageId(pageId);
  const recordMap = await getRecordMap(pageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
