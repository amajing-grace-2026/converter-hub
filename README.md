# Amajing Converter

Kumpulan converter yang jalan langsung di browser. File tidak di-upload ke server mana pun — semua diproses di perangkat sendiri.


## Alat

- **Audio & Video:** MP4 → MP3, Video → GIF, Kompres Video
- **Gambar:** JPG / PNG / WEBP, termasuk HEIC/HEIF (foto iPhone & Samsung) → JPG
- **Dokumen:** Word → PDF (buka .docx atau paste), PDF → Word, Gambar → PDF, PDF → Gambar, Gabung PDF, Pisah PDF, Kompres PDF
- **Lainnya:** Kalkulator

Paling cocok di Chrome atau Edge versi terbaru (Kompres Video butuh WebCodecs).

**Panduan pemakaian:** baca online di [panduan/](panduan/) atau unduh [PDF](panduan/Panduan-Amajing-Converter.pdf)

**Instal di HP:** buka link di Chrome/Samsung Internet (Android) lalu pilih "Instal aplikasi", atau di Safari (iPhone) Bagikan → "Tambah ke Layar Utama".

## Library (di folder `lib/`)

- [lamejs](https://github.com/zhuker/lamejs) — encoder MP3 (LGPL-3.0)
- [gifenc](https://github.com/mattdesl/gifenc) — encoder GIF (MIT)
- [pdf.js](https://github.com/mozilla/pdf.js) — render PDF (Apache-2.0)
- [pdf-lib](https://github.com/Hopding/pdf-lib) — gabung/pisah/kompres PDF (MIT)
- [JSZip](https://github.com/Stuk/jszip) — unduh ZIP (MIT)
- [mammoth.js](https://github.com/mwilliamson/mammoth.js) — baca file .docx (BSD-2-Clause)
- [libheif-js](https://github.com/catdad-experiments/libheif-js) — buka foto HEIC/HEIF (LGPL-3.0)
- [Mediabunny](https://github.com/Vanilagy/mediabunny) — kompres video (MPL-2.0)

---
![Amajing Labs](brand/logo.svg)

Dibuat oleh **Amajing Labs** · Masukan & laporan kesalahan: https://forms.gle/fZAtNMCwKqhQhgpKA
