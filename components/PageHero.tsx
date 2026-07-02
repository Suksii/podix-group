import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

/** Zaglavlje unutrašnjih stranica — ujednačen ritam na cijelom sajtu. */
export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute top-24 -left-32 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <span className="eyebrow animate-[fade-up_0.6s_both]">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.06] tracking-tight animate-[fade-up_0.6s_0.08s_both] sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted animate-[fade-up_0.6s_0.16s_both]">
            {description}
          </p>
        )}
        {children && <div className="mt-8 animate-[fade-up_0.6s_0.24s_both]">{children}</div>}
      </div>
    </section>
  );
}
