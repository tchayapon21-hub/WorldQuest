'use strict';
/* =========================================================
   WordQuest v3 · Digital Product Edition (ปลดล็อกทุกอย่าง)
   คำศัพท์ + ทบทวนคำผิด + IELTS Reading + สำรอง/กู้คืนความคืบหน้า
   ========================================================= */
const $ = s => document.querySelector(s);
const app = $('#app');
const STORE_KEY = 'wordquest_v1';          // ใช้ชื่อเดิม ความคืบหน้าเก่าไม่หาย
const LEVEL_MAX_XP = 500;                   // XP เต็มหลอดของแต่ละระดับ
const DAILY_GOAL = 100;                     // เป้า XP ต่อวัน
const FLASH_SIZE = 10;                      // Flashcards รอบละกี่ใบ
const REVIEW_GAPS = [0, 1, 3, 7];           // ตอบถูกตามรอบครบ 4 ครั้ง = จำได้ถาวร
const REVIEW_SIZE = 15;                     // ทบทวนคำผิดรอบละกี่คำ

/* ================= RANKS / BADGES ================= */
const RANKS = [
  { xp: 0,    e: '🥚', n: 'Word Egg',       th: 'ไข่คำศัพท์' },
  { xp: 100,  e: '🐣', n: 'Baby Chick',     th: 'ลูกเจี๊ยบหัดพูด' },
  { xp: 300,  e: '🐥', n: 'Word Explorer',  th: 'นักสำรวจคำศัพท์' },
  { xp: 600,  e: '🦊', n: 'Clever Fox',     th: 'จิ้งจอกเจ้าปัญญา' },
  { xp: 1000, e: '🦉', n: 'Wise Owl',       th: 'นกฮูกผู้รอบรู้' },
  { xp: 1600, e: '🐬', n: 'Fluent Dolphin', th: 'โลมาพูดคล่อง' },
  { xp: 2500, e: '🦁', n: 'Language Lion',  th: 'ราชสีห์แห่งภาษา' },
  { xp: 4000, e: '🐉', n: 'Vocab Dragon',   th: 'มังกรคำศัพท์' },
  { xp: 6000, e: '👑', n: 'English Legend', th: 'ตำนานภาษาอังกฤษ' }
];
const TIERS = [
  { p: 0,    e: '🌱', n: 'Newbie' },
  { p: 0.25, e: '🥉', n: 'Bronze' },
  { p: 0.5,  e: '🥈', n: 'Silver' },
  { p: 0.75, e: '🥇', n: 'Gold' },
  { p: 1,    e: '💎', n: 'Master' }
];
const BADGES = {
  first:   { e: '🎉', n: 'ตอบถูกครั้งแรก' },
  combo5:  { e: '⚡', n: 'คอมโบ 5' },
  combo10: { e: '🔥', n: 'คอมโบ 10 สุดปัง' },
  learner: { e: '👀', n: 'เปิดดู 20 คำ' },
  flash:   { e: '🃏', n: 'จบชุดแฟลชการ์ด' },
  mock:    { e: '📝', n: 'สอบจำลองครั้งแรก' },
  perfect: { e: '🌟', n: 'สอบจำลอง 100%' },
  xp100:   { e: '💯', n: 'สะสม 100 XP' },
  xp1000:  { e: '🏅', n: 'สะสม 1,000 XP' },
  streak3: { e: '📅', n: 'เรียนติดกัน 3 วัน' },
  streak7: { e: '🗓️', n: 'เรียนติดกัน 7 วัน' },
  master:  { e: '💎', n: 'Master ครบ 1 ระดับ' },
  fixer:   { e: '🩹', n: 'แก้คำผิดได้ 10 คำ' },
  reader:  { e: '📰', n: 'ทำ Reading ครั้งแรก' },
  band7:   { e: '🎓', n: 'Reading ≈ Band 7+' }
};
const PRAISE = ['เยี่ยมมาก! 🎉', 'ถูกต้อง! 💪', 'สุดยอด! ⭐', 'ปังมาก! 🔥', 'อัจฉริยะ! 🧠', 'เก่งสุด ๆ! 🚀', 'โคตรเทพ! 😎'];
const OOPS = ['ไม่เป็นไร ลองใหม่! 💪', 'เกือบแล้ว! 😉', 'ผิดเป็นครู! 📚', 'จำไว้นะ รอบหน้าได้แน่! ✨'];
const GREETS = ['วันนี้เรียนแค่ 5 นาทีก็พอ! 💪', 'เก็บ XP ให้ครบเป้าวันนี้กัน! 🎯', 'ทุกคำที่เรียน = เลเวลอัป! 🚀', 'ขี้เกียจก็เรียนได้ แตะทีละการ์ดพอ 😎', 'คอมโบ 3 ข้อติด ได้ XP เพิ่มนะ! 🔥', 'มีคำผิดรอทบทวนไหม? ไปเก็บกัน! 🧠'];
const INSTR = {
  tfng: '<b>TRUE / FALSE / NOT GIVEN</b><br><small>TRUE = ตรงกับบทความ · FALSE = ขัดกับบทความ · NOT GIVEN = บทความไม่ได้บอก</small>',
  mcq:  '<b>Choose the correct letter, A, B, C or D.</b><br><small>เลือกคำตอบที่ถูกที่สุด</small>',
  para: '<b>Which paragraph contains the following information?</b><br><small>ข้อมูลนี้อยู่ในย่อหน้าไหน (A–E)</small>',
  gap:  '<b>Complete the sentences. Use NO MORE THAN TWO WORDS from the passage.</b><br><small>เติมคำจากบทความ ไม่เกิน 2 คำ</small>'
};
const BAND_TABLE = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]];

/* ================= DATA ================= */
const ALL_LEVELS = ['cefr', 'ielts'].flatMap(track =>
  LEVELS[track].map(l => ({
    ...l, track, key: track + '-' + l.id,
    words: l.words.map(a => ({ w: a[0], e: a[1], th: a[2], def: a[3], ex: a[4], img: a[5] || null }))
  }))
);
const getLevel = key => ALL_LEVELS.find(l => l.key === key);
const RD = typeof READINGS !== 'undefined' ? READINGS : [];
const getReading = id => RD.find(p => p.id === id);
const TYPES = ['pic', 'th2en', 'en2th', 'blank'];
if ('speechSynthesis' in window) TYPES.push('listen');

/* ================= STATE ================= */
const defaultState = () => ({ xp: {}, seen: {}, badges: [], streak: { count: 0, last: null }, daily: { date: null, xp: 0 }, sound: true, track: 'cefr', mockBest: {}, mistakes: {}, fixed: 0, readingBest: {} });
const isNum = v => typeof v === 'number' && isFinite(v);
function normalize(raw) { // ใช้ทั้งตอนโหลดและตอนกู้คืนจากไฟล์ กันข้อมูลเสีย/ไฟล์แปลกปลอม
  const d = defaultState();
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return d;
  const s = Object.assign(d, raw);
  ['xp', 'seen', 'mockBest', 'mistakes', 'readingBest'].forEach(k => { if (!s[k] || typeof s[k] !== 'object' || Array.isArray(s[k])) s[k] = {}; });
  ['xp', 'mockBest', 'readingBest'].forEach(k => Object.keys(s[k]).forEach(x => { if (!isNum(s[k][x])) delete s[k][x]; }));
  if (!Array.isArray(s.badges)) s.badges = [];
  s.badges = s.badges.filter(b => BADGES[b]);
  if (!s.streak || typeof s.streak !== 'object' || !isNum(s.streak.count)) s.streak = { count: 0, last: null };
  if (!s.daily || typeof s.daily !== 'object' || !isNum(s.daily.xp)) s.daily = { date: null, xp: 0 };
  if (!['cefr', 'ielts', 'reading'].includes(s.track)) s.track = 'cefr';
  if (!isNum(s.fixed)) s.fixed = 0;
  s.sound = s.sound !== false;
  return s;
}
function load() { try { return normalize(JSON.parse(localStorage.getItem(STORE_KEY))); } catch (e) { return defaultState(); } }
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* storage full / private mode */ } }
let S = load();
let view = 'home', combo = 0, Q = null, F = null, RS = null, timerId = null, timeLeft = 0;

/* ================= UTILS ================= */
const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordRe = w => new RegExp('\\b' + escRe(w) + '\\b', 'i');
const highlight = (ex, w) => ex.replace(wordRe(w), m => '<b>' + m + '</b>');
const blankify = (ex, w) => ex.replace(wordRe(w), '<span class="blank">_____</span>');
const norm = s => String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, ' ').trim().replace(/^(the|a|an) /, '');
const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
const pic = (w, cls) => w.img ? `<img class="${cls} pic" src="${w.img}" alt="${w.w}" loading="lazy">` : `<span class="${cls}">${w.e}</span>`;
const ymd = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const today = () => ymd(new Date());
const addDays = (s, n) => { const d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() + n); return ymd(d); };
const dayDiff = (a, b) => Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);
const totalXP = () => Object.values(S.xp).reduce((a, b) => a + b, 0);
function on(sel, fn) { app.querySelectorAll(sel).forEach(el => el.addEventListener('click', fn)); }
function rankFor(xp) { let i = 0; RANKS.forEach((r, k) => { if (xp >= r.xp) i = k; }); return { i, r: RANKS[i], next: RANKS[i + 1] || null }; }
function tierFor(xp) { let i = 0; TIERS.forEach((t, k) => { if (xp >= t.p * LEVEL_MAX_XP) i = k; }); return { i, t: TIERS[i] }; }
function currentStreak() { if (!S.streak.last) return 0; return dayDiff(S.streak.last, today()) <= 1 ? S.streak.count : 0; }
function animateBars() { setTimeout(() => app.querySelectorAll('.fill[data-w]').forEach(el => { el.style.width = el.dataset.w + '%'; }), 60); }
function cleanup() { stopTimer(); Q = null; F = null; RS = null; if ('speechSynthesis' in window) speechSynthesis.cancel(); window.scrollTo(0, 0); }

/* ================= TIMER ================= */
function startTimer(sec, onEnd) {
  stopTimer(); timeLeft = sec;
  timerId = setInterval(() => {
    timeLeft--;
    const el = $('#timer');
    if (el) { el.textContent = '⏱️ ' + fmt(Math.max(0, timeLeft)); el.classList.toggle('hurry', timeLeft <= 30); }
    if (timeLeft <= 0) { stopTimer(); toast('⏰ หมดเวลา!'); onEnd(); }
  }, 1000);
}
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

/* ================= SOUND ================= */
let AC = null;
function tone(f, start, dur, type = 'sine', vol = 0.15) {
  const o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + start;
  o.type = type; o.frequency.value = f;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.05);
}
function sfx(kind) {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    if (kind === 'good') [523, 659, 784].forEach((f, i) => tone(f, i * 0.07, 0.18, 'triangle'));
    else if (kind === 'bad') { tone(220, 0, 0.25, 'sawtooth', 0.07); tone(160, 0.12, 0.3, 'sawtooth', 0.07); }
    else if (kind === 'flip') tone(620, 0, 0.08, 'sine', 0.08);
    else if (kind === 'combo') [784, 988, 1175, 1568].forEach((f, i) => tone(f, i * 0.05, 0.15, 'square', 0.05));
    else if (kind === 'level') [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.09, 0.3, 'triangle'));
  } catch (e) { /* audio not supported */ }
}
function speak(text) {
  if (!('speechSynthesis' in window)) { toast('เบราว์เซอร์นี้ไม่รองรับเสียงอ่าน 😢'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.85;
  const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith('en'));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

/* ================= EFFECTS ================= */
const cv = $('#confetti'), cx = cv.getContext('2d');
let parts = [], running = false;
function resize() { cv.width = innerWidth; cv.height = innerHeight; }
addEventListener('resize', resize); resize();
function confetti(n = 80, x = innerWidth / 2, y = innerHeight / 3) {
  const colors = ['#ffd23f', '#ff4ecd', '#6a5cff', '#22c55e', '#3b82f6', '#ff8a3d'];
  for (let i = 0; i < n; i++) parts.push({ x, y, vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 12 - 4, s: Math.random() * 8 + 4, c: colors[i % colors.length], r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, life: 110 + Math.random() * 60 });
  if (!running) { running = true; requestAnimationFrame(tick); }
}
function tick() {
  cx.clearRect(0, 0, cv.width, cv.height);
  parts.forEach(p => {
    p.vy += 0.35; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life--;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore();
  });
  parts = parts.filter(p => p.life > 0 && p.y < cv.height + 40);
  if (parts.length) requestAnimationFrame(tick); else { running = false; cx.clearRect(0, 0, cv.width, cv.height); }
}
function floatXP(text, evt) {
  const el = document.createElement('div');
  el.className = 'float-xp'; el.textContent = text;
  el.style.left = ((evt && evt.clientX) || innerWidth / 2) + 'px';
  el.style.top = ((evt && evt.clientY) || innerHeight / 2) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  $('#toastWrap').appendChild(t);
  setTimeout(() => { t.style.transition = 'opacity .4s'; t.style.opacity = '0'; }, 2400);
  setTimeout(() => t.remove(), 2900);
}
function showModal(html, label = 'เยี่ยมเลย! 🎉') {
  $('#modalBox').innerHTML = html + `<button class="btn primary" id="modalClose">${label}</button>`;
  $('#modal').classList.remove('hidden');
  $('#modalClose').onclick = closeModal;
}
function closeModal() { $('#modal').classList.add('hidden'); }
function showRankUp(r) {
  sfx('level'); confetti(260);
  setTimeout(() => confetti(180, innerWidth * 0.2, innerHeight * 0.4), 300);
  setTimeout(() => confetti(180, innerWidth * 0.8, innerHeight * 0.4), 600);
  showModal(`<div class="big-emoji">${r.e}</div><h2>เลื่อนแรงก์แล้ว! 🎉</h2><p>ตอนนี้คุณคือ <b>${r.n}</b><br>${r.th}</p>`);
}

/* ================= XP / BADGES ================= */
function unlock(id) {
  if (S.badges.includes(id) || !BADGES[id]) return;
  S.badges.push(id); save();
  const b = BADGES[id];
  setTimeout(() => { toast(`🏆 ปลดล็อกเหรียญ: ${b.e} ${b.n}`); sfx('combo'); }, 400);
}
function touchStreak() {
  const t = today();
  if (S.streak.last === t) return;
  S.streak.count = (S.streak.last && dayDiff(S.streak.last, t) === 1) ? S.streak.count + 1 : 1;
  S.streak.last = t;
  if (S.streak.count >= 3) unlock('streak3');
  if (S.streak.count >= 7) unlock('streak7');
}
function addXP(key, amt, evt) {
  const L = getLevel(key);
  if (!L || !amt || amt <= 0) return;
  const beforeRank = rankFor(totalXP()).i, beforeTier = tierFor(S.xp[key] || 0).i;
  S.xp[key] = (S.xp[key] || 0) + amt;
  const t = today();
  if (S.daily.date !== t) S.daily = { date: t, xp: 0 };
  const hadGoal = S.daily.xp >= DAILY_GOAL;
  S.daily.xp += amt;
  touchStreak();
  floatXP('+' + amt + ' XP', evt);
  save(); updateHeader();
  const after = totalXP(), ar = rankFor(after), at = tierFor(S.xp[key]).i;
  if (after >= 100) unlock('xp100');
  if (after >= 1000) unlock('xp1000');
  if (!hadGoal && S.daily.xp >= DAILY_GOAL) { toast(`🎯 ครบเป้า ${DAILY_GOAL} XP วันนี้แล้ว! สุดยอด!`); confetti(150); }
  if (at > beforeTier) { toast(`${TIERS[at].e} ระดับ ${L.id} อัปเป็น ${TIERS[at].n}!`); sfx('combo'); if (at === TIERS.length - 1) unlock('master'); }
  if (ar.i > beforeRank) showRankUp(ar.r);
}
function updateHeader() {
  const t = totalXP(), { r, next } = rankFor(t);
  $('#rankEmoji').textContent = r.e;
  $('#rankName').textContent = r.n + ' · ' + r.th;
  $('#totalXP').textContent = t.toLocaleString() + ' XP';
  if (next) {
    $('#rankFill').style.width = ((t - r.xp) / (next.xp - r.xp) * 100) + '%';
    $('#rankNext').textContent = `อีก ${(next.xp - t).toLocaleString()} XP → ${next.e} ${next.n}`;
  } else {
    $('#rankFill').style.width = '100%';
    $('#rankNext').textContent = 'ถึงแรงก์สูงสุดแล้ว! คุณคือตำนาน 👑';
  }
  const dx = S.daily.date === today() ? S.daily.xp : 0;
  $('#dailyFill').style.width = Math.min(100, dx / DAILY_GOAL * 100) + '%';
  $('#dailyText').textContent = dx >= DAILY_GOAL ? `✅ ${dx} XP` : `${dx}/${DAILY_GOAL} XP`;
  $('#streakPill').textContent = '🔥 ' + currentStreak();
  const cp = $('#comboPill'); cp.textContent = '⚡ x' + combo; cp.classList.toggle('hot', combo >= 3);
  $('#soundBtn').textContent = S.sound ? '🔊' : '🔇';
}

/* ================= BACKUP / RESTORE ================= */
function exportProgress() {
  try {
    const blob = new Blob([JSON.stringify(S)], { type: 'application/json' });
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = 'wordquest-backup-' + today() + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    toast('💾 บันทึกไฟล์สำรองแล้ว เก็บไว้ดี ๆ นะ');
  } catch (e) { toast('❌ บันทึกไฟล์ไม่สำเร็จ'); }
}
function importProgress(file) {
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const raw = JSON.parse(r.result);
      if (!raw || typeof raw !== 'object' || !('xp' in raw)) throw new Error('bad file');
      if (!confirm('แทนที่ความคืบหน้าปัจจุบันด้วยไฟล์นี้?')) return;
      S = normalize(raw); combo = 0; save(); updateHeader(); renderHome();
      toast('✅ กู้คืนความคืบหน้าแล้ว'); confetti(120);
    } catch (e) { toast('❌ ไฟล์นี้ไม่ใช่ไฟล์สำรองของ WordQuest'); }
  };
  r.onerror = () => toast('❌ อ่านไฟล์ไม่สำเร็จ');
  r.readAsText(file);
}

/* ================= MISTAKES (คลังคำที่ตอบผิดบ่อย) ================= */
const mKey = (lk, w) => lk + '|' + w;
function markWrong(lk, w) {
  const k = mKey(lk, w), m = S.mistakes[k] || { n: 0 };
  m.n = (m.n || 0) + 1; m.box = 0; m.due = today(); m.last = today();
  S.mistakes[k] = m;
}
function markRight(lk, w) { // คืนค่า true ถ้าจำได้ถาวร (ออกจากคลัง)
  const k = mKey(lk, w), m = S.mistakes[k];
  if (!m || m.due > today()) return false;
  m.box = (m.box || 0) + 1;
  if (m.box >= REVIEW_GAPS.length) {
    delete S.mistakes[k]; S.fixed = (S.fixed || 0) + 1;
    if (S.fixed >= 10) unlock('fixer');
    return true;
  }
  m.due = addDays(today(), REVIEW_GAPS[m.box]);
  return false;
}
function mistakeList() {
  return Object.entries(S.mistakes).map(([k, m]) => {
    const i = k.indexOf('|'), L = getLevel(k.slice(0, i));
    if (!L || !m || typeof m.due !== 'string') return null;
    const idx = L.words.findIndex(w => w.w === k.slice(i + 1));
    if (idx < 0) return null;
    return { k, L, idx, w: L.words[idx], n: isNum(m.n) ? m.n : 1, box: isNum(m.box) ? m.box : 0, due: m.due };
  }).filter(Boolean);
}
const dots = box => '●'.repeat(Math.min(box, REVIEW_GAPS.length)) + '○'.repeat(Math.max(0, REVIEW_GAPS.length - box));

/* ================= HOME ================= */
function levelCard(l) {
  const xp = S.xp[l.key] || 0, pct = Math.min(1, xp / LEVEL_MAX_XP), t = tierFor(xp).t;
  return `<button class="level-card" data-key="${l.key}" style="--c:${l.color}">
    <span class="lv-top"><span class="lv-id">${l.id}</span><span class="lv-tier">${t.e} ${t.n}</span></span>
    <span class="lv-name">${l.name}</span>
    <span class="lv-desc">${l.desc}</span>
    <span class="bar"><span class="fill" data-w="${pct * 100}"></span></span>
    <span class="lv-xp">${Math.min(xp, LEVEL_MAX_XP)}/${LEVEL_MAX_XP} XP</span>
  </button>`;
}
function readingCard(p) {
  const best = S.readingBest[p.id], L = getLevel(p.level);
  return `<button class="level-card" data-rid="${p.id}" style="--c:${L ? L.color : '#6a5cff'}">
    <span class="lv-top"><span class="lv-id">${p.emoji}</span><span class="lv-tier">${best != null ? '🏅 ' + best + '%' : '🆕 ใหม่'}</span></span>
    <span class="lv-name">${p.title}</span>
    <span class="lv-desc">IELTS Band ${p.band} · ${p.questions.length} ข้อ · ${p.minutes} นาที</span>
  </button>`;
}
function renderHome() {
  view = 'home'; cleanup();
  const cur = rankFor(totalXP()).i, t = today();
  const ml = mistakeList(), due = ml.filter(m => m.due <= t).length;
  const body = S.track === 'reading'
    ? `<div class="reading-intro">📰 <b>IELTS Reading</b> อ่านบทความแล้วตอบ TRUE/FALSE/NOT GIVEN, เลือกตอบ, จับคู่ย่อหน้า และเติมคำ พร้อมเฉลยละเอียดทุกข้อ</div><div class="grid">${RD.map(readingCard).join('')}</div>`
    : `<div class="grid">${ALL_LEVELS.filter(l => l.track === S.track).map(levelCard).join('')}</div>`;
  app.innerHTML = `
    <div class="mascot"><span class="mascot-emoji">${RANKS[cur].e}</span><div class="bubble">${pick(GREETS)}</div></div>
    <button class="review-banner ${due ? 'has' : ''}" id="reviewBtn">
      <span class="rb-emoji">🧠</span>
      <span><b>ทบทวนคำที่ตอบผิดบ่อย</b><br><small class="muted">${due ? `ถึงรอบทบทวน ${due} คำ ⏰ แตะเลย!` : ml.length ? `มี ${ml.length} คำในคลัง · ยังไม่ถึงรอบ` : 'ยังไม่มีคำที่ตอบผิด เก่งมาก! 🎉'}</small></span>
      ${due ? `<span class="rb-count">${due}</span>` : ''}
    </button>
    <div class="tabs">
      <button class="tab ${S.track === 'cefr' ? 'active' : ''}" data-track="cefr">🌍 CEFR<br><small>A1 – C2</small></button>
      <button class="tab ${S.track === 'ielts' ? 'active' : ''}" data-track="ielts">🎓 IELTS<br><small>Band 4.0 – 8.0</small></button>
      <button class="tab ${S.track === 'reading' ? 'active' : ''}" data-track="reading">📰 Reading<br><small>แบบ IELTS</small></button>
    </div>
    ${body}
    <h3 class="section-title">🪜 เส้นทางแรงก์</h3>
    <div class="ranks">${RANKS.map((r, i) => `<div class="rank-item ${i <= cur ? 'on' : ''} ${i === cur ? 'current' : ''}"><span>${r.e}</span><small><b>${r.n}</b><br>${r.xp.toLocaleString()} XP</small></div>`).join('')}</div>
    <h3 class="section-title">🏆 เหรียญรางวัล (${S.badges.length}/${Object.keys(BADGES).length})</h3>
    <div class="badges">${Object.entries(BADGES).map(([id, b]) => `<div class="badge ${S.badges.includes(id) ? 'on' : ''}"><span>${b.e}</span><small>${b.n}</small></div>`).join('')}</div>
    <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap">
      <button class="link-btn" id="exportBtn">💾 สำรองความคืบหน้า</button>
      <button class="link-btn" id="importBtn">📂 กู้คืนจากไฟล์</button>
      <button class="link-btn" id="resetBtn">↺ รีเซ็ตทั้งหมด</button>
      <input type="file" id="importFile" accept=".json,application/json" hidden>
    </div>`;
  $('#reviewBtn').onclick = renderReviewIntro;
  on('.tab', e => { S.track = e.currentTarget.dataset.track; save(); renderHome(); });
  on('.level-card[data-key]', e => renderLevel(e.currentTarget.dataset.key));
  on('.level-card[data-rid]', e => renderReadingIntro(e.currentTarget.dataset.rid));
  $('#exportBtn').onclick = exportProgress;
  $('#importBtn').onclick = () => $('#importFile').click();
  $('#importFile').onchange = e => { importProgress(e.target.files[0]); e.target.value = ''; };
  $('#resetBtn').onclick = () => {
    if (!confirm('ลบความคืบหน้าทั้งหมดจริงไหม? (XP, เหรียญ, สตรีค, คลังคำผิด)\nแนะนำให้กด "สำรองความคืบหน้า" ก่อน')) return;
    const snd = S.sound; S = defaultState(); S.sound = snd; combo = 0; save(); updateHeader(); renderHome();
  };
  animateBars();
}

/* ================= LEVEL ================= */
function renderLevel(key) {
  const L = getLevel(key);
  if (!L) return renderHome();
  view = 'level'; cleanup();
  const xp = S.xp[key] || 0, t = tierFor(xp).t;
  const learned = L.words.filter(w => S.seen[key + '|' + w.w]).length;
  const mCount = mistakeList().filter(m => m.L.key === key).length;
  const best = S.mockBest[key] != null ? S.mockBest[key] + '%' : '-';
  app.innerHTML = `
    <button class="back" id="backHome">← หน้าหลัก</button>
    <div class="card level-head" style="--c:${L.color}"><div class="lh-id">${L.id}</div><div><h2>${L.name}</h2><p>${L.desc}</p></div></div>
    <div class="card">
      <div class="lv-row"><span>${t.e} ${t.n}</span><span>${Math.min(xp, LEVEL_MAX_XP)}/${LEVEL_MAX_XP} XP</span></div>
      <div class="bar big"><div class="fill" data-w="${Math.min(1, xp / LEVEL_MAX_XP) * 100}"></div></div>
      <div class="lv-meta">📖 เรียนแล้ว ${learned}/${L.words.length} คำ · 📝 สอบจำลองดีที่สุด ${best} · 🧠 คำผิดในคลัง ${mCount}</div>
    </div>
    <div class="modes">
      <button class="mode" data-mode="learn"><span>📖</span><b>เรียนคำศัพท์</b><small>ดูภาพ ฟังเสียง +2 XP/คำ</small></button>
      <button class="mode" data-mode="flash"><span>🃏</span><b>Flashcards</b><small>รอบละ ${FLASH_SIZE} ใบ ทบทวนไว</small></button>
      <button class="mode" data-mode="quiz"><span>❓</span><b>ตอบคำถาม</b><small>10 ข้อ ลุ้นคอมโบ 🔥</small></button>
      <button class="mode" data-mode="mock"><span>📝</span><b>ข้อสอบจำลอง</b><small>15 ข้อ จับเวลา 5 นาที</small></button>
    </div>`;
  $('#backHome').onclick = renderHome;
  on('.mode', e => {
    const m = e.currentTarget.dataset.mode;
    if (m === 'learn') renderLearn(key);
    else if (m === 'flash') startFlash(key);
    else if (m === 'quiz') startQuiz(key, 'quiz');
    else renderMockIntro(key);
  });
  animateBars();
}

/* ================= LEARN ================= */
function renderLearn(key) {
  view = 'learn'; cleanup();
  const L = getLevel(key);
  app.innerHTML = `
    <button class="back" id="toLevel">← ${L.id}</button>
    <div class="card center"><h2>📖 คำศัพท์ระดับ ${L.id}</h2><p class="muted">แตะการ์ดเพื่อฟังเสียง 🔊 · ครั้งแรกได้ +2 XP</p></div>
    <div class="word-grid">${L.words.map((w, i) => {
      const s = !!S.seen[key + '|' + w.w];
      return `<button class="word-card ${s ? 'seen' : ''}" data-i="${i}">
        ${pic(w, 'wc-emoji')}
        <span class="wc-word">${w.w} 🔊</span>
        <span class="wc-th">${w.th}</span>
        <span class="wc-def">${w.def}</span>
        <span class="wc-ex">“${highlight(w.ex, w.w)}”</span>
        <span class="seen-tag ${s ? '' : 'new'}">${s ? '✓ เรียนแล้ว' : '✨ แตะรับ +2 XP'}</span>
      </button>`;
    }).join('')}</div>
    <div class="result-btns"><button class="btn primary" id="goFlash">🃏 ไปทบทวน Flashcards</button><button class="btn ghost" id="goQuiz">❓ ไปตอบคำถาม</button></div>`;
  $('#toLevel').onclick = () => renderLevel(key);
  $('#goFlash').onclick = () => startFlash(key);
  $('#goQuiz').onclick = () => startQuiz(key, 'quiz');
  on('.word-card', e => {
    const el = e.currentTarget, w = L.words[+el.dataset.i], k = key + '|' + w.w;
    speak(w.w);
    if (!S.seen[k]) {
      S.seen[k] = true;
      el.classList.add('seen');
      const tag = el.querySelector('.seen-tag'); tag.classList.remove('new'); tag.textContent = '✓ เรียนแล้ว';
      sfx('good'); addXP(key, 2, e);
      if (Object.keys(S.seen).length >= 20) unlock('learner');
    }
    el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
  });
}

/* ================= FLASHCARDS ================= */
function startFlash(key) {
  view = 'flash'; cleanup();
  const L = getLevel(key);
  const fresh = shuffle(L.words.filter(w => !S.seen[key + '|' + w.w]));
  const old = shuffle(L.words.filter(w => S.seen[key + '|' + w.w]));
  const deck = fresh.concat(old).slice(0, FLASH_SIZE);
  F = { key, queue: deck, known: 0, total: deck.length, missed: new Set() };
  renderFlash();
}
function renderFlash() {
  if (!F.queue.length) return finishFlash();
  const w = F.queue[0];
  app.innerHTML = `
    <div class="quiz-head"><button class="back" id="flashBack">←</button><div class="bar quiz-bar"><div class="fill" style="width:${F.known / F.total * 100}%"></div></div><span class="q-count">${F.known}/${F.total}</span></div>
    <p class="hint">แตะการ์ดเพื่อพลิก 🔄 · คีย์บอร์ด: Space พลิก, ← ยังไม่จำ, → จำได้</p>
    <div class="flash" id="flash"><div class="flash-inner">
      <div class="face">${pic(w, 'fc-emoji')}<div class="fc-word">${w.w}</div><button class="speak" id="fcSpeak">🔊 ฟังเสียง</button></div>
      <div class="face face-back"><div class="fc-th">${w.th}</div><div class="fc-def">${w.def}</div><div class="fc-ex">“${highlight(w.ex, w.w)}”</div></div>
    </div></div>
    <div class="flash-btns"><button class="btn bad-btn" id="againBtn">😅 ยังไม่จำ</button><button class="btn good-btn" id="knowBtn">😎 จำได้แล้ว!</button></div>`;
  $('#flashBack').onclick = () => renderLevel(F.key);
  $('#flash').onclick = flip;
  $('#fcSpeak').onclick = e => { e.stopPropagation(); speak(w.w); };
  $('#againBtn').onclick = again;
  $('#knowBtn').onclick = know;
  if (document.activeElement) document.activeElement.blur();
}
function flip() {
  const c = $('#flash'); if (!c || !F) return;
  c.classList.toggle('flipped'); sfx('flip');
  if (c.classList.contains('flipped')) speak(F.queue[0].w);
}
function know(e) {
  if (!F || !F.queue.length) return;
  F.queue.shift(); F.known++;
  sfx('good'); confetti(30, (e && e.clientX) || innerWidth / 2, (e && e.clientY) || innerHeight / 2);
  addXP(F.key, 5, e);
  renderFlash();
}
function again(e) {
  if (!F || !F.queue.length) return;
  const w = F.queue.shift();
  if (!F.missed.has(w.w)) { F.missed.add(w.w); markWrong(F.key, w.w); save(); }
  F.queue.splice(Math.min(2, F.queue.length), 0, w);
  sfx('flip'); addXP(F.key, 1, e);
  renderFlash();
}
function finishFlash() {
  view = 'result';
  const key = F.key, L = getLevel(key), missed = F.missed.size;
  unlock('flash'); confetti(220); sfx('level');
  app.innerHTML = `<div class="card result">
    <div class="big-emoji">🃏</div><h2>จำครบ ${F.total} คำแล้ว!</h2><p class="muted">ระดับ ${L.id} · สมองคุณเก่งขึ้นอีกขั้น 🧠✨</p>
    ${missed ? `<p class="note">🧠 เพิ่มคำที่ยังไม่จำ ${missed} คำเข้าคลังทบทวนแล้ว</p>` : ''}
    <div class="result-btns"><button class="btn primary" id="again2">🔁 อีกรอบ</button><button class="btn ghost" id="toQuiz">❓ ไปตอบคำถาม</button><button class="btn ghost" id="toLevel">📚 กลับ</button></div>
  </div>`;
  $('#again2').onclick = () => startFlash(key);
  $('#toQuiz').onclick = () => startQuiz(key, 'quiz');
  $('#toLevel').onclick = () => renderLevel(key);
}

/* ================= QUIZ / MOCK / REVIEW ================= */
function buildQuestion(L, idx, type) {
  const w = L.words[idx];
  const opts = shuffle([w, ...shuffle(L.words.filter((_, j) => j !== idx)).slice(0, 3)]);
  const q = { type, key: L.key, word: w, options: opts.map(o => o.w), correct: w.w };
  if (type === 'pic') { q.label = '🖼️ ดูภาพ + ความหมาย แล้วเลือกคำที่ถูก'; q.prompt = `${pic(w, 'q-emoji')}<div class="q-text">${w.def}</div>`; }
  else if (type === 'th2en') { q.label = '🔤 คำนี้ภาษาอังกฤษคือ?'; q.prompt = `<div class="q-big">${w.th}</div>`; }
  else if (type === 'en2th') { q.label = '🔤 คำนี้แปลว่าอะไร?'; q.prompt = `<div class="q-big">${w.w}</div>`; q.options = opts.map(o => o.th); q.correct = w.th; }
  else if (type === 'blank') { q.label = '✏️ เติมคำในช่องว่าง'; q.prompt = `<div class="q-sentence">${blankify(w.ex, w.w)}</div>`; }
  else { q.label = '🎧 ฟังแล้วเลือกคำที่ได้ยิน'; q.prompt = `<button class="big-speak" id="playAudio">🔊 ฟังอีกครั้ง</button>`; }
  return q;
}
function newQ(extra) { return Object.assign({ i: 0, correct: 0, xp: 0, maxCombo: 0, answers: [], locked: false, fixed: 0 }, extra); }
function startQuiz(key, mode) {
  const L = getLevel(key);
  if (!L) return renderHome();
  view = 'quiz'; cleanup();
  const n = mode === 'mock' ? 15 : 10, idxs = L.words.map((_, i) => i);
  let order = [];
  while (order.length < n) {
    const s = shuffle(idxs);
    if (order.length && s[0] === order[order.length - 1]) s.push(s.shift());
    order = order.concat(s);
  }
  Q = newQ({ key, mode, list: order.slice(0, n).map(i => buildQuestion(L, i, pick(TYPES))) });
  if (mode === 'mock') startTimer(300, finishQuiz);
  renderQuestion();
}
function startReview(ahead) {
  const t = today();
  let pool = mistakeList();
  if (!ahead) pool = pool.filter(m => m.due <= t);
  if (!pool.length) return renderReviewIntro();
  pool.sort((a, b) => b.n - a.n);
  const chosen = shuffle(pool.slice(0, REVIEW_SIZE));
  view = 'quiz'; cleanup();
  Q = newQ({ key: null, mode: 'review', ahead: !!ahead, list: chosen.map(m => buildQuestion(m.L, m.idx, pick(TYPES))) });
  renderQuestion();
}
function renderQuestion() {
  const q = Q.list[Q.i];
  app.innerHTML = `
    <div class="quiz-head">
      <button class="back" id="quitBtn">✖</button>
      <div class="bar quiz-bar"><div class="fill" style="width:${Q.i / Q.list.length * 100}%"></div></div>
      <span class="q-count">${Q.i + 1}/${Q.list.length}</span>
      ${Q.mode === 'mock' ? `<span class="timer ${timeLeft <= 30 ? 'hurry' : ''}" id="timer">⏱️ ${fmt(Math.max(0, timeLeft))}</span>` : ''}
    </div>
    <div class="card q-card">
      <div class="q-label">${q.label}${Q.mode === 'review' ? `<span class="rev-tag">🧠 ${getLevel(q.key).id}</span>` : ''}</div>
      <div class="q-prompt">${q.prompt}</div>
      <div class="options">${q.options.map((o, i) => `<button class="opt" data-o="${i}"><span class="opt-key">${i + 1}</span>${o}</button>`).join('')}</div>
      <div class="feedback" id="feedback"></div>
    </div>`;
  on('.opt', e => answer(+e.currentTarget.dataset.o, e));
  $('#quitBtn').onclick = () => {
    if (!Q) return;
    if (Q.mode === 'mock' && !confirm('ออกจากข้อสอบตอนนี้? ผลจะไม่ถูกบันทึก')) return;
    if (Q.mode === 'review') renderReviewIntro(); else renderLevel(Q.key);
  };
  if (q.type === 'listen') {
    $('#playAudio').onclick = () => speak(q.word.w);
    setTimeout(() => { if (Q && Q.list[Q.i] === q) speak(q.word.w); }, 350);
  }
}
function answer(i, evt) {
  if (!Q || Q.locked) return;
  Q.locked = true;
  const q = Q.list[Q.i], ok = q.options[i] === q.correct;
  Q.answers[Q.i] = { chosen: q.options[i], ok };
  let mastered = false;
  if (ok) { if (!Q.ahead) mastered = markRight(q.key, q.word.w); }
  else markWrong(q.key, q.word.w);
  if (mastered) Q.fixed++;
  save();
  const btns = [...app.querySelectorAll('.opt')];
  btns.forEach(b => { b.disabled = true; });

  if (Q.mode === 'mock') {
    btns[i].classList.add('picked'); if (ok) Q.correct++;
    sfx('flip'); setTimeout(nextQuestion, 350); return;
  }

  btns.forEach((b, j) => { if (q.options[j] === q.correct) b.classList.add('correct'); });
  const fb = $('#feedback');
  const x = (evt && evt.clientX) || innerWidth / 2, y = (evt && evt.clientY) || innerHeight / 2;
  if (ok) {
    Q.correct++; combo++; Q.maxCombo = Math.max(Q.maxCombo, combo);
    const gain = 10 + Math.min(combo - 1, 5) * 2;
    Q.xp += gain;
    if (combo >= 3 && combo % 3 === 0) { sfx('combo'); confetti(120, x, y); } else { sfx('good'); confetti(45, x, y); }
    addXP(q.key, gain, evt);
    unlock('first'); if (combo >= 5) unlock('combo5'); if (combo >= 10) unlock('combo10');
    if (mastered) toast(`🩹 จำ “${q.word.w}” ได้ถาวรแล้ว!`);
    fb.innerHTML = `<span class="good">${pick(PRAISE)}</span>${combo >= 3 ? `<span class="combo-tag">🔥 คอมโบ x${combo}</span>` : ''}`;
  } else {
    combo = 0; updateHeader();
    btns[i].classList.add('wrong'); sfx('bad');
    const card = $('.q-card'); card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
    fb.innerHTML = `<span class="bad">${pick(OOPS)}</span><div class="explain">${q.word.e} <b>${q.word.w}</b> = ${q.word.th}<br><i>${highlight(q.word.ex, q.word.w)}</i><br><small>🧠 เก็บเข้าคลังทบทวนแล้ว</small></div>`;
  }
  fb.insertAdjacentHTML('beforeend', `<button class="btn primary next" id="nextBtn">${Q.i + 1 < Q.list.length ? 'ข้อต่อไป ➜ (Enter)' : 'ดูผลลัพธ์ 🎉'}</button>`);
  $('#nextBtn').onclick = nextQuestion;
  setTimeout(() => { if (Q && Q.list[Q.i] === q) speak(q.word.w); }, 500);
}
function nextQuestion() {
  if (!Q || !Q.locked) return;
  Q.locked = false; Q.i++;
  if (Q.i >= Q.list.length) finishQuiz(); else renderQuestion();
}
function verdict(L, pct) {
  const tag = L.track === 'ielts' ? 'IELTS Band ' + L.id : 'CEFR ' + L.id;
  if (pct >= 80) return `🎉 คำศัพท์ของคุณพร้อมสำหรับ ${tag} แล้ว!`;
  if (pct >= 60) return `💪 ใกล้แล้ว! ทบทวนอีกนิดก็ผ่าน ${tag}`;
  return '📚 ลองทบทวน Flashcards แล้วกลับมาสู้ใหม่นะ!';
}
function finishQuiz() {
  stopTimer();
  if (!Q) return;
  const R = Q; Q = null; view = 'result';
  const isRev = R.mode === 'review', L = R.key ? getLevel(R.key) : null;
  const total = R.list.length, pct = Math.round(R.correct / total * 100);
  let gained = R.xp, extra = '';
  if (R.mode === 'mock') {
    gained = R.correct * 15 + (pct >= 80 ? 50 : 0);
    S.mockBest[R.key] = Math.max(S.mockBest[R.key] || 0, pct); save();
    if (gained) addXP(R.key, gained);
    unlock('mock'); if (pct === 100) unlock('perfect');
    extra = `<p class="verdict">${verdict(L, pct)}</p>${pct >= 80 ? '<p class="muted">รวมโบนัส +50 XP (ผ่านเกณฑ์ 80%)</p>' : ''}<p class="note">* ข้อสอบจำลองนี้วัดเฉพาะคำศัพท์ ไม่ใช่คะแนน IELTS อย่างเป็นทางการ</p>`;
  } else if (pct === 100) {
    addXP(R.key || R.list[0].key, 20); gained += 20;
    extra = '<p class="verdict">🌟 Perfect! รับโบนัส +20 XP</p>';
  }
  if (isRev) {
    const left = mistakeList().filter(m => m.due <= today()).length;
    extra += `<p class="verdict">${R.fixed ? `🩹 จำได้ถาวรเพิ่ม ${R.fixed} คำ!` : '🧠 ทบทวนเสร็จ! คำเหล่านี้จะกลับมาตามรอบ'}</p><p class="muted">${left ? `ยังเหลือคำที่ถึงรอบอีก ${left} คำ` : 'วันนี้ทบทวนครบแล้ว 🎉'}</p>`;
  }
  const wrongN = R.answers.filter(a => a && !a.ok).length;
  if (wrongN && !isRev) extra += `<p class="note">🧠 เพิ่มคำที่ตอบผิด ${wrongN} คำเข้าคลังทบทวนแล้ว</p>`;
  if (pct >= 60) { confetti(220); sfx('level'); }
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
  const face = pct >= 90 ? '🏆' : pct >= 70 ? '🤩' : pct >= 40 ? '🙂' : '💪';
  app.innerHTML = `<div class="card result">
    <div class="big-emoji">${face}</div>
    <div class="stars">${'⭐'.repeat(stars)}<span class="dim">${'⭐'.repeat(3 - stars)}</span></div>
    <div class="score">${R.correct}/${total} <small>(${pct}%)</small></div>
    <p>ได้รับ <b>+${gained} XP</b>${R.mode !== 'mock' ? ` · คอมโบสูงสุด ${R.maxCombo} 🔥` : ''}</p>
    ${extra}
    <div class="result-btns">
      <button class="btn primary" id="againQ">${isRev ? '🧠 กลับคลังคำผิด' : R.mode === 'mock' ? '🔁 สอบอีกครั้ง' : '🔁 เล่นอีกรอบ'}</button>
      <button class="btn ghost" id="toLevel">${isRev ? '🏠 หน้าหลัก' : `📚 กลับไป ${L.id}`}</button>
    </div>
    <div class="review"><h3>📋 ทบทวนคำตอบ</h3>${R.list.map((qq, i) => {
      const a = R.answers[i], ok = !!(a && a.ok);
      return `<div class="review-item ${ok ? '' : 'no'}">${ok ? '✅' : '❌'} ${qq.word.e} <b>${qq.word.w}</b> = ${qq.word.th}${a && !a.ok ? ` <small>(คุณตอบ: ${a.chosen})</small>` : ''}${!a ? ' <small>(ไม่ได้ตอบ)</small>' : ''}</div>`;
    }).join('')}</div>
  </div>`;
  window.scrollTo(0, 0);
  $('#againQ').onclick = () => isRev ? renderReviewIntro() : startQuiz(R.key, R.mode);
  $('#toLevel').onclick = () => isRev ? renderHome() : renderLevel(R.key);
}
function renderMockIntro(key) {
  view = 'mockintro'; cleanup();
  const L = getLevel(key);
  app.innerHTML = `
    <button class="back" id="toLevel">← ${L.id}</button>
    <div class="card center">
      <div class="big-emoji">📝</div>
      <h2>ข้อสอบจำลอง ${L.track === 'ielts' ? 'IELTS Band ' + L.id : 'CEFR ' + L.id}</h2>
      <ul class="rules">
        <li>⏱️ 15 ข้อ ภายใน 5 นาที</li>
        <li>🙈 ไม่เฉลยระหว่างสอบ (เหมือนสอบจริง)</li>
        <li>⭐ ข้อละ 15 XP · ได้ ≥80% รับโบนัส +50 XP</li>
        <li>🏅 คะแนนดีที่สุด: ${S.mockBest[key] != null ? S.mockBest[key] + '%' : 'ยังไม่มี'}</li>
      </ul><br>
      <button class="btn primary" id="startMock">🚀 เริ่มสอบเลย!</button>
    </div>`;
  $('#toLevel').onclick = () => renderLevel(key);
  $('#startMock').onclick = () => startQuiz(key, 'mock');
}

/* ================= REVIEW INTRO ================= */
function renderReviewIntro() {
  view = 'review'; cleanup();
  const t = today();
  const ml = mistakeList().sort((a, b) => (b.due <= t) - (a.due <= t) || b.n - a.n);
  const due = ml.filter(m => m.due <= t).length;
  app.innerHTML = `
    <button class="back" id="toHome">← หน้าหลัก</button>
    <div class="card center">
      <div class="big-emoji">🧠</div>
      <h2>คลังคำที่ตอบผิดบ่อย</h2>
      <p class="muted">ตอบผิดเมื่อไหร่ คำจะเข้าคลังนี้อัตโนมัติ<br>ตอบถูกตามรอบครบ 4 ครั้ง (วันนี้ → +1 → +3 → +7 วัน) = จำได้ถาวร 🎉</p>
      <div class="result-btns">
        <button class="btn primary" id="startRev" ${due ? '' : 'disabled'}>${due ? `🚀 ทบทวน ${Math.min(due, REVIEW_SIZE)} คำ` : '✅ วันนี้ไม่มีคำถึงรอบ'}</button>
        ${ml.length && !due ? '<button class="btn ghost" id="aheadRev">⏩ ทบทวนล่วงหน้า</button>' : ''}
      </div>
      ${ml.length && !due ? '<p class="note">ทบทวนล่วงหน้าใช้ฝึกเพิ่มได้ แต่ไม่นับรอบ</p>' : ''}
      <p class="note">🩹 จำได้ถาวรไปแล้ว ${S.fixed} คำ</p>
    </div>
    ${ml.length ? `<div class="card"><h3>📋 คำในคลัง (${ml.length})</h3><div class="mistakes">${ml.slice(0, 60).map(m => `
      <div class="mistake ${m.due <= t ? 'due' : ''}">
        <span class="mk-e">${m.w.e}</span>
        <div class="mk-main"><b>${m.w.w}</b> <span class="rev-tag">${m.L.id}</span><br><small class="muted">${m.w.th}</small></div>
        <div class="mk-side"><span class="mk-n">❌ ผิด ${m.n} ครั้ง</span><span class="dots">${dots(m.box)}</span><small>${m.due <= t ? '⏰ ถึงรอบแล้ว' : 'อีก ' + dayDiff(t, m.due) + ' วัน'}</small></div>
      </div>`).join('')}</div></div>`
    : `<div class="card center"><p>ยังไม่มีคำที่ตอบผิดเลย เก่งมาก! 🎉<br><span class="muted">ลองเล่นตอบคำถามหรือข้อสอบจำลองก่อน แล้วคำที่ตอบผิดจะมาอยู่ที่นี่</span></p></div>`}`;
  $('#toHome').onclick = renderHome;
  const sb = $('#startRev'); if (sb && due) sb.onclick = () => startReview(false);
  const ab = $('#aheadRev'); if (ab) ab.onclick = () => startReview(true);
}

/* ================= READING (IELTS) ================= */
function renderReadingIntro(id) {
  const p = getReading(id);
  if (!p) return renderHome();
  view = 'readintro'; cleanup();
  const best = S.readingBest[id];
  app.innerHTML = `
    <button class="back" id="toHome">← หน้าหลัก</button>
    <div class="card center">
      <div class="big-emoji">${p.emoji}</div>
      <h2>${p.title}</h2>
      <p class="muted">IELTS Reading · Band ${p.band}</p>
      <ul class="rules">
        <li>⏱️ ${p.questions.length} ข้อ ภายใน ${p.minutes} นาที</li>
        <li>📝 TRUE/FALSE/NOT GIVEN · เลือกตอบ · จับคู่ย่อหน้า · เติมคำ</li>
        <li>⭐ ข้อละ 15 XP · ได้ ≥75% รับโบนัส +30 XP</li>
        <li>🏅 คะแนนดีที่สุด: ${best != null ? best + '%' : 'ยังไม่มี'}</li>
      </ul><br>
      <button class="btn primary" id="startRd">🚀 เริ่มทำข้อสอบ</button>
      <p class="note">💡 ทริก: อ่านคำถามก่อน แล้วค่อยกวาดตาหาคำสำคัญในบทความ (Scanning)</p>
    </div>`;
  $('#toHome').onclick = renderHome;
  $('#startRd').onclick = () => startReading(id);
}
function startReading(id) {
  const p = getReading(id);
  if (!p) return renderHome();
  view = 'reading'; cleanup();
  RS = { p, ans: {}, done: false };
  const letters = p.paras.map((_, i) => String.fromCharCode(65 + i));
  const choice = (i, v, label) => `<button class="rc" data-q="${i}" data-v="${v}">${label}</button>`;
  let lastT = null;
  const qsHtml = p.questions.map((q, i) => {
    let head = '';
    if (q.t !== lastT) { head = `<div class="q-instr">${INSTR[q.t]}</div>`; lastT = q.t; }
    let body;
    if (q.t === 'tfng') body = ['TRUE', 'FALSE', 'NOT GIVEN'].map(v => choice(i, v, v)).join('');
    else if (q.t === 'mcq') body = q.o.map((o, j) => choice(i, j, `${'ABCD'[j]}. ${o}`)).join('');
    else if (q.t === 'para') body = letters.map(l => choice(i, l, l)).join('');
    else body = `<input class="gap-input" data-q="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="พิมพ์คำตอบ">`;
    return `${head}<div class="rq"><div class="rq-text"><b>${i + 1}.</b> ${q.q}</div><div class="rq-opts ${q.t}">${body}</div></div>`;
  }).join('');
  app.innerHTML = `
    <div class="quiz-head">
      <button class="back" id="rdBack">✖</button>
      <div class="bar quiz-bar"><div class="fill" id="rdFill" style="width:0%"></div></div>
      <span class="q-count" id="rdCount">0/${p.questions.length}</span>
      <span class="timer" id="timer">⏱️ ${fmt(p.minutes * 60)}</span>
    </div>
    <div class="reading-wrap">
      <article class="card passage"><h2>${p.emoji} ${p.title}</h2>${p.paras.map((t, i) => `<p class="para"><span class="para-l">${letters[i]}</span>${t}</p>`).join('')}</article>
      <section class="card">${qsHtml}<button class="btn primary next" id="submitRd">✅ ส่งคำตอบ</button></section>
    </div>`;
  const progress = () => {
    if (!RS) return;
    const n = Object.values(RS.ans).filter(v => String(v).trim() !== '').length, tot = p.questions.length;
    $('#rdCount').textContent = n + '/' + tot;
    $('#rdFill').style.width = (n / tot * 100) + '%';
  };
  on('.rc', e => {
    if (!RS || RS.done) return;
    const b = e.currentTarget, i = b.dataset.q;
    app.querySelectorAll(`.rc[data-q="${i}"]`).forEach(x => x.classList.remove('picked'));
    b.classList.add('picked'); RS.ans[i] = b.dataset.v; sfx('flip'); progress();
  });
  app.querySelectorAll('.gap-input').forEach(inp => inp.addEventListener('input', () => { if (RS && !RS.done) { RS.ans[inp.dataset.q] = inp.value; progress(); } }));
  $('#rdBack').onclick = () => { if (confirm('ออกจากข้อสอบ? คำตอบจะไม่ถูกบันทึก')) renderHome(); };
  $('#submitRd').onclick = () => {
    if (!RS) return;
    const left = p.questions.length - Object.values(RS.ans).filter(v => String(v).trim() !== '').length;
    if (left && !confirm(`ยังไม่ได้ตอบอีก ${left} ข้อ ส่งเลยไหม?`)) return;
    finishReading();
  };
  startTimer(p.minutes * 60, finishReading);
}
function gradeR(q, a) {
  if (a == null || String(a).trim() === '') return false;
  if (q.t === 'gap') return q.a.map(norm).includes(norm(a));
  return String(q.a) === String(a);
}
function ansText(q, v) {
  if (v == null || String(v).trim() === '') return '—';
  if (q.t === 'mcq') return 'ABCD'[+v] + '. ' + esc(q.o[+v]);
  if (q.t === 'para') return 'ย่อหน้า ' + esc(v);
  return esc(v);
}
function estBand(correct, total) {
  const raw = Math.round(correct / total * 40);
  return BAND_TABLE.find(([min]) => raw >= min)[1];
}
function finishReading() {
  stopTimer();
  if (!RS || RS.done) return;
  RS.done = true;
  const { p, ans } = RS; RS = null; view = 'result';
  const res = p.questions.map((q, i) => ({ q, a: ans[i], ok: gradeR(q, ans[i]) }));
  const correct = res.filter(r => r.ok).length, total = res.length, pct = Math.round(correct / total * 100);
  const band = estBand(correct, total), gained = correct * 15 + (pct >= 75 ? 30 : 0);
  S.readingBest[p.id] = Math.max(S.readingBest[p.id] || 0, pct); save();
  if (gained) addXP(p.level, gained);
  unlock('reader'); if (band >= 7) unlock('band7');
  if (pct >= 60) { confetti(220); sfx('level'); }
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
  const face = pct >= 90 ? '🏆' : pct >= 70 ? '🤩' : pct >= 40 ? '🙂' : '💪';
  app.innerHTML = `<div class="card result">
    <div class="big-emoji">${face}</div>
    <div class="stars">${'⭐'.repeat(stars)}<span class="dim">${'⭐'.repeat(3 - stars)}</span></div>
    <div class="score">${correct}/${total} <small>(${pct}%)</small></div>
    <div class="band">≈ Reading Band ${band ? band.toFixed(1) : 'ต่ำกว่า 2.5'}</div>
    <p class="note">* ประมาณการจากข้อสอบสั้น ${total} ข้อ (ข้อสอบจริงมี 40 ข้อ) ใช้ดูแนวโน้มเท่านั้น</p>
    <p>ได้รับ <b>+${gained} XP</b>${pct >= 75 ? ' (รวมโบนัส +30)' : ''}</p>
    <div class="result-btns">
      <button class="btn primary" id="againRd">🔁 ทำอีกครั้ง</button>
      <button class="btn ghost" id="otherRd">📰 เลือกชุดอื่น</button>
    </div>
    <div class="review"><h3>📋 เฉลยพร้อมคำอธิบาย</h3>${res.map((r, i) => `
      <div class="review-item ${r.ok ? '' : 'no'}">${r.ok ? '✅' : '❌'} <b>${i + 1}.</b> ${r.q.q}
        <div class="ans-line">คุณตอบ: <b>${ansText(r.q, r.a)}</b> · เฉลย: <b>${ansText(r.q, r.q.t === 'gap' ? r.q.a[0] : r.q.a)}</b></div>
        <div class="explain">${r.q.ex}</div>
      </div>`).join('')}</div>
  </div>`;
  window.scrollTo(0, 0);
  $('#againRd').onclick = () => startReading(p.id);
  $('#otherRd').onclick = () => { S.track = 'reading'; save(); renderHome(); };
}

/* ================= KEYBOARD ================= */
document.addEventListener('keydown', e => {
  if (view === 'quiz' && Q) {
    if (!Q.locked && /^[1-4]$/.test(e.key)) {
      const b = app.querySelector(`.opt[data-o="${+e.key - 1}"]`);
      if (b) b.click();
    } else if (Q.locked && Q.mode !== 'mock' && e.key === 'Enter') {
      e.preventDefault(); nextQuestion();
    }
  } else if (view === 'flash' && F) {
    if (e.key === ' ') { e.preventDefault(); flip(); }
    else if (e.key === 'ArrowRight') know();
    else if (e.key === 'ArrowLeft') again();
  }
});

/* ================= DATA CHECK (ดูผลใน Console / F12) ================= */
(function checkData() {
  const problems = [];
  ALL_LEVELS.forEach(l => {
    const ws = new Set(), ths = new Set();
    if (l.words.length < 4) problems.push(`${l.key}: มีคำน้อยกว่า 4 คำ`);
    l.words.forEach(w => {
      const k = w.w.toLowerCase();
      if (ws.has(k)) problems.push(`${l.key}: คำซ้ำ "${w.w}"`);
      if (ths.has(w.th)) problems.push(`${l.key}: ความหมายไทยซ้ำ "${w.th}"`);
      const hits = (w.ex.match(new RegExp('\\b' + escRe(w.w) + '\\b', 'gi')) || []).length;
      if (hits === 0) problems.push(`${l.key}: ประโยคของ "${w.w}" ไม่มีคำนี้`);
      if (hits > 1) problems.push(`${l.key}: "${w.w}" อยู่ในประโยคเกิน 1 ครั้ง`);
      ws.add(k); ths.add(w.th);
    });
  });
  const ids = new Set();
  RD.forEach(p => {
    if (ids.has(p.id)) problems.push(`Reading ${p.id}: id ซ้ำ`); ids.add(p.id);
    if (!getLevel(p.level)) problems.push(`Reading ${p.id}: ไม่มีระดับ "${p.level}"`);
    const text = norm(p.paras.join(' ')), n = p.paras.length;
    p.questions.forEach((q, i) => {
      const tag = `Reading ${p.id} ข้อ ${i + 1}`;
      if (!INSTR[q.t]) problems.push(`${tag}: ชนิดคำถามไม่ถูกต้อง`);
      if (q.t === 'tfng' && !['TRUE', 'FALSE', 'NOT GIVEN'].includes(q.a)) problems.push(`${tag}: เฉลย TFNG ผิดรูปแบบ`);
      if (q.t === 'mcq' && !(Array.isArray(q.o) && q.a >= 0 && q.a < q.o.length)) problems.push(`${tag}: เฉลย MCQ เกินจำนวนตัวเลือก`);
      if (q.t === 'para' && !(typeof q.a === 'string' && q.a.charCodeAt(0) >= 65 && q.a.charCodeAt(0) - 65 < n)) problems.push(`${tag}: เฉลยย่อหน้าไม่มีอยู่จริง`);
      if (q.t === 'gap') {
        if (!Array.isArray(q.a) || !q.a.length) problems.push(`${tag}: ไม่มีเฉลยเติมคำ`);
        else if (!q.a.some(a => text.includes(norm(a)))) problems.push(`${tag}: เฉลยเติมคำไม่อยู่ในบทความ`);
      }
    });
  });
  const total = ALL_LEVELS.reduce((a, l) => a + l.words.length, 0);
  if (problems.length) console.warn('⚠️ WordQuest พบปัญหาข้อมูล:\n' + problems.join('\n'));
  else console.log(`✅ WordQuest: ข้อมูลผ่านทั้งหมด ${total} คำ · Reading ${RD.length} ชุด`);
})();

/* ================= INIT ================= */
$('#homeBtn').onclick = () => renderHome();
$('#soundBtn').onclick = () => { S.sound = !S.sound; save(); updateHeader(); if (S.sound) sfx('good'); };
$('#modal').onclick = e => { if (e.target.id === 'modal') closeModal(); };
updateHeader();
renderHome();
const st = currentStreak();
if (st > 0) setTimeout(() => toast(`🔥 สตรีค ${st} วันติด! มาเก็บ XP ต่อกัน`), 600);