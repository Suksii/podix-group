"use client";

import { useEffect, useRef, useState } from "react";

const BAND = 130; // px width of the lane
const CX = 60; // center x of the wave
const AMP = 30; // wave amplitude
const WAVES = 2.6; // gentle waves down the page

function buildPath(h: number) {
  if (!h) return "";
  const steps = 80;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const y = (h * i) / steps;
    const x = CX + AMP * Math.sin((i / steps) * Math.PI * 2 * WAVES);
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d.trim();
}

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

export default function ScrollLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const [h, setH] = useState(0);
  const [len, setLen] = useState(1);
  const [progress, setProgress] = useState(0);
  const [tip, setTip] = useState({ x: CX, y: 0 });

  useEffect(() => {
    const measure = () => setH(window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength() || 1);
  }, [h]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const p = max > 0 ? clamp(window.scrollY / max) : 0;
        setProgress(p);
        const path = pathRef.current;
        if (path) {
          const total = path.getTotalLength();
          if (total > 0) {
            const pt = path.getPointAtLength(total * p);
            setTip({ x: pt.x, y: pt.y });
          }
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [h]);

  const d = buildPath(h);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden lg:block"
      style={{ width: BAND }}
    >
      <svg width={BAND} height={h || "100%"} className="overflow-visible">
        <defs>
          <linearGradient id="sl-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb7e41" />
            <stop offset="55%" stopColor="#ec6a2c" />
            <stop offset="100%" stopColor="#d4561c" />
          </linearGradient>
          <filter id="sl-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint full track */}
        <path d={d} fill="none" stroke="#14110f" strokeOpacity={0.07} strokeWidth={2} />

        {/* the line, filling evenly with scroll */}
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="url(#sl-grad)"
          strokeWidth={2.6}
          strokeLinecap="round"
          style={{ strokeDasharray: len, strokeDashoffset: len * (1 - progress) }}
        />

        {/* glowing leading tip */}
        {progress > 0.004 && progress < 0.998 && (
          <g filter="url(#sl-glow)">
            <circle cx={tip.x} cy={tip.y} r={5} fill="#fb7e41" />
            <circle cx={tip.x} cy={tip.y} r={10} fill="none" stroke="#fb7e41" strokeOpacity={0.4} strokeWidth={2} />
          </g>
        )}
      </svg>
    </div>
  );
}
