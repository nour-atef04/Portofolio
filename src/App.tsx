import UserLinks from "./components/UserLinks";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <div className="bg-base text-body font-sans relative overflow-x-hidden">
      <UserLinks />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
