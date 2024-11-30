import AboutUsBlock from './_components/AboutUsBlock';
import HeroBlock from './_components/HeroBlock';
import OurValuesBlock from './_components/OurValuesBlock';
import ProjectsBlock from './_components/ProjectsBlock';
import EventsBlock from './_components/EventsBlock';
import HeroBlockMobile from './_components/mobile/HeroBlockMobile';
import AboutUsBlockMobile from './_components/mobile/AboutUsBlockMobile';
import ProjectsBlockMobile from './_components/mobile/ProjectsBlockMobile';

export default async function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <HeroBlock />
        <div className="flex flex-col">
          <AboutUsBlock />
          <ProjectsBlock />
          <EventsBlock />
          <OurValuesBlock />
        </div>
      </div>
      <div className="block md:hidden">
        <HeroBlockMobile />
        <div className="flex flex-col">
          <AboutUsBlockMobile />
          <ProjectsBlockMobile />
          <EventsBlock />
          <OurValuesBlock />
        </div>
      </div>
    </div>
  );
}
