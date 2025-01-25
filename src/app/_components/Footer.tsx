import { PageDataType } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import logo from '@/app/_assets/blueprint_banner_negative.svg';

export default async function Footer({ pages }: { pages: PageDataType[] }) {
  return (
    <div className="flex bg-blueprint pb-10 pt-8 text-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-3 text-lg">
            {pages.map(page => (
              <Link key={uuidv4()} href={page.href} className="hover:text-blueprint-100">
                {page.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-end justify-center text-[12px] md:text-[14px]">
            <Link href="/" className="flex flex-row-reverse pb-3">
              <Image
                src={logo}
                alt="blueprint logo"
                className="w-[155px] rounded-md transition duration-300 ease-in-out hover:shadow-xl md:w-[200px]"
              />
            </Link>
            <div className="w-2/3 text-end">Made with ❤️ by</div>
            <div className="w-2/3 text-right md:w-full">
              Blueprint @ Carleton University
              <br /> Ottawa, Ontario, Canada
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
