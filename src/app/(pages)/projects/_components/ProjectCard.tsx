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
      className={`flex flex-row-reverse justify-center ${
        grid ? "w-10/12 my-4" : "h-64 w-8/12"
      }`}
    >
      <div className={`${grid ? "w-7/12" : ""}`}>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription className={`${grid ? "" : ""}`}>
            {data.description}
          </CardDescription>
        </CardHeader>
        <CardContent className={`h-28 ${grid ? "overflow-hidden" : ""}`}>
          <p>{data.content}</p>
        </CardContent>
        <CardFooter>
          <p>{data.footer}</p>
        </CardFooter>
      </div>
      <Image
        src={data.image}
        alt={data.title}
        width={250}
        height={250}
        className="hidden md:block"
      />
    </Card>
  );
}
