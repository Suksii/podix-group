import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 pt-32 pb-24 sm:px-8">
      <div className="text-center">
        <p className="eyebrow justify-center">Greška 404</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
          Ova stranica <span className="text-gradient">ne postoji.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          Izgleda da je link pogrešan ili je stranica premještena. Vratite se
          na početnu i krenite ispočetka.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
        >
          Nazad na početnu
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
