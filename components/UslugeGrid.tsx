import Link from "next/link";
import Reveal from "./Reveal";
import { usluge, type Usluga } from "./data/usluge";
import { ArrowRight } from "./icons";

type UslugeGridProps = {
  /** Prikaži samo prvih N usluga (za početnu stranicu) */
  limit?: number;
  /** Slug usluge koju treba izostaviti (za "ostale usluge" na detaljnoj stranici) */
  exclude?: string;
};

function UslugaCard({ usluga, delay }: { usluga: Usluga; delay: number }) {
  const Icon = usluga.icon;
  return (
    <Reveal delay={delay}>
      <Link
        href={`/usluge/${usluga.slug}`}
        className={`sheen group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
          usluga.featured
            ? "border-brand/30 bg-gradient-to-br from-brand-50 to-white shadow-soft"
            : "border-ink/10 bg-white hover:border-brand/30 hover:shadow-soft"
        }`}
      >
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white transition-colors duration-500 group-hover:bg-brand">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="relative z-10 mt-6 font-display text-2xl font-semibold tracking-tight">
          {usluga.title}
        </h3>
        <p className="relative z-10 mt-2.5 text-[15px] leading-relaxed text-muted">
          {usluga.short}
        </p>

        <span className="relative z-10 mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700">
          Saznaj više
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

export default function UslugeGrid({ limit, exclude }: UslugeGridProps) {
  let list = exclude ? usluge.filter((u) => u.slug !== exclude) : usluge;
  if (limit) list = list.slice(0, limit);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((usluga, i) => (
        <UslugaCard key={usluga.slug} usluga={usluga} delay={(i % 3) * 90} />
      ))}
    </div>
  );
}
