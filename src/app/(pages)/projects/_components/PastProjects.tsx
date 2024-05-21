import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import { ProjectCardDataType, fetchProjects } from "@/lib/contentful";

export default async function PastProjects() {
  const res = await fetchProjects(1);
  return (
    <div className="flex items-center flex-col my-16">
      <h1 className="text-4xl font-bold mb-8">Past Projects</h1>
      <div className="flex flex-col items-center space-y-5">
        {res.map((data) => (
          <ProjectCard key={uuidv4()} data={data as ProjectCardDataType} grid />
        ))}
      </div>
    </div>
  );
}
