import { Skeleton } from '@/components/ui/skeleton';

export default function EventCardLoading() {
  return new Array(2).fill('').map(id => (
    <div
      key={id}
      className="relative mt-12 flex w-full max-w-md transform flex-col overflow-hidden rounded-[30px] shadow-md"
    >
      <div className="relative w-full overflow-hidden md:h-64">
        <div className="max-h-full overflow-hidden">
          <Skeleton className="h-[250px] w-[400px] rounded-lg md:h-[400px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 text-center md:p-6">
        <Skeleton className="mb-1 h-[28px] w-full font-bold md:mb-3" />
        <Skeleton className="my-1 h-1 w-full md:my-3" />
        <Skeleton className="h-[28px] w-full md:py-2" />
        <Skeleton className="h-[24px] w-full md:py-2" />
        <Skeleton className="h-[84px] w-full md:py-2" />
      </div>
    </div>
  ));
}
