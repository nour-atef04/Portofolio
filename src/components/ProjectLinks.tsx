import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectLinks({
  github,
  external,
}: {
  github: string;
  external?: string;
}) {
  return (
    <div className="flex gap-2">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="text-body hover:text-accent-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1 transition-colors duration-300"
        aria-label="GitHub Link"
      >
        <FiGithub size={18} />
      </a>

      {external && (
        <a
          href={external}
          target="_blank"
          rel="noreferrer"
          className="text-body hover:text-accent-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1 transition-colors duration-300"
          aria-label="Project Link"
        >
          <LuExternalLink size={18} />
        </a>
      )}
    </div>
  );
}
