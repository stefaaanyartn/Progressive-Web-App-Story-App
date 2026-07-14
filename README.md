# 📖 Story App

Aplikasi berbagi cerita (story) berbasis lokasi, dibangun sebagai **Progressive Web App (PWA)**. Pengguna dapat mengunggah foto beserta cerita singkat, menandai lokasi kejadian di peta, dan menjelajahi cerita dari pengguna lain lengkap dengan peta interaktif — bahkan saat sedang offline.

## ✨ Fitur

- 🔐 **Autentikasi** — Register & Login pengguna
- 📷 **Tambah Story** — Ambil foto langsung via kamera, tulis deskripsi, dan tandai lokasi di peta
- 🗺️ **Peta Interaktif** — Menampilkan lokasi setiap story menggunakan Leaflet.js & OpenStreetMap
- 📡 **Push Notification** — Notifikasi otomatis saat story baru berhasil ditambahkan
- 📶 **Mode Offline** — Aplikasi tetap dapat diakses tanpa koneksi internet (App Shell + data ter-cache via IndexedDB)
- 📲 **Installable (PWA)** — Dapat diinstal ke homescreen/desktop layaknya aplikasi native
- 🗑️ **Kelola Cache** — Pengguna dapat menghapus data cache lokal secara manual

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| Bahasa | JavaScript (Vanilla), HTML, CSS |
| Arsitektur | MVP (Model-View-Presenter) |
| Build Tool | Webpack 5 |
| Peta | Leaflet.js + OpenStreetMap |
| Offline Storage | IndexedDB (via `idb`) |
| PWA | Service Worker, Web App Manifest |
| Notifikasi | Web Push API |
| API | [Dicoding Story API](https://story-api.dicoding.dev/v1) |


## 🚀 Cara Menjalankan Secara Lokal

1. Clone repository ini
   ```bash
   git clone https://github.com/stefaaanyartn/Progressive-Web-App-Story-App.git
   cd Progressive-Web-App-Story-App
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Jalankan mode development
   ```bash
   npm run start
   ```

4. Buka browser ke `http://localhost:8080` (atau port yang tertera di terminal)

5. Build untuk production
   ```bash
   npm run build
   ```

## 📱 Instalasi sebagai PWA

Saat mengakses aplikasi via browser (Chrome/Edge), akan muncul ikon/pop-up **"Install App"** di address bar atau menu browser. Klik untuk menginstal aplikasi ke homescreen/desktop.

## 👤 Author

Dibuat oleh **Stefany Artana** sebagai bagian dari submission kelas Dicoding.

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran submission Dicoding dan bersifat open untuk referensi.
