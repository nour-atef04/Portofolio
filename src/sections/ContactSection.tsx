import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import SectionLayout from "../components/SectionLayout";
import Card from "../components/Card";

const contactLinks = [
  {
    name: "Email",
    icon: FaRegEnvelope,
    href: "mailto:nourmohamedatef04@gmail.com",
    label: "Send me an email",
  },
  {
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/nour-atef04",
    label: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nour-mohamed-atef/",
    label: "Visit my LinkedIn profile",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/201061026156",
    label: "Chat with me on WhatsApp",
  },
];

export default function ContactSection() {
  return (
    <SectionLayout
      className="max-w-4xl mx-auto"
      icon={<FaRegEnvelope className="text-accent mt-2" />}
      title2="Get in touch"
    >
      <Card slide="up" lightBg={true} highlight={false}>
        <div className="flex flex-col gap-8 py-4">
          <p className="text-start text-code-white leading-relaxed">
            I’m currently seeking new opportunities as a{" "}
            <span className="text-accent font-semibold">
              Frontend, Backend, or Full-Stack Developer
            </span>
            , where I can contribute to building innovative projects with{" "}
            <span className="text-accent font-semibold">AI integration</span>{" "}
            and collaborate with teams that value high-quality code.
            <br />
            <br />
            If my project experience aligns with your team's needs, feel free to
            reach out.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="bg-white/5 rounded-full py-2 px-4 border border-divider hover:border-accent-border transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <div className="flex items-center gap-4">
                <link.icon
                  aria-hidden={true}
                  className="shrink-0 text-accent"
                />
                <span className="text-code-white">{link.name}</span>
              </div>
            </a>
          ))}
        </div>
      </Card>
    </SectionLayout>
  );
}
