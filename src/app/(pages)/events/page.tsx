import React from "react";
import EventCard from "./_components/EventCard"; // Assuming EventCard is in the same directory
import getEvents from "@/lib/notion/events";
import blueprint from "./_assets/eventPlaceholder.jpeg";

const EventsPage: React.FC = async () => {
  const res = await getEvents();
  return (
    <div className="bg-[#E7F2FD]">
        <div className="container mx-auto p-4 pt-[70px]" >
        {/* Added bg-blue-500 and text-white classes to h2 */}
        <h2 className="text-2xl font-bold text-center bg-blue-500 text-white px-12 py-3 pt-3 rounded-full w-full mb-0">
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {res.map((event) => (
            <EventCard
              id={event.eventPageId}
              key={event.eventName}
              imgURL={event.coverURL === "No URL" ? blueprint : event.coverURL}
              title={event.eventName}
              venue={event.venue}
              time={event.date}
              description={event.description}
              isUpcoming={event.status === "Scheduled"}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default EventsPage;
