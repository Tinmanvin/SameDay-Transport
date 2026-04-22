import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, Truck } from "lucide-react";

const steps = [
  { icon: MessageSquare, n: "01", t: "Tell us what needs moving", b: "A quick chat with Ada or a call. Photos welcome — they help us size the van." },
  { icon: ClipboardCheck, n: "02", t: "Get a fast response", b: "We confirm a price and a slot in minutes, not hours. Clear, all-in, no fluff." },
  { icon: Truck, n: "03", t: "Book the slot — we move it", b: "Our crew arrives on time, handles the heavy lifting, and gets it where it needs to go." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">How it works</span>
          <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-[64px]">
            From <span className="text-coral">message</span> to <span className="text-coral">moved</span> in three steps.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-12 hidden h-px bg-[repeating-linear-gradient(90deg,var(--ink)_0_6px,transparent_6px_14px)] opacity-30 md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-3xl border border-ink/10 bg-card p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-ink text-coral shadow-lg ring-4 ring-cream">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-6xl font-black leading-none text-coral/15">{s.n}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-ink">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
