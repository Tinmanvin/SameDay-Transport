import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Booked at 9am, sofa collected from Salford and delivered to Cheadle by 1pm. Wrapped, careful, no scuffs. I’d call them again tomorrow.",
    name: "Hannah W.",
    job: "Sofa collection · Salford → Cheadle",
  },
  {
    quote:
      "Absolute lifesaver — we needed two pallets across town before close of business. They confirmed in 4 minutes and were on site within the hour.",
    name: "James O.",
    job: "Business delivery · Trafford Park",
  },
  {
    quote:
      "Replied to my Marketplace pickup quote at 11pm and had the wardrobe at mine by midday. Friendly, fair price, no nonsense.",
    name: "Priya K.",
    job: "Marketplace pickup · Stockport",
  },
  {
    quote:
      "Studio move done in one trip — they brought blankets, straps, and good music. Made a stressful day genuinely fun.",
    name: "Marcus B.",
    job: "Small move · Manchester",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setI((p) => (p + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => {
    setDir(d);
    setI((p) => (p + d + reviews.length) % reviews.length);
  };

  const r = reviews[i];

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
        <span className="chip">What customers say</span>
        <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
          Booked once. <span className="text-coral">Recommended forever.</span>
        </h2>

        <div className="relative mx-auto mt-14 max-w-3xl" style={{ perspective: 1200 }}>
          <Quote className="mx-auto h-10 w-10 text-coral" />
          <div className="relative mt-6 min-h-[260px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={i}
                custom={dir}
                initial={{ opacity: 0, rotateY: dir * 35, y: 30 }}
                animate={{ opacity: 1, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, rotateY: dir * -35, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="px-2"
              >
                <p className="font-display text-2xl leading-snug text-ink sm:text-3xl lg:text-4xl">
                  “{r.quote}”
                </p>
                <footer className="mt-8 text-sm">
                  <div className="font-semibold text-ink">{r.name}</div>
                  <div className="text-ink/55">{r.job}</div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-coral hover:bg-coral hover:text-cream"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDir(idx > i ? 1 : -1); setI(idx); }}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-coral" : "w-2 bg-ink/20"}`}
                  aria-label={`Review ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-coral hover:bg-coral hover:text-cream"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
