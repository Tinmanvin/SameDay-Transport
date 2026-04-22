import { useEffect } from "react";
import { Logo } from "./logo";

export function Footer() {
  useEffect(() => {
    const id = "leadconnector-chat-widget";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://beta.leadconnectorhq.com/loader.js";
    s.async = true;
    s.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
    s.setAttribute("data-widget-id", "69e8fbdd4b625a42307c3e1a");
    document.body.appendChild(s);
  }, []);
  return (
    <footer className="border-t border-ink/10 bg-cream py-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-ink/60">
            SameDay Transport — fast, careful van transport across Greater Manchester
            and the North West. Book in minutes, move today.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ink">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/65">
            <li><a href="tel:+441234567890" className="hover:text-coral">0123 456 7890</a></li>
            <li><a href="mailto:hello@samedaytransport.co" className="hover:text-coral">hello@samedaytransport.co</a></li>
            <li>7 days · 7am – 9pm</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ink">Sitemap</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/65">
            <li><a href="#services" className="hover:text-coral">Services</a></li>
            <li><a href="#why" className="hover:text-coral">Why us</a></li>
            <li><a href="#areas" className="hover:text-coral">Areas</a></li>
            <li><a href="#faq" className="hover:text-coral">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col items-start justify-between gap-3 border-t border-ink/10 px-6 pt-6 text-xs text-ink/45 md:flex-row md:items-center lg:px-10">
        <span>© {new Date().getFullYear()} SameDay Transport. All rights reserved.</span>
        <span>Designed to move you — today.</span>
      </div>
    </footer>
  );
}
