export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-divider py-8 text-center">
      <p className=" text-code-green font-mono text-xs mb-3">
        // Built with React, TypeScript & Tailwind CSS
      </p>

      <p className="text-body text-sm">© {currentYear} Nour Atef.</p>
    </footer>
  );
}
