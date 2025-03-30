import bluePeople from './_assets/blue_people.svg';
import Image from 'next/image';
import Student from './_components/student';
import { Suspense } from 'react';
import Loading from './_components/loading';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

export default async function Students() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-blueprint-50">
      <div className="content container relative flex flex-col space-y-24 pb-24">
        <div className="flex flex-col space-y-2">
          <div className="m-4 ml-0 flex flex-row gap-5 md:m-8 md:justify-start">
            <h1 className="mb-4 pt-6 text-4xl font-bold md:mb-8 md:text-5xl">
              Meet our <span className="text-blueprint-500">Team</span>
            </h1>
            <Image src={bluePeople} width={188.5} alt="Image of blue figures" className="hidden md:block" />
          </div>
          <div className="flex flex-col space-y-12 text-center md:space-y-24">
            <Suspense fallback={<Loading />}>
              <Student />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
