import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import BlockContainer from '@/components/BlockContainer';
import { v4 as uuidv4 } from 'uuid';
import mission from '../_assets/ourValues/mission.svg';
import culture from '../_assets/ourValues/culture.svg';
import innovate from '../_assets/ourValues/innovate.svg';
import personal from '../_assets/ourValues/personal.svg';
import humble from '../_assets/ourValues/humble.svg';
import { cn } from '@/lib/utils';

const values = [
  {
    title: 'Mission First.',
    description:
      'We as Blueprint members ultimately unify under one goal - achieving our mission. We place the interests of the people and partners we serve above our own. Our primary measure of success is the amount of positive impact we create through our work.',
    image: mission,
    flip: false,
  },
  {
    title: 'Cherish Culture.',
    description:
      'We as Blueprint members seek to cherish our time spent together. We develop meaningful relationships that extend well beyond the scope of the organization. We value each other as individuals and appreciate our differences.',
    image: culture,
    flip: true,
  },
  {
    title: 'Innovate.',
    description:
      'We as Blueprint members recognize that change is both inevitable and necessary. We are committed to innovate and emphasize effective solutions as needed in order to remain relevant - nothing is sacred. We welcome new ideas and diverse thinking.',
    image: innovate,
    flip: false,
  },
  {
    title: 'Personal Growth.',
    description:
      'We as Blueprint members value the academic, social, and personal growth of our peers. We constantly seek to perpetuate the cycle of learning and teaching, for our benefit and for others. We strive to offer a helping hand in times of need and push each other to succeed.',
    image: personal,
    flip: true,
  },
  {
    title: 'Stay Humble.',
    description:
      'We as Blueprint members strive to remain humble, accept our imperfections, and be receptive to feedback. We approach challenges with an open mind and remember that anyone can pursue social good, not just Blueprint.',
    image: humble,
    flip: false,
  },
];

type ValueDataType = {
  title: string;
  description: string;
  image: StaticImageData;
  flip?: boolean;
};

function Value({ data }: { data: ValueDataType }) {
  return (
    <div
      className={`${
        data.flip && 'md:flex-row-reverse md:space-x-reverse md:self-end'
      } relative -mx-[1.5rem] flex flex-col rounded-[35px] bg-white p-6 px-10 shadow-[2px_6px_4px_0_rgba(0,0,0,0.3)] md:mx-0 md:w-10/12 md:flex-row md:items-center md:space-x-20 md:p-12`}
    >
      <div className={`mb-3 text-left text-2xl font-bold text-[#3B6E9B] md:text-4xl`}>{data.title}</div>
      <div className={`${!data.flip && 'md:text-end'} text-md z-20 text-left md:z-auto md:text-lg`}>
        {data.description}
      </div>

      <div
        className={cn(
          'absolute -bottom-12 right-20 z-10 aspect-square w-[100px] transform md:bottom-auto md:right-2 md:top-1/2 md:flex md:w-[180px] md:-translate-y-1/2 md:translate-x-full md:items-center md:justify-center lg:w-[260px]',
          data.flip && 'md:-left-2 md:-translate-x-full',
        )}
      >
        <Image src={data.image} alt={data.title} fill className="object-contain" />
      </div>
    </div>
  );
}

export default function OurValuesBlock() {
  return (
    <BlockContainer title="Our Values" bg="light-blue" inner roundedCorners margin="bottom">
      <div className="-mx-[2rem] flex flex-col space-y-12 overflow-y-auto overflow-x-hidden pb-16 md:mx-0 md:overflow-visible md:py-10">
        {values.map(value => (
          <Value key={uuidv4()} data={value} />
        ))}
      </div>
    </BlockContainer>
  );
}
