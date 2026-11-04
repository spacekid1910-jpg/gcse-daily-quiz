// French vocabulary questions, generated from tools/data/french-vocab.txt (one "French<TAB>English" pair per line).
// Each word becomes one multiple-choice question, alternating French -> English and English -> French.
// Wrong answers come from other words of the same kind (noun / verb / other) and never share a meaning with the right one.
const fs = require('fs');
const path = require('path');

const TOPIC = 'Foundation and Higher word lists';

// split "a, b (c, d), e" on commas outside brackets
function parts(gloss) {
  const out = []; let depth = 0, cur = '';
  for (const ch of gloss) {
    if (ch === '(') depth++;
    if (ch === ')') depth = Math.max(0, depth - 1);
    if ((ch === ',' || ch === ';') && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out.filter(Boolean);
}
const STOP = new Set(['the', 'and', 'for', 'who', 'what', 'that', 'this', 'with', 'from', 'not', 'one', 'out', 'off', 'get', 'you', 'your']);
const tokens = (s) => new Set(s.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter((w) => w.length >= 3 && !STOP.has(w)));
function kind(fr, en) {
  if (/^(le|la|les|l'|l’|un|une)(\s|(?=\p{L}))/u.test(fr)) return 'noun';
  if (/^to\s/.test(en) || /^(se|s')/.test(fr)) return 'verb';
  return 'other';
}

const cards = [];
const seen = new Set();
for (const line of fs.readFileSync(path.join(__dirname, '..', 'data', 'french-vocab.txt'), 'utf8').split(/\r?\n/)) {
  const cols = line.split('\t');
  if (cols.length !== 2) continue;
  const fr = cols[0].trim(), full = cols[1].replace(/\s+/g, ' ').trim();
  if (!fr || !full || seen.has(fr.toLowerCase())) continue;
  seen.add(fr.toLowerCase());
  const short = parts(full).slice(0, 2).join(', ');
  cards.push({ fr, full, short, kind: kind(fr, full), tok: tokens(full) });
}

function rngFor(seed) {
  let a = (seed * 2654435761) >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const byKind = { noun: [], verb: [], other: [] };
cards.forEach((c, i) => byKind[c.kind].push(i));

const qs = [];
cards.forEach((c, i) => {
  const rng = rngFor(i + 7);
  // English -> French only when the English prompt can't also describe a different word (e.g. "fire" fits le feu and l'incendie)
  const promptToks = tokens(c.short);
  const ambiguous = promptToks.size === 0 || cards.some((d, j) => j !== i && [...promptToks].every((t) => d.tok.has(t)));
  const toEnglish = i % 2 === 0 || ambiguous;
  const pool = byKind[c.kind].filter((j) => j !== i);
  const shuf = (a) => { const b = a.slice(); for (let k = b.length - 1; k > 0; k--) { const r = Math.floor(rng() * (k + 1)); [b[k], b[r]] = [b[r], b[k]]; } return b; };
  const wrong = [];
  const used = new Set([toEnglish ? c.short.toLowerCase() : c.fr.toLowerCase()]);
  for (const j of shuf(pool)) {
    const d = cards[j];
    const text = toEnglish ? d.short : d.fr;
    if (used.has(text.toLowerCase())) continue;
    let clash = false;
    for (const t of d.tok) if (c.tok.has(t)) { clash = true; break; }
    if (clash) continue;
    wrong.push(text); used.add(text.toLowerCase());
    if (wrong.length === 3) break;
  }
  if (wrong.length < 3) return;
  if (toEnglish) qs.push([TOPIC, `What does "${c.fr}" mean?`, c.short, wrong, `${c.fr} = ${c.full}.`]);
  else qs.push([TOPIC, `How do you say "${c.short}" in French?`, c.fr, wrong, `${c.fr} = ${c.full}.`]);
});

module.exports = { subject: 'French', qs };
