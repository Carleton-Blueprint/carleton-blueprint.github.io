'use client';
import LinkButton from '@/components/LinkButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import { FaGithub } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <Card className={`flex w-[300px] items-center justify-center rounded-[30px] md:w-full`}>
      {data.logoUrl && (
        <CldImage
          src={data.logoUrl}
          alt={data.companyName}
          width={250}
          height={250}
          className={'ml-8 hidden h-[200px] w-auto md:block'}
        />
      )}

      <div>
        <CardHeader>
          <CardTitle className="text-4xl">{data.companyName}</CardTitle>
          <CardDescription className="text-xl">{data.productName}</CardDescription>
        </CardHeader>
        <CardContent className={'text-md mb-5 overflow-hidden md:h-24'}>
          <p>{data.description}</p>
        </CardContent>
        <CardFooter className={'space-x-4 text-xs md:text-lg'}>
          {data.gitHubUrl && (
            <LinkButton href={data.gitHubUrl} newTab={true} variant="icon">
              {' '}
              <FaGithub className="text-5xl text-black transition-colors duration-300 ease-in-out hover:text-blueprint" />{' '}
            </LinkButton>
          )}
          {data.pageId && (
            <LinkButton href={'/projects/' + data.slug} newTab={true} variant="icon">
              <FaArrowCircleRight className="text-5xl" />
            </LinkButton>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
