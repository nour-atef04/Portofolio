import UserLinks from "./components/UserLinks";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div className="bg-base text-body font-sans relative overflow-x-hidden">
      <UserLinks />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
