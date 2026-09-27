const fs = require('fs');
const path = require('path');

// Skrip ini akan membaca file script.js dan mengekstrak deskripsi game
// lalu membuat ulang file LISTGAMES.md secara otomatis.

const scriptPath = path.join(__dirname, 'script.js');
const listGamesPath = path.join(__dirname, 'LISTGAMES.md');

if (!fs.existsSync(scriptPath)) {
    console.error('script.js tidak ditemukan!');
    process.exit(1);
}

const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Regex untuk mencari blok komentar seperti:
// /* @game ID: 1, Nama: Koding Arah, Kategori: 1, Deskripsi: ... */
const gameRegex = /\/\*\s*@game\s+ID:\s*(\d+),\s*Nama:\s*(.*?),\s*Kategori:\s*(\d+),\s*Deskripsi:\s*(.*?)\s*\*\//g;

let categories = {
    1: { title: "KATEGORI 1: Dasar Pemrograman (Mudah)", games: [] },
    2: { title: "KATEGORI 2: Logika & Kondisi (Lebih Menantang)", games: [] },
    3: { title: "KATEGORI 3: Logika Kompleks (Untuk Lanjutan)", games: [] }
};

let match;
while ((match = gameRegex.exec(scriptContent)) !== null) {
    let id = match[1].trim();
    let nama = match[2].trim();
    let kategori = match[3].trim();
    let deskripsi = match[4].trim();

    if (categories[kategori]) {
        categories[kategori].games.push(`*   **Game ${id} (${nama}):** ${deskripsi}`);
    }
}

// Generate isi Markdown
let mdContent = `# 🎮 Daftar Permainan (Kids Logic & Coding Adventure)\n\n*Dokumen ini di-generate secara otomatis oleh \`sync-docs.js\` berdasarkan komentar di dalam \`script.js\`.*\n\n`;

for (let key in categories) {
    if (categories[key].games.length > 0) {
        mdContent += `## ${categories[key].title}\n\n`;
        mdContent += categories[key].games.join('\n');
        mdContent += `\n\n`;
    }
}

fs.writeFileSync(listGamesPath, mdContent, 'utf8');
console.log('✅ LISTGAMES.md berhasil diperbarui berdasarkan script.js!');
