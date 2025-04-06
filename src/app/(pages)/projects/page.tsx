import React, { Suspense } from 'react';
import CurrentProjects from './_components/CurrentProjects';
import PastProjects from './_components/PastProjects';
// import { getProjects, isCurrentProject } from '@/lib/notion/projects';
import BlockContainer from '@/components/BlockContainer';
import ProjectCardSkeleton, { PastProjectCardSkeleton } from './_components/ProjectCardsLoading';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

export default async function Projects() {
  return (
    <div className="md:space-y-6">
      <BlockContainer title="Current Projects" roundedCorners="bottom" bg="light-blue" padding="less" gap="less">
        <div className="flex flex-col items-center space-y-5">
          <Suspense fallback={<ProjectCardSkeleton />}>
            <CurrentProjects />
          </Suspense>
        </div>
      </BlockContainer>
      <BlockContainer title="Past Projects" roundedCorners="top" bg="dark-blue" padding="less" gap="less">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<PastProjectCardSkeleton />}>
            <PastProjects />
          </Suspense>
        </div>
      </BlockContainer>
    </div>
  );
}
