import { motion } from "framer-motion";
import { FiCode, FiCpu, FiServer, FiTarget, FiLayers, FiZap } from "react-icons/fi";

const highlights = [
  { icon: FiCode, label: "Python" },
  { icon: FiCpu, label: "Machine Learning" },
  { icon: FiServer, label: "FastAPI" },
  { icon: FiTarget, label: "Problem Solving" },
  { icon: FiLayers, label: "Backend Development" },
  { icon: FiZap, label: "Scalable Applications" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="01 / Introduction" title="About" />

        <div className="grid md:grid-cols-5 gap-12 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 text-ink-muted leading-relaxed space-y-4 text-[1.05rem]"
          >
            <p>
              I'm a developer who cares more about what happens after the demo
              than during it — the part where a model still performs at 2am,
              or an API holds up under real traffic.
            </p>
            <p>
              My work sits at the intersection of{" "}
              <span className="text-ink">backend engineering</span> and{" "}
              <span className="text-ink">machine learning</span>: building the
              systems that move data in, and the models that turn it into a
              decision. I'm currently deep in FastAPI, PostgreSQL, and
              retrieval-augmented pipelines, with a steady foundation in
              classical ML and NLP.
            </p>
            <p>
              I learn by shipping — every project below went from a blank
              folder to something deployed, measured, and documented.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-panel rounded-xl p-4 flex flex-col gap-2 hover:shadow-glow transition-shadow"
              >
                <h.icon className="text-neon-cyan" size={18} />
                <span className="text-xs font-mono text-ink-muted">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="mono-chip text-neon-cyan uppercase">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-2">
        {title}
      </h2>
    </motion.div>
  );
}
