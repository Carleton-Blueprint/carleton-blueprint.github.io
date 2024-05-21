import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "@/lib/contentful";

export default async function CurrentProjects() {
  const res = await fetchProjects(0);

  return (
    <div className="flex items-center flex-col my-16 mb-24">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
        Current Projects
      </h1>
      <Tabs
        defaultValue={res[0].companyName}
        className="hidden md:flex flex-col"
      >
        <TabsList className="bg-blueprint-400 text-white mx-auto w-fit mb-5">
          {res.map((data) => (
            <TabsTrigger
              key={uuidv4()}
              className="px-10 hover:bg-blueprint-300 ease-in-out transition-all duration-500"
              value={data.companyName}
            >
              {data.companyName}
            </TabsTrigger>
          ))}
        </TabsList>

        {res.map((data) => (
          <TabsContent key={uuidv4()} value={data.companyName} className="">
            <ProjectCard data={data} />
          </TabsContent>
        ))}
      </Tabs>
      <div className="md:hidden flex flex-col items-center space-y-5">
        {res.map((data) => (
          <ProjectCard key={uuidv4()} data={data} />
        ))}
      </div>
    </div>
  );
}
