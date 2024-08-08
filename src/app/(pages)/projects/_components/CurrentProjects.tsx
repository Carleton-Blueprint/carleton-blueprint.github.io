import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './ProjectCard';
import { ProjectDataType } from '@/lib/notion/projects';
import BlockContainer from '../../home/_components/BlockContainer';
import { title } from 'process';

export default async function CurrentProjects({ projects }: { projects: ProjectDataType[] }) {
  return (
    <BlockContainer title='Current Projects' roundedCorners='bottom' flip='light-blue'>
      <div className='flex flex-col items-center space-y-5'>
        {projects.map(project => (
          <ProjectCard key={uuidv4()} data={project} />
        ))}
      </div>
    </BlockContainer>
  );
}
