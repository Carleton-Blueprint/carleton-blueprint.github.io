import React from "react";
import BlockContainer from "../home/_components/BlockContainer";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import ContactCard from "./_components/ContactCard";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Form from "./_components/Form";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="bg-blueprint-50">
      <div className="bg-blueprint-50 h-[425px] pt-12">
        <div className="text-center font-black text-5xl">
          Connect With
          <span className="text-blueprint"> Us</span>
        </div>
        <div className="flex container justify-around static pt-48">
          <ContactCard>
            <FaLocationDot className="text-[#3B6E9B] size-28" />
            <h2 className="text-[#3B6E9B] text-3xl font-black">Our Office</h2>
            <a
              href="https://www.fast.com"
              target="_blank"
              className="text-[#3B6E9B]"
            >
              insert office location
            </a>
          </ContactCard>
          <ContactCard>
            <MdEmail className="text-[#3B6E9B] size-28" />
            <h2 className="text-[#3B6E9B] text-3xl font-black">Email</h2>
            <a
              href="https://www.fast.com"
              target="_blank"
              className="text-[#3B6E9B]"
            >
              insert email
            </a>
          </ContactCard>
          <ContactCard>
            <FaDiscord className="text-[#3B6E9B] size-28" />
            <h2 className="text-[#3B6E9B] text-3xl font-black">Discord</h2>
            <a
              href="https://www.fast.com"
              target="_blank"
              className="text-[#3B6E9B]"
            >
              insert discord link
            </a>
          </ContactCard>
        </div>
      </div>
      <BlockContainer flip="blueprint" roundedCorners="top">
        <div className="flex justify-between text-white text-lg pt-[200px] pb-16">
          <div className="w-1/3">
            <Form />
          </div>
          <div className="w-[350px] space-y-6">
            <h2 className="font-extrabold text-3xl">Get in touch</h2>
            <p>
              We’re here to help and answer any questions you might have. We
              look forward to hearing from you!
            </p>
            <div className="flex space-x-8">
              <GrInstagram className="size-10 text-white" />
              <FaLinkedinIn className="size-10 text-white" />
            </div>
          </div>
        </div>
      </BlockContainer>
    </div>
  );
}

export default Page;
