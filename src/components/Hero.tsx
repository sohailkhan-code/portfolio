import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMessageCircle } from "react-icons/fi";
import NeuralCanvas from "./NeuralCanvas";
import { useTypingEffect } from "../hooks/useTypingEffect";

const roles = [
  "Software Developer",
  "Python Developer",
  "Machine Learning Engineer",
  "NLP Enthusiast",
  "Backend Developer",
];

export default function Hero() {
  const typed = useTypingEffect(roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grad-radial"
    >
      <NeuralCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 w-28 h-28 md:w-32 md:h-32 rounded-full relative animate-float"
        >
          <div className="absolute inset-0 rounded-full bg-grad-primary opacity-60 blur-md" />
          <img
            src="/profile.jpg"
            alt="Sohail Khan"
            className="relative w-full h-full rounded-full object-cover border-2 border-white/10 shadow-glow"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mono-chip px-3 py-1.5 rounded-full glass-panel text-neon-cyan mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          STATUS: AVAILABLE_FOR_HIRE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-semibold text-ink mb-4"
        >
          Sohail Khan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-9 md:h-10 font-mono text-lg md:text-2xl text-gradient font-medium mb-8"
        >
          {typed}
          <span className="cursor-blink text-neon-cyan">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-ink-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I design and ship backend systems and machine learning pipelines that
          hold up in production — from data to deployed prediction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-full bg-grad-primary text-base font-medium text-sm hover:shadow-glow transition-shadow"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full glass-panel text-sm font-medium flex items-center gap-2 hover:shadow-glow transition-shadow"
          >
            <FiDownload size={14} /> Download Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-full glass-panel text-sm font-medium flex items-center gap-2 hover:shadow-glow-violet transition-shadow"
          >
            <FiMessageCircle size={14} /> Let's Connect
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-neon-cyan z-10"
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  );
}
