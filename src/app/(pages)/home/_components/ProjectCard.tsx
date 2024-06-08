"use client";
import { IoLogoGithub } from "react-icons/io";
import projectLogo from "../_assets/projectLogo.svg";
import { ProjectDataType } from "@/lib/notion/projects";
import { CldImage } from "next-cloudinary";

export default function HomeProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="w-min">
      <CldImage
        src={data.logoUrl != "" ? (data.logoUrl as string) : projectLogo}
        alt="project image"
        width={288}
        height={288}
        className="absolute md:w-96 md:h-96"
      />
      <div className="group w-72 h-72 md:w-96 md:h-96 relative bg-gradient-to-t from-blueprint/70 hover:from-blueprint/100 to-blueprint/45 hover:to-blueprint/60 from-25% to-75% transition-all ease-in-out duration-300 rounded-[35px]">
        <div className="absolute top-2 right-2">
          <IoLogoGithub className="opacity-0 group-hover:opacity-100 w-20 h-20 transition-color duration-300 ease-in-out hover:text-slate-300 text-white" />
        </div>
        <div className="absolute inset-x-0 bottom-0 text-center text-white h-40 overflow-hidden p-4">
          <h2 className="text-3xl font-bold">{data.companyName}</h2>
          <p className="text-xl opacity-0 group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 group:transition duration-300 ease-in-out">
            {data.productName}
          </p>
        </div>
      </div>
    </div>
  );
}
