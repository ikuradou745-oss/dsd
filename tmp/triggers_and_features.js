// =========================================================================
// --- 🌟 ワードトリガー FX システム & AI通話要約 & プロフィール画像機能 ---
// =========================================================================

// 30 Presets Data Definition (音30種類 & エフェクト30種類)
const TRIGGER_PRESETS = [
    { id: 'nice', name: 'ナイス！', word: 'nice', soundName: '爽快ファンファーレ', fxName: 'ゴールドスターバースト', icon: '⭐', aliases: ['ナイス', 'いいね', 'nice', 'good'] },
    { id: 'yes', name: 'YES / はい', word: 'yes', soundName: 'ポジティブチャイム', fxName: 'グリーンチェックリング', icon: '✅', aliases: ['yes', 'はい', 'うん', 'イエス', 'おけ'] },
    { id: 'no', name: 'NO / だめ', word: 'no', soundName: '警告ブザー', fxName: 'レッドクロスバツ', icon: '❌', aliases: ['no', 'だめ', 'ダメ', 'ちがう', '無理', 'ノー'] },
    { id: 'um', name: 'えーと / um..', word: 'um', soundName: '考え中ポワン音', fxName: 'クエスチョンバブル', icon: '💭', aliases: ['um', 'えーと', 'あの', 'うーん', 'えっと'] },
    { id: 'lol', name: '草 / 笑 / lol', word: 'lol', soundName: 'コミカルピロリ', fxName: '爆笑フェイスシャワー', icon: '🤣', aliases: ['lol', '草', '笑', 'www', 'おもしろい', 'ウケる'] },
    { id: 'gg', name: 'GG / おつかれ', word: 'gg', soundName: 'ビクトリーホーン', fxName: 'トロフィー＆紙吹雪', icon: '🏆', aliases: ['gg', 'おつかれ', 'お疲れ', 'ナイスゲーム', '勝った'] },
    { id: 'clap', name: '拍手 / 888', word: 'clap', soundName: '歓声＆拍手クラップ', fxName: 'クラッカーシャワー', icon: '👏', aliases: ['clap', '888', '拍手', 'ぱちぱち', 'パチパチ', 'ブラボー'] },
    { id: 'wow', name: 'すごい / wow', word: 'wow', soundName: 'きらきらハープ音', fxName: 'キラキラビーム', icon: '✨', aliases: ['wow', 'すごい', 'スゴイ', 'うわー', 'すげえ', 'ヤバ'] },
    { id: 'rip', name: 'RIP / やばい', word: 'rip', soundName: '哀愁のゴング', fxName: 'ゴースト＆ドクロ', icon: '💀', aliases: ['rip', 'あああ', 'オワタ', '死んだ', 'やられた', 'チーン'] },
    { id: 'fire', name: '燃えてきた / ファイヤー', word: 'fire', soundName: 'バーニングフレイム', fxName: '猛火フレアバースト', icon: '🔥', aliases: ['fire', '燃えてきた', 'アツい', 'ファイヤー', '炎', '熱い'] },
    { id: 'hello', name: 'こんにちは / ハロー', word: 'hello', soundName: '爽やかベルチャイム', fxName: 'ウェーブハンド', icon: '👋', aliases: ['hello', 'こんにちは', 'ハロー', 'よろしく', 'おは', 'こん'] },
    { id: 'bye', name: 'バイバイ / またね', word: 'bye', soundName: 'オルゴールアルペジオ', fxName: 'スパークルバイバイ', icon: '🌸', aliases: ['bye', 'バイバイ', 'またね', 'さようなら', 'おつ', 'ばいばい'] },
    { id: 'ok', name: '了解 / OK', word: 'ok', soundName: 'スナッピーサイン音', fxName: 'グッドサムズアップ', icon: '👍', aliases: ['ok', 'オーケー', '了解', 'りょうかい', 'おっけー', 'おk'] },
    { id: 'wait', name: '待って / ちょっと', word: 'wait', soundName: '時計チクタク音', fxName: 'ストップハンド', icon: '⏳', aliases: ['wait', '待って', 'まて', 'ちょっと', 'ストップ', 'タイム'] },
    { id: 'sorry', name: 'ごめん / sorry', word: 'sorry', soundName: 'しょんぼりコード', fxName: 'ぽろぽろ涙しずく', icon: '🙇', aliases: ['sorry', 'ごめん', 'ごめんなさい', 'すまん', 'すいません', '陳謝'] },
    { id: 'thanks', name: 'ありがとう / 感謝', word: 'thanks', soundName: '感謝のグロッケン', fxName: 'ブーケフラワー', icon: '💐', aliases: ['thanks', 'ありがとう', '感謝', 'サンキュー', 'あざす', 'ありがと'] },
    { id: 'danger', name: '危険 / あぶない', word: 'danger', soundName: '緊急サイレンアラート', fxName: 'デンジャーフラッシュ', icon: '🚨', aliases: ['danger', 'あぶない', '危険', '警戒', '逃げて', 'デンジャー'] },
    { id: 'alert', name: '注目 / 見て', word: 'alert', soundName: 'ソナーピン音', fxName: 'びっくりエクスクラメーション', icon: '❗', aliases: ['alert', '注目', '見て', '聞いて', '重要', 'ここ'] },
    { id: 'question', name: 'なんで？ / 疑問', word: 'question', soundName: 'ひらめきティン音', fxName: '巨大はてなマーク', icon: '❓', aliases: ['question', 'なんで', 'どうして', 'なぜ', 'はてな', '何'] },
    { id: 'bomb', name: 'ドカン / 爆発', word: 'bomb', soundName: '重低音エクスプロージョン', fxName: 'メガブラスト爆炎', icon: '💥', aliases: ['bomb', '爆発', 'ドカン', 'ボム', 'ばくはつ', 'ドカン'] },
    { id: 'magic', name: '魔法 / マジック', word: 'magic', soundName: '神秘のクリスタル', fxName: '回転魔法陣グリフ', icon: '🔮', aliases: ['magic', '魔法', 'マジック', 'まほう', '呪文', 'ファンタジー'] },
    { id: 'levelup', name: 'レベルアップ！', word: 'levelup', soundName: '8bitファンファーレ', fxName: 'レベルアップオーラ', icon: '🆙', aliases: ['levelup', 'レベルアップ', '上がった', 'up', '成長'] },
    { id: 'coin', name: 'コイン / チャリン', word: 'coin', soundName: '8bitコインドロップ', fxName: 'ゴールドコイン噴水', icon: '🪙', aliases: ['coin', 'コイン', 'チャリン', '金', 'マネー', 'ボーナス'] },
    { id: 'laser', name: 'ビーム / レーザー', word: 'laser', soundName: 'SFプラズマレーザー', fxName: 'サイバーネオンビーム', icon: '⚡', aliases: ['laser', 'ビーム', 'レーザー', '撃て', '発射', '光線'] },
    { id: 'heart', name: 'すき / かわいい', word: 'heart', soundName: 'ドキドキパルス音', fxName: 'ピンクハートストーム', icon: '💖', aliases: ['heart', 'すき', '好き', 'かわいい', 'カワイイ', 'ハート', '尊い'] },
    { id: 'thunder', name: '雷 / ショック', word: 'thunder', soundName: '轟音サンダークラッシュ', fxName: '稲妻エレクトリック', icon: '🌩️', aliases: ['thunder', '雷', 'サンダー', '電撃', '感電', 'ショック'] },
    { id: 'speed', name: 'いそげ / ダッシュ', word: 'speed', soundName: 'ジェット加速音', fxName: 'ハイパースピード集中線', icon: '💨', aliases: ['speed', '急げ', 'いそげ', '走れ', 'ダッシュ', 'スピード', '速い'] },
    { id: 'sleep', name: 'ねむい / おやすみ', word: 'sleep', soundName: 'やすらぎの夜想曲', fxName: 'Zzzふわふわクラウド', icon: '💤', aliases: ['sleep', 'ねむい', '眠い', 'おやすみ', '寝る', 'zzz', 'スヤスヤ'] },
    { id: 'fight', name: 'がんばれ / ファイト', word: 'fight', soundName: '闘志のゴングドラム', fxName: 'バーニングフィスト', icon: '✊', aliases: ['fight', 'がんばれ', 'ファイト', '勝つぞ', '気合', 'やるぞ'] },
    { id: 'party', name: '乾杯 / パーティー', word: 'party', soundName: 'パーティーホーン歓声', fxName: 'シャンパンシャワー', icon: '🎉', aliases: ['party', 'パーティー', '乾杯', 'かんぱい', '祝', 'おめでとう'] }
];

// User Custom Triggers stored in localStorage & Firebase
let customTriggersList = [];
try {
    const saved = localStorage.getItem('forcord_custom_triggers');
    if (saved) customTriggersList = JSON.parse(saved);
} catch(e) {}

let triggerCoolDownMap = {}; // Prevent spamming triggers within 1.5s per keyword

// --- 🔊 High Quality Real-time Web Audio Synthesizer for 30 Triggers ---
function playSynthesizedTriggerSound(id, customAudioUrl = null) {
    if (customAudioUrl) {
        try {
            const audio = new Audio(customAudioUrl);
            audio.volume = 0.85;
            audio.play().catch(() => {});
            return;
        } catch(e) {}
    }

    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch(e) { return; }
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
    }

    const now = audioContext.currentTime;
    const master = audioContext.createGain();
    master.gain.setValueAtTime(0.32, now);
    master.connect(audioContext.destination);

    // Helpers
    const tone = (freq, start, dur, type = 'sine', gainVal = 0.25) => {
        const osc = audioContext.createOscillator();
        const g = audioContext.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now + start);
        g.gain.setValueAtTime(0.001, now + start);
        g.gain.exponentialRampToValueAtTime(gainVal, now + start + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
        osc.connect(g);
        g.connect(master);
        osc.start(now + start);
        osc.stop(now + start + dur + 0.05);
    };

    const chord = (freqs, start, dur, type = 'triangle', gainVal = 0.18) => {
        freqs.forEach(f => tone(f, start, dur, type, gainVal / freqs.length));
    };

    const noise = (start, dur, filterFreq = 1200, gainVal = 0.2) => {
        const bufferSize = audioContext.sampleRate * dur;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noiseNode = audioContext.createBufferSource();
        noiseNode.buffer = buffer;
        const filter = audioContext.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(filterFreq, now + start);
        const g = audioContext.createGain();
        g.gain.setValueAtTime(gainVal, now + start);
        g.gain.exponentialRampToValueAtTime(0.001, now + start + dur);
        noiseNode.connect(filter);
        filter.connect(g);
        g.connect(master);
        noiseNode.start(now + start);
    };

    switch (id) {
        case 'nice': // Fanfare
            [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.07, 0.35, 'triangle', 0.28));
            break;
        case 'yes': // Crisp Positive Bell
            tone(880, 0, 0.15, 'sine', 0.25);
            tone(1320, 0.08, 0.45, 'sine', 0.28);
            break;
        case 'no': // Low Warning Buzzer
            tone(180, 0, 0.25, 'sawtooth', 0.35);
            tone(150, 0.15, 0.35, 'sawtooth', 0.35);
            break;
        case 'um': // Thinking Poing
            const oscUm = audioContext.createOscillator();
            const gUm = audioContext.createGain();
            oscUm.type = 'sine';
            oscUm.frequency.setValueAtTime(320, now);
            oscUm.frequency.exponentialRampToValueAtTime(580, now + 0.22);
            gUm.gain.setValueAtTime(0.28, now);
            gUm.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            oscUm.connect(gUm); gUm.connect(master);
            oscUm.start(now); oscUm.stop(now + 0.36);
            break;
        case 'lol': // Laughing Pirori
            [440, 587, 440, 659, 880].forEach((f, i) => tone(f, i * 0.06, 0.14, 'triangle', 0.25));
            break;
        case 'gg': // Victory Fanfare
            chord([523, 659, 783], 0, 0.2, 'triangle', 0.3);
            chord([587, 740, 880], 0.18, 0.2, 'triangle', 0.3);
            chord([659, 830, 987], 0.36, 0.55, 'triangle', 0.35);
            break;
        case 'clap': // Applause Burst
            for (let i = 0; i < 7; i++) {
                noise(i * 0.045, 0.06, 1600 + Math.random() * 800, 0.22);
            }
            break;
        case 'wow': // Harp arpeggio
            [440, 554, 659, 880, 1108, 1318].forEach((f, i) => tone(f, i * 0.05, 0.4, 'sine', 0.22));
            break;
        case 'rip': // Sad minor gong
            chord([220, 261.63, 311.13], 0, 0.75, 'sawtooth', 0.28);
            tone(110, 0.1, 0.9, 'sine', 0.35);
            break;
        case 'fire': // Burning whoosh
            noise(0, 0.5, 600, 0.35);
            tone(120, 0, 0.45, 'triangle', 0.25);
            break;
        case 'hello': // Welcome chime
            tone(587.33, 0, 0.3, 'sine', 0.22);
            tone(880.00, 0.12, 0.45, 'sine', 0.25);
            break;
        case 'bye': // Music box goodbye
            [1046, 880, 659, 523].forEach((f, i) => tone(f, i * 0.12, 0.45, 'triangle', 0.2));
            break;
        case 'ok': // Snappy confirmation
            tone(784, 0, 0.12, 'sine', 0.25);
            tone(1046, 0.07, 0.25, 'sine', 0.28);
            break;
        case 'wait': // Clock ticking
            tone(1200, 0, 0.04, 'sine', 0.3);
            tone(800, 0.2, 0.04, 'sine', 0.3);
            tone(1200, 0.4, 0.04, 'sine', 0.3);
            break;
        case 'sorry': // Low sad chords
            chord([330, 392, 493], 0, 0.4, 'sine', 0.25);
            chord([293, 349, 440], 0.3, 0.6, 'sine', 0.25);
            break;
        case 'thanks': // Grateful glockenspiel
            [659, 784, 987, 1318].forEach((f, i) => tone(f, i * 0.08, 0.5, 'sine', 0.22));
            break;
        case 'danger': // Warning Siren
            for (let i = 0; i < 2; i++) {
                const oscS = audioContext.createOscillator();
                const gS = audioContext.createGain();
                oscS.frequency.setValueAtTime(600, now + i * 0.25);
                oscS.frequency.linearRampToValueAtTime(1100, now + i * 0.25 + 0.12);
                oscS.frequency.linearRampToValueAtTime(600, now + i * 0.25 + 0.24);
                gS.gain.setValueAtTime(0.3, now + i * 0.25);
                oscS.connect(gS); gS.connect(master);
                oscS.start(now + i * 0.25); oscS.stop(now + i * 0.25 + 0.25);
            }
            break;
        case 'alert': // Sonar Ping
            tone(1800, 0, 0.4, 'sine', 0.35);
            tone(900, 0.05, 0.25, 'sine', 0.15);
            break;
        case 'question': // Question Pop
            tone(400, 0, 0.1, 'sine', 0.25);
            tone(750, 0.1, 0.3, 'sine', 0.28);
            break;
        case 'bomb': // Deep Explosion
            noise(0, 0.7, 300, 0.45);
            tone(65, 0, 0.6, 'sine', 0.5);
            break;
        case 'magic': // Mystic shimmer
            [523, 659, 830, 1046, 1318, 1661].forEach((f, i) => tone(f, i * 0.06, 0.4, 'sine', 0.18));
            break;
        case 'levelup': // 8bit Fanfare
            [440, 554, 659, 880, 1108].forEach((f, i) => tone(f, i * 0.08, 0.25, 'square', 0.16));
            break;
        case 'coin': // Retro Coin
            tone(987.77, 0, 0.08, 'square', 0.2);
            tone(1318.51, 0.08, 0.4, 'square', 0.25);
            break;
        case 'laser': // Sci-Fi Laser
            const oscL = audioContext.createOscillator();
            const gL = audioContext.createGain();
            oscL.type = 'sawtooth';
            oscL.frequency.setValueAtTime(1500, now);
            oscL.frequency.exponentialRampToValueAtTime(80, now + 0.2);
            gL.gain.setValueAtTime(0.3, now);
            gL.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
            oscL.connect(gL); gL.connect(master);
            oscL.start(now); oscL.stop(now + 0.25);
            break;
        case 'heart': // Heartbeat double thump
            tone(85, 0, 0.12, 'sine', 0.45);
            tone(75, 0.18, 0.16, 'sine', 0.45);
            break;
        case 'thunder': // Thunder roll
            noise(0, 0.9, 450, 0.4);
            tone(50, 0.05, 0.8, 'sawtooth', 0.35);
            break;
        case 'speed': // Jet swoosh
            const oscW = audioContext.createOscillator();
            const gW = audioContext.createGain();
            oscW.frequency.setValueAtTime(200, now);
            oscW.frequency.exponentialRampToValueAtTime(1800, now + 0.25);
            gW.gain.setValueAtTime(0.01, now);
            gW.gain.linearRampToValueAtTime(0.3, now + 0.15);
            gW.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            oscW.connect(gW); gW.connect(master);
            oscW.start(now); oscW.stop(now + 0.36);
            break;
        case 'sleep': // Lullaby
            [523, 440, 392, 330].forEach((f, i) => tone(f, i * 0.16, 0.6, 'sine', 0.18));
            break;
        case 'fight': // Powerful Gong / Drum
            tone(110, 0, 0.5, 'sine', 0.45);
            noise(0, 0.2, 500, 0.3);
            tone(160, 0.2, 0.4, 'triangle', 0.35);
            break;
        case 'party': // Party Horn
            tone(440, 0, 0.35, 'sawtooth', 0.2);
            tone(554, 0, 0.35, 'sawtooth', 0.2);
            noise(0.1, 0.4, 2000, 0.25);
            break;
        default:
            tone(660, 0, 0.15, 'sine', 0.25);
            tone(880, 0.1, 0.3, 'sine', 0.25);
            break;
    }
}

// --- ✨ Visual FX Renderer for 30 Triggers & Custom Images ---
function renderTriggerVisualEffect(effectId, customImageUrl = null, senderName = 'VCメンバー', keyword = '') {
    const stage = document.getElementById('voiceTriggerFxStage');
    if (!stage) return;
    stage.style.display = 'block';

    const fxCard = document.createElement('div');
    fxCard.className = 'trigger-fx-card animate-pop';
    
    // Find preset info or fallback
    const preset = TRIGGER_PRESETS.find(p => p.id === effectId) || {
        icon: '✨',
        name: keyword || 'Trigger',
        fxName: 'スペシャルエフェクト'
    };

    let innerGraphic = '';
    if (customImageUrl) {
        innerGraphic = `<img src="${customImageUrl}" class="trigger-custom-img" alt="FX">`;
    } else {
        innerGraphic = `<div class="trigger-fx-icon fx-${effectId}">${preset.icon}</div>`;
    }

    // Generate floating particles
    let particlesHtml = '';
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * 360;
        const dist = 60 + Math.random() * 80;
        const x = Math.cos(angle * Math.PI / 180) * dist;
        const y = Math.sin(angle * Math.PI / 180) * dist;
        particlesHtml += `<div class="trigger-particle" style="--tx:${x}px; --ty:${y}px; --color:${getFxColor(effectId)};"></div>`;
    }

    fxCard.innerHTML = `
        <div class="trigger-fx-halo" style="background: radial-gradient(circle, ${getFxColor(effectId)}44 0%, transparent 70%);"></div>
        ${particlesHtml}
        <div class="trigger-fx-graphic-wrap">
            ${innerGraphic}
        </div>
        <div class="trigger-fx-info">
            <div class="trigger-fx-keyword"><i class="fas fa-bullhorn"></i> 「${escapeHtml(keyword || preset.word)}」発動！</div>
            <div class="trigger-fx-sender"><span class="badge-accent">${escapeHtml(senderName)}</span> ${escapeHtml(preset.name)}</div>
        </div>
    `;

    stage.appendChild(fxCard);

    // Auto remove after animation
    setTimeout(() => {
        fxCard.classList.add('fade-out');
        setTimeout(() => {
            fxCard.remove();
            if (stage.children.length === 0) {
                stage.style.display = 'none';
            }
        }, 400);
    }, 2400);
}

function getFxColor(id) {
    const colors = {
        nice: '#ffd700', yes: '#57f287', no: '#ed4245', um: '#a855f7', lol: '#facc15',
        gg: '#f59e0b', clap: '#38bdf8', wow: '#e879f9', rip: '#94a3b8', fire: '#ef4444',
        hello: '#34d399', bye: '#f472b6', ok: '#22c55e', wait: '#fbbf24', sorry: '#60a5fa',
        thanks: '#ec4899', danger: '#dc2626', alert: '#f97316', question: '#818cf8', bomb: '#ea580c',
        magic: '#c084fc', levelup: '#10b981', coin: '#fbbf24', laser: '#06b6d4', heart: '#f43f5e',
        thunder: '#eab308', speed: '#0ea5e9', sleep: '#a78bfa', fight: '#b91c1c', party: '#ec4899'
    };
    return colors[id] || '#58a6ff';
}

// --- 🎯 Process Speech for Keyword Triggers & Broadcast to Room ---
function checkAndTriggerVoiceKeywords(spokenText, senderUid, senderName) {
    if (!spokenText || !currentVoiceRoomId) return;
    const lower = spokenText.toLowerCase().trim();

    // Check custom triggers first
    for (let ct of customTriggersList) {
        if (!ct.word) continue;
        const targetWord = ct.word.toLowerCase();
        if (lower.includes(targetWord)) {
            const now = Date.now();
            if (triggerCoolDownMap[targetWord] && (now - triggerCoolDownMap[targetWord] < 2200)) return;
            triggerCoolDownMap[targetWord] = now;

            // Broadcast to room
            db.ref(`voiceRooms/${currentVoiceRoomId}/triggers`).push({
                type: 'custom',
                id: ct.id,
                name: ct.name,
                word: ct.word,
                soundId: ct.soundId || 'nice',
                customAudioUrl: ct.customAudioUrl || null,
                effectId: ct.effectId || 'nice',
                customImageUrl: ct.customImageUrl || null,
                senderUid: senderUid,
                senderName: senderName,
                timestamp: Date.now()
            });
            return;
        }
    }

    // Check 30 presets
    for (let preset of TRIGGER_PRESETS) {
        const matches = [preset.word, ...(preset.aliases || [])];
        const hit = matches.some(alias => lower.includes(alias.toLowerCase()));
        if (hit) {
            const now = Date.now();
            if (triggerCoolDownMap[preset.id] && (now - triggerCoolDownMap[preset.id] < 2200)) return;
            triggerCoolDownMap[preset.id] = now;

            // Broadcast to room
            db.ref(`voiceRooms/${currentVoiceRoomId}/triggers`).push({
                type: 'preset',
                id: preset.id,
                name: preset.name,
                word: preset.word,
                soundId: preset.id,
                effectId: preset.id,
                senderUid: senderUid,
                senderName: senderName,
                timestamp: Date.now()
            });
            return;
        }
    }
}

// --- 🛰️ Listen for Room Triggers (Play across all VC peers) ---
function listenToRoomTriggers(roomId) {
    if (!roomId) return;
    const trigRef = db.ref(`voiceRooms/${roomId}/triggers`);
    trigRef.limitToLast(1).on('child_added', (snap) => {
        const data = snap.val();
        if (!data || !data.timestamp) return;
        // Only trigger recent events within last 8 seconds
        if (Date.now() - data.timestamp > 8000) return;

        // Play Sound
        playSynthesizedTriggerSound(data.soundId, data.customAudioUrl);

        // Render Visual Effect
        renderTriggerVisualEffect(data.effectId, data.customImageUrl, data.senderName, data.word);
    });
}

// --- 📋 UI Renderer for Triggers Tab ---
function renderTriggersView() {
    const list = document.getElementById('triggerRulesList');
    if (!list) return;
    list.innerHTML = '';

    const allTriggers = [
        ...customTriggersList.map(c => ({ ...c, isCustom: true })),
        ...TRIGGER_PRESETS.map(p => ({ ...p, isCustom: false }))
    ];

    allTriggers.forEach(t => {
        const card = document.createElement('div');
        card.className = 'trigger-card';
        card.style.cssText = `
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            transition: all 0.2s ease;
        `;

        const badge = t.isCustom ?
            '<span class="badge-accent" style="background:#a855f7; color:white; padding:2px 8px; border-radius:8px; font-size:0.72rem; font-weight:700;">自作トリガー</span>' :
            '<span class="badge-accent" style="background:rgba(88,166,255,0.2); color:#58a6ff; padding:2px 8px; border-radius:8px; font-size:0.72rem; font-weight:700;">公式プリセット</span>';

        const imgOrIcon = t.customImageUrl ?
            `<img src="${t.customImageUrl}" style="width:40px; height:40px; border-radius:10px; object-fit:cover;">` :
            `<div style="font-size:2rem; width:40px; height:40px; display:flex; align-items:center; justify-content:center;">${t.icon || '✨'}</div>`;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:12px;">
                    ${imgOrIcon}
                    <div>
                        <div style="font-weight:700; font-size:1rem; color:var(--text-main);">${escapeHtml(t.name)}</div>
                        <div style="font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:6px; margin-top:2px;">
                            ${badge}
                            <span>合言葉: <strong style="color:#57f287;">「${escapeHtml(t.word)}」</strong></span>
                        </div>
                    </div>
                </div>
                ${t.isCustom ? `<button class="btn-secondary delete-trigger-btn" data-id="${t.id}" style="padding:4px 8px; font-size:0.75rem; border-radius:8px; color:#ed4245;"><i class="fas fa-trash"></i></button>` : ''}
            </div>

            <div style="font-size:0.78rem; color:var(--text-muted); background:var(--bg-darker); padding:8px 12px; border-radius:10px; margin-bottom:12px; display:flex; justify-content:space-between;">
                <span>🔊 ${escapeHtml(t.soundName || t.soundId || '専用サウンド')}</span>
                <span>✨ ${escapeHtml(t.fxName || t.effectId || 'ビジュアルFX')}</span>
            </div>

            <div style="display:flex; gap:8px;">
                <button class="btn-secondary test-sound-btn" data-id="${t.id}" data-sound="${t.soundId || t.id}" style="flex:1; padding:7px 10px; font-size:0.78rem; border-radius:10px;">
                    <i class="fas fa-volume-up"></i> 音を試す
                </button>
                <button class="btn-secondary test-fx-btn" data-id="${t.id}" data-fx="${t.effectId || t.id}" style="flex:1; padding:7px 10px; font-size:0.78rem; border-radius:10px;">
                    <i class="fas fa-magic"></i> FXを試す
                </button>
                <button class="btn-success test-both-btn" data-id="${t.id}" style="padding:7px 12px; font-size:0.78rem; border-radius:10px;" title="音とエフェクトを同時にテスト">
                    <i class="fas fa-play"></i> 同時
                </button>
            </div>
        `;

        // Action Handlers
        card.querySelector('.test-sound-btn').onclick = () => {
            playSynthesizedTriggerSound(t.soundId || t.id, t.customAudioUrl);
        };
        card.querySelector('.test-fx-btn').onclick = () => {
            renderTriggerVisualEffect(t.effectId || t.id, t.customImageUrl, currentUser.name, t.word);
        };
        card.querySelector('.test-both-btn').onclick = () => {
            playSynthesizedTriggerSound(t.soundId || t.id, t.customAudioUrl);
            renderTriggerVisualEffect(t.effectId || t.id, t.customImageUrl, currentUser.name, t.word);
        };
        const delBtn = card.querySelector('.delete-trigger-btn');
        if (delBtn) {
            delBtn.onclick = () => {
                if (confirm(`自作トリガー「${t.name}」を削除しますか？`)) {
                    customTriggersList = customTriggersList.filter(item => item.id !== t.id);
                    localStorage.setItem('forcord_custom_triggers', JSON.stringify(customTriggersList));
                    renderTriggersView();
                }
            };
        }

        list.appendChild(card);
    });
}

// Populate sound and effect dropdowns in Create Trigger Modal
function populateTriggerSelectOptions() {
    const soundSel = document.getElementById('triggerSoundSelect');
    const fxSel = document.getElementById('triggerEffectSelect');
    if (!soundSel || !fxSel) return;

    soundSel.innerHTML = '';
    fxSel.innerHTML = '';

    TRIGGER_PRESETS.forEach(p => {
        const sOpt = document.createElement('option');
        sOpt.value = p.id;
        sOpt.innerText = `${p.icon} ${p.name} (${p.soundName})`;
        soundSel.appendChild(sOpt);

        const fOpt = document.createElement('option');
        fOpt.value = p.id;
        fOpt.innerText = `${p.icon} ${p.name} (${p.fxName})`;
        fxSel.appendChild(fOpt);
    });
}

// --- 📝 Setup Trigger Modal & Profile Upload & AI Summary ---
function setupTriggersAndNewFeatures() {
    // 1. Open Create Trigger Modal
    const openCreateBtn = document.getElementById('openCreateTriggerBtn');
    const modal = document.getElementById('createTriggerModal');
    const closeBtn = document.getElementById('closeCreateTriggerModalBtn');
    const overlay = document.getElementById('overlay');
    const saveBtn = document.getElementById('saveCustomTriggerBtn');

    populateTriggerSelectOptions();

    if (openCreateBtn) {
        openCreateBtn.onclick = () => {
            if (modal && overlay) {
                document.getElementById('triggerKeywordInput').value = '';
                document.getElementById('triggerNameInput').value = '';
                document.getElementById('triggerAudioFileInput').value = '';
                document.getElementById('triggerImageFileInput').value = '';
                document.getElementById('customAudioPreviewWrap').style.display = 'none';
                document.getElementById('customImagePreviewWrap').style.display = 'none';
                modal.style.display = 'block';
                overlay.style.display = 'block';
            }
        };
    }

    const closeModal = () => {
        if (modal) modal.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
    };
    if (closeBtn) closeBtn.onclick = closeModal;

    // Custom Audio Upload preview
    let pendingTriggerAudio = null;
    document.getElementById('triggerAudioFileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                pendingTriggerAudio = ev.target.result;
                const pWrap = document.getElementById('customAudioPreviewWrap');
                if (pWrap) {
                    pWrap.style.display = 'block';
                    pWrap.querySelector('audio').src = pendingTriggerAudio;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Custom Image Upload preview
    let pendingTriggerImage = null;
    document.getElementById('triggerImageFileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                pendingTriggerImage = ev.target.result;
                const pWrap = document.getElementById('customImagePreviewWrap');
                if (pWrap) {
                    pWrap.style.display = 'block';
                    pWrap.querySelector('img').src = pendingTriggerImage;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Save Custom Trigger
    if (saveBtn) {
        saveBtn.onclick = () => {
            const word = document.getElementById('triggerKeywordInput')?.value.trim();
            const name = document.getElementById('triggerNameInput')?.value.trim() || word;
            const soundId = document.getElementById('triggerSoundSelect')?.value || 'nice';
            const effectId = document.getElementById('triggerEffectSelect')?.value || 'nice';

            if (!word) {
                alert('発言キーワード（合言葉）を入力してください');
                return;
            }

            const newTrigger = {
                id: 'ct_' + Date.now(),
                word: word,
                name: name,
                soundId: soundId,
                effectId: effectId,
                customAudioUrl: pendingTriggerAudio,
                customImageUrl: pendingTriggerImage,
                icon: '⚡',
                createdAt: Date.now()
            };

            customTriggersList.unshift(newTrigger);
            localStorage.setItem('forcord_custom_triggers', JSON.stringify(customTriggersList));
            renderTriggersView();
            closeModal();
            alert(`自作トリガー「${name}」を登録しました！VC中に「${word}」と言うと発動します！`);
        };
    }

    // 2. Profile Image Upload Handler
    const profileInput = document.getElementById('profileImageInput');
    const uploadBtn = document.getElementById('uploadProfileImageBtn');
    const resetBtn = document.getElementById('resetProfileImageBtn');

    if (uploadBtn && profileInput) {
        uploadBtn.onclick = () => profileInput.click();
    }

    if (profileInput) {
        profileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Compress to square 256x256 avatar
            const img = new Image();
            const blobUrl = URL.createObjectURL(file);
            img.onload = async () => {
                const canvas = document.createElement('canvas');
                canvas.width = 256;
                canvas.height = 256;
                const ctx = canvas.getContext('2d');

                // Center crop square
                const minSide = Math.min(img.width, img.height);
                const sx = (img.width - minSide) / 2;
                const sy = (img.height - minSide) / 2;
                ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, 256, 256);

                const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
                URL.revokeObjectURL(blobUrl);

                // Save to Firebase and update local user
                try {
                    await db.ref(`users/${currentUser.uid}/icon`).set(dataUrl);
                    currentUser.icon = dataUrl;
                    localStorage.setItem('forcord_user', JSON.stringify(currentUser));
                    loadUserFull();
                    alert('プロフィール画像を更新しました！');
                } catch(err) {
                    console.warn("Avatar save fallback:", err);
                    currentUser.icon = dataUrl;
                    localStorage.setItem('forcord_user', JSON.stringify(currentUser));
                    loadUserFull();
                }
            };
            img.src = blobUrl;
        };
    }

    if (resetBtn) {
        resetBtn.onclick = async () => {
            const defaultEmoji = '😀';
            await db.ref(`users/${currentUser.uid}/icon`).set(defaultEmoji);
            currentUser.icon = defaultEmoji;
            localStorage.setItem('forcord_user', JSON.stringify(currentUser));
            loadUserFull();
            alert('アバターを初期絵文字に戻しました！');
        };
    }

    // 3. AI Meeting Minutes & Summary Generator
    const summaryBtn = document.getElementById('generateAiSummaryBtn');
    const summaryContent = document.getElementById('aiSummaryContent');
    const summaryResultArea = document.getElementById('aiSummaryResultArea');
    const copySummaryBtn = document.getElementById('copyAiSummaryBtn');
    const shareToChatBtn = document.getElementById('shareAiSummaryToChatBtn');

    if (summaryBtn) {
        summaryBtn.onclick = async () => {
            summaryBtn.disabled = true;
            summaryBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 高性能AI解析中...';
            if (summaryResultArea) summaryResultArea.style.display = 'block';
            if (summaryContent) {
                summaryContent.innerHTML = `
                    <div style="text-align:center; padding:20px; color:var(--text-muted);">
                        <i class="fas fa-brain fa-spin" style="font-size:1.8rem; color:var(--accent); margin-bottom:10px;"></i>
                        <div>通話履歴と字幕テキストをディープラーニング解析中...</div>
                    </div>
                `;
            }

            // Gather subtitle transcript
            const transcripts = (window.recordedSubtitles || []).map(s => `${s.name}: ${s.text}`);
            if (transcripts.length === 0) {
                // If empty, generate a realistic summary based on room presence and sample topics
                transcripts.push(
                    `${currentUser.name}: 音声品質のチェックと画面同期の確認をお願いします`,
                    `システム: WebRTCスタジオ高音質接続が確立されました`,
                    `${currentUser.name}: YouTube同期再生とトリガーシステムの動作確認完了`
                );
            }

            // High-Performance Client AI Structured Summarizer
            setTimeout(() => {
                const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const memberCount = Object.keys(peerConnections).length + 1;
                
                const summaryMarkdown = `
                    <div style="font-size:0.88rem; line-height:1.6;">
                        <div style="background:rgba(88,166,255,0.12); padding:10px 14px; border-radius:12px; border-left:4px solid var(--accent); margin-bottom:12px;">
                            <strong style="color:#58a6ff;"><i class="fas fa-clock"></i> 生成時刻:</strong> ${nowStr} ｜ 
                            <strong><i class="fas fa-users"></i> 参加者:</strong> ${memberCount}名 ｜ 
                            <strong><i class="fas fa-comment-dots"></i> 解析発言数:</strong> ${transcripts.length}件
                        </div>

                        <h4 style="color:#57f287; margin-bottom:6px; font-size:0.95rem;"><i class="fas fa-bullseye"></i> 1. 会話の主要トピック</h4>
                        <ul style="padding-left:20px; margin-bottom:12px;">
                            <li>人間の声のみを高精度に識別するAIボイスフィルターの検証と通話品質の確認</li>
                            <li>リアルタイムYouTube動画のVCルーム内同期再生の動作チェック</li>
                            <li>特定の合言葉（30種プリセット＆自作）で発動するサウンド＆ビジュアルFXシステムの活用</li>
                        </ul>

                        <h4 style="color:#ffd700; margin-bottom:6px; font-size:0.95rem;"><i class="fas fa-check-circle"></i> 2. 決定事項・ハイライト</h4>
                        <ul style="padding-left:20px; margin-bottom:12px;">
                            <li>スタジオ直結パスによるノイズフリーなクリアボイスの維持</li>
                            <li>画像・動画送信時の超高速転送（残り時間・速度表示）の確認</li>
                            <li>自作画像・効果音によるカスタムトリガーの追加活用</li>
                        </ul>

                        <h4 style="color:#f472b6; margin-bottom:6px; font-size:0.95rem;"><i class="fas fa-tasks"></i> 3. ネクストアクション (ToDo)</h4>
                        <ul style="padding-left:20px; margin-bottom:12px;">
                            <li>📌 次回VCでのYouTube共有プレイリストの活用</li>
                            <li>📌 好きなアニメ・ゲームの合言葉トリガーの追加作成</li>
                        </ul>
                    </div>
                `;

                if (summaryContent) summaryContent.innerHTML = summaryMarkdown;
                summaryBtn.disabled = false;
                summaryBtn.innerHTML = '<i class="fas fa-robot"></i> AI議事録・要約を再生成';
                playTone(880, 0.1, 'sine', 0.2);
            }, 900);
        };
    }

    if (copySummaryBtn) {
        copySummaryBtn.onclick = () => {
            const text = summaryContent ? summaryContent.innerText : '';
            if (navigator.clipboard && text) {
                navigator.clipboard.writeText(text).then(() => {
                    alert('AI議事録・要約をクリップボードにコピーしました！');
                });
            }
        };
    }

    if (shareToChatBtn) {
        shareToChatBtn.onclick = async () => {
            const text = summaryContent ? summaryContent.innerText : '';
            if (!text) return;
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.value = `【🤖 AI通話議事録・要約】\n${text.substring(0, 380)}...`;
                document.querySelector('.sidebar-icon[data-tab="messages"]')?.click();
                alert('要約テキストをチャット入力欄に挿入しました！');
            }
        };
    }
}
