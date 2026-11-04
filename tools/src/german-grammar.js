// German grammar questions (AQA GCSE): conjugations, tenses, modals and word order.
// Verbs the school asks for: haben, sein, gehen, fahren + sehen, lesen, bleiben, essen, kommen + the modals.
const PRON = ['ich', 'du', 'er', 'wir', 'ihr', 'sie'];   // sie = they; index 0-5 matches the form arrays
const V = {
  haben: { pres: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], imp: ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'], pp: 'gehabt', aux: 'haben',
    frame: { pres: 'einen Hund', imp: 'viele Freunde', pc: 'viel Spaß' } },
  sein: { pres: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'], imp: ['war', 'warst', 'war', 'waren', 'wart', 'waren'], pp: 'gewesen', aux: 'sein',
    frame: { pres: 'müde', imp: 'sehr schüchtern', pc: 'in Berlin' } },
  gehen: { pres: ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'], imp: ['ging', 'gingst', 'ging', 'gingen', 'gingt', 'gingen'], pp: 'gegangen', aux: 'sein',
    frame: { pres: 'ins Kino', imp: 'oft ins Kino', pc: 'ins Kino' } },
  fahren: { pres: ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'], imp: ['fuhr', 'fuhrst', 'fuhr', 'fuhren', 'fuhrt', 'fuhren'], pp: 'gefahren', aux: 'sein',
    frame: { pres: 'mit dem Bus', imp: 'jeden Tag mit dem Bus', pc: 'nach Berlin' } },
  sehen: { pres: ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'], imp: ['sah', 'sahst', 'sah', 'sahen', 'saht', 'sahen'], pp: 'gesehen', aux: 'haben',
    frame: { pres: 'einen Film', imp: 'oft Filme', pc: 'einen Film' } },
  lesen: { pres: ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'], imp: ['las', 'last', 'las', 'lasen', 'last', 'lasen'], pp: 'gelesen', aux: 'haben',
    frame: { pres: 'ein Buch', imp: 'jeden Abend Bücher', pc: 'ein Buch' } },
  bleiben: { pres: ['bleibe', 'bleibst', 'bleibt', 'bleiben', 'bleibt', 'bleiben'], imp: ['blieb', 'bliebst', 'blieb', 'blieben', 'bliebt', 'blieben'], pp: 'geblieben', aux: 'sein',
    frame: { pres: 'zu Hause', imp: 'immer zu Hause', pc: 'zu Hause' } },
  essen: { pres: ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'], imp: ['aß', 'aßt', 'aß', 'aßen', 'aßt', 'aßen'], pp: 'gegessen', aux: 'haben',
    frame: { pres: 'eine Pizza', imp: 'oft Pizza', pc: 'eine Pizza' } },
  kommen: { pres: ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'], imp: ['kam', 'kamst', 'kam', 'kamen', 'kamt', 'kamen'], pp: 'gekommen', aux: 'sein',
    frame: { pres: 'aus England', imp: 'immer zu spät', pc: 'spät nach Hause' } },
};
const MODALS = {
  können: { pres: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'], imp: ['konnte', 'konntest', 'konnte', 'konnten', 'konntet', 'konnten'], frame: 'gut schwimmen', gloss: 'can / to be able to' },
  müssen: { pres: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'], imp: ['musste', 'musstest', 'musste', 'mussten', 'musstet', 'mussten'], frame: 'heute arbeiten', gloss: 'must / to have to' },
  wollen: { pres: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'], imp: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'], frame: 'ins Kino gehen', gloss: 'to want to' },
  sollen: { pres: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'], imp: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'], frame: 'mehr Obst essen', gloss: 'should / to be supposed to' },
  dürfen: { pres: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'], imp: ['durfte', 'durftest', 'durfte', 'durften', 'durftet', 'durften'], frame: 'hier parken', gloss: 'may / to be allowed to' },
  mögen: { pres: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'], imp: ['mochte', 'mochtest', 'mochte', 'mochten', 'mochtet', 'mochten'], frame: 'Pizza', gloss: 'to like' },
};
const WERDEN = ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'];
const WUERDE = ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'];
const HAETTE = ['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'];
const WAERE = ['wäre', 'wärst', 'wäre', 'wären', 'wärt', 'wären'];

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function wrongForms(arr, pi) {
  const out = [];
  for (let k = 1; k < 6 && out.length < 3; k++) {
    const f = arr[(pi + k) % 6];
    if (f !== arr[pi] && !out.includes(f)) out.push(f);
  }
  return out;
}
const table = (arr) => arr.map((f, i) => PRON[i] + ' ' + f).join(', ');

const qs = [];
const verbs = Object.keys(V);
const modals = Object.keys(MODALS);

// ---- Present tense: the main verbs (3 persons each) ----
verbs.forEach((v, vi) => {
  [0, 2, 4].forEach((o) => {
    const pi = (vi + o) % 6;
    const f = V[v].pres[pi];
    qs.push([`Present tense`, `Complete with the correct present-tense form of ${v}: ${cap(PRON[pi])} ___ ${V[v].frame.pres}.`, f, wrongForms(V[v].pres, pi),
      `${v} (present): ${table(V[v].pres)}.`]);
  });
});
// ---- Present tense: modals (2 persons each, the infinitive goes to the end) ----
modals.forEach((m, mi) => {
  [0, 1].forEach((k) => {
    const pi = (mi + k * 3) % 6;
    const f = MODALS[m].pres[pi];
    const verbPart = m === 'mögen' ? MODALS[m].frame : MODALS[m].frame;
    qs.push([`Present tense`, `Complete with the correct present-tense form of ${m} (${MODALS[m].gloss}): ${cap(PRON[pi])} ___ ${verbPart}.`, f, wrongForms(MODALS[m].pres, pi),
      `${m} (present): ${table(MODALS[m].pres)}. The other verb goes to the end as an infinitive.`]);
  });
});

// ---- Perfect tense: haben/sein + past participle (one per main verb) ----
verbs.forEach((v) => {
  const d = V[v];
  const aux = d.aux === 'sein' ? 'ist' : 'hat';
  const other = d.aux === 'sein' ? 'hat' : 'ist';
  const mid = d.frame.pc;
  const right = `Er ${aux} ${mid} ${d.pp}`;
  qs.push([`Perfect and imperfect tense`, `Put this sentence into the perfect tense (Perfekt): "Er ${d.pres[2]} ${mid}."`, right,
    [`Er ${other} ${mid} ${d.pp}`, `Er ${aux} ${mid} ${v}`, `Er ${aux} ${d.pp} ${mid}`],
    `${v} uses ${d.aux} in the perfect tense and the past participle "${d.pp}" goes at the end of the clause.`]);
});
// ---- Imperfect: sein, haben and modals (2 persons each) ----
['sein', 'haben'].forEach((v, vi) => {
  [1, 3].forEach((o, k) => {
    const pi = (vi + o + k) % 6;
    const f = V[v].imp[pi];
    qs.push([`Perfect and imperfect tense`, `Put ${v} into the imperfect (Imperfekt): Letztes Jahr ___ ${PRON[pi]} ${V[v].frame.imp}.`, f, wrongForms(V[v].imp, pi),
      `${v} (imperfect): ${table(V[v].imp)}.`]);
  });
});
const IMP_FRAME = { können: 'gut schwimmen', müssen: 'viel arbeiten', wollen: 'Pilot werden', sollen: 'mehr lernen', dürfen: 'lange aufbleiben', mögen: 'Pizza' };
modals.forEach((m, mi) => {
  const pi = (mi + 2) % 6;
  const f = MODALS[m].imp[pi];
  qs.push([`Perfect and imperfect tense`, `Put ${m} into the imperfect (Imperfekt): Letztes Jahr ___ ${PRON[pi]} ${IMP_FRAME[m]}.`, f, wrongForms(MODALS[m].imp, pi),
    `Modal verbs are usually used in the imperfect, not the perfect: ${table(MODALS[m].imp)}.`]);
});

// ---- Future (werden + infinitive) and conditional (würde / hätte / wäre) ----
[0, 1, 2, 3, 4, 5].forEach((pi) => {
  qs.push([`Future, conditional and pluperfect`, `Complete the future tense: Nächstes Jahr ___ ${PRON[pi]} nach Spanien fahren.`, WERDEN[pi], wrongForms(WERDEN, pi),
    `Future = werden + infinitive at the end: ${table(WERDEN)}.`]);
});
[0, 2, 3, 5].forEach((pi) => {
  qs.push([`Future, conditional and pluperfect`, `Complete the conditional: Mit mehr Geld ___ ${PRON[pi]} um die Welt reisen.`, WUERDE[pi], wrongForms(WUERDE, pi),
    `Conditional = würde + infinitive: ${table(WUERDE)}.`]);
});
qs.push(
  [`Future, conditional and pluperfect`, `Complete: Wenn ich reich ___, hätte ich ein großes Haus.`, `wäre`, [`würde`, `bin`, `war`], `wenn ich reich wäre = if I were rich (conditional of sein).`],
  [`Future, conditional and pluperfect`, `Complete: Wenn ich mehr Zeit ___, würde ich mehr lesen.`, `hätte`, [`habe`, `hatte`, `würde`], `wenn ich mehr Zeit hätte = if I had more time.`],
  [`Future, conditional and pluperfect`, `How do you form the future tense in German?`, `The present tense of werden + an infinitive at the end`, [`The present tense of haben + a past participle`, `Würde + a past participle`, `The imperfect of werden + an infinitive`], `Ich werde nach Berlin fahren = I will travel to Berlin.`],
  [`Future, conditional and pluperfect`, `How do you form the conditional ("would") for most verbs?`, `Würde + infinitive at the end`, [`Werde + infinitive`, `Hat + past participle`, `The imperfect of the verb`], `Ich würde gern nach Japan fahren = I would like to go to Japan.`],
  [`Future, conditional and pluperfect`, `How is the pluperfect tense (Plusquamperfekt) formed?`, `The imperfect of haben or sein + a past participle`, [`Werden + infinitive`, `The present of haben or sein + a past participle`, `Würde + infinitive`], `Ich hatte gegessen = I had eaten; er war gefahren = he had travelled.`],
  [`Future, conditional and pluperfect`, `Which sentence is in the future tense?`, `Ich werde morgen arbeiten`, [`Ich arbeite morgen nicht`, `Ich habe gestern gearbeitet`, `Ich würde gern arbeiten`], `werden + infinitive.`],
  [`Future, conditional and pluperfect`, `Which sentence is in the conditional?`, `Ich würde gern nach Italien fahren`, [`Ich werde nach Italien fahren`, `Ich bin nach Italien gefahren`, `Ich fuhr nach Italien`], `würde + infinitive.`],
  [`Future, conditional and pluperfect`, `Which sentence is in the pluperfect?`, `Er hatte schon gegessen`, [`Er hat schon gegessen`, `Er aß schon`, `Er wird schon essen`], `hatte + past participle.`],
  [`Future, conditional and pluperfect`, `Complete: Ich ___ gern ein Eis essen. (I would like to eat an ice cream.)`, `würde`, [`werde`, `wurde`, `wäre`], `würde gern + infinitive = would like to.`]
);

// ---- Perfect and imperfect: hand-written ----
qs.push(
  [`Perfect and imperfect tense`, `How is the perfect tense formed in German?`, `Present tense of haben or sein + past participle at the end`, [`Werden + infinitive at the end`, `Imperfect of haben + infinitive`, `Würde + past participle`], `Ich habe Fußball gespielt; ich bin nach Berlin gefahren.`],
  [`Perfect and imperfect tense`, `Which verbs take sein in the perfect tense?`, `Verbs of movement or change of state, e.g. gehen, fahren, bleiben`, [`All verbs that end in -en`, `Verbs with a separable prefix`, `Modal verbs only`], `Also sein itself (ich bin gewesen) and werden (ich bin geworden).`],
  [`Perfect and imperfect tense`, `What is the past participle of a regular verb like spielen?`, `gespielt`, [`gespielen`, `spielt`, `gespiel`], `Regular verbs: ge- + stem + -t.`],
  [`Perfect and imperfect tense`, `What is the past participle of fahren?`, `gefahren`, [`gefahrt`, `gefuhren`, `gefährt`], `Strong verbs: ge- + stem + -en. Remember the auxiliary is sein: ich bin gefahren.`],
  [`Perfect and imperfect tense`, `What is the past participle of essen?`, `gegessen`, [`geesst`, `gegesst`, `gesessen`], `Strong verb: ge- + essen: ich habe eine Pizza gegessen.`],
  [`Perfect and imperfect tense`, `What is the past participle of sehen?`, `gesehen`, [`gesieht`, `gesehnt`, `gesahen`], `ich habe einen Film gesehen.`],
  [`Perfect and imperfect tense`, `What is the past participle of lesen?`, `gelesen`, [`geliest`, `gelest`, `gelasen`], `ich habe ein Buch gelesen.`],
  [`Perfect and imperfect tense`, `What is the past participle of bleiben?`, `geblieben`, [`gebleibt`, `gebleiben`, `bleibt`], `ich bin zu Hause geblieben (sein verb).`],
  [`Perfect and imperfect tense`, `What is the past participle of kommen?`, `gekommen`, [`gekommt`, `gekam`, `gekommet`], `er ist spät gekommen (sein verb).`],
  [`Perfect and imperfect tense`, `What is the past participle of aufstehen (to get up)?`, `aufgestanden`, [`gestanden auf`, `geaufstanden`, `aufgestehen`], `Separable verbs put -ge- between the prefix and the stem.`],
  [`Perfect and imperfect tense`, `What is the past participle of besuchen (to visit)?`, `besucht`, [`gebesucht`, `besuchen`, `begesucht`], `Inseparable prefixes (be-, ge-, ver-, er-, ent-) do not add ge-.`],
  [`Perfect and imperfect tense`, `What is the past participle of telefonieren?`, `telefoniert`, [`getelefoniert`, `telefonieren`, `getelefonieren`], `Verbs ending in -ieren do not add ge-.`],
  [`Perfect and imperfect tense`, `Where does the past participle go in a main clause?`, `At the end`, [`Straight after the subject`, `At the start`, `Before the auxiliary verb`], `Ich habe gestern Fußball gespielt.`],
  [`Perfect and imperfect tense`, `Which sentence is correct? (Yesterday I went to the cinema.)`, `Gestern bin ich ins Kino gegangen`, [`Gestern habe ich ins Kino gegangen`, `Gestern ich bin ins Kino gegangen`, `Gestern bin ich gegangen ins Kino`], `Verb second, and the past participle goes at the end.`],
  [`Perfect and imperfect tense`, `Which tense is usually used for sein, haben and modal verbs when talking about the past?`, `Imperfect (Imperfekt)`, [`Perfect`, `Pluperfect`, `Future`], `ich war, ich hatte, ich konnte...`],
  [`Perfect and imperfect tense`, `Which tense do you normally use to say "I played football" in conversation?`, `Perfect (ich habe Fußball gespielt)`, [`Imperfect (ich spielte Fußball)`, `Future`, `Conditional`], `The perfect is the usual spoken past tense; the imperfect is more common in writing and with sein/haben/modals.`],
  [`Perfect and imperfect tense`, `What is the imperfect of "ich bin" (I was)?`, `ich war`, [`ich wurde`, `ich bin gewesen (imperfect)`, `ich wäre`], `sein (imperfect): war, warst, war, waren, wart, waren.`],
  [`Perfect and imperfect tense`, `What is the imperfect of "ich habe" (I had)?`, `ich hatte`, [`ich hätte`, `ich habe gehabt (imperfect)`, `ich hab`], `haben (imperfect): hatte, hattest, hatte, hatten, hattet, hatten.`]
);

// ---- Modals / present tense: hand-written ----
qs.push(
  [`Present tense`, `Where does the second verb go after a modal verb in a main clause?`, `At the end, as an infinitive`, [`Straight after the modal`, `At the end, as a past participle`, `At the start`], `Ich kann gut schwimmen; wir müssen heute arbeiten.`],
  [`Present tense`, `What does "ich möchte" mean?`, `I would like`, [`I must`, `I am allowed to`, `I can`], `Möchte is the polite "would like" form of mögen.`],
  [`Present tense`, `What does "ich darf" mean?`, `I am allowed to / I may`, [`I must`, `I should`, `I want to`], `dürfen = to be allowed to.`],
  [`Present tense`, `What does "ich soll" mean?`, `I should / I am supposed to`, [`I want to`, `I can`, `I like`], `sollen = to be supposed to.`],
  [`Present tense`, `The du form of fahren is...`, `fährst`, [`fahrst`, `fährt`, `fahrt`], `fahren has a vowel change in du and er/sie/es: fährst, fährt.`],
  [`Present tense`, `The er form of lesen is...`, `liest`, [`lest`, `lesst`, `lässt`], `lesen: e becomes ie in du and er/sie/es.`],
  [`Present tense`, `The du form of sehen is...`, `siehst`, [`sehst`, `sihst`, `sieht`], `sehen: e becomes ie in du and er/sie/es.`],
  [`Present tense`, `The er form of essen is...`, `isst`, [`esst`, `ist`, `eßt`], `essen: e becomes i in du and er/sie/es (du isst, er isst).`],
  [`Present tense`, `The wir form of sein is...`, `sind`, [`seid`, `sein`, `sinden`], `sein: bin, bist, ist, sind, seid, sind.`],
  [`Present tense`, `The ihr form of haben is...`, `habt`, [`hat`, `haben`, `habet`], `haben: habe, hast, hat, haben, habt, haben.`],
  [`Present tense`, `Which verb is irregular in the present tense?`, `sein`, [`spielen`, `machen`, `wohnen`], `Regular verbs add -e, -st, -t, -en, -t, -en to the stem; sein is very irregular.`],
  [`Present tense`, `What are the present-tense endings of regular verbs (ich, du, er, wir, ihr, sie)?`, `-e, -st, -t, -en, -t, -en`, [`-e, -es, -e, -ons, -ez, -ent`, `-e, -t, -t, -en, -t, -en`, `-st, -st, -t, -en, -t, -en`], `ich spiele, du spielst, er spielt, wir spielen, ihr spielt, sie spielen.`],
  [`Present tense`, `How do you say "I am going to the cinema" in German?`, `Ich gehe ins Kino`, [`Ich bin gehen ins Kino`, `Ich gehe zu Kino`, `Ich ging in Kino`], `German uses the simple present for "I am going".`],
  [`Present tense`, `Which pronoun goes with "seid"?`, `ihr`, [`wir`, `du`, `sie`], `ihr seid = you (plural) are.`]
);

// ---- Word order: hand-written ----
qs.push(
  [`Subordinating conjunctions and word order`, `In a main clause, the verb is always the ___ idea.`, `Second`, [`First`, `Last`, `Third`], `Verb second: Heute gehe ich ins Kino (not "Heute ich gehe...").`],
  [`Subordinating conjunctions and word order`, `Which sentence has the correct word order?`, `Am Wochenende spiele ich Fußball`, [`Am Wochenende ich spiele Fußball`, `Ich am Wochenende spiele Fußball`, `Am Wochenende Fußball spiele ich`], `After a time phrase the verb comes next, then the subject (inversion).`],
  [`Subordinating conjunctions and word order`, `What does weil do to the word order of the clause it introduces?`, `The verb goes to the end of the clause`, [`The verb goes first`, `Nothing changes`, `The subject goes to the end`], `Ich bleibe zu Hause, weil ich krank bin.`],
  [`Subordinating conjunctions and word order`, `Which sentence is correct? (I like eating fruit because it is healthy.)`, `Ich esse gern Obst, weil es gesund ist`, [`Ich esse gern Obst, weil es ist gesund`, `Ich esse gern Obst, weil ist es gesund`, `Ich esse gern Obst, weil gesund es ist`], `weil sends the verb to the end of the clause.`],
  [`Subordinating conjunctions and word order`, `Which of these conjunctions sends the verb to the end?`, `dass`, [`und`, `aber`, `denn`], `und, aber, denn, oder do not change the word order; weil, dass, wenn, ob, obwohl, als do.`],
  [`Subordinating conjunctions and word order`, `Which of these conjunctions does NOT change the word order?`, `denn`, [`weil`, `obwohl`, `wenn`], `denn (because) is a co-ordinating conjunction: Ich bleibe zu Hause, denn ich bin krank.`],
  [`Subordinating conjunctions and word order`, `Which sentence is correct? (I know that he is coming tomorrow.)`, `Ich weiß, dass er morgen kommt`, [`Ich weiß, dass er kommt morgen`, `Ich weiß, dass kommt er morgen`, `Ich weiß, dass morgen kommt er`], `dass sends the verb to the end.`],
  [`Subordinating conjunctions and word order`, `Which sentence is correct? (If it rains, I stay at home.)`, `Wenn es regnet, bleibe ich zu Hause`, [`Wenn es regnet, ich bleibe zu Hause`, `Wenn es regnet ich bleibe, zu Hause`, `Wenn regnet es, bleibe ich zu Hause`], `A wenn-clause at the start: the verb goes to the end of that clause, then the main verb comes straight after the comma.`],
  [`Subordinating conjunctions and word order`, `In "Obwohl es kalt war, ging ich schwimmen", what is special about "ging"?`, `It comes straight after the comma because the subordinate clause counts as the first idea`, [`It should be at the end`, `It should come before the comma`, `Nothing; it is a normal subordinate clause verb`], `Subordinate clause first → verb of the main clause comes immediately after the comma.`],
  [`Subordinating conjunctions and word order`, `Which sentence uses a modal verb correctly?`, `Ich muss heute meine Hausaufgaben machen`, [`Ich muss machen heute meine Hausaufgaben`, `Ich muss heute machen meine Hausaufgaben`, `Ich machen muss heute meine Hausaufgaben`], `Modal in second position, infinitive at the end.`],
  [`Subordinating conjunctions and word order`, `Where does the separable prefix go in the present tense, e.g. aufstehen?`, `At the end of the clause`, [`Straight after the verb`, `At the start`, `It stays attached to the verb`], `Ich stehe um sieben Uhr auf.`],
  [`Subordinating conjunctions and word order`, `Which sentence is correct? (I get up at seven.)`, `Ich stehe um sieben Uhr auf`, [`Ich aufstehe um sieben Uhr`, `Ich stehe auf um sieben Uhr`, `Ich auf stehe um sieben Uhr`], `Separable verbs split in main clauses.`],
  [`Subordinating conjunctions and word order`, `In the perfect tense, which sentence is correct? (I have played football.)`, `Ich habe Fußball gespielt`, [`Ich habe gespielt Fußball`, `Ich gespielt habe Fußball`, `Ich Fußball habe gespielt`], `Auxiliary second, past participle last.`],
  [`Subordinating conjunctions and word order`, `Which sentence is correct? (Tomorrow I will visit my grandma.)`, `Morgen werde ich meine Oma besuchen`, [`Morgen ich werde meine Oma besuchen`, `Morgen werde ich besuchen meine Oma`, `Morgen besuchen werde ich meine Oma`], `werden second, infinitive at the end.`],
  [`Subordinating conjunctions and word order`, `Which word means "because" and changes the word order?`, `weil`, [`denn`, `und`, `aber`], `weil = because (verb to the end); denn = because (no change).`],
  [`Subordinating conjunctions and word order`, `What does "obwohl" mean?`, `Although`, [`Because`, `If`, `Whether`], `Obwohl sends the verb to the end.`],
  [`Subordinating conjunctions and word order`, `What does "ob" mean?`, `Whether / if`, [`Although`, `That`, `Because`], `Ich weiß nicht, ob er kommt.`]
);

module.exports = { subject: 'German', qs };
