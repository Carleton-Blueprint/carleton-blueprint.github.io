'use client';
import LinkButton from '@/components/LinkButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDataType } from '@/lib/notion/projects';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <Card
      className={`flex w-full items-center justify-center rounded-[40px] shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)] md:h-auto`}
    >
      {data.logoUrl && (
        <Image
          src={data.logoUrl}
          alt={data.companyName}
          width={250}
          height={250}
          className={'ml-8 hidden h-[200px] w-auto md:block'}
        />
      )}

      <div className="flex min-h-[320px] flex-col justify-end md:min-h-full md:justify-between">
        <CardHeader className="flex flex-col items-start justify-between md:block md:items-center">
          <CardTitle className="text-4xl font-bold">{data.companyName}</CardTitle>
          <div className="flex flex-row md:items-center md:pt-0">
            <CardDescription className="pt-2 text-2xl font-medium leading-9 md:pt-0 md:text-xl">
              {data.productName}
            </CardDescription>
            {data.logoUrl && (
              <Image
                src={data.logoUrl}
                alt={data.companyName}
                width={120}
                height={120}
                className="max-h-[120px] max-w-[120px] object-contain md:hidden"
              />
            )}
          </div>
        </CardHeader>
        <CardContent className={'text-md mb-5 hidden md:block md:h-24'}>
          <p>{data.description}</p>
        </CardContent>
        <CardFooter className={'justify-end space-x-4 pb-4 text-xs md:justify-start md:pb-6 md:text-lg'}>
          {data.gitHubUrl && (
            <LinkButton href={data.gitHubUrl} newTab={true} variant="icon">
              {' '}
              <FaGithub className="text-6xl text-black transition-colors duration-300 ease-in-out hover:text-blueprint md:text-5xl" />{' '}
            </LinkButton>
          )}
          {data.pageId && (
            <LinkButton href={'/projects/' + data.slug} newTab={true} variant="icon">
              <FaArrowCircleRight className="text-6xl md:text-5xl" />
            </LinkButton>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
