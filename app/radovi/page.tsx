import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import { radovi } from "@/components/data/radovi";
import { site } from "@/components/site";
import { InstagramIcon } from "@/components/icons";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Radovi",
  description:
    "Galerija naših radova: ugradnja parketa, brušenje i lakiranje, itison i tepih ploče, nivelacija podloge, LVT i vinil podovi, podovi za teretane.",
};

export default function RadoviPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Naši radovi"
        title={
          <>
            Pogledajte šta smo <span className="text-gradient">nedavno radili.</span>
          </>
        }
        description="Fotografije i snimci sa naših gradilišta — bez uljepšavanja, ovako to stvarno izgleda. Filtrirajte po vrsti posla."
      >
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-brand/50 hover:text-brand-600"
        >
          <InstagramIcon className="h-5 w-5" />
          Još radova na {site.instagramHandle}
        </a>
      </PageHero>

      <section className="pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid items={radovi} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
