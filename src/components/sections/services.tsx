import { motion } from "framer-motion";
import {
  Truck, Sofa, ShoppingBag, Home, Briefcase, Route, Timer, Package,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Timer, title: "Same-day collections & deliveries", line: "Booked in the morning, done by tea-time.", eg: "Pick up that washing machine from B&Q today." },
  { icon: Sofa, title: "Furniture transport", line: "Sofas, beds, wardrobes — handled with care.", eg: "Two-seater across town, blanket-wrapped." },
  { icon: ShoppingBag, title: "Marketplace pickups", line: "Facebook, Vinted, Gumtree. We collect for you.", eg: "Vintage chest of drawers, 30 miles." },
  { icon: Home, title: "Small moves", line: "Studio flats and single rooms made simple.", eg: "Studio move with two strong pairs of hands." },
  { icon: Briefcase, title: "Urgent business deliveries", line: "Time-critical drops for shops and trades.", eg: "Site-to-site delivery before 5pm." },
  { icon: Route, title: "Multi-stop transport", line: "Several pickups, one efficient route.", eg: "Three pickups, one drop, in one trip." },
  { icon: Truck, title: "Wait-and-load jobs", line: "We wait while you pack — no rush.", eg: "Auction collection with 90-min wait." },
  { icon: Package, title: "One-off item transport", line: "Just one big thing? We’ll move it.", eg: "Single piano. Yes, really." },
];

export function Services() {
  return (
    <section id="services" className="bg-paper relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="chip">What we move</span>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-[64px]">
              If it fits in a van, <br />
              <span className="text-coral">we’ll move it today.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-ink/70 md:text-right">
            From a single chair to a full studio flat — pick the closest match below or just message
            Ada and we’ll figure it out together.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#quote"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-ink/8 bg-card p-6 shadow-sm transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(30,22,18,0.35)]"
            >
              {/* coral wash on hover */}
              <div className="pointer-events-none absolute inset-0 origin-bottom translate-y-full bg-gradient-to-tr from-coral via-coral-deep to-ember transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-cream transition-colors group-hover:bg-cream group-hover:text-coral">
                  <s.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-cream" />
              </div>
              <div className="relative z-10 mt-2">
                <h3 className="font-display text-xl font-bold leading-tight text-ink transition-colors group-hover:text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65 transition-colors group-hover:text-cream/85">{s.line}</p>
                <p className="mt-3 text-xs italic text-ink/50 transition-colors group-hover:text-cream/70">e.g. {s.eg}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
