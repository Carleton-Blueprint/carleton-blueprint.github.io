import BlockContainer from '@/components/BlockContainer';
import EventCard from './EventCard';
import { getFeaturedEvents } from '@/lib/notion/events';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getFeaturedAnnouncements } from '@/lib/notion/announcements';

export default async function HomeEvents() {
  const res = await getFeaturedEvents();
  const news = await getFeaturedAnnouncements();

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
          <CarouselContent>
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
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
      {/* <div className="flex flex-col md:flex-row pl-8 space-y-8 md:space-y-0 md:space-x-8"></div> */}
    </BlockContainer>
  );
}
