import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import { getProjects, isCurrentProject } from "@/lib/notion/projects";

export default async function CurrentProjects() {
  const res = await getProjects();
  const projects = res.filter((project) => isCurrentProject(project));

  return (
    <div className="flex items-center flex-col my-16 mb-24">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Current Projects</h1>
      <Tabs defaultValue={projects[0].companyName} className="hidden md:flex flex-col">
        <TabsList className="bg-blueprint-400 text-white mx-auto w-fit mb-5">
          {projects.map((project) => (
            <TabsTrigger key={uuidv4()} className="px-10 hover:bg-blueprint-300 ease-in-out transition-all duration-500" value={project.companyName}>
              {project.companyName}
            </TabsTrigger>
          ))}
        </TabsList>

        {projects.map((project) => (
          <TabsContent key={uuidv4()} value={project.companyName} className="">
            <ProjectCard data={project} />
          </TabsContent>
        ))}
      </Tabs>
      <div className="md:hidden flex flex-col items-center space-y-5">
        {projects.map((project) => (
          <ProjectCard key={uuidv4()} data={project} />
        ))}
      </div>
    </div>
  );
}
