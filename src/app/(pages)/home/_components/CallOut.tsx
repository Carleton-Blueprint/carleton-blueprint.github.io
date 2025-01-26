import React from 'react';
import Image from 'next/image';
import callOutIcon from '../_assets/callout.svg';
import RichText from '@/components/RichText';
import { AnnouncementDataType } from '@/lib/notion/announcements';

export default function CallOut({
  text,
  toggleVisibility,
}: {
  text: AnnouncementDataType;
  toggleVisibility: () => void;
}) {
  return (
    <div className="fixed bottom-10 z-50 h-16 md:left-4 md:top-28">
      <div className="border-r-md relative flex max-w-md rounded-md border-2 border-[#0A1E3A] bg-white p-2 pr-4 text-gray-900 shadow-lg transition-shadow hover:shadow-xl">
        <div className="flex items-center space-x-4">
          <Image src={callOutIcon} alt="Call Out Icon" width={50} height={50} className="absolute" />
          <p className="text-md line-clamp-3 pl-[50px] pr-[10px]">
            <RichText className="" text={text.callout} />
          </p>
        </div>
        <button onClick={toggleVisibility} className="text-gray-600 hover:text-gray-900">
          ✕
        </button>
      </div>
    </div>
  );
}
