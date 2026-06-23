import Reveal from "./Reveal";
import Counter from "./Counter";
import { ShieldIcon, ClockIcon, SparkIcon, BroomIcon } from "./icons";

const features = [
  {
    icon: ShieldIcon,
    title: "Garancija na ugradnju",
    desc: "Iza svakog ugrađenog poda stojimo garancijom. Radimo po standardima koji traju.",
  },
  {
    icon: SparkIcon,
    title: "Kvalitetni materijali",
    desc: "Sarađujemo s provjerenim proizvođačima parketa, laminata i vinila.",
  },
  {
    icon: BroomIcon,
    title: "Čista montaža",
    desc: "Prostor ostavljamo uredan i spreman za korištenje — bez prašine i nereda.",
  },
  {
    icon: ClockIcon,
    title: "Poštovanje rokova",
    desc: "Dogovoreni termin je sveta stvar. Posao završavamo na vrijeme.",
  },
];

const stats = [
  { to: 500, suffix: "+", label: "Završenih projekata" },
  { to: 10, suffix: "+", label: "Godina iskustva" },
  { to: 100, suffix: "%", label: "Zadovoljnih klijenata" },
  { to: 7, suffix: "", label: "Vrsta podova" },
];

export default function WhyUs() {
  return (
    <section
      id="zasto"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-700/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow text-brand-300">Zašto Podix Group</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Precizan rad u koji možete
              <span className="text-gradient"> imati povjerenja</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              Pod je temelj svakog prostora. Mi mu pristupamo s pažnjom — od
              pripreme podloge do završnog detalja. Vaše zadovoljstvo je mjera
              našeg posla.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-sm text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 2) * 100}>
                  <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-brand/40 hover:bg-white/[0.07]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand-300 transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
