import { motion, AnimatePresence } from "framer-motion";

interface Props {
  loading: boolean;
}

export default function Loader({ loading }: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-base flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-sm text-neon-cyan tracking-widest">
              <TerminalLine />
            </div>
            <div className="w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-grad-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TerminalLine() {
  return (
    <span>
      $ booting_portfolio<span className="cursor-blink">_</span>
    </span>
  );
}
