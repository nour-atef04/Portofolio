export default function Name() {
  return (
    <div className="lg:animate-slide-right animate-slide-up w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
      <span className="text-xl text-body font-mono">Hello, I'm</span>

      <h1
        className="text-9xl text-accent font-heading font-bold tracking-tighter flex md:flex-row flex-col lg:flex-col gap-2"
        aria-label="Nour Atef"
      >
        <span aria-hidden="true">Nour</span>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true">Atef</span>
      </h1>
    </div>
  );
}
