'use client';
import { CldImage } from 'next-cloudinary';
import { EventDataType } from '@/lib/notion/events';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { AnnouncementDataType } from '@/lib/notion/announcements';

export default function EventCard({ data }: { data: EventDataType | AnnouncementDataType }) {
  let title;
  let path;
  if ('eventName' in data) {
    title = data.eventName;
    path = '/events/' + data.slug;
  } else {
    title = data.title;
    path = '/news/' + data.slug;
  }

  return (
    <div className="group">
      <Link href={path} className="relative p-1">
        <Card className="h-[23rem] md:h-[36rem] min-w-fit relative rounded-[50px] shadow-[0px_4px_4px_0_rgba(0,0,0,0.3)] overflow-hidden">
          <CldImage
            src={data.homePageURL || '/default'}
            alt={'image for ' + title}
            width={688}
            height={600}
            className="absolute w-full h-full object-cover"
          />
          <CardContent className="absolute bg-gradient-to-t from-blueprint/70 to-blueprint/15 from-25% to-65% w-full h-full rounded-[50px]">
            <span className="absolute bottom-0 left-0 px-6 pb-8 text-white translate-y-14 group-hover:translate-y-0 group:transition duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold">{title}</h2>
              <p className="h-12 opacity-0 group-hover:opacity-100 group:transition duration-300 ease-in-out line-clamp-1">
                {data.description}
              </p>
            </span>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
