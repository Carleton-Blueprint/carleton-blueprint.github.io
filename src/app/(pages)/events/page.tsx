import React from 'react';
import EventCard from "./_components/EventCard";  // Assuming EventCard is in the same directory

const EventsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4" style={{ paddingTop: '70px' }}>
      {/* Added bg-blue-500 and text-white classes to h2 */}
      <h2 className="text-2xl font-bold text-center mb-6 bg-blue-500 text-white py-2 rounded">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventCard 
            imgURL="/assets/project_night.png"
            title="2024 Project Night"
            venue="HP 5345, Monday (March 25th), 6pm"
            description="Join us for an epic Trivia Night hosted by Blueprint! Test your knowledge and meet new friends 🙌"
            isUpcoming={false}
        />
        <EventCard 
            imgURL="/assets/social_triva_night.png"
            title="Trivia Night 2023"
            venue="HP 3431, Friday (April 5th), 6pm"
            description="**Got a project you've been working on? Want to work on a project with others?**
        Join us on our first Side Project Night to showcase your project, look for teammates, or network with others!"
            isUpcoming={true}
        />
      </div>
    </div>
  );
};

export default EventsPage;
