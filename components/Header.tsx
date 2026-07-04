"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "./site";
import { ArrowRight, PhoneIcon } from "./icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Zaključaj skrol dok je mobilni meni otvoren
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Plutajuća navigacija — odmaknuta od ivica, zaobljena u pilulu */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border pl-5 pr-2.5 transition-all duration-500 sm:pl-6 sm:pr-3 ${
            scrolled
              ? "border-ink/10 bg-sand/90 shadow-soft backdrop-blur-xl"
              : "border-white/60 bg-white/50 shadow-soft backdrop-blur-md"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group" aria-label="Podix Group — početna">
            {/* Isječena verzija loga (bez providnih margina) — puna visina znaka */}
            <Image
              src="/podix-logo-trim.png"
              alt="Podix Group"
              width={445}
              height={159}
              priority
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105 sm:h-11"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand/10 text-brand-700"
                      : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-ink/80 transition-colors hover:text-brand-600"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Zatraži ponudu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Otvori meni"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/70 lg:hidden"
          >
            <span className="sr-only">Meni</span>
            <div className="flex w-5 flex-col gap-[5px]">
              <span className="h-0.5 w-full rounded-full bg-ink" />
              <span className="h-0.5 w-full rounded-full bg-ink" />
              <span className="h-0.5 w-3.5 rounded-full bg-ink" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-sand transition-[opacity,transform] duration-300 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {/* Vrh overlay-a prati poziciju plutajuće navigacije */}
        <div className="shrink-0 px-3 pt-3 sm:px-5 sm:pt-4">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between pl-5 pr-2.5 sm:pl-6 sm:pr-3">
            <Image src="/podix-logo-trim.png" alt="Podix Group" width={445} height={159} className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Zatvori meni"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/70"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pb-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 55}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl font-semibold tracking-tight transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
              } ${isActive(pathname, link.href) ? "text-brand-600" : ""}`}
            >
              {link.label}
              <ArrowRight className="h-5 w-5 text-brand-600" />
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-lg font-semibold text-brand-600"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.phone2Href}
              className="inline-flex items-center gap-2 text-lg font-semibold text-brand-600"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phone2Display}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-glow"
            >
              Zatraži ponudu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
