import React from "react";
import ContactCard from "./_components/ContactCard";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import image from "./_assets/Adult talking cell phone-rafiki.svg";
import { fetchContact } from "@/lib/contentful";

export default async function Contact() {
  const res = await fetchContact();
  
  return (
    <div className="bg-blueprint">
      <div className="container flex flex-col justify-around">
        <div className="my-24 md:mx-32 mt-24 md:mb-0 flex justify-between items-center">
          <div className="max-w-[350px] md:max-w-[500px] space-y-3">
            <h1 className="text-4xl md:text-6xl font-bold text-white">For Non-Profits</h1>
            <p className="text-xl text-white">If you're interested in our services or have a potential project you need help with send us an email!</p>
            <br />
            <a href="mailto:carletonblueprint@gmail.com" className="text-white hover:text-gray-300 text-xl md:text-3xl">carletonblueprint@gmail.com</a>
          </div>
          <Image src={image} alt="decorative image" className="hidden md:flex w-[400px] pl-16" />
        </div>
      </div>
      <div className="sticky">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 200">
            <path className="fill-blueprint-300" fillOpacity="1" d="M1440,176L1380,192C1320,208,1200,240,1080,250.7C960,261,840,251,720,224C600,197,480,155,360,133.3C240,112,120,112,60,112L0,112L0,320L60,320C120,320,240,320,360,320C480,320,600,320,720,320C840,320,960,320,1080,320C1200,320,1320,320,1380,320L1440,320Z"></path>
            <path className="fill-blueprint-400" fillOpacity="1" d="M0,176L60,192C120,208,240,240,360,250.7C480,261,600,251,720,224C840,197,960,155,1080,133.3C1200,112,1320,112,1380,112L1440,112L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
      </div>
      <div className="sticky bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 180" transform="scale(-1, -1)">
            <path className="fill-blueprint-300" fillOpacity="1" d="M1440,176L1380,192C1320,208,1200,240,1080,250.7C960,261,840,251,720,224C600,197,480,155,360,133.3C240,112,120,112,60,112L0,112L0,320L60,320C120,320,240,320,360,320C480,320,600,320,720,320C840,320,960,320,1080,320C1200,320,1320,320,1380,320L1440,320Z"></path>
            <path className="fill-blueprint-400" fillOpacity="1" d="M50,286L60,282C120,258,310,270,370,260.7C480,261,600,251,720,224C840,197,960,155,1080,133.3C1200,112,1320,112,1380,112L1440,112L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
      </div>
      <div className="flex flex-col items-center py-10 bg-white">
        <h1 className="text-4xl md:text-6xl max-w-lg text-center text-balance font-bold mb-10 text-blueprint-400">Find us on Social Media</h1>
        <div className="w-3/4 md:w-2/4 flex justify-center md:justify-between flex-wrap py-10 md:p-10">
          {res.map((data) => (
            <ContactCard key={uuidv4()} data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
}
