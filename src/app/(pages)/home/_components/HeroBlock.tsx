import React from "react";
import Image from "next/image";
import Link from "next/link";
import home from "../_assets/home.svg";
import button from "../_assets/button.svg";

export default function HeroBlock() {
  return (
    <div className="flex justify-between items-center w-full h-screen bg-[#0A1E3A]">
      <div className="w-1/2 flex justify-center">
        <div className="text-white top-56 items-center left-12 md:top-80 md:left-24 h-min">
          <h1 className="text-6xl font-bold">Carleton Blueprint</h1>
          <h2 className="text-3xl mb-6">Tech for social good.</h2>
          <Link
            href={"https://discord.com/invite/7gkkW5nJPW"}
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
      </div>
      <Image src={home} className="hidden md:block h-full w-1/2" alt="Home" />
    </div>
  );
}
