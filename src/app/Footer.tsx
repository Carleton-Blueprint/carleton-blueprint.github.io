import { fetchPages } from "@/lib/contentful";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image, { StaticImageData } from "next/image";
import logo from "./assets/blueprint_banner_negative.png";
import fb from "./assets/socials/fb.webp";
import ig from "./assets/socials/ig.webp";
import linkedin from "./assets/socials/linkedin.webp";
import yt from "./assets/socials/yt.webp";

function SocialIcon({ src }: { src: StaticImageData }) {
  return (
    <Link href="https://linktr.ee/cublueprint">
      <Image src={src} alt="social media icon" className="w-6" />
    </Link>
  );
}

export default async function Footer() {
  const res = await fetchPages();

  return (
    <div className="flex bg-blueprint pt-16 pb-10 text-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col text-lg space-y-3">
            {res.map((page) => (
              <Link key={uuidv4()} href={page.href} className="hover:text-blueprint-100">
                {page.name}
              </Link>
            ))}
          </div>

          <div className="">
            <Image src={logo} alt="blueprint logo" className="w-[150px] pb-5" />
            <div className="pb-3">stay in the loop</div>
            <div className="flex flex-row space-x-2">
              <SocialIcon src={ig} />
              <SocialIcon src={fb} />
              <SocialIcon src={linkedin} />
              <SocialIcon src={yt} />
            </div>
          </div>
        </div>

        <div className="w-full text-center text-sm">Made with ❤️ by Carleton Blueprint</div>
      </div>
    </div>
  );
}
