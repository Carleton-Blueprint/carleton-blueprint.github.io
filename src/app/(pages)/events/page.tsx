import React from 'react';
import EventCard from './_components/EventCard'; // Assuming EventCard is in the same directory
import { getEvents } from '@/lib/notion/events';
import BlockContainer from '@/components/BlockContainer';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

const EventsPage: React.FC = async () => {
  const res = await getEvents();
  return (
    <div className="flex justify-center bg-blueprint-50">
      <BlockContainer title="Blueprint Events" roundedCorners inner centered margin>
        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-16 lg:grid-cols-3 lg:px-12">
          {res.map(event => (
            <EventCard
              slug={event.slug}
              key={event.eventName}
              imgURL={event.coverURL}
              title={event.eventName}
              venue={event.venue}
              time={event.date}
              description={event.description}
              isUpcoming={event.status === 'Scheduled'}
            />
          ))}
        </div>
      </BlockContainer>
    </div>
  );
};

export default EventsPage;
