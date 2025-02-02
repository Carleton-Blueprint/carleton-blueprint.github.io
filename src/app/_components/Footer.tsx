import { PageDataType } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import logo from '@/app/_assets/blueprint_banner_negative.svg';

const FOOTER_BREAKPOINT = 'md';

export default async function Footer({ pages }: { pages: PageDataType[] }) {
  return (
    <div className={`flex bg-blueprint p-6 text-white md:p-0 md:pb-10 md:pt-8`}>
      <div className={`w-full md:container`}>
        <div className="flex space-x-6">
          <div className={`flex w-1/3 flex-col justify-center space-y-1 text-2xl md:space-y-3`}>
            {pages.map(page => (
              <Link key={uuidv4()} href={page.href} className="hover:text-blueprint-100">
                {page.name}
              </Link>
            ))}
          </div>

          <div className={`flex w-2/3 flex-col justify-center text-[14px] md:text-[18px]`}>
            <Link href="/" className={`flex pb-2 md:flex-row-reverse`}>
              <Image
                src={logo}
                alt="blueprint logo"
                className={`w-[300px] rounded-md transition duration-300 ease-in-out hover:shadow-xl md:w-[250px]`}
              />
            </Link>
            <div className={`md:w-full md:text-end`}>Made with ❤️ by Carleton</div>
            <div className={`md:w-full md:text-end`}>Blueprint @ Carleton University</div>
            <div className={`mt-1 text-[16px] md:text-end md:text-[20px]`}>Ottawa, Ontario, Canada</div>
          </div>
        </div>
      </div>
    </div>
  );
}
