import Image from "next/image";
import defaultPicture from "../_assets/default.png";

type TeamProfileProps = {
  name: string;
  role: string;
  team?: string;
  imageUrl: string;
  personalUrl?: string;
};

function TeamProfileBase({ name, role, imageUrl }: TeamProfileProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-1">
      <div className="rounded-full overflow-hidden w-32 h-32 mb-2">
        <Image
          src={imageUrl == "No URL" ? defaultPicture : imageUrl}
          width={128}
          height={128}
          alt="Picture of Jalal Bouri"
        />
      </div>
      <p className="font-bold">{name}</p>
      <p className="text-charcoal-500 capitalize">{role}</p>
    </div>
  );
}

export default function TeamProfile({
  name,
  role,
  imageUrl,
  personalUrl,
}: TeamProfileProps) {
  if (personalUrl == "No URL") {
    return <TeamProfileBase name={name} role={role} imageUrl={imageUrl} />;
  } else
    return (
      <a href={personalUrl} target="_blank">
        <TeamProfileBase name={name} role={role} imageUrl={imageUrl} />
      </a>
    );
}
