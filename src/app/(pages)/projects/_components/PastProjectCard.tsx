"use client";
import React from "react";
import { ProjectDataType } from "@/lib/notion/projects";
import { CldImage } from "next-cloudinary";
import { CardContent, CardTitle } from "@/components/ui/card";

export default function PastProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <a href={"/projects/" + data.pageId}>
      <div className="bg-gradient-to-t from-[#0170DC] to-[#6191BC] rounded-[40px] flex flex-col max-h-[500px] p-4 outline hover:outline-white hover:outline-4 transition-all ease-in-out duration-150">
        {data.logoUrl && (
          <div className="flex justify-center items-center mb-4">
            <CldImage
              src={data.logoUrl}
              alt={data.companyName}
              width={250}
              height={250}
              className="w-48 h-48 object-fill"
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div>
            <CardTitle className="text-4xl text-center text-white h-[80px] flex items-center justify-center">
              {data.companyName}
            </CardTitle>
          </div>
          <CardContent className="text-md text-center text-white">
            <p className="h-[100px] line-clamp-4">{data.description}</p>
          </CardContent>
        </div>
      </div>
    </a>
  );
}
