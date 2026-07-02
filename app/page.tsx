import Link from "next/link";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import BrandDivider from "@/components/BrandDivider";
import UslugeGrid from "@/components/UslugeGrid";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { radovi } from "@/components/data/radovi";
import { site } from "@/components/site";
import { ArrowRight, InstagramIcon } from "@/components/icons";

export const unstable_instant = { prefetch: "static" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: site.url,
  description:
    "Isporuka i ugradnja svih vrsta podova: parket, laminat, LVT/SPC, itison i tepih ploče, nivelacija podloge i podovi za teretane.",
  telephone: [site.phoneDisplay, site.phone2Display],
  email: site.email,
  areaServed: site.location,
  sameAs: [site.instagram],
  makesOffer: [
    "Ugradnja parketa",
    "Brušenje i lakiranje parketa",
    "Ugradnja laminata",
    "Ugradnja LVT/SPC podova",
    "Ugradnja itisona i tepih ploča",
    "Nivelacija i priprema podloge",
    "Prodaja i ugradnja puzli za teretane",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

// Izdvojeni radovi za početnu — miješano po kategorijama
const izdvojeniRadovi = [
  radovi.find((r) => r.video === "/video/klip-parket.mp4")!,
  radovi.find((r) => r.src === "/slike/foto-parket-lakiran.jpg")!,
  radovi.find((r) => r.src === "/galerija/rad-23.jpg")!,
  radovi.find((r) => r.src === "/slike/foto-itison-detalj.jpg")!,
  radovi.find((r) => r.src === "/galerija/rad-34.jpg")!,
  radovi.find((r) => r.src === "/radovi/teretana-puzle.jpg")!,
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <Hero />

        {/* Usluge — pregled */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Reveal className="max-w-2xl">
                <span className="eyebrow">Naše usluge</span>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Sve za vaš pod — <span className="text-gradient">na jednom mjestu</span>
                </h2>
                <p className="mt-4 text-lg text-muted">
                  Od prvog mjerenja do posljednje letvice. Bilo da renovirate
                  dom ili opremate poslovni prostor, pokrivamo cijeli posao.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <Link
                  href="/usluge"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-brand/50 hover:text-brand-600"
                >
                  Sve usluge
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <div className="mt-14">
              <UslugeGrid limit={6} />
            </div>
          </div>
        </section>

        <WhyUs />
        <Process />
        <BrandDivider />

        {/* Izdvojeni radovi */}
        <section className="relative bg-sand-200/60 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Reveal className="max-w-2xl">
                <span className="eyebrow">Naši radovi</span>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Radovi koji <span className="text-gradient">govore za nas</span>
                </h2>
                <p className="mt-4 text-lg text-muted">
                  Izbor iz posljednjih projekata — kompletna galerija sa svim
                  kategorijama je na stranici Radovi.
                </p>
              </Reveal>
              <Reveal delay={120} className="flex flex-wrap gap-3">
                <Link
                  href="/radovi"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Kompletna galerija
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-brand/50 hover:text-brand-600"
                >
                  <InstagramIcon className="h-5 w-5" />
                  {site.instagramHandle}
                </a>
              </Reveal>
            </div>

            <div className="mt-12">
              <GalleryGrid items={izdvojeniRadovi} hideFilters />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
