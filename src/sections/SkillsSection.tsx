import { FaJava } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import {
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Card from "../components/Card";
import SectionLayout from "../components/SectionLayout";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
  { name: "Java", icon: FaJava, color: "hover:text-[#5382A1]" },
  { name: "Python", icon: SiPython, color: "hover:text-[#3776AB]" },
  { name: "React.js", icon: SiReact, color: "hover:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  { name: "TanStack Query", icon: SiReactquery, color: "hover:text-[#FF4154]" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "hover:text-white" },
  { name: "Spring Boot", icon: SiSpringboot, color: "hover:text-[#6DB33F]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
  { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1]" },
  { name: "Redis", icon: SiRedis, color: "hover:text-[#DC382D]" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:text-[#47A248]" },
  { name: "Kafka", icon: SiApachekafka, color: "hover:text-white" },
  { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED]" },
  { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" },
];

export default function SkillsSection() {
  return (
    <SectionLayout
      lightBg={true}
      title="skills"
      icon={<HiCode className="text-accent mt-4" />}
    >
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <div
              className={`text-white/40 transition-colors duration-300 cursor-pointer ${skill.color} flex flex-col gap-2 items-center`}
            >
              <skill.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              <p>{skill.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}
