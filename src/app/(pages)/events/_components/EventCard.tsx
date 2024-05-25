import Image from 'next/image';
import React from 'react';

interface EventCardProps {
    imgURL: string;
    title: string;
    venue: string;
    time: string;
    description: string;
    isUpcoming: boolean;
    linkUrl?: string;
}

const EventCard: React.FC<EventCardProps> = ({ imgURL, title, venue, time, description, isUpcoming, linkUrl }) => {
    return (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 mt-12 max-w-md w-full relative hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            <div className="relative w-full h-72">
                <Image src={imgURL} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center"> 
                <h2 className="text-xl font-bold mb-3">{title}</h2>
                <p className="text-lg text-indigo-600 font-semibold">{venue}</p>
                <p className="text-md italic text-gray-800">{time}</p>
                <p className="text-gray-700">{description}</p>
                {isUpcoming && <span className="px-3 py-1 text-white bg-green-500 rounded-full text-xs font-bold absolute top-4 right-4">Upcoming</span>}
                {!isUpcoming && <span className="px-3 py-1 text-white bg-gray-300 rounded-full text-xs font-bold absolute top-4 right-4">Passed</span>}
            </div>
        </a>
    );
};

export default EventCard;
