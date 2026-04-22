import { motion } from "framer-motion";
import { Zap, Shield, Smile, Calendar, MapPin, Receipt } from "lucide-react";

const items = [
  { icon: Zap, n: "01", t: "Same-day speed", b: "Slot booked in minutes, van at your door the same day — often within hours." },
  { icon: Shield, n: "02", t: "Careful handling", b: "Blankets, straps, dollies and a crew that treats your stuff like their own." },
  { icon: Smile, n: "03", t: "Friendly service", b: "No call-centre runaround. You speak to the people actually doing the job." },
  { icon: Calendar, n: "04", t: "Flexible scheduling", b: "Evenings, weekends, last-minute. We work around your day, not ours." },
  { icon: MapPin, n: "05", t: "Local responsiveness", b: "Based locally, on the road already. Quick to confirm, quick to arrive." },
  { icon: Receipt, n: "06", t: "Fair, transparent pricing", b: "All-in quotes upfront. No fuel surcharges. No mystery extras." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-grain py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="chip !border-coral/40 !bg-coral/15 !text-coral">Why SameDay</span>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-[68px]">
              Six reasons people <br />
              <span className="text-stroke-cream">book us first</span>
              <span className="text-coral">.</span>
            </h2>
          </div>
          <p className="text-base text-cream/70 lg:col-span-5">
            We’re built for the calls that say <em>“can someone come today?”</em> — and we’re proud
            of how often the answer is yes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col gap-4 bg-ink p-8 transition-colors hover:bg-[oklch(0.24_0.02_45)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral/15 text-coral transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <it.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm tracking-[0.3em] text-cream/30">{it.n}</span>
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight">{it.t}</h3>
              <p className="text-sm leading-relaxed text-cream/65">{it.b}</p>
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-coral transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
