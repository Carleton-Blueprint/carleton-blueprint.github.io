'use client';
import React from 'react';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import { CardContent, CardTitle } from '@/components/ui/card';

export default function PastProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <a href={'/projects/' + data.slug}>
      <div className="flex max-h-[500px] flex-col rounded-[40px] bg-gradient-to-t from-[#0170DC] to-[#6191BC] p-4 outline transition-all duration-150 ease-in-out hover:outline-4 hover:outline-white">
        {data.logoUrl && (
          <div className="mb-4 flex items-center justify-center">
            <CldImage
              src={data.logoUrl}
              alt={data.companyName}
              width={250}
              height={250}
              className="h-48 w-48 object-fill"
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div>
            <CardTitle className="flex h-[80px] items-center justify-center text-center text-4xl text-white">
              {data.companyName}
            </CardTitle>
          </div>
          <CardContent className="text-md text-center text-white">
            <p className="line-clamp-4 h-[100px]">{data.description}</p>
          </CardContent>
        </div>
      </div>
    </a>
  );
}
