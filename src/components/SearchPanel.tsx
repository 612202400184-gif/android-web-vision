import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function SearchPanel({
  value,
  onChange,
  peruntukan,
  onPeruntukan,
}: {
  value: string;
  onChange: (v: string) => void;
  peruntukan: string;
  onPeruntukan: (v: string) => void;
}) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section
      className="rounded-xl border border-border bg-card p-4 sm:p-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h2 className="text-xl font-bold text-foreground">Pencarian Tanah &amp; Properti</h2>
      <label htmlFor="lokasi" className="mt-3 block text-sm text-foreground/80">
        Nama Lokasi
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="lokasi"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Nama Lokasi (cth: Mojoroto)"
          className="flex-1 rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
        <button
          type="button"
          className="rounded-md bg-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          Cari
        </button>
      </div>

      <button
        type="button"
        onClick={() => setShowFilter((v) => !v)}
        className="mx-auto mt-4 flex items-center gap-1 text-sm font-semibold text-primary"
      >
        Tampilkan Filter Tambahan
        <ChevronDown
          className={`h-4 w-4 transition-transform ${showFilter ? "rotate-180" : ""}`}
        />
      </button>

      {showFilter && (
        <div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
          <label className="text-sm text-foreground/80">
            Peruntukan
            <select
              value={peruntukan}
              onChange={(e) => onPeruntukan(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground focus:ring-2 focus:ring-ring"
            >
              <option value="">Semua</option>
              <option value="Industri">Industri Ringan</option>
              <option value="Pergudangan">Pergudangan</option>
              <option value="Ritel">Ritel</option>
              <option value="Pariwisata">Pariwisata</option>
              <option value="Agribisnis">Agribisnis</option>
            </select>
          </label>
          <label className="text-sm text-foreground/80">
            Status
            <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground focus:ring-2 focus:ring-ring">
              <option>Semua</option>
              <option>Tersedia</option>
              <option>Proses</option>
              <option>Tersewa</option>
            </select>
          </label>
        </div>
      )}
    </section>
  );
}
