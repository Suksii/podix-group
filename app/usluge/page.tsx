import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import UslugeGrid from "@/components/UslugeGrid";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Isporuka i ugradnja parketa, laminata, LVT/SPC podova, tepiha i itisona, izlivanje nivelin mase, brušenje i lakiranje, reparacija drvenih materijala, podovi za teretane.",
};

export default function UslugePage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Usluge"
        title={
          <>
            Jedan tim za <span className="text-gradient">cijeli pod.</span>
          </>
        }
        description="Isporuka materijala, priprema podloge i profesionalna ugradnja — ne morate juriti tri majstora za jedan posao. Izaberite uslugu i pogledajte kako radimo."
      />

      <section className="pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <UslugeGrid />
        </div>
      </section>

      <div className="bg-sand-200/60">
        <Process />
      </div>

      <CtaBand />
    </main>
  );
}
