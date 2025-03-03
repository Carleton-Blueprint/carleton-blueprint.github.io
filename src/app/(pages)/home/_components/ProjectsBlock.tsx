import BlockContainer from '@/components/BlockContainer';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';
import { getFeaturedProjects } from '@/lib/notion/projects';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

export default async function ProjectsBlock() {
  const featuredProjects = await getFeaturedProjects();
  return (
    <BlockContainer title="Projects" padding="less">
      <div className="-mx-8 px-4 md:mx-auto">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="hidden md:block"
        >
          <CarouselContent>
            {featuredProjects.map(project => (
              <CarouselItem key={project.pageId} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard data={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
        <div className="space-y-8 md:hidden">
          {featuredProjects.map(project => (
            <ProjectCard key={project.pageId} data={project} mobile />
          ))}
        </div>
      </div>
      <div className="flex text-2xl">
        <Link
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-fit flex-row items-center font-bold text-blueprint"
        >
          <p>Check out all projects</p>
          <MdDoubleArrow className="ml-2 transition-spacing ease-in-out group-hover:ml-4" />
        </Link>
      </div>
    </BlockContainer>
  );
}
