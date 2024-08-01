import { getProjectPageIds } from '@/lib/notion/projects';
import { getRecordMap, getTitleByPageId } from '@/lib/notion/utils';
import NotionPage from '@/components/NotionPage';

export async function generateStaticParams() {
  const pageIds = await getProjectPageIds();
  return pageIds.map((slug: string) => ({ slug }));
}

type PropsType = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: PropsType) {
  const pageId = params.slug;

  const title = await getTitleByPageId(pageId);
  const recordMap = await getRecordMap(pageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
