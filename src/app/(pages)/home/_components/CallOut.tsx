import React from 'react';
import Image from 'next/image';
import callOutIcon from '../_assets/callout.svg';
import RichText from '@/components/RichText';

export default function CallOut({ toggleVisibility }: { toggleVisibility: () => void }) {
  const text = [
    {
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'Alert text. This can be a small message that can go on three lines and ',
      href: null,
    },
    {
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'include links.',
      href: 'https://www.google.com',
    },
  ];

  return (
    <div className="bottom-10 md:top-28 md:left-4 z-50 h-16 fixed">
      <div className="bg-white text-gray-900 rounded-md p-2 shadow-lg max-w-md hover:shadow-xl transition-shadow relative flex pr-4  border-blueprint border-2 border-r-md">
        <div className="flex items-center space-x-4">
          <Image src={callOutIcon} alt="Call Out Icon" width={50} height={50} className="absolute" />
          <p className="pl-[50px] pr-[10px] text-md line-clamp-3">
            <RichText text={text} />
          </p>
        </div>
        <button onClick={toggleVisibility} className="text-gray-600 hover:text-gray-900">
          ✕
        </button>
      </div>
    </div>
  );
}
