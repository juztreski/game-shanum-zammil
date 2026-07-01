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
    currentGame: 'menu', // 'menu', 'balloon', 'feed', 'music'
    isTopRotated: false,
    balloonSpeed: 2, // pixels per frame
    balloonIntervals: { top: null, bottom: null },
    foodIntervals: { top: null, bottom: null },
    activeLoops: []
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
    } else if (gameType === 'music') {
        initMusicGame();
    }
}

function clearAllGameLoops() {
    // Clear intervals
    clearInterval(state.balloonIntervals.top);
    clearInterval(state.balloonIntervals.top);
    clearInterval(state.foodIntervals.top);
    clearInterval(state.foodIntervals.bottom);
    
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
        
        // 1. Create a large mouth helper visualizer at the center bottom/top
        const mouthBox = document.createElement('div');
        mouthBox.className = 'mouth-visualizer';
        // Add a giant transparent target circle
        mouthBox.innerHTML = `
            <svg viewBox="0 0 100 100" width="120" height="120" style="opacity: 0.85; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));">
                <!-- Large glowing target circle -->
                <circle cx="50" cy="50" r="45" fill="none" stroke="${charName === 'shanum' ? 'var(--pink-dark)' : 'var(--blue-dark)'}" stroke-width="6" stroke-dasharray="10 6" />
                <circle cx="50" cy="50" r="35" fill="rgba(255, 255, 255, 0.4)" />
                <text x="50" y="55" font-family="'Fredoka One', sans-serif" font-size="14" fill="${charName === 'shanum' ? 'var(--pink-text)' : 'var(--blue-text)'}" text-anchor="middle">SUAP SINI!</text>
            </svg>
        `;
        container.appendChild(mouthBox);

        const activeFoods = [];
        const foodEmojis = ['🍎', '🍌', '🍓', '🍇', '🍉', '🍍', '🍒', '🍪', '🍩', '🧁', '🍦', '🍕'];

        function spawnFood() {
            if (state.currentGame !== 'feed') return;

            const food = document.createElement('div');
            food.className = 'food-item';
            
            // Random food selection
            food.innerText = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
            
            const containerWidth = container.clientWidth || 300;
            const xPos = Math.random() * (containerWidth - 80) + 10;
            let yPos = -80; // Start offscreen (visual top)
            
            food.style.left = `${xPos}px`;
            food.style.top = `${yPos}px`;

            // Tapping feeds the character instantly
            const feedCharacter = (e) => {
                if (e) e.preventDefault();
                if (food.dataset.eaten) return;
                food.dataset.eaten = "true";

                // Stop the physics tick for this food item first
                const idx = activeFoods.findIndex(f => f.element === food);
                if (idx > -1) activeFoods.splice(idx, 1);

                // Get exact current position relative to container
                const rectFood = food.getBoundingClientRect();
                const rectMouth = mouthBox.getBoundingClientRect();
                const rectContainer = container.getBoundingClientRect();

                const currentX = rectFood.left + rectFood.width / 2 - rectContainer.left;
                const currentY = rectFood.top + rectFood.height / 2 - rectContainer.top;

                const targetX = rectMouth.left + rectMouth.width / 2 - rectContainer.left;
                const targetY = rectMouth.top + rectMouth.height / 2 - rectContainer.top;

                // Absolute position the food statically at its current spot
                food.style.top = `${rectFood.top - rectContainer.top}px`;
                food.style.left = `${rectFood.left - rectContainer.left}px`;
                food.style.animation = 'none'; // Stop wiggle

                // Compute transitions from current location
                const deltaX = targetX - currentX;
                const deltaY = targetY - currentY;

                // Trigger smooth fly translation
                food.style.transition = 'transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s';
                food.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
                food.style.opacity = '0.5';

                setTimeout(() => {
                    synth.playEat();
                    
                    // Show "Nyam! 😋" visual text
                    const plusOne = document.createElement('div');
                    plusOne.className = 'feed-alert';
                    plusOne.innerText = 'Nyam! 😋';
                    plusOne.style.left = `${targetX - 40}px`;
                    plusOne.style.top = `${targetY - 50}px`;
                    container.appendChild(plusOne);
                    setTimeout(() => plusOne.remove(), 800);

                    // Morph character expressions
                    avatarEl.classList.add('eat');
                    updateAvatar(charName, 'eating');
                    
                    setTimeout(() => {
                        avatarEl.classList.remove('eat');
                        updateAvatar(charName, 'normal');
                    }, 800);

                    // Score logic
                    state.scores[player]++;
                    scoreEl.innerText = state.scores[player];

                    food.remove();
                }, 400);
            };

            food.addEventListener('touchstart', feedCharacter, { passive: false });
            food.addEventListener('mousedown', feedCharacter);

            container.appendChild(food);

            const foodObj = {
                element: food,
                y: yPos,
                x: xPos,
                speed: 1.0 + Math.random() * 1.5
            };
            activeFoods.push(foodObj);
        }

        // Movement ticker
        function tick() {
            if (state.currentGame !== 'feed') return;

            for (let i = activeFoods.length - 1; i >= 0; i--) {
                const f = activeFoods[i];
                f.y += f.speed;
                f.element.style.top = `${f.y}px`;

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


// Start everything when file loads
window.addEventListener('DOMContentLoaded', init);
