import { getProject, getProjects } from '@/lib/notion/projects';
import { getRecordMap, getTitleByPageId } from '@/lib/notion/utils';
import NotionPage from '@/components/NotionPage';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

type PropsType = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: PropsType) {
  const project = await getProject(params.slug);

  const title = await getTitleByPageId(project.pageId);
  const recordMap = await getRecordMap(project.pageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
