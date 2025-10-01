# Tugas hari pertama

## Soal No 2
**Soal**
Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.
**Jawab**
HTML adalah bahasa pemrograman sederhana untuk membuat struktur halaman website.
JSX(JavaScript XML) adalah ekstensi syntax JavaScript yang mirip dengan HTML, dan digunakan di React untuk mendefinisikan UI.
**Soal**
Sertakan contoh kode sederhana yang menunjukkan perbedaan tersebut.
**Jawab**
(HTML)
<div class="box">
<p>Hello Semua!</p>
</div>
(JSX)
<div className="box">
<p>{message}</p>
</div>

## Soal No 3
**Soal**
Buatlah ringkasan singkat tentang apa itu Virtual DOM dan bagaimana cara kerjanya di React.
**Jawab**
Salinan DOM di memori, kemudian React memperbaruinya, lalu membandingkan dengan versi sebelumnya, dan hanya mengubah bagian yang berbeda di dalam DOM yang asli.

## Soal No 4
**Soal**
Tuliskan penjelasan mengenai perbedaan antara Single Page Application (SPA) dan Multi Page Application (MPA).
**Jawab**
~SPA adalah aplikasi web yang berjalan dalam satu halaman HTML utama, di mana konten diperbarui secara mudah dan cepat menggunakan JavaScript, tanpa perlu memuat ulang seluruh halaman.
~MPA adalah aplikasi via web traddisional, dimana setiap kita berpindah halaman, maka browser akan memuat ulang reload halaman baru di server
**Soal**
Berikan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.
**Jawab**
**Kelebihan SPA**
-1 Cepat dan responsif
-2 Pengalaman pengguna lebih baik.
**Kekurangan SPA**
-1 SEO kurang optimal.
-2 Ukuran file awal(Root) lumayan besar.
**Kelebihan MPA**
-1 SEO lebih baik.
-2 Mudah diimplementasikan.
**Kekurangan MPA**
-1 Lebih lambat.
-2 Cukup kompleks untuk UI interaktif.