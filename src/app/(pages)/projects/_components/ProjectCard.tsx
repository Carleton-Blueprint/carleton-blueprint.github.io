"use client";

import LinkButton from "@/components/LinkButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { ProjectCardDataType } from "@/lib/contentful";

export default function ProjectCard({
  data,
  grid = false,
}: {
  data: ProjectCardDataType;
  grid?: boolean;
}) {
  const imageLoader = ({ src }: { src: string }) => {
    return `https:${src}`;
  };
  return (
    <Card
      className={`flex justify-center items-center w-[300px] ${
        grid ? "md:w-[800px]" : "md:w-[1000px]"
      }`}
    >
      <Image
        loader={imageLoader}
        src={data.logo}
        alt={data.companyName}
        width={250}
        height={250}
        className={`hidden md:block ${
          grid ? "h-[200px]" : "h-[300px]"
        } w-auto mx-8`}
      />

      <div>
        <CardHeader>
          <CardTitle className={`${grid ? "text-2xl" : "md:text-3xl"}`}>
            {data.companyName}
          </CardTitle>
          <CardDescription className={`${grid ? "text-sm" : "md:text-lg"}`}>
            {data.product}
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`md:h-28 ${
            grid ? "overflow-hidden text-md" : "md:text-lg"
          } mb-5`}
        >
          <p>{data.description}</p>
        </CardContent>
        <CardFooter
          className={`space-x-4 text-xs ${grid ? "md:text-lg" : "md:text-xl"}`}
        >
          <LinkButton href={data.link} newTab={true}>
            Read More
          </LinkButton>
          <LinkButton href={data.link} newTab={true}>
            View Repository
          </LinkButton>
        </CardFooter>
      </div>
    </Card>
  );
}
