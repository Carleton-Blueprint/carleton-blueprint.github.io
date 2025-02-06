import AboutUsBlock from './_components/AboutUsBlock';
import HeroBlock from './_components/HeroBlock';
import OurValuesBlock from './_components/OurValuesBlock';
import ProjectsBlock from './_components/ProjectsBlock';
import EventsBlock from './_components/EventsBlock';
import SponsorsBlock from './_components/SponsorsBlock';

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroBlock />
      <div className="flex flex-col">
        <AboutUsBlock />
        <ProjectsBlock />
        <EventsBlock />
        <SponsorsBlock />
        <OurValuesBlock />
      </div>
    </div>
  );
}
