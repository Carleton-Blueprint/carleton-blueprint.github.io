import React from "react";
import Image, { StaticImageData } from "next/image";
import BlockContainer from "./BlockContainer";
import { v4 as uuidv4 } from "uuid";
import values1 from "../_assets/values/values1.svg";
import values2 from "../_assets/values/values2.svg";
import values3 from "../_assets/values/values3.svg";
import values4 from "../_assets/values/values4.svg";
import values5 from "../_assets/values/values5.svg";

const values = [
  {
    title: "Mission First.",
    description:
      "We as Blueprint members ultimately unify under one goal - achieving our mission. We place the interests of the people and partners we serve above our own. Our primary measure of success is the amount of positive impact we create through our work.",
    image: values1,
    flip: false,
  },
  {
    title: "Cherish Culture.",
    description:
      "We as Blueprint members seek to cherish our time spent together. We develop meaningful relationships that extend well beyond the scope of the organization. We value each other as individuals and appreciate our differences.",
    image: values3,
    flip: true,
  },
  {
    title: "Innovate.",
    description:
      "We as Blueprint members recognize that change is both inevitable and necessary. We are committed to innovate and emphasize effective solutions as needed in order to remain relevant - nothing is sacred. We welcome new ideas and diverse thinking.",
    image: values4,
    flip: false,
  },
  {
    title: "Personal Growth.",
    description:
      "We as Blueprint members value the academic, social, and personal growth of our peers. We constantly seek to perpetuate the cycle of learning and teaching, for our benefit and for others. We strive to offer a helping hand in times of need and push each other to succeed.",
    image: values2,
    flip: true,
  },
  {
    title: "Stay Humble.",
    description:
      "We as Blueprint members strive to remain humble, accept our imperfections, and be receptive to feedback. We approach challenges with an open mind and remember that anyone can pursue social good, not just Blueprint.",
    image: values5,
    flip: false,
  },
];

type ValueDataType = {
  image: StaticImageData;
  title: string;
  description: string;
  flip?: boolean;
};

function Value({ data }: { data: ValueDataType }) {
  return (
    <div
      className={`${
        data.flip && "md:self-end md:flex-row-reverse md:space-x-reverse"
      } flex flex-col md:flex-row md:w-10/12 bg-white rounded-[35px] p-6 md:p-12 md:space-x-20 items-center shadow-[2px_6px_4px_0_rgba(0,0,0,0.3)]`}
    >
      <div
        className={`font-bold text-blueprint text-2xl md:text-4xl ${
          data.flip && "md:text-end"
        }`}
      >
        {data.title}
      </div>
      <div
        className={`${
          !data.flip && "md:text-end"
        } text-justify md:text-start text-md md:text-lg`}
      >
        {data.description}
      </div>
    </div>
  );
}

export default function OurValuesBlock() {
  return (
    <BlockContainer title="Our Values" flip inner roundedCorners>
      <div className="flex flex-col space-y-12">
        {values.map((value) => (
          <Value key={uuidv4()} data={value} />
        ))}
      </div>
    </BlockContainer>
  );
}
