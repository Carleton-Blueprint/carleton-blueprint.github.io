import Image from 'next/image';
import image from '../_assets/mission.svg';
import BlockContainer from '@/components/BlockContainer';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';

export default function AboutUsBlock() {
  return (
    <>
      <BlockContainer bg="light-blue" roundedCorners="bottom" padding="less">
        <div className="flex flex-row">
          <div className="space-y-8 text-2xl md:w-2/3">
            <h1 className="text-5xl font-bold text-blueprint md:text-6xl">Our Mission</h1>
            <p className="text-lg md:text-2xl">
              Started at UC Berkeley, Blueprint strives to make technology more accessible and useful for those who
              create communities and promote public welfare. This chapter at Carleton University is no different.
            </p>
            <Link
              href="https://calblueprint.org/chapters"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden w-fit flex-row items-center text-sm font-bold text-blueprint md:flex md:text-2xl"
            >
              <p>Check out our other Blueprint chapters</p>
              <MdDoubleArrow className="ml-2 transition-spacing ease-in-out group-hover:ml-4" />
            </Link>
          </div>
          <div className="hidden w-1/3 justify-end md:flex">
            <Image src={image} alt="decorative image" className="flex w-[300px]" />
          </div>
        </div>
      </BlockContainer>
      <div className="container relative mt-6 flex h-24 w-full items-center md:hidden">
        <Link
          href="https://calblueprint.org/chapters"
          target="_blank"
          rel="noopener noreferrer"
          className="w-2/3 text-2xl font-semibold text-blueprint"
        >
          <p className="">Other Blueprint chapters &gt;</p>
        </Link>
        <div className="-ml-6 -mr-6 w-3/5">
          <Image src={image} alt="decorative image" className="" />
        </div>
      </div>
    </>
  );
}
