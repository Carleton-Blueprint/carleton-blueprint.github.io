'use client';
import LinkButton from '@/components/LinkButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import { FaGithub } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <Card
      className={`flex justify-center items-center w-full rounded-[40px] md:h-auto shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)]`}
    >
      {data.logoUrl && (
        <CldImage
          src={data.logoUrl}
          alt={data.companyName}
          width={250}
          height={250}
          className={'hidden md:block h-[200px] w-auto ml-8'}
        />
      )}

      <div className="flex flex-col justify-end md:justify-between min-h-[320px] md:min-h-full">
        <CardHeader className="flex flex-col justify-between items-start pr-2 md:items-center md:block">
          <CardTitle className="text-4xl font-bold">{data.companyName}</CardTitle>
          <div className="flex flex-row md:pt-0 md:items-center">
            <CardDescription className="text-2xl md:text-xl font-medium pt-2 md:pt-0">
              {data.productName}
            </CardDescription>
            {data.logoUrl && (
              <CldImage src={data.logoUrl} alt={data.companyName} width={120} height={120} className="md:hidden" />
            )}
          </div>
        </CardHeader>
        <CardContent className={'hidden md:block md:h-24 overflow-hidden text-md mb-5'}>
          <p>{data.description}</p>
        </CardContent>
        <CardFooter className={'space-x-4 text-xs md:text-lg justify-end md:justify-start pb-4 md:pb-6'}>
          {data.gitHubUrl && (
            <LinkButton href={data.gitHubUrl} newTab={true} variant="icon">
              {' '}
              <FaGithub className="text-6xl md:text-5xl text-black hover:text-blueprint transition-colors ease-in-out duration-300" />{' '}
            </LinkButton>
          )}
          {data.pageId && (
            <LinkButton href={'/projects/' + data.pageId} newTab={true} variant="icon">
              <FaArrowCircleRight className="text-6xl md:text-5xl" />
            </LinkButton>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
