import { FiCalendar } from "react-icons/fi";
import Card from "./Card";

type ExperienceCardProps = {
  jobTitle: string;
  company: string;
  date: string;
  description: string;
};

export default function ExperienceCard({
  jobTitle,
  company,
  date,
  description,
}: ExperienceCardProps) {
  return (
    <Card slide="up" lightBg={true}>
      <div className="flex flex-col items-start w-full">
        <div className="w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-start">
          <div className="flex flex-col items-start">
            <h3 className="text-xl text-code-white font-semibold">
              {jobTitle}
            </h3>
            <h4 className="text-accent font-semibold mt-1">{company}</h4>
          </div>

          <div className="flex items-center gap-2 text-body">
            <FiCalendar aria-hidden="true" className="shrink-0" />

            <time className="text-sm whitespace-nowrap text-start font-mono mt-[2px]">
              {date}
            </time>
          </div>
        </div>

        <p className="text-start mt-6 text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
