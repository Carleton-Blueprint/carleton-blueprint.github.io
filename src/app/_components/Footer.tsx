import { fetchPages } from "@/lib/contentful";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image, { StaticImageData } from "next/image";
import logo from "@/app/_assets/blueprint_banner_negative.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import fb from "@/app/_assets/socials/fb.webp";
import ig from "@/app/_assets/socials/ig.webp";
import linkedin from "@/app/_assets/socials/linkedin.webp";
import yt from "@/app/_assets/socials/yt.webp";
import { IconType } from "react-icons";

function SocialIcon({ src }: { src: IconType }) {
  return (
    <Link href="https://linktr.ee/cublueprint">
      <div className="w-8 h-8 text-xl hover:text-blueprint-100 flex justify-center">
        {React.createElement(src)}
      </div>
    </Link>
  );
}

export default async function Footer() {
  const res = await fetchPages();

  return (
    <div className="flex bg-blueprint pt-16 pb-10 text-white">
      <div className="container space-y-10">
        <div className="flex flex-col space-y-8 items-center">
          <div className="flex text-lg space-x-4">
            {res.map((page) => (
              <Link
                key={uuidv4()}
                href={page.href}
                className="hover:text-blueprint-100"
              >
                {page.name}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Image src={logo} alt="blueprint logo" className="w-[150px] pb-5" />
            <div className="pb-3">stay in the loop</div>
            <div className="flex flex-row justify-center">
              <SocialIcon src={FaInstagram} />
              <SocialIcon src={FaFacebook} />
              <SocialIcon src={FaLinkedin} />
              <SocialIcon src={FaYoutube} />
            </div>
          </div>
        </div>

        <div className="w-full text-center text-sm">
          Made with ❤️ by Carleton Blueprint
        </div>
      </div>
    </div>
  );
}
