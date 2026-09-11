import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/listing")({
  head: () => ({
    meta: [
      { title: "Listing Properti Lahan Kediri – Invest Kediri" },
      {
        name: "description",
        content: "Daftar lengkap lahan dan properti sewa yang tersedia di Kota Kediri.",
      },
      { property: "og:title", content: "Listing Properti Lahan Kediri – Invest Kediri" },
      {
        property: "og:description",
        content: "Lihat seluruh lahan industri, bisnis, dan pariwisata di Kota Kediri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Listing,
});

function Listing() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl space-y-5 px-4 py-5">
        <h1 className="text-2xl font-extrabold text-foreground">Listing Properti</h1>
        <p className="text-sm text-foreground/80">
          {properties.length} lahan terdaftar di marketplace Kota Kediri.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
