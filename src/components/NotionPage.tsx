'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import BlockContainer from './BlockContainer';

type PropsType = {
  recordMap: ExtendedRecordMap;
  title: string;
};

export default function NotionPage({ recordMap, title }: PropsType) {
  return (
    <div className='flex flex-col items-center justify-center py-12 bg-blue-50'>
      <h1 className='text-5xl text-blueprint font-bold mb-10'>{title}</h1>

      <BlockContainer roundedCorners centered>
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
