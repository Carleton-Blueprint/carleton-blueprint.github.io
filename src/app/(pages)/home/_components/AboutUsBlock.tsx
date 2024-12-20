import Image from 'next/image';
import image from '../_assets/mission.svg';
import BlockContainer from '@/components/BlockContainer';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';

export default function AboutUsBlock() {
  return (
    <BlockContainer flip="light-blue" roundedCorners="bottom">
      <div className="flex flex-row">
        <div className="md:w-2/3 text-2xl space-y-8">
          <h1 className="text-blueprint font-bold text-4xl md:text-5xl">Our Mission</h1>
          <p>
            Started at UC Berkeley, Blueprint strives to make technology more accessible and useful for those who create
            communities and promote public welfare. This chapter at Carleton University is no different.
          </p>
          <Link
            href="https://calblueprint.org/chapters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blueprint group font-bold flex flex-row w-fit items-center text-sm md:text-2xl"
          >
            <p>Check out our other Blueprint chapters</p>
            <MdDoubleArrow className="ml-2 group-hover:ml-4 transition-spacing ease-in-out" />
          </Link>
        </div>
        <div className="hidden md:flex w-1/3 justify-end">
          <Image src={image} alt="decorative image" className="flex w-[300px]" />
        </div>
      </div>
    </BlockContainer>
  );
}
