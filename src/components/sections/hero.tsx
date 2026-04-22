import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock4, HeartHandshake, Sparkles } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import { WaveButton } from "../wave-button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const vanY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const vanScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const word = "SameDay";
  const word2 = "Transport.";

  return (
    <section
      ref={ref}
      className="bg-paper relative overflow-hidden pt-32 pb-12 lg:pt-36 lg:pb-16"
    >
      {/* Decorative background type */}
      <div className="pointer-events-none absolute inset-x-0 top-[58%] -z-0 -translate-y-1/2 select-none text-center">
        <div className="font-display text-[22vw] font-black leading-none tracking-[-0.05em] text-ink/[0.035] whitespace-nowrap">
          MOVE TODAY
        </div>
      </div>

      {/* coral accent disc behind van */}
      <div className="pointer-events-none absolute left-1/2 top-[55%] -z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* TOP — Headline block, centered */}
        <motion.div
          style={{ y: headlineY }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="chip"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Same-day slots available now
          </motion.span>

          <h1 className="mt-6 font-display text-[15vw] leading-[0.85] tracking-[-0.05em] text-ink sm:text-[88px] lg:text-[clamp(84px,10vw,180px)]">
            {[word, word2].map((w, idx) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.25 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${idx === 1 ? "text-coral italic font-display" : ""}`}
                  style={idx === 1 ? { fontStyle: "italic" } : undefined}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            Fast, reliable van transport for collections, deliveries and urgent moves.{" "}
            <span className="font-semibold text-ink">
              Book in minutes. Move today. No stress.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
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
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-medium text-ink/70"
          >
            <li className="flex items-center gap-2">
              <Clock4 className="h-4 w-4 text-coral" /> Same-day availability
            </li>
            <li className="flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-coral" /> Careful handling
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-coral" /> Fully insured transport
            </li>
          </motion.ul>
        </motion.div>

        {/* BOTTOM — Van, full-bleed, centered. Bursts toward the viewer. */}
        <motion.div
          style={{ y: vanY, scale: vanScale }}
          initial={{ opacity: 0, x: -80, scale: 1.02 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto mt-12 w-full max-w-[1500px] lg:mt-16"
        >
          <img
            src={heroVan}
            alt="SameDay Transport branded van bursting forward with cutaway view of furniture, sofa and boxes inside"
            width={1600}
            height={1100}
            className="relative z-10 mx-auto w-full max-w-none drop-shadow-[0_60px_50px_rgba(30,22,18,0.22)]"
          />
          {/* speed dust shadow under van */}
          <div className="absolute -bottom-2 left-[12%] right-[18%] z-0 h-12 rounded-[50%] bg-ink/15 blur-2xl" />

          {/* Floating annotations on the right side (where the widget used to live) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="absolute right-2 top-8 hidden rounded-2xl border border-ink/10 bg-card/90 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(30,22,18,0.35)] backdrop-blur-sm md:right-6 lg:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral text-cream">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">Avg. response</div>
                <div className="font-display text-lg font-bold text-ink">Under 5 mins</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="absolute bottom-12 left-2 hidden rounded-2xl border border-ink/10 bg-card/90 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(30,22,18,0.35)] backdrop-blur-sm md:left-6 lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#e85d3a", "#1e1614", "#d18a3a"].map((c) => (
                  <span
                    key={c}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream text-[10px] font-bold text-cream"
                    style={{ backgroundColor: c }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold text-ink">4.9 / 5</div>
                <div className="text-[11px] font-medium text-ink/55">120+ happy moves</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-12 overflow-hidden border-y border-ink/10 bg-ink/[0.02] py-4 lg:mt-16">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-ink/50">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              {[
                "Same-day collections",
                "Furniture transport",
                "Marketplace pickups",
                "Small moves",
                "Urgent deliveries",
                "Multi-stop",
                "Wait & load",
                "One-off jobs",
              ].map((t) => (
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
