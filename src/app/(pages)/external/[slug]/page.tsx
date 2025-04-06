import NotionPage from '@/components/NotionPage';
import { getExternalPages } from '@/lib/notion/external';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const externalPages = await getExternalPages();
  return externalPages.map(externalPage => ({ slug: externalPage.slug }));
}

export default async function ExternalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const externalPages = await getExternalPages();
  const data = externalPages.find(page => page.slug === slug);
  if (data === undefined) return notFound();

  return <NotionPage recordMap={data.recordMap} title={data.title} />;
}
