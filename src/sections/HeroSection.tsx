import CodeWindow from "../components/CodeWindow";
import Name from "../components/Name";

export default function HeroSection() {
  return (
    <main className="min-h-screen flex items-center p-8">
      <div className="mt-20 lg:mt-0 w-full max-w-7xl flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
        <Name />
        <CodeWindow />
      </div>
    </main>
  );
}
