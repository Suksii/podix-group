export type Kategorija =
  | "parket"
  | "brusenje"
  | "itison"
  | "nivelacija"
  | "vinil"
  | "teretane";

export const kategorije: { id: Kategorija | "sve"; label: string }[] = [
  { id: "sve", label: "Sve" },
  { id: "parket", label: "Parket" },
  { id: "brusenje", label: "Brušenje i lakiranje" },
  { id: "itison", label: "Itison i tepih ploče" },
  { id: "nivelacija", label: "Nivelacija" },
  { id: "vinil", label: "LVT i vinil" },
  { id: "teretane", label: "Teretane" },
];

export type Rad = {
  src: string;
  alt: string;
  kategorija: Kategorija;
  label?: string;
  video?: string;
  poster?: string;
  /** Istaknuto — veće polje u mozaiku */
  wide?: boolean;
};

export const radovi: Rad[] = [
  // — Video snimci s terena —
  {
    src: "/posteri/klip-parket.jpg",
    video: "/video/klip-parket.mp4",
    poster: "/posteri/klip-parket.jpg",
    alt: "Snimak brušenja parketa u riblju kost",
    kategorija: "parket",
    label: "Parket uživo",
    wide: true,
  },
  {
    src: "/posteri/klip-hotel.jpg",
    video: "/video/klip-hotel.mp4",
    poster: "/posteri/klip-hotel.jpg",
    alt: "Snimak hotelskog hodnika sa novim podom",
    kategorija: "vinil",
    label: "Hotelski hodnik",
  },
  {
    src: "/posteri/klip-itison.jpg",
    video: "/video/klip-itison.mp4",
    poster: "/posteri/klip-itison.jpg",
    alt: "Snimak tepih ploča u kancelarijskom hodniku",
    kategorija: "itison",
    label: "Tepih ploče",
  },
  {
    src: "/posteri/klip-nivelacija.jpg",
    video: "/video/klip-nivelacija.mp4",
    poster: "/posteri/klip-nivelacija.jpg",
    alt: "Snimak svježe izlivene nivelišuće mase",
    kategorija: "nivelacija",
    label: "Nivelišuća masa",
  },
  {
    src: "/posteri/klip-poliranje.jpg",
    video: "/video/klip-poliranje.mp4",
    poster: "/posteri/klip-poliranje.jpg",
    alt: "Snimak mašinskog poliranja podloge",
    kategorija: "nivelacija",
    label: "Mašinska obrada",
  },
  {
    src: "/posteri/klip-terasa.jpg",
    video: "/video/klip-terasa.mp4",
    poster: "/posteri/klip-terasa.jpg",
    alt: "Snimak popločane sale",
    kategorija: "nivelacija",
    label: "Popločavanje",
  },

  // — Parket —
  {
    src: "/slike/foto-parket-ugradnja.jpg",
    alt: "Svježe ugrađen parket u riblju kost",
    kategorija: "parket",
    label: "Riblja kost — ugradnja",
    wide: true,
  },
  { src: "/galerija/rad-10.jpg", alt: "Parket u riblju kost pored terase", kategorija: "parket" },
  { src: "/galerija/rad-11.jpg", alt: "Novi parket u stambenom prostoru", kategorija: "parket" },
  { src: "/galerija/rad-14.jpg", alt: "Polaganje parketa u toku", kategorija: "parket" },
  { src: "/galerija/rad-15.jpg", alt: "Priprema i polaganje parketa", kategorija: "parket" },
  { src: "/galerija/rad-16.jpg", alt: "Majstor polaže parket u riblju kost", kategorija: "parket" },
  { src: "/galerija/rad-17.jpg", alt: "Parket u riblju kost uz stepenice", kategorija: "parket" },
  { src: "/galerija/rad-18.jpg", alt: "Ugradnja parketa — radovi u toku", kategorija: "parket" },
  {
    src: "/galerija/rad-34.jpg",
    alt: "Kombinacija parketa i heksagon pločica",
    kategorija: "parket",
    label: "Parket + heksagon pločice",
  },
  {
    src: "/galerija/rad-35.jpg",
    alt: "Detalj spoja parketa i pločica sa ljepilom",
    kategorija: "parket",
    label: "Dizajn detalj",
  },
  { src: "/radovi/parket-rk.jpg", alt: "Parket u riblju kost", kategorija: "parket" },
  { src: "/radovi/parket-zavrsen.jpg", alt: "Završen parket", kategorija: "parket" },

  // — Brušenje i lakiranje —
  {
    src: "/slike/foto-parket-lakiran.jpg",
    alt: "Izbrušen i lakiran parket u riblju kost",
    kategorija: "brusenje",
    label: "Poslije lakiranja",
    wide: true,
  },
  {
    src: "/slike/foto-brusenje.jpg",
    alt: "Brušenje parketa mašinom",
    kategorija: "brusenje",
    label: "Brušenje u toku",
  },
  { src: "/galerija/rad-02.jpg", alt: "Stari parket prije obnove", kategorija: "brusenje" },
  { src: "/galerija/rad-03.jpg", alt: "Brušenje starog parketa", kategorija: "brusenje" },
  { src: "/galerija/rad-08.jpg", alt: "Parket nakon brušenja", kategorija: "brusenje" },
  { src: "/galerija/rad-09.jpg", alt: "Lakiran parket u riblju kost", kategorija: "brusenje" },

  // — Itison i tepih ploče —
  {
    src: "/slike/foto-itison-detalj.jpg",
    alt: "Tepih ploče oko podne razvodne kutije",
    kategorija: "itison",
    label: "Precizno krojenje",
  },
  { src: "/galerija/rad-04.jpg", alt: "Stepenište obloženo itisonom", kategorija: "itison", label: "Stepenište" },
  { src: "/galerija/rad-05.jpg", alt: "Itison na stepeništu sa ogradom", kategorija: "itison" },
  { src: "/galerija/rad-06.jpg", alt: "Obloga stepenica itisonom u toku", kategorija: "itison" },
  { src: "/galerija/rad-07.jpg", alt: "Završeno stepenište sa itisonom", kategorija: "itison" },
  { src: "/galerija/rad-19.jpg", alt: "Itison u kancelariji", kategorija: "itison" },
  { src: "/galerija/rad-20.jpg", alt: "Tepih pod u sali za sastanke", kategorija: "itison" },
  { src: "/galerija/rad-21.jpg", alt: "Itison u poslovnom prostoru", kategorija: "itison" },
  { src: "/galerija/rad-23.jpg", alt: "Hotelski hodnik sa itisonom", kategorija: "itison", label: "Hotel", wide: true },
  { src: "/galerija/rad-25.jpg", alt: "Tepih ploče u kancelariji", kategorija: "itison" },
  { src: "/galerija/rad-26.jpg", alt: "Ugradnja tepih ploča u kancelariji", kategorija: "itison" },
  { src: "/galerija/rad-27.jpg", alt: "Tepih ploče uz zelene stubove", kategorija: "itison" },
  { src: "/radovi/stepenice.jpg", alt: "Obloga stepeništa", kategorija: "itison" },

  // — Nivelacija —
  { src: "/galerija/rad-12.jpg", alt: "Izlivanje nivelišuće mase", kategorija: "nivelacija" },
  { src: "/galerija/rad-13.jpg", alt: "Nivelisana podloga", kategorija: "nivelacija" },
  { src: "/galerija/rad-24.jpg", alt: "Priprema podloge uz parket", kategorija: "nivelacija" },
  {
    src: "/slike/foto-poliranje-hala.jpg",
    alt: "Mašinska obrada podloge u velikoj hali",
    kategorija: "nivelacija",
    label: "Poslovni prostor",
  },

  // — LVT / vinil —
  { src: "/galerija/rad-28.jpg", alt: "Polaganje homogenog vinila", kategorija: "vinil" },
  { src: "/galerija/rad-29.jpg", alt: "Vinilne role pripremljene za ugradnju", kategorija: "vinil" },
  { src: "/galerija/rad-31.jpg", alt: "Vinilni pod u prostoriji", kategorija: "vinil" },
  { src: "/galerija/rad-32.jpg", alt: "Varenje spojeva vinilnog poda", kategorija: "vinil" },
  { src: "/radovi/laminat.jpg", alt: "Polaganje laminata", kategorija: "vinil", label: "Laminat" },
  { src: "/radovi/laminat-dekor.jpg", alt: "Drveni dekor poda", kategorija: "vinil" },

  // — Teretane —
  { src: "/radovi/teretana-puzle.jpg", alt: "Gumene puzle za teretanu", kategorija: "teretane", label: "Gumene puzle" },
  { src: "/radovi/teretana-sportski.jpg", alt: "Sportski pod u teretani", kategorija: "teretane", label: "Sportski pod" },
];
