import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Camera, MapPin, Phone, Sparkles } from "lucide-react";

type Msg = { from: "ai" | "you"; text: string; chips?: string[] };

const initial: Msg[] = [
  {
    from: "ai",
    text: "Hi 👋 I’m Ada, your SameDay concierge. What needs moving today?",
    chips: ["Sofa & furniture", "Marketplace pickup", "Small move", "Business delivery"],
  },
];

export function AiWidget() {
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "you", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => {
        const next = step + 1;
        setStep(next);
        if (next === 1)
          return [
            ...m,
            {
              from: "ai",
              text: "Got it. Where are we collecting from and dropping off?",
              chips: ["Add postcodes", "Within same city", "Cross-county"],
            },
          ];
        if (next === 2)
          return [
            ...m,
            {
              from: "ai",
              text: "Perfect. Want to send a photo so I can size the van?",
              chips: ["📷 Upload photo", "Skip — describe instead"],
            },
          ];
        return [
          ...m,
          {
            from: "ai",
            text: "Brilliant. I can hold a same-day slot now or call you in 2 mins to confirm. Which works?",
            chips: ["Hold my slot", "Call me back"],
          },
        ];
      });
    }, 650);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-ink/10 bg-card shadow-[0_30px_80px_-30px_rgba(30,22,18,0.35)]"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-ink/8 bg-ink px-5 py-4 text-cream">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-coral text-cream">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-ink" />
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">Ada · SameDay AI</div>
            <div className="text-[11px] text-cream/60">Replies in seconds · Online now</div>
          </div>
        </div>
        <span className="chip !border-cream/20 !bg-cream/10 !text-cream">Live</span>
      </div>

      {/* Messages */}
      <div ref={scroller} className="max-h-[320px] space-y-3 overflow-y-auto bg-cream/60 px-5 py-5">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col gap-2 ${m.from === "you" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                  m.from === "ai"
                    ? "bg-card text-ink shadow-sm rounded-bl-sm"
                    : "bg-ink text-cream rounded-br-sm"
                }`}
              >
                {m.text}
              </div>
              {m.chips && (
                <div className="flex flex-wrap gap-1.5">
                  {m.chips.map((c) => (
                    <button
                      key={c}
                      onClick={() => send(c)}
                      className="rounded-full border border-ink/15 bg-card px-3 py-1.5 text-xs font-medium text-ink/80 transition hover:border-coral hover:bg-coral hover:text-cream"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="border-t border-ink/8 bg-card px-3 py-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2"
        >
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full text-ink/60 hover:bg-sand hover:text-ink" aria-label="Upload photo">
            <Camera className="h-4 w-4" />
          </button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full text-ink/60 hover:bg-sand hover:text-ink" aria-label="Share location">
            <MapPin className="h-4 w-4" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or tap a quick reply…"
            className="h-10 flex-1 rounded-full border border-ink/10 bg-cream/60 px-4 text-sm placeholder:text-ink/40 focus:border-coral focus:outline-none"
          />
          <button
            type="submit"
            className="grid h-10 w-10 place-items-center rounded-full bg-coral text-cream transition hover:bg-coral-deep"
            aria-label="Send"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <a href="tel:+441234567890" className="mt-2 flex items-center justify-center gap-2 py-1 text-xs font-semibold text-ink/60 hover:text-coral">
          <Phone className="h-3 w-3" /> Prefer to call? 0123 456 7890
        </a>
      </div>
    </motion.div>
  );
}
