import { getProjectPageBySlug, getProjects } from '@/lib/notion/projects';
import { getRecordMap } from '@/lib/notion/utils';
import NotionPage from '@/components/NotionPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectPageBySlug(slug);

  if (!project) notFound();

  const title = project.companyName;
  const recordMap = await getRecordMap(project.projectPageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
