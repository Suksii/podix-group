"use client";

import { useEffect, useRef } from "react";

type VideoInViewProps = {
  src: string;
  poster?: string;
  className?: string;
  "aria-label"?: string;
};

/**
 * <video> koji se sam pušta kad uđe u viewport i pauzira kad izađe.
 * Štedi bateriju i propusni opseg — ništa se ne učitava dok ne zatreba.
 */
export default function VideoInView({ src, poster, className, ...rest }: VideoInViewProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (typeof IntersectionObserver === "undefined") {
      video.play().catch(() => {});
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      {...rest}
    />
  );
}
