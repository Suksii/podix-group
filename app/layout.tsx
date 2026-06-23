import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const SITE_URL = "https://podixgroup.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Podix Group — Ugradnja podova, parket, laminat, LVT/SPC i puzle za teretane",
    template: "%s · Podix Group",
  },
  description:
    "Podix Group — profesionalna ugradnja svih vrsta podova. Isporuka i ugradnja parketa, laminata i LVT/SPC podova, te prodaja i ugradnja gumenih puzli za teretane. Precizno, čisto i uz garanciju.",
  keywords: [
    "podovi",
    "ugradnja podova",
    "parket",
    "laminat",
    "LVT",
    "SPC",
    "vinil pod",
    "puzle za teretane",
    "gumeni pod",
    "brušenje parketa",
    "Podix Group",
  ],
  authors: [{ name: "Podix Group" }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Podix Group",
    title: "Podix Group — Podovi koji traju",
    description:
      "Ugradnja svih vrsta podova: parket, laminat, LVT/SPC i puzle za teretane. Precizno, čisto i uz garanciju.",
    images: [{ url: "/podix1.jpg", width: 1080, height: 1080, alt: "Podix Group — isporuka i ugradnja podova" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podix Group — Podovi koji traju",
    description:
      "Ugradnja svih vrsta podova: parket, laminat, LVT/SPC i puzle za teretane.",
    images: ["/podix1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
