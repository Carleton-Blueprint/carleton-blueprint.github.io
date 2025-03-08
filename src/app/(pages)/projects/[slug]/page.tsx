import { getProjectPageBySlug, getProjects } from '@/lib/notion/projects';
import { getRecordMap } from '@/lib/notion/utils';
import NotionPage from '@/components/NotionPage';
import { notFound } from 'next/navigation';

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
  const project = await getProjectPageBySlug(params.slug);

  if (!project) notFound();

  const title = project.companyName;
  const recordMap = await getRecordMap(project.projectPageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
