// German vocabulary questions, generated from tools/data/german-vocab.txt (the AQA word list as set up in Memrise).
// Each card becomes one multiple-choice question. Cards alternate between German -> English and English -> German.
// Wrong answers come from other cards of the same kind (noun / verb / other) and never share a meaning with the right one.
const fs = require('fs');
const path = require('path');

// Memrise level -> tracker topic
const TOPIC_OF = {
  'Theme 1 - Food and drink': 'Healthy living and lifestyle', 'Theme 1 - Sport and exercise': 'Healthy living and lifestyle',
  'Theme 1 - Illnesses and accidents': 'Healthy living and lifestyle', 'Theme 1 - Body parts': 'Healthy living and lifestyle',
  'Theme 1 - Stress and problems': 'Healthy living and lifestyle',
  'Theme 1 - Education': 'Education and work', 'Theme 1 - School uniform': 'Education and work', 'Theme 1 - School subjects and timetable': 'Education and work',
  'Theme 1 - Extra-curricular activities': 'Education and work', 'Theme 1 - School facilities and transport': 'Education and work',
  'Theme 1 - Opinions of school and teachers': 'Education and work', 'Theme 1 - Success at school': 'Education and work',
  'Theme 1 - Problems at school': 'Education and work', 'Theme 1 - Work': 'Education and work', 'Theme 1 - Workplaces': 'Education and work', 'Theme 1 - Jobs': 'Education and work',
  'Theme 1 - Family': 'Identity and relationships with others', 'Theme 1 - Friendships and relationships': 'Identity and relationships with others',
  'Theme 1 - Sexuality and gender': 'Identity and relationships with others', 'Theme 1 - Colours': 'Identity and relationships with others',
  'Theme 1 - Personality and opinions': 'Identity and relationships with others', 'Theme 1 - Birthdays': 'Identity and relationships with others',
  'Theme 1 - Appearance and age': 'Identity and relationships with others', 'Theme 1 - Pets': 'Identity and relationships with others',
  'Theme 1 - Nationalities and languages': 'Identity and relationships with others', 'Theme 1 - Religion': 'Identity and relationships with others',
  'Theme 1 - Life and death': 'Identity and relationships with others',
  'Theme 2 - Celebrity culture': 'Celebrity culture',
  'Theme 2 - Religion': 'Customs, festivals and celebrations', 'Theme 2 - Parties and celebrations': 'Customs, festivals and celebrations',
  'Theme 2 - Festivals and holidays': 'Customs, festivals and celebrations',
  'Theme 2 - Free time and social activities': 'Free-time activities', 'Theme 2 - Sport and outdoor activities': 'Free-time activities',
  'Theme 2 - Food and drink': 'Free-time activities', 'Theme 2 - Cultural activities (TV, film, reading, music, museums)': 'Free-time activities',
  'Theme 2 - Shopping and clothes': 'Free-time activities',
  'Theme 3 - Where people live': 'The environment and where people live', 'Theme 3 - Types of accommodation': 'The environment and where people live',
  'Theme 3 - Countries, rivers and seas': 'The environment and where people live', 'Theme 3 - Rooms and furniture': 'The environment and where people live',
  'Theme 3 - Places in the town': 'The environment and where people live', 'Theme 3 - Transport and directions': 'The environment and where people live',
  'Theme 3 - The natural world': 'The environment and where people live', 'Theme 3 - Environmental problems': 'The environment and where people live',
  'Theme 3 - Helping the environment': 'The environment and where people live', 'Theme 3 - Conflict': 'The environment and where people live',
  'Theme 3 - Politics': 'The environment and where people live',
  'Theme 3 - Technology and devices': 'Media and technology', 'Theme 3 - Internet and digital communication': 'Media and technology',
  'Theme 3 - Online entertainment': 'Media and technology', 'Theme 3 - Dangers and online safety': 'Media and technology',
  'Theme 3 - Accommodation': 'Travel and tourism, including places of interest', 'Theme 3 - Tourist attractions (countryside and coast)': 'Travel and tourism, including places of interest',
  'Theme 3 - Food and drink': 'Travel and tourism, including places of interest', 'Theme 3 - Seasons, weather and compass points': 'Travel and tourism, including places of interest',
  'Theme 3 - Transport': 'Travel and tourism, including places of interest',
};

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
const STOP = new Set(['the', 'and', 'for', 'who', 'what', 'that', 'this', 'with', 'from', 'not', 'one', 'out', 'off', 'get']);
const tokens = (s) => new Set(s.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter((w) => w.length >= 3 && !STOP.has(w)));
const kind = (de) => (/^(der|die|das)\s/.test(de) ? 'noun' : (/^[a-zäöüß]+(en|ln|rn)$/.test(de) ? 'verb' : 'other'));

const cards = [];
let level = null;
for (const line of fs.readFileSync(path.join(__dirname, '..', 'data', 'german-vocab.txt'), 'utf8').split(/\r?\n/)) {
  const m = /^## LEVEL:\s*(.+)$/.exec(line);
  if (m) { level = m[1].trim(); if (!TOPIC_OF[level]) throw new Error('german-vocab: unmapped level "' + level + '"'); continue; }
  const cols = line.split('\t');
  if (cols.length !== 2 || !level) continue;
  const de = cols[0].trim();
  const full = cols[1].replace(/\(\s*\)/g, '').replace(/\s+/g, ' ').trim();
  if (!de || !full) continue;
  const ps = parts(full);
  const short = ps.slice(0, 2).join(', ');
  cards.push({ de, full, short, topic: TOPIC_OF[level], level, kind: kind(de), tok: tokens(full) });
}

function rngFor(seed) {
  let a = (seed * 2654435761) >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const byKind = { noun: [], verb: [], other: [] };
cards.forEach((c, i) => byKind[c.kind].push(i));

const qs = [];
cards.forEach((c, i) => {
  const rng = rngFor(i + 1);
  // English -> German only when the English prompt can't also describe a different card (e.g. "to pay" fits both zahlen and bezahlen)
  const promptToks = tokens(c.short);
  const ambiguous = promptToks.size === 0 || cards.some((d, j) => j !== i && [...promptToks].every((t) => d.tok.has(t)));
  const toEnglish = i % 2 === 0 || ambiguous;
  const pool = byKind[c.kind].filter((j) => j !== i);
  // shuffled candidates; prefer cards from the same level so the wrong answers feel close
  const same = pool.filter((j) => cards[j].level === c.level);
  const rest = pool.filter((j) => cards[j].level !== c.level);
  const shuf = (a) => { const b = a.slice(); for (let k = b.length - 1; k > 0; k--) { const r = Math.floor(rng() * (k + 1)); [b[k], b[r]] = [b[r], b[k]]; } return b; };
  const cand = shuf(same).slice(0, 12).concat(shuf(rest));
  const wrong = [];
  const used = new Set([toEnglish ? c.short.toLowerCase() : c.de.toLowerCase()]);
  for (const j of cand) {
    const d = cards[j];
    const text = toEnglish ? d.short : d.de;
    if (used.has(text.toLowerCase())) continue;
    let clash = false;
    for (const t of d.tok) if (c.tok.has(t)) { clash = true; break; }
    if (clash) continue;
    wrong.push(text); used.add(text.toLowerCase());
    if (wrong.length === 3) break;
  }
  if (wrong.length < 3) return;   // cannot happen with ~950 cards, but never emit a broken question
  if (toEnglish) {
    qs.push([c.topic, `What does "${c.de}" mean?`, c.short, wrong, `${c.de} = ${c.full}.`]);
  } else {
    qs.push([c.topic, `How do you say "${c.short}" in German?`, c.de, wrong, `${c.de} = ${c.full}.`]);
  }
});

module.exports = { subject: 'German', qs };
