import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiSend,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "./About";

const WHATSAPP_LINK =
  "https://wa.me/918851392698?text=Hi%20Sohail,%20I%20visited%20your%20portfolio%20and%20I%20would%20love%20to%20connect%20with%20you%20regarding%20your%20work.";
const EMAIL = "sohailkhanbrock@gmail.com";
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

const socials = [
  { icon: FaWhatsapp, href: WHATSAPP_LINK, label: "WhatsApp" },
  { icon: FiMail, href: `mailto:${EMAIL}`, label: "Email" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/sohail-khan-048976262/",
    label: "LinkedIn",
  },
  { icon: FiGithub, href: "https://github.com/sohailkhan-code", label: "GitHub" },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/buildwith.sohail/",
    label: "Instagram",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    toast.success("Email copied to clipboard");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Message sent — thanks for reaching out!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Backend not connected yet — message not saved.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="05 / Get in touch" title="Contact" />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-7 space-y-4"
          >
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Your name"
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="you@example.com"
            />
            <div>
              <label className="text-xs font-mono uppercase text-ink-muted mb-1.5 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me about the opportunity or project..."
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:shadow-glow resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-grad-primary text-base font-medium text-sm hover:shadow-glow transition-shadow disabled:opacity-60"
            >
              <FiSend size={14} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel rounded-2xl p-7">
              <p className="text-ink-muted text-sm leading-relaxed mb-5">
                Prefer a faster reply? Ping me directly on WhatsApp, or reach
                out on whichever platform you already live on.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-medium mb-4 hover:bg-[#25D366]/20 transition-colors"
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full glass-panel text-sm text-ink-muted hover:text-neon-cyan transition-colors"
              >
                <FiCopy size={14} /> {EMAIL}
              </button>
            </div>

            <div className="flex items-center justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-ink-muted hover:text-neon-cyan hover:shadow-glow transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-mono uppercase text-ink-muted mb-1.5 block">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:shadow-glow"
      />
    </div>
  );
}
