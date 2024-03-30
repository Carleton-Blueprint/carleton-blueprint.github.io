import Image from "next/image";
import image from "./_assets/teamspirit.svg";
import BlockContainer from "./BlockContainer";

export default function AboutUsBlock() {
  return (
    <BlockContainer title="About Us 💡" flip={true}>
      <div className="flex flex-row items-center justify-around">
        <Image src={image} alt="decorative image" className="w-[300px]" />

        <div className="max-w-[500px] space-y-3">
          <div className="font-bold text-blueprint text-2xl">Our Mission</div>
          <div className="text-lg">Blueprint strives to make technology more accessible and useful for those who create communities and promote public welfare.</div>
        </div>
      </div>
    </BlockContainer>
  );
}
