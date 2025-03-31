'use client'; // TODO: removing this throws an error. why?

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import Link from 'next/link';
import Image from 'next/image';

export default function NotionRendererClient({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      // fullPage={true}
      // darkMode={false}
      components={{
        nextImage: Image,
        nextLink: Link,
        Collection: () => <></>,
      }}
    />
  );
}
