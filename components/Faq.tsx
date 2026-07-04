import Reveal from "./Reveal";
import { faq } from "./data/faq";

/**
 * Česta pitanja — nativni <details>/<summary> akordeon:
 * radi bez JavaScripta, pristupačan i vidljiv pretraživačima.
 */
export default function Faq() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Česta pitanja</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Pitate se isto što <span className="text-gradient">i drugi?</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:items-start">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={(i % 2) * 80}>
              <details className="group rounded-3xl border border-ink/10 bg-white px-6 py-5 shadow-soft transition-colors open:border-brand/30 hover:border-brand/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-600 transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
