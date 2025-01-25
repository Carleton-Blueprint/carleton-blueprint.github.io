'use client';
import { StudentDataType } from '@/lib/notion/students';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

function TeamProfileBase({ student, hover = false }: { student: StudentDataType; hover: boolean }) {
  return (
    <div
      className={`flex flex-col items-center space-y-1 rounded-2xl py-3 text-center ${
        hover && 'transition duration-200 ease-in-out hover:scale-110 hover:bg-blueprint-50'
      }`}
    >
      <div className="mb-2 flex h-32 w-32 items-center overflow-hidden rounded-full border-2 border-white">
        <CldImage
          src={student.imageUrl}
          width={128}
          height={128}
          alt={'Picture of ' + (hover ? student.name : 'blueprint logo')}
        />
      </div>
      <p className="text-md font-bold md:text-lg">{student.name}</p>
      <p className="text-sm capitalize md:text-base">{student.role}</p>
    </div>
  );
}

export default function TeamProfile({ student }: { student: StudentDataType }) {
  if (student.personalUrl == 'No URL') {
    return <TeamProfileBase student={student} hover={false} />;
  } else
    return (
      <Link href={student.personalUrl} target="_blank">
        <TeamProfileBase student={student} hover={true} />
      </Link>
    );
}
