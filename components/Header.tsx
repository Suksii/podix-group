"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "./site";
import { ArrowRight, PhoneIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand/85 backdrop-blur-xl border-b border-ink/10 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#pocetak" className="flex items-center gap-2 group" aria-label="Podix Group — početak">
          <Image
            src="/podix-logo.png"
            alt="Podix Group"
            width={150}
            height={64}
            priority
            className="h-12 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink/80 transition-colors hover:text-brand-600"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Zatraži ponudu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-sand/60 lg:hidden"
        >
          <span className="sr-only">Meni</span>
          <div className="flex w-5 flex-col items-end gap-1.5">
            <span className={`h-0.5 rounded-full bg-ink transition-all duration-300 ${open ? "w-5 translate-y-2 rotate-45" : "w-5"}`} />
            <span className={`h-0.5 w-4 rounded-full bg-ink transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 rounded-full bg-ink transition-all duration-300 ${open ? "w-5 -translate-y-2 -rotate-45" : "w-3.5"}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 origin-top bg-sand/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`border-b border-ink/10 py-4 font-display text-3xl font-semibold tracking-tight transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-lg font-semibold text-brand-600"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-glow"
            >
              Zatraži ponudu
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
