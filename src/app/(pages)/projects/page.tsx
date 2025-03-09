import React from 'react';
import CurrentProjects from './_components/CurrentProjects';
import PastProjects from './_components/PastProjects';
import { getProjects, isCurrentProject } from '@/lib/notion/projects';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

export default async function Projects() {
  const res = await getProjects();
  const currentProjects = res.filter(project => isCurrentProject(project));
  const pastProjects = res.filter(project => !isCurrentProject(project));

  return (
    <div className="md:space-y-6">
      <CurrentProjects projects={currentProjects} />
      <PastProjects projects={pastProjects} />
    </div>
  );
}
