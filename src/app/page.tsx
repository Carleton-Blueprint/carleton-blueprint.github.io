import AboutUsBlock from "./AboutUsBlock";
import HeroBlock from "./HeroBlock";
import OurValuesBlock from "./OurValuesBlock";
import ProjectsBlock from "./ProjectsBlock";

export default function App() {
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
