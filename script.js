const app = {
    currentGame: null,
    score: 0,
    currentLevel: 1,

    // DOM Elements
    el: {
        mainMenu: document.getElementById('main-menu'),
        gameScreen: document.getElementById('game-screen'),
        gameTitle: document.getElementById('game-title'),
        gameContent: document.getElementById('game-content'),
        score: document.getElementById('score'),
        feedbackOverlay: document.getElementById('feedback-overlay'),
        feedbackMessage: document.getElementById('feedback-message'),
    },

    startGame(gameId) {
        this.currentGame = gameId;
        this.currentLevel = 1;
        this.el.mainMenu.classList.remove('active');
        this.el.gameScreen.classList.add('active');
        this.loadGame();
    },

    showMainMenu() {
        this.el.gameScreen.classList.remove('active');
        this.el.mainMenu.classList.add('active');
        this.currentGame = null;
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
            this.el.gameTitle.innerText = "👾 Koding Piksel";
            this.initGame9();
        }
    },

    showFeedback(isCorrect) {
        if (isCorrect) {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            this.el.feedbackMessage.innerText = "Yey, Jawabanmu Benar! 🎉";
            this.el.feedbackMessage.style.color = "var(--primary)";
            this.score += 10;
            this.el.score.innerText = this.score;
            this.el.feedbackOverlay.classList.remove('hidden');
        } else {
            this.el.gameContent.classList.add('shake');
            setTimeout(() => this.el.gameContent.classList.remove('shake'), 500);
            
            // Optional: Show try again message without blocking
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

        const drawGrid = () => {
            let html = `<div class="grid-board">`;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    let icon = '';
                    if (x === playerPos.x && y === playerPos.y) icon = '🚗';
                    else if (x === targetPos.x && y === targetPos.y) icon = '🏠';
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
    // GAME 2: KODE WARNA (Pattern Mapping)
    // ==========================================
    initGame2() {
        const colors = [
            { icon: '🟦', val: 1 },
            { icon: '🟩', val: 2 },
            { icon: '🟥', val: 3 },
            { icon: '🟨', val: 4 }
        ];
        
        // Generate a sequence of 3 to 4 colors
        const seqLength = 4;
        let questionSeq = [];
        let answerSeq = [];
        
        for(let i=0; i<seqLength; i++) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            questionSeq.push(randomColor.icon);
            answerSeq.push(randomColor.val);
        }

        this.game2Answer = answerSeq;
        this.game2CurrentStep = 0;

        const renderDictionary = () => {
            return colors.map(c => `<div class="dict-item"><span>${c.icon}</span><span>= ${c.val}</span></div>`).join('');
        };

        this.renderGame2Question = () => {
            return questionSeq.map((icon, index) => {
                let displayVal = this.game2CurrentStep > index ? this.game2Answer[index] : '?';
                let circleColor = this.game2CurrentStep > index ? '#4cd137' : 'white';
                return `<div style="display:inline-block; text-align:center; margin: 0 10px;">
                            <div style="font-size:4rem;">${icon}</div>
                            <div style="font-size:2rem; border:3px dashed #ccc; border-radius:50%; width:60px; height:60px; line-height:54px; margin:auto; background:${circleColor}">${displayVal}</div>
                        </div>`;
            }).join('');
        };

        this.el.gameContent.innerHTML = `
            <div class="dictionary" style="justify-content: center; margin-bottom: 20px;">
                ${renderDictionary()}
            </div>
            <div class="subtitle" style="margin-bottom:20px;">Tekan angka sesuai dengan kode warnanya!</div>
            <div id="game2-q" style="margin-bottom: 40px; display:flex; justify-content:center;">
                ${this.renderGame2Question()}
            </div>
            <div class="options-container" style="justify-content: center;">
                ${colors.map(c => `<button class="option-btn" style="border: 4px solid var(--secondary); padding: 15px 30px; font-weight: bold; background: white;" onclick="app.checkAnswer2(${c.val})">${c.val}</button>`).join('')}
            </div>
        `;
    },

    checkAnswer2(val) {
        if (val === this.game2Answer[this.game2CurrentStep]) {
            this.game2CurrentStep++;
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
        const symbols = [
            { icon: '🦊', val: 1 }, { icon: '🐻', val: 2 }, 
            { icon: '🐥', val: 3 }, { icon: '🦌', val: 4 },
            { icon: '🦒', val: 5 }, { icon: '🐯', val: 6 }
        ];

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
            { icon: '▲', val: 2 },
            { icon: '◼', val: 3 },
            { icon: '●', val: 4 }
        ];
        
        const colors = [
            { name: 'Merah', code: '#e74c3c', val: 2 },
            { name: 'Biru', code: '#3498db', val: 3 },
            { name: 'Kuning', code: '#f1c40f', val: 4 }
        ];
        
        let shuffShapes = [...shapes].sort(() => 0.5 - Math.random());
        let shuffColors = [...colors].sort(() => 0.5 - Math.random());
        
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

        let options = [answer, answer + 1, answer - 1, answer + 2].filter(v => v > 0);
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
        const shapesMap = [
            { id: 'tri', empty: '△', filled: '▲', color: '#e74c3c' },
            { id: 'sqr', empty: '□', filled: '■', color: '#3498db' },
            { id: 'cir', empty: '○', filled: '●', color: '#2ecc71' },
            { id: 'str', empty: '☆', filled: '★', color: '#f1c40f' }
        ];

        this.g5Brush = null;
        
        // Generate 8 random grid items
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
            this.drawUI5();
        };

        this.paintShape5 = (idx) => {
            if(!this.g5Brush) return;
            this.g5Grid[idx].currentColor = this.g5Brush;
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
    initGame6() {
        const size = 6;
        let startPos = Math.floor(Math.random() * 2); // 0 atau 1
        let playerPos = startPos;
        let targetPos = Math.floor(Math.random() * 2) + 4; // 4 atau 5
        let loopCount = 1;
        let isRunning = false;

        const drawGrid = () => {
            let html = `<div style="display:flex; justify-content:center; gap:5px; margin-bottom:20px;">`;
            for(let i=0; i<size; i++) {
                let icon = '';
                if(i === playerPos) icon = '🚗';
                else if(i === targetPos) icon = '🏠';
                html += `<div style="width:60px; height:60px; border:2px solid #ccc; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:2.5rem; background:white;">${icon}</div>`;
            }
            html += `</div>`;
            return html;
        };

        const renderUI = () => {
            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Gunakan <b>Loop (Pengulangan)</b> agar mobil sampai rumah!</div>
                <div id="g6-grid">${drawGrid()}</div>
                <div style="background:#f0f0f0; padding:20px; border-radius:15px; display:flex; align-items:center; justify-content:center; gap:20px; width:fit-content; margin:0 auto 20px;">
                    <div style="font-size:3rem; border:3px solid #3498db; padding:10px; border-radius:10px; background:white;">➡️</div>
                    <div style="font-size:2rem; font-weight:bold;">Diulang (x)</div>
                    <div style="display:flex; align-items:center; gap:15px;">
                        <button onclick="app.changeLoop6(-1)" style="font-size:2rem; width:50px; height:50px; border-radius:50%; border:none; background:#e74c3c; color:white; cursor:pointer;">-</button>
                        <div style="font-size:3rem; font-weight:bold; width:40px; text-align:center;">${loopCount}</div>
                        <button onclick="app.changeLoop6(1)" style="font-size:2rem; width:50px; height:50px; border-radius:50%; border:none; background:#2ecc71; color:white; cursor:pointer;">+</button>
                    </div>
                </div>
                <button class="run-btn" onclick="app.runLoop6()" style="padding:15px 40px; font-size:1.5rem;">▶️ JALANKAN LOOP</button>
            `;
        };

        this.changeLoop6 = (delta) => {
            if(isRunning) return;
            loopCount += delta;
            if(loopCount < 1) loopCount = 1;
            if(loopCount > 5) loopCount = 5;
            renderUI();
        };

        this.runLoop6 = () => {
            if(isRunning) return;
            isRunning = true;
            playerPos = startPos;
            let currentStep = 0;

            const step = () => {
                if(currentStep >= loopCount) {
                    isRunning = false;
                    let isWin = playerPos === targetPos;
                    this.showFeedback(isWin);
                    if (!isWin) {
                        setTimeout(() => { playerPos = startPos; document.getElementById('g6-grid').innerHTML = drawGrid(); }, 1500);
                    }
                    return;
                }
                playerPos++;
                
                if (playerPos >= size) {
                    isRunning = false;
                    this.showFeedback(false); // nabrak ujung
                    setTimeout(() => { playerPos = startPos; document.getElementById('g6-grid').innerHTML = drawGrid(); }, 1500);
                    return;
                }

                document.getElementById('g6-grid').innerHTML = drawGrid();
                currentStep++;
                setTimeout(step, 600);
            };
            
            step();
        };

        renderUI();
    },

    // ==========================================
    // GAME 7: KONDISI CUACA (If-Else)
    // ==========================================
    initGame7() {
        const weatherTypes = [
            { id: 'hujan', emoji: '🌧️', name: 'Hujan' },
            { id: 'cerah', emoji: '☀️', name: 'Cerah' },
            { id: 'salju', emoji: '❄️', name: 'Salju' }
        ];
        const gearTypes = [
            { id: 'payung', emoji: '☂️' },
            { id: 'kacamata', emoji: '🕶️' },
            { id: 'jaket', emoji: '🧥' }
        ];

        let w1 = weatherTypes[0], w2 = weatherTypes[1];
        let g1 = gearTypes[0], g2 = gearTypes[1];
        
        // Acak
        if(Math.random() > 0.5) {
            w1 = weatherTypes[1]; w2 = weatherTypes[2];
            g1 = gearTypes[1]; g2 = gearTypes[2];
        }

        this.g7Rules = {};
        this.g7Rules[w1.id] = null;
        this.g7Rules[w2.id] = null;
        
        const renderUI = () => {
            const getGear = (wId) => {
                let g = gearTypes.find(x => x.id === this.g7Rules[wId]);
                return g ? g.emoji : '❓';
            };

            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Siapkan perlengkapan sesuai cuaca (IF-ELSE)!</div>
                <div style="background:#e8f4f8; padding:15px; border-radius:10px; border:2px dashed #b8daff; margin-bottom:20px; font-size:1.2rem; color:#004085; text-align:center;">
                    <b>ATURAN HARI INI:</b><br>
                    JIKA cuaca <b>${w1.name} ${w1.emoji}</b> pakai <b>${g1.emoji}</b>.<br>
                    JIKA cuaca <b>${w2.name} ${w2.emoji}</b> pakai <b>${g2.emoji}</b>.
                </div>
                
                <div style="display:flex; flex-direction:column; gap:20px; align-items:center; margin-bottom:30px;">
                    <!-- Aturan 1 -->
                    <div style="display:flex; align-items:center; gap:15px; background:#f8f9fa; padding:15px; border-radius:15px; border:2px solid #ddd;">
                        <span style="font-size:1.5rem; font-weight:bold;">JIKA (IF)</span>
                        <span style="font-size:3rem;">${w1.emoji}</span>
                        <span style="font-size:1.5rem; font-weight:bold;">MAKA ➡️</span>
                        <button onclick="app.toggleRule7('${w1.id}')" style="font-size:2.5rem; width:80px; height:60px; border-radius:10px; border:3px solid #ccc; cursor:pointer; background:white;">${getGear(w1.id)}</button>
                    </div>
                    
                    <!-- Aturan 2 -->
                    <div style="display:flex; align-items:center; gap:15px; background:#f8f9fa; padding:15px; border-radius:15px; border:2px solid #ddd;">
                        <span style="font-size:1.5rem; font-weight:bold;">JIKA (IF)</span>
                        <span style="font-size:3rem;">${w2.emoji}</span>
                        <span style="font-size:1.5rem; font-weight:bold;">MAKA ➡️</span>
                        <button onclick="app.toggleRule7('${w2.id}')" style="font-size:2.5rem; width:80px; height:60px; border-radius:10px; border:3px solid #ccc; cursor:pointer; background:white;">${getGear(w2.id)}</button>
                    </div>
                </div>

                <button class="run-btn" onclick="app.checkWin7()" style="padding:15px 40px; font-size:1.5rem;">✅ SIMPAN ATURAN</button>
            `;
        };

        this.toggleRule7 = (wId) => {
            const options = [null, 'payung', 'kacamata', 'jaket'];
            let idx = options.indexOf(this.g7Rules[wId]);
            idx = (idx + 1) % options.length;
            this.g7Rules[wId] = options[idx];
            renderUI();
        };

        this.checkWin7 = () => {
            if(this.g7Rules[w1.id] === g1.id && this.g7Rules[w2.id] === g2.id) {
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
        
        // Buat path yang benar (bentuk L)
        let correctSeq = [];
        for(let i=0; i < targetPos.x - startPos.x; i++) correctSeq.push('R');
        for(let i=0; i < targetPos.y - startPos.y; i++) correctSeq.push('D');
        
        // Acak sedikit urutannya agar tidak selalu R dulu baru D (tapi pastikan tetap jalan mulus)
        correctSeq.sort(() => 0.5 - Math.random());
        
        // Suntikkan 1 buah bug di indeks acak
        this.g8Seq = [...correctSeq];
        let bugIdx = Math.floor(Math.random() * this.g8Seq.length);
        let bugOptions = ['U', 'D', 'L', 'R'].filter(c => c !== this.g8Seq[bugIdx]);
        this.g8Seq[bugIdx] = bugOptions[Math.floor(Math.random() * bugOptions.length)];
        
        let isRunning = false;

        const drawGrid = (pX, pY) => {
            let html = `<div class="grid-board" style="margin:0 auto 20px;">`;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    let icon = '';
                    if (x === pX && y === pY) icon = '🤖';
                    else if (x === targetPos.x && y === targetPos.y) icon = '🔋';
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
        const tasks = [
            { name: 'PanenApel', steps: ['➡️', '⬆️', '🍎'], desc: 'Maju, Naik, lalu Petik Apel' },
            { name: 'BeriMakanKucing', steps: ['⬅️', '⬇️', '🐟'], desc: 'Kiri, Turun, lalu Beri Ikan' },
            { name: 'SiramBunga', steps: ['➡️', '➡️', '💧'], desc: 'Maju, Maju, lalu Siram Air' }
        ];
        
        let t = tasks[Math.floor(Math.random() * tasks.length)];
        this.g9Seq = [null, null, null];
        
        const renderUI = () => {
            this.el.gameContent.innerHTML = `
                <div class="subtitle" style="margin-bottom:10px;">Buat Fungsi (Resep) Baru!</div>
                <div style="background:#fff3cd; padding:15px; border-radius:10px; border:2px dashed #ffeeba; margin-bottom:20px; font-size:1.2rem; color:#856404; text-align:center;">
                    Kamu perlu membuat fungsi <b>${t.name}()</b>.<br>
                    Agar berhasil, robot harus: <b>${t.desc}</b>
                </div>
                
                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:30px; background:#f8f9fa; padding:20px; border-radius:15px; border:2px solid #ddd; flex-wrap:wrap; align-items:center;">
                    <div style="font-size:1.5rem; font-weight:bold; margin-right:10px; color:var(--primary);">${t.name}() = </div>
                    ${[0,1,2].map(i => `
                        <button onclick="app.toggleFunc9(${i})" style="font-size:2.5rem; width:70px; height:70px; border-radius:10px; border:3px dashed #ccc; cursor:pointer; background:white;">${this.g9Seq[i] || '❓'}</button>
                    `).join('')}
                </div>

                <div class="subtitle" style="font-size:1rem; color:#555; margin-bottom:20px;">Klik ❓ untuk memilih perintah!</div>
                <button class="run-btn" onclick="app.checkWin9()" style="padding:15px 40px; font-size:1.5rem;">⚙️ SIMPAN FUNGSI</button>
            `;
        };

        this.toggleFunc9 = (i) => {
            const opts = [null, '➡️', '⬅️', '⬆️', '⬇️', '🍎', '🐟', '💧'];
            let idx = opts.indexOf(this.g9Seq[i]);
            idx = (idx + 1) % opts.length;
            this.g9Seq[i] = opts[idx];
            renderUI();
        };

        this.checkWin9 = () => {
            let win = this.g9Seq[0] === t.steps[0] && this.g9Seq[1] === t.steps[1] && this.g9Seq[2] === t.steps[2];
            this.showFeedback(win);
        };

        renderUI();
    }
};
