import Image from "next/image";
import image from "../_assets/teamspirit.svg";
import BlockContainer from "./BlockContainer";
import LinkButton from "@/components/LinkButton";

export default function AboutUsBlock() {
  return (
    <BlockContainer title="About Us 💡" flip={true}>
      <div className="flex flex-row items-center justify-around">
        <Image src={image} alt="decorative image" className="hidden md:flex w-[300px]" />

        <div className="max-w-[500px]">
          <div className="font-bold text-blueprint text-2xl">Our Mission</div>
          <div className="text-lg mt-3">Blueprint strives to make technology more accessible and useful for those who create communities and promote public welfare.</div>
          <LinkButton href="https://calblueprint.org/chapters" variant="ghost" className="mt-10">
            Check out other Blueprint chapters
          </LinkButton>
        </div>
      </div>
    </BlockContainer>
  );
}
