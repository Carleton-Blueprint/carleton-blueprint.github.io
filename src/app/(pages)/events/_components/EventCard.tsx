// EventCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const eventLink = "https://cublueprint.vercel.app/blog";
import download_image from "../_assets/download.png";  // Assuming download.png is in the same directory

interface EventCardProps {
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100">
      {/* Updated usage of Link */}
      <Link href={eventLink} passHref>
        <div className="block p-6">
          <Image src={download_image} alt={title} width={200} height={200} className="mb-4" />
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 text-base">
            Click here to learn more!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
