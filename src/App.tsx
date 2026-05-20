import UserLinks from "./components/UserLinks";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div className="bg-base text-body font-sans relative overflow-x-hidden">
      <UserLinks />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
