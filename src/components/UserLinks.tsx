import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function UserLinks() {
  return (
    <div className="absolute top-8 right-8  flex gap-6">
      <a
        href="https://github.com/nour-atef04"
        target="_blank"
        rel="noreferrer"
        className="text-body hover:text-accent-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1 transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <FiGithub size={18} />
      </a>

      <a
        href="https://www.linkedin.com/in/nour-mohamed-atef/"
        target="_blank"
        rel="noreferrer"
        className="text-body hover:text-accent-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1 transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <FiLinkedin size={18} />
      </a>
    </div>
  );
}
