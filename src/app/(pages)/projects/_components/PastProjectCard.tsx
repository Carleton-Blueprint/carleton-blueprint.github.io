"use client";
import React from "react";
import { ProjectDataType } from "@/lib/notion/projects";
import { CldImage } from "next-cloudinary";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function PastProjectCard({ data }: { data: ProjectDataType }) {
    console.log(data);
    return (
        <div className="bg-gradient-to-t from-[#0170DC] to-[#6191BC] rounded-2xl flex flex-col justify-between h-full p-4">
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
            <div className="flex flex-col justify-between flex-grow">
                <div>
                    <CardTitle className="text-4xl text-center text-white">
                        {data.companyName}
                    </CardTitle>
                </div>
                <CardContent className="overflow-hidden text-md text-center text-white">
                    <p>{data.description}</p>
                </CardContent>
            </div>
        </div>
    );
}