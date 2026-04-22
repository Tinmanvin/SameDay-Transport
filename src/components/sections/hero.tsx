import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock4, HeartHandshake, Sparkles, Star } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import { WaveButton } from "../wave-button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const vanY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const word = "SameDay";
  const word2 = "Transport.";

  return (
    <section ref={ref} className="bg-paper relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Decorative oversized background type */}
      <div className="pointer-events-none absolute inset-x-0 top-[58%] -z-0 -translate-y-1/2 select-none text-center">
        <div className="font-display text-[20vw] font-black leading-none tracking-[-0.05em] text-ink/[0.03] whitespace-nowrap">
          MOVE TODAY
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        {/* LEFT — Headline + CTAs */}
        <motion.div
          style={{ y: headlineY }}
          className="relative z-20 lg:col-span-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="chip"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Same-day slots available now
          </motion.span>

          <h1 className="mt-6 font-display text-[15vw] leading-[0.85] tracking-[-0.05em] text-ink sm:text-[88px] lg:text-[clamp(72px,7.5vw,128px)]">
            {[word, word2].map((w, idx) => (
              <span key={w} className="block overflow-hidden pb-[0.05em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.3 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
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
            className="mt-7 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            Fast, reliable van transport for collections, deliveries and urgent moves.
            <span className="mt-1 block font-semibold text-ink">
              Book in minutes. Move today. No stress.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <WaveButton variant="coral" size="lg">
              <span>Get a fast quote</span>
              <ArrowRight className="h-4 w-4" />
            </WaveButton>
            <WaveButton variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              <span>Call now</span>
            </WaveButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70"
          >
            <li className="flex items-center gap-2"><Clock4 className="h-4 w-4 text-coral" /> Same-day availability</li>
            <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-coral" /> Careful handling</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-coral" /> Fully insured transport</li>
          </motion.ul>
        </motion.div>

        {/* RIGHT — Van + floating proof cards */}
        <div className="relative z-10 lg:col-span-6">
          <motion.div
            style={{ y: vanY }}
            initial={{ opacity: 0, x: 80, scale: 1.04 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* coral glow behind van */}
            <div className="pointer-events-none absolute -left-10 top-1/4 -z-0 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 -z-0 h-72 w-72 rounded-full bg-ember/25 blur-3xl" />

            <img
              src={heroVan}
              alt="SameDay Transport branded van bursting forward with a cutaway view of furniture inside"
              width={1600}
              height={1100}
              className="relative z-10 w-full max-w-none drop-shadow-[0_50px_50px_rgba(30,22,18,0.25)]"
            />

            {/* Floating proof card — top */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-2 top-4 z-20 hidden rounded-2xl border border-ink/10 bg-card/95 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(30,22,18,0.35)] backdrop-blur-sm md:flex md:items-center md:gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral text-cream">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                  Avg. response
                </div>
                <div className="font-display text-base font-bold text-ink">Under 5 minutes</div>
              </div>
            </motion.div>

            {/* Floating proof card — bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 left-2 z-20 hidden rounded-2xl bg-ink px-4 py-3 text-cream shadow-[0_20px_40px_-15px_rgba(30,22,18,0.5)] md:flex md:items-center md:gap-3"
            >
              <div className="flex -space-x-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="grid h-7 w-7 place-items-center rounded-full border-2 border-ink bg-coral text-cream"
                  >
                    <Star className="h-3 w-3 fill-current" />
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold">4.9 / 5</div>
                <div className="text-[10px] font-medium text-cream/60">120+ happy moves</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-ink/10 bg-ink/[0.02] py-4 lg:mt-20">
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
