'use client';
import { IoLogoGithub } from 'react-icons/io';
import projectLogo from '../_assets/projectLogo.svg';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

export default function HomeProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="flex items-center justify-center">
      <CldImage
        src={data.logoUrl != '' ? (data.logoUrl as string) : projectLogo}
        alt="project image"
        width={320}
        height={320}
        className="absolute rounded-[40px] md:h-80 md:w-80 lg:h-72 lg:w-72"
      />
      <div className="group relative h-80 w-80 min-w-fit rounded-[35px] bg-gradient-to-t from-blueprint/70 from-25% to-blueprint/15 to-65% md:h-80 md:w-80 lg:h-72 lg:w-72">
        <span className="group:transition absolute inset-x-0 bottom-0 translate-y-10 px-5 pb-10 text-center text-white duration-300 ease-in-out group-hover:translate-y-0">
          <h2 className="text-3xl font-semibold line-clamp-2">{data.companyName}</h2>
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
