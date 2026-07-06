import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { SectionHeading } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="04 / Credentials" title="Certifications" />

        <div className="relative mt-14 pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-transparent" />

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-base border-2 border-neon-cyan shadow-glow" />
              <div className="glass-panel rounded-xl p-5 hover:shadow-glow transition-shadow">
                <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                  <h3 className="font-display text-ink font-semibold">
                    {cert.title}
                  </h3>
                  <span className="mono-chip text-neon-cyan">{cert.date}</span>
                </div>
                <p className="text-xs font-mono text-neon-violet mb-2 uppercase">
                  {cert.issuer}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
