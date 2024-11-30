import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import button from '../../_assets/button.svg';
import heroBlockLarge from '../../_assets/mobile/heroBlockLarge.svg';

export default function HeroBlockMobile() {
  return (
    <div className=" bg-[#0A1E3A] h-fit overflow-hidden relative pt-8">
      <div className="flex items-center w-full h-min container">
        <div className="flex flex-col items-center justify-center">
          <div className="text-white items-center h-min">
            <h1 className="text-5xl font-bold">Carleton Blueprint</h1>
            <h2 className="text-2xl pt-4 mb-6">Tech for social good.</h2>
            <Link
              href={'https://discord.com/invite/7gkkW5nJPW'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit mb-[-10px]"
            >
              <button className="self-start text-white font-bold text-2xl px-5 py-2 w-[150px] rounded-full bg-blueprint hover:bg-blueprint-300">
                Join Us
              </button>
            </Link>
            <Image src={button} alt="Join Us" />
          </div>
        </div>
      </div>
      <Image src={heroBlockLarge} alt="heroBlock" className="block w-[100vw] h-auto object-cover mt-6" />
    </div>
  );
}
