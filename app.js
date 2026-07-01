/**
 * Dunia Bermain Shanum & Zammil
 * Highly interactive, split-screen web game designed for toddlers (under 3 years old).
 */

// --- 1. WEB AUDIO SYNTHESIZER FOR BABY-FRIENDLY SFX ---
class ToddlerSoundSynth {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Balloon Pop: Quick pitch sweep upward with noise
    playPop() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.1);
    }

    // Munch sound: Quick filtered low-frequency pulses
    playEat() {
        this.init();
        const now = this.ctx.currentTime;
        
        // Simulating 2 quick crunches
        for (let i = 0; i < 2; i++) {
            const time = now + (i * 0.08);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150 - (i * 30), time);
            osc.frequency.linearRampToValueAtTime(40, time + 0.06);

            gain.gain.setValueAtTime(0.4, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.06);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(time);
            osc.stop(time + 0.06);
        }
    }

    // Cute game start or point milestone sound
    playChime() {
        this.init();
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        
        notes.forEach((freq, idx) => {
            const time = now + (idx * 0.07);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            
            gain.gain.setValueAtTime(0.15, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(time);
            osc.stop(time + 0.25);
        });
    }

    // Egg Tap: Quick wood block / popping sound
    playWoodblock() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.05);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
    }

    // Victory Cheer: longer cute chime melody
    playCheer() {
        this.init();
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00]; // C5, E5, G5, C6, E6, G6, C7
        
        notes.forEach((freq, idx) => {
            const time = now + (idx * 0.08);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            
            gain.gain.setValueAtTime(0.2, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(time);
            osc.stop(time + 0.4);
        });
    }

    // Animal Sound: Cat Meow
    playCat() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(500, now + 0.35);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.36);
    }

    // Animal Sound: Dog Bark
    playDog() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.15);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        // Simple low pass filter to make it sound muffled
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.16);
    }

    // Animal Sound: Duck Quack
    playDuck() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(360, now + 0.1);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

        // Bandpass filter to make it nasal / quacky
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, now);
        filter.Q.setValueAtTime(3, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.13);
    }

    // Animal Sound: Frog Ribbit
    playFrog() {
        this.init();
        const now = this.ctx.currentTime;

        // Frogs croak with rapid low pulses
        for (let i = 0; i < 4; i++) {
            const time = now + (i * 0.05);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(90, time);
            osc.frequency.linearRampToValueAtTime(80, time + 0.04);

            gain.gain.setValueAtTime(0.3, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(300, time);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(time);
            osc.stop(time + 0.04);
        }
    }
}

const synth = new ToddlerSoundSynth();


// --- 2. VECTOR DRAWINGS (DYNAMIC SVGS) ---
const CHARACTERS = {
    shanum: {
        themeColor: '#FF6FA5',
        draw: (expression) => {
            let mouth = `<path d="M 40 68 Q 50 78 60 68" stroke="#8E2B52" stroke-width="4" stroke-linecap="round" fill="none" />`;
            let eyes = `
                <circle cx="35" cy="48" r="6" fill="#111" />
                <circle cx="33" cy="46" r="2" fill="#fff" />
                <circle cx="65" cy="48" r="6" fill="#111" />
                <circle cx="63" cy="46" r="2" fill="#fff" />
            `;
            let cheeks = `
                <circle cx="28" cy="58" r="7" fill="#FFB3D1" opacity="0.7" />
                <circle cx="72" cy="58" r="7" fill="#FFB3D1" opacity="0.7" />
            `;

            if (expression === 'eating') {
                mouth = `<ellipse cx="50" cy="70" rx="10" ry="8" fill="#8E2B52" />`;
                eyes = `
                    <path d="M 28 48 Q 35 40 42 48" stroke="#111" stroke-width="4" stroke-linecap="round" fill="none" />
                    <path d="M 58 48 Q 65 40 72 48" stroke="#111" stroke-width="4" stroke-linecap="round" fill="none" />
                `;
            } else if (expression === 'happy') {
                mouth = `<path d="M 38 65 Q 50 85 62 65 Z" fill="#8E2B52" />`;
                eyes = `
                    <path d="M 28 50 Q 35 42 42 50" stroke="#111" stroke-width="5" stroke-linecap="round" fill="none" />
                    <path d="M 58 50 Q 65 42 72 50" stroke="#111" stroke-width="5" stroke-linecap="round" fill="none" />
                `;
            }

            return `
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                <!-- Pigtails / Buns -->
                <circle cx="15" cy="22" r="16" fill="#4A3B32" />
                <circle cx="85" cy="22" r="16" fill="#4A3B32" />
                <!-- Pigtail ties -->
                <rect x="20" y="28" width="10" height="6" rx="3" fill="#FF6FA5" />
                <rect x="70" y="28" width="10" height="6" rx="3" fill="#FF6FA5" />
                
                <!-- Face -->
                <circle cx="50" cy="52" r="38" fill="#FFE3D1" />
                
                <!-- Hair fringe -->
                <path d="M 12 40 Q 50 18 88 40 Q 50 28 12 40 Z" fill="#4A3B32" />
                
                <!-- Headband -->
                <path d="M 20 30 Q 50 14 80 30" stroke="#FFE97F" stroke-width="6" stroke-linecap="round" fill="none" />
                <!-- Flower on Headband -->
                <circle cx="30" cy="20" r="7" fill="#FFD43B" />
                <circle cx="24" cy="20" r="5" fill="#FF5E5E" />
                <circle cx="36" cy="20" r="5" fill="#FF5E5E" />
                <circle cx="30" cy="14" r="5" fill="#FF5E5E" />
                <circle cx="30" cy="26" r="5" fill="#FF5E5E" />
                <circle cx="30" cy="20" r="3" fill="#FFF" />

                <!-- Face details -->
                ${cheeks}
                ${eyes}
                ${mouth}
            </svg>
            `;
        }
    },
    zammil: {
        themeColor: '#4DAFFF',
        draw: (expression) => {
            let mouth = `<path d="M 40 68 Q 50 78 60 68" stroke="#1B4C77" stroke-width="4" stroke-linecap="round" fill="none" />`;
            let eyes = `
                <circle cx="35" cy="48" r="6" fill="#111" />
                <circle cx="33" cy="46" r="2" fill="#fff" />
                <circle cx="65" cy="48" r="6" fill="#111" />
                <circle cx="63" cy="46" r="2" fill="#fff" />
            `;
            let cheeks = `
                <circle cx="28" cy="58" r="7" fill="#FFD49C" opacity="0.8" />
                <circle cx="72" cy="58" r="7" fill="#FFD49C" opacity="0.8" />
            `;

            if (expression === 'eating') {
                mouth = `<ellipse cx="50" cy="70" rx="10" ry="8" fill="#1B4C77" />`;
                eyes = `
                    <path d="M 28 48 Q 35 40 42 48" stroke="#111" stroke-width="4" stroke-linecap="round" fill="none" />
                    <path d="M 58 48 Q 65 40 72 48" stroke="#111" stroke-width="4" stroke-linecap="round" fill="none" />
                `;
            } else if (expression === 'happy') {
                mouth = `<path d="M 38 65 Q 50 85 62 65 Z" fill="#1B4C77" />`;
                eyes = `
                    <path d="M 28 50 Q 35 42 42 50" stroke="#111" stroke-width="5" stroke-linecap="round" fill="none" />
                    <path d="M 58 50 Q 65 42 72 50" stroke="#111" stroke-width="5" stroke-linecap="round" fill="none" />
                `;
            }

            return `
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                <!-- Dino Cap spikes (behind head) -->
                <polygon points="50,4 38,18 62,18" fill="#51CF66" />
                <polygon points="76,14 65,28 84,28" fill="#51CF66" />
                <polygon points="24,14 16,28 35,28" fill="#51CF66" />

                <!-- Face -->
                <circle cx="50" cy="54" r="38" fill="#FFE3D1" />
                
                <!-- Hair under cap -->
                <path d="M 20 42 Q 50 36 80 42" stroke="#4A3B32" stroke-width="8" stroke-linecap="round" />
                
                <!-- Dino Cap Main -->
                <path d="M 14 42 Q 50 10 86 42 Z" fill="#51CF66" />
                <!-- Cap visor -->
                <path d="M 10 42 Q 50 34 90 42 Q 80 50 20 50 Z" fill="#37B24D" />

                <!-- Face details -->
                ${cheeks}
                ${eyes}
                ${mouth}
            </svg>
            `;
        }
    }
};


// --- 3. STATE MANAGEMENT ---
const state = {
    scores: {
        top: 0,
        bottom: 0
    },
    currentGame: 'menu', // 'menu', 'balloon', 'feed', 'music', 'star', 'egg'
    isTopRotated: false,
    balloonSpeed: 2, // pixels per frame
    balloonIntervals: { top: null, bottom: null },
    foodIntervals: { top: null, bottom: null },
    starIntervals: { top: null, bottom: null },
    activeLoops: [],
    isGameOver: false
};

// UI Elements
const elStartOverlay = document.getElementById('start-overlay');
const elBtnStart = document.getElementById('btn-start');
const elBtnHome = document.getElementById('btn-home');
const elBtnRotate = document.getElementById('btn-rotate');

const elPlayerTop = document.getElementById('player-top');
const elPlayerBottom = document.getElementById('player-bottom');

const elAvatarShanum = document.getElementById('avatar-shanum');
const elAvatarZammil = document.getElementById('avatar-zammil');

const elScoreTop = document.getElementById('score-top');
const elScoreBottom = document.getElementById('score-bottom');

const elAreaTop = document.getElementById('area-top');
const elAreaBottom = document.getElementById('area-bottom');

const templateMenuTop = document.getElementById('template-menu-top');
const templateMenuBottom = document.getElementById('template-menu-bottom');


// --- 4. INITIALIZATION ---
function init() {
    // Initial avatar render (Normal Expression)
    updateAvatar('shanum', 'normal');
    updateAvatar('zammil', 'normal');

    // Click handler for Landing screen
    elBtnStart.addEventListener('click', () => {
        synth.playChime();
        elStartOverlay.classList.add('hidden');
        loadMainMenu();
    });

    // Rotation Control
    elBtnRotate.addEventListener('click', () => {
        state.isTopRotated = !state.isTopRotated;
        if (state.isTopRotated) {
            elPlayerTop.classList.add('rotated');
        } else {
            elPlayerTop.classList.remove('rotated');
        }
        synth.playPop();
    });

    // Home Button Control
    elBtnHome.addEventListener('click', () => {
        synth.playChime();
        clearAllGameLoops();
        loadMainMenu();
    });

    // Win overlays Play Again bindings
    document.querySelectorAll('.win-restart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Hide win overlays
            document.getElementById('win-top').classList.add('hidden');
            document.getElementById('win-bottom').classList.add('hidden');
            state.isGameOver = false;
            synth.playChime();
            loadMainMenu();
        });
    });
}

function updateAvatar(character, expression) {
    if (character === 'shanum') {
        elAvatarShanum.innerHTML = CHARACTERS.shanum.draw(expression);
    } else if (character === 'zammil') {
        elAvatarZammil.innerHTML = CHARACTERS.zammil.draw(expression);
    }
}

function loadMainMenu() {
    state.currentGame = 'menu';
    elBtnHome.classList.add('hidden');

    // Reset scores
    state.scores.top = 0;
    state.scores.bottom = 0;
    elScoreTop.innerText = 0;
    elScoreBottom.innerText = 0;

    // Load template menus
    elAreaTop.innerHTML = '';
    elAreaTop.appendChild(templateMenuTop.content.cloneNode(true));

    elAreaBottom.innerHTML = '';
    elAreaBottom.appendChild(templateMenuBottom.content.cloneNode(true));

    // Bind game buttons
    const bindMenuButtons = (area, player) => {
        area.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const gameType = btn.getAttribute('data-game');
                startGame(gameType);
            });
        });
    };

    bindMenuButtons(elAreaTop, 'top');
    bindMenuButtons(elAreaBottom, 'bottom');
}

function startGame(gameType) {
    state.currentGame = gameType;
    elBtnHome.classList.remove('hidden');
    synth.playChime();

    // Clear main spaces
    elAreaTop.innerHTML = '';
    elAreaBottom.innerHTML = '';

    if (gameType === 'balloon') {
        initBalloonGame();
    } else if (gameType === 'feed') {
        initFeedingGame();
    } else if (gameType === 'star') {
        initStarGame();
    } else if (gameType === 'egg') {
        initEggGame();
    } else if (gameType === 'music') {
        initMusicGame();
    }
}

function clearAllGameLoops() {
    // Clear intervals
    clearInterval(state.balloonIntervals.top);
    clearInterval(state.balloonIntervals.bottom);
    clearInterval(state.foodIntervals.top);
    clearInterval(state.foodIntervals.bottom);
    clearInterval(state.starIntervals.top);
    clearInterval(state.starIntervals.bottom);
    
    // Cancel requestAnimationFrame loops
    state.activeLoops.forEach(cancelAnimationFrame);
    state.activeLoops = [];
}

// Add tiny star burst particle effect on click/touch
function createTapExplosion(x, y, container, colors = ['#FFF', '#FFE97F', '#FFB3D1', '#B3DDFF']) {
    const particleCount = 10;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random style setup
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        // Positioning
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Explosion vectors
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * 60;
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        container.appendChild(particle);

        // Cleanup
        setTimeout(() => particle.remove(), 500);
    }
}


// --- 5. MINI-GAME 1: TEPOK BALON (BALLOON POP) ---
function initBalloonGame() {
    const setupBalloonArea = (container, player, avatarEl, scoreEl, charName) => {
        // Floating loop using requestAnimationFrame for smoothness
        const activeBalloons = [];
        
        function spawnBalloon() {
            if (state.currentGame !== 'balloon') return;

            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            
            // Random balloon styling
            const colorList = ['var(--color-red)', 'var(--color-yellow)', 'var(--color-green)', 'var(--color-blue)', 'var(--color-orange)', 'var(--color-purple)'];
            const color = colorList[Math.floor(Math.random() * colorList.length)];
            balloon.style.backgroundColor = color;
            
            // Custom highlight
            const highlight = document.createElement('div');
            highlight.className = 'balloon-highlight';
            balloon.appendChild(highlight);

            // Size variation
            const size = 65 + Math.random() * 25;
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.25}px`;

            // Position
            const containerWidth = container.clientWidth || 300;
            const xPos = Math.random() * (containerWidth - size - 20) + 10;
            
            balloon.style.left = `${xPos}px`;
            
            // Set starting point (at the bottom)
            let yPos = container.clientHeight + 100;
            balloon.style.top = `${yPos}px`;

            // Add tapping handler (very large collision box)
            const handlePopTrigger = (e) => {
                if (e) e.preventDefault();
                const rect = balloon.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const popX = rect.left + rect.width / 2 - containerRect.left;
                const popY = rect.top + rect.height / 2 - containerRect.top;
                pop(balloon, popX, popY);
            };

            balloon.addEventListener('touchstart', handlePopTrigger, { passive: false });
            balloon.addEventListener('mousedown', handlePopTrigger);

            function pop(el, popX, popY) {
                if (el.dataset.popped) return;
                el.dataset.popped = "true";
                
                synth.playPop();
                createTapExplosion(popX, popY, container, [color, '#FFF']);
                
                // Animate character
                avatarEl.classList.add('dance');
                updateAvatar(charName, 'happy');
                setTimeout(() => {
                    avatarEl.classList.remove('dance');
                    updateAvatar(charName, 'normal');
                }, 600);

                // Score increment
                state.scores[player]++;
                scoreEl.innerText = state.scores[player];
                checkWinCondition(player);

                // Remove from DOM
                el.remove();
                
                // Remove from tracking array
                const idx = activeBalloons.findIndex(b => b.element === el);
                if (idx > -1) activeBalloons.splice(idx, 1);
            }

            container.appendChild(balloon);
            activeBalloons.push({
                element: balloon,
                y: yPos,
                size: size,
                speed: 1.5 + Math.random() * 2
            });
        }

        // Main animation tick
        function tick() {
            if (state.currentGame !== 'balloon') return;

            for (let i = activeBalloons.length - 1; i >= 0; i--) {
                const b = activeBalloons[i];
                // Move visually "up"
                b.y -= b.speed;
                b.element.style.top = `${b.y}px`;

                // Boundary check: if it goes off top screen
                if (b.y < -150) {
                    b.element.remove();
                    activeBalloons.splice(i, 1);
                }
            }

            const loopId = requestAnimationFrame(tick);
            state.activeLoops.push(loopId);
        }

        // Spawn balloon every 1.2s
        const spawnInterval = setInterval(spawnBalloon, 1200);
        if (player === 'top') state.balloonIntervals.top = spawnInterval;
        else state.balloonIntervals.bottom = spawnInterval;

        // Kick off first spawner and the render loop
        spawnBalloon();
        tick();
    };

    setupBalloonArea(elAreaTop, 'top', elAvatarShanum, elScoreTop, 'shanum');
    setupBalloonArea(elAreaBottom, 'bottom', elAvatarZammil, elScoreBottom, 'zammil');
}


// --- 6. MINI-GAME 2: NYAM NYAM (FEED THE CHARACTERS) ---
function initFeedingGame() {
    const setupFeedingArea = (container, player, avatarEl, scoreEl, charName) => {
        
        // 1. Create a draggable catcher-avatar of the character
        const catcher = document.createElement('div');
        catcher.className = 'catcher-avatar';
        catcher.style.left = 'calc(50% - 45px)'; // Initial horizontal center
        container.appendChild(catcher);

        const updateCatcherAvatar = (expression) => {
            catcher.innerHTML = CHARACTERS[charName].draw(expression);
        };
        updateCatcherAvatar('normal');

        const activeFoods = [];
        const foodEmojis = ['🍎', '🍌', '🍓', '🍇', '🍉', '🍍', '🍒', '🍪', '🍩', '🧁', '🍦', '🍕'];

        // Dragging state variables
        let isDragging = false;
        const catcherWidth = 90;
        let catcherCenterX = (container.clientWidth || 300) / 2;

        // Pointer event handlers for draggable character
        const onPointerDown = (e) => {
            isDragging = true;
            catcher.setPointerCapture(e.pointerId);
            updatePosition(e);
        };

        const onPointerMove = (e) => {
            if (!isDragging) return;
            updatePosition(e);
        };

        const onPointerUp = (e) => {
            if (isDragging) {
                isDragging = false;
                catcher.releasePointerCapture(e.pointerId);
            }
        };

        const updatePosition = (e) => {
            const rectContainer = container.getBoundingClientRect();
            let relativeX;

            // Handle horizontal coordinate flip if top panel is rotated 180 degrees
            if (player === 'top' && state.isTopRotated) {
                relativeX = rectContainer.right - e.clientX;
            } else {
                relativeX = e.clientX - rectContainer.left;
            }

            const halfWidth = catcherWidth / 2;
            let leftVal = relativeX - halfWidth;
            const maxLeft = rectContainer.width - catcherWidth;
            if (leftVal < 0) leftVal = 0;
            if (leftVal > maxLeft) leftVal = maxLeft;

            catcher.style.left = `${leftVal}px`;
            catcherCenterX = leftVal + halfWidth;
        };

        catcher.addEventListener('pointerdown', onPointerDown);
        catcher.addEventListener('pointermove', onPointerMove);
        catcher.addEventListener('pointerup', onPointerUp);
        catcher.addEventListener('pointercancel', onPointerUp);

        function spawnFood() {
            if (state.currentGame !== 'feed' || state.isGameOver) return;

            const food = document.createElement('div');
            food.className = 'food-item';
            
            // Random food selection
            food.innerText = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
            
            const containerWidth = container.clientWidth || 300;
            const xPos = Math.random() * (containerWidth - 80) + 10;
            let yPos = -80; // Start offscreen
            
            food.style.left = `${xPos}px`;
            food.style.top = `${yPos}px`;

            container.appendChild(food);

            const foodObj = {
                element: food,
                y: yPos,
                x: xPos,
                speed: 1.2 + Math.random() * 1.8
            };
            activeFoods.push(foodObj);
        }

        // Movement ticker & Collision loop
        function tick() {
            if (state.currentGame !== 'feed' || state.isGameOver) return;

            for (let i = activeFoods.length - 1; i >= 0; i--) {
                const f = activeFoods[i];
                f.y += f.speed;
                f.element.style.top = `${f.y}px`;

                // Calculate vertical and horizontal bounds for collision
                const foodCenterX = f.x + 30;
                const catcherTop = container.clientHeight - 110;
                const catcherBottom = container.clientHeight - 10;

                // Check if food coordinates overlap with catcher center
                if (f.y >= catcherTop && f.y <= catcherBottom) {
                    const dist = Math.abs(foodCenterX - catcherCenterX);
                    if (dist < 55) {
                        // Collided! Trigger eat action
                        synth.playEat();

                        // Show visual "Nyam!" alert above the catcher
                        const plusOne = document.createElement('div');
                        plusOne.className = 'feed-alert';
                        plusOne.innerText = 'Nyam! 😋';
                        plusOne.style.left = `${catcherCenterX - 45}px`;
                        plusOne.style.top = `${container.clientHeight - 145}px`;
                        container.appendChild(plusOne);
                        setTimeout(() => plusOne.remove(), 800);

                        // Morph catcher facial expressions & animate bounce
                        catcher.classList.add('eat');
                        updateCatcherAvatar('eating');

                        avatarEl.classList.add('eat');
                        updateAvatar(charName, 'eating');
                        
                        setTimeout(() => {
                            catcher.classList.remove('eat');
                            updateCatcherAvatar('normal');
                            avatarEl.classList.remove('eat');
                            updateAvatar(charName, 'normal');
                        }, 800);

                        // Score logic & check win
                        state.scores[player]++;
                        scoreEl.innerText = state.scores[player];
                        checkWinCondition(player);

                        // Cleanup food element
                        f.element.remove();
                        activeFoods.splice(i, 1);
                        continue;
                    }
                }

                // If food falls past the screen limit, remove it
                if (f.y > container.clientHeight + 100) {
                    f.element.remove();
                    activeFoods.splice(i, 1);
                }
            }

            const loopId = requestAnimationFrame(tick);
            state.activeLoops.push(loopId);
        }

        const spawnInterval = setInterval(spawnFood, 1500);
        if (player === 'top') state.foodIntervals.top = spawnInterval;
        else state.foodIntervals.bottom = spawnInterval;

        spawnFood();
        tick();
    };

    setupFeedingArea(elAreaTop, 'top', elAvatarShanum, elScoreTop, 'shanum');
    setupFeedingArea(elAreaBottom, 'bottom', elAvatarZammil, elScoreBottom, 'zammil');
}


// --- 7. MINI-GAME 3: SUARA HEWAN & DANCE (SOUNDBOARD) ---
function initMusicGame() {
    const setupMusicArea = (container, player, avatarEl, charName) => {
        const grid = document.createElement('div');
        grid.className = 'music-grid';

        const keys = [
            { emoji: '🐱', label: 'Kucing', colorClass: 'key-1', action: () => synth.playCat() },
            { emoji: '🐶', label: 'Anjing', colorClass: 'key-2', action: () => synth.playDog() },
            { emoji: '🦆', label: 'Bebek', colorClass: 'key-3', action: () => synth.playDuck() },
            { emoji: '🐸', label: 'Katak', colorClass: 'key-4', action: () => synth.playFrog() }
        ];

        keys.forEach((keyData, idx) => {
            const key = document.createElement('button');
            key.className = `music-key ${keyData.colorClass}`;
            key.innerHTML = `
                <span class="music-emoji">${keyData.emoji}</span>
                <span>${keyData.label}</span>
            `;

            const triggerKey = (e) => {
                if (e) e.preventDefault();
                keyData.action();

                // Trigger tap sparks
                const rect = key.getBoundingClientRect();
                const rectContainer = container.getBoundingClientRect();
                const clickX = rect.left + rect.width/2 - rectContainer.left;
                const clickY = rect.top + rect.height/2 - rectContainer.top;
                createTapExplosion(clickX, clickY, container);

                // Score + Check Win
                state.scores[player]++;
                const pScoreEl = player === 'top' ? elScoreTop : elScoreBottom;
                pScoreEl.innerText = state.scores[player];
                checkWinCondition(player);

                // Dance character
                avatarEl.classList.add('dance');
                updateAvatar(charName, 'happy');
                
                setTimeout(() => {
                    avatarEl.classList.remove('dance');
                    updateAvatar(charName, 'normal');
                }, 750);
            };

            key.addEventListener('touchstart', triggerKey, { passive: false });
            key.addEventListener('mousedown', triggerKey);

            grid.appendChild(key);
        });

        container.appendChild(grid);
    };

    setupMusicArea(elAreaTop, 'top', elAvatarShanum, 'shanum');
    setupMusicArea(elAreaBottom, 'bottom', elAvatarZammil, 'zammil');
}


// --- 8. GLOBAL WIN STATE & CONFETTI CHANGER ---
function checkWinCondition(player) {
    if (state.isGameOver) return;
    
    if (state.scores[player] >= 30) {
        state.isGameOver = true;
        clearAllGameLoops();
        
        synth.playCheer();
        
        const winId = player === 'top' ? 'win-top' : 'win-bottom';
        const winOverlay = document.getElementById(winId);
        if (winOverlay) {
            winOverlay.classList.remove('hidden');
        }
        
        const winArea = player === 'top' ? elAreaTop : elAreaBottom;
        let confettiTicks = 0;
        const confettiInterval = setInterval(() => {
            if (confettiTicks++ > 25) {
                clearInterval(confettiInterval);
                return;
            }
            const containerWidth = winArea.clientWidth || 300;
            const containerHeight = winArea.clientHeight || 300;
            const x = Math.random() * containerWidth;
            const y = Math.random() * containerHeight;
            createTapExplosion(x, y, winArea, ['#FF5E5E', '#FFD43B', '#51CF66', '#339AF0', '#BE4BDB']);
        }, 150);
    }
}


// --- 9. MINI-GAME 4: TANGKAP BINTANG (CATCH THE STAR) ---
function initStarGame() {
    const setupStarArea = (container, player, avatarEl, scoreEl, charName) => {
        const activeStars = [];

        const drawSmilingStar = () => {
            return `
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill="#FFD43B" stroke="#F59F00" stroke-width="4" stroke-linejoin="round" />
                <circle cx="38" cy="45" r="4" fill="#333" />
                <circle cx="62" cy="45" r="4" fill="#333" />
                <circle cx="30" cy="52" r="5" fill="#FF8787" opacity="0.6" />
                <circle cx="70" cy="52" r="5" fill="#FF8787" opacity="0.6" />
                <path d="M 44 55 Q 50 60 56 55" stroke="#333" stroke-width="3" stroke-linecap="round" fill="none" />
            </svg>
            `;
        };

        function spawnStar() {
            if (state.currentGame !== 'star' || state.isGameOver) return;

            if (Math.random() > 0.4) {
                const cloud = document.createElement('div');
                cloud.className = 'cloud-item';
                cloud.innerText = '☁️';
                const cWidth = container.clientWidth || 300;
                cloud.style.left = `${Math.random() * (cWidth - 60)}px`;
                cloud.style.top = `${Math.random() * (container.clientHeight - 80) + 10}px`;
                container.appendChild(cloud);
                setTimeout(() => cloud.remove(), 2500);
            }

            const star = document.createElement('div');
            star.className = 'star-item';
            star.innerHTML = drawSmilingStar();

            const cWidth = container.clientWidth || 300;
            const cHeight = container.clientHeight || 300;
            const xPos = Math.random() * (cWidth - 80) + 10;
            const yPos = Math.random() * (cHeight - 120) + 40;

            star.style.left = `${xPos}px`;
            star.style.top = `${yPos}px`;

            star.style.transform = 'scale(0)';
            star.style.opacity = '0';
            container.appendChild(star);

            setTimeout(() => {
                star.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s';
                star.style.transform = 'scale(1)';
                star.style.opacity = '1';
            }, 50);

            const handleStarTap = (e) => {
                if (e) e.preventDefault();
                if (star.dataset.caught) return;
                star.dataset.caught = "true";

                synth.playPop();

                const rect = star.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const popX = rect.left + rect.width/2 - containerRect.left;
                const popY = rect.top + rect.height/2 - containerRect.top;
                createTapExplosion(popX, popY, container, ['#FFD43B', '#FFF']);

                star.style.transition = 'transform 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity 0.3s';
                star.style.transform = 'scale(0) rotate(180deg)';
                star.style.opacity = '0';

                state.scores[player]++;
                scoreEl.innerText = state.scores[player];
                checkWinCondition(player);

                avatarEl.classList.add('dance');
                updateAvatar(charName, 'happy');
                setTimeout(() => {
                    avatarEl.classList.remove('dance');
                    updateAvatar(charName, 'normal');
                }, 600);

                setTimeout(() => star.remove(), 400);

                const idx = activeStars.indexOf(star);
                if (idx > -1) activeStars.splice(idx, 1);
            };

            star.addEventListener('touchstart', handleStarTap, { passive: false });
            star.addEventListener('mousedown', handleStarTap);

            setTimeout(() => {
                if (star.dataset.caught) return;
                star.style.transition = 'transform 0.3s ease, opacity 0.3s';
                star.style.transform = 'scale(0)';
                star.style.opacity = '0';
                setTimeout(() => star.remove(), 300);
                const idx = activeStars.indexOf(star);
                if (idx > -1) activeStars.splice(idx, 1);
            }, 2000);

            activeStars.push(star);
        }

        const spawnInterval = setInterval(spawnStar, 1200);
        if (player === 'top') state.starIntervals.top = spawnInterval;
        else state.starIntervals.bottom = spawnInterval;

        spawnStar();
    };

    setupStarArea(elAreaTop, 'top', elAvatarShanum, elScoreTop, 'shanum');
    setupStarArea(elAreaBottom, 'bottom', elAvatarZammil, elScoreBottom, 'zammil');
}


// --- 10. MINI-GAME 5: KETUK TELUR (DINO EGG) ---
function initEggGame() {
    const setupEggArea = (container, player, avatarEl, scoreEl, charName) => {
        let tapCount = 0;
        let maxTaps = 5;
        let isHatching = false;

        const drawEggSVG = (crackLevel, hatched) => {
            let eggColor = charName === 'shanum' ? 'url(#pink-egg-grad)' : 'url(#blue-egg-grad)';
            let spots = charName === 'shanum' 
                ? `<ellipse cx="40" cy="50" rx="8" ry="6" fill="#F06595" opacity="0.5"/>
                   <ellipse cx="65" cy="80" rx="6" ry="5" fill="#F06595" opacity="0.5"/>` 
                : `<ellipse cx="40" cy="60" rx="9" ry="7" fill="#1C7ED6" opacity="0.4"/>
                   <ellipse cx="60" cy="80" rx="7" ry="5" fill="#1C7ED6" opacity="0.4"/>`;

            let cracks = '';
            if (crackLevel >= 2) {
                cracks += `<path d="M 50 20 L 52 35 L 45 42 M 52 35 L 60 38" stroke="#495057" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
            }
            if (crackLevel >= 4) {
                cracks += `<path d="M 45 42 L 55 58 L 38 65 M 55 58 L 65 52 L 72 65" stroke="#495057" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
            }

            if (hatched) {
                let babySVG = '';
                if (charName === 'shanum') {
                    babySVG = `
                        <circle cx="50" cy="45" r="28" fill="#FFE066" />
                        <path d="M 38 42 Q 42 38 46 42" stroke="#333" stroke-width="3" stroke-linecap="round" fill="none"/>
                        <path d="M 54 42 Q 58 38 62 42" stroke="#333" stroke-width="3" stroke-linecap="round" fill="none"/>
                        <polygon points="50,45 44,52 56,52" fill="#FF922B" />
                        <circle cx="34" cy="50" r="4" fill="#FF8787" opacity="0.7"/>
                        <circle cx="66" cy="50" r="4" fill="#FF8787" opacity="0.7"/>
                        <path d="M 50 17 Q 53 10 50 5 Q 47 10 50 17" fill="#FFE066" />
                    `;
                } else {
                    babySVG = `
                        <circle cx="50" cy="45" r="28" fill="#51CF66" />
                        <polygon points="50,17 46,6 54,6" fill="#37B24D" />
                        <polygon points="28,26 20,20 28,34" fill="#37B24D" />
                        <polygon points="72,26 80,20 72,34" fill="#37B24D" />
                        <circle cx="38" cy="42" r="4" fill="#111" />
                        <circle cx="36" cy="40" r="1" fill="#fff" />
                        <circle cx="62" cy="42" r="4" fill="#111" />
                        <circle cx="60" cy="40" r="1" fill="#fff" />
                        <path d="M 40 52 Q 50 62 60 52" stroke="#2B8A3E" stroke-width="3" stroke-linecap="round" fill="none" />
                        <circle cx="32" cy="48" r="3" fill="#FF8787" opacity="0.7" />
                        <circle cx="68" cy="48" r="3" fill="#FF8787" opacity="0.7" />
                    `;
                }

                return `
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <defs>
                        <linearGradient id="pink-egg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#FFF0F6" />
                            <stop offset="100%" stop-color="#FAA2C1" />
                        </linearGradient>
                        <linearGradient id="blue-egg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#E7F5FF" />
                            <stop offset="100%" stop-color="#A5D8FF" />
                        </linearGradient>
                    </defs>
                    <g style="transform-origin: 50% 50%; animation: pop-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;">
                        ${babySVG}
                    </g>
                    <path d="M 15 65 Q 12 78 50 92 Q 88 78 85 65 L 75 58 L 65 65 L 50 55 L 35 65 L 25 58 Z" fill="${charName === 'shanum' ? 'var(--pink-mid)' : 'var(--blue-mid)'}" stroke="#495057" stroke-width="2" />
                </svg>
                `;
            }

            return `
            <svg viewBox="0 0 100 120" width="100%" height="100%">
                <defs>
                    <linearGradient id="pink-egg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#FFF0F6" />
                        <stop offset="100%" stop-color="#FAA2C1" />
                    </linearGradient>
                    <linearGradient id="blue-egg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#E7F5FF" />
                        <stop offset="100%" stop-color="#A5D8FF" />
                    </linearGradient>
                </defs>
                <path d="M 50 5 C 15 5 15 115 50 115 C 85 115 85 5 50 5 Z" fill="${eggColor}" stroke="#ADB5BD" stroke-width="2" />
                ${spots}
                ${cracks}
            </svg>
            `;
        };

        const eggContainer = document.createElement('div');
        eggContainer.className = 'egg-container';
        
        const eggSprite = document.createElement('div');
        eggSprite.className = 'egg-sprite';
        eggSprite.innerHTML = drawEggSVG(0, false);
        eggContainer.appendChild(eggSprite);

        const eggHint = document.createElement('div');
        eggHint.className = 'egg-hint';
        eggHint.innerText = 'Ketok 5 kali! 🥚';
        eggContainer.appendChild(eggHint);

        container.appendChild(eggContainer);

        const triggerEggTap = (e) => {
            if (e) e.preventDefault();
            if (isHatching || state.isGameOver) return;

            tapCount++;
            synth.playWoodblock();

            eggContainer.classList.add('shake');
            setTimeout(() => eggContainer.classList.remove('shake'), 200);

            const rect = eggSprite.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const popX = rect.left + rect.width / 2 - containerRect.left;
            const popY = rect.top + rect.height / 2 - containerRect.top;
            createTapExplosion(popX, popY, container, ['#FFF', '#E599F7', '#FFD43B']);

            eggSprite.innerHTML = drawEggSVG(tapCount, false);

            if (tapCount >= maxTaps) {
                isHatching = true;
                eggHint.innerText = 'Hore, Menetas! 🐣🦖';
                
                if (charName === 'shanum') {
                    synth.playDuck();
                } else {
                    synth.playDog();
                }
                
                eggSprite.innerHTML = drawEggSVG(tapCount, true);
                createTapExplosion(popX, popY - 30, container, ['#FFD43B', '#51CF66', '#FF6B6B', '#4DAFFF']);

                state.scores[player] += 5;
                scoreEl.innerText = state.scores[player];
                checkWinCondition(player);

                avatarEl.classList.add('dance');
                updateAvatar(charName, 'happy');
                
                setTimeout(() => {
                    avatarEl.classList.remove('dance');
                    updateAvatar(charName, 'normal');
                    
                    if (state.currentGame === 'egg' && !state.isGameOver) {
                        eggContainer.remove();
                        setupEggArea(container, player, avatarEl, scoreEl, charName);
                    }
                }, 2000);
            } else {
                eggHint.innerText = `Ketok ${maxTaps - tapCount} kali lagi! 🥚`;
            }
        };

        eggContainer.addEventListener('touchstart', triggerEggTap, { passive: false });
        eggContainer.addEventListener('mousedown', triggerEggTap);
    };

    setupEggArea(elAreaTop, 'top', elAvatarShanum, elScoreTop, 'shanum');
    setupEggArea(elAreaBottom, 'bottom', elAvatarZammil, elScoreBottom, 'zammil');
}


// Start everything when file loads
window.addEventListener('DOMContentLoaded', init);
