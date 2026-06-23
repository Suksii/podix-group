/**
 * Central place for contact details and navigation.
 * 👉 Zamijenite vrijednosti ispod stvarnim podacima firme.
 */
export const site = {
  name: "Podix Group",
  phoneDisplay: "068 890 421",
  phoneHref: "tel:+38268890421",
  email: "podixgroup@gmail.com",
  instagram: "https://www.instagram.com/podixgroup",
  instagramHandle: "@podixgroup",
  location: "Crna Gora",
  hours: "Pon – Sub, 08:00 – 18:00",
} as const;

export const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#zasto", label: "Zašto mi" },
  { href: "#proces", label: "Proces" },
  { href: "#radovi", label: "Radovi" },
  { href: "#kontakt", label: "Kontakt" },
] as const;
