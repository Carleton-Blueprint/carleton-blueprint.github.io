import NotionPage from '@/components/NotionPage';
import { getExternalPageIdBySlug } from '@/lib/notion/external';
import { getAllPageIds, getRecordMap, getTitleByPageId } from '@/lib/notion/utils';
import { notFound } from 'next/navigation';
import { parsePageId } from 'notion-utils';

export async function generateStaticParams() {
  const allPageIds = await getAllPageIds();
  const allPageIdsNoDashes = allPageIds.map(pageId => parsePageId(pageId, { uuid: false }));

  return [...allPageIds, ...allPageIdsNoDashes].map((pageId: string) => ({
    slug: pageId,
  }));
}

type PropsType = {
  params: { slug: string };
};

export default async function ArbitraryNotionPage({ params }: PropsType) {
  const slug = params.slug;
  const pageId = await getExternalPageIdBySlug(slug);
  let title, recordMap;
  if (!pageId) {
    try {
      title = await getTitleByPageId(slug);
      recordMap = await getRecordMap(slug);
    } catch (e) {
      return notFound();
    }
  } else {
    recordMap = await getRecordMap(pageId);
    title = await getTitleByPageId(pageId);
  }

  return <NotionPage recordMap={recordMap} title={title} />;
}
