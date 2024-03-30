import Image from "next/image";
import image from "./_assets/teamspirit.svg";

export default function AboutUsBlock() {
  return (
    <div className="bg-blueprint-50 py-10">
      <div className="container space-y-5">
        <div className="flex rounded-lg bg-blueprint-100 px-5 py-2 font-bold text-xl">About Us 💡</div>

        <div className="flex flex-row items-center justify-around">
          <Image src={image} alt="decorative image" className="w-[300px]" />

          <div className="max-w-[500px] space-y-3">
            <div className="font-bold text-blueprint underline text-lg">Our Mission</div>
            <div className="text-lg">Blueprint strives to make technology more accessible and useful for those who create communities and promote public welfare.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
