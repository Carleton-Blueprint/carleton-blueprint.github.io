// EventsPage.tsx
import React from 'react';
import EventCard from "./_components/EventCard";  // Assuming EventCard is in the same directory

const EventsPage: React.FC = () => {
  // Sample data for events
  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      url: "https://example.com/events/tech-conference-2024"
    },
    {
      id: 2,
      title: "React Workshop",
      url: "https://example.com/events/react-workshop"
    },
    {
      id: 3,
      title: "Startup Pitch Day",
      url: "https://example.com/events/startup-pitch-day"
    },
    {
      id: 4,
      title: "Startup Pitch Day",
      url: "https://example.com/events/startup-pitch-day"
    },
    {
      id: 5,
      title: "Startup Pitch Day",
      url: "https://example.com/events/startup-pitch-day"
    },
            {
      id: 6,
      title: "Startup Pitch Day",
      url: "https://example.com/events/startup-pitch-day"
    },    {
      id: 7,
      title: "Startup Pitch Day",
      url: "https://example.com/events/startup-pitch-day"
    }
            
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} title={event.title} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
