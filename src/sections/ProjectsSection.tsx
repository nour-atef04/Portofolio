import { FaFolder } from "react-icons/fa";
import Project from "../components/Project";
import SectionLayout from "../components/SectionLayout";

const Projects = [
  {
    title: "Paperless",
    description:
      "Full-stack study notes platform built with Next.js App Router. Features include markdown note management, authentication, and an AI-powered study suite featuring automated summarization, dynamic quiz generation, instant grading, and a spaced-repetition targeted review mode.",
    githubLink: "https://github.com/nour-atef04/Paperless",
    externalLink: "https://paperless-eta.vercel.app/notes",
    tags: ["Next.js", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS"],
    images: [
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
      "paperless-1.png",
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
      "careerhive-2.png",
      "careerhive-3.png",
      "careerhive-4.png",
      "careerhive-5.png",
      "careerhive-6.png",
      "careerhive-7.png",
      "careerhive-8.png",
      "careerhive-9.png",
      "careerhive-1.png",
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
    images: [
      "foodmart-5.png",
      "foodmart-6.png",
      "foodmart-7.png",
      "foodmart-8.png",
      "foodmart-9.png",
      "foodmart-1.png",
      "foodmart-3.png",
      "foodmart-2.png",
      "foodmart-4.png",
    ],
  },
  {
    title: "Car Rental System",
    description:
      "A car rental system with date-based booking and an admin dashboard to manage vehicle availability and rentals.",
    githubLink: "https://github.com/nour-atef04/CarRentalSystem",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    images: [
      "car-4.png",
      "car-5.png",
      "car-6.png",
      "car-7.png",
      "car-8.png",
      "car-1.png",
      "car-9.png",
      "car-2.png",
      "car-3.png",
    ],
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
    images: [
      "VBS-1.png",
      "VBS-2.png",
      "VBS-3.png",
      "VBS-4.png",
      "VBS-5.png",
      "VBS-6.png",
      "VBS-7.png",
      "VBS-8.png",
      "VBS-9.png",
      "VBS-10.png",
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
    <SectionLayout
      title="projects"
      icon={<FaFolder className="text-accent mt-2" />}
      lightBg={true}
    >
      <ul className="flex flex-col gap-6">
        {Projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </SectionLayout>
  );
}
