import { v4 as uuidv4 } from 'uuid';
import PastProjectCard from './PastProjectCard';
import { ProjectDataType } from '@/lib/notion/projects';
import BlockContainer from '@/components/BlockContainer';

export default async function PastProjects({ projects }: { projects: ProjectDataType[] }) {
  return (
    <BlockContainer title="Past Projects" roundedCorners="top" bg="dark-blue" padding="less" gap="less">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <PastProjectCard key={uuidv4()} data={project} />
        ))}
      </div>
    </BlockContainer>
  );
}
