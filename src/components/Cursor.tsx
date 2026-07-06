import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, [role='button'], input, textarea")
      );
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="hidden md:block fixed inset-0 pointer-events-none z-[100]"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-neon-cyan/60"
        animate={{
          x: pos.x - (isPointer ? 20 : 12),
          y: pos.y - (isPointer ? 20 : 12),
          width: isPointer ? 40 : 24,
          height: isPointer ? 40 : 24,
          backgroundColor: isPointer ? "rgba(0,217,255,0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.4 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-neon-cyan"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
      />
    </div>
  );
}
