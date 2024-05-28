import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex items-center flex-col my-16 mb-24">
      <Skeleton className="w-[600px] h-[70px] rounded-full bg-slate-300" />
    </div>
  );
}
