import React from 'react';

type ContactCardProps = {
  children: React.ReactNode;
  link?: string;
};

export default function ContactCard({ children, link = '' }: ContactCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="mb-12 box-border flex h-72 w-72 flex-col items-center justify-center space-y-5 rounded-[50px] bg-white py-5 transition-shadow duration-200 ease-in-out hover:shadow-2xl">
        {children}
      </div>
    </a>
  );
}
