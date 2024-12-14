'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import BlockContainer from './BlockContainer';
import { BsCalendar3 } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { MdOutlineUpcoming } from 'react-icons/md';

export type EventDetailsType = {
  date: string;
  venue: string;
  status: string;
};

type PropsType = {
  recordMap: ExtendedRecordMap;
  title: string;
  eventDetails?: EventDetailsType;
};

export default function NotionPage({ recordMap, title, eventDetails }: PropsType) {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 py-12">
      <h1 className="mb-10 text-center text-5xl font-bold text-blueprint">{title}</h1>

      <BlockContainer roundedCorners centered>
        {eventDetails && (
          <div className="w-full px-[96px]">
            <div className="mb-10">
              <h1 className="mb-5 text-3xl font-semibold text-gray-800">Event Details</h1>
              <div className="grid w-[500px] grid-cols-2 items-center gap-2">
                <p className="text-md flex items-center gap-1 text-gray-800">
                  <BsCalendar3 /> Date
                </p>
                <p className="text-md text-gray-800">{eventDetails.date}</p>
                <p className="text-md flex items-center gap-1 text-gray-800">
                  <MdOutlineLocationCity /> Venue
                </p>
                <p className="text-md text-gray-800">{eventDetails.venue}</p>
                <p className="text-md flex items-center gap-1 text-gray-800">
                  <MdOutlineUpcoming /> Status
                </p>
                {eventDetails.status === 'Scheduled' ? (
                  <span className="w-fit rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                    Upcoming
                  </span>
                ) : (
                  <span className="w-fit rounded-full bg-gray-400 px-3 py-1 text-xs font-bold text-white">Passed</span>
                )}
              </div>
            </div>
          </div>
        )}
        <NotionRenderer
          recordMap={recordMap}
          // fullPage={true}
          // darkMode={false}
          components={{
            nextImage: Image,
            nextLink: Link,
          }}
        />
      </BlockContainer>
    </div>
  );
}
