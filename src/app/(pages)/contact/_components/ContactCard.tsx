import { StaticImageData } from 'next/image';
import React, { ReactElement } from 'react';
import { ContactCardDataType } from '@/lib/contentful';
import { FaDiscord } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactCard({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='box-border mb-12 bg-white w-72 h-72 rounded-[50px] flex flex-col items-center py-5 space-y-5'>
      {children}
    </div>
  );
}
