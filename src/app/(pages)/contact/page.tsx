import React from "react";
import ContactCard from "./_components/ContactCard";
import { v4 as uuidv4 } from "uuid";
import { FaDiscord } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

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
  },
  {
    title: "In-person",
    description: "Come visit us at one of our events and meet members and execs in person!",
    icon: <GrInstagram className="size-32 text-blueprint"/>,
    link: "https://www.instagram.com/cublueprint/",
  },
  {
    title: "In-person",
    description: "Come visit us at one of our events and meet members and execs in person!",
    icon: <GrInstagram className="size-32 text-blueprint"/>,
    link: "https://www.instagram.com/cublueprint/",
  },
  {
    title: "In-person",
    description: "Come visit us at one of our events and meet members and execs in person!",
    icon: <GrInstagram className="size-32 text-blueprint"/>,
    link: "https://www.instagram.com/cublueprint/",
  },
  {
    title: "In-person",
    description: "Come visit us at one of our events and meet members and execs in person!",
    icon: <GrInstagram className="size-32 text-blueprint"/>,
    link: "https://www.instagram.com/cublueprint/",
  }
];

export default function Projects() {
  return (
    <div className="flex justify-center p-10">
    <div className="w-2/4  flex justify-between flex-wrap">
      {contactData.map((data) => (
        <ContactCard key={uuidv4()} data={data}/>
      ))}
    </div>
    </div>
  );
}
