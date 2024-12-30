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
      <div className="bg-blueprint-50 h-[200px] md:h-[425px] pt-12">
        <div className="text-center font-black text-4xl md:text-5xl">
          <span className="text-blueprint">Connect </span>
          With Us
        </div>
        <div className="hidden md:flex container justify-around static pt-48 gap-4">
          <ContactCard link="https://www.instagram.com/cublueprint/">
            <FaInstagram className="text-[#3B6E9B] size-28" />
            <h2 className="text-[#3B6E9B] text-3xl font-black">Instagram</h2>
          </ContactCard>
          <ContactCard link="mailto:info@carletonblueprint.org">
            <MdEmail className="text-[#3B6E9B] size-28" />
            <h2 className="text-[#3B6E9B] text-3xl font-black">Email</h2>
          </ContactCard>
          <ContactCard link="https://discord.gg/7gkkW5nJPW">
            <FaDiscord className="text-[#3B6E9B] size-28" />
            <h2 className="text-[#3B6E9B] text-3xl font-black">Discord</h2>
          </ContactCard>
        </div>
      </div>
      <BlockContainer bg="blueprint">
        <div className="flex flex-col md:flex-row justify-between text-white text-lg pt-[5px] md:pt-[200px] md:pb-16 gap-24">
          <div className="w-full md:w-1/3">
            <Form />
          </div>
          <div className="w-[340px] space-y-6">
            <h2 className="font-extrabold text-3xl">Get in touch</h2>
            <p>We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/cublueprint/">
                <GrInstagram className="size-10 text-white hover:text-slate-300 transition-colors ease-in-out duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/cublueprint">
                <FaLinkedinIn className="size-10 text-white hover:text-slate-300 transition-colors ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </div>
      </BlockContainer>
    </div>
  );
}

export default Page;
