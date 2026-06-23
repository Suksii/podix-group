import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Kontakt i mjerenje",
    desc: "Javite nam se, izlazimo na teren, mjerimo prostor i procjenjujemo stanje podloge.",
  },
  {
    n: "02",
    title: "Ponuda i izbor",
    desc: "Predlažemo materijale i dajemo jasnu, fer ponudu — bez skrivenih troškova.",
  },
  {
    n: "03",
    title: "Priprema podloge",
    desc: "Niveliranje, čišćenje i priprema podloge — temelj svakog kvalitetnog poda.",
  },
  {
    n: "04",
    title: "Ugradnja i predaja",
    desc: "Precizno polažemo pod, čistimo prostor i predajemo ga spremnog za korištenje.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Kako radimo</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Proces u <span className="text-gradient">četiri koraka</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Jednostavno i transparentno — znate tačno šta dobijate i kada.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {/* Connecting line on large screens */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />

          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 110} className="relative">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white font-display text-lg font-bold text-brand-600 shadow-soft ring-1 ring-ink/5">
                {step.n}
                <span className="absolute inset-0 rounded-2xl ring-2 ring-brand/0 transition-all duration-500" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
