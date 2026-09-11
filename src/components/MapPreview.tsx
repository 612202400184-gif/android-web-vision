import { MapPin } from "lucide-react";
import mapImage from "@/assets/map-kediri.jpg";

const pins = [
  { label: "Rp65M/Yr", top: "22%", left: "44%" },
  { label: "Rp28M/Yr", top: "48%", left: "16%" },
  { label: "Rp20M/Yr", top: "44%", left: "60%" },
  { label: "Rp32M/Yr", top: "74%", left: "42%" },
];

export function MapPreview() {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
        <img
          src={mapImage}
          alt="Peta lokasi lahan di Kota Kediri"
          loading="lazy"
          width={1024}
          height={512}
          className="h-56 w-full object-cover sm:h-72"
        />
        {pins.map((pin) => (
          <div
            key={pin.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
            style={{ top: pin.top, left: pin.left }}
          >
            <span className="rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
              {pin.label}
            </span>
            <MapPin className="h-5 w-5 text-primary" />
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-sm text-foreground/80">
        Peta Lokasi Lahan
      </figcaption>
    </figure>
  );
}
