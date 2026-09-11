import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { SearchPanel } from "@/components/SearchPanel";
import { MapPreview } from "@/components/MapPreview";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/cari-tanah")({
  head: () => ({
    meta: [
      { title: "Cari Tanah di Kediri – Invest Kediri" },
      {
        name: "description",
        content:
          "Cari lahan sewa di Kota Kediri berdasarkan lokasi, luas, harga, dan peruntukan.",
      },
      { property: "og:title", content: "Cari Tanah di Kediri – Invest Kediri" },
      {
        property: "og:description",
        content: "Filter lahan investasi Kota Kediri sesuai kebutuhan usaha Anda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CariTanah,
});

function CariTanah() {
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
      <div className="mx-auto max-w-6xl space-y-5 px-4 py-5">
        <h1 className="text-2xl font-extrabold text-foreground">Cari Tanah</h1>
        <SearchPanel
          value={query}
          onChange={setQuery}
          peruntukan={peruntukan}
          onPeruntukan={setPeruntukan}
        />
        <MapPreview />
        <p className="text-sm text-muted-foreground">{list.length} lahan ditemukan</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
