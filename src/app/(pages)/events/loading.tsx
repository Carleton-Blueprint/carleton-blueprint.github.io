'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BlockContainer from '@/components/BlockContainer';
// import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex justify-center bg-blueprint-50">
      <BlockContainer title="Blueprint Events" roundedCorners inner centered margin>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-16 lg:grid-cols-3 lg:px-12">
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              className="relative h-[20rem] w-full animate-pulse overflow-hidden rounded-[50px] shadow-md md:h-[38rem] md:w-[22rem]"
            >
              <div className="absolute inset-0"></div>
              <div className="absolute inset-0 rounded-[50px] bg-gradient-to-t from-gray-700/70 from-30% to-gray-500/20 to-70%"></div>
              <CardContent className="absolute bottom-0 left-0 w-full px-6 pb-8 text-white">
                <div className="h-6 w-3/4 rounded bg-gray-500"></div>
                <div className="mt-2 h-4 w-1/2 rounded bg-gray-600"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </BlockContainer>
    </div>
  );
}
