import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiSearch } from "react-icons/fi";
import { projects } from "../data/projects";
import type { Project } from "../types";
import { SectionHeading } from "./About";
import ProjectModal from "./ProjectModal";

const categories = ["All", "ML", "NLP", "Web"] as const;

function ProjectThumbnail({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = `/projects/${project.image}.jpg`;

  return (
    <div className="h-40 relative overflow-hidden bg-gradient-to-br from-[#0F1420] to-[#161C2C] flex items-center justify-center">
      {!imgFailed && (
        <img
          src={src}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent" />
      {imgFailed && (
        <>
          <div className="absolute inset-0 bg-grad-primary opacity-10 group-hover:opacity-20 transition-opacity" />
          <span className="font-display text-2xl text-ink-faint tracking-wide relative z-10">
            {project.category}
          </span>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<typeof categories[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, filter]);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="03 / Work" title="Projects" />

        <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-8">
          <div className="relative flex-1">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
              size={16}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or tech stack..."
              className="w-full glass-panel rounded-full pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:shadow-glow"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${
                  filter === c
                    ? "bg-grad-primary text-base"
                    : "glass-panel text-ink-muted hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-panel rounded-2xl overflow-hidden group hover:shadow-glow transition-shadow"
              >
                <ProjectThumbnail project={project} />

                <div className="p-6">
                  <h3 className="font-display text-lg text-ink font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted mb-4">{project.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="mono-chip px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-full glass-panel hover:text-neon-cyan transition-colors"
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-full glass-panel hover:text-neon-cyan transition-colors"
                      >
                        <FiExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="ml-auto text-xs font-mono text-neon-violet hover:underline"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-faint font-mono text-sm mt-12">
            No projects match "{query}".
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
