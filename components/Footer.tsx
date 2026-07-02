import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "./site";
import { usluge } from "./data/usluge";
import { InstagramIcon, PhoneIcon, MailIcon, ArrowRight } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Vaš sljedeći pod počinje jednim pozivom.
          </h2>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Zatraži ponudu
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex rounded-2xl bg-white p-3">
              <Image src="/podix-logo.png" alt="Podix Group" width={150} height={64} className="h-11 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Isporuka i ugradnja svih vrsta podova — parket, laminat, LVT/SPC,
              itison i podovi za teretane. Precizno, čisto i uz garanciju.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigacija
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 transition-colors hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Usluge
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {usluge.slice(0, 6).map((u) => (
                <li key={u.slug}>
                  <Link
                    href={`/usluge/${u.slug}`}
                    className="text-white/70 transition-colors hover:text-brand-300"
                  >
                    {u.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-300">
                  <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-300">
                  <MailIcon className="h-4 w-4" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-300"
                >
                  <InstagramIcon className="h-4 w-4" /> {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-sm text-white/45 sm:flex-row">
          <p>© 2026 {site.name}. Sva prava zadržana.</p>
          <p>
            Izrada sajta — <span className="text-white/70">Podix Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
