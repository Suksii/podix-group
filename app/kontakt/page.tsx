import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { site } from "@/components/site";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Podix Group — besplatan izlazak na teren, mjerenje i procjena. Telefon: 068 890 421, email: podixgroup@gmail.com.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: site.url,
  telephone: [site.phoneDisplay, site.phone2Display],
  email: site.email,
  areaServed: site.location,
  openingHours: "Mo-Sa 08:00-18:00",
  sameAs: [site.instagram],
};

export default function KontaktPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Recite nam šta radite — <span className="text-gradient">mi ćemo pod.</span>
          </>
        }
        description="Pozovite, pišite ili popunite formu. Izlazimo na teren, mjerimo i dajemo besplatnu procjenu — bez ikakve obaveze."
      />
      <div className="pb-6">
        <Contact />
      </div>
    </main>
  );
}
