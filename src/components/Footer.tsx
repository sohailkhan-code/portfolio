export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Sohail Khan. Built with React & FastAPI.
        </p>
        <p className="font-mono text-xs text-ink-faint">
          Designed &amp; developed from scratch.
        </p>
      </div>
    </footer>
  );
}
