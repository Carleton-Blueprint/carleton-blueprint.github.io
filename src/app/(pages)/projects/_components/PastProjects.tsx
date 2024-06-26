import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import { ProjectDataType } from "@/lib/notion/projects";

export default async function PastProjects({
  projects,
}: {
  projects: ProjectDataType[];
}) {
  return (
    <div className="flex items-center flex-col my-16">
      <h1 className="text-4xl font-bold mb-8">Past Projects</h1>
      <div className="flex flex-col items-center space-y-5">
        {projects.map((project) => (
          <ProjectCard key={uuidv4()} data={project} grid />
        ))}
      </div>
    </div>
  );
}
