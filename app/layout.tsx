import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import { site } from "@/components/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Podix Group — Ugradnja podova: parket, laminat, LVT/SPC, itison",
    template: "%s · Podix Group",
  },
  description:
    "Podix Group — isporuka i profesionalna ugradnja svih vrsta podova: parket, laminat, LVT/SPC, tepisi i itison, izlivanje nivelin mase, reparacija drvenih materijala i podovi za teretane. Brza isporuka, profesionalna ugradnja.",
  keywords: [
    "podovi",
    "ugradnja podova",
    "parket",
    "laminat",
    "LVT",
    "SPC",
    "vinil pod",
    "itison",
    "tepih",
    "tepih ploče",
    "nivelacija poda",
    "nivelin masa",
    "reparacija drveta",
    "puzle za teretane",
    "brušenje parketa",
    "Podix Group",
    "Crna Gora",
  ],
  authors: [{ name: "Podix Group" }],
  // Favicon je u public/ umjesto app/ — file-based ikona u app/ blokira
  // instant validaciju (računa se kao runtime metadata).
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Podix Group",
    title: "Podix Group — Podovi koji traju",
    description:
      "Isporuka i ugradnja svih vrsta podova: parket, laminat, LVT/SPC, itison i podovi za teretane. Brza isporuka, profesionalna ugradnja.",
    images: [
      {
        url: "/slike/foto-parket-lakiran.jpg",
        width: 1200,
        height: 1600,
        alt: "Podix Group — izbrušen i lakiran parket u riblju kost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podix Group — Podovi koji traju",
    description:
      "Isporuka i ugradnja svih vrsta podova: parket, laminat, LVT/SPC, itison i podovi za teretane.",
    images: ["/slike/foto-parket-lakiran.jpg"],
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
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Header />
        <ScrollLine />
        {children}
        <Footer />
      </body>
    </html>
  );
}
