import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './ProjectCard';
import { getProjects, isCurrentProject } from '@/lib/notion/projects';
// import BlockContainer from '@/components/BlockContainer';

export default async function CurrentProjects() {
  const res = await getProjects();
  const projects = res.filter(project => isCurrentProject(project));
  return projects.map(project => <ProjectCard key={uuidv4()} data={project} />);
}
