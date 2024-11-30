import BlockContainer from '@/components/BlockContainer';
import ProjectCard from './../ProjectCard';
import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';
import { getFeaturedProjects } from '@/lib/notion/projects';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default async function ProjectsBlockMobile() {
  const featuredProjects = await getFeaturedProjects();
  return (
    <BlockContainer title="Projects">
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
    </BlockContainer>
  );
}
