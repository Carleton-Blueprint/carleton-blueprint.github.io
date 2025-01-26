import React from 'react';
import BlockContainer from '@/components/BlockContainer';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import ContactCard from './_components/ContactCard';
import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Form from './_components/Form';

function Page() {
  return (
    <div className="bg-blueprint-50">
      <div className="h-[200px] bg-blueprint-50 pt-12 md:h-[425px]">
        <div className="text-center text-5xl font-black md:text-6xl">
          <span className="text-blueprint">Connect </span>
          With Us
        </div>
        <div className="container static hidden justify-around gap-4 pt-48 md:flex">
          <ContactCard link="https://www.instagram.com/cublueprint/">
            <FaInstagram className="size-28 text-[#3B6E9B]" />
            <h2 className="text-3xl font-black text-[#3B6E9B]">Instagram</h2>
          </ContactCard>
          <ContactCard link="mailto:info@carletonblueprint.org">
            <MdEmail className="size-28 text-[#3B6E9B]" />
            <h2 className="text-3xl font-black text-[#3B6E9B]">Email</h2>
          </ContactCard>
          <ContactCard link="https://discord.gg/7gkkW5nJPW">
            <FaDiscord className="size-28 text-[#3B6E9B]" />
            <h2 className="text-3xl font-black text-[#3B6E9B]">Discord</h2>
          </ContactCard>
        </div>
      </div>
      <BlockContainer bg="blueprint">
        <div className="flex flex-col justify-between gap-24 pt-[5px] text-lg text-white md:flex-row md:pb-16 md:pt-[200px]">
          <div className="w-full md:w-1/3">
            <Form />
          </div>
          <div className="w-[340px] space-y-6">
            <h2 className="text-3xl font-extrabold">Get in touch</h2>
            <p>We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/cublueprint/">
                <GrInstagram className="size-10 text-white transition-colors duration-300 ease-in-out hover:text-slate-300" />
              </a>
              <a href="https://www.linkedin.com/company/cublueprint">
                <FaLinkedinIn className="size-10 text-white transition-colors duration-300 ease-in-out hover:text-slate-300" />
              </a>
            </div>
          </div>
        </div>
      </BlockContainer>
    </div>
  );
}

export default Page;
