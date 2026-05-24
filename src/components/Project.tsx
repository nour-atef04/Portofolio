import { CiFolderOn } from "react-icons/ci";
import ProjectLinks from "../components/ProjectLinks";
import Card from "./Card";
import ImageCarousel from "./ImageCarousel";

type ProjectProps = {
  title: string;
  description: string;
  githubLink: string;
  externalLink?: string;
  tags: string[];
  images?: string[];
};

export default function Project({
  title,
  description,
  githubLink,
  externalLink,
  tags,
  images,
}: ProjectProps) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <CiFolderOn className="text-accent" size={30} aria-hidden="true" />
          <h3 className="text-lg text-code-white font-semibold">{title}</h3>
        </div>
        <ProjectLinks github={githubLink} external={externalLink} />
      </div>

      <ImageCarousel images={images} />

      <p className="text-start">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className=" bg-gray-400/10 text-code-blue font-mono text-xs py-1 border border-white/10 rounded-sm px-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
