"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import VideoInView from "./VideoInView";
import { kategorije, type Kategorija, type Rad } from "./data/radovi";

type GalleryGridProps = {
  items: Rad[];
  /** Sakrij traku sa filterima (npr. na detaljnoj stranici usluge) */
  hideFilters?: boolean;
};

const katLabel = (id: Kategorija) =>
  kategorije.find((k) => k.id === id)?.label ?? id;

export default function GalleryGrid({ items, hideFilters }: GalleryGridProps) {
  const [filter, setFilter] = useState<Kategorija | "sve">("sve");
  const [lightbox, setLightbox] = useState<Rad | null>(null);

  const filtered = useMemo(
    () => (filter === "sve" ? items : items.filter((r) => r.kategorija === filter)),
    [items, filter]
  );

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close]);

  return (
    <div>
      {!hideFilters && (
        <div className="flex flex-wrap gap-2">
          {kategorije.map((k) => {
            const active = filter === k.id;
            return (
              <button
                key={k.id}
                type="button"
                onClick={() => setFilter(k.id)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active
                    ? "bg-ink text-white shadow-soft"
                    : "border border-ink/15 bg-white text-ink/70 hover:border-brand/50 hover:text-brand-600"
                }`}
              >
                {k.label}
              </button>
            );
          })}
        </div>
      )}

      <div className={`grid grid-cols-2 gap-4 lg:grid-cols-4 ${hideFilters ? "" : "mt-10"}`}>
        {filtered.map((rad, i) => (
          <figure
            key={rad.video ?? rad.src}
            className={`group relative animate-[fade-up_0.6s_both] overflow-hidden rounded-3xl bg-sand-200 shadow-soft ${
              rad.wide ? "col-span-2 aspect-[4/3]" : "aspect-[3/4]"
            }`}
            style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
          >
            <button
              type="button"
              onClick={() => setLightbox(rad)}
              className="absolute inset-0 cursor-zoom-in"
              aria-label={rad.video ? `Pusti video: ${rad.alt}` : `Uvećaj: ${rad.alt}`}
            >
              {rad.video ? (
                <VideoInView
                  src={rad.video}
                  poster={rad.poster}
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-label={rad.alt}
                />
              ) : (
                <Image
                  src={rad.src}
                  alt={rad.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              )}
            </button>

            <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-4">
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                {rad.video && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />}
                {katLabel(rad.kategorija)}
              </span>
              {rad.label && (
                <span className="mt-2 font-display text-base font-semibold text-white drop-shadow">
                  {rad.label}
                </span>
              )}
            </figcaption>

            {/* Jasna oznaka: video se pušta, slika se uvećava */}
            <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              {rad.video ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M9 7.5v9l7.5-4.5L9 7.5Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <circle cx="11" cy="11" r="6" />
                  <path d="m20 20-4.8-4.8M11 8.5v5M8.5 11h5" />
                </svg>
              )}
            </span>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-muted">Nema radova u ovoj kategoriji — pogledajte ostale.</p>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={close}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-[fade-up_0.25s_both] sm:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Zatvori"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="relative h-full max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {lightbox.video ? (
              <video
                src={lightbox.video}
                poster={lightbox.poster}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            )}
            <p className="absolute inset-x-0 -bottom-1 translate-y-full pt-3 text-center text-sm text-white/70">
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
