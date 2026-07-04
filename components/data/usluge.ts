import type { ComponentType } from "react";
import {
  ParquetIcon,
  LaminateIcon,
  VinylIcon,
  GymIcon,
  SandIcon,
  RulerIcon,
  CarpetIcon,
  LevelIcon,
  WoodIcon,
  type IconProps,
} from "../icons";

export type Usluga = {
  slug: string;
  title: string;
  short: string;
  icon: ComponentType<IconProps>;
  /** Uvodna rečenica na detaljnoj stranici */
  intro: string;
  /** Duži opis */
  body: string[];
  points: string[];
  /** Hero medij na detaljnoj stranici */
  image: string;
  video?: string;
  poster?: string;
  /** Slike iz galerije vezane za uslugu */
  gallery: string[];
  /** Prije/poslije poređenje na detaljnoj stranici */
  beforeAfter?: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
  featured?: boolean;
};

export const usluge: Usluga[] = [
  {
    slug: "parket",
    title: "Parket",
    short:
      "Isporuka i profesionalna ugradnja klasičnog i gotovog parketa — toplina drveta za svaki prostor.",
    icon: ParquetIcon,
    intro:
      "Drvo je pod koji traje generacijama. Ugrađujemo klasični i gotov parket u svim formatima — od klasične riblje kosti do modernih širokih dasaka.",
    body: [
      "Parket biramo i polažemo prema prostoru: smjer svjetla, geometrija prostorije i način korištenja određuju format i šaru. Radimo klasičnu riblju kost, francusku riblju kost, brodski pod i kombinacije s pločicama.",
      "Prije polaganja provjeravamo vlagu i ravnost podloge — jer dobar pod počinje ispod poda. Nakon ugradnje pod predajemo spreman za korištenje.",
    ],
    points: [
      "Klasični i gotov (troslojni) parket",
      "Riblja kost, francuska kost, brodski pod",
      "Kombinacije parketa i pločica",
      "Provjera vlage i pripreme podloge",
    ],
    image: "/slike/foto-parket-ugradnja.jpg",
    video: "/video/klip-parket.mp4",
    poster: "/posteri/klip-parket.jpg",
    gallery: [
      "/galerija/rad-10.jpg",
      "/galerija/rad-11.jpg",
      "/galerija/rad-16.jpg",
      "/galerija/rad-17.jpg",
      "/galerija/rad-34.jpg",
      "/galerija/rad-35.jpg",
    ],
    featured: true,
  },
  {
    slug: "brusenje-i-lakiranje",
    title: "Brušenje i lakiranje",
    short:
      "Renoviranje postojećih drvenih podova — brušenje, kitovanje i lakiranje do savršenog sjaja.",
    icon: SandIcon,
    intro:
      "Stari parket ne mora da se mijenja — mora da se probudi. Brušenjem, kitovanjem i lakiranjem vraćamo podu izgled kakav je imao prvog dana.",
    body: [
      "Pod mašinski brusimo, kitujemo, po želji toniramo, i lakiramo u mat, polusjaj ili visoki sjaj.",
      "Renoviranjem pod izgleda kao nov — uz višestruko nižu cijenu od zamjene.",
    ],
    points: [
      "Mašinsko brušenje",
      "Kitovanje i popravka oštećenja",
      "Mat, polusjaj ili visoki sjaj",
      "Uljenje i toniranje po želji",
    ],
    image: "/slike/foto-parket-lakiran.jpg",
    video: "/video/klip-poliranje.mp4",
    poster: "/posteri/klip-poliranje.jpg",
    gallery: [
      "/galerija/rad-02.jpg",
      "/galerija/rad-03.jpg",
      "/galerija/rad-08.jpg",
      "/galerija/rad-09.jpg",
    ],
    beforeAfter: {
      before: "/galerija/rad-09.jpg",
      after: "/slike/foto-parket-lakiran.jpg",
      beforeAlt: "Star i izlizan parket u riblju kost prije obnove",
      afterAlt: "Parket nakon brušenja i lakiranja — visoki sjaj",
    },
    featured: true,
  },
  {
    slug: "reparacija-drveta",
    title: "Reparacija drvenih materijala",
    short:
      "Obnova svih drvenih površina — vrata, škure, stepeništa i drugi drveni elementi dobijaju novi život.",
    icon: WoodIcon,
    intro:
      "Ne obnavljamo samo podove. Repariramo sve drvene materijale — od vrata i škura do stepeništa i drugih drvenih elemenata u prostoru.",
    body: [
      "Stare premaze skidamo, površinu brusimo i popravljamo oštećenja, a zatim drvo štitimo lakom, uljem ili bojom po želji.",
      "Reparacija je često višestruko povoljnija od zamjene, a stolarija rađena od punog drveta gotovo uvijek vrijedi obnove.",
    ],
    points: [
      "Vrata, škure i stolarija",
      "Drvena stepeništa i gazišta",
      "Skidanje starih premaza i brušenje",
      "Zaštita lakom, uljem ili bojom",
    ],
    image: "/slike/foto-skure-vila.jpg",
    gallery: ["/slike/foto-skure-vila.jpg"],
  },
  {
    slug: "laminat",
    title: "Laminat",
    short:
      "Brza i čista ugradnja laminata visoke klase otpornosti — idealan odnos cijene i kvaliteta.",
    icon: LaminateIcon,
    intro:
      "Laminat je najbrži put do novog poda — veliki izbor dekora, otpornost na habanje i brza, čista ugradnja.",
    body: [
      "Isporučujemo i ugrađujemo laminate za domove i poslovne prostore. Uz pod ugrađujemo i podlogu, folije i lajsne.",
      "Podloga se prije ugradnje nivelira po potrebi, jer ravan pod znači tiši i dugotrajniji laminat.",
    ],
    points: [
      "Isporuka i ugradnja",
      "Veliki izbor dekora",
      "Brza i čista montaža",
      "Podloge, folije i lajsne",
    ],
    image: "/radovi/laminat.jpg",
    gallery: ["/radovi/laminat.jpg", "/radovi/laminat-dekor.jpg"],
  },
  {
    slug: "lvt-spc",
    title: "LVT / SPC podovi",
    short:
      "Vodootporni vinil podovi sljedeće generacije — izgled drveta uz maksimalnu izdržljivost.",
    icon: VinylIcon,
    intro:
      "LVT i SPC podovi spajaju izgled drveta sa 100% vodootpornošću — idealni za kupatila, kuhinje, hotele i poslovne prostore.",
    body: [
      "SPC (kameno-plastično jezgro) podovi su dimenzionalno stabilni i pogodni za podno grijanje. Tihi su i topli pod nogama, a habanje podnose bolje od većine tradicionalnih podova.",
      "Ugrađivali smo ih u hotelskim hodnicima, apartmanima i kancelarijama — tamo gdje pod mora da izdrži sve.",
    ],
    points: [
      "100% vodootporno",
      "Pogodno za podno grijanje",
      "Tiho i toplo pod nogama",
      "Za dom, hotele i poslovne prostore",
    ],
    image: "/posteri/klip-hotel.jpg",
    video: "/video/klip-hotel.mp4",
    poster: "/posteri/klip-hotel.jpg",
    gallery: ["/galerija/rad-23.jpg"],
    featured: true,
  },
  {
    slug: "itison",
    title: "Tepisi, itison i tepih ploče",
    short:
      "Ugradnja tepiha, itisona i tepih ploča za kancelarije, hotele i stepeništa — tiho, toplo i reprezentativno.",
    icon: CarpetIcon,
    intro:
      "Tekstilni podovi upijaju zvuk i daju prostoru toplinu. Ugrađujemo tepihe, itisone i tepih ploče u kancelarijama, hotelima i na stepeništima.",
    body: [
      "Tepih ploče su omiljeni izbor za poslovne prostore: lako se mijenjaju pojedinačno, kombinuju u šare i jednostavno prate podne razvodne kutije i instalacije.",
      "Za hotele i stepeništa koristimo itisone i tepihe visoke otpornosti sa preciznim krojenjem oko ograda, gazišta i ivica.",
    ],
    points: [
      "Ugradnja tepiha i itisona",
      "Tepih ploče za kancelarije",
      "Obloga stepeništa",
      "Zvučna i toplotna izolacija",
    ],
    image: "/slike/foto-itison-detalj.jpg",
    video: "/video/klip-itison.mp4",
    poster: "/posteri/klip-itison.jpg",
    gallery: [
      "/galerija/rad-04.jpg",
      "/galerija/rad-05.jpg",
      "/galerija/rad-19.jpg",
      "/galerija/rad-21.jpg",
      "/galerija/rad-23.jpg",
      "/galerija/rad-25.jpg",
    ],
  },
  {
    slug: "nivelacija",
    title: "Nivelacija i priprema podloge",
    short:
      "Izlivanje nivelin (nivelišuće) mase i priprema podloge — temelj svakog kvalitetnog poda.",
    icon: LevelIcon,
    intro:
      "Nijedan pod nije bolji od podloge na kojoj leži. Izlivamo nivelin masu i pripremamo podloge za sve vrste završnih podova.",
    body: [
      "Podlogu mjerimo i izlivamo samonivelišuću (nivelin) masu dok ne dobijemo ravan koja zadovoljava tolerancije za parket, vinil ili tekstil. Radimo i veće poslovne površine u jednom izlivanju.",
      "Uz nivelaciju radimo i mašinsku obradu i usisavanje podloge prije polaganja završnog poda.",
    ],
    points: [
      "Izlivanje nivelin mase",
      "Velike površine u jednom izlivanju",
      "Priprema za sve vrste podova",
      "Mjerenje vlage i ravnosti",
    ],
    image: "/slike/foto-poliranje-hala.jpg",
    video: "/video/klip-nivelacija.mp4",
    poster: "/posteri/klip-nivelacija.jpg",
    gallery: [
      "/galerija/rad-12.jpg",
      "/galerija/rad-13.jpg",
      "/galerija/rad-24.jpg",
    ],
  },
  {
    slug: "teretane",
    title: "Podovi za teretane",
    short:
      "Prodaja i ugradnja gumenih puzli i sportskih podloga za teretane i fitnes prostore.",
    icon: GymIcon,
    intro:
      "Gumene puzle i sportske podloge štite i pod i zglobove. Opremamo teretane, fitnes studije i kućne radne zone.",
    body: [
      "Puzle različitih debljina biramo prema opterećenju: od kardio zona do prostora sa slobodnim tegovima. Montaža je brza i bez ljepila, pa se pod može proširivati i premještati.",
      "Za sportske sale nudimo i homogene vinilne podove otporne na intenzivno korištenje.",
    ],
    points: [
      "Gumene puzle raznih debljina",
      "Amortizacija i zaštita ploče",
      "Homogeni sportski vinil",
      "Brza montaža bez ljepila",
    ],
    image: "/radovi/teretana-puzle.jpg",
    gallery: ["/radovi/teretana-puzle.jpg", "/radovi/teretana-sportski.jpg"],
  },
  {
    slug: "mjerenje-i-savjet",
    title: "Mjerenje i savjet",
    short:
      "Izlazak na teren, precizno mjerenje i stručan savjet o materijalu prije svake ugradnje.",
    icon: RulerIcon,
    intro:
      "Svaki posao počinje izlaskom na teren: mjerimo prostor, provjeravamo podlogu i predlažemo materijal koji ima smisla za vaš budžet. Ako dođe do dogovora, izlazak i procjena se ne naplaćuju.",
    body: [
      "Procjenjujemo stanje postojeće podloge, mjerimo vlagu i ravnost, i na osnovu toga dajemo jasnu ponudu — bez skrivenih troškova.",
      "Pomažemo i oko izbora: objašnjavamo razlike među materijalima i preporučujemo šta se gdje najbolje ponaša.",
    ],
    points: [
      "Izlazak na teren i mjerenje",
      "Besplatno ukoliko dođe do dogovora",
      "Procjena stanja podloge",
      "Jasna i fer ponuda",
    ],
    image: "/slike/foto-brusenje.jpg",
    gallery: [],
  },
];

export function getUsluga(slug: string) {
  return usluge.find((u) => u.slug === slug);
}
