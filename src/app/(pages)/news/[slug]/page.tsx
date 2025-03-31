import NotionPage from '@/components/NotionPage';
import { getNewsPageBySlug, getAnnouncements } from '@/lib/notion/announcements';
import { getRecordMap, getTitleByPageId } from '@/lib/notion/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const news = await getAnnouncements();
  return news.map(announcement => ({
    slug: announcement.slug,
  }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const newsPage = await getNewsPageBySlug(slug);

  if (!newsPage) notFound();

  const recordMap = await getRecordMap(newsPage.newsPageId);
  const title = await getTitleByPageId(newsPage.newsPageId);

  return <NotionPage recordMap={recordMap} title={title} />;
}
