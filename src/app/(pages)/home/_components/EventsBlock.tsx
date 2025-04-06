import BlockContainer from '@/components/BlockContainer';
import EventCard from './EventCard';
import { getFeaturedEvents } from '@/lib/notion/events';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getFeaturedAnnouncements } from '@/lib/notion/announcements';
import { Suspense } from 'react';
import { HomeEventLoading } from './HomePageLoading';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

export default function HomeEvents() {
  return (
    <BlockContainer title="News & Events" bg="light-blue" padding="less">
      <div className="-mx-6 flex justify-center px-4">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <Suspense fallback={<HomeEventLoading />}>
            <Events />
          </Suspense>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
      {/* <div className="flex flex-col md:flex-row pl-8 space-y-8 md:space-y-0 md:space-x-8"></div> */}
    </BlockContainer>
  );
}

async function Events() {
  const res = await getFeaturedEvents();
  const news = await getFeaturedAnnouncements();

  return (
    <CarouselContent className="px-1 py-4">
      {news.map(announcement => (
        <CarouselItem key={announcement.announcementPageId} className="md:basis-1/2 lg:basis-1/3">
          <EventCard data={announcement} />
        </CarouselItem>
      ))}
      {res.map(event => (
        <CarouselItem key={event.eventPageId} className="md:basis-1/2 lg:basis-1/3">
          <EventCard data={event} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
