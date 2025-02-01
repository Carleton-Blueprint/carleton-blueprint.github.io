'use client';
import { IoLogoGithub } from 'react-icons/io';
import projectLogo from '../_assets/projectLogo.svg';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

type HomeProjectCardProps = {
  data: ProjectDataType;
  mobile?: boolean;
};

export default function HomeProjectCard({ data, mobile = false }: HomeProjectCardProps) {
  if (mobile) {
    return (
      <div className="relative flex items-center justify-end">
        <CldImage
          src={data.logoUrl != '' ? (data.logoUrl as string) : projectLogo}
          alt={`logo of ${data.companyName}`}
          width={75}
          height={75}
          className="absolute mr-6 rounded-[40px]"
        />
        <div className="group relative h-24 w-full min-w-fit rounded-[35px] bg-gradient-to-t from-blueprint from-10% to-blueprint/15 to-85% px-6">
          <h2 className="absolute bottom-2 line-clamp-1 w-11/12 text-3xl font-semibold text-white">
            {data.companyName}
          </h2>
        </div>
        <Link href={'/projects/' + data.slug} className="absolute h-full w-full" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <CldImage
        src={data.logoUrl != '' ? (data.logoUrl as string) : projectLogo}
        alt={`logo of ${data.companyName}`}
        width={320}
        height={320}
        className="absolute rounded-[40px] md:h-80 md:w-80 lg:h-72 lg:w-72"
      />
      <div className="group relative h-80 w-80 min-w-fit rounded-[35px] bg-gradient-to-t from-blueprint/70 from-25% to-blueprint/15 to-65% md:h-80 md:w-80 lg:h-72 lg:w-72">
        <span className="group:transition absolute inset-x-0 bottom-0 translate-y-10 px-5 pb-10 text-center text-white duration-300 ease-in-out group-hover:translate-y-0">
          <h2 className="line-clamp-2 text-3xl font-semibold">{data.companyName}</h2>
          <p className="group:transition line-clamp-1 h-8 text-lg opacity-0 duration-300 ease-in-out group-hover:opacity-100">
            {data.productName}
          </p>
        </span>
        <Link href={'/projects/' + data.slug} className="absolute h-full w-full" />
        <Link href={data.externalUrl || ''} className="absolute right-2 top-2">
          <div>
            <IoLogoGithub className="transition-color h-20 w-20 rounded-full bg-blueprint-50 text-blueprint opacity-0 duration-300 ease-in-out hover:text-blueprint-300 group-hover:opacity-100" />
          </div>
        </Link>
      </div>
    </div>
  );
}
