import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectCardSkeleton() {
  return [1, 2].map(() => (
    <>
      <Card className="flex w-full items-center justify-center rounded-[40px] shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)] md:h-auto">
        <div className="ml-8 hidden h-[200px] w-[250px] md:block">
          <Skeleton className="h-full w-full" />
        </div>

        <div className="flex min-h-[320px] w-11/12 flex-col justify-end md:min-h-full md:justify-between">
          <CardHeader className="flex flex-col items-start justify-between md:block md:items-center">
            <CardTitle className="">
              <Skeleton className="h-[50px] w-[500px]" />
            </CardTitle>
            <div className="flex flex-row md:items-center md:pt-0">
              <CardDescription className="pt-2 md:pt-0">
                <Skeleton className="h-[25px] w-[350px]" />
              </CardDescription>
              <div className="max-h-[120px] max-w-[120px] md:hidden">
                <Skeleton className="h-full w-full" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-md mb-5 hidden overflow-hidden md:block md:h-24">
            <Skeleton className="h-32 w-full" />
          </CardContent>
          <CardFooter className="justify-end space-x-4 pb-4 text-xs md:justify-start md:pb-6">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </CardFooter>
        </div>
      </Card>
    </>
  ));
}

export function PastProjectCardSkeleton() {}
