import Image from 'next/image';
import image from '../../_assets/mission.svg';
import BlockContainer from '@/components/BlockContainer';
import Link from 'next/link';
import { MdKeyboardArrowRight} from 'react-icons/md';


export default function AboutUsBlockMobile() {
  return (
    <div className="flex flex-col">
      <BlockContainer flip="light-blue" roundedCorners="bottom">
        <div className="flex flex-row mt-[-20px]">
          <div className="md:w-2/3 text-2xl space-y-8">
            <h1 className="text-blueprint font-bold text-5xl">Our Mission</h1>
            <p className='text-lg xs:font-normal'>
              Started at UC Berkeley, Blueprint strives to make technology more accessible and useful for those who create
              communities and promote public welfare. This chapter at Carleton University is no different.
            </p>
          </div>
          <div className="hidden md:flex w-1/3 justify-end">
            <Image src={image} alt="decorative image" className="flex w-[300px]" />
          </div>
        </div>
      </BlockContainer>
      <div className='flex flex-row mr-[120px] xs:items-end'>
        <Link
          href="https://calblueprint.org/chapters"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blueprint group font-semibold flex flex-row w-fit items-center text-2xl container mt-9 ml-9 px-0"
        >
          <p>Other Blueprint chapters</p>
        </Link>
        <div className="flex w-[170px] xs:w-1/3 absolute right-0 justify-end">
          <Image src={image} alt="decorative image" className="flex w-[300px]" />
        </div>
      </div>
    </div>
  );
}
