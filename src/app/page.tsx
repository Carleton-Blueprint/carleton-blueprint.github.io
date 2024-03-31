import AboutUsBlock from "./components/AboutUsBlock";
import HeroBlock from "./components/HeroBlock";
import OurValuesBlock from "./components/OurValuesBlock";
import ProjectsBlock from "./components/ProjectsBlock";

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
