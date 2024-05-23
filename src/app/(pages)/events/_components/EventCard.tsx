import Image from 'next/image';
import React from 'react';

interface EventCardProps {
    imgURL: string;
    title: string;
    venue: string;
    description: string;
    isUpcoming: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ imgURL, title, venue, description, isUpcoming }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-200 mt-12 max-w-md w-full relative">
            <div className="relative w-full h-72">
                <Image src={imgURL} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-bold mb-3 leading-tight">{title}</h2>
                <p className="font-semibold text-gray-600">{venue}</p>
                <p className="text-gray-500 text-sm mt-1">{description}</p>
                {isUpcoming && <span className="px-3 py-1 text-white bg-green-500 rounded-full text-xs font-bold absolute top-4 right-4">Upcoming</span>}
            </div>
        </div>
    );
};

export default EventCard;
