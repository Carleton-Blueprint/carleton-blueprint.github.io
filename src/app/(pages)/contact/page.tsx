import React from 'react';
import BlockContainer from '../home/_components/BlockContainer';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import ContactCard from './_components/ContactCard';
import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className=''>
      <div className='bg-blueprint-50 h-[425px] pt-12'>
        <div className='text-center font-black text-3xl'>
          Connect With
          <span className='text-blueprint'> Us</span>
        </div>
        <div className='flex container justify-around static pt-48'>
          <ContactCard>
            <FaLocationDot className='text-[#3B6E9B] size-28' />
            <h2 className='text-[#3B6E9B] text-3xl font-black'>Our Office</h2>
            <a href='https://www.fast.com' target='_blank' className='text-[#3B6E9B]'>
              insert office location
            </a>
          </ContactCard>
          <ContactCard>
            <MdEmail className='text-[#3B6E9B] size-28' />
            <h2 className='text-[#3B6E9B] text-3xl font-black'>Email</h2>
            <a href='https://www.fast.com' target='_blank' className='text-[#3B6E9B]'>
              insert email
            </a>
          </ContactCard>
          <ContactCard>
            <FaDiscord className='text-[#3B6E9B] size-28' />
            <h2 className='text-[#3B6E9B] text-3xl font-black'>Discord</h2>
            <a href='https://www.fast.com' target='_blank' className='text-[#3B6E9B]'>
              insert discord link
            </a>
          </ContactCard>
        </div>
      </div>
      <div className='bg-blueprint text-white pt-[200px] pb-16'>
        <BlockContainer>
          <div className='flex justify-between'>
            <div className='w-1/3'>
              <form className='bg-blueprint rounded'>
                <div className='mb-4'>
                  <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='bg-blueprint text-white border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight placeholder-white'
                    id='email'
                    type='email'
                    placeholder='Enter a valid email address'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='bg-blueprint text-white border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight placeholder-white'
                    id='name'
                    type='text'
                    placeholder='Enter your name'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-white text-sm font-bold mb-2' htmlFor='message'>
                    Message
                  </label>
                  <div
                    className='bg-blueprint text-white border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight'
                    contentEditable
                    role='textbox'
                    id='message'
                  ></div>
                </div>
                <div className='flex items-center justify-center w-full mt-11'>
                  <button
                    className='bg-white hover:bg-blueprint-50 text-blueprint font-bold w-11/12 py-2 px-4 rounded-full tracking-[0.3em] hover:tracking-[0.5em] transition-all ease-in-out'
                    type='button'
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className='w-[250px] space-y-4'>
              <h2 className='font-extrabold text-xl'>Get in touch</h2>
              <p className='text-sm'>
                We’re here to help and answer any questions you might have. We look forward to hearing from you!
              </p>
              <div className='flex space-x-3'>
                <GrInstagram className='size-6 text-white' />
                <FaLinkedinIn className='size-6 text-white' />
              </div>
            </div>
          </div>
        </BlockContainer>
      </div>
    </div>
  );
}

export default Page;
