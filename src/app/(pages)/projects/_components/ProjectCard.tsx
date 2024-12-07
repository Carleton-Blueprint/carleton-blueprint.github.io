'use client';
import LinkButton from '@/components/LinkButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import { FaGithub } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <Card className={`flex justify-center items-center w-[300px] rounded-[30px] md:w-full `}>
      {data.logoUrl && (
        <CldImage
          src={data.logoUrl}
          alt={data.companyName}
          width={250}
          height={250}
          className={'hidden md:block h-[200px] w-auto ml-8'}
        />
      )}

      <div>
        <CardHeader>
          <CardTitle className="text-4xl">{data.companyName}</CardTitle>
          <CardDescription className="text-xl">{data.productName}</CardDescription>
        </CardHeader>
        <CardContent className={'md:h-24 overflow-hidden text-md mb-5'}>
          <p>{data.description}</p>
        </CardContent>
        <CardFooter className={'space-x-4 text-xs md:text-lg'}>
          {data.gitHubUrl && (
            <LinkButton href={data.gitHubUrl} newTab={true} variant="icon">
              {' '}
              <FaGithub className="text-5xl text-black hover:text-blueprint transition-colors ease-in-out duration-300" />{' '}
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
