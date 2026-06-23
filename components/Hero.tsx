import Image from "next/image";
import { ArrowRight, CheckIcon, SparkIcon } from "./icons";
import { site } from "./site";

const marqueeItems = [
  "Parket",
  "Laminat",
  "LVT / SPC",
  "Puzle za teretane",
  "Brušenje & lakiranje",
  "Vinil podovi",
  "Industrijski podovi",
];

export default function Hero() {
  return (
    <section id="pocetak" className="relative overflow-hidden pt-28 pb-0 sm:pt-32">
      {/* Decorative brand orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl animate-float-slow" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="relative">
          <span className="eyebrow animate-[fade-up_0.7s_both]">
            <SparkIcon className="h-4 w-4" />
            Specijalisti za podove
          </span>

          <h1 className="mt-5 text-balance font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-6xl sm:leading-[1.04] xl:text-[4.4rem]">
            Podovi koji traju{" "}
            <span className="text-gradient">cijeli život.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.name} ugrađuje sve vrste podova — parket, laminat, LVT/SPC i
            gumene puzle za teretane. Isporuka, priprema i precizna ugradnja, sve
            na jednom mjestu i uz garanciju kvaliteta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Besplatna procjena
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#usluge"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-base font-semibold text-ink backdrop-blur transition-colors hover:border-brand/50 hover:text-brand-600"
            >
              Pogledaj usluge
            </a>
          </div>

          {/* Trust row */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/70">
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

        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-ink shadow-soft sm:max-w-lg">
            {/* Floor in perspective */}
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div
              className="absolute inset-x-0 bottom-0 h-3/5"
              style={{ perspective: "640px" }}
            >
              <div
                className="absolute inset-0 origin-bottom"
                style={{
                  transform: "rotateX(58deg) scaleY(1.4)",
                  backgroundColor: "#c97c3f",
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 64px), repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0 2px, transparent 2px 26px), linear-gradient(115deg, rgba(255,255,255,0.18), transparent 55%)",
                  backgroundSize: "64px 26px, 64px 26px, 100% 100%",
                  maskImage: "linear-gradient(to top, #000 35%, transparent)",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

            {/* Brand wordmark plate */}
            <div className="absolute left-6 top-6 rounded-2xl bg-white/95 px-4 py-3 shadow-soft">
              <Image src="/podix-logo.png" alt="Podix Group" width={130} height={56} className="h-9 w-auto" />
            </div>

            {/* Floating rating chip */}
            <div className="absolute right-5 top-24 animate-float rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
              <div className="text-2xl font-bold leading-none">5,0★</div>
              <div className="mt-1 text-xs text-white/70">Ocjena klijenata</div>
            </div>

            {/* Caption */}
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                Od ideje do gotovog poda
              </div>
              <p className="mt-1.5 text-sm leading-snug text-white/90">
                Savjet, mjerenje, izbor materijala i ugradnja — bez stresa, do
                najsitnijeg detalja.
              </p>
            </div>
          </div>

          {/* Floating stat behind */}
          <div className="absolute -bottom-4 -left-2 hidden rounded-2xl bg-white px-5 py-4 shadow-soft sm:block">
            <div className="font-display text-3xl font-bold text-brand-600">500+</div>
            <div className="text-xs font-medium text-muted">završenih projekata</div>
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
