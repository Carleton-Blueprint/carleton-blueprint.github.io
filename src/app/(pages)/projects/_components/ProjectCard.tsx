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
import { ProjectDataType } from "@/lib/notion/projects";
import { CldImage } from "next-cloudinary";

type ProjectCardPropType = {
  data: ProjectDataType;
  grid?: boolean;
};

export default function ProjectCard({
  data,
  grid = false,
}: ProjectCardPropType) {
  return (
    <Card
      className={`flex justify-center items-center w-[300px] rounded-[30px] md:w-10/12 `}
    >
      {data.logoUrl && (
        <CldImage
          src={data.logoUrl}
          alt={data.companyName}
          width={250}
          height={250}
          className={`hidden md:block ${
            grid ? "h-[200px]" : "h-[300px]"
          } w-auto mx-8`}
        />
      )}

      <div>
        <CardHeader>
          <CardTitle className={`${grid ? "text-2xl" : "md:text-3xl"}`}>
            {data.companyName}
          </CardTitle>
          <CardDescription className={`${grid ? "text-sm" : "md:text-lg"}`}>
            {data.productName}
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
          {data.pageId && (
            <LinkButton href={"/projects/" + data.pageId} newTab={true}>
              Read More
            </LinkButton>
          )}

          {data.externalUrl && (
            <LinkButton href={data.externalUrl} newTab={true} variant="ghost">
              View Project
            </LinkButton>
          )}

          {data.gitHubUrl && (
            <LinkButton href={data.gitHubUrl} newTab={true} variant="ghost">
              GitHub
            </LinkButton>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
