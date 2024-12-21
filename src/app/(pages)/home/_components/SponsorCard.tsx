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
    <div className="flex flex-col justify-between space-y-6 rounded-[50px] bg-gradient-to-b from-blueprint from-45% to-white to-85% p-6 text-white transition-shadow duration-300 ease-in-out hover:shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)] md:-mx-20 md:flex-row md:space-y-0 md:bg-gradient-to-r md:pl-20">
      <div className="flex h-2/3 flex-col justify-center space-y-4 md:w-2/3">
        <CardHeader className="p-0">
          <CardTitle className="text-5xl font-semibold">{sponsor.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-xl">
          <p>{sponsor.description}</p>
        </CardContent>
      </div>
      <div className="flex h-1/3 justify-center md:w-1/4 md:justify-end">
        <Image className="w-[175px] rounded-full" src={sponsor.logo} alt={`${sponsor.name} logo`} />
      </div>
    </div>
  );
}
