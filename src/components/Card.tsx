import { ReactNode, useEffect, useRef, useState } from "react";

type CardProps = {
  children: ReactNode;
  slide?: "right" | "up";
  lightBg?: boolean;
};

export default function Card({
  children,
  slide = "right",
  lightBg = false,
}: CardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element enters the screen -> set it to visible
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing once it appears
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={domRef}
      className={`hover:border-accent-border border rounded-lg border-divider p-4 flex flex-col gap-4 transform 
        ${!isVisible ? "opacity-0" : ""} 
        ${lightBg && "bg-surface"} 
        ${
          isVisible &&
          (slide === "right" ? "animate-slide-right" : "animate-slide-up")
        }`}
    >
      {children}
    </li>
  );
}
