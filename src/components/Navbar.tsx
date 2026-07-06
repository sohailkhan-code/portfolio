import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(["hero", ...links.map((l) => l.id)]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled ? "glass-panel shadow-glass mx-4 md:mx-auto py-2" : ""
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-display font-semibold text-lg text-ink"
        >
          Sohail<span className="text-neon-cyan">.</span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                active === l.id ? "text-neon-cyan" : "text-ink-muted hover:text-ink"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wide bg-grad-primary text-base font-medium hover:shadow-glow transition-shadow"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass-panel rounded-2xl p-5 flex flex-col gap-4"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left font-mono text-sm uppercase tracking-wide text-ink-muted hover:text-neon-cyan"
              >
                {l.label}
              </button>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 rounded-full text-xs font-mono uppercase bg-grad-primary text-base font-medium"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
