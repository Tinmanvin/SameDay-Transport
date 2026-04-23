import { motion } from "framer-motion";
import logoImg from "@/assets/sameday-logo.jpg";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      className={`group inline-flex items-center ${className ?? ""}`}
      aria-label="SameDay Transport home"
    >
      <motion.img
        src={logoImg}
        alt="SameDay Transport Jobs"
        className="h-12 w-auto md:h-14"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
      />
    </a>
  );
}
