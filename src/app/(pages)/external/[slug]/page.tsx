import NotionPage from '@/components/NotionPage';
import { getExternalPageIdBySlug, getExternalPageSlugs } from '@/lib/notion/external';
import { getRecordMap, getTitleByPageId } from '@/lib/notion/utils';

export async function generateStaticParams() {
  const slugs = await getExternalPageSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

type PropsType = {
  params: { slug: string };
};

export default async function ArbitraryNotionPage({ params }: PropsType) {
  const slug = params.slug;

  const pageId = await getExternalPageIdBySlug(slug);
  const title = await getTitleByPageId(pageId);
  const recordMap = await getRecordMap(pageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
