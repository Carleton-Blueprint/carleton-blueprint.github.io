import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type SponsorDataType = {
  name: string;
  description: string;
  logo: StaticImageData;
};

export default function SponsorCard({ sponsor }: { sponsor: SponsorDataType }) {
  return (
    <div className="flex justify-between text-white bg-gradient-to-r from-blueprint from-45% to-white to-85% -mx-20 rounded-[50px] p-6 pl-20 hover:shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)] transition-shadow ease-in-out duration-300">
      <div className="space-y-4 w-2/3 flex flex-col justify-center">
        <CardHeader className="p-0">
          <CardTitle className="text-5xl font-semibold">{sponsor.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-xl">
          <p>{sponsor.description}</p>
        </CardContent>
      </div>
      <div className="w-1/4 flex justify-end">
        <Image className="w-[175px] rounded-full" src={sponsor.logo} alt={`${sponsor.name} logo`} />
      </div>
    </div>
  );
}
