// Builds ../questions.json from tools/src/*.js and checks every question.
// Run:  node tools/build-questions.js
const fs = require('fs');
const path = require('path');

const topics = JSON.parse(fs.readFileSync(path.join(__dirname, 'topics.json'), 'utf8'));
const PREFIX = {
  'Biology': 'bio', 'Chemistry': 'chem', 'Physics': 'phys', 'Required Practicals': 'rp',
  'Maths': 'maths', 'Computer Science': 'cs', 'German': 'de', 'French': 'fr',
  'GCSE History': 'hist', 'English Literature': 'lit', 'English Language': 'lang',
};

const srcDir = path.join(__dirname, 'src');
const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.js')).sort();

const out = [];
const problems = [];
const counters = {};
const covered = {};

for (const f of files) {
  const mod = require(path.join(srcDir, f));
  const groups = Array.isArray(mod) ? mod : [mod];
  for (const { subject, qs } of groups) {
    if (!topics[subject]) { problems.push(`${f}: unknown subject "${subject}"`); continue; }
    const unitsOf = new Map();
    for (const t of topics[subject]) {
      if (!unitsOf.has(t.topic)) unitsOf.set(t.topic, []);
      unitsOf.get(t.topic).push(t.unit);
    }
    qs.forEach((row, i) => {
      const [topic, q, a, w, why, unitHint] = row;
      const where = `${f} #${i + 1} (${subject} / ${topic})`;
      if (!unitsOf.has(topic)) { problems.push(`${where}: topic not in tracker`); return; }
      // A topic name can appear under several units (e.g. "Themes" for each English text).
      // Rows for those must give a 6th element: a word that appears in the intended unit's name.
      const cands = unitsOf.get(topic);
      let unit;
      if (unitHint) {
        const hit = cands.filter((u) => u.toLowerCase().includes(unitHint.toLowerCase()));
        if (hit.length !== 1) { problems.push(`${where}: unit hint "${unitHint}" matches ${hit.length} units`); return; }
        unit = hit[0];
      } else if (cands.length === 1) {
        unit = cands[0];
      } else { problems.push(`${where}: topic is in ${cands.length} units - add a unit hint as the 6th element`); return; }
      if (![q, a, why].every((s) => typeof s === 'string' && s.trim())) { problems.push(`${where}: empty q/answer/why`); return; }
      if (!Array.isArray(w) || w.length !== 3) { problems.push(`${where}: need exactly 3 wrong options`); return; }
      const norm = (s) => String(s).trim().toLowerCase();
      const all = [a, ...w].map(norm);
      if (new Set(all).size !== 4) { problems.push(`${where}: options not all distinct`); return; }
      counters[subject] = (counters[subject] || 0) + 1;
      const id = `${PREFIX[subject]}-${String(counters[subject]).padStart(3, '0')}`;
      out.push({ id, subject, unit, topic, q: q.trim(), a: a.trim(), w: w.map((s) => s.trim()), why: why.trim() });
      (covered[subject] = covered[subject] || new Set()).add(unit + '||' + topic);
    });
  }
}

console.log('Questions per subject:');
let total = 0;
for (const s of Object.keys(topics)) {
  const n = counters[s] || 0; total += n;
  const cov = covered[s] ? covered[s].size : 0;
  console.log(`  ${s.padEnd(20)} ${String(n).padStart(4)} questions   covers ${cov}/${topics[s].length} tracker rows`);
}
console.log(`  TOTAL ${total}`);

if (process.argv.includes('--missing')) {
  console.log('\nTracker rows with no question yet:');
  for (const s of Object.keys(topics)) {
    const miss = topics[s].filter((t) => !(covered[s] && covered[s].has(t.unit + '||' + t.topic)));
    if (miss.length) console.log(`  ${s}: ` + miss.map((m) => m.topic).join(' | '));
  }
}

if (problems.length) {
  console.error('\nPROBLEMS:');
  problems.forEach((p) => console.error('  - ' + p));
  process.exit(1);
}
const root = path.join(__dirname, '..');
fs.writeFileSync(path.join(root, 'questions.json'), JSON.stringify(out));
console.log('\nWrote questions.json');

// ---- check studied.json ----
const studiedFile = JSON.parse(fs.readFileSync(path.join(root, 'studied.json'), 'utf8'));
const studiedProblems = [];
let studiedQs = 0;
for (const s of studiedFile.studied || []) {
  const label = [s.subject, s.unit, s.topic].filter(Boolean).join(' / ');
  if (!topics[s.subject]) { studiedProblems.push(`studied.json: unknown subject "${s.subject}"`); continue; }
  if (s.unit && !topics[s.subject].some((t) => t.unit === s.unit)) { studiedProblems.push(`studied.json: no such unit: ${label}`); continue; }
  if (s.topic && !topics[s.subject].some((t) => t.topic === s.topic)) { studiedProblems.push(`studied.json: no such topic: ${label}`); continue; }
  const n = out.filter((q) => q.subject === s.subject && (!s.unit && !s.topic || (s.unit && q.unit === s.unit) || (s.topic && q.topic === s.topic))).length;
  studiedQs += n;
  if (n === 0) studiedProblems.push(`studied.json: "${label}" is listed but has NO questions yet - write some in tools/src first`);
}
console.log(`studied.json: ${(studiedFile.studied || []).length} entries -> ${studiedQs} questions available`);
if (studiedProblems.length) { console.error('\nSTUDIED LIST WARNINGS:'); studiedProblems.forEach((p) => console.error('  - ' + p)); }

// ---- refresh the built-in copy inside index.html (used when the live files cannot be fetched) ----
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const payload = JSON.stringify({ questions: out, studied: studiedFile.studied || [], updated: studiedFile.updated || '' }).replace(/</g, '\\u003c');
const embedded = `<!--EMBED_START--><script id="embedded-data" type="application/json">${payload}</script><!--EMBED_END-->`;
if (!/<!--EMBED_START-->[\s\S]*<!--EMBED_END-->/.test(html)) {
  console.error('index.html is missing the EMBED_START/EMBED_END markers');
  process.exit(1);
}
fs.writeFileSync(indexPath, html.replace(/<!--EMBED_START-->[\s\S]*<!--EMBED_END-->/, () => embedded));
console.log('Refreshed the built-in copy in index.html');
if (studiedProblems.length) process.exitCode = 1;
