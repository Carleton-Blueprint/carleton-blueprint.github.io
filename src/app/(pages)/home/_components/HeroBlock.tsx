"use client"; // for typewriter-effect

import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import image from "../_assets/heropic.png";
import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import home from "../_assets/home.svg";
import button from "../_assets/button.svg";

export default function HeroBlock() {
  return (
    <div className="h-max flex">
      <div className="absolute text-white top-80 left-24">
        <h1 className="text-6xl font-bold">Carleton Blueprint</h1>
        <h2 className="text-3xl mb-6">Tech for social good.</h2>
        <Link
          href={"/contact"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit mb-[-10px]"
        >
          <button className="self-start text-white font-bold px-5 py-2 w-[150px] rounded-full bg-blueprint hover:bg-blueprint-300">
            Join Us
          </button>
        </Link>
        <Image src={button} alt="Join Us" />
      </div>
      <Image src={home} className="w-screen" alt="Home" />
    </div>
  );
}
