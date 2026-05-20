import { FaFolder } from "react-icons/fa";
import Project from "../components/Project";

const Projects = [
  {
    title: "Paperless",
    description:
      "Full-stack study notes platform built with Next.js App Router. Features include markdown note management, authentication, and an AI-powered study suite featuring automated summarization, dynamic quiz generation, instant grading, and a spaced-repetition targeted review mode.",
    githubLink: "https://github.com/nour-atef04/Paperless",
    externalLink: "https://paperless-eta.vercel.app/notes",
    tags: ["Next.js", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS"],
    images: [
      "paperless-1.png",
      "paperless-2.png",
      "paperless-3.png",
      "paperless-4.png",
      "paperless-5.png",
      "paperless-6.png",
      "paperless-7.png",
      "paperless-8.png",
      "paperless-9.png",
      "paperless-10.png",
      "paperless-11.png",
    ],
  },
  {
    title: "CareerHive",
    description:
      "Professional networking platform built with React.js, featuring authentication, messaging, job bookmarking, and dashboards with dynamic data fetching and caching.",
    githubLink: "https://github.com/nour-atef04/CareerHive",
    externalLink: "https://career-hive-connect.vercel.app/",
    tags: ["React.js", "Supabase (PostgreSQL)", "TanStack Query"],
    images: [
      "careerhive-1.png",
      "careerhive-2.png",
      "careerhive-3.png",
      "careerhive-4.png",
      "careerhive-5.png",
      "careerhive-6.png",
      "careerhive-7.png",
      "careerhive-8.png",
      "careerhive-9.png",
    ],
  },
  {
    title: "FoodMart",
    description:
      "E-commerce web application to manage food products, including an inventory dashboard and a Python-driven recommendation engine. Fully containerized using Docker.",
    githubLink: "https://github.com/nour-atef04/FoodMart",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Python",
      "Docker",
    ],
  },
  {
    title: "Car Rental System",
    description:
      "A car rental system with date-based booking and an admin dashboard to manage vehicle availability and rentals.",
    githubLink: "https://github.com/nour-atef04/CarRentalSystem",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
  },
  {
    title: "Virtual Banking System",
    description:
      "Microservices-based virtual banking system utilizing Spring Boot. Implemented user authentication, money transfers and transaction history, featuring a BFF layer, Kafka-based async communication, reactive APIs (WebFlux), and secure API exposure using WSO2 API Manager.",
    githubLink: "https://github.com/nour-atef04/Virtual-Bank-System",
    tags: [
      "Spring Boot",
      "Microservices",
      "Kafka",
      "WSO2",
      "WebFlux",
      "Hibernate",
      "MySQL",
    ],
  },
  {
    title: "Chess Game",
    description:
      "Chess game in Java using OOP design patterns to manage complex game state and piece interactions. Integrated move validation logic, a turn-based system, and a graphical user interface (GUI) to provide a seamless, interactive user experience",
    githubLink: "https://github.com/nour-atef04/Chess",
    tags: ["Java", "OOP"],
    images: [
      "chess-1.png",
      "chess-2.png",
      "chess-3.png",
      "chess-4.png",
      "chess-5.png",
      "chess-6.png",
      "chess-0.png",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className=" bg-surface min-h-screen flex items-center justify-center p-8 border-t border-divider">
      <div className=" w-full max-w-6xl text-center lg:text-left flex flex-col gap-6">
        <h2
          aria-label="Projects"
          className="flex items-center gap-3 text-5xl text-heading font-heading font-bold mb-6"
        >
          <FaFolder aria-hidden="true" className="text-accent mt-2" />
          <span aria-hidden="true" className="text-accent">
            const
          </span>
          <span aria-hidden="true" className="text-code-blue">
            projects
          </span>
          <span aria-hidden="true" className="text-body">
            =
          </span>
          <span aria-hidden="true" className="text-accent">
            {"[...]"}
          </span>
        </h2>
        <ul className="flex flex-col gap-6">
          {Projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              externalLink={project.externalLink}
              tags={project.tags}
              images={project.images}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
