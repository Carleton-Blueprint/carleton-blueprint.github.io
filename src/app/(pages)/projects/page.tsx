import React from 'react';
import CurrentProjects from './_components/CurrentProjects';
import PastProjects from './_components/PastProjects';
import { getProjects, isCurrentProject } from '@/lib/notion/projects';
import Image from 'next/image';
import mission from './_assets/mission.svg';
import culture from './_assets/culture.svg';
import innovate from './_assets/innovate.svg';
import personal from './_assets/personal.svg';
import humble from './_assets/humble.svg';

export default async function Projects() {
  const res = await getProjects();
  const currentProjects = res.filter((project) => isCurrentProject(project));
  const pastProjects = res.filter((project) => !isCurrentProject(project));

  return (
    <div className="space-y-6">
      <CurrentProjects projects={currentProjects} />
      <div className="flex justify-center">
        <Image
          src={mission}
          alt="line"
          width={150}
          height={150}
          className="mr-12"
        />
        <Image src={personal} alt="line" width={150} height={150} />
        <Image src={culture} alt="line" width={150} height={150} />
        <Image src={humble} alt="line" width={150} height={150} />
        <Image src={innovate} alt="line" width={150} height={150} />
      </div>
      <PastProjects projects={pastProjects} />
    </div>
  );
}
