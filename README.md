# 🕌 Mosque Landing Page

Sebuah template antarmuka web untuk masjid yang dirancang dengan menerapkan prinsip-prinsip **Human-Computer Interaction (HCI)** dan pendekatan **User-Centered Design**.

---

## 📋 Deskripsi Proyek

**Mosque Landing Page** adalah sebuah website modern dan responsif yang berfungsi sebagai platform informasi digital untuk masjid. Website ini memudahkan jemaah dan pengunjung untuk mendapatkan informasi mengenai jadwal kegiatan, program layanan, dan cara menghubungi pihak masjid.

Proyek ini dikembangkan sebagai tugas **Ujian Akhir Semester (UAS)** mata kuliah **Interaksi Manusia dan Komputer (IMK)** dengan fokus utama pada **kualitas interaksi, kemudahan penggunaan (usability), dan pengalaman pengguna (user experience)**.

---

## 🎯 Tujuan Proyek

1. Menerapkan prinsip-prinsip HCI dalam perancangan antarmuka web
2. Mengidentifikasi kebutuhan pengguna melalui pendekatan user-centered design
3. Merancang antarmuka yang usable, konsisten, dan accessible
4. Menciptakan pengalaman pengguna yang optimal untuk jemaah masjid
5. Mendokumentasikan dan mempublikasikan hasil karya secara profesional

---

## 👥 Target Pengguna

- **Jemaah Masjid**: Jamaah tetap dan jamaah yang berkunjung untuk mendapatkan informasi jadwal dan kegiatan
- **Pengunjung Umum**: Calon jamaah atau masyarakat yang ingin mengetahui informasi masjid
- **Admin Masjid**: Pihak manajemen masjid yang membutuhkan platform informasi

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Theme Management**: Next Themes
- **Package Manager**: pnpm

---

## 📄 Halaman Utama

Website ini terdiri dari **4 halaman utama** yang dirancang untuk memenuhi kebutuhan pengguna:

### 1. **Beranda (Home)**

- Informasi welcome masjid
- Statistik/informasi singkat masjid
- Highlight kegiatan terbaru
- Call-to-action untuk akses halaman lain

### 2. **Jadwal Kegiatan (Schedule)**

- Daftar lengkap jadwal shalat dan kegiatan
- Kalender kegiatan masjid
- Informasi acara-acara khusus
- Format yang mudah dibaca dan responsif

### 3. **Program & Layanan (Programs)**

- Daftar program dan layanan yang ditawarkan
- Benefit dan deskripsi setiap program
- Grid layout yang menarik dan informatif
- Informasi kontak untuk setiap program

### 4. **Kontak (Contact)**

- Informasi lokasi masjid
- Peta lokasi interaktif
- Form kontak untuk pengunjung
- Informasi kontak yang lengkap

---

## 🎨 Prinsip HCI yang Diterapkan

### 1. **User-Centered Design**

- Desain dibuat berdasarkan kebutuhan pengguna (jemaah dan pengunjung)
- User personas dikembangkan untuk memahami target audience
- Skenario penggunaan disusun untuk berbagai kasus penggunaan

### 2. **Usability**

- **Navigasi yang Intuitif**: Menu yang jelas dan mudah dipahami
- **Consistency**: Desain visual dan interaksi yang konsisten di semua halaman
- **Accessibility**: Konten yang dapat diakses oleh semua pengguna
- **Error Prevention**: Minimalisasi kesalahan pengguna dalam navigasi

### 3. **Visual Design**

- **Color Palette**: Warna yang tenang dan sesuai dengan identitas masjid
- **Typography**: Font yang readable dan professional
- **Layout**: Grid-based layout untuk konsistensi visual
- **White Space**: Penggunaan ruang kosong untuk clarity dan focus

### 4. **Responsiveness**

- Desain yang beradaptasi dengan berbagai ukuran layar (mobile, tablet, desktop)
- Mobile-first approach untuk memastikan usability di perangkat mobile
- Performance optimization untuk loading cepat

### 5. **Information Architecture**

- Struktur navigasi yang logis dan mudah diikuti
- Kategorisasi informasi yang jelas
- Hierarchy visual yang memandu pengguna

---

## 📊 Evaluasi Usability

### Metode Evaluasi yang Digunakan

- **Heuristic Evaluation**: Evaluasi berdasarkan 10 heuristics Nielsen
- **User Testing**: Testing dengan pengguna aktual (jemaah dan pengunjung)
- **Task-Based Evaluation**: Pengujian kemampuan pengguna menyelesaikan tugas tertentu

### Hasil Evaluasi

[Hasil evaluasi usability dan rekomendasi perbaikan dapat dilihat di laporan terpisah]

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat

- Node.js v18 atau lebih tinggi
- pnpm (npm, atau yarn juga bisa)

### Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/yourusername/mosque-landing-page.git
   cd mosque-landing-page
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Jalankan development server**

   ```bash
   pnpm dev
   ```

4. **Buka di browser**
   - Akses `http://localhost:3000` di browser

### Build untuk Production

```bash
pnpm build
pnpm start
```

---

## 📁 Struktur Direktori

```
mosque-landing-page/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── jadwal-kegiatan/     # Schedule page
│   ├── program-layanan/     # Programs page
│   └── kontak/              # Contact page
├── components/              # React components
│   ├── home/               # Home page components
│   ├── schedule/           # Schedule page components
│   ├── programs/           # Programs page components
│   ├── contact/            # Contact page components
│   └── ui/                 # Reusable UI components
├── public/                  # Static files
├── styles/                  # Global styles
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

---

## 🎭 User Personas

### 1. **Jamaah Tetap**

- Usia: 25-60 tahun
- Kebutuhan: Informasi jadwal shalat, kegiatan rutin, pengumuman
- Tujuan: Selalu update dengan kegiatan masjid

### 2. **Pengunjung Baru**

- Usia: 18-40 tahun
- Kebutuhan: Informasi lokasi, jadwal, kontak
- Tujuan: Mengetahui informasi dasar masjid sebelum berkunjung

### 3. **Admin/Pengelola Masjid**

- Usia: 30-65 tahun
- Kebutuhan: Platform yang mudah untuk berbagi informasi
- Tujuan: Komunikasi efektif dengan jemaah

---

## 🔒 Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini sesuai dengan ketentuan lisensi.

Lihat file `LICENSE` untuk detail lebih lanjut.

---

## 👨‍💼 Tim Pengembang

[Daftar anggota kelompok dan pembagian tugas dapat ditambahkan di sini]

---

## 📞 Hubungi Kami

Untuk pertanyaan atau feedback mengenai proyek ini, silakan buat **Issue** atau **Pull Request** di repository GitHub.

---

## 📚 Referensi

- **Nielsen, J.** (1995). 10 Usability Heuristics for User Interface Design
- **Norman, D.** (2013). The Design of Everyday Things
- **Krug, S.** (2000). Don't Make Me Think!

---

**Terakhir diperbarui**: Desember 2025

---

_Dikembangkan sebagai bagian dari Ujian Akhir Semester (UAS) mata kuliah Interaksi Manusia dan Komputer (IMK)_
