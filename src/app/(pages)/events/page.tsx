import React from "react";
import EventCard from "./_components/EventCard"; // Assuming EventCard is in the same directory
import getEvents from "@/lib/notion/events";
import blueprint from "./_assets/eventPlaceholder.jpeg";

const EventsPage: React.FC = async () => {
  const res = await getEvents();
  return (
    <div className="container mx-auto p-4 pt-[70px]">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-blue-500 px-12 py-3 pt-3 rounded-full w-full mb-0">
          Blueprints Events
        </h2>
        <hr className="w-1/2 border-t-4 border-blue-500 my-4 mx-auto" />
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {res.map((event) => (
            <EventCard
              id={event.eventPageId}
              key={event.eventName}
              imgURL={event.coverURL}
              title={event.eventName}
              venue={event.venue}
              time={event.date}
              description={event.description}
              isUpcoming={event.status === "Scheduled"}
            />
          ))}
        </div>
    </div>
  );
};

export default EventsPage;
