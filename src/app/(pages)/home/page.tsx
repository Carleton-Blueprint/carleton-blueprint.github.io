import AboutUsBlock from "./_components/AboutUsBlock";
import HeroBlock from "./_components/HeroBlock";
import OurValuesBlock from "./_components/OurValuesBlock";
import ProjectsBlock from "./_components/ProjectsBlock";

export default async function Home() {
  return (
    <div>
      <HeroBlock />

      <div className="flex flex-col space-y-5">
        <AboutUsBlock />
        <OurValuesBlock />
        <ProjectsBlock />
      </div>
    </div>
  );
}
