// French grammar questions (AQA GCSE): conjugations and tense formation.
// Most questions are generated from the verb tables below, so every form is checked in one place.
// Verbs the school asks for: avoir, etre, aller, faire, voir, prendre + modals pouvoir, devoir, vouloir.
const PRONOUNS = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];   // index 0-5 matches the form arrays
const V = {
  avoir: {
    pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    imp: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    fut: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    cond: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
    pp: 'eu', aux: 'avoir',
    frame: { pres: 'deux frères', imp: 'beaucoup d’amis', pc: 'un accident', fut: 'beaucoup de travail', cond: 'plus de temps' },
  },
  'être': {
    pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
    imp: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'],
    fut: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
    cond: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
    pp: 'été', aux: 'avoir',
    frame: { pres: 'à la maison', imp: 'très timide', pc: 'malade', fut: 'en vacances', cond: 'plus heureux' },
  },
  aller: {
    pres: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'],
    imp: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'],
    fut: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
    cond: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
    pp: 'allé', aux: 'être',
    frame: { pres: 'au collège', imp: 'à la plage chaque été', pc: 'au cinéma', fut: 'à Paris', cond: 'en Espagne' },
  },
  faire: {
    pres: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'],
    imp: ['faisais', 'faisais', 'faisait', 'faisions', 'faisiez', 'faisaient'],
    fut: ['ferai', 'feras', 'fera', 'ferons', 'ferez', 'feront'],
    cond: ['ferais', 'ferais', 'ferait', 'ferions', 'feriez', 'feraient'],
    pp: 'fait', aux: 'avoir',
    frame: { pres: 'du sport', imp: 'du judo le samedi', pc: 'ses devoirs', fut: 'du ski', cond: 'plus de sport' },
  },
  voir: {
    pres: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'],
    imp: ['voyais', 'voyais', 'voyait', 'voyions', 'voyiez', 'voyaient'],
    fut: ['verrai', 'verras', 'verra', 'verrons', 'verrez', 'verront'],
    cond: ['verrais', 'verrais', 'verrait', 'verrions', 'verriez', 'verraient'],
    pp: 'vu', aux: 'avoir',
    frame: { pres: 'des amis', imp: 'souvent des amis', pc: 'un bon film', fut: 'la tour Eiffel', cond: 'plus d’amis' },
  },
  prendre: {
    pres: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'],
    imp: ['prenais', 'prenais', 'prenait', 'prenions', 'preniez', 'prenaient'],
    fut: ['prendrai', 'prendras', 'prendra', 'prendrons', 'prendrez', 'prendront'],
    cond: ['prendrais', 'prendrais', 'prendrait', 'prendrions', 'prendriez', 'prendraient'],
    pp: 'pris', aux: 'avoir',
    frame: { pres: 'le bus', imp: 'le train tous les jours', pc: 'le métro', fut: 'l’avion', cond: 'un taxi' },
  },
  pouvoir: {
    pres: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'],
    imp: ['pouvais', 'pouvais', 'pouvait', 'pouvions', 'pouviez', 'pouvaient'],
    fut: ['pourrai', 'pourras', 'pourra', 'pourrons', 'pourrez', 'pourront'],
    cond: ['pourrais', 'pourrais', 'pourrait', 'pourrions', 'pourriez', 'pourraient'],
    pp: 'pu', aux: 'avoir',
    frame: { pres: 'venir ce soir', imp: 'nager très bien', pc: 'venir', fut: 'venir avec nous', cond: 'venir avec nous' },
  },
  devoir: {
    pres: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'],
    imp: ['devais', 'devais', 'devait', 'devions', 'deviez', 'devaient'],
    fut: ['devrai', 'devras', 'devra', 'devrons', 'devrez', 'devront'],
    cond: ['devrais', 'devrais', 'devrait', 'devrions', 'devriez', 'devraient'],
    pp: 'dû', aux: 'avoir',
    frame: { pres: 'partir', imp: 'travailler le week-end', pc: 'partir tôt', fut: 'rester à la maison', cond: 'faire plus d’efforts' },
  },
  vouloir: {
    pres: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'],
    imp: ['voulais', 'voulais', 'voulait', 'voulions', 'vouliez', 'voulaient'],
    fut: ['voudrai', 'voudras', 'voudra', 'voudrons', 'voudrez', 'voudront'],
    cond: ['voudrais', 'voudrais', 'voudrait', 'voudrions', 'voudriez', 'voudraient'],
    pp: 'voulu', aux: 'avoir',
    frame: { pres: 'sortir ce soir', imp: 'devenir pilote', pc: 'rester', fut: 'voyager', cond: 'visiter Rome' },
  },
};
const NAMES = Object.keys(V);
const TENSE_NAME = { pres: 'present', imp: 'imperfect (imparfait)', pc: 'perfect (passé composé)', fut: 'simple future (futur simple)', cond: 'conditional' };
const vowel = (s) => /^[aeiouyhéèêâî]/i.test(s);

// "je" + a vowel sound becomes j'
function gap(pi, correct) {
  if (pi === 0) return vowel(correct) ? 'J’___' : 'Je ___';
  return PRONOUNS[pi].charAt(0).toUpperCase() + PRONOUNS[pi].slice(1) + ' ___';
}
function gapLower(pi, correct) { const g = gap(pi, correct); return g.charAt(0).toLowerCase() + g.slice(1); }
// three wrong forms from other persons of the same tense (never equal to the right answer)
function wrongForms(arr, pi) {
  const out = [];
  for (let k = 1; k < 6 && out.length < 3; k++) {
    const f = arr[(pi + k) % 6];
    if (f !== arr[pi] && !out.includes(f)) out.push(f);
  }
  return out;
}

const qs = [];

// ---- Present tense (3 persons of each verb, rotating so every person appears) ----
NAMES.forEach((v, vi) => {
  [0, 2, 4].forEach((o) => {
    const pi = (vi + o) % 6;
    const f = V[v].pres[pi];
    qs.push([`Present tense`, `Complete with the correct present-tense form of ${v}: ${gap(pi, f)} ${V[v].frame.pres}.`, f, wrongForms(V[v].pres, pi),
      `${v} (present): ${V[v].pres.map((x, i) => (i === 0 && vowel(x) ? 'j’' + x : PRONOUNS[i] + ' ' + x)).join(', ')}.`]);
  });
});

// ---- Imperfect (2 persons per verb) ----
NAMES.forEach((v, vi) => {
  [1, 3].forEach((o, k) => {
    const pi = (vi + o * (k + 1)) % 6;
    const f = V[v].imp[pi];
    qs.push([`Perfect and imperfect tense`, `Put ${v} into the imperfect (imparfait): ${gap(pi, f)} (${v}) ${V[v].frame.imp}.`, f, wrongForms(V[v].imp, pi),
      `Imperfect of ${v}: ${V[v].imp.join(', ')} (je, tu, il, nous, vous, ils).`]);
  });
});

// ---- Perfect tense (il + auxiliary + participle) ----
NAMES.forEach((v) => {
  const d = V[v];
  const right = d.aux === 'être' ? `est ${d.pp}` : `a ${d.pp}`;
  const wrongAux = d.aux === 'être' ? `a ${d.pp}` : `est ${d.pp}`;
  const wrongInf = d.aux === 'être' ? `est ${v}` : `a ${v}`;
  const wrongTense = d.pres[2];
  qs.push([`Perfect and imperfect tense`, `Put ${v} into the perfect tense (passé composé): Hier, il ___ ${d.frame.pc}.`, right, [wrongAux, wrongInf, wrongTense],
    `${v} uses ${d.aux} in the perfect tense, with the past participle "${d.pp}".`]);
});

// ---- Simple future (2 persons per verb) ----
NAMES.forEach((v, vi) => {
  [0, 1].forEach((k) => {
    const pi = (vi + 2 + k * 3) % 6;
    const f = V[v].fut[pi];
    qs.push([`Near future, future and conditional`, `Put ${v} into the simple future (futur simple): Demain, ${gapLower(pi, f)} (${v}) ${V[v].frame.fut}.`, f, wrongForms(V[v].fut, pi),
      `Future stem of ${v}: ${V[v].fut[0].replace(/ai$/, '')}- + -ai, -as, -a, -ons, -ez, -ont.`]);
  });
});

// ---- Conditional (1 person per verb) ----
NAMES.forEach((v, vi) => {
  const pi = (vi + 1) % 6;
  const f = V[v].cond[pi];
  qs.push([`Near future, future and conditional`, `Put ${v} into the conditional: Si j’avais le choix, ${gapLower(pi, f)} (${v}) ${V[v].frame.cond}.`, f, wrongForms(V[v].cond, pi),
    `Conditional = future stem + imperfect endings: ${V[v].cond.slice(0, 3).join(', ')}...`]);
});

// ---- Hand-written: present tense formation ----
qs.push(
  [`Present tense`, `What are the present-tense endings of regular -er verbs (je, tu, il, nous, vous, ils)?`, `-e, -es, -e, -ons, -ez, -ent`, [`-s, -s, -t, -ons, -ez, -ent`, `-ai, -as, -a, -ons, -ez, -ont`, `-is, -is, -it, -issons, -issez, -issent`], `For example: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.`],
  [`Present tense`, `What are the present-tense endings of regular -ir verbs like finir?`, `-is, -is, -it, -issons, -issez, -issent`, [`-e, -es, -e, -ons, -ez, -ent`, `-s, -s, -t, -ons, -ez, -ent`, `-ais, -ais, -ait, -ions, -iez, -aient`], `je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.`],
  [`Present tense`, `What are the present-tense endings of regular -re verbs like vendre?`, `-s, -s, (nothing), -ons, -ez, -ent`, [`-e, -es, -e, -ons, -ez, -ent`, `-is, -is, -it, -issons, -issez, -issent`, `-ai, -as, -a, -ons, -ez, -ont`], `je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent.`],
  [`Present tense`, `Which is the correct present tense of finir for "nous"?`, `finissons`, [`finons`, `finirons`, `finions`], `-ir verbs add -iss- in the nous, vous and ils forms.`],
  [`Present tense`, `How do you say "I have to go" using the verb devoir?`, `Je dois partir`, [`Je devoir partir`, `Je doit partir`, `Je dois partis`], `devoir + infinitive: je dois, tu dois, il doit...`],
  [`Present tense`, `Which verb is irregular in the present tense?`, `faire`, [`parler`, `jouer`, `regarder`], `Regular -er verbs like parler, jouer and regarder follow the same pattern; faire does not (nous faisons, vous faites).`],
  [`Present tense`, `What is the vous form of faire in the present tense?`, `faites`, [`faisez`, `faisons`, `font`], `faire: fais, fais, fait, faisons, faites, font.`],
  [`Present tense`, `What is the vous form of être in the present tense?`, `êtes`, [`êtez`, `sont`, `sommes`], `être: suis, es, est, sommes, êtes, sont.`],
  [`Present tense`, `What is the ils form of aller in the present tense?`, `vont`, [`allent`, `vais`, `vas`], `aller: vais, vas, va, allons, allez, vont.`]
);

// ---- Hand-written: perfect and imperfect ----
qs.push(
  [`Perfect and imperfect tense`, `How is the perfect tense (passé composé) formed for most verbs?`, `Present tense of avoir + past participle`, [`Present tense of être + infinitive`, `Imperfect of avoir + infinitive`, `Aller + infinitive`], `For example: j’ai mangé, elle a fini.`],
  [`Perfect and imperfect tense`, `Which verb takes être (not avoir) in the perfect tense?`, `aller`, [`faire`, `prendre`, `voir`], `Verbs of movement and change like aller, venir, partir, arriver and rester use être, as do reflexive verbs.`],
  [`Perfect and imperfect tense`, `What is the past participle of regular -er verbs such as parler?`, `parlé`, [`parlu`, `parlis`, `parlant`], `-er → -é, -ir → -i, -re → -u.`],
  [`Perfect and imperfect tense`, `What is the past participle of regular -re verbs such as vendre?`, `vendu`, [`vendé`, `vendi`, `vendant`], `-er → -é, -ir → -i, -re → -u.`],
  [`Perfect and imperfect tense`, `What is the past participle of prendre?`, `pris`, [`prendu`, `prené`, `pri`], `Irregular: prendre → pris (also comprendre → compris).`],
  [`Perfect and imperfect tense`, `What is the past participle of voir?`, `vu`, [`voyé`, `voi`, `voit`], `Irregular: voir → vu.`],
  [`Perfect and imperfect tense`, `What is the past participle of faire?`, `fait`, [`faisé`, `fai`, `fais`], `Irregular: faire → fait.`],
  [`Perfect and imperfect tense`, `What is the past participle of vouloir?`, `voulu`, [`voulé`, `veulu`, `voulant`], `Irregular: vouloir → voulu.`],
  [`Perfect and imperfect tense`, `With être in the perfect tense, the past participle must agree with the subject. How do you write "Marie went to Paris"?`, `Marie est allée à Paris`, [`Marie est allé à Paris`, `Marie a allé à Paris`, `Marie a allée à Paris`], `Add -e for feminine and -s for plural: allé, allée, allés, allées.`],
  [`Perfect and imperfect tense`, `How do you form the imperfect (imparfait) stem?`, `Take the nous form of the present tense and remove -ons`, [`Take the infinitive and remove -er`, `Take the il form of the present tense`, `Use the past participle`], `nous faisons → fais-; nous allons → all-. The only exception is être (ét-).`],
  [`Perfect and imperfect tense`, `What are the imperfect endings (je, tu, il, nous, vous, ils)?`, `-ais, -ais, -ait, -ions, -iez, -aient`, [`-ai, -as, -a, -ons, -ez, -ont`, `-e, -es, -e, -ons, -ez, -ent`, `-ais, -ais, -ait, -ons, -ez, -aient`], `These endings are the same for every verb.`],
  [`Perfect and imperfect tense`, `Which tense do you use to describe what something was like in the past or what you used to do regularly?`, `Imperfect (imparfait)`, [`Perfect (passé composé)`, `Simple future`, `Conditional`], `For example: quand j’étais petit, je jouais au foot tous les jours.`],
  [`Perfect and imperfect tense`, `Which tense do you use for a completed, one-off event in the past?`, `Perfect (passé composé)`, [`Imperfect (imparfait)`, `Present`, `Conditional`], `For example: hier, j’ai regardé un film.`],
  [`Perfect and imperfect tense`, `How do you say "they finished" in the perfect tense?`, `Ils ont fini`, [`Ils sont fini`, `Ils ont finis`, `Ils avons fini`], `Verbs using avoir do not make the participle agree with the subject.`],
  [`Perfect and imperfect tense`, `Which sentence is in the imperfect tense?`, `Nous habitions à Lyon`, [`Nous habitons à Lyon`, `Nous avons habité à Lyon`, `Nous habiterons à Lyon`], `-ions ending = nous in the imperfect.`],
  [`Perfect and imperfect tense`, `Which sentence is in the perfect tense?`, `Elle a vu ses amis`, [`Elle voit ses amis`, `Elle voyait ses amis`, `Elle verra ses amis`], `a + past participle (vu).`],
  [`Perfect and imperfect tense`, `How do you say "I was" in French using the imperfect?`, `j’étais`, [`je suis`, `j’ai été`, `je serai`], `être (imperfect): étais, étais, était, étions, étiez, étaient.`],
  [`Perfect and imperfect tense`, `"Il pleuvait quand je suis arrivé." Why are two different tenses used?`, `Imperfect for the background (raining), perfect for the single event (arrived)`, [`Both are the same tense`, `Imperfect for the future, perfect for the past`, `Perfect for descriptions, imperfect for one-off events`], `The imperfect sets the scene; the passé composé is for the action that happened.`]
);

// ---- Hand-written: near future, future, conditional ----
qs.push(
  [`Near future, future and conditional`, `How is the near future (futur proche) formed?`, `Present tense of aller + infinitive`, [`Infinitive + future endings`, `Avoir + past participle`, `Imperfect of aller + infinitive`], `For example: je vais manger, nous allons sortir.`],
  [`Near future, future and conditional`, `Complete in the near future: Demain, nous ___ visiter le musée.`, `allons`, [`irons`, `allions`, `sommes allés`], `Near future = aller (present) + infinitive.`],
  [`Near future, future and conditional`, `Which sentence is in the near future?`, `Je vais jouer au tennis`, [`Je jouerai au tennis`, `J’ai joué au tennis`, `Je jouais au tennis`], `vais + infinitive.`],
  [`Near future, future and conditional`, `How is the simple future formed for regular -er and -ir verbs?`, `Infinitive + -ai, -as, -a, -ons, -ez, -ont`, [`Infinitive + -ais, -ais, -ait, -ions, -iez, -aient`, `Present tense of aller + infinitive`, `Past participle + -ons`], `je parlerai, tu parleras, il parlera...`],
  [`Near future, future and conditional`, `For -re verbs in the simple future, what happens to the infinitive?`, `The final -e is dropped before the endings`, [`-re becomes -rez`, `Nothing changes`, `An -s is added`], `vendre → je vendrai, prendre → je prendrai.`],
  [`Near future, future and conditional`, `What is the future stem of aller?`, `ir-`, [`all-`, `aller-`, `vai-`], `j’irai, tu iras, il ira...`],
  [`Near future, future and conditional`, `What is the future stem of être?`, `ser-`, [`êtr-`, `ét-`, `sui-`], `je serai, tu seras, il sera...`],
  [`Near future, future and conditional`, `What is the future stem of avoir?`, `aur-`, [`av-`, `ai-`, `avoir-`], `j’aurai, tu auras, il aura...`],
  [`Near future, future and conditional`, `What is the future stem of faire?`, `fer-`, [`fais-`, `fai-`, `faire-`], `je ferai, tu feras, il fera...`],
  [`Near future, future and conditional`, `How is the conditional formed?`, `Future stem + imperfect endings`, [`Future stem + future endings`, `Present of avoir + past participle`, `Aller + infinitive`], `je mangerais, tu mangerais, il mangerait...`],
  [`Near future, future and conditional`, `How do you say "I would like to go to Spain" politely?`, `Je voudrais aller en Espagne`, [`Je veux aller en Espagne`, `Je voudrai aller en Espagne`, `Je voulais aller en Espagne`], `Je voudrais = I would like (conditional of vouloir).`],
  [`Near future, future and conditional`, `Which French tense does the sentence "S’il fait beau, nous irons à la plage" use after the si-clause?`, `Simple future`, [`Conditional`, `Imperfect`, `Perfect`], `si + present → future.`],
  [`Near future, future and conditional`, `Complete: "Si j’avais de l’argent, j’___ en Italie."`, `irais`, [`irai`, `vais`, `allais`], `si + imperfect → conditional.`],
  [`Near future, future and conditional`, `Which sentence is in the conditional?`, `Nous mangerions au restaurant`, [`Nous mangeons au restaurant`, `Nous mangerons au restaurant`, `Nous mangions au restaurant`], `-ions on the future stem.`],
  [`Near future, future and conditional`, `Which sentence is in the simple future?`, `Elle partira demain`, [`Elle partait demain`, `Elle va partir demain`, `Elle partirait demain`], `-a on the future stem (partir-).`]
);

// ---- Hand-written: modals and verb constructions ----
qs.push(
  [`Imperative and verb constructions`, `What form of the verb follows a modal verb like pouvoir, devoir or vouloir?`, `The infinitive`, [`The past participle`, `The imperfect`, `The present participle`], `For example: je peux sortir, tu dois travailler, il veut manger.`],
  [`Imperative and verb constructions`, `How do you say "I can play tennis"?`, `Je peux jouer au tennis`, [`Je peux joue au tennis`, `Je pouvoir jouer au tennis`, `Je peut jouer au tennis`], `Je peux = I can; the second verb stays in the infinitive.`],
  [`Imperative and verb constructions`, `How do you say "we must leave"?`, `Nous devons partir`, [`Nous devez partir`, `Nous devrons partons`, `Nous doivent partir`], `devoir: dois, dois, doit, devons, devez, doivent.`],
  [`Imperative and verb constructions`, `Which is the correct "ils" form of vouloir?`, `veulent`, [`voulent`, `veuvent`, `voulons`], `vouloir: veux, veux, veut, voulons, voulez, veulent.`],
  [`Imperative and verb constructions`, `Which is the correct "ils" form of pouvoir?`, `peuvent`, [`pouvent`, `peuxent`, `pouvons`], `pouvoir: peux, peux, peut, pouvons, pouvez, peuvent.`],
  [`Imperative and verb constructions`, `What does "je voudrais" mean?`, `I would like`, [`I wanted`, `I will want`, `I want`], `Voudrais is the conditional of vouloir.`],
  [`Imperative and verb constructions`, `What does "il faut" + infinitive mean?`, `It is necessary to / you must`, [`It is possible to`, `He wants to`, `He used to`], `For example: il faut manger sainement.`],
  [`Imperative and verb constructions`, `How is the "tu" imperative formed for -er verbs such as parler?`, `Parle (the -s is dropped)`, [`Parles`, `Parler`, `Parlez`], `Imperative uses the present tense without the subject; -er verbs lose the -s in tu.`],
  [`Imperative and verb constructions`, `Which is the "vous" imperative (a command) of prendre?`, `Prenez`, [`Prends`, `Prenons`, `Prendre`], `Prends (tu), prenons (nous), prenez (vous).`],
  [`Imperative and verb constructions`, `What does "venir de" + infinitive mean, as in "je viens de manger"?`, `Have just (done something)`, [`Am going to`, `Used to`, `Would like to`], `Venir de = the recent past: I have just eaten.`],
  [`Imperative and verb constructions`, `How do you say "I like swimming"?`, `J’aime nager`, [`J’aime nagé`, `J’aime nage`, `Je aime nagez`], `Verbs of liking are followed by the infinitive.`],
  [`Imperative and verb constructions`, `What is the structure to say "I want to buy a car"?`, `Je veux acheter une voiture`, [`Je veux acheté une voiture`, `Je veut acheter une voiture`, `Je voulons acheter une voiture`], `vouloir (conjugated) + infinitive.`],
  [`Imperative and verb constructions`, `How would you say "you (informal) must do your homework"?`, `Tu dois faire tes devoirs`, [`Tu doit faire tes devoirs`, `Tu dois fais tes devoirs`, `Tu devoir faire tes devoirs`], `dois (tu), then faire in the infinitive.`]
);

module.exports = { subject: 'French', qs };
