import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "./site";
import { ArrowRight, PhoneIcon } from "./icons";

/** Traka poziva na akciju — koristi se pri dnu unutrašnjih stranica. */
export default function CtaBand() {
  return (
    <section className="py-20 sm:py-24">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-10 text-white sm:p-14">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Razmišljate o novom podu?{" "}
                <span className="text-gradient">Popričajmo.</span>
              </h2>
              <p className="mt-3 max-w-lg text-white/65">
                Besplatan izlazak na teren, mjerenje i procjena — bez ikakve
                obaveze.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Zatraži ponudu
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:border-brand/60 hover:text-brand-200"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
