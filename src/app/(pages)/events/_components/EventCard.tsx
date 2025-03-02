'use client';
import Link from 'next/link';
import React from 'react';
import { CldImage } from 'next-cloudinary';

interface EventCardProps {
  slug: string;
  imgURL: string;
  title: string;
  venue: string;
  time: string;
  description: string;
  isUpcoming: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ slug, imgURL, title, venue, time, description, isUpcoming }) => {
  return (
    <Link
      href={`/events/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative mt-12 flex w-full max-w-md transform cursor-pointer flex-col overflow-hidden rounded-[30px] bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative w-full overflow-hidden md:h-64">
        <div className="max-h-full overflow-hidden">
          <CldImage src={imgURL} alt={title} width={400} height={400} className="rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 text-center md:p-6">
        <h2 className="mb-1 text-xl font-bold md:mb-3">{title}</h2>
        <hr className="my-1 w-full border-t-2 border-gray-300 md:my-3" />
        <p className="text-lg font-semibold text-indigo-600 md:py-2">Location: {venue}</p>
        <p className="text-md italic text-gray-800 md:py-2">{time}</p>
        <p className="py-1 text-gray-700 md:py-2">{description}</p>
        {isUpcoming ? (
          <span className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
            Upcoming
          </span>
        ) : (
          <span className="absolute right-4 top-4 rounded-full bg-gray-400 px-3 py-1 text-xs font-bold text-white">
            Passed
          </span>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
