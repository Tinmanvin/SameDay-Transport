import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { WaveButton } from "../wave-button";

export function FinalCta() {
  return (
    <section id="quote" className="relative overflow-hidden bg-ink-grain py-24 text-cream lg:py-36">
      {/* big background type */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="font-display text-[26vw] font-black leading-none tracking-[-0.05em] text-cream/[0.04] whitespace-nowrap">
          TODAY
        </div>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="chip !border-coral/40 !bg-coral/15 !text-coral"
        >
          Ready when you are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-display text-5xl leading-[0.9] tracking-tight sm:text-6xl lg:text-[clamp(72px,9vw,140px)]"
        >
          Need it moved <span className="text-coral">today?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-lg text-cream/70"
        >
          Get a quick quote and lock in your slot now. Most jobs confirmed inside 5 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <WaveButton variant="coral" size="xl">
            Get a fast quote <ArrowRight className="h-5 w-5" />
          </WaveButton>
          <a
            href="tel:+441234567890"
            className="btn-wave btn-wave-light inline-flex h-16 items-center justify-center gap-2 rounded-full border border-cream/30 px-9 text-lg font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" /> Call 0123 456 7890
          </a>
        </motion.div>

        <p className="mt-6 text-sm text-cream/50">
          Fast response · Careful service · No wasted time
        </p>
      </div>
    </section>
  );
}
