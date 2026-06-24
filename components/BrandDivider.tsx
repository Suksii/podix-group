import Image from "next/image";
import Reveal from "./Reveal";

export default function BrandDivider() {
  return (
    <section className="py-16">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <div className="flex w-full items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-ink/15" />
          <Image
            src="/podix-logo.png"
            alt="Podix Group"
            width={320}
            height={140}
            className="h-40 w-auto sm:h-60"
          />
          <span className="h-px flex-1 bg-linear-to-l from-transparent to-ink/15" />
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-600 sm:text-sm">
          Podovi koji traju cijeli život
        </p>
      </Reveal>
    </section>
  );
}
