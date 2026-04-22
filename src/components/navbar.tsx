import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "./logo";
import { WaveButton } from "./wave-button";
import { Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(245,240,232,0)", "rgba(245,240,232,0.85)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(30,22,18,0.08)"]);
  const pad = useTransform(scrollY, [0, 80], ["1.25rem", "0.65rem"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border, paddingTop: pad, paddingBottom: pad }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="story-link text-sm font-medium text-ink/80 hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WaveButton variant="coral" size="sm" onClick={() => (window.location.href = "tel:+441234567890")}>
            <Phone className="h-4 w-4" />
            Call now
          </WaveButton>
        </div>
      </div>
    </motion.header>
  );
}
