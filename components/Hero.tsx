import Link from "next/link";
import VideoInView from "./VideoInView";
import { ArrowRight, CheckIcon, SparkIcon } from "./icons";
import { site } from "./site";

const marqueeItems = [
  "Parket",
  "Laminat",
  "LVT / SPC",
  "Itison i tepih ploče",
  "Nivelacija podloge",
  "Brušenje & lakiranje",
  "Podovi za teretane",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 sm:pt-32">
      {/* Decorative brand orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl animate-float-slow" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Copy */}
        <div className="relative">
          <span className="eyebrow animate-[fade-up_0.7s_both]">
            <SparkIcon className="h-4 w-4" />
            Specijalisti za podove
          </span>

          <h1 className="mt-5 text-balance font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight animate-[fade-up_0.7s_0.08s_both] sm:text-6xl sm:leading-[1.04] xl:text-[4.2rem]">
            Podovi koji traju{" "}
            <span className="text-gradient">cijeli život.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted animate-[fade-up_0.7s_0.16s_both]">
            {site.name} isporučuje i ugrađuje sve vrste podova — parket,
            laminat, LVT/SPC, itison i podove za teretane. Od pripreme podloge
            do završnog detalja, sve na jednom mjestu.
          </p>

          <div className="mt-8 flex flex-col gap-3 animate-[fade-up_0.7s_0.24s_both] sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Besplatna procjena
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/radovi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-base font-semibold text-ink backdrop-blur transition-colors hover:border-brand/50 hover:text-brand-600"
            >
              Pogledaj radove
            </Link>
          </div>

          {/* Trust row */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/70 animate-[fade-up_0.7s_0.32s_both]">
            {["Garancija na ugradnju", "Čista montaža", "Poštovanje rokova"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand-600">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual — montaža stvarnih radova */}
        <div className="relative animate-[fade-up_0.9s_0.2s_both]">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[21rem] overflow-hidden rounded-[2rem] bg-ink shadow-soft ring-1 ring-ink/10 sm:max-w-sm">
            <VideoInView
              src="/video/podix-reel.mp4"
              poster="/posteri/podix-reel.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Montaža radova Podix Group — od pripreme podloge do gotovog poda"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

            {/* Caption */}
            <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-ink/40 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-brand-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300" />
                Naši radovi uživo
              </div>
              <p className="mt-1 text-sm leading-snug text-white/90">
                Od pripreme podloge do gotovog poda — 20 sekundi našeg posla.
              </p>
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute -bottom-4 -left-2 hidden rounded-2xl bg-white px-5 py-4 shadow-soft sm:block">
            <div className="font-display text-3xl font-bold text-brand-600">500+</div>
            <div className="text-xs font-medium text-muted">završenih projekata</div>
          </div>
          <div className="absolute -right-2 top-8 hidden animate-float rounded-2xl bg-white px-5 py-4 shadow-soft lg:block">
            <div className="font-display text-3xl font-bold text-brand-600">5,0★</div>
            <div className="text-xs font-medium text-muted">ocjena klijenata</div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 border-y border-ink/10 bg-white/50 py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-10 text-lg font-semibold text-ink/45">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
