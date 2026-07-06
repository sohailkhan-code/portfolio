import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative glass-panel rounded-2xl max-w-lg w-full p-8 shadow-glass"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink-muted hover:text-neon-cyan"
            >
              <FiX size={20} />
            </button>

            <span className="mono-chip text-neon-violet uppercase">
              {project.category}
            </span>
            <h3 className="font-display text-2xl text-ink font-semibold mt-2 mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="mono-chip px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-2 mb-6">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm text-ink flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-neon-cyan" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded-full bg-grad-primary text-base font-medium"
              >
                <FiGithub size={13} /> View Code
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded-full glass-panel hover:text-neon-cyan"
                >
                  <FiExternalLink size={13} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
