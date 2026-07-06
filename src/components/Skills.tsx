import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="02 / Toolkit" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="glass-panel rounded-2xl p-5 hover:shadow-glow transition-shadow group"
            >
              <span className="mono-chip text-neon-violet uppercase block mb-3">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mono-chip px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-ink-muted group-hover:text-ink transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
