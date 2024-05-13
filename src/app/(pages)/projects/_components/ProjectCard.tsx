import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type ProjectCardDataType = {
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string | StaticImageData;
};

export default function ProjectCard({
  data,
  grid = false,
}: {
  data: ProjectCardDataType;
  grid?: boolean;
}) {

  return (
    <Card
      className={`flex justify-center items-center ${grid ? 'w-[800px]' : 'w-[1000px]'}`}
    >
      <Image
        src={data.image}
        alt={data.title}
        width={250}
        height={250}
        className={`hidden md:block ${grid ? 'h-[200px]': 'h-[300px]'} w-auto mx-8`}
      />

      <div>
        <CardHeader>
          <CardTitle className={`${grid ? "text-2xl" : "text-3xl"}`}>{data.title}</CardTitle>
          <CardDescription className={`${grid ? "text-sm" : "text-lg"}`}>
            {data.description}
          </CardDescription>
        </CardHeader>
        <CardContent className={`h-28 ${grid ? "overflow-hidden text-md" : "text-lg"} mb-5`}>
          <p>{data.content}</p>
        </CardContent>
        <CardFooter>
          <p>{data.footer}</p>
        </CardFooter>
      </div>
    </Card>
  );
}
