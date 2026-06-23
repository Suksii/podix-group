import Reveal from "./Reveal";
import {
  ParquetIcon,
  LaminateIcon,
  VinylIcon,
  GymIcon,
  SandIcon,
  RulerIcon,
  ArrowRight,
  type IconProps,
} from "./icons";
import type { ComponentType } from "react";

type Service = {
  icon: ComponentType<IconProps>;
  title: string;
  desc: string;
  points: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: ParquetIcon,
    title: "Parket",
    desc: "Isporuka i profesionalna ugradnja prirodnog i gotovog parketa — toplina drveta za svaki prostor.",
    points: ["Klasični i gotov parket", "Različiti formati i tonovi", "Polaganje bez oštećenja"],
    featured: true,
  },
  {
    icon: LaminateIcon,
    title: "Laminat",
    desc: "Brza i čista ugradnja laminata visoke klase otpornosti — idealan odnos cijene i kvaliteta.",
    points: ["Klase otpornosti AC4 / AC5", "Veliki izbor dekora", "Ugradnja u jednom danu"],
  },
  {
    icon: VinylIcon,
    title: "LVT / SPC podovi",
    desc: "Vodootporni vinil podovi sljedeće generacije — izgled drveta uz maksimalnu izdržljivost.",
    points: ["100% vodootporno", "Tiho i toplo pod nogama", "Za dom i poslovni prostor"],
    featured: true,
  },
  {
    icon: GymIcon,
    title: "Puzle za teretane",
    desc: "Prodaja i ugradnja gumenih puzli i podloga za teretane, fitnes prostore i radne zone.",
    points: ["Amortizacija i zaštita", "Različite debljine", "Brza montaža na licu mjesta"],
  },
  {
    icon: SandIcon,
    title: "Brušenje i lakiranje",
    desc: "Renoviranje postojećih drvenih podova — brušenje, kitovanje i lakiranje do savršenog sjaja.",
    points: ["Obnova starog parketa", "Mat, polusjaj ili sjaj", "Bez prašine i nereda"],
  },
  {
    icon: RulerIcon,
    title: "Mjerenje i savjet",
    desc: "Izlazak na teren, precizno mjerenje i stručan savjet o materijalu prije svake ugradnje.",
    points: ["Procjena stanja podloge", "Preporuka materijala", "Jasna i fer ponuda"],
  },
];

export default function Services() {
  return (
    <section id="usluge" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Naše usluge</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Sve za vaš pod — <span className="text-gradient">na jednom mjestu</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Od prvog mjerenja do posljednje letvice. Bilo da renovirate dom ili
            opremate teretanu, pokrivamo cijeli posao.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article
                  className={`sheen group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                    service.featured
                      ? "border-brand/30 bg-gradient-to-br from-brand-50 to-white shadow-soft"
                      : "border-ink/10 bg-white hover:border-brand/30 hover:shadow-soft"
                  }`}
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white transition-colors duration-500 group-hover:bg-brand">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="relative z-10 mt-6 font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mt-2.5 text-[15px] leading-relaxed text-muted">
                    {service.desc}
                  </p>

                  <ul className="relative z-10 mt-5 space-y-2 text-sm text-ink/75">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#kontakt"
                    className="relative z-10 mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
                  >
                    Zatraži ponudu
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
