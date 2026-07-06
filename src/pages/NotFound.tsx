import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-grad-radial">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-neon-cyan text-sm mb-4"
      >
        ERROR 404
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-6xl md:text-8xl font-bold text-gradient mb-4"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-ink-muted mb-8 max-w-sm"
      >
        This route doesn't resolve to anything — not unlike an untrained
        model on out-of-distribution input.
      </motion.p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-grad-primary text-base font-medium text-sm hover:shadow-glow transition-shadow"
      >
        Back to home
      </Link>
    </div>
  );
}
