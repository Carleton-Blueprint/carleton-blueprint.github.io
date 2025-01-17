'use client';
import { StudentDataType } from '@/lib/notion/students';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

function TeamProfileBase({ student, hover = false }: { student: StudentDataType; hover: boolean }) {
  return (
    <div
      className={`flex flex-col items-center text-center space-y-1 py-3 rounded-2xl ${
        hover && 'transition ease-in-out hover:scale-110 hover:bg-blueprint-50 duration-200'
      }`}
    >
      <div className="rounded-full flex items-center overflow-hidden w-32 h-32 mb-2 border-white border-2">
        <CldImage
          src={student.imageUrl}
          width={128}
          height={128}
          alt={'Picture of ' + (hover ? student.name : 'blueprint logo')}
        />
      </div>
      <p className="text-md md:text-lg font-bold">{student.name}</p>
      <p className="text-sm md:text-base capitalize">{student.role}</p>
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
