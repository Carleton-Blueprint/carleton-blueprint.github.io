import Image from 'next/image'
import jalalPicture from "../_assets/jalalBouri.jpg";

type TeamProfileProps = {
  name: string;
  role: string;
}

export default function TeamProfile({ name, role }: TeamProfileProps) {
  return (
    <figure className="flex flex-col items-center space-y-1">
      <div className="rounded-full overflow-hidden w-32 h-32">
        <Image src={jalalPicture} width={128} height={128} alt="Picture of Jalal Bouri"/>
      </div>
        <p className="font-bold text-center">{name}</p>
        <p className="text-charcoal-500 text-center capitalize">{role}</p>
    </figure>
  );
}
