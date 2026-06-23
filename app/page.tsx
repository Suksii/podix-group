import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import { site } from "@/components/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description:
    "Ugradnja svih vrsta podova: parket, laminat, LVT/SPC podovi i puzle za teretane.",
  telephone: site.phoneDisplay,
  email: site.email,
  areaServed: site.location,
  sameAs: [site.instagram],
  makesOffer: [
    "Ugradnja parketa",
    "Ugradnja laminata",
    "Ugradnja LVT/SPC podova",
    "Prodaja i ugradnja puzli za teretane",
    "Brušenje i lakiranje parketa",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ScrollLine />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
