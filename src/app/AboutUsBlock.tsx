import NextImage from "next/image";
import image from "./_assets/teamspirit.svg";

export default function AboutUsBlock() {
  return (
    <div className="flex flex-row items-center justify-around">
      <div className="relative w-[300px]">
        <NextImage src={image} alt="decorative image" />
      </div>

      <div className="max-w-[500px]">
        <div className="text-lg">Blueprint strives to make technology more accessible and useful for those who create communities and promote public welfare.</div>
      </div>
    </div>
  );
}
