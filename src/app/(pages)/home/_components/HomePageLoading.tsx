import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

export function HomeProjectLoading() {
  return (
    <CarouselContent>
      {new Array(3).fill('').map(id => (
        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
          <div className="flex items-center justify-center">
            <Skeleton className="h-[320px] w-[320px] rounded-[40px] md:h-80 md:w-80 lg:h-72 lg:w-72" />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

export function HomeProjectLoadingMobile() {
  return new Array(3).fill('').map(id => (
    <div key={id} className="relative flex items-center justify-end">
      <Skeleton className="relative h-24 w-full min-w-fit rounded-[35px] px-6" />
    </div>
  ));
}

export function HomeEventLoading() {
  return (
    <CarouselContent>
      {new Array(3).fill('').map(id => (
        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
          <Skeleton className="relative h-[18rem] min-w-fit rounded-[50px] md:h-[36rem]" />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
