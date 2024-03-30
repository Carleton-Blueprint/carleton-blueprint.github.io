"use client"; // for typewriter-effect

import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import image from "./_assets/heropic.png";
import LinkButton from "./LinkButton";

export default function HeroBlock() {
  return (
    <div className="container flex items-center py-20">
      <div className="flex flex-col space-y-8">
        <h1 className="text-4xl font-extrabold">
          <Typewriter
            options={{
              strings: ["Tech for social good", "Carleton Blueprint"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-lg">We are a team of students at Carleton University that develop pro-bono apps for nonprofits and promote tech for social good.</p>

        <LinkButton href="https://linktr.ee/cublueprint" newTab={true}>
          Apply
        </LinkButton>
      </div>

      <Image src={image} className="w-[500px] mx-16" alt="decorative image" />
    </div>
  );
}
