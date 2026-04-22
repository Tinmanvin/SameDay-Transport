import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Manchester", "Salford", "Stockport", "Trafford", "Bolton", "Bury",
  "Oldham", "Rochdale", "Tameside", "Wigan", "Warrington", "Macclesfield",
  "Altrincham", "Sale", "Cheadle", "Wilmslow",
];

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <span className="chip">Where we drive</span>
          <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
            Local crew. <br /><span className="text-coral">Wider reach</span> than you’d think.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
            Based in Greater Manchester and on the road across the North West daily.
            <span className="font-semibold text-ink"> Not on the list? Ask us anyway</span> — we go further than most.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-wrap gap-3">
            {areas.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.025 }}
                whileHover={{ y: -3 }}
                className="group inline-flex cursor-default items-center gap-2 rounded-full border border-ink/12 bg-card px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:border-coral hover:bg-coral hover:text-cream"
              >
                <MapPin className="h-3.5 w-3.5 text-coral transition-colors group-hover:text-cream" />
                {a}
              </motion.span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream">
              + nearby — just ask
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
