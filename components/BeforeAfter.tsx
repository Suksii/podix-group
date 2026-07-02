"use client";

import { useState } from "react";
import Image from "next/image";

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  /** Kontejner mora dobiti aspect-* klasu */
  className?: string;
};

/**
 * Prije/poslije poređenje — nevidljivi range input preko cijele površine
 * pokreće ručicu, pa radi mišem, prstom i tastaturom (strelice).
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className={`group relative select-none overflow-hidden rounded-[2rem] bg-ink shadow-soft ring-1 ring-ink/10 ${className}`}
    >
      {/* Poslije — podloga */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 90vw, 40rem"
        className="object-cover"
        draggable={false}
      />

      {/* Prije — lijeva strana, isječena do pozicije ručice */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 90vw, 40rem"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Linija i ručica */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-transform duration-300 group-active:scale-95">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </span>
      </div>

      {/* Oznake */}
      <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-ink/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        Prije
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
        Poslije
      </span>

      {/* Nevidljivi slider preko svega — vuci bilo gdje */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Prevucite za poređenje poda prije i poslije obnove"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 [touch-action:pan-y]"
      />
    </div>
  );
}
