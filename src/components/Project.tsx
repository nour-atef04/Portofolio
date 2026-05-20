import ProjectLinks from "../components/ProjectLinks";
import { CiFolderOn } from "react-icons/ci";

export default function Project() {
  return (
    <div className="hover:border-accent-border transition border rounded-lg border-divider p-4 flex flex-col gap-4 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <CiFolderOn className="text-accent" size={30} />
          <h2 className="text-lg text-code-white font-semibold">Paperless</h2>
        </div>
        <ProjectLinks
          github="https://github.com/nour-atef04/Paperless"
          external="https://paperless-eta.vercel.app/notes"
        />
      </div>
      <p className="text-start">
        Full-stack study notes platform built with Next.js App Router. Features
        include markdown note management, authentication, and an AI-powered
        study suite featuring automated summarization, dynamic quiz generation,
        instant grading, and a spaced-repetition targeted review mode.
      </p>
    </div>
  );
}
