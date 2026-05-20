import { useEffect, useRef, useState } from "react";
import ProjectLinks from "../components/ProjectLinks";
import { CiFolderOn } from "react-icons/ci";
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
  // --- Intersection Observer for animation ---
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When the element enters the screen -> set it to visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it appears
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={domRef}
      className={`hover:border-accent-border border rounded-lg border-divider p-4 flex flex-col gap-4 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <CiFolderOn className="text-accent" size={30} aria-hidden="true" />
          <h3 className="text-lg text-code-white font-semibold">{title}</h3>
        </div>
        <ProjectLinks github={githubLink} external={externalLink} />
      </div>

      <ImageCarousel images={images} />

      <p className="text-start">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-400/10 text-code-blue font-mono text-xs py-1 border border-white/10 rounded-sm px-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}
