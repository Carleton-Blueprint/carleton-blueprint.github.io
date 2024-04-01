import Image from "next/image";
import BlockContainer from "./BlockContainer";
import image from "../_assets/projectpic.png";
import LinkButton from "@/components/LinkButton";

export default function ProjectsBlock() {
  return (
    <BlockContainer title="Our Projects 📌" flip={true}>
      <div className="flex flex-row items-center justify-around">
        <Image src={image} alt="decorative image" className="hidden md:flex w-[300px]" />

        <div className="max-w-[500px] space-y-3">
          <div className="font-bold text-blueprint text-2xl">Past Projects</div>
          <div className="text-lg pb-5">We believe in building technology that makes our community more open and connected. Check out our past projects!</div>
          <LinkButton href="/projects">View Projects</LinkButton>
        </div>
      </div>
    </BlockContainer>
  );
}
