import Image from 'next/image';
import image from '../_assets/mission.svg';
import BlockContainer from '@/components/BlockContainer';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';

export default function AboutUsBlock() {
  return (
    <BlockContainer flip="light-blue" roundedCorners="bottom">
      <div className="flex flex-row">
        <div className="space-y-8 text-2xl md:w-2/3">
          <h1 className="text-4xl font-bold text-blueprint md:text-5xl">Our Mission</h1>
          <p>
            Started at UC Berkeley, Blueprint strives to make technology more accessible and useful for those who create
            communities and promote public welfare. This chapter at Carleton University is no different.
          </p>
          <Link
            href="https://calblueprint.org/chapters"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit flex-row items-center text-sm font-bold text-blueprint md:text-2xl"
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
  );
}
