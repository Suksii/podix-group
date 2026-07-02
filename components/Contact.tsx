import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { site } from "./site";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, InstagramIcon } from "./icons";

const details = [
  { icon: PhoneIcon, label: "Telefon", value: site.phoneDisplay, href: site.phoneHref },
  { icon: PhoneIcon, label: "Telefon", value: site.phone2Display, href: site.phone2Href },
  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    external: true,
  },
  { icon: PinIcon, label: "Lokacija", value: site.location },
  { icon: ClockIcon, label: "Radno vrijeme", value: site.hours },
];

export default function Contact() {
  return (
    <section id="kontakt" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info panel */}
            <div className="relative overflow-hidden bg-ink p-8 text-white sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />

              <div className="relative">
                <span className="eyebrow text-brand-300">Kontakt</span>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Spremni za novi <span className="text-gradient">pod?</span>
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/65">
                  Pošaljite upit ili nas pozovite. Izlazimo na teren, mjerimo i
                  dajemo besplatnu procjenu — bez ikakve obaveze.
                </p>

                <ul className="mt-10 space-y-5">
                  {details.map((d) => {
                    const Icon = d.icon;
                    const content = (
                      <span className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-wider text-white/45">
                            {d.label}
                          </span>
                          <span className="block text-[15px] font-semibold text-white">
                            {d.value}
                          </span>
                        </span>
                      </span>
                    );
                    return (
                      <li key={d.value}>
                        {d.href ? (
                          <a
                            href={d.href}
                            {...(d.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="inline-block transition-opacity hover:opacity-80"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Form panel */}
            <div className="p-8 sm:p-12">
              <Reveal>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Zatraži besplatnu ponudu
                </h3>
                <p className="mt-2 text-muted">
                  Popunite formu — javljamo se u najkraćem roku.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
