import CodeWindow from "./components/CodeWindow";
import Name from "./components/Name";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function App() {
  return (
    <div className="bg-base min-h-screen flex items-center p-8 text-body font-sans relative">
      <div className="absolute top-8 right-8 flex gap-6">
        <a
          href="https://github.com/nour-atef04"
          target="_blank"
          rel="noreferrer"
          className="text-body hover:text-accent-border transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <FiGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/nour-mohamed-atef/"
          target="_blank"
          rel="noreferrer"
          className="text-body hover:text-accent-border transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin size={18} />
        </a>
      </div>
      <div className="mt-20 lg:mt-0 w-full max-w-7xl flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
        <Name />
        <CodeWindow />
      </div>
    </div>
  );
}

export default App;
