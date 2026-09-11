import landIndustri from "@/assets/land-industri.jpg";
import landCbd from "@/assets/land-cbd.jpg";
import landPariwisata from "@/assets/land-pariwisata.jpg";

export type Property = {
  id: string;
  title: string;
  lokasi: string;
  luas: string;
  hargaSewa: string;
  peruntukan: string;
  status: "TERSEDIA" | "PROSES" | "TERSEWA";
  badgeArea: string;
  badgeHarga: string;
  badgeKec: string;
  image: string;
};

export const properties: Property[] = [
  {
    id: "grogol-industri",
    title: "Lahan Industri Grogol Strategis",
    lokasi: "Kec. Grogol, Kediri",
    luas: "15.000 m²",
    hargaSewa: "Rp 28.000.000 / Tahun",
    peruntukan: "Industri Ringan, Pergudangan",
    status: "TERSEDIA",
    badgeArea: "15,000m²",
    badgeHarga: "Rp28M/Yr",
    badgeKec: "Grogol",
    image: landIndustri,
  },
  {
    id: "cbd-utara",
    title: "Kawasan Bisnis CBD Utara",
    lokasi: "Kec. Mojoroto, Kediri",
    luas: "8.000 m²",
    hargaSewa: "Rp 65.000.000 / Tahun",
    peruntukan: "Perkantoran, Ritel",
    status: "TERSEDIA",
    badgeArea: "8,000m²",
    badgeHarga: "Rp65M/Yr",
    badgeKec: "Kota",
    image: landCbd,
  },
  {
    id: "brantas-pariwisata",
    title: "Area Pariwisata Brantas",
    lokasi: "Kec. Mojoroto, Kediri",
    luas: "10.000 m²",
    hargaSewa: "Rp 20.000.000 / Tahun",
    peruntukan: "Pariwisata, Kuliner",
    status: "TERSEDIA",
    badgeArea: "10,000m²",
    badgeHarga: "Rp20M/Yr",
    badgeKec: "Mojoroto",
    image: landPariwisata,
  },
  {
    id: "pesantren-gudang",
    title: "Lahan Pergudangan Pesantren",
    lokasi: "Kec. Pesantren, Kediri",
    luas: "6.500 m²",
    hargaSewa: "Rp 32.000.000 / Tahun",
    peruntukan: "Pergudangan, Logistik",
    status: "PROSES",
    badgeArea: "6,500m²",
    badgeHarga: "Rp32M/Yr",
    badgeKec: "Pesantren",
    image: landIndustri,
  },
  {
    id: "ngasem-agro",
    title: "Kebun Agro Ngasem",
    lokasi: "Kec. Ngasem, Kediri",
    luas: "22.000 m²",
    hargaSewa: "Rp 18.000.000 / Tahun",
    peruntukan: "Agribisnis, Perkebunan",
    status: "TERSEDIA",
    badgeArea: "22,000m²",
    badgeHarga: "Rp18M/Yr",
    badgeKec: "Ngasem",
    image: landPariwisata,
  },
  {
    id: "kota-ritel",
    title: "Ruko Ritel Pusat Kota",
    lokasi: "Kec. Kota, Kediri",
    luas: "1.200 m²",
    hargaSewa: "Rp 48.000.000 / Tahun",
    peruntukan: "Ritel, Kuliner",
    status: "TERSEWA",
    badgeArea: "1,200m²",
    badgeHarga: "Rp48M/Yr",
    badgeKec: "Kota",
    image: landCbd,
  },
];
