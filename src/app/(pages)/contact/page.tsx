import React from "react";
import ContactCard from "./_components/ContactCard";
import { v4 as uuidv4 } from "uuid";
import { FaDiscord } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";
import image from "./_assets/Adult talking cell phone-rafiki.svg";

const contactData = [
  {
    title: "Discord",
    description: "Join our Discord server to get involved with Blueprint!",
    icon: <FaDiscord className="size-32 text-blueprint"/>,
    link: "https://discord.com/invite/7gkkW5nJPW",
  },
  {
    title: "Instagram",
    description: "Follow us on Instagram to stay updated on our latest projects and events!",
    icon: <GrInstagram className="size-32 text-blueprint"/>,
    link: "https://www.instagram.com/cublueprint/",
  }
];

export default function Contact() {
  return (
    <div className="bg-blueprint">
      <div className="container flex flex-col justify-around">
        <div className="mx-32 mt-24 flex justify-between items-center">
          <div className="max-w-[500px] space-y-3">
            <h1 className="text-6xl font-bold text-white">For Non-Profits</h1>
            <p className="text-xl text-white">If you're interested in our services or have a potential project you need help with send us an email!</p>
            <br />
            <a href="mailto:carletonblueprint@gmail.com" className="text-white hover:text-gray-300 text-3xl">carletonblueprint@gmail.com</a>
          </div>
          <Image src={image} alt="decorative image" className="hidden md:flex w-[400px] pl-16" />
        </div>
      </div>
      <div className="sticky">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 240">
            <path fill="#aed9ff" fill-opacity="1" d="M1440,160L1380,176C1320,192,1200,224,1080,234.7C960,245,840,235,720,208C600,181,480,139,360,117.3C240,96,120,96,60,96L0,96L0,320L60,320C120,320,240,320,360,320C480,320,600,320,720,320C840,320,960,320,1080,320C1200,320,1320,320,1380,320L1440,320Z"></path>
            <path fill="#4aa3ff" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,208C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
      </div>
      <hr />
      <div className="flex justify-center p-10 bg-white">
        <div className="w-2/4  flex justify-between flex-wrap">
          {contactData.map((data) => (
            <ContactCard key={uuidv4()} data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
}
