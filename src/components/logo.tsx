import { motion } from "framer-motion";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={`group inline-flex items-center gap-2 ${className ?? ""}`} aria-label="SameDay Transport home">
      <motion.svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        aria-hidden
      >
        <rect x="1" y="1" width="38" height="38" rx="11" fill="var(--ink)" />
        <path d="M7 24h18l4-7h4v9H7v-2z" fill="var(--coral)" />
        <circle cx="13" cy="28" r="2.6" fill="var(--cream)" />
        <circle cx="28" cy="28" r="2.6" fill="var(--cream)" />
        <path d="M9 16h12" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 19h8" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round" />
      </motion.svg>
      <div className="leading-[0.95]">
        <div className="font-display text-[15px] font-extrabold tracking-tight text-ink">SameDay</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">Transport</div>
      </div>
    </a>
  );
}
