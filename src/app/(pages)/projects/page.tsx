import React from 'react';
import CurrentProjects from './_components/CurrentProjects';
import PastProjects from './_components/PastProjects';
import { getProjects, isCurrentProject } from '@/lib/notion/projects';

export default async function Projects() {
  const res = await getProjects();
  const currentProjects = res.filter(project => isCurrentProject(project));
  const pastProjects = res.filter(project => !isCurrentProject(project));

  return (
    <div>
      <CurrentProjects projects={currentProjects} />
      <PastProjects projects={pastProjects} />
    </div>
  );
}
