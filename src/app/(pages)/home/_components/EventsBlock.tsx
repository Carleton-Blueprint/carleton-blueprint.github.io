import BlockContainer from "@/components/BlockContainer";
import EventCard from "./EventCard";
import { getFeaturedEvents } from "@/lib/notion/events";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function HomeEvents() {
  const res = await getFeaturedEvents();
  return (
    <BlockContainer title="News and Events" flip="light-blue" margin={"bottom"}>
      <div className="flex justify-center px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {res.map((event) => (
              <CarouselItem
                key={event.eventPageId}
                className="md:basis-1/2 lg:basis-1/3"
              >
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
