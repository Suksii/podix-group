"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckIcon } from "./icons";
import { site } from "./site";

const services = [
  "Parket",
  "Laminat",
  "LVT / SPC",
  "Puzle za teretane",
  "Brušenje i lakiranje",
  "Drugo",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Upit za ponudu — ${service || "Podix Group"}`;
    const body = [
      `Ime: ${name}`,
      `Telefon: ${phone}`,
      `Usluga: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldClass =
    "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">
            Ime i prezime
          </label>
          <input id="name" name="name" required placeholder="Vaše ime" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink/80">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+382 6x xxx xxx"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink/80">
          Usluga
        </label>
        <select id="service" name="service" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Izaberite uslugu
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Opišite prostor, kvadraturu i šta vam je potrebno…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        {sent ? (
          <>
            <CheckIcon className="h-5 w-5" />
            Otvaram vaš mail…
          </>
        ) : (
          <>
            Pošalji upit
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {sent && (
        <p className="text-sm text-muted">
          Ako se mail klijent nije otvorio, pozovite nas direktno na{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-600">
            {site.phoneDisplay}
          </a>
          .
        </p>
      )}
    </form>
  );
}
