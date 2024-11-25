import React from 'react';
import Image from 'next/image';
import callOutIcon from '../_assets/callout.svg';

export default function CallOut({ toggleVisibility }: { toggleVisibility: () => void }) {
  return (
    <div className="absolute top-4 left-4 z-50"> 
      <div
        className="bg-white text-gray-900 p-6 rounded-md shadow-lg max-w-sm cursor-pointer hover:shadow-xl transition-shadow relative"
      >
        <button
          onClick={toggleVisibility}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <div className="flex items-center space-x-4">
          <Image src={callOutIcon} alt="Call Out Icon" width={50} height={50} />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            cum dolor obcaecati reprehenderit vel facilis. Sint perspiciatis laborum
            porro, dolorem, molestias perferendis obcaecati ullam necessitatibus aliquid
            qui tempore, neque minus.
          </p>
        </div>
      </div>
    </div>
  );
}
