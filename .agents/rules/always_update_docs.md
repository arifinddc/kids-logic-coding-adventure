---
name: "Always Update Documentation"
description: "Aturan wajib untuk selalu memperbarui file dokumentasi (.md) setelah menyelesaikan task atau fitur baru."
---

# Aturan Dokumentasi (Documentation Rules)

Setiap kali kamu (Antigravity) berhasil mengimplementasikan sebuah fitur baru, menyelesaikan perbaikan bug (bugfix), atau melakukan perombakan besar pada logika aplikasi, kamu **DIWAJIBKAN** untuk melakukan hal berikut secara otomatis sebelum mengakhiri giliran kerjamu:

1. **Update `todolist.md` (Jika ada):**
   - Pindahkan fitur yang sudah selesai dari bagian "Tertunda" atau "Aktif" ke bagian "✅ Selesai".
   - Jika ada fitur lanjutan yang terlintas saat pengembangan, tambahkan ke bagian "Aktif" atau "Tertunda".

2. **Update `LISTGAMES.md` atau Dokumen Terkait:**
   - Jika logika game, rute, atau cara kerja sistem berubah, pastikan penjelasan di dokumentasi markdown tetap relevan.
   - Singkronkan perubahan agar *source of truth* pada repositori ini tidak kadaluarsa.

3. **Gunakan Script `sync-docs.js` (Opsional jika tersedia):**
   - Jika fitur berkaitan dengan generate ulang dokumentasi, pastikan kamu menjalankannya jika diperlukan, atau langsung edit file markdown yang bersangkutan.

**Alasan Aturan Ini Ada:**
Proyek ini mengandalkan file `.md` sebagai pedoman utama. Jika dokumentasi tertinggal dari kode aslinya, pengguna akan kebingungan dan pemeliharaan proyek menjadi sangat sulit.
