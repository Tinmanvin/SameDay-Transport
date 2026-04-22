import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock4, HeartHandshake, Sparkles } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import { WaveButton } from "../wave-button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const vanX = useTransform(scrollYProgress, [0, 1], [0, -120]);
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

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:px-10">
        {/* Left — Van + headline */}
        <div className="relative lg:col-span-8">
          {/* Van image — bursts from left */}
          <motion.div
            style={{ x: vanX, y: vanY }}
            initial={{ opacity: 0, x: -120, scale: 1.04 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative -ml-[8vw] lg:-ml-[10vw]"
          >
            <div className="relative">
              <img
                src={heroVan}
                alt="SameDay Transport branded van bursting from the left with cutaway view of furniture, sofa and boxes inside"
                width={1600}
                height={1100}
                className="relative z-10 w-[125%] max-w-none drop-shadow-[0_60px_50px_rgba(30,22,18,0.25)] lg:w-[115%]"
              />
              {/* speed dust under van */}
              <div className="absolute -bottom-6 left-[10%] right-[18%] z-0 h-10 rounded-full bg-ink/10 blur-2xl" />
            </div>

            {/* coral accent disc behind */}
            <div className="absolute -left-4 top-12 -z-0 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
          </motion.div>

          {/* Headline */}
          <motion.div
            style={{ y: headlineY }}
            className="relative z-20 -mt-6 lg:absolute lg:left-[6%] lg:top-[6%] lg:mt-0 lg:max-w-[58%]"
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

            <h1 className="font-display text-[14vw] leading-[0.85] tracking-[-0.05em] text-ink sm:text-[88px] lg:text-[clamp(72px,8vw,148px)]">
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
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70"
            >
              <li className="flex items-center gap-2"><Clock4 className="h-4 w-4 text-coral" /> Same-day availability</li>
              <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-coral" /> Careful handling</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-coral" /> Fully insured transport</li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Right — floating proof cards (replaces the AI widget) */}
        <div className="relative z-20 lg:col-span-4">
          <div className="relative mx-auto max-w-[380px] space-y-5 lg:sticky lg:top-32">
            {/* Response time card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-ink/10 bg-card/90 p-6 shadow-[0_30px_60px_-30px_rgba(30,22,18,0.35)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral text-cream">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Avg. response
                  </div>
                  <div className="font-display text-2xl font-bold text-ink">Under 5 minutes</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink/65">
                Message us before lunch — most jobs confirmed and slotted in the same morning.
              </p>
            </motion.div>

            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl bg-ink p-6 text-cream shadow-[0_30px_60px_-30px_rgba(30,22,18,0.55)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#e85d3a", "#d18a3a", "#f5f0e8"].map((c, i) => (
                    <span
                      key={c}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink text-[10px] font-bold"
                      style={{ backgroundColor: c, color: i === 2 ? "var(--ink)" : "var(--cream)" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="font-display text-2xl font-bold">4.9 / 5</div>
                  <div className="text-[11px] font-medium text-cream/60">120+ happy moves</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-cream/70">
                “Booked at 9am, sofa delivered by 1pm. Wrapped, careful, no scuffs.”
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cream/40">— Hannah W.</p>
            </motion.div>

            {/* Live availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex items-center justify-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-semibold text-coral-deep"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
              </span>
              3 same-day slots left today
            </motion.div>
          </div>
        </div>
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
