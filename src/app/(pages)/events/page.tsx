import React from 'react';
import EventCard from "./_components/EventCard";

const EventsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4" style={{ paddingTop: '70px' }}>
      <h2 className="text-2xl font-bold text-center bg-blue-500 text-white px-12 py-3 pt-3 rounded-full w-full mb-0">
        All Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventCard 
            imgURL="/assets/social_triva_night.png"
            title="Trivia Night 2023"
            time='Monday (March 25th), 6pm'
            venue="HP 3431"
            description="Got a project you've been working on? Want to work on a project with others? Join us!"
            isUpcoming={false}
            linkUrl="https://cublueprint.notion.site/f988151abd6448ebb70053c5ca1278f9?v=2042106f266f42d09c6d3357de17731b&p=a761217c557f467a9fa0ebadbf7ed033&pm=c"
        />
        <EventCard 
            imgURL="/assets/project_night.png"
            title="2024 Project Night"
            venue="HP 5345"
            time = "Friday (April 5th), 6pm"
            description="Join us for an epic Trivia Night hosted by Blueprint! Test your knowledge and meet new friends 🙌"
            isUpcoming={false}
            linkUrl="https://cublueprint.notion.site/f988151abd6448ebb70053c5ca1278f9?v=2042106f266f42d09c6d3357de17731b&p=432e19e2e97643e7bec0ef52d3ce13ad&pm=c"
        />
      </div>
    </div>
  );
};

export default EventsPage;
