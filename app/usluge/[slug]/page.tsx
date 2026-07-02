import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import VideoInView from "@/components/VideoInView";
import BeforeAfter from "@/components/BeforeAfter";
import UslugeGrid from "@/components/UslugeGrid";
import CtaBand from "@/components/CtaBand";
import { usluge, getUsluga } from "@/components/data/usluge";
import { CheckIcon, ArrowRight } from "@/components/icons";

// Ruta je u potpunosti prerenderovana kroz generateStaticParams (svi slugovi
// poznati unaprijed), ali validator ne umije da nabroji dinamičke ulaze bez
// `samples`, pa je izuzimamo — stranice se svejedno služe kao statičke.
export const unstable_instant = false;

export function generateStaticParams() {
  return usluge.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/usluge/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const usluga = getUsluga(slug);
  if (!usluga) return { title: "Usluga nije pronađena" };
  return {
    title: usluga.title,
    description: usluga.short,
    openGraph: { images: [{ url: usluga.image, alt: usluga.title }] },
  };
}

export default async function UslugaPage({ params }: PageProps<"/usluge/[slug]">) {
  const { slug } = await params;
  const usluga = getUsluga(slug);
  if (!usluga) notFound();

  const Icon = usluga.icon;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <nav aria-label="Putanja" className="animate-[fade-up_0.6s_both] text-sm text-muted">
              <Link href="/usluge" className="transition-colors hover:text-brand-600">
                Usluge
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink/80">{usluga.title}</span>
            </nav>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white animate-[fade-up_0.6s_0.05s_both]">
              <Icon className="h-7 w-7" />
            </div>

            <h1 className="mt-5 max-w-xl text-balance font-display text-4xl font-bold leading-[1.06] tracking-tight animate-[fade-up_0.6s_0.1s_both] sm:text-5xl xl:text-6xl">
              {usluga.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted animate-[fade-up_0.6s_0.18s_both]">
              {usluga.intro}
            </p>

            <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 animate-[fade-up_0.6s_0.26s_both] sm:grid-cols-2">
              {usluga.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium text-ink/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 animate-[fade-up_0.6s_0.34s_both] sm:flex-row">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Zatraži ponudu
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/radovi"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-base font-semibold text-ink backdrop-blur transition-colors hover:border-brand/50 hover:text-brand-600"
              >
                Pogledaj radove
              </Link>
            </div>
          </div>

          {/* Medij */}
          <div className="relative animate-[fade-up_0.8s_0.2s_both]">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[20rem] overflow-hidden rounded-[2rem] bg-ink shadow-soft ring-1 ring-ink/10 sm:max-w-sm">
              {usluga.video ? (
                <VideoInView
                  src={usluga.video}
                  poster={usluga.poster}
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-label={`Snimak: ${usluga.title}`}
                />
              ) : (
                <Image
                  src={usluga.image}
                  alt={usluga.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 24rem"
                  priority
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Opis */}
      <section className="bg-sand-200/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Kako radimo</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {usluga.title} — <span className="text-gradient">bez improvizacije</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-muted">
            {usluga.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>

        {/* Galerija usluge */}
        {usluga.gallery.length > 0 && (
          <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {usluga.gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 80} className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={src}
                    alt={`${usluga.title} — primjer rada ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Prije / poslije */}
      {usluga.beforeAfter && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Prije i poslije</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Uvjerite se <span className="text-gradient">sami</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg text-muted">
                Povucite ručicu lijevo-desno i pogledajte razliku koju napravi
                obnova poda.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <BeforeAfter
                before={usluga.beforeAfter.before}
                after={usluga.beforeAfter.after}
                beforeAlt={usluga.beforeAfter.beforeAlt}
                afterAlt={usluga.beforeAfter.afterAlt}
                className="mx-auto aspect-[4/5] w-full max-w-xl"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Ostale usluge */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Ostale usluge</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Možda vam zatreba i…
            </h2>
          </Reveal>
          <div className="mt-10">
            <UslugeGrid limit={3} exclude={usluga.slug} />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
