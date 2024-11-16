import React from 'react';

type ContactCardProps = {
  children: React.ReactNode;
  link?: string;
};

export default function ContactCard({ children, link = '' }: ContactCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="box-border mb-12 bg-white w-72 h-72 rounded-[50px] flex flex-col items-center py-5 space-y-5 justify-center hover:shadow-2xl transition-shadow ease-in-out duration-200">
        {children}
      </div>
    </a>
  );
}
