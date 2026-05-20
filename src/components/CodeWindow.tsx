export default function CodeWindow() {
  return (
    <div className="w-full lg:w-1/2 bg-surface rounded-xl border border-divider shadow-theme font-mono text-sm sm:text-base overflow-hidden max-w-3xl">
      <div className="text-sm px-6 py-4 border-b border-divider flex items-center gap-3">
        <span className="text-accent font-bold">{">_"}</span>
        <span className="text-body">~/portfolio/about.ts</span>
      </div>

      <div className="text-sm p-6 space-y-2 overflow-x-auto text-left">
        <div className=" flex gap-2">
          <span className=" text-[#c27aae]">const</span>
          <span className="text-[#aa9ce2]">developer</span>
          <span className="text-[#c27aae]">=</span>
          <span className="text-heading">{"{"}</span>
        </div>

        <div className="pl-8 space-y-2">
          <div className="flex gap-2">
            <span className="text-[#aa9ce2]">name:</span>
            <span className="text-[#8cedfa]">"Nour Atef"</span>
            <span className="text-[#c27aae]">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-[#aa9ce2]">role:</span>
            <span className="text-[#8cedfa]">"Full Stack Developer"</span>
            <span className="text-[#c27aae]">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-[#aa9ce2]">location:</span>
            <span className="text-[#8cedfa]">"Alexandria, Egypt"</span>
            <span className="text-[#c27aae]">,</span>
          </div>

          <div className="flex gap-2 flex-wrap">
            <span className="text-[#aa9ce2]">skills:</span>
            <span className="text-heading">[</span>
            <span className="text-[#8cedfa]">"React"</span>
            <span className="text-[#c27aae]">, </span>
            <span className="text-[#8cedfa]">"Next.js"</span>
            <span className="text-[#c27aae]">, </span>
            <span className="text-[#8cedfa]">"Node.js"</span>
            <span className="text-[#c27aae]">, </span>
            <span className="text-[#8cedfa]">"TypeScript"</span>
            <span className="text-heading">],</span>
          </div>

          <div className="flex gap-2">
            <span className="text-[#aa9ce2]">passion:</span>
            <span className="text-[#8cedfa]">
              "Building amazing web experiences"
            </span>
            <span className="text-[#c27aae]">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-[#aa9ce2]">currentFocus:</span>
            <span className="text-[#8cedfa]">
              "Creating beautiful, performant applications"
            </span>
          </div>
        </div>

        <div>
          <span className="text-heading">{"};"}</span>
        </div>
      </div>

      <div className="text-sm px-6 py-4 border-t border-divider bg-black/10">
        <span className="text-[#67b27a]">
          {"// Let's build something amazing together!"}
        </span>
      </div>
    </div>
  );
}
