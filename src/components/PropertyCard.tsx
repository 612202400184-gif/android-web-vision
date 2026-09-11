import { Maximize2, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

const statusStyle: Record<Property["status"], string> = {
  TERSEDIA: "bg-success text-success-foreground",
  PROSES: "bg-accent text-accent-foreground",
  TERSEWA: "bg-muted text-muted-foreground",
};

export function PropertyCard({ item }: { item: Property }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-40 w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/75 to-transparent px-3 py-2 text-xs font-medium text-primary-foreground">
          <span className="flex items-center gap-1">
            <Maximize2 className="h-3.5 w-3.5" />
            {item.badgeArea}
          </span>
          <span>{item.badgeHarga}</span>
          <span className="flex items-center gap-1 truncate">
            <MapPin className="h-3.5 w-3.5" />
            {item.badgeKec}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-lg font-bold leading-snug text-foreground">{item.title}</h3>
        <p className="text-sm text-foreground/80">Lokasi: {item.lokasi}</p>
        <p className="text-sm text-foreground/80">Luas: {item.luas}</p>
        <p className="text-sm text-foreground/80">Harga Sewa: {item.hargaSewa}</p>
        <p className="text-sm text-foreground/80">Peruntukan: {item.peruntukan}</p>

        <span
          className={`mt-2 w-fit rounded-md px-2 py-1 text-xs font-semibold ${statusStyle[item.status]}`}
        >
          {item.status}
        </span>

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            Lihat Detail
          </button>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Ajukan Sewa
          </button>
        </div>
      </div>
    </article>
  );
}
