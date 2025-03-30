import { v4 as uuidv4 } from 'uuid';
import PastProjectCard from './PastProjectCard';
import { getProjects, isCurrentProject } from '@/lib/notion/projects';
// import BlockContainer from '@/components/BlockContainer';

export default async function PastProjects() {
  const res = await getProjects();
  const projects = res.filter(project => !isCurrentProject(project));
  return projects.map(project => <PastProjectCard key={uuidv4()} data={project} />);
}
