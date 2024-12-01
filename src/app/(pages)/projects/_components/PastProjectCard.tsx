'use client';
import React from 'react';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import { CardContent, CardTitle } from '@/components/ui/card';
import LinkButton from '@/components/LinkButton';
import { FaGithub } from 'react-icons/fa';

export default function PastProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="relative">
      <a href={'/projects/' + data.pageId}>
        <div className="flex flex-col justify-end items-center min-h-[400px] max-h-[500px] p-4 rounded-[40px] hover:outline hover:outline-4 hover:outline-white transition-all ease-in-out duration-150 bg-gradient-to-t from-[#0170DC] to-[#6191BC]">
          {data.logoUrl && (
            <div className="mb-4">
              <CldImage
                src={data.logoUrl}
                alt={data.companyName}
                width={250}
                height={250}
                className="w-48 h-48 object-fill"
              />
            </div>
          )}
          <div className="flex flex-col items-center text-center gap-4">
            <CardTitle className="flex md:items-center text-4xl text-white md:h-[80px]">{data.companyName}</CardTitle>
            <CardContent className="text-2xl md:text-base text-white">
              <p className="hidden md:line-clamp-4 h-[100px]">{data.description}</p>
              <p className="block md:hidden">{data.productName}</p>
            </CardContent>
          </div>
        </div>
      </a>
      <LinkButton href={data.gitHubUrl ?? '/projects'} newTab={true} variant="icon" className="absolute top-0 right-0">
        <FaGithub className="h-[80px] w-[80px] md:h-12 md:w-12 text-white" />{' '}
      </LinkButton>
    </div>
  );
}
