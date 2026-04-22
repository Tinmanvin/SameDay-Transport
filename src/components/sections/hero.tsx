import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock4, HeartHandshake } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import { WaveButton } from "../wave-button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const vanY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const word = "SameDay";
  const word2 = "Transport.";

  return (
    <section ref={ref} className="bg-paper relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative background type — subtle, oversized */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 select-none text-center">
        <div className="font-display text-[20vw] font-black leading-none tracking-[-0.05em] text-ink/[0.035] whitespace-nowrap">
          MOVE TODAY
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Left — Headline + CTAs */}
        <motion.div
          style={{ y: headlineY }}
          className="relative z-20 lg:col-span-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="chip mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Same-day slots available now
          </motion.span>

          <h1 className="font-display text-[14vw] leading-[0.85] tracking-[-0.05em] text-ink sm:text-[88px] lg:text-[clamp(64px,6.5vw,120px)]">
            {[word, word2].map((w, idx) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.3 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${idx === 1 ? "text-coral" : ""}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            Fast, reliable van transport for collections, deliveries and urgent moves.
            <span className="block font-semibold text-ink">Book in minutes. Move today. No stress.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <WaveButton variant="coral" size="lg">
              Get a fast quote <ArrowRight className="h-4 w-4" />
            </WaveButton>
            <WaveButton variant="outline" size="lg">
              <Phone className="h-4 w-4" /> Call now
            </WaveButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70"
          >
            <li className="flex items-center gap-2"><Clock4 className="h-4 w-4 text-coral" /> Same-day availability</li>
            <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-coral" /> Careful handling</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-coral" /> Fully insured transport</li>
          </motion.ul>
        </motion.div>

        {/* Right — Van image as the hero centerpiece */}
        <motion.div
          style={{ y: vanY }}
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10 lg:col-span-6"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/15 blur-3xl" />
          <img
            src={heroVan}
            alt="SameDay Transport branded van with cutaway view of furniture, sofa and boxes inside"
            width={1600}
            height={1100}
            className="relative z-10 mx-auto block w-full max-w-full drop-shadow-[0_50px_40px_rgba(30,22,18,0.22)]"
          />
          <div className="pointer-events-none absolute -bottom-4 left-[8%] right-[8%] z-0 h-8 rounded-full bg-ink/10 blur-2xl" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-ink/10 bg-ink/[0.02] py-4">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-ink/50">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              {["Same-day collections", "Furniture transport", "Marketplace pickups", "Small moves", "Urgent deliveries", "Multi-stop", "Wait & load", "One-off jobs"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
