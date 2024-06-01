import Image from "next/image";
import defaultPicture from "../_assets/default.png";
import { StudentDataType } from "@/lib/notion/students";
import Link from "next/link";

function TeamProfileBase({ student }: { student: StudentDataType }) {
  return (
    <div className="flex flex-col items-center text-center space-y-1">
      <div className="rounded-full overflow-hidden w-32 h-32 mb-2">
        <Image
          src={student.imageUrl == "No URL" ? defaultPicture : student.imageUrl}
          width={128}
          height={128}
          alt="Picture of Jalal Bouri"
        />
      </div>
      <p className="font-bold">{student.name}</p>
      <p className="text-charcoal-500 capitalize">{student.role}</p>
    </div>
  );
}

export default function TeamProfile({ student }: { student: StudentDataType }) {
  if (student.personalUrl == "No URL") {
    return <TeamProfileBase student={student} />;
  } else
    return (
      <Link href={student.personalUrl} target="_blank">
        <TeamProfileBase student={student} />
      </Link>
    );
}
