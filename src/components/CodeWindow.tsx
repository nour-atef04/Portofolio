export default function CodeWindow() {
  return (
    <div
      className="w-full lg:w-1/2 bg-surface rounded-xl border border-divider shadow-theme font-mono text-sm sm:text-base overflow-hidden max-w-3xl"
      role="region"
      aria-label="Developer profile represented as code"
    >
      <div className="text-sm px-6 py-4 border-b border-divider flex items-center gap-3">
        <span className="text-accent font-bold" aria-hidden="true">
          {">_"}
        </span>
        <span className="text-body">~/portfolio/about.ts</span>
      </div>

      <div className="text-sm p-6 space-y-2 overflow-x-auto text-left leading-relaxed">
        <div>
          <span className="text-code-pink">const</span>{" "}
          <span className="text-code-purple">developer</span>{" "}
          <span className="text-code-pink" aria-hidden="true">=</span>{" "}
          <span className="text-heading" aria-hidden="true">{"{"}</span>
        </div>

        <div className="pl-8 space-y-2">
          <div>
            <span className="text-code-purple">name:</span>{" "}
            <span className="text-code-blue">"Nour Atef"</span>
            <span className="text-code-pink" aria-hidden="true">,</span>
          </div>

          <div>
            <span className="text-code-purple">role:</span>{" "}
            <span className="text-code-blue">"Full Stack Developer"</span>
            <span className="text-code-pink" aria-hidden="true">,</span>
          </div>

          <div>
            <span className="text-code-purple">location:</span>{" "}
            <span className="text-code-blue">"Alexandria, Egypt"</span>
            <span className="text-code-pink" aria-hidden="true">,</span>
          </div>

          <div className="leading-loose sm:leading-relaxed">
            <span className="text-code-purple">skills:</span>{" "}
            <span className="text-heading" aria-hidden="true">[</span>
            <span className="text-code-blue">"React"</span>
            <span className="text-code-pink" aria-hidden="true">, </span>
            <span className="text-code-blue">"Next.js"</span>
            <span className="text-code-pink" aria-hidden="true">, </span>
            <span className="text-code-blue">"Node.js"</span>
            <span className="text-code-pink" aria-hidden="true">, </span>
            <span className="text-code-blue">"TypeScript"</span>
            <span className="text-heading" aria-hidden="true">],</span>
          </div>

          <div>
            <span className="text-code-purple">passion:</span>{" "}
            <span className="text-code-blue">
              "Building amazing web experiences"
            </span>
            <span className="text-code-pink" aria-hidden="true">,</span>
          </div>

          <div>
            <span className="text-code-purple">currentFocus:</span>{" "}
            <span className="text-code-blue">
              "Creating beautiful, performant applications"
            </span>
          </div>
        </div>

        <div>
          <span className="text-heading" aria-hidden="true">
            {"};"}
          </span>
        </div>
      </div>

      <div className="text-sm px-6 py-4 border-t border-divider bg-black/10">
        <span className="text-code-green">
          {"// Let's build something amazing together!"}
        </span>
      </div>
    </div>
  );
}