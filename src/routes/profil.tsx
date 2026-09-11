import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, Heart, LogIn, Settings, User } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Pengguna – Invest Kediri" },
      {
        name: "description",
        content: "Kelola akun, pengajuan sewa lahan, dan lahan favorit Anda di Invest Kediri.",
      },
      { property: "og:title", content: "Profil Pengguna – Invest Kediri" },
      {
        property: "og:description",
        content: "Akun, pengajuan sewa, dan favorit dalam satu tempat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Profil,
});

const menu = [
  { label: "Pengajuan Sewa Saya", icon: ClipboardList },
  { label: "Lahan Favorit", icon: Heart },
  { label: "Pengaturan Akun", icon: Settings },
];

function Profil() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-5">
        <h1 className="text-2xl font-extrabold text-foreground">Profil</h1>

        <section
          className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <User className="h-7 w-7" />
          </span>
          <div>
            <p className="font-bold text-foreground">Tamu</p>
            <p className="text-sm text-muted-foreground">
              Masuk untuk mengajukan sewa lahan
            </p>
          </div>
          <button
            type="button"
            className="ml-auto flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            <LogIn className="h-4 w-4" /> Masuk
          </button>
        </section>

        <ul className="overflow-hidden rounded-xl border border-border bg-card">
          {menu.map(({ label, icon: Icon }) => (
            <li key={label} className="border-b border-border last:border-b-0">
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Icon className="h-5 w-5 text-primary" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
