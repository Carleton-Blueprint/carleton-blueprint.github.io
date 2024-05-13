import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import CIWHV from "../_assets/CIWHV_logo_square.png";

export default function CurrentProjects() {
  const res = [
    {
      title: "CIWHV",
      description: "Workplace Stop",
      content:
        "We are developing a web platform for called Workplace Stop, a toolkit for workers in Canada to navigate the various systems when experiencing bullying, harassment, or systemic or psychological harm.",
      image: CIWHV,
      footer: "Project 1 Footer",
    },
    {
      title: "Beneficent",
      description: "Interest-Free Loan Tracker",
      content:
        "We developed a web application that allows Beneficent to better track their interest-free loan lending program.",
      image: CIWHV,
      footer: "Project 2 Footer",
    },
    {
      title: "Allo Canada",
      description: "Settlement and Integration Services",
      content:
        "We are developing a web application that centralizes services which newcomers often need to access throughout their settlement and integration journeys.",
      image: CIWHV,
      footer: "Project 3 Footer",
    },
    {
      title: "Urban Minds",
      description: "Youth Empowerment Platform",
      content:
        "We are developing a web application that allows them to empower youth to take on more city-building related projects in their community.",
      image: CIWHV,
      footer: "Project 4 Footer",
    },
    {
      title: "Project 5",
      description: "Project 5 Description",
      content: "Project 5 Content",
      image: CIWHV,
      footer: "Project 5 Footer",
    },
  ];
  return (
    <div className="flex items-center flex-col m-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Current Projects</h1>
      <Tabs defaultValue={res[0].title} className="">
        <TabsList className="bg-blueprint-300 text-white">
          {res.map((data) => (
            <TabsTrigger key={uuidv4()} className="px-10" value={data.title}>
              {data.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="h-64 flex">
          {res.map((data) => (
            <TabsContent key={uuidv4()} value={data.title} className="">
              <ProjectCard data={data} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
      {/* <Carousel>
        <CarouselContent className="w-2/3 justify-center">
          {res.map((data) => (
            <CarouselItem key={uuidv4()}>
              <ProjectCard data={data} />
            </CarouselItem>
          ))}
          <CarouselItem key={uuidv4()}>
            <ProjectCard data={res[0]} />
          </CarouselItem>
          <CarouselItem key={uuidv4()}>
            <ProjectCard data={res[0]} />
          </CarouselItem>
          <CarouselItem key={uuidv4()}>
            <ProjectCard data={res[0]} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
}
