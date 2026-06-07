export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 glass py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <p className="text-xl font-display font-medium text-neutral-300 mb-2">
          "Code is like humor. When you have to explain it, it's bad."
        </p>
        <p className="text-neutral-500 text-sm mb-6">— Cory House</p>

        <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

        <p className="text-neutral-400 text-sm">
          &copy; {currentYear} Jeremia. All rights reserved.{" "}
          <br className="md:hidden" />
          <span className="hidden md:inline"> | </span>
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
