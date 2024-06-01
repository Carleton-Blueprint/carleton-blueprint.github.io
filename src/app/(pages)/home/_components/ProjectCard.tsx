import { IoLogoGithub } from "react-icons/io";
import projectLogo from "../_assets/projectLogo.svg";
import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
};

export default function NewProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="">
      <Image src={projectLogo} alt="decorative image" className="absolute" />
      <div className="group w-96 h-96 relative bg-gradient-to-t from-blueprint/100 to-blueprint/65 from-25% to-75% opacity-85 hover:opacity-100 transition-opacity ease-in-out duration-300 rounded-[35px]">
        <div className="absolute top-2 right-2">
          <IoLogoGithub className="opacity-0 group-hover:opacity-100 w-20 h-20 transition-color duration-300 ease-in-out hover:text-slate-300 text-white" />
        </div>
        <div className="absolute inset-x-0 bottom-0 text-center text-white h-32 overflow-hidden">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="opacity-0 group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 group:transition duration-300 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
