import Image from 'next/image'
import { StudentDataType } from '@/lib/notion/students';
import defaultPicture from "../_assets/default.png";

function TeamProfileBase ({ name, team, role, imageUrl, personalUrl }: StudentDataType){
  return (
    <div className="flex flex-col items-center text-center space-y-1">
        <div className="rounded-full overflow-hidden w-32 h-32 mb-2">
          <Image src={imageUrl == "No URL" ? defaultPicture : imageUrl} width={128} height={128} alt="Picture of Jalal Bouri"/>
        </div>
          <p className="font-bold">{name}</p>
          <p className="text-charcoal-500 capitalize">{role}</p>
    </div>
  )
}

export default function TeamProfile({ name, team, role, imageUrl, personalUrl }: StudentDataType) {
  if(personalUrl == "No URL"){
    return (
    <TeamProfileBase name={name} team={team} role={role} imageUrl={imageUrl} personalUrl={personalUrl}/>
  )
  } else return (
    <a href={personalUrl} target="_blank">
      <TeamProfileBase name={name} team={team} role={role} imageUrl={imageUrl} personalUrl={personalUrl}/>
    </a>
  )
}
