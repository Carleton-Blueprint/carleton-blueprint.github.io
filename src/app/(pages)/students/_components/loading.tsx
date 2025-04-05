import BlockContainer from '@/components/BlockContainer';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      <BlockContainer shadow roundedCorners={true} padding="less" gap="less" titleSize="sm">
        <Skeleton className="h-[50px] w-[400px]" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {new Array(12).fill('').map(id => (
            <TeamProfileLoading key={id} />
          ))}
        </div>
      </BlockContainer>
      <BlockContainer shadow roundedCorners={true} padding="less" gap="less" titleSize="sm">
        <Skeleton className="h-[50px] w-[400px]" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {new Array(12).fill('').map(id => (
            <TeamProfileLoading key={id} />
          ))}
        </div>
      </BlockContainer>
    </>
  );
}

function TeamProfileLoading() {
  return (
    <div className={`flex flex-col items-center space-y-1 rounded-2xl py-3 text-center`}>
      <div className="mb-2 flex h-32 w-32 items-center overflow-hidden rounded-full border-2 border-white">
        <Skeleton className="h-[128px] w-[128px]" />
      </div>
      <Skeleton className="h-[20px] w-32" />
      <Skeleton className="h-[20px] w-32" />
    </div>
  );
}
