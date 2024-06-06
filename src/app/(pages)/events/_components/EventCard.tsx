import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface EventCardProps {
  id: string;
  imgURL: string | StaticImageData;
  title: string;
  venue: string;
  time: string;
  description: string;
  isUpcoming: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  imgURL,
  title,
  venue,
  time,
  description,
  isUpcoming,
}) => {
  return (
    <Link
      href={`/events/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 mt-12 max-w-md w-full relative hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative w-full h-72">
        <div className="max-h-full overflow-hidden">
          <Image
            src={imgURL}
            alt={title}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="p-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-lg text-indigo-600 font-semibold">{venue}</p>
        <p className="text-md italic text-gray-800">{time}</p>
        <p className="text-gray-700">{description}</p>
        {isUpcoming && (
          <span className="px-3 py-1 text-white bg-green-500 rounded-full text-xs font-bold absolute top-4 right-4">
            Upcoming
          </span>
        )}
        {!isUpcoming && (
          <span className="px-3 py-1 text-white bg-gray-400 rounded-full text-xs font-bold absolute top-4 right-4">
            Passed
          </span>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
