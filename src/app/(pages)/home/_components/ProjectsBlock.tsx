import BlockContainer from "./BlockContainer";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

export default function ProjectsBlock() {
  return (
    <BlockContainer title="Current Projects" centered>
      <div className="flex flex-row space-x-12">
        <ProjectCard
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at velit eget nunc ultrices fermentum. Sed nec."
        />
        <ProjectCard
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at velit eget nunc ultrices fermentum. Sed nec."
        />
        <ProjectCard
          title="Project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at velit eget nunc ultrices fermentum. Sed nec."
        />
      </div>
      <div className="w-full text-2xl">
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
