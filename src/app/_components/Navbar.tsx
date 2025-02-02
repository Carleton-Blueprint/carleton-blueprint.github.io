import React from 'react';
import Image from 'next/image';
import logo from '@/app/_assets/blueprint_banner_negative.svg';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import NavbarMobile from './NavbarMobile';
import NavbarLinkItem from './NavbarLinkItem';
import { PageDataType } from '@/lib/types';

function MainLink() {
  return (
    <Link href="/">
      <div className={`relative w-[200px] pt-2 md:w-[150px] md:pt-0`}>
        <Image src={logo} alt="blueprint logo" />
      </div>
    </Link>
  );
}

export default async function Navbar({ pages }: { pages: PageDataType[] }) {
  return (
    <div className="sticky top-0 z-[999] h-[80px]">
      <div className="flex h-[80px] justify-center bg-blueprint">
        <div className={`mx-4 flex w-full flex-row items-center justify-between md:container`}>
          <MainLink />

          <div className={`hidden flex-row space-x-12 md:flex`}>
            {pages.map(page => (
              <NavbarLinkItem key={uuidv4()} page={page} />
            ))}
          </div>

          <NavbarMobile data={pages} />
        </div>
      </div>

      {/* Blank space hidden under navbar */}
    </div>
  );
}
