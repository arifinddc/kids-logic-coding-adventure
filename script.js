// ==========================================
// KATALOG SKIN
// ==========================================
const SKIN_CATALOG = {
    player: [
        { id: 'car', emoji: '🚗', name: 'Mobil', price: 0 },
        { id: 'taxi', emoji: '🚕', name: 'Taksi', price: 150 },
        { id: 'scooter', emoji: '🛴', name: 'Skuter', price: 100 },
        { id: 'bicycle', emoji: '🚲', name: 'Sepeda', price: 100 },
        { id: 'tractor', emoji: '🚜', name: 'Traktor', price: 200 },
        { id: 'bus', emoji: '🚌', name: 'Bus', price: 200 },
        { id: 'police', emoji: '🚓', name: 'Polisi', price: 250 },
        { id: 'ambulance', emoji: '🚑', name: 'Ambulans', price: 300 },
        { id: 'fire_truck', emoji: '🚒', name: 'Pemadam', price: 350 },
        { id: 'racing', emoji: '🏎️', name: 'Balap', price: 400 },
        { id: 'train', emoji: '🚂', name: 'Kereta', price: 350 },
        { id: 'helicopter', emoji: '🚁', name: 'Helikopter', price: 450 },
        { id: 'ship', emoji: '🚢', name: 'Kapal', price: 450 },
        { id: 'rocket', emoji: '🚀', name: 'Roket', price: 600 },
        { id: 'ufo', emoji: '🛸', name: 'UFO', price: 800 }
    ],
    target: [
        { id: 'house', emoji: '🏠', name: 'Rumah', price: 0 },
        { id: 'tent', emoji: '⛺', name: 'Tenda', price: 100 },
        { id: 'school', emoji: '🏫', name: 'Sekolah', price: 180 },
        { id: 'factory', emoji: '🏭', name: 'Pabrik', price: 200 },
        { id: 'bank', emoji: '🏦', name: 'Bank', price: 200 },
        { id: 'castle', emoji: '🏰', name: 'Kastil', price: 250 },
        { id: 'hospital', emoji: '🏥', name: 'Rumah Sakit', price: 300 },
        { id: 'stadium', emoji: '🏟️', name: 'Stadion', price: 350 },
        { id: 'tower', emoji: '🗼', name: 'Menara', price: 350 },
        { id: 'shrine', emoji: '⛩️', name: 'Kuil', price: 450 },
        { id: 'island', emoji: '🏝️', name: 'Pulau', price: 500 }
    ],
    robot: [
        { id: 'robot', emoji: '🤖', name: 'Robot', price: 0 },
        { id: 'clown', emoji: '🤡', name: 'Badut', price: 150 },
        { id: 'pumpkin', emoji: '🎃', name: 'Labu', price: 180 },
        { id: 'zombie', emoji: '🧟', name: 'Zombi', price: 250 },
        { id: 'ghost', emoji: '👻', name: 'Hantu', price: 250 },
        { id: 'vampire', emoji: '🧛', name: 'Vampir', price: 300 },
        { id: 'alien', emoji: '👾', name: 'Alien', price: 300 },
        { id: 'ninja', emoji: '🥷', name: 'Ninja', price: 350 },
        { id: 'wizard', emoji: '🧙‍♂️', name: 'Penyihir', price: 400 },
        { id: 'astronaut', emoji: '🧑‍🚀', name: 'Astronot', price: 500 },
        { id: 'superhero', emoji: '🦸', name: 'Pahlawan', price: 600 },
        { id: 'mecha', emoji: '🦾', name: 'Cyborg', price: 600 }
    ],
    battery: [
        { id: 'battery', emoji: '🔋', name: 'Baterai', price: 0 },
        { id: 'burger', emoji: '🍔', name: 'Burger', price: 120 },
        { id: 'pizza', emoji: '🍕', name: 'Pizza', price: 150 },
        { id: 'cake', emoji: '🍰', name: 'Kue', price: 180 },
        { id: 'potion', emoji: '🧪', name: 'Ramuan', price: 250 },
        { id: 'gold', emoji: '💰', name: 'Uang Emas', price: 300 },
        { id: 'gift', emoji: '🎁', name: 'Kado', price: 350 },
        { id: 'diamond', emoji: '💎', name: 'Permata', price: 400 },
        { id: 'trophy', emoji: '🏆', name: 'Piala', price: 450 },
        { id: 'wand', emoji: '🪄', name: 'Tongkat Ajaib', price: 500 }
    ],
    animals: [
        { id: 'frog', emoji: '🐸', name: 'Katak', price: 90 },
        { id: 'cat', emoji: '🐱', name: 'Kucing', price: 100 },
        { id: 'dog', emoji: '🐶', name: 'Anjing', price: 100 },
        { id: 'rabbit', emoji: '🐰', name: 'Kelinci', price: 100 },
        { id: 'mouse', emoji: '🐭', name: 'Tikus', price: 100 },
        { id: 'monkey', emoji: '🐵', name: 'Monyet', price: 120 },
        { id: 'pig', emoji: '🐷', name: 'Babi', price: 120 },
        { id: 'penguin', emoji: '🐧', name: 'Penguin', price: 150 },
        { id: 'panda', emoji: '🐼', name: 'Panda', price: 180 },
        { id: 'koala', emoji: '🐨', name: 'Koala', price: 180 },
        { id: 'cow', emoji: '🐮', name: 'Sapi', price: 200 },
        { id: 'lion', emoji: '🦁', name: 'Singa', price: 250 },
        { id: 'tiger', emoji: '🐯', name: 'Harimau', price: 250 },
        { id: 'bear', emoji: '🐻', name: 'Beruang', price: 250 },
        { id: 'fox', emoji: '🦊', name: 'Rubah', price: 300 },
        { id: 'trex', emoji: '🦖', name: 'T-Rex', price: 450 },
        { id: 'dragon', emoji: '🐉', name: 'Naga', price: 600 },
        { id: 'unicorn', emoji: '🦄', name: 'Unicorn', price: 700 }
    ]
};
// ==========================================
// SISTEM SUARA (Web Audio API)
// ==========================================
const SFX = {
    _ctx: null,
    _getCtx() {
        if (!this._ctx) this._ctx = new (window.AudioContext || window.webkitAudioContext)();
        return this._ctx;
    },
    _play(freq, type, duration, vol = 0.3) {
        try {
            const ctx = this._getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = type;
            osc.frequency.value = freq;
            gain.gain.value = vol;
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration);
        } catch(e) {}
    },
    vibrate(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    },
    click() {
        this.vibrate(10);
        this._play(800, 'sine', 0.08, 0.2);
    },
    correct() {
        this.vibrate([30, 50, 30]);
        const ctx = this._getCtx();
        [523, 659, 784].forEach((f, i) => {
            setTimeout(() => this._play(f, 'sine', 0.2, 0.25), i * 100);
        });
    },
    wrong() {
        this.vibrate([50, 100, 50]);
        this._play(200, 'square', 0.3, 0.15);
        setTimeout(() => this._play(150, 'square', 0.4, 0.15), 150);
    },
    buy() {
        this.vibrate([30, 50, 50, 50, 50]);
        [1047, 1319, 1568].forEach((f, i) => {
            setTimeout(() => this._play(f, 'sine', 0.15, 0.2), i * 80);
        });
    },
    reward() {
        this.vibrate([40, 50, 40, 50, 60]);
        [523, 659, 784, 1047].forEach((f, i) => {
            setTimeout(() => this._play(f, 'triangle', 0.25, 0.2), i * 120);
        });
    },
    step() {
        this.vibrate(10);
        this._play(440, 'sine', 0.06, 0.1);
    }
};

// ==========================================
// FUNGSI PENYIMPANAN (localStorage)
// ==========================================
function loadData() {
    const raw = localStorage.getItem('kidsCodingData');
    if (raw) return JSON.parse(raw);
    return {
        totalScore: 0,
        ownedSkins: {
            player: ['car'],
            target: ['house'],
            robot: ['robot'],
            battery: ['battery'],
            animals: []
        },
        activeSkin: {
            player: 'car',
            target: 'house',
            robot: 'robot',
            battery: 'battery'
        },
        lastDailyClaimDate: null,
        dailyStreak: 0
    };
}

function saveData(data) {
    localStorage.setItem('kidsCodingData', JSON.stringify(data));
}

// ==========================================
// POOL VIDEO DAILY MISSION
// ==========================================
const DAILY_VIDEOS = [
    'https://www.youtube.com/embed/06fnydligHg',
    'https://www.youtube.com/embed/Me94LXczxbg',
    'https://www.youtube.com/embed/BvLZJ3lChls',
    'https://www.youtube.com/embed/PCkir5b4PB4'
];

const STREAK_MILESTONES = [7, 15, 30, 45, 60];
const STREAK_BONUS = 20;

function getDailyVideoIndex() {
    // Menggunakan tanggal sebagai seed agar video konsisten per hari tapi berubah antar hari
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
    return seed % DAILY_VIDEOS.length;
}

function getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function isStreakMilestone(streak) {
    if (STREAK_MILESTONES.includes(streak)) return true;
    // Kelipatan 15 setelah 60
    if (streak > 60 && streak % 15 === 0) return true;
    return false;
}

// ==========================================
// HELPER: Ambil emoji aktif
// ==========================================
function getActiveSkinEmoji(category) {
    const data = loadData();
    const activeId = data.activeSkin[category];
    const item = SKIN_CATALOG[category].find(s => s.id === activeId);
    return item ? item.emoji : SKIN_CATALOG[category][0].emoji;
}

const app = {
    currentGame: null,
    score: 0,
    currentLevel: 1,
    
    // BGM System
    bgmPlaying: false,
    bgmTimeout: null,
    
    toggleBGM() {
        this.bgmPlaying = !this.bgmPlaying;
        document.getElementById('bgm-toggle').innerText = this.bgmPlaying ? '🔊' : '🔇';
        if (this.bgmPlaying) {
            this.playBGM();
        } else {
            clearTimeout(this.bgmTimeout);
        }
    },
    
    playBGM() {
        if (!this.bgmPlaying) return;
        const ctx = SFX._getCtx();
        // Happy 8-bit melody loop
        const notes = [
            523.25, 659.25, 783.99, 1046.50,
            783.99, 659.25, 523.25, 392.00,
            440.00, 523.25, 659.25, 880.00,
            659.25, 523.25, 440.00, 349.23
        ];
        
        let noteIdx = this._bgmIdx || 0;
        const freq = notes[noteIdx];
        this._bgmIdx = (noteIdx + 1) % notes.length;
        
        try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'square'; // 8-bit sound
            osc.frequency.value = freq;
            gain.gain.value = 0.015; // Very soft volume
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.25);
        } catch(e) {}
        
        this.bgmTimeout = setTimeout(() => this.playBGM(), 300);
    },

    // DOM Elements
    el: {
        mainMenu: document.getElementById('main-menu'),
        gameScreen: document.getElementById('game-screen'),
        shopScreen: document.getElementById('shop-screen'),
        lockerScreen: document.getElementById('locker-screen'),
        dailyScreen: document.getElementById('daily-screen'),
        multiplayerScreen: document.getElementById('multiplayer-screen'),
        mpTopContent: document.getElementById('mp-top-content'),
        mpBottomContent: document.getElementById('mp-bottom-content'),
        mpFeedback: document.getElementById('mp-feedback'),
        mpWinnerText: document.getElementById('mp-winner-text'),
        gameTitle: document.getElementById('game-title'),
        gameContent: document.getElementById('game-content'),
        shopContent: document.getElementById('shop-content'),
        lockerContent: document.getElementById('locker-content'),
        dailyContent: document.getElementById('daily-content'),
        score: document.getElementById('score'),
        menuScore: document.getElementById('menu-score'),
        shopScore: document.getElementById('shop-score'),
        lockerScore: document.getElementById('locker-score'),
        dailyScore: document.getElementById('daily-score'),
        feedbackOverlay: document.getElementById('feedback-overlay'),
        feedbackMessage: document.getElementById('feedback-message'),
        notifOverlay: document.getElementById('notif-overlay'),
        notifMessage: document.getElementById('notif-message'),
    },

    init() {
        const data = loadData();
        this.score = data.totalScore;
        this.updateScoreDisplays();
        
        // SFX Click Global
        document.addEventListener('click', (e) => {
            if (e.target.closest('button') || e.target.closest('.menu-btn') || e.target.closest('.skin-card') || e.target.closest('.control-btn') || e.target.closest('.gacha-egg')) {
                if (e.target.closest('#daily-claim-btn')) return; 
                SFX.click();
            }
        });

        // PWA Install Prompt Logic
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            // Hanya tampilkan jika belum pernah di-dismiss hari ini (bisa pakai localStorage, tapi sementara selalu tampilkan)
            setTimeout(() => {
                document.getElementById('install-popup').classList.add('show');
            }, 2000);
        });

        document.getElementById('btn-install').addEventListener('click', async () => {
            const popup = document.getElementById('install-popup');
            popup.classList.remove('show');
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                deferredPrompt = null;
            }
        });

        document.getElementById('btn-install-close').addEventListener('click', () => {
            document.getElementById('install-popup').classList.remove('show');
        });
        
        // Kunci Rotasi Layar jika didukung
        try {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('portrait').catch(()=>{});
            }
        } catch(err) {}
    },

    updateScoreDisplays() {
        this.el.score.innerText = this.score;
        this.el.menuScore.innerText = this.score;
        this.el.shopScore.innerText = this.score;
        this.el.lockerScore.innerText = this.score;
        this.el.dailyScore.innerText = this.score;
    },

    hideAllScreens() {
        this.el.mainMenu.classList.remove('active');
        this.el.gameScreen.classList.remove('active');
        this.el.shopScreen.classList.remove('active');
        this.el.lockerScreen.classList.remove('active');
        this.el.dailyScreen.classList.remove('active');
        if (this.el.multiplayerScreen) this.el.multiplayerScreen.classList.remove('active');
    },

    startGame(gameId) {
        this.currentGame = gameId;
        this.currentLevel = 1;
        this.hideAllScreens();
        this.el.gameScreen.classList.add('active');
        this.loadGame();
    },

    showMainMenu() {
        this.hideAllScreens();
        this.el.mainMenu.classList.add('active');
        this.currentGame = null;
        this.updateScoreDisplays();
    },

    showShop() {
        this.hideAllScreens();
        this.el.shopScreen.classList.add('active');
        this.renderShop();
    },

    showLocker() {
        this.hideAllScreens();
        this.el.lockerScreen.classList.add('active');
        this.renderLocker();
    },

    showDaily() {
        this.hideAllScreens();
        this.el.dailyScreen.classList.add('active');
        this.renderDaily();
    },

    closeNotif() {
        this.el.notifOverlay.classList.add('hidden');
    },

    showNotif(msg) {
        this.el.notifMessage.innerText = msg;
        this.el.notifOverlay.classList.remove('hidden');
    },

    startMultiplayer(gameId) {
        this.currentMpGame = gameId;
        this.hideAllScreens();
        this.el.multiplayerScreen.classList.add('active');
        this.loadMultiplayer();
    },

    loadMultiplayer() {
        this.el.mpFeedback.classList.add('hidden');
        this.el.mpTopContent.innerHTML = '';
        this.el.mpBottomContent.innerHTML = '';
        
        if (this.currentMpGame === 1) {
            this.initMpRace();
        } else if (this.currentMpGame === 2) {
            this.initMpTugOfWar();
        } else if (this.currentMpGame === 3) {
            this.initMpBugSmasher();
        }
    },

    mpWin(player) {
        SFX.reward();
        this.el.mpWinnerText.innerText = `🎉 PEMAIN ${player} MENANG! 🎉`;
        this.el.mpWinnerText.style.color = player === 1 ? '#81ecec' : '#ffeaa7';
        this.el.mpFeedback.classList.remove('hidden');
        confetti({ particleCount: 300, spread: 150, origin: { y: 0.5 } });
    },

    loadGame() {
        this.el.gameContent.innerHTML = ''; // Clear previous
        
        if (this.currentGame === 1) {
            this.el.gameTitle.innerText = "🚗 Koding Arah Mobil";
            this.initGame1();
        } else if (this.currentGame === 2) {
            this.el.gameTitle.innerText = "🎨 Kode Warna Segitiga";
            this.initGame2();
        } else if (this.currentGame === 3) {
            this.el.gameTitle.innerText = "🦁 Kode Matematika Hewan";
            this.initGame3();
        } else if (this.currentGame === 4) {
            this.el.gameTitle.innerText = "🧠 Koding Matriks";
            this.initGame4();
        } else if (this.currentGame === 5) {
            this.el.gameTitle.innerText = "🖌️ Koding Pola Warna";
            this.initGame5();
        } else if (this.currentGame === 6) {
            this.el.gameTitle.innerText = "🔁 Koding Pengulangan";
            this.initGame6();
        } else if (this.currentGame === 7) {
            this.el.gameTitle.innerText = "🚦 Koding Kondisi";
            this.initGame7();
        } else if (this.currentGame === 8) {
            this.el.gameTitle.innerText = "🐛 Tangkap Kutu (Debug)";
            this.initGame8();
        } else if (this.currentGame === 9) {
            this.el.gameTitle.innerText = "⚙️ Koding Fungsi";
            this.initGame9();
        } else if (this.currentGame === 10) {
            this.el.gameTitle.innerText = "👾 Koding Pixel (Binary)";
            this.initGame10();
        } else if (this.currentGame === 11) {
            this.el.gameTitle.innerText = "🔐 Brankas (AND/OR)";
            this.initGame11();
        } else if (this.currentGame === 12) {
            this.el.gameTitle.innerText = "📦 Mesin Sortir";
            this.initGame12();
        }
    },

    showFeedback(isCorrect) {
        if (isCorrect) {
            SFX.correct();
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            
            // Balancing Ekonomi
            let reward = 10;
            if (this.currentGame >= 1 && this.currentGame <= 4) reward = 20;
            if (this.currentGame >= 5 && this.currentGame <= 8) reward = 35;
            if (this.currentGame >= 9 && this.currentGame <= 12) reward = 50;

            this.el.feedbackMessage.innerHTML = `Yey, Jawabanmu Benar! 🎉<br><span style="font-size:1.5rem; color:#f1c40f;">+${reward} Koin</span>`;
            this.el.feedbackMessage.style.color = "var(--primary)";
            this.score += reward;
            const data = loadData();
            data.totalScore = this.score;
            saveData(data);
            this.updateScoreDisplays();
            this.el.feedbackOverlay.classList.remove('hidden');
        } else {
            SFX.wrong();
            this.el.gameContent.classList.add('shake');
            setTimeout(() => this.el.gameContent.classList.remove('shake'), 500);
            
            const prevMsg = this.el.gameTitle.innerText;
            this.el.gameTitle.innerText = "Ups! Coba lagi ya 🤔";
            setTimeout(() => this.el.gameTitle.innerText = prevMsg, 2000);
        }
    },

    nextLevel() {
        this.el.feedbackOverlay.classList.add('hidden');
        this.currentLevel++;
        this.loadGame();
    },

    // ==========================================
    // GAME 1: KODING ARAH (Algorithmic Thinking)
    // ==========================================
    initGame1() {
        const size = 4;
        let startPos = { 
            x: Math.floor(Math.random() * 2), 
            y: Math.floor(Math.random() * 2) 
        };
        let playerPos = { ...startPos };
        let targetPos = { 
            x: Math.floor(Math.random() * 2) + 2, 
            y: Math.floor(Math.random() * 2) + 2 
        };
        let sequence = [];
        let isRunning = false;

        const playerEmoji = getActiveSkinEmoji('player');
        const targetEmoji = getActiveSkinEmoji('target');

        const drawGrid = () => {
            let html = `<div class="grid-board">`;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    let icon = '';
                    if (x === playerPos.x && y === playerPos.y) icon = playerEmoji;
                    else if (x === targetPos.x && y === targetPos.y) icon = targetEmoji;
                    html += `<div class="grid-cell">${icon}</div>`;
                }
            }
            html += `</div>`;
            return html;
        };

        const renderSequence = () => {
            const seqHtml = sequence.map(cmd => {
                let icon = '';
                if(cmd === 'U') icon = '⬆️';
                if(cmd === 'D') icon = '⬇️';
                if(cmd === 'L') icon = '⬅️';
                if(cmd === 'R') icon = '➡️';
                return `<span class="seq-item">${icon}</span>`;
            }).join('');
            document.getElementById('program-sequence').innerHTML = seqHtml;
        };

        this.el.gameContent.innerHTML = `
            <div id="grid-container">${drawGrid()}</div>
            <div class="subtitle" style="margin-bottom:10px;">Susun urutan perintah (panah) agar Mobil sampai ke Rumah!</div>
            <div id="program-sequence" class="program-sequence"></div>
            <div class="controls">
                <button class="control-btn" onclick="app.addCommand1('U')">⬆️</button>
                <button class="control-btn" onclick="app.addCommand1('D')">⬇️</button>
                <button class="control-btn" onclick="app.addCommand1('L')">⬅️</button>
                <button class="control-btn" onclick="app.addCommand1('R')">➡️</button>
            </div>
            <div class="action-btns">
                <button class="run-btn" onclick="app.runSequence1()">▶️ JALANKAN</button>
                <button class="clear-btn" onclick="app.clearSequence1()">🗑️ HAPUS</button>
            </div>
        `;

        this.addCommand1 = (cmd) => {
            if (isRunning || sequence.length >= 10) return;
            sequence.push(cmd);
            renderSequence();
        };

        this.clearSequence1 = () => {
            if (isRunning) return;
            sequence = [];
            playerPos = { ...startPos }; // reset position
            document.getElementById('grid-container').innerHTML = drawGrid();
            renderSequence();
        };

        this.runSequence1 = () => {
            if (isRunning || sequence.length === 0) return;
            isRunning = true;
            playerPos = { ...startPos };
            let step = 0;

            const executeStep = () => {
                if (step >= sequence.length) {
                    isRunning = false;
                    if (playerPos.x === targetPos.x && playerPos.y === targetPos.y) {
                        setTimeout(() => this.showFeedback(true), 300);
                    } else {
                        this.showFeedback(false);
                    }
                    return;
                }

                let cmd = sequence[step];
                let nextX = playerPos.x;
                let nextY = playerPos.y;

                if (cmd === 'U') nextY -= 1;
                else if (cmd === 'D') nextY += 1;
                else if (cmd === 'L') nextX -= 1;
                else if (cmd === 'R') nextX += 1;

                // Cek tabrakan dengan batas grid (tembok)
                if (nextX < 0 || nextX >= size || nextY < 0 || nextY >= size) {
                    isRunning = false;
                    this.showFeedback(false); // Nabrak tembok = Gagal!
                    return;
                }

                playerPos.x = nextX;
                playerPos.y = nextY;

                document.getElementById('grid-container').innerHTML = drawGrid();
                step++;
                setTimeout(executeStep, 500); // Animasi jeda 0.5 detik tiap langkah
            };

            executeStep();
        };
    },

    // ==========================================
    // GAME 2: KODE BENDA (Pattern Mapping Dynamic)
    // ==========================================
    initGame2() {
        const itemPool = ['🍎','🍌','🍇','🍉','🍍','🥭','🥥','🥝','🍒','🍓','⚽','🏀','🏈','⚾','🎾','🚗','🚕','🚙','🚌','🚒'];
        let shuffItems = [...itemPool].sort(() => 0.5 - Math.random()).slice(0, 5); // Pick 5 items
        
        // Randomly assign values 1 to 9
        let availableVals = [1,2,3,4,5,6,7,8,9].sort(() => 0.5 - Math.random());
        
        const dictionary = shuffItems.map((icon, idx) => {
            return { icon: icon, val: availableVals[idx] };
        });
        
        // Generate a sequence of 4 to 6 items
        const seqLength = Math.floor(Math.random() * 3) + 4; // 4, 5, or 6
        let questionSeq = [];
        let answerSeq = [];
        
        for(let i=0; i<seqLength; i++) {
            const randomItem = dictionary[Math.floor(Math.random() * dictionary.length)];
            questionSeq.push(randomItem.icon);
            answerSeq.push(randomItem.val);
        }

        this.game2Answer = answerSeq;
        this.game2CurrentStep = 0;

        const renderDictionary = () => {
            return dictionary.map(c => `<div class="dict-item"><span>${c.icon}</span><span>= ${c.val}</span></div>`).join('');
        };

        this.renderGame2Question = () => {
            return questionSeq.map((icon, index) => {
                let displayVal = this.game2CurrentStep > index ? this.game2Answer[index] : '?';
                let circleColor = this.game2CurrentStep > index ? '#4cd137' : 'white';
                return `<div style="display:inline-block; text-align:center; margin: 0 5px;">
                            <div style="font-size:3.5rem;">${icon}</div>
                            <div style="font-size:1.8rem; border:3px dashed #ccc; border-radius:50%; width:50px; height:50px; line-height:44px; margin:auto; background:${circleColor}">${displayVal}</div>
                        </div>`;
            }).join('');
        };

        this.el.gameContent.innerHTML = `
            <div class="dictionary" style="justify-content: center; margin-bottom: 20px; flex-wrap:wrap; gap:10px;">
                ${renderDictionary()}
            </div>
            <div class="subtitle" style="margin-bottom:20px;">Tekan angka sesuai dengan kode bendanya!</div>
            <div id="game2-q" style="margin-bottom: 40px; display:flex; justify-content:center; flex-wrap:wrap;">
                ${this.renderGame2Question()}
            </div>
            <div class="options-container" style="justify-content: center;">
                ${dictionary.map(c => `<button class="option-btn" style="border: 4px solid var(--secondary); padding: 15px 25px; font-weight: bold; background: white; min-width:60px;" onclick="app.checkAnswer2(${c.val})">${c.val}</button>`).join('')}
            </div>
        `;
    },

    checkAnswer2(val) {
        if (val === this.game2Answer[this.game2CurrentStep]) {
            this.game2CurrentStep++;
            SFX.step();
            document.getElementById('game2-q').innerHTML = this.renderGame2Question();
            if (this.game2CurrentStep >= this.game2Answer.length) {
                setTimeout(() => this.showFeedback(true), 300);
            }
        } else {
            this.showFeedback(false);
            // Reset sequence if wrong
            this.game2CurrentStep = 0;
            document.getElementById('game2-q').innerHTML = this.renderGame2Question();
        }
    },

    // ==========================================
    // GAME 3: KODING SIMBOL (Variables / Logic)
    // ==========================================
    initGame3() {
        const data = loadData();
        let allSkins = [];
        // Masukkan skin hewan & robot yang dimiliki
        data.ownedSkins.animals.forEach(id => {
            let item = SKIN_CATALOG.animals.find(s => s.id === id);
            if(item) allSkins.push({ icon: item.emoji });
        });
        data.ownedSkins.robot.forEach(id => {
            let item = SKIN_CATALOG.robot.find(s => s.id === id);
            if(item) allSkins.push({ icon: item.emoji });
        });
        // Jika kurang dari 6, tambahkan secara acak dari katalog
        let fallback = [...SKIN_CATALOG.animals, ...SKIN_CATALOG.robot].sort(() => 0.5 - Math.random());
        for(let s of fallback) {
            if (allSkins.length >= 6) break;
            if (!allSkins.find(x => x.icon === s.emoji)) {
                allSkins.push({ icon: s.emoji });
            }
        }
        // Berikan nilai acak 1 sampai 6 ke 6 simbol unik
        let vals = [1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random());
        allSkins.slice(0,6).forEach((s, i) => s.val = vals[i]);
        const symbols = allSkins.slice(0,6).sort(() => 0.5 - Math.random());

        // Tampilkan SEMUA simbol di kamus (dictionary)
        const dictHtml = symbols.map(s => `<div class="dict-item"><span>${s.icon}</span><span>= ${s.val}</span></div>`).join('');

        // Pilih 2 hewan secara acak untuk soal
        let shuffled = [...symbols].sort(() => 0.5 - Math.random());
        let s1 = shuffled[0];
        let s2 = shuffled[1];

        const answer = s1.val + s2.val;

        // Generate wrong options
        let options = [answer, answer + 1, answer - 1, answer + 2].filter(v => v > 0);
        options = [...new Set(options)].slice(0, 3);
        if(!options.includes(answer)) options[0] = answer;
        options.sort(() => 0.5 - Math.random());

        this.el.gameContent.innerHTML = `
            <div class="dictionary" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
                ${dictHtml}
            </div>
            <div class="subtitle" style="margin-top: 20px;">Berapa hasil penjumlahannya?</div>
            <div class="equation">
                ${s1.icon} + ${s2.icon} = ❓
            </div>
            <div class="options-container" style="justify-content: center;">
                ${options.map(opt => `<button class="option-btn" style="border: 4px solid var(--secondary); padding: 15px 40px; font-weight: bold; background: white;" onclick="app.checkAnswer3(${opt}, ${answer})">${opt}</button>`).join('')}
            </div>
        `;
    },

    checkAnswer3(selected, correct) {
        this.showFeedback(selected === correct);
    },

    // ==========================================
    // GAME 4: KODING MATRIKS (Shape & Color Logic)
    // ==========================================
    initGame4() {
        const shapes = [
            { icon: '▲' }, { icon: '◼' }, { icon: '●' },
            { icon: '★' }, { icon: '♥' }, { icon: '◆' }
        ];
        
        const colors = [
            { name: 'Merah', code: '#e74c3c' },
            { name: 'Biru', code: '#3498db' },
            { name: 'Kuning', code: '#f1c40f' },
            { name: 'Hijau', code: '#2ecc71' },
            { name: 'Ungu', code: '#9b59b6' },
            { name: 'Oranye', code: '#e67e22' }
        ];
        
        let shuffShapes = [...shapes].sort(() => 0.5 - Math.random()).slice(0, 3);
        let shuffColors = [...colors].sort(() => 0.5 - Math.random()).slice(0, 3);
        
        // Assign random values
        let availableVals = [1,2,3,4,5,6,7,8,9].sort(() => 0.5 - Math.random());
        shuffShapes.forEach(s => s.val = availableVals.pop());
        shuffColors.forEach(c => c.val = availableVals.pop());
        
        // Dictionary HTML
        let dictHtml = `
            <div style="display:flex; gap:20px; flex-wrap:wrap; justify-content:center; margin-bottom:15px; font-size:1.2rem;">
                <div style="background:#f8f9fa; padding:15px; border-radius:10px; border:2px solid #ddd; min-width:150px;">
                    <div style="font-weight:bold; margin-bottom:10px; border-bottom:2px dashed #ccc; padding-bottom:5px;">Bentuk:</div>
                    ${shuffShapes.map(s => `<div style="margin-bottom:5px;"><span style="font-size:1.8rem; color:#555; display:inline-block; width:30px; text-align:center;">${s.icon}</span> = ${s.val}</div>`).join('')}
                </div>
                <div style="background:#f8f9fa; padding:15px; border-radius:10px; border:2px solid #ddd; min-width:150px;">
                    <div style="font-weight:bold; margin-bottom:10px; border-bottom:2px dashed #ccc; padding-bottom:5px;">Warna:</div>
                    ${shuffColors.map(c => `<div style="margin-bottom:5px; display:flex; align-items:center;"><span style="display:inline-block; width:20px; height:20px; background:${c.code}; border-radius:5px; margin-right:10px; border:1px solid #aaa;"></span> ${c.name} = ${c.val}</div>`).join('')}
                </div>
            </div>
        `;

        // Pick 2 random combinations for the question
        let shape1 = shuffShapes[Math.floor(Math.random() * shuffShapes.length)];
        let color1 = shuffColors[Math.floor(Math.random() * shuffColors.length)];
        
        let shape2 = shuffShapes[Math.floor(Math.random() * shuffShapes.length)];
        let color2 = shuffColors[Math.floor(Math.random() * shuffColors.length)];
        
        let val1 = shape1.val + color1.val;
        let val2 = shape2.val + color2.val;
        let answer = val1 + val2;

        let options = [answer, answer + 1, answer - 1, answer + 2, answer - 2].filter(v => v > 0);
        options = [...new Set(options)].slice(0, 3);
        if(!options.includes(answer)) options[0] = answer;
        options.sort(() => 0.5 - Math.random());

        this.el.gameContent.innerHTML = `
            ${dictHtml}
            <div class="subtitle" style="margin-bottom: 20px;">Jumlahkan nilai <b>bentuk</b> dan <b>warna</b>-nya!</div>
            <div class="equation" style="justify-content:center;">
                <span style="font-size:5rem; color:${color1.code}; text-shadow: 1px 1px 0 #7f8c8d;">${shape1.icon}</span> 
                <span style="font-size:3rem; margin:0 15px;">+</span> 
                <span style="font-size:5rem; color:${color2.code}; text-shadow: 1px 1px 0 #7f8c8d;">${shape2.icon}</span> 
                <span style="font-size:3rem; margin:0 15px;">=</span> 
                <span style="font-size:4rem;">❓</span>
            </div>
            <div class="options-container" style="justify-content: center; margin-top:20px;">
                ${options.map(opt => `<button class="option-btn" style="border: 4px solid var(--primary); padding: 15px 40px; font-weight: bold; background: white;" onclick="app.checkAnswer4(${opt}, ${answer})">${opt}</button>`).join('')}
            </div>
        `;
    },

    checkAnswer4(selected, correct) {
        this.showFeedback(selected === correct);
    },

    // ==========================================
    // GAME 5: KODING POLA WARNA (Color Painting Logic)
    // ==========================================
    initGame5() {
        const allShapes = [
            { empty: '△', filled: '▲' }, { empty: '□', filled: '■' },
            { empty: '○', filled: '●' }, { empty: '☆', filled: '★' },
            { empty: '♡', filled: '♥' }, { empty: '◇', filled: '◆' },
            { empty: '♧', filled: '♣' }, { empty: '♤', filled: '♠' }
        ];
        const allColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#1abc9c', '#34495e', '#fd79a8', '#00cec9'];
        
        let shuffShapes = [...allShapes].sort(() => 0.5 - Math.random()).slice(0, 4);
        let shuffColors = [...allColors].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        const shapesMap = shuffShapes.map((s, i) => ({
            empty: s.empty, filled: s.filled, color: shuffColors[i]
        }));

        this.g5Brush = null;
        
        // Generate 8 random grid items (Pattern variation is 4^8)
        this.g5Grid = [];
        for(let i=0; i<8; i++) {
            let s = shapesMap[Math.floor(Math.random() * shapesMap.length)];
            this.g5Grid.push({
                type: s,
                currentColor: null
            });
        }

        const renderDictionary = () => {
            return shapesMap.map(s => `
                <div style="display:flex; flex-direction:column; align-items:center; background:white; padding:10px 20px; border-radius:10px; border:2px solid #eee;">
                    <span style="font-size:3rem; color:${s.color}; text-shadow:1px 1px 0 #ccc; line-height:1;">${s.filled}</span>
                </div>
            `).join('');
        };

        const renderPalette = () => {
            return shapesMap.map(s => `
                <div onclick="app.setBrush5('${s.color}')" style="width:50px; height:50px; border-radius:50%; background:${s.color}; border: ${this.g5Brush === s.color ? '4px solid #333' : '2px solid #ccc'}; cursor:pointer; transform: ${this.g5Brush === s.color ? 'scale(1.2)' : 'scale(1)'}; transition:all 0.2s;"></div>
            `).join('');
        };

        this.renderGrid5 = () => {
            return this.g5Grid.map((item, idx) => {
                let char = item.currentColor ? item.type.filled : item.type.empty;
                let col = item.currentColor || '#555';
                return `
                    <div onclick="app.paintShape5(${idx})" style="font-size:4rem; cursor:pointer; color:${col}; text-shadow:1px 1px 0 #ddd; display:inline-block; margin:10px; line-height:1; width:60px; text-align:center;">
                        ${char}
                    </div>
                `;
            }).join('');
        };

        this.drawUI5 = () => {
            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px; font-size:1.2rem;">Panduan Warna:</div>
                <div style="display:flex; justify-content:center; gap:15px; margin-bottom:20px;">
                    ${renderDictionary()}
                </div>
                
                <div class="subtitle" style="margin-bottom:10px; font-size:1.2rem;">Pilih Kuas:</div>
                <div style="display:flex; justify-content:center; gap:15px; margin-bottom:25px; background:#f8f9fa; padding:15px; border-radius:20px; width:fit-content; margin-left:auto; margin-right:auto; border:2px solid #ddd;">
                    ${renderPalette()}
                </div>

                <div class="subtitle" style="margin-bottom:10px; font-size:1.2rem;">Warnai bentuk di bawah ini sesuai panduan!</div>
                <div id="g5-grid-container" style="background:white; border:3px dashed #ccc; padding:20px; border-radius:15px; margin-bottom:20px; max-width:400px; margin-left:auto; margin-right:auto;">
                    ${this.renderGrid5()}
                </div>
                
                <button class="run-btn" onclick="app.checkWin5()" style="padding:15px 40px; font-size:1.5rem; margin-top:10px;">✅ CEK JAWABAN</button>
            `;
        };

        this.setBrush5 = (color) => {
            this.g5Brush = color;
            SFX.click();
            this.drawUI5();
        };

        this.paintShape5 = (idx) => {
            if(!this.g5Brush) return;
            this.g5Grid[idx].currentColor = this.g5Brush;
            SFX.step();
            document.getElementById('g5-grid-container').innerHTML = this.renderGrid5();
        };

        this.checkWin5 = () => {
            let isWin = true;
            for(let item of this.g5Grid) {
                if(item.currentColor !== item.type.color) {
                    isWin = false;
                    break;
                }
            }
            this.showFeedback(isWin);
        };

        this.drawUI5();
    },

    // ==========================================
    // GAME 6: PENGULANGAN (Looping)
    // ==========================================
    // ==========================================
    // GAME 6: PENGULANGAN TINGKAT LANJUT (Looping Majemuk)
    // ==========================================
    initGame6() {
        this.g6Mode = Math.random() > 0.5 ? 1 : 0; // 0 = Tangga (Grid 4x4), 1 = Panen (Linear variable length)
        this.g6LoopCount = 1;
        this.g6Slots = [null, null];
        this.g6ActiveSlot = 0;
        this.g6IsRunning = false;
        
        // Mode 0 variables (Procedural generation of the repeating path)
        const mode0Vars = [
            { start: {x:0, y:3}, target: {x:3, y:0}, seq: ['➡️', '⬆️'], hl: [{x:0,y:3},{x:1,y:3},{x:1,y:2},{x:2,y:2},{x:2,y:1},{x:3,y:1},{x:3,y:0}] },
            { start: {x:0, y:3}, target: {x:3, y:0}, seq: ['⬆️', '➡️'], hl: [{x:0,y:3},{x:0,y:2},{x:1,y:2},{x:1,y:1},{x:2,y:1},{x:2,y:0},{x:3,y:0}] },
            { start: {x:0, y:0}, target: {x:3, y:3}, seq: ['➡️', '⬇️'], hl: [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:2},{x:3,y:2},{x:3,y:3}] },
            { start: {x:0, y:0}, target: {x:3, y:3}, seq: ['⬇️', '➡️'], hl: [{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:2},{x:2,y:3},{x:3,y:3}] },
            { start: {x:3, y:3}, target: {x:0, y:0}, seq: ['⬅️', '⬆️'], hl: [{x:3,y:3},{x:2,y:3},{x:2,y:2},{x:1,y:2},{x:1,y:1},{x:0,y:1},{x:0,y:0}] },
            { start: {x:3, y:0}, target: {x:0, y:3}, seq: ['⬅️', '⬇️'], hl: [{x:3,y:0},{x:2,y:0},{x:2,y:1},{x:1,y:1},{x:1,y:2},{x:0,y:2},{x:0,y:3}] },
        ];
        this.g6Route = mode0Vars[Math.floor(Math.random() * mode0Vars.length)];
        this.g6PlayerXY = { ...this.g6Route.start };
        
        // Mode 1 variables (Dynamic Length)
        this.g6PanenLen = Math.floor(Math.random() * 3) + 3; // 3 to 5 steps (so 4 to 6 boxes)
        this.g6PlayerLinear = 0;
        this.g6Apples = new Array(this.g6PanenLen + 1).fill(true);
        this.g6Apples[0] = false; // Player start pos

        const playerEmoji = getActiveSkinEmoji('player');
        const targetEmoji = getActiveSkinEmoji('target');

        const drawGrid = () => {
            if (this.g6Mode === 0) {
                // Mode 0: Tangga 4x4
                let html = `<div style="display:grid; grid-template-columns:repeat(4, 60px); grid-template-rows:repeat(4, 60px); gap:5px; margin:0 auto 20px; width:fit-content; background:#ccc; padding:5px; border-radius:10px;">`;
                for (let y = 0; y < 4; y++) {
                    for (let x = 0; x < 4; x++) {
                        let icon = '';
                        let bg = 'white';
                        // Rute highlight
                        if (this.g6Route.hl.find(p => p.x === x && p.y === y)) {
                            bg = '#ffeaa7';
                        }
                        if (x === this.g6PlayerXY.x && y === this.g6PlayerXY.y) icon = playerEmoji;
                        else if (x === this.g6Route.target.x && y === this.g6Route.target.y) icon = targetEmoji;
                        
                        html += `<div style="width:60px; height:60px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:2rem; background:${bg}; position:relative; z-index:${icon?2:1};">${icon}</div>`;
                    }
                }
                html += `</div>`;
                return html;
            } else {
                // Mode 1: Panen 1x(PanenLen)
                let html = `<div style="display:grid; grid-template-columns:repeat(${this.g6PanenLen + 1}, 60px); gap:5px; margin:0 auto 20px; width:fit-content; background:#ccc; padding:5px; border-radius:10px; max-width:100%; overflow-x:auto;">`;
                for (let i = 0; i <= this.g6PanenLen; i++) {
                    let icon = '';
                    if (i === this.g6PlayerLinear) icon = playerEmoji;
                    else if (i === this.g6PanenLen && this.g6Apples[i]) icon = targetEmoji + '<span style="position:absolute; bottom:0; right:0; font-size:1rem;">🍎</span>';
                    else if (i === this.g6PanenLen) icon = targetEmoji;
                    else if (this.g6Apples[i]) icon = '🍎';
                    
                    html += `<div style="width:60px; height:60px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:2rem; background:white; position:relative; min-width:60px;">${icon}</div>`;
                }
                html += `</div>`;
                return html;
            }
        };

        this.renderUI6 = () => {
            const subtitle = this.g6Mode === 0 ? 
                'Susun blok di dalam LOOP agar mobil melewati jalur kuning!' : 
                'Susun blok di dalam LOOP agar mobil mengambil semua apel sampai ke rumah!';
            
            const btnRight = `<button class="control-btn" onclick="app.g6FillSlot('➡️')">➡️ Kanan</button>`;
            const btnLeft = `<button class="control-btn" onclick="app.g6FillSlot('⬅️')">⬅️ Kiri</button>`;
            const btnUp = `<button class="control-btn" onclick="app.g6FillSlot('⬆️')">⬆️ Atas</button>`;
            const btnDown = `<button class="control-btn" onclick="app.g6FillSlot('⬇️')">⬇️ Bawah</button>`;
            const btnApple = `<button class="control-btn" onclick="app.g6FillSlot('🍎')">🍎 Ambil</button>`;
            
            let controlsHtml = '';
            if (this.g6Mode === 0) {
                // Show only the needed controls to not overwhelm, but mix them
                if(this.g6Route.seq.includes('➡️') || this.g6Route.seq.includes('⬅️')) controlsHtml += btnRight + btnLeft;
                if(this.g6Route.seq.includes('⬆️') || this.g6Route.seq.includes('⬇️')) controlsHtml += btnUp + btnDown;
            } else {
                controlsHtml = btnRight + btnApple;
            }

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">${subtitle}</div>
                <div id="g6-grid-container">${drawGrid()}</div>
                
                <div class="loop-block">
                    <div style="font-size:1.5rem; font-weight:bold; color:var(--secondary);">
                        🔁 DIULANG <span style="font-size:2rem; background:white; padding:0 10px; border-radius:8px; border:2px solid #ccc; display:inline-block; min-width:40px; text-align:center;">${this.g6LoopCount}</span> KALI:
                    </div>
                    
                    <div class="loop-slots-container">
                        <div id="g6-slot-0" class="loop-slot ${this.g6ActiveSlot === 0 ? 'active' : ''}" onclick="app.g6SelectSlot(0)">
                            ${this.g6Slots[0] || '?'}
                        </div>
                        <div id="g6-slot-1" class="loop-slot ${this.g6ActiveSlot === 1 ? 'active' : ''}" onclick="app.g6SelectSlot(1)">
                            ${this.g6Slots[1] || '?'}
                        </div>
                    </div>

                    <div style="display:flex; gap:10px; align-items:center; margin-top:10px;">
                        Ubah jumlah Loop: 
                        <button class="control-btn" style="padding:10px 15px; font-size:1.5rem; border-radius:50%;" onclick="app.g6ChangeLoop(-1)">-</button>
                        <button class="control-btn" style="padding:10px 15px; font-size:1.5rem; border-radius:50%;" onclick="app.g6ChangeLoop(1)">+</button>
                    </div>
                </div>

                <div class="controls" style="justify-content:center;">
                    ${controlsHtml}
                </div>
                <button class="run-btn" onclick="app.g6Run()" style="padding:15px 40px; font-size:1.5rem; margin-top:10px;">▶️ JALANKAN</button>
            `;
        };

        this.g6SelectSlot = (idx) => {
            if (this.g6IsRunning) return;
            this.g6ActiveSlot = idx;
            SFX.click();
            this.renderUI6();
        };

        this.g6FillSlot = (cmd) => {
            if (this.g6IsRunning) return;
            this.g6Slots[this.g6ActiveSlot] = cmd;
            // Auto move to next slot if empty
            if (this.g6ActiveSlot === 0 && !this.g6Slots[1]) this.g6ActiveSlot = 1;
            SFX.click();
            this.renderUI6();
        };

        this.g6ChangeLoop = (delta) => {
            if (this.g6IsRunning) return;
            this.g6LoopCount += delta;
            if (this.g6LoopCount < 1) this.g6LoopCount = 1;
            if (this.g6LoopCount > 6) this.g6LoopCount = 6;
            SFX.click();
            this.renderUI6();
        };

        this.g6Run = () => {
            if (this.g6IsRunning) return;
            if (!this.g6Slots[0] || !this.g6Slots[1]) {
                this.showNotif("Isi kedua slot loop terlebih dahulu!");
                return;
            }
            this.g6IsRunning = true;
            
            // Reset position
            this.g6PlayerXY = { ...this.g6Route.start };
            this.g6PlayerLinear = 0;
            this.g6Apples = new Array(this.g6PanenLen + 1).fill(true);
            this.g6Apples[0] = false;

            let commands = [];
            for(let i=0; i<this.g6LoopCount; i++) {
                commands.push(this.g6Slots[0]);
                commands.push(this.g6Slots[1]);
            }

            let cmdIdx = 0;
            const step = () => {
                if (cmdIdx >= commands.length) {
                    this.g6IsRunning = false;
                    this.g6CheckWin();
                    return;
                }

                let cmd = commands[cmdIdx];
                if (this.g6Mode === 0) { // Tangga
                    if (cmd === '➡️') this.g6PlayerXY.x++;
                    else if (cmd === '⬅️') this.g6PlayerXY.x--;
                    else if (cmd === '⬆️') this.g6PlayerXY.y--;
                    else if (cmd === '⬇️') this.g6PlayerXY.y++;
                } else { // Panen
                    if (cmd === '➡️') this.g6PlayerLinear++;
                    else if (cmd === '🍎' && this.g6Apples[this.g6PlayerLinear]) {
                        this.g6Apples[this.g6PlayerLinear] = false;
                        SFX.buy(); // Sound ambil apel
                    }
                }

                SFX.step();
                document.getElementById('g6-grid-container').innerHTML = drawGrid();
                
                // Out of bounds check
                if (this.g6Mode === 0 && (this.g6PlayerXY.x > 3 || this.g6PlayerXY.x < 0 || this.g6PlayerXY.y > 3 || this.g6PlayerXY.y < 0)) {
                    this.g6IsRunning = false;
                    this.showFeedback(false);
                    setTimeout(() => { this.g6PlayerXY = { ...this.g6Route.start }; this.renderUI6(); }, 1500);
                    return;
                }
                if (this.g6Mode === 1 && this.g6PlayerLinear > this.g6PanenLen) {
                    this.g6IsRunning = false;
                    this.showFeedback(false);
                    setTimeout(() => { 
                        this.g6PlayerLinear = 0; 
                        this.g6Apples = new Array(this.g6PanenLen + 1).fill(true); 
                        this.g6Apples[0] = false; 
                        this.renderUI6(); 
                    }, 1500);
                    return;
                }

                cmdIdx++;
                setTimeout(step, 500);
            };
            
            step();
        };

        this.g6CheckWin = () => {
            let isWin = false;
            if (this.g6Mode === 0) {
                isWin = (this.g6PlayerXY.x === this.g6Route.target.x && this.g6PlayerXY.y === this.g6Route.target.y);
            } else {
                let allApplesTaken = !this.g6Apples.includes(true);
                isWin = (this.g6PlayerLinear === this.g6PanenLen && allApplesTaken);
            }
            this.showFeedback(isWin);
            if (!isWin) {
                setTimeout(() => { 
                    this.g6PlayerXY = { ...this.g6Route.start }; 
                    this.g6PlayerLinear = 0; 
                    this.g6Apples = new Array(this.g6PanenLen + 1).fill(true);
                    this.g6Apples[0] = false;
                    this.renderUI6(); 
                }, 2000);
            }
        };

        this.renderUI6();
    },

    // ==========================================
    // GAME 7: KONDISI (If-Else Logika Sehari-hari)
    // ==========================================
    initGame7() {
        const rulePool = [
            { wId: 'hujan', wEmoji: '🌧️', wName: 'Hujan', gEmoji: '☂️' },
            { wId: 'cerah', wEmoji: '☀️', wName: 'Panas', gEmoji: '🕶️' },
            { wId: 'salju', wEmoji: '❄️', wName: 'Salju', gEmoji: '🧥' },
            { wId: 'malam', wEmoji: '🌙', wName: 'Malam', gEmoji: '🔦' },
            { wId: 'badai', wEmoji: '🌪️', wName: 'Badai', gEmoji: '🪖' },
            { wId: 'kebakaran', wEmoji: '🔥', wName: 'Api', gEmoji: '🧯' },
            { wId: 'kotor', wEmoji: '💩', wName: 'Kotor', gEmoji: '🧹' },
            { wId: 'luka', wEmoji: '🤕', wName: 'Luka', gEmoji: '🩹' },
            { wId: 'alien', wEmoji: '🛸', wName: 'UFO', gEmoji: '🔫' },
            { wId: 'gembok', wEmoji: '🔒', wName: 'Terkunci', gEmoji: '🔑' },
            { wId: 'haus', wEmoji: '🥵', wName: 'Haus', gEmoji: '💧' },
            { wId: 'lapar', wEmoji: '🤤', wName: 'Lapar', gEmoji: '🍔' }
        ];

        let shuffledRules = [...rulePool].sort(() => 0.5 - Math.random());
        let r1 = shuffledRules[0];
        let r2 = shuffledRules[1];

        this.g7Rules = {};
        this.g7Rules[r1.wId] = null;
        this.g7Rules[r2.wId] = null;
        
        // Buat opsi jawaban yang digabung dari jawaban benar + jawaban acak
        let allOptions = ['☂️', '🕶️', '🧥', '🔦', '🪖', '🧯', '🧹', '🩹', '🔫', '🔑', '💧', '🍔'];
        let possibleOptions = [null, r1.gEmoji, r2.gEmoji];
        let fillers = allOptions.filter(x => x !== r1.gEmoji && x !== r2.gEmoji).sort(() => 0.5 - Math.random()).slice(0, 3);
        possibleOptions = [...possibleOptions, ...fillers];

        const renderUI = () => {
            const getGear = (wId) => {
                return this.g7Rules[wId] || '❓';
            };

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Siapkan perlengkapan sesuai kondisi (IF-ELSE)!</div>
                <div style="background:#e8f4f8; padding:15px; border-radius:10px; border:2px dashed #b8daff; margin-bottom:20px; font-size:1.2rem; color:#004085; text-align:center;">
                    <b>ATURAN HARI INI:</b><br>
                    JIKA kondisi <b>${r1.wName} ${r1.wEmoji}</b> gunakan <b>${r1.gEmoji}</b>.<br>
                    JIKA kondisi <b>${r2.wName} ${r2.wEmoji}</b> gunakan <b>${r2.gEmoji}</b>.
                </div>
                
                <div style="display:flex; flex-direction:column; gap:20px; align-items:center; margin-bottom:30px;">
                    <!-- Aturan 1 -->
                    <div style="display:flex; align-items:center; gap:15px; background:#f8f9fa; padding:15px; border-radius:15px; border:2px solid #ddd;">
                        <span style="font-size:1.5rem; font-weight:bold;">JIKA (IF)</span>
                        <span style="font-size:3rem;">${r1.wEmoji}</span>
                        <span style="font-size:1.5rem; font-weight:bold;">MAKA ➡️</span>
                        <button onclick="app.toggleRule7('${r1.wId}')" style="font-size:2.5rem; width:80px; height:60px; border-radius:10px; border:3px solid #ccc; cursor:pointer; background:white;">${getGear(r1.wId)}</button>
                    </div>
                    
                    <!-- Aturan 2 -->
                    <div style="display:flex; align-items:center; gap:15px; background:#f8f9fa; padding:15px; border-radius:15px; border:2px solid #ddd;">
                        <span style="font-size:1.5rem; font-weight:bold;">JIKA (IF)</span>
                        <span style="font-size:3rem;">${r2.wEmoji}</span>
                        <span style="font-size:1.5rem; font-weight:bold;">MAKA ➡️</span>
                        <button onclick="app.toggleRule7('${r2.wId}')" style="font-size:2.5rem; width:80px; height:60px; border-radius:10px; border:3px solid #ccc; cursor:pointer; background:white;">${getGear(r2.wId)}</button>
                    </div>
                </div>

                <button class="run-btn" onclick="app.checkWin7()" style="padding:15px 40px; font-size:1.5rem;">✅ SIMPAN ATURAN</button>
            `;
        };

        this.toggleRule7 = (wId) => {
            let idx = possibleOptions.indexOf(this.g7Rules[wId]);
            idx = (idx + 1) % possibleOptions.length;
            this.g7Rules[wId] = possibleOptions[idx];
            SFX.click();
            renderUI();
        };

        this.checkWin7 = () => {
            if(this.g7Rules[r1.wId] === r1.gEmoji && this.g7Rules[r2.wId] === r2.gEmoji) {
                this.showFeedback(true);
            } else {
                this.showFeedback(false);
            }
        };

        renderUI();
    },

    // ==========================================
    // GAME 8: TANGKAP KUTU (Debugging)
    // ==========================================
    initGame8() {
        const size = 4;
        let startPos = { 
            x: Math.floor(Math.random() * 2), 
            y: Math.floor(Math.random() * 2) 
        };
        let targetPos = { 
            x: Math.floor(Math.random() * 2) + 2, 
            y: Math.floor(Math.random() * 2) + 2 
        };
        
        let correctSeq = [];
        for(let i=0; i < targetPos.x - startPos.x; i++) correctSeq.push('R');
        for(let i=0; i < targetPos.y - startPos.y; i++) correctSeq.push('D');
        correctSeq.sort(() => 0.5 - Math.random());
        
        this.g8Seq = [...correctSeq];
        let bugIdx = Math.floor(Math.random() * this.g8Seq.length);
        let bugOptions = ['U', 'D', 'L', 'R'].filter(c => c !== this.g8Seq[bugIdx]);
        this.g8Seq[bugIdx] = bugOptions[Math.floor(Math.random() * bugOptions.length)];
        
        let isRunning = false;
        const robotEmoji = getActiveSkinEmoji('robot');
        const batteryEmoji = getActiveSkinEmoji('battery');

        const drawGrid = (pX, pY) => {
            let html = `<div class="grid-board" style="margin:0 auto 20px;">`;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    let icon = '';
                    if (x === pX && y === pY) icon = robotEmoji;
                    else if (x === targetPos.x && y === targetPos.y) icon = batteryEmoji;
                    html += `<div class="grid-cell">${icon}</div>`;
                }
            }
            html += `</div>`;
            return html;
        };

        const renderUI = (pX, pY) => {
            const cmds = ['U', 'D', 'L', 'R', '_'];
            const icons = {'U':'⬆️', 'D':'⬇️', 'L':'⬅️', 'R':'➡️', '_':'🗑️'};
            
            let seqHtml = this.g8Seq.map((c, idx) => `
                <button onclick="app.toggleBug8(${idx})" style="font-size:2rem; width:50px; height:50px; border-radius:10px; border:3px solid #e74c3c; cursor:pointer; background:white;">${icons[c]}</button>
            `).join('');

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Oh tidak! Ada BUG (kutu) di kode Robot!</div>
                <div class="subtitle" style="margin-bottom:20px; font-size:1.1rem; color:#555;">Klik panah yang salah untuk memutarnya. Gunakan 🗑️ untuk mengosongkan langkah.</div>
                
                <div id="g8-grid-container">${drawGrid(pX, pY)}</div>
                
                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; background:#f8f9fa; padding:15px; border-radius:15px; border:2px dashed #e74c3c; width:fit-content; margin:0 auto 20px;">
                    ${seqHtml}
                </div>
                
                <button class="run-btn" onclick="app.runDebug8()" style="padding:15px 40px; font-size:1.5rem;">▶️ TES KODE</button>
            `;
        };

        this.toggleBug8 = (idx) => {
            if(isRunning) return;
            const cycle = {'R':'D', 'D':'L', 'L':'U', 'U':'_', '_':'R'};
            this.g8Seq[idx] = cycle[this.g8Seq[idx]];
            renderUI(startPos.x, startPos.y);
        };

        this.runDebug8 = () => {
            if(isRunning) return;
            isRunning = true;
            let pX = startPos.x;
            let pY = startPos.y;
            let step = 0;

            const executeStep = () => {
                if (step >= this.g8Seq.length) {
                    isRunning = false;
                    let isWin = (pX === targetPos.x && pY === targetPos.y);
                    this.showFeedback(isWin);
                    if (!isWin) {
                        setTimeout(() => { document.getElementById('g8-grid-container').innerHTML = drawGrid(startPos.x, startPos.y); }, 1500);
                    }
                    return;
                }

                let cmd = this.g8Seq[step];
                step++;
                
                if (cmd === '_') {
                    setTimeout(executeStep, 200); // skip empty
                    return;
                }

                let nextX = pX;
                let nextY = pY;

                if (cmd === 'U') nextY -= 1;
                else if (cmd === 'D') nextY += 1;
                else if (cmd === 'L') nextX -= 1;
                else if (cmd === 'R') nextX += 1;

                if (nextX < 0 || nextX >= size || nextY < 0 || nextY >= size) {
                    isRunning = false;
                    this.showFeedback(false);
                    setTimeout(() => { document.getElementById('g8-grid-container').innerHTML = drawGrid(startPos.x, startPos.y); }, 1500);
                    return;
                }

                pX = nextX;
                pY = nextY;
                
                document.getElementById('g8-grid-container').innerHTML = drawGrid(pX, pY);
                setTimeout(executeStep, 500);
            };

            executeStep();
        };

        renderUI(startPos.x, startPos.y);
    },

    // ==========================================
    // GAME 9: KODING FUNGSI (Functions)
    // ==========================================
    initGame9() {
        // Pool arah & aksi yang diperbanyak
        const directions = [
            { id: 'UP', emoji: '⬆️', text: 'Maju' },
            { id: 'DOWN', emoji: '⬇️', text: 'Mundur' },
            { id: 'LEFT', emoji: '⬅️', text: 'Kiri' },
            { id: 'RIGHT', emoji: '➡️', text: 'Kanan' }
        ];
        const actions = [
            { id: 'WATER', emoji: '💧', text: 'Siram Air' },
            { id: 'SEED', emoji: '🌱', text: 'Tanam Benih' },
            { id: 'HARVEST', emoji: '🌾', text: 'Panen' },
            { id: 'FIRE', emoji: '🔥', text: 'Bakar' },
            { id: 'DIG', emoji: '⛏️', text: 'Gali' },
            { id: 'BUILD', emoji: '🧱', text: 'Bangun' },
            { id: 'JUMP', emoji: '🦘', text: 'Lompat' }
        ];
        
        // Random sequence length (3 to 5)
        let seqLen = Math.floor(Math.random() * 3) + 3;
        
        let expectedSequence = [];
        let combinedPool = [...directions, ...actions];
        
        for(let i=0; i<seqLen; i++) {
            // Bisa pilih kombinasi aksi atau arah acak
            let r = combinedPool[Math.floor(Math.random() * combinedPool.length)];
            expectedSequence.push(r);
        }

        this.g9Expected = expectedSequence;
        this.g9CurrentInput = [];

        const renderUI = () => {
            let funcDef = expectedSequence.map(item => `
                <div style="background:white; border:2px solid #ccc; border-radius:10px; padding:10px; font-size:2rem;">${item.emoji}</div>
            `).join('<span style="font-size:2rem; font-weight:bold; margin:0 5px;">+</span>');

            let slots = '';
            for(let i = 0; i < seqLen; i++) {
                let fill = this.g9CurrentInput[i];
                slots += `<div style="width:60px; height:60px; border:3px dashed #aaa; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:2.5rem; background:white;">${fill ? fill.emoji : ''}</div>`;
            }

            // Opsi tombol yang tampil adalah yang dibutuhkan + pengecoh
            let needed = [...new Set(expectedSequence)];
            let unneeded = combinedPool.filter(x => !needed.includes(x)).sort(() => 0.5 - Math.random()).slice(0, 3);
            let optionsToShow = [...needed, ...unneeded].sort(() => 0.5 - Math.random());

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Panggil fungsi sesuai resep rahasia!</div>
                
                <div style="background:#e8f4f8; border:3px solid #3498db; border-radius:15px; padding:20px; margin-bottom:20px; text-align:center;">
                    <div style="font-size:1.2rem; font-weight:bold; color:#2980b9; margin-bottom:10px;">Definisi Fungsi: <span style="background:#3498db; color:white; padding:5px 10px; border-radius:8px;">function kerjakan()</span></div>
                    <div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:5px;">
                        ${funcDef}
                    </div>
                </div>

                <div class="subtitle" style="font-size:1.1rem; margin-bottom:10px;">Panggil fungsi dengan memasukkan blok yang tepat:</div>
                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
                    ${slots}
                </div>

                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; flex-wrap:wrap; background:#f8f9fa; padding:15px; border-radius:15px;">
                    ${optionsToShow.map(opt => `
                        <button onclick="app.g9AddInput('${opt.id}')" style="font-size:2rem; width:60px; height:60px; border-radius:10px; border:2px solid #ccc; cursor:pointer; background:white;">${opt.emoji}</button>
                    `).join('')}
                    <button onclick="app.g9Clear()" style="font-size:1.5rem; width:60px; height:60px; border-radius:10px; border:2px solid #e74c3c; cursor:pointer; background:#ff7675; color:white; font-weight:bold;">C</button>
                </div>

                <button class="run-btn" onclick="app.checkWin9()" style="padding:15px 40px; font-size:1.5rem;">▶️ JALANKAN FUNGSI</button>
            `;
        };

        this.g9AddInput = (id) => {
            if (this.g9CurrentInput.length >= seqLen) return;
            let item = combinedPool.find(x => x.id === id);
            this.g9CurrentInput.push(item);
            SFX.click();
            renderUI();
        };

        this.g9Clear = () => {
            this.g9CurrentInput = [];
            SFX.click();
            renderUI();
        };

        this.checkWin9 = () => {
            if (this.g9CurrentInput.length !== seqLen) {
                this.showNotif("Lengkapi semua blok fungsi dulu!");
                return;
            }

            let isWin = true;
            for(let i=0; i<seqLen; i++) {
                if (this.g9CurrentInput[i].id !== this.g9Expected[i].id) {
                    isWin = false;
                    break;
                }
            }

            this.showFeedback(isWin);
            if (!isWin) {
                this.g9CurrentInput = [];
                renderUI();
            }
        };

        renderUI();
    },
    // ==========================================
    // GAME 10: KODING PIXEL (Binary Art)
    // ==========================================
    initGame10() {
        const size = 5;
        // Generate random simple pattern
        this.g10Target = [];
        this.g10Current = [];
        for(let r=0; r<size; r++) {
            let tr = [];
            let cr = [];
            for(let c=0; c<size; c++) {
                // Random 0 or 1
                tr.push(Math.random() > 0.5 ? 1 : 0);
                cr.push(0);
            }
            this.g10Target.push(tr);
            this.g10Current.push(cr);
        }

        const renderGrid = () => {
            let html = `<div style="display:grid; grid-template-columns:repeat(5, 50px); gap:2px; background:#999; border:4px solid #555; border-radius:5px; padding:2px; margin:0 auto 20px; width:fit-content;">`;
            for(let r=0; r<size; r++) {
                for(let c=0; c<size; c++) {
                    let bg = this.g10Current[r][c] === 1 ? '#333' : '#fff';
                    html += `<div onclick="app.togglePixel10(${r},${c})" style="width:50px; height:50px; background:${bg}; cursor:pointer; border-radius:3px; transition:background 0.2s;"></div>`;
                }
            }
            html += `</div>`;
            return html;
        };

        const renderCode = () => {
            let html = `<div style="background:#2d3436; color:#00b894; font-family:monospace; font-size:1.5rem; padding:15px; border-radius:10px; margin-bottom:20px; text-align:center; letter-spacing: 5px;">`;
            for(let r=0; r<size; r++) {
                html += `<div>${this.g10Target[r].join(' ')}</div>`;
            }
            html += `</div>`;
            return html;
        };

        this.renderUI10 = () => {
            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Gambar pola pixel di bawah sesuai kode Array (0 = Putih, 1 = Hitam)!</div>
                ${renderCode()}
                <div id="g10-grid">${renderGrid()}</div>
                <button class="run-btn" onclick="app.checkWin10()" style="padding:15px 40px; font-size:1.5rem;">✅ CEK GAMBAR</button>
            `;
        };

        this.togglePixel10 = (r, c) => {
            this.g10Current[r][c] = this.g10Current[r][c] === 1 ? 0 : 1;
            SFX.click();
            document.getElementById('g10-grid').innerHTML = renderGrid();
        };

        this.checkWin10 = () => {
            let win = true;
            for(let r=0; r<size; r++) {
                for(let c=0; c<size; c++) {
                    if (this.g10Current[r][c] !== this.g10Target[r][c]) win = false;
                }
            }
            this.showFeedback(win);
        };

        this.renderUI10();
    },

    // ==========================================
    // GAME 11: BRANKAS RAHASIA (Logika Boolean)
    // ==========================================
    initGame11() {
        const items = [
            { id: 'kunci', emoji: '🔑', name: 'Kunci' },
            { id: 'kartu', emoji: '💳', name: 'Kartu' },
            { id: 'permata', emoji: '💎', name: 'Permata' },
            { id: 'buku', emoji: '📕', name: 'Buku' },
            { id: 'apel', emoji: '🍎', name: 'Apel' },
            { id: 'pedang', emoji: '🗡️', name: 'Pedang' },
            { id: 'tameng', emoji: '🛡️', name: 'Tameng' },
            { id: 'obat', emoji: '💊', name: 'Obat' },
            { id: 'koin', emoji: '🪙', name: 'Koin' },
            { id: 'peta', emoji: '🗺️', name: 'Peta' },
            { id: 'kamera', emoji: '📷', name: 'Kamera' },
            { id: 'senter', emoji: '🔦', name: 'Senter' },
            { id: 'jam', emoji: '⏰', name: 'Jam' },
            { id: 'magnet', emoji: '🧲', name: 'Magnet' },
            { id: 'kacamata', emoji: '👓', name: 'Kacamata' }
        ];
        
        let shuffled = [...items].sort(() => 0.5 - Math.random());
        this.g11Items = shuffled.slice(0, 6); // display 6 items for more challenge
        this.g11Selected = [];
        
        // Pilih mode secara acak: AND, OR, atau NOT
        const modes = ['AND', 'OR', 'NOT_AND'];
        this.g11Mode = modes[Math.floor(Math.random() * modes.length)];
        
        let target1 = this.g11Items[0];
        let target2 = this.g11Items[1];

        this.renderUI11 = () => {
            let ruleText = '';
            if (this.g11Mode === 'AND') {
                ruleText = `Bawa <b>${target1.name} ${target1.emoji}</b> DAN <b>${target2.name} ${target2.emoji}</b>`;
            } else if (this.g11Mode === 'OR') {
                ruleText = `Bawa <b>${target1.name} ${target1.emoji}</b> ATAU <b>${target2.name} ${target2.emoji}</b> <br><small style="color:#e74c3c;">(Hanya boleh bawa SATU saja dari keduanya!)</small>`;
            } else {
                ruleText = `Bawa APAPUN KECUALI <b>${target1.name} ${target1.emoji}</b> maupun <b>${target2.name} ${target2.emoji}</b> <br><small style="color:#e74c3c;">(Bawa minimal 2 barang lain!)</small>`;
            }

            let itemsHtml = this.g11Items.map(item => {
                let isSel = this.g11Selected.includes(item.id);
                return `
                    <div onclick="app.toggleItem11('${item.id}')" style="display:flex; flex-direction:column; align-items:center; cursor:pointer; background:${isSel ? '#ffeaa7' : 'white'}; border:${isSel ? '4px solid #fdcb6e' : '4px solid #eee'}; border-radius:15px; padding:15px; transition:all 0.2s; transform:${isSel ? 'scale(1.1)' : 'scale(1)'};">
                        <span style="font-size:3rem; margin-bottom:10px;">${item.emoji}</span>
                        <span style="font-weight:bold; color:#555;">${item.name}</span>
                        ${isSel ? '<span style="color:#27ae60; font-weight:bold; font-size:1.5rem; margin-top:5px;">✅</span>' : ''}
                    </div>
                `;
            }).join('');

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Buka Brankas Rahasia dengan Logika Boolean!</div>
                <div style="background:#34495e; color:white; padding:20px; border-radius:15px; margin-bottom:30px; font-size:1.5rem; text-align:center; border:5px solid #2c3e50;">
                    <div>PINTU BRANKAS TERBUKA JIKA:</div>
                    <div style="color:#f1c40f; margin-top:10px; padding:10px; border:2px dashed #f1c40f; border-radius:10px; background:rgba(0,0,0,0.3); font-size:1.2rem;">
                        ${ruleText}
                    </div>
                </div>
                
                <div class="subtitle" style="font-size:1.2rem; margin-bottom:15px;">Pilih barang yang ingin kamu bawa:</div>
                <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; margin-bottom:30px; padding:20px; background:#f8f9fa; border-radius:15px;">
                    ${itemsHtml}
                </div>

                <button class="run-btn" onclick="app.checkWin11()" style="padding:15px 40px; font-size:1.5rem;">🔓 COBA BUKA PINTU</button>
            `;
        };

        this.toggleItem11 = (id) => {
            if (this.g11Selected.includes(id)) {
                this.g11Selected = this.g11Selected.filter(x => x !== id);
            } else {
                this.g11Selected.push(id);
            }
            SFX.click();
            this.renderUI11();
        };

        this.checkWin11 = () => {
            let hasT1 = this.g11Selected.includes(target1.id);
            let hasT2 = this.g11Selected.includes(target2.id);
            let otherItems = this.g11Selected.filter(id => id !== target1.id && id !== target2.id).length;

            let win = false;
            
            if (this.g11Mode === 'AND') {
                if (otherItems > 0) {
                    this.showNotif("❌ Kamu membawa barang ekstra yang tidak diperlukan!");
                    this.showFeedback(false);
                    return;
                }
                win = hasT1 && hasT2;
            } else if (this.g11Mode === 'OR') {
                if (otherItems > 0) {
                    this.showNotif("❌ Kamu membawa barang ekstra yang tidak diperlukan!");
                    this.showFeedback(false);
                    return;
                }
                // XOR
                win = (hasT1 || hasT2) && !(hasT1 && hasT2);
            } else {
                // NOT AND mode (bawa selain t1 dan t2)
                if (hasT1 || hasT2) {
                    this.showNotif("❌ Kamu membawa barang yang dilarang!");
                    this.showFeedback(false);
                    return;
                }
                win = otherItems >= 2;
            }

            this.showFeedback(win);
        };

        this.renderUI11();
    },

    // ==========================================
    // GAME 12: MESIN SORTIR (Algoritma Sorting)
    // ==========================================
    initGame12() {
        // Buat 4 angka acak dari 1 sampai 99
        let nums = [];
        while(nums.length < 4) {
            let r = Math.floor(Math.random() * 99) + 1;
            if(!nums.includes(r)) nums.push(r);
        }
        
        // Pastikan tidak dalam keadaan sudah terurut
        let sortedNums = [...nums].sort((a,b) => a-b);
        if (JSON.stringify(nums) === JSON.stringify(sortedNums)) {
            nums.reverse();
        }

        this.g12Nums = nums;
        this.g12SelectedIdx = null;

        this.renderUI12 = () => {
            let boxesHtml = this.g12Nums.map((n, idx) => {
                let isSel = this.g12SelectedIdx === idx;
                return `
                    <div onclick="app.selectBox12(${idx})" style="width:80px; height:80px; display:flex; justify-content:center; align-items:center; font-size:2.5rem; font-weight:bold; color:white; background:${isSel ? '#e74c3c' : '#3498db'}; border:${isSel ? '4px solid #c0392b' : '4px solid #2980b9'}; border-radius:15px; cursor:pointer; box-shadow:0 6px 0 ${isSel ? '#c0392b' : '#2980b9'}; transition:all 0.2s; transform:${isSel ? 'translateY(5px)' : 'translateY(0)'};">
                        ${n}
                    </div>
                `;
            }).join('');

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Urutkan kotak dari yang TERKECIL ke TERBESAR!</div>
                <div class="subtitle" style="font-size:1.1rem; color:#555; margin-bottom:30px;">Klik 2 kotak secara bergantian untuk menukar posisinya (Swap).</div>
                
                <div style="background:#ecf0f1; border-bottom:10px solid #bdc3c7; padding:40px 20px; border-radius:20px; margin-bottom:30px; display:flex; justify-content:center; gap:20px;">
                    ${boxesHtml}
                </div>

                <button class="run-btn" onclick="app.checkWin12()" style="padding:15px 40px; font-size:1.5rem;">✅ KIRIM PAKET</button>
            `;
        };

        this.selectBox12 = (idx) => {
            SFX.click();
            if (this.g12SelectedIdx === null) {
                this.g12SelectedIdx = idx;
            } else {
                if (this.g12SelectedIdx === idx) {
                    this.g12SelectedIdx = null; // deselect
                } else {
                    // Swap!
                    let temp = this.g12Nums[this.g12SelectedIdx];
                    this.g12Nums[this.g12SelectedIdx] = this.g12Nums[idx];
                    this.g12Nums[idx] = temp;
                    this.g12SelectedIdx = null;
                    SFX.step(); // play a different sound for swap
                }
            }
            this.renderUI12();
        };

        this.checkWin12 = () => {
            let win = true;
            for(let i=0; i<this.g12Nums.length - 1; i++) {
                if (this.g12Nums[i] > this.g12Nums[i+1]) {
                    win = false;
                    break;
                }
            }
            this.showFeedback(win);
        };

        this.renderUI12();
    },

    // ==========================================
    // TOKO (SHOP)
    // ==========================================
    renderShop() {
        const data = loadData();
        const categories = [
            { key: 'player', title: '🚗 Kendaraan (Game 1 & 6)' },
            { key: 'target', title: '🏠 Target / Tujuan (Game 1 & 6)' },
            { key: 'robot', title: '🤖 Karakter Robot (Game 8)' },
            { key: 'battery', title: '🔋 Target Robot (Game 8)' },
            { key: 'animals', title: '🦁 Hewan Bonus (Game 3)' }
        ];

        let html = `
            <div class="gacha-container">
                <h3 style="margin-bottom:10px;">🎁 Gacha Karakter Misteri (⭐200)</h3>
                <p style="margin-bottom:20px; font-size:1.1rem; line-height:1.4;">Buka telur misteri untuk mendapatkan karakter/hewan acak!</p>
                <div>
                    <div id="gacha-egg" class="gacha-egg" onclick="app.rollGacha()">🥚</div>
                    <div id="gacha-result" class="gacha-result"></div>
                </div>
            </div>
            <h3 style="margin: 20px 0 10px 0; color: var(--primary); text-align:center;">Atau Beli Langsung:</h3>
        `;
        for (const cat of categories) {
            html += `<div class="shop-category">`;
            html += `<div class="shop-category-title">${cat.title}</div>`;
            html += `<div class="skin-grid">`;
            for (const item of SKIN_CATALOG[cat.key]) {
                const owned = data.ownedSkins[cat.key].includes(item.id);
                const isActive = data.activeSkin[cat.key] === item.id;
                let cardClass = 'skin-card';
                
                if (item.price <= 200) cardClass += ' rarity-common';
                else if (item.price <= 400) cardClass += ' rarity-rare';
                else cardClass += ' rarity-epic';

                if (owned) cardClass += ' owned';
                if (isActive) cardClass += ' active-skin';
                if (!owned) cardClass += ' locked';

                let badge = '';
                if (isActive) badge = '<div class="skin-badge active-badge">⭐ Aktif</div>';
                else if (owned) badge = '<div class="skin-badge">✅</div>';

                let priceHtml = '';
                if (item.price === 0) {
                    priceHtml = '<div class="skin-price free">Gratis</div>';
                } else if (owned) {
                    priceHtml = '<div class="skin-price free">Dimiliki</div>';
                } else {
                    priceHtml = `<div class="skin-price">⭐ ${item.price}</div>`;
                }

                const onclick = owned ? '' : `onclick="app.buySkin('${cat.key}', '${item.id}')"`;

                html += `
                    <div class="${cardClass}" ${onclick}>
                        ${badge}
                        <span class="skin-emoji">${item.emoji}</span>
                        <div class="skin-name">${item.name}</div>
                        ${priceHtml}
                    </div>
                `;
            }
            html += `</div></div>`;
        }
        this.el.shopContent.innerHTML = html;
    },

    rollGacha() {
        if (this._isRollingGacha) return;
        const data = loadData();
        if (data.totalScore < 200) {
            SFX.wrong();
            this.showNotif("❌ Koin tidak cukup! Butuh ⭐200 untuk Gacha.");
            return;
        }

        let common = [], rare = [], epic = [];
        for (const catKey in SKIN_CATALOG) {
            SKIN_CATALOG[catKey].forEach(item => {
                if (!data.ownedSkins[catKey].includes(item.id)) {
                    const obj = { category: catKey, item: item };
                    if (item.price <= 200) common.push(obj);
                    else if (item.price <= 400) rare.push(obj);
                    else epic.push(obj);
                }
            });
        }

        const totalUnowned = common.length + rare.length + epic.length;
        if (totalUnowned === 0) {
            this.showNotif("🎉 Luar biasa! Kamu sudah memiliki SEMUA karakter di toko!");
            return;
        }

        this._isRollingGacha = true;
        data.totalScore -= 200;
        this.score = data.totalScore;
        this.updateScoreDisplays();
        saveData(data);

        SFX.click();
        const egg = document.getElementById('gacha-egg');
        const result = document.getElementById('gacha-result');
        egg.classList.add('shake');
        
        setTimeout(() => {
            egg.classList.remove('shake');
            egg.style.display = 'none';
            result.style.display = 'inline-block';
            
            // Weighted RNG (60% Common, 30% Rare, 10% Epic)
            let winPool = [];
            let rarityName = 'Common';
            let color = 'white';
            const roll = Math.random() * 100;
            
            if (roll <= 60 && common.length > 0) {
                winPool = common; rarityName = 'Common'; color = '#bdc3c7';
            } else if (roll <= 90 && rare.length > 0) {
                winPool = rare; rarityName = 'Rare'; color = '#3498db';
            } else if (epic.length > 0) {
                winPool = epic; rarityName = 'Epic'; color = '#f1c40f';
            } else if (rare.length > 0) {
                winPool = rare; rarityName = 'Rare'; color = '#3498db'; // Fallback
            } else {
                winPool = common; rarityName = 'Common'; color = '#bdc3c7'; // Fallback
            }
            
            const win = winPool[Math.floor(Math.random() * winPool.length)];
            data.ownedSkins[win.category].push(win.item.id);
            saveData(data);
            
            if (rarityName === 'Epic') {
                SFX.reward(); // Extra special sound!
                document.body.classList.add('shake');
                setTimeout(() => document.body.classList.remove('shake'), 500);
                confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 }, colors: ['#f1c40f', '#f39c12', '#e67e22'] });
            } else {
                SFX.buy();
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            }
            
            result.innerHTML = `
                <div style="font-size:1.2rem; color:${color}; font-weight:bold; margin-bottom:5px;">[${rarityName}]</div>
                ${win.item.emoji}
                <div style="font-size:1.5rem; display:block; margin-top:10px; color:white; text-shadow:1px 1px 2px #333;">Dapat: ${win.item.name}</div>
            `;

            setTimeout(() => {
                this._isRollingGacha = false;
                this.renderShop();
            }, 3000);

        }, 1500);
    },

    buySkin(category, itemId) {
        const data = loadData();
        const item = SKIN_CATALOG[category].find(s => s.id === itemId);
        if (!item) return;
        if (data.ownedSkins[category].includes(itemId)) return;
        if (data.totalScore < item.price) {
            SFX.wrong();
            this.showNotif(`❌ Skor tidak cukup! Butuh ⭐${item.price}, kamu punya ⭐${data.totalScore}`);
            return;
        }
        // Beli!
        data.totalScore -= item.price;
        data.ownedSkins[category].push(itemId);
        saveData(data);
        this.score = data.totalScore;
        this.updateScoreDisplays();
        SFX.buy();
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
        this.showNotif(`🎉 Berhasil membeli ${item.emoji} ${item.name}!`);
        this.renderShop();
    },

    // ==========================================
    // LOKER (Pilih Skin Aktif)
    // ==========================================
    renderLocker() {
        const data = loadData();
        const categories = [
            { key: 'player', title: '🚗 Kendaraan Aktif' },
            { key: 'target', title: '🏠 Target Aktif' },
            { key: 'robot', title: '🤖 Karakter Robot Aktif' },
            { key: 'battery', title: '🔋 Target Robot Aktif' }
        ];

        let html = '';
        for (const cat of categories) {
            html += `<div class="shop-category">`;
            html += `<div class="shop-category-title">${cat.title}</div>`;
            html += `<div class="skin-grid">`;
            for (const item of SKIN_CATALOG[cat.key]) {
                const owned = data.ownedSkins[cat.key].includes(item.id);
                if (!owned) continue; // Hanya tampilkan yang dimiliki
                const isActive = data.activeSkin[cat.key] === item.id;
                let cardClass = 'skin-card owned';
                if (isActive) cardClass += ' active-skin';

                let badge = isActive ? '<div class="skin-badge active-badge">⭐ Aktif</div>' : '';
                let btnClass = isActive ? 'locker-select-btn selected' : 'locker-select-btn';
                let btnText = isActive ? '⭐ Dipakai' : 'Pilih';

                html += `
                    <div class="${cardClass}">
                        ${badge}
                        <span class="skin-emoji">${item.emoji}</span>
                        <div class="skin-name">${item.name}</div>
                        <button class="${btnClass}" onclick="app.selectSkin('${cat.key}', '${item.id}')">${btnText}</button>
                    </div>
                `;
            }
            html += `</div></div>`;
        }
        this.el.lockerContent.innerHTML = html;
    },

    selectSkin(category, itemId) {
        const data = loadData();
        if (!data.ownedSkins[category].includes(itemId)) return;
        data.activeSkin[category] = itemId;
        saveData(data);
        this.renderLocker();
    },

    // ==========================================
    // DAILY MISSION (Misi Harian)
    // ==========================================
    renderDaily() {
        const data = loadData();
        const today = getTodayString();
        const alreadyClaimed = data.lastDailyClaimDate === today;

        if (alreadyClaimed) {
            // Sudah diklaim hari ini
            let streakInfo = '';
            if (data.dailyStreak > 0) {
                streakInfo = `<div style="font-size:1.2rem; color:#555; margin-bottom:10px;">🔥 Streak: <b>${data.dailyStreak} hari</b> berturut-turut!</div>`;
                
                // Cek milestone berikutnya
                let nextMilestone = null;
                const allMilestones = [...STREAK_MILESTONES];
                if (data.dailyStreak >= 60) {
                    let m = 75;
                    while (m <= data.dailyStreak + 30) { allMilestones.push(m); m += 15; }
                }
                for (const ms of allMilestones) {
                    if (ms > data.dailyStreak) { nextMilestone = ms; break; }
                }
                if (nextMilestone) {
                    streakInfo += `<div style="font-size:1rem; color:#888; margin-bottom:15px;">🎯 Bonus berikutnya di hari ke-<b>${nextMilestone}</b> (+${STREAK_BONUS}⭐ bonus!)</div>`;
                }
            }

            this.el.dailyContent.innerHTML = `
                <div style="text-align:center; padding:40px 20px;">
                    <div style="font-size:5rem; margin-bottom:20px;">✅</div>
                    <div style="font-size:2rem; font-weight:700; color:var(--secondary); margin-bottom:15px;">Misi Hari Ini Selesai!</div>
                    ${streakInfo}
                    <div style="font-size:1.2rem; color:#888;">Kembali besok untuk misi baru ya! 🌙</div>
                </div>
            `;
        } else {
            // Tampilkan video hari ini
            const videoIdx = getDailyVideoIndex();
            const videoUrl = DAILY_VIDEOS[videoIdx];

            let streakInfo = '';
            if (data.dailyStreak > 0) {
                streakInfo = `<div style="font-size:1rem; color:#e17055; margin-bottom:10px;">🔥 Streak saat ini: <b>${data.dailyStreak} hari</b></div>`;
            }

            this.el.dailyContent.innerHTML = `
                <div style="text-align:center; padding:10px 20px;">
                    <div style="font-size:1.3rem; font-weight:700; color:var(--accent2); margin-bottom:10px;">🎬 Tonton Video Hari Ini!</div>
                    ${streakInfo}
                    <div id="daily-video-wrapper" style="position:relative; margin:0 auto 15px; max-width:320px; border-radius:15px; overflow:hidden; border:3px solid #ddd; aspect-ratio:9/16; background:#000;">
                        <div id="daily-play-overlay" onclick="app.startDailyVideo()" style="position:absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.5); cursor:pointer; z-index:2;">
                            <div style="font-size:5rem; filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5));">▶️</div>
                        </div>
                        <iframe id="daily-iframe" width="100%" height="100%" data-src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:none;"></iframe>
                    </div>
                    <div id="daily-timer-msg" style="font-size:1.1rem; color:#888; margin-bottom:15px;">👆 Tekan tombol play untuk mulai menonton</div>
                    <button id="daily-claim-btn" class="run-btn" onclick="app.claimDaily()" style="padding:15px 40px; font-size:1.5rem; opacity:0.4; pointer-events:none;">🎁 Klaim +20 ⭐</button>
                </div>
            `;
        }
    },

    startDailyVideo() {
        const overlay = document.getElementById('daily-play-overlay');
        const iframe = document.getElementById('daily-iframe');
        if (!overlay || !iframe) return;

        // Hide overlay and auto-play iframe
        overlay.style.display = 'none';
        iframe.src = iframe.getAttribute('data-src') + '?autoplay=1';

        // Timer 15 detik mulai DARI SINI
        let countdown = 15;
        this._dailyTimer = setInterval(() => {
            countdown--;
            const msg = document.getElementById('daily-timer-msg');
            const btn = document.getElementById('daily-claim-btn');
            if (!msg || !btn) { clearInterval(this._dailyTimer); return; }

            if (countdown <= 0) {
                clearInterval(this._dailyTimer);
                msg.innerHTML = '✅ Video selesai! Klaim hadiahmu sekarang!';
                msg.style.color = '#2ecc71';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';

                // Tambahkan tombol X di pojok video untuk stop
                const wrapper = document.getElementById('daily-video-wrapper');
                if (wrapper && !document.getElementById('daily-close-btn')) {
                    const closeBtn = document.createElement('div');
                    closeBtn.id = 'daily-close-btn';
                    closeBtn.innerHTML = '❌ Tutup Video';
                    closeBtn.style.cssText = 'position:absolute; top:10px; right:10px; background:rgba(255,255,255,0.9); padding:5px 10px; border-radius:10px; cursor:pointer; font-weight:bold; z-index:3; box-shadow:0 2px 5px rgba(0,0,0,0.3); font-size: 0.9rem;';
                    closeBtn.onclick = () => {
                        iframe.src = ''; // stop video
                        closeBtn.remove();
                    };
                    wrapper.appendChild(closeBtn);
                }

            } else {
                msg.innerHTML = `⏳ Tunggu ${countdown} detik lagi...`;
            }
        }, 1000);
    },

    claimDaily() {
        const data = loadData();
        const today = getTodayString();
        if (data.lastDailyClaimDate === today) return; // Sudah diklaim

        // Cek apakah streak berlanjut (kemarin)
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;
        
        if (data.lastDailyClaimDate === yStr) {
            data.dailyStreak += 1;
        } else {
            data.dailyStreak = 1; // Reset streak
        }

        let reward = 20;
        let bonusMsg = '';

        // Cek milestone
        if (isStreakMilestone(data.dailyStreak)) {
            reward += STREAK_BONUS;
            bonusMsg = `\n🎊 BONUS STREAK hari ke-${data.dailyStreak}: +${STREAK_BONUS}⭐ ekstra!`;
        }

        data.lastDailyClaimDate = today;
        data.totalScore += reward;
        saveData(data);
        this.score = data.totalScore;
        this.updateScoreDisplays();

        SFX.reward();
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        this.showNotif(`🎁 +${reward} ⭐ didapatkan!${bonusMsg}\n🔥 Streak: ${data.dailyStreak} hari`);
        this.renderDaily(); // Re-render untuk tampilkan "selesai"
    },

    // ==========================================
    // MULTIPLAYER LOGIC
    // ==========================================
    initMpRace() {
        const p1Emoji = getActiveSkinEmoji('player');
        const p2Emoji = getActiveSkinEmoji('player');
        const target = getActiveSkinEmoji('target');
        
        const renderPlayerUI = (playerId) => `
            <div style="font-size:2rem; margin-bottom:10px; text-align:left; width:80%;">
                <span id="p${playerId}-car" style="display:inline-block; transition:0.2s;">${playerId===1 ? p1Emoji : p2Emoji}</span> 
                <span style="float:right;">${target}</span>
            </div>
            <div style="display:flex; gap:10px;">
                <button onclick="app.mpRaceStep(${playerId})" style="padding:15px 30px; font-size:1.5rem; border-radius:15px; background:var(--primary); color:white; border:none; box-shadow:0 4px 0 #c0392b;">MAJU ➡️</button>
            </div>
        `;
        
        this.el.mpTopContent.innerHTML = renderPlayerUI(2);
        this.el.mpBottomContent.innerHTML = renderPlayerUI(1);
        
        this.mpRaceProgress = { 1: 0, 2: 0 };
    },

    mpRaceStep(player) {
        if (this.mpRaceProgress[player] >= 8) return;
        this.mpRaceProgress[player]++;
        SFX.step();
        
        const car = document.getElementById(`p${player}-car`);
        car.style.transform = `translateX(${this.mpRaceProgress[player] * 25}px)`;
        
        if (this.mpRaceProgress[player] >= 8) {
            this.mpWin(player);
        }
    },

    initMpTugOfWar() {
        this.mpTugPos = 0;
        const renderUI = (playerId) => `
            <div id="mp-question-${playerId}" style="font-size:2rem; font-weight:bold; margin-bottom:15px; color:var(--text-color);">3 + 4 = ?</div>
            <div style="display:flex; gap:15px; justify-content:center;">
                <button onclick="app.mpTugAnswer(${playerId}, true)" style="padding:15px 30px; font-size:1.5rem; background:#2ecc71; color:white; border:none; border-radius:10px;">7</button>
                <button onclick="app.mpTugAnswer(${playerId}, false)" style="padding:15px 30px; font-size:1.5rem; background:#e74c3c; color:white; border:none; border-radius:10px;">8</button>
            </div>
        `;
        
        this.el.mpTopContent.innerHTML = renderUI(2);
        this.el.mpBottomContent.innerHTML = renderUI(1);
        
        if (!document.getElementById('mp-tug-robot')) {
            const robot = document.createElement('div');
            robot.id = 'mp-tug-robot';
            robot.innerHTML = '🤖';
            robot.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); font-size:4rem; z-index:10; transition:0.3s;';
            this.el.multiplayerScreen.appendChild(robot);
        } else {
            const robot = document.getElementById('mp-tug-robot');
            robot.style.transform = `translate(-50%, -50%) translateY(0px)`;
            robot.style.display = 'block';
        }
        
        this.mpGenerateTugQuestion();
    },

    mpGenerateTugQuestion() {
        const a = Math.floor(Math.random() * 5) + 1;
        const b = Math.floor(Math.random() * 5) + 1;
        const ans = a + b;
        const fakeAns = ans + (Math.random() > 0.5 ? 1 : -1);
        
        const qText = `${a} + ${b} = ?`;
        document.getElementById('mp-question-1').innerText = qText;
        document.getElementById('mp-question-2').innerText = qText;
        
        const p1Btns = this.el.mpBottomContent.querySelectorAll('button');
        const p2Btns = this.el.mpTopContent.querySelectorAll('button');
        
        const isLeft = Math.random() > 0.5;
        p1Btns[0].innerText = isLeft ? ans : fakeAns;
        p1Btns[1].innerText = isLeft ? fakeAns : ans;
        p1Btns[0].setAttribute('onclick', `app.mpTugAnswer(1, ${isLeft})`);
        p1Btns[1].setAttribute('onclick', `app.mpTugAnswer(1, ${!isLeft})`);
        
        const isLeftP2 = Math.random() > 0.5;
        p2Btns[0].innerText = isLeftP2 ? ans : fakeAns;
        p2Btns[1].innerText = isLeftP2 ? fakeAns : ans;
        p2Btns[0].setAttribute('onclick', `app.mpTugAnswer(2, ${isLeftP2})`);
        p2Btns[1].setAttribute('onclick', `app.mpTugAnswer(2, ${!isLeftP2})`);
    },

    mpTugAnswer(player, isCorrect) {
        if (isCorrect) {
            SFX.correct();
            this.mpTugPos += (player === 1 ? 1 : -1);
        } else {
            SFX.wrong();
            this.mpTugPos += (player === 1 ? -1 : 1);
        }
        
        const robot = document.getElementById('mp-tug-robot');
        // Player 1 pulls down (+Y), Player 2 pulls up (-Y)
        robot.style.transform = `translate(-50%, -50%) translateY(${this.mpTugPos * 30}px)`;
        
        if (this.mpTugPos >= 5) {
            robot.style.display = 'none';
            this.mpWin(1);
        } else if (this.mpTugPos <= -5) {
            robot.style.display = 'none';
            this.mpWin(2);
        } else {
            this.mpGenerateTugQuestion();
        }
    },

    initMpBugSmasher() {
        this.mpBugScores = { 1: 0, 2: 0 };
        const renderUI = (playerId) => `
            <div style="font-size:1.5rem; font-weight:bold; margin-bottom:10px;">SKOR KUTU: <span id="mp-bug-score-${playerId}">0</span>/10</div>
            <div id="mp-bug-arena-${playerId}" style="position:relative; width:90%; height:200px; background:rgba(255,255,255,0.5); border-radius:10px; overflow:hidden; border:2px dashed #ccc;"></div>
            <p style="margin-top:10px; font-size:0.9rem;">Tap 🐛 (Poin +1). Jangan Tap 🐞 (Poin -1)!</p>
        `;
        
        this.el.mpTopContent.innerHTML = renderUI(2);
        this.el.mpBottomContent.innerHTML = renderUI(1);
        
        if (document.getElementById('mp-tug-robot')) {
            document.getElementById('mp-tug-robot').style.display = 'none';
        }

        this.mpBugInterval = setInterval(() => {
            if (this.el.multiplayerScreen.classList.contains('active') && this.currentMpGame === 3) {
                this.mpSpawnBug(1);
                this.mpSpawnBug(2);
            } else {
                clearInterval(this.mpBugInterval);
            }
        }, 700);
    },

    mpSpawnBug(player) {
        const arena = document.getElementById(`mp-bug-arena-${player}`);
        if (!arena) return;
        
        const bug = document.createElement('div');
        const isGood = Math.random() > 0.3; // 70% 🐛, 30% 🐞
        bug.innerHTML = isGood ? '🐛' : '🐞';
        bug.style.cssText = `
            position:absolute; 
            font-size:2.5rem; 
            left:${Math.random() * 80}%; 
            top:${Math.random() * 70}%; 
            cursor:pointer;
            user-select:none;
        `;
        
        bug.onclick = () => {
            SFX.click();
            if (isGood) {
                this.mpBugScores[player]++;
            } else {
                this.mpBugScores[player]--;
            }
            document.getElementById(`mp-bug-score-${player}`).innerText = this.mpBugScores[player];
            bug.remove();
            
            if (this.mpBugScores[player] >= 10) {
                clearInterval(this.mpBugInterval);
                this.mpWin(player);
            }
        };
        
        arena.appendChild(bug);
        setTimeout(() => { if (bug.parentNode) bug.remove(); }, 1200);
    }
};

// Inisialisasi
app.init();
