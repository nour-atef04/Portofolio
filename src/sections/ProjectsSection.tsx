import { FaFolder } from "react-icons/fa";
import Project from "../components/Project";
export default function ProjectsSection() {
  return (
    <section className=" bg-surface min-h-screen flex items-center justify-center p-8 border-t border-divider">
      <div className=" w-full max-w-6xl text-center lg:text-left">
        <h2 className="flex items-center gap-3 text-5xl text-heading font-heading font-bold mb-6">
          <FaFolder className="text-accent mt-2" />
          <span className="text-accent">const</span>
          <span className="text-code-blue">projects</span>
          <span className="text-body">=</span>
          <span className="text-accent">{"[...]"}</span>
        </h2>
        <Project />
      </div>
    </section>
  );
}
