import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function CallOut(toggleView: any) {
  return (
    <div className="w-2/3 p-4" >
    <div
        className="bg-white text-gray-900 p-6 rounded-md shadow-lg max-w-sm cursor-pointer hover:shadow-xl transition-shadow"
    >
        <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cum dolor obcaecati reprehenderit vel facilis. Sint perspiciatis laborum porro, dolorem, molestias perferendis obcaecati ullam necessitatibus aliquid qui tempore, neque minus.
        </p>
    </div>
    </div>

  )
}

