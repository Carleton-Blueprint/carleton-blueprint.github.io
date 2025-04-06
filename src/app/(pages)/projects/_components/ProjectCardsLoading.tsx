import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectCardSkeleton() {
  return new Array(2).fill('').map(id => (
    <>
      <Card
        key={id}
        className="flex w-full items-center justify-center rounded-[40px] shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)] md:h-auto"
      >
        <div className="ml-8 hidden h-[200px] w-[250px] md:block">
          <Skeleton className="h-full w-full" />
        </div>

        <div className="flex min-h-[320px] w-11/12 flex-col justify-end md:min-h-full md:justify-between">
          <CardHeader className="flex flex-col items-start justify-between md:block md:items-center">
            <CardTitle className="">
              <Skeleton className="h-[80px] w-[220px] md:h-[50px] md:w-[500px]" />
            </CardTitle>
            <div className="flex w-full flex-row gap-2 md:items-center md:pt-0">
              <Skeleton className="h-[150px] w-full md:h-[25px] md:w-[350px]" />
              <div className="max-h-[120px] w-1/2 max-w-[120px] md:hidden">
                <Skeleton className="h-[120px] w-[120px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-md mb-5 hidden overflow-hidden md:block md:h-24">
            <Skeleton className="h-32 w-full" />
          </CardContent>
          <CardFooter className="justify-end space-x-4 pb-4 text-xs md:justify-start md:pb-6">
            <Skeleton className="h-16 w-16 rounded-full" />
            <Skeleton className="h-16 w-16 rounded-full" />
          </CardFooter>
        </div>
      </Card>
    </>
  ));
}

export function PastProjectCardSkeleton() {
  return new Array(3).fill('').map(id => (
    <div className="relative" key={id}>
      <div className="flex max-h-[500px] min-h-[400px] flex-col items-center justify-end rounded-[40px] bg-gradient-to-t from-[#0170DC] to-[#6191BC] p-4 transition-all duration-150 ease-in-out hover:outline hover:outline-4 hover:outline-white">
        <div className="mb-4">
          <Skeleton className="h-48 w-48" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-[110px] flex-col items-center justify-center gap-2">
            <Skeleton className="flex h-[50px] w-[250px] md:items-center" />
            <Skeleton className="h-[20px] w-[250px]" />
          </div>
          <CardContent className="hidden md:block">
            <Skeleton className="h-[100px] w-[250px]" />
          </CardContent>
        </div>
      </div>
    </div>
  ));
}
