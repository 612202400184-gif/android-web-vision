# Invest Kediri – Marketplace Tanah & Investasi

Aplikasi web marketplace tanah dan investasi Kota Kediri, dibangun dengan TanStack Start (React), TypeScript, dan Tailwind CSS. Tampilannya responsif: menu bawah di ponsel (seperti aplikasi Android) dan tampilan lebar di komputer.

## Menjalankan di VS Code (lokal)

### 1. Syarat

- **Node.js versi 20 atau lebih baru** — unduh dari <https://nodejs.org> (pilih versi LTS).
  Cek di terminal: `node -v`
- **Git** — <https://git-scm.com/downloads>
- **VS Code** — <https://code.visualstudio.com>

### 2. Buka proyek

```sh
git clone <url-repository-anda>
cd <nama-folder-proyek>
code .
```

### 3. Install dependensi

Buka terminal di VS Code (menu **Terminal → New Terminal**), lalu jalankan:

```sh
npm install
```

### 4. Jalankan aplikasi

```sh
npm run dev
```

Buka browser ke alamat yang muncul, biasanya **http://localhost:8080**.

### 5. Perintah lain

| Perintah          | Fungsi                                  |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Menjalankan aplikasi mode pengembangan  |
| `npm run build`   | Membuat versi produksi                  |
| `npm run preview` | Melihat hasil build produksi            |
| `npm run lint`    | Memeriksa kode                          |

### Tips VS Code

Ekstensi yang disarankan (opsional):

- **Tailwind CSS IntelliSense** — pelengkap otomatis class Tailwind
- **ES7+ React/Redux/React-Native snippets** — pintasan kode React
- **Prettier** — merapikan kode otomatis

## Struktur folder utama

```text
src/
├── routes/        # Halaman: beranda (/), cari-tanah, listing, profil
├── components/    # Bagian tampilan (AppShell, kartu properti, peta, dll.)
├── data/          # Data properti (properties.ts)
├── assets/        # Gambar
└── styles.css     # Warna & tema
```

## Memasang sebagai aplikasi Android

Setelah aplikasi dipublikasikan dan dibuka di Chrome Android, pilih menu **⋮ → Tambahkan ke layar utama / Install app**. Ikon dan manifest sudah disiapkan di folder `public/`.
