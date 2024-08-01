import { Separator } from '@/components/ui/separator';
import { getProjectPageIds } from '@/lib/notion/projects';
import { getRecordMap } from '@/lib/notion/utils';
import NotionPage from '@/components/NotionPage';
import BlockContainer from '@/components/BlockContainer';
import { NotionAPI } from 'notion-client';

export async function generateStaticParams() {
  const projects = await getProjectPageIds();

  return projects.map((project: string) => ({
    slug: project,
  }));
}

type PropsType = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: PropsType) {
  const recordMap = await getRecordMap(params.slug);

  const title = 'hardcode';

  return (
    // <div className='flex justify-center pt-12'>
    //   <div className='w-1/2 space-y-8 border-l-4 pl-12 border-slate-200'>
    //     <h1 className='text-4xl font-bold'>{title}</h1>
    //     <Separator />
    //     <NotionPage recordMap={recordMap} />
    //   </div>
    // </div>
    <NotionPage recordMap={recordMap} />
  );
}
