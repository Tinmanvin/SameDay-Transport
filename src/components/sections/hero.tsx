import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock4, HeartHandshake } from "lucide-react";
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
    <section ref={ref} className="bg-paper relative overflow-hidden">
      {/* Decorative background type — subtle, oversized */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 select-none text-center">
        <div className="font-display text-[20vw] font-black leading-none tracking-[-0.05em] text-ink/[0.035] whitespace-nowrap">
          MOVE TODAY
        </div>
      </div>

      {/* Full-bleed van — flush to top (under navbar), shifted left to cut at front wheel */}
      <motion.div
        style={{ x: vanX, y: vanY }}
        initial={{ opacity: 0, x: -160, scale: 1.04 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute left-0 top-[72px] bottom-0 z-0 w-[70vw] max-w-[1180px] min-h-[540px]"
      >
        <img
          src={heroVan}
          alt="SameDay Transport branded van bursting from the left with cutaway view of furniture, sofa and boxes inside"
          className="h-full w-full object-cover drop-shadow-[0_60px_50px_rgba(30,22,18,0.25)]"
          style={{
            objectPosition: "28% center",
            maskImage:
              "linear-gradient(to right, black 0%, black 55%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.4) 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 55%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.4) 86%, transparent 100%)",
          }}
        />
        {/* speed dust under van */}
        <div className="pointer-events-none absolute bottom-[8%] left-[8%] right-[20%] h-10 rounded-full bg-ink/10 blur-2xl" />
        {/* coral accent disc behind */}
        <div className="pointer-events-none absolute -left-10 top-20 -z-10 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 pt-32 pb-20 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pt-40 lg:pb-32">
        {/* Spacer column for van on lg */}
        <div className="hidden lg:col-span-7 lg:block" aria-hidden />

        {/* Headline — centered within the right-hand empty space */}
        <motion.div
          style={{ y: headlineY }}
          className="relative z-20 flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left lg:pr-6"
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

          <h1 className="font-display text-[14vw] leading-[0.95] tracking-[-0.05em] text-ink sm:text-[88px] lg:text-[clamp(64px,6.4vw,120px)]">
            {[word, word2].map((w, idx) => (
              <span key={w} className="block overflow-hidden pb-[0.12em]">
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
            className="mt-8 flex w-full justify-center"
          >
            <WaveButton variant="coral" size="lg">
              Get a fast quote <ArrowRight className="h-4 w-4" />
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

      {/* Marquee */}
      <div className="relative mt-0 overflow-hidden border-y border-ink/10 bg-ink/[0.02] py-4">
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
