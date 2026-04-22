import { motion } from "framer-motion";
import { Check } from "lucide-react";
import teamVan from "@/assets/team-van.jpg";
import { WaveButton } from "../wave-button";

const trustPoints = [
  { title: "Prompt response", body: "Average reply under 5 minutes during working hours." },
  { title: "Careful handling", body: "Blankets, straps and a real pair of hands — every job." },
  { title: "Clear pricing", body: "All-in quotes. No hidden fees. No surprises on the day." },
];

export function Trust() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:px-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_80px_-30px_rgba(30,22,18,0.4)]">
            <img
              src={teamVan}
              alt="The SameDay Transport team in uniform smiling in front of a branded van"
              loading="lazy"
              width={1400}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute -bottom-7 -right-4 hidden rounded-2xl bg-ink px-5 py-4 text-cream shadow-2xl md:block"
          >
            <div className="font-display text-3xl leading-none">4.9★</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-cream/60">120+ reviews</div>
          </motion.div>
          <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-coral/20 blur-2xl" />
        </motion.div>

        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            The team behind the wheel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-[64px]"
          >
            Real people. <span className="text-coral">Real vans.</span> Real same-day service.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-ink/70"
          >
            We’re a tight crew of professional movers who answer the phone, show up on time and
            handle your things like our own. No call-centres. No excuses. Just a van at your door.
          </motion.p>

          <ul className="mt-8 space-y-4">
            {trustPoints.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex gap-4"
              >
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-coral/15 text-coral">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="text-sm text-ink/65">{p.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-9">
            <WaveButton variant="ink" size="lg">Speak to the team</WaveButton>
          </div>
        </div>
      </div>
    </section>
  );
}
