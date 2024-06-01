import AboutUsBlock from "./_components/AboutUsBlock";
import HeroBlock from "./_components/HeroBlock";
import OurValuesBlock from "./_components/OurValuesBlock";
import ProjectsBlock from "./_components/ProjectsBlock";
import GetInvolvedBlock from "./_components/GetInvolvedBlock";

export default async function Home() {
  return (
    <div>
      <HeroBlock />
      <div className="flex flex-col">
        <AboutUsBlock />
        <ProjectsBlock />
        <OurValuesBlock />
        <GetInvolvedBlock />
      </div>
    </div>
  );
}
