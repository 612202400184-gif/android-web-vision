import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { SearchPanel } from "@/components/SearchPanel";
import { MapPreview } from "@/components/MapPreview";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import heroImage from "@/assets/hero-kediri.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Invest Kediri – Marketplace Tanah & Investasi" },
      {
        name: "description",
        content:
          "Temukan lahan siap pakai untuk investasi di Kota Kediri: sewa tanah industri, bisnis, dan pariwisata.",
      },
      { property: "og:title", content: "Invest Kediri – Marketplace Tanah & Investasi" },
      {
        property: "og:description",
        content: "Cari dan ajukan sewa lahan investasi di Kota Kediri dalam satu aplikasi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [peruntukan, setPeruntukan] = useState("");

  const list = useMemo(
    () =>
      properties.filter(
        (p) =>
          p.lokasi.toLowerCase().includes(query.toLowerCase()) &&
          p.peruntukan.toLowerCase().includes(peruntukan.toLowerCase()),
      ),
    [query, peruntukan],
  );

  return (
    <AppShell>
      <section className="relative">
        <img
          src={heroImage}
          alt="Panorama Kota Kediri dengan jembatan dan lahan hijau"
          width={1536}
          height={640}
          className="h-56 w-full object-cover sm:h-72 md:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-4">
          <h1 className="max-w-2xl text-2xl font-extrabold leading-snug text-primary-foreground sm:text-3xl md:text-4xl">
            Temukan Lahan Siap Pakai untuk Investasi Masa Depan Anda di Kota Kediri
          </h1>
          <a
            href="#pencarian"
            className="mt-5 w-fit rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Cari Tanah Sekarang
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-5 px-4 py-5" id="pencarian">
        <SearchPanel
          value={query}
          onChange={setQuery}
          peruntukan={peruntukan}
          onPeruntukan={setPeruntukan}
        />
        <MapPreview />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
