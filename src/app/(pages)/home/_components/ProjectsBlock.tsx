import BlockContainer from '@/components/BlockContainer';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';
import { getFeaturedProjects } from '@/lib/notion/projects';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default async function ProjectsBlock() {
  const featuredProjects = await getFeaturedProjects();
  return (
    <BlockContainer title="Current Projects">
      <div className="py-10 px-4">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="">
            {featuredProjects.map(project => (
              <CarouselItem key={project.pageId} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard data={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
      <div className="text-2xl flex container">
        <Link
          href="/projects"
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
