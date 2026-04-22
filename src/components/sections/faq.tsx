import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How fast can you collect?", a: "Often within a few hours. If you message us before lunch, we’ll usually have a same-day slot. Tell us where and what — we’ll confirm in minutes." },
  { q: "What can you transport?", a: "Furniture, white goods, marketplace finds, small moves, business deliveries, single items, multi-stop runs. If it fits in a Luton van, it fits us." },
  { q: "Do you help with loading?", a: "Yes. Two-person crews are standard for furniture and moves. Wait-and-load and assembly help can be added on request." },
  { q: "How do quotes work?", a: "All-in: vehicle, crew, fuel, mileage. We quote upfront based on what’s moving, the route and the time. No surprises on the day." },
  { q: "What areas do you cover?", a: "Greater Manchester and the wider North West daily, with longer routes booked on request. Not sure? Just ask." },
  { q: "Can I send photos?", a: "Please do. Tap the camera in the chat or text them over. Photos help us pick the right van and crew first time." },
  { q: "Is same-day really available?", a: "Most weekdays, yes — and many evenings. Slots fill quickly, so the earlier you message, the better the chance." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <span className="chip">Honest answers</span>
          <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
            Quick <span className="text-coral">answers</span> to the things people ask.
          </h2>
          <p className="mt-5 text-ink/65">
            Still curious? <a href="#quote" className="story-link font-semibold text-ink">Ask Ada</a> or
            <a href="tel:+441234567890" className="story-link ml-1 font-semibold text-ink">give us a ring</a>.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-bold text-ink sm:text-xl">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "var(--coral)" : "transparent" }}
                      transition={{ duration: 0.3 }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink"
                    >
                      <Plus className={`h-4 w-4 ${isOpen ? "text-cream" : ""}`} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-base leading-relaxed text-ink/70">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
