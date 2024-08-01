'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import BlockContainer from './BlockContainer';

type PropsType = {
  recordMap: ExtendedRecordMap;
};

export default function NotionPage({ recordMap }: PropsType) {
  return (
    <div className='flex flex-col items-center justify-center py-12 bg-blue-50'>
      <h1 className='text-5xl text-blueprint font-bold mb-10'>{'Social Trivia Night'}</h1>

      {/* <div className='container py-10 bg-white rounded-2xl'> */}
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
      {/* </div> */}
    </div>
  );
}
