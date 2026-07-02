import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { ShieldIcon, SparkIcon, BroomIcon, ClockIcon } from "@/components/icons";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Podix Group — tim specijalizovan za isporuku i ugradnju podova. Upoznajte kako radimo i zašto nam klijenti vjeruju.",
};

const stats = [
  { to: 500, suffix: "+", label: "Završenih projekata" },
  { to: 10, suffix: "+", label: "Godina iskustva" },
  { to: 100, suffix: "%", label: "Zadovoljnih klijenata" },
  { to: 7, suffix: "", label: "Vrsta podova" },
];

const vrijednosti = [
  {
    icon: ShieldIcon,
    title: "Garancija na ugradnju",
    desc: "Iza svakog ugrađenog poda stojimo garancijom. Radimo po standardima koji traju.",
  },
  {
    icon: SparkIcon,
    title: "Kvalitetni materijali",
    desc: "Sarađujemo s provjerenim proizvođačima parketa, laminata, vinila i tekstilnih podova.",
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

export default function ONamaPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="O nama"
        title={
          <>
            Pod je temelj prostora. <span className="text-gradient">Mi ga radimo kako treba.</span>
          </>
        }
        description="Podix Group je tim specijalizovan za podove — od pripreme podloge do završnog detalja. Radimo stanove, kuće, hotele, kancelarije i sportske prostore."
      />

      {/* Fotke s terena + priča */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/slike/foto-brusenje.jpg"
                alt="Naš majstor brusi parket mašinom sa usisnim sistemom"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={120} className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/slike/foto-poliranje-hala.jpg"
                alt="Mašinska priprema podloge u velikom poslovnom prostoru"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <Reveal delay={100}>
            <span className="eyebrow">Naša priča</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Zanat prije svega, <span className="text-gradient">uredno do kraja</span>
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Počeli smo kao ekipa parketara, a danas pokrivamo sve vrste
                podnih obloga: parket, laminat, LVT/SPC, itison i tepih ploče,
                sportske podove i gumene puzle za teretane.
              </p>
              <p>
                Ono što nas izdvaja je priprema. Prije nego što i jedna daska
                legne na pod, podloga mora biti ravna, suva i čista — zato
                radimo i nivelaciju, košuljice i mašinsku obradu podloge.
              </p>
              <p>
                Radimo brzo, ali ne žurimo. Dogovoreni rok je dogovor, a
                prostor nakon nas ostaje spreman za život.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-bold text-ink">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vrijednosti */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-brand-300">Zašto Podix Group</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Na šta se možete <span className="text-gradient">osloniti</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vrijednosti.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 4) * 90}>
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
      </section>

      <Process />
      <CtaBand />
    </main>
  );
}
