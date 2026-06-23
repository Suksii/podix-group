import Image from "next/image";
import Reveal from "./Reveal";
import { InstagramIcon, ArrowRight } from "./icons";
import { site } from "./site";

type Tile = {
  img?: string;
  video?: string;
  poster?: string;
  alt: string;
  tag: string;
  label: string;
  className?: string;
};

// Stvarne fotografije i snimci radova (preuzeto sa Instagram profila @podixgroup).
const tiles: Tile[] = [
  {
    video: "/radovi/ugradnja.mp4",
    poster: "/radovi/parket-ugradnja.jpg",
    alt: "Snimak ugradnje parketa",
    tag: "Parket",
    label: "Ugradnja u toku",
    className: "col-span-2 row-span-2",
  },
  { img: "/radovi/parket-rk.jpg", alt: "Parket u riblju kost", tag: "Parket", label: "Riblja kost" },
  { img: "/radovi/teretana-puzle.jpg", alt: "Gumene puzle za teretanu", tag: "Teretana", label: "Puzle za teretane" },
  { img: "/radovi/laminat.jpg", alt: "Polaganje laminata", tag: "Laminat", label: "Polaganje laminata" },
  { img: "/radovi/stepenice.jpg", alt: "Obloga stepeništa drvetom", tag: "Stepenice", label: "Obloga stepenica" },
  { img: "/radovi/parket-zavrsen.jpg", alt: "Završen parket", tag: "Parket", label: "Završen pod", className: "col-span-2" },
  { img: "/radovi/teretana-sportski.jpg", alt: "Sportski gumeni pod", tag: "Teretana", label: "Sportski pod" },
  { img: "/radovi/laminat-dekor.jpg", alt: "Drveni dekor poda", tag: "Laminat", label: "Drveni dekor" },
];

export default function Gallery() {
  return (
    <section id="radovi" className="relative scroll-mt-24 bg-sand-200/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Naši radovi</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Naši radovi <span className="text-gradient">govore za nas</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Izbor iz naših projekata — parket, laminat, LVT/SPC podovi i puzle
              za teretane. Još fotografija i snimaka na našem Instagramu.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-brand/50 hover:text-brand-600"
            >
              <InstagramIcon className="h-5 w-5" />
              Pogledaj na Instagramu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.video ?? tile.img}
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${tile.className ?? ""}`}
            >
              {tile.video ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={tile.video}
                  poster={tile.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={tile.alt}
                />
              ) : (
                <Image
                  src={tile.img!}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5">
                <span className="flex w-fit items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {tile.video && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  )}
                  {tile.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white drop-shadow">
                  {tile.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
