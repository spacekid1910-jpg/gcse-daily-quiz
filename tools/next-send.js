// Works out the next quiz notification time: 08:00 UK on weekdays, 11:00 UK at weekends.
// The workflow runs every evening and asks ntfy to deliver the notification at exactly this time,
// so it no longer matters if GitHub's scheduler is late.
//
//   node tools/next-send.js              -> prints JSON for the next slot
//   node tools/next-send.js --test       -> runs self-checks (including the clocks changing)
const TZ = 'Europe/London';
const MIN_LEAD_MS = 2 * 60 * 1000;      // a slot closer than this counts as already gone

function ukParts(date) {
  const p = {};
  for (const x of new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).formatToParts(date)) p[x.type] = x.value;
  return { y: +p.year, m: +p.month, d: +p.day, dow: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(p.weekday) + 1 };
}

function ukOffsetMinutes(date) {
  const name = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, timeZoneName: 'shortOffset' }).formatToParts(date).find((x) => x.type === 'timeZoneName').value;
  const m = /GMT([+-]\d+)?/.exec(name);
  return m && m[1] ? parseInt(m[1], 10) * 60 : 0;
}

// UK wall-clock time -> the real instant (ms since epoch). 8am and 11am never fall in the 1-2am clock change.
function ukLocalToInstant(y, m, d, hour) {
  const wall = Date.UTC(y, m - 1, d, hour, 0, 0);
  let inst = wall - ukOffsetMinutes(new Date(wall)) * 60000;
  inst = wall - ukOffsetMinutes(new Date(inst)) * 60000;
  return inst;
}

function slotFor(y, m, d) {
  const dow = ukParts(new Date(Date.UTC(y, m - 1, d, 12))).dow;   // noon UTC is always the same UK calendar day
  const hour = dow >= 6 ? 11 : 8;
  return { date: `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`, dow, hour, instant: ukLocalToInstant(y, m, d, hour) };
}

function nextSend(now = new Date()) {
  const t = ukParts(now);
  for (let add = 0; add < 3; add++) {
    const day = new Date(Date.UTC(t.y, t.m - 1, t.d + add, 12));
    const s = slotFor(day.getUTCFullYear(), day.getUTCMonth() + 1, day.getUTCDate());
    if (s.instant - now.getTime() >= MIN_LEAD_MS) return { ...s, unix: Math.floor(s.instant / 1000), iso: new Date(s.instant).toISOString() };
  }
  throw new Error('no slot found');
}

module.exports = { nextSend };

if (require.main === module) {
  if (process.argv.includes('--test')) {
    const cases = [
      // [label, "now" as an ISO instant, expected date, expected UTC time of the slot]
      ['Mon evening (BST) -> Tue 8am BST', '2026-09-21T19:47:00Z', '2026-09-22', '07:00'],
      ['Tue 6am UTC (BST, before slot) -> same day 8am', '2026-09-22T05:00:00Z', '2026-09-22', '07:00'],
      ['Tue 13:26 UTC (GitHub ran 6h late, slot gone) -> Wed', '2026-09-22T13:26:00Z', '2026-09-23', '07:00'],
      ['Fri evening -> Sat 11am (weekend time)', '2026-09-25T19:47:00Z', '2026-09-26', '10:00'],
      ['Sat evening -> Sun 11am', '2026-09-26T19:47:00Z', '2026-09-27', '10:00'],
      ['Sun evening -> Mon 8am', '2026-09-27T19:47:00Z', '2026-09-28', '07:00'],
      ['Sat night before clocks go back -> Sun 25 Oct 11am is now GMT', '2026-10-24T19:47:00Z', '2026-10-25', '11:00'],
      ['Sun 25 Oct evening (GMT) -> Mon 8am GMT', '2026-10-25T19:47:00Z', '2026-10-26', '08:00'],
      ['Sat evening before clocks go forward 2027 -> Sun 28 Mar 11am BST', '2027-03-27T19:47:00Z', '2027-03-28', '10:00'],
      ['Winter weekday (GMT) -> 8am GMT', '2027-01-12T19:47:00Z', '2027-01-13', '08:00'],
      ['Just before a slot (1 min) is skipped', '2026-09-22T06:59:00Z', '2026-09-23', '07:00'],
    ];
    let bad = 0;
    for (const [label, now, date, utc] of cases) {
      const r = nextSend(new Date(now));
      const gotUtc = r.iso.slice(11, 16);
      const ok = r.date === date && gotUtc === utc;
      if (!ok) bad++;
      console.log((ok ? 'PASS' : 'FAIL') + '  ' + label + `   -> ${r.date} ${String(r.hour).padStart(2, '0')}:00 UK = ${gotUtc} UTC`);
    }
    console.log(bad ? `\n${bad} FAILED` : '\nAll passed');
    process.exit(bad ? 1 : 0);
  }
  if (process.argv.includes('--kv')) {
    const r = nextSend();
    console.log(`date=${r.date}\nhour=${r.hour}\nunix=${r.unix}\niso=${r.iso}`);
    process.exit(0);
  }
  console.log(JSON.stringify(nextSend()));
}
