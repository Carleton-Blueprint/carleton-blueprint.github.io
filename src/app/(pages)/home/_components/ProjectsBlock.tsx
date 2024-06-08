import BlockContainer from "./BlockContainer";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { getFeaturedProjects } from "@/lib/notion/projects";

export default async function ProjectsBlock() {
  const featuredProjects = await getFeaturedProjects();
  return (
    <BlockContainer title="Current Projects" centered>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.pageId} data={project} />
        ))}
      </div>
      <div className="w-full text-2xl flex justify-center md:justify-start">
        <Link
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blueprint group font-bold flex flex-row w-fit items-center"
        >
          <p>Check out all projects</p>
          <MdDoubleArrow className="ml-2 group-hover:ml-4 transition-spacing ease-in-out" />
        </Link>
      </div>
    </BlockContainer>
  );
}
