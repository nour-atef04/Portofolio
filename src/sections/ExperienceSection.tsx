import { LuBriefcase } from "react-icons/lu";
import ExperienceCard from "../components/ExperienceCard";
import SectionLayout from "../components/SectionLayout";

const jobs = [
  {
    jobTitle: "Applications Integration Intern",
    company: "Ejada",
    date: "July 2025 – August 2025",
    description: "Engineered a microservices-based virtual banking system utilizing Spring Boot, Java, and mySQL. Implemented user authentication, money transfers and transaction history, featuring a BFF layer, Kafka-based async communication, reactive APIs (WebFlux), and secure API exposure using WSO2 API Manager."
  },
  {
    jobTitle: "Software Engineering Intern",
    company: "Alexandria Mineral Oils Co. (AMOC)",
    date: "June 2024 – July 2024",
    description: "Completed intensive technical training focusing on enterprise software operations, analyzing large-scale IT infrastructure and deployment workflows."
  }
]

export default function ExperienceSection() {
  return (
    <SectionLayout
      title="experience"
      icon={<LuBriefcase className="text-accent mt-2" />}
    >
      {jobs.map((job, i) =>(
        <ExperienceCard {...job} key={i}/>
      ))}
    </SectionLayout>
  );
}
