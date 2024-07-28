import React from "react";
import EventCard from "./_components/EventCard"; // Assuming EventCard is in the same directory
import getEvents from "@/lib/notion/events";
import BlockContainer from "../home/_components/BlockContainer";
import blueprint from "./_assets/eventPlaceholder.jpeg";

const EventsPage: React.FC = async () => {
  const res = await getEvents();
  return (
    <div className="bg-blueprint-50 flex justify-center">
          <BlockContainer title="Blueprints Events" roundedCorners mobile_padding centered margin>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-16 lg:px-12">
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
          </BlockContainer>
        </div>
  );
};

export default EventsPage;


//       <h2 className="text-4xl font-bold text-blue-500 px-12 py-3 pt-3 rounded-full w-full mb-0">
          //Blueprints Events
        //</h2>