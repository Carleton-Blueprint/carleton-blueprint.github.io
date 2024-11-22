import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ServerProLogo from "../_assets/server_pro_logo.png";

export default function ServerCard() {
  let sponsors = [
    {
      name: "Server.pro",
      description:
        "Some description of the sponsor here. Some description of the sponsor here. Some description of the sponsor here. Some description of the sponsor here. Some description of the sponsor here.",
      logo: ServerProLogo,
    },
    {
      name: "Another Sponsor",
      description:
        "Some random descripton. Some random descripton. Some random descripton. Some random descripton. Some random descripton. Some random descripton. Some random descripton. Some random descripton.",
      logo: ServerProLogo,
    },
  ];

  return sponsors.map((sponsor) => (
    <div className="flex flex-col md:flex-row justify-between text-white bg-gradient-to-b md:bg-gradient-to-r from-blueprint from-45% to-white space-y-6 md:space-y-0 to-85% md:-mx-20 rounded-[50px] p-6 md:pl-20 hover:shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)] transition-shadow ease-in-out duration-300">
      <div className="space-y-4 h-2/3 md:w-2/3 flex flex-col justify-center">
        <CardHeader className="p-0">
          <CardTitle className="text-5xl font-semibold">
            {sponsor.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-xl">
          <p>{sponsor.description}</p>
        </CardContent>
      </div>
      <div className="h-1/3 md:w-1/4 flex justify-center md:justify-end">
        <Image
          className="w-[175px] rounded-full"
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
        />
      </div>
    </div>
  ));
}
