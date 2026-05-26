import { ReactNode } from "react";

type SectionLayoutProps = {
  children: ReactNode;
  title?: string;
  title2?: string;
  icon: ReactNode;
  lightBg?: boolean;
  className?: string;
};

export default function SectionLayout({
  children,
  title,
  title2,
  icon,
  lightBg = false,
  className,
}: SectionLayoutProps) {
  return (
    <section
      className={`${className} ${lightBg && "bg-surface"} min-h-screen flex items-center justify-center p-2 sm:p-8 border-t border-divider`}
    >
      <div className=" w-full max-w-6xl text-center lg:text-left flex flex-col gap-6">
        <h2
          aria-label={title}
          className="px-8 pt-8 text-3xl flex-wrap flex items-center gap-3 min-[460px]:text-5xl text-heading font-heading font-bold mb-6"
        >
          {/* <FaFolder aria-hidden="true" className=" text-accent mt-2" /> */}
          {title ? (
            <>
              <span aria-hidden="true">{icon}</span>
              <span aria-hidden="true" className=" text-accent">
                const
              </span>
              <span aria-hidden="true" className="text-code-blue">
                {title}
              </span>
              <span aria-hidden="true" className="text-body">
                =
              </span>
              <span aria-hidden="true" className=" text-accent">
                {"[...]"}
              </span>
            </>
          ) : (
            <>
              <span aria-hidden="true">{icon}</span>
              <span aria-hidden="true" className=" text-accent">
                function
              </span>
              <span aria-hidden="true" className="text-code-blue">
                {title2
                  ?.toLowerCase()
                  .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())}
                ()
              </span>
            </>
          )}
        </h2>
        {children}
      </div>
    </section>
  );
}
