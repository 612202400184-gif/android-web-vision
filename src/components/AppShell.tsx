import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Search, ClipboardList, User, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const navItems = [
  { to: "/", label: "Beranda", icon: Home },
  { to: "/cari-tanah", label: "Cari Tanah", icon: Search },
  { to: "/listing", label: "Listing Properti", icon: ClipboardList },
  { to: "/profil", label: "Profil", icon: User },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-md border border-primary-foreground/30 bg-primary-foreground/10 text-lg font-bold text-primary-foreground">
        IK
      </span>
      <span className="leading-tight">
        <span className="block text-base font-extrabold tracking-wide text-primary-foreground">
          INVEST KEDIRI
        </span>
        <span className="block text-xs text-primary-foreground/75">
          – Marketplace Tanah &amp; Investasi
        </span>
      </span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header
        className="sticky top-0 z-30 text-primary-foreground"
        style={{ background: "var(--gradient-header)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Logo />
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 ${
                  pathname === to
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "text-primary-foreground/80"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-1 md:ml-2">
            <Link
              to="/profil"
              aria-label="Akun"
              className="rounded-md p-2 transition-colors hover:bg-primary-foreground/10"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/cari-tanah"
              aria-label="Cari"
              className="rounded-md p-2 transition-colors hover:bg-primary-foreground/10"
            >
              <Search className="h-6 w-6" />
            </Link>
          </div>
        </div>
        {open && (
          <nav className="border-t border-primary-foreground/15 px-4 pb-3 md:hidden">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm font-medium text-primary-foreground/90"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card md:hidden">
        <ul className="mx-auto flex max-w-lg">
          {navItems.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <li key={to} className="flex-1">
                <Link
                  to={to}
                  className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className={active ? "h-6 w-6" : "h-6 w-6"} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
