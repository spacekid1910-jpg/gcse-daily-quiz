// Eduqas 2027 poetry anthology. Only poems Andrew has confirmed are in his anthology, and only lines I am certain of.
// [topic, question, correct answer, [3 wrong answers], one-line explanation, unit hint]
const P = 'Poetry';
const C = `Anthology poems - content and meaning`;

module.exports = {
  subject: 'English Literature',
  qs: [
    // ================= The Schoolboy (Blake) =================
    [C, `'The Schoolboy' - complete the quote: "I love to rise in a summer ___."`, `morn`, [`dawn`, `day`, `sun`], `The boy loves the freedom of the morning outdoors.`, P],
    [C, `'The Schoolboy' - complete the quote: "And the ___ sings with me."`, `skylark`, [`nightingale`, `robin`, `thrush`], `The bird is a symbol of freedom and joy.`, P],
    [C, `'The Schoolboy' - complete the quote: "But to go to school in a summer morn, / O! it drives all ___ away."`, `joy`, [`hope`, `light`, `peace`], `School is presented as a place that crushes happiness.`, P],
    [C, `'The Schoolboy' - complete the quote: "How can the bird that is born for ___ / Sit in a cage and sing?"`, `joy`, [`flight`, `song`, `freedom`], `The caged bird is a metaphor for the confined child.`, P],
    [C, `'The Schoolboy' - complete the quote: "How can a child when fears annoy, / But droop his tender wing, / And forget his youthful ___?"`, `spring`, [`days`, `joy`, `play`], `Spring stands for childhood.`, P],

    // ================= I Wandered Lonely as a Cloud (Wordsworth) =================
    [C, `'I Wandered Lonely as a Cloud' - complete the quote: "I wandered lonely as a ___."`, `cloud`, [`bird`, `breeze`, `wave`], `The simile shows the speaker drifting alone.`, P],
    [C, `'I Wandered Lonely as a Cloud' - complete the quote: "A host, of golden ___."`, `daffodils`, [`tulips`, `sunflowers`, `buttercups`], `'Host' suggests an army or angels.`, P],
    [C, `'I Wandered Lonely as a Cloud' - complete the quote: "Continuous as the stars that shine / And twinkle on the milky ___."`, `way`, [`sea`, `night`, `sky`], `The daffodils are compared to stars.`, P],
    [C, `'I Wandered Lonely as a Cloud' - complete the quote: "Ten thousand saw I at a ___."`, `glance`, [`time`, `sight`, `look`], `The exaggeration shows how overwhelming the sight is.`, P],
    [C, `'I Wandered Lonely as a Cloud' - complete the quote: "They flash upon that inward ___ / Which is the bliss of solitude."`, `eye`, [`mind`, `heart`, `ear`], `The memory of nature brings him joy later.`, P],

    // ================= Cousin Kate (Rossetti) =================
    [C, `'Cousin Kate' - complete the quote: "I was a cottage ___ / Hardened by sun and air."`, `maiden`, [`girl`, `child`, `servant`], `The speaker starts as a poor, innocent country girl.`, P],
    [C, `'Cousin Kate' - complete the quote: "Why did a great ___ find me out?"`, `lord`, [`king`, `man`, `knight`], `A powerful man takes advantage of her.`, P],
    [C, `'Cousin Kate' - complete the quote: "He wore me like a golden ___, / He changed me like a glove."`, `knot`, [`chain`, `ring`, `crown`], `Similes show she was treated like an accessory.`, P],
    [C, `'Cousin Kate' - complete the quote: "So now I moan, an unclean thing, / Who might have been a ___."`, `dove`, [`queen`, `lady`, `bride`], `The dove symbolises innocence and purity.`, P],

    // ================= Drummer Hodge (Hardy) =================
    [C, `'Drummer Hodge' - complete the quote: "They throw in Drummer Hodge, to rest / ___ - just as found."`, `Uncoffined`, [`Unmarked`, `Unwept`, `Unburied`], `Hodge is buried without ceremony.`, P],
    [C, `'Drummer Hodge' - complete the quote: "His landmark is a ___-crest / That breaks the veldt around."`, `kopje`, [`hill`, `rock`, `mountain`], `Hardy uses foreign words to show how far from home he lies.`, P],
    [C, `'Drummer Hodge' - complete the quote: "And foreign ___ west / Each night above his mound."`, `constellations`, [`stars`, `moons`, `clouds`], `The unfamiliar sky adds to the sense of exile.`, P],
    [C, `'Drummer Hodge' - complete the quote: "Young Hodge the Drummer never knew - / Fresh from his ___ home."`, `Wessex`, [`Dorset`, `English`, `village`], `Hodge was a young English soldier who never understood the war.`, P],
    [C, `'Drummer Hodge' - complete the quote: "The meaning of the broad ___."`, `Karoo`, [`Kalahari`, `Sahara`, `veldt`], `The Karoo is a dry region of South Africa.`, P],

    // ================= Disabled (Owen) =================
    [C, `'Disabled' - complete the quote: "He sat in a wheeled chair, waiting for ___."`, `dark`, [`the nurse`, `morning`, `spring`], `The opening sets a lonely, hopeless tone.`, P],
    [C, `'Disabled' - complete the quote: "Legless, sewn short at ___."`, `elbow`, [`shoulder`, `wrist`, `knee`], `The blunt description shows the reality of his injuries.`, P],
    [C, `'Disabled' - complete the quote: "Voices of boys rang saddening like a ___."`, `hymn`, [`bell`, `song`, `choir`], `The sound of healthy boys reminds him of what he lost.`, P],
    [C, `'Disabled' - complete the quote: "And shivered in his ghastly suit of ___."`, `grey`, [`black`, `red`, `white`], `The colour reflects his dull, lifeless existence.`, P],
    [C, `'Disabled' - complete the quote: "Why don't they come / And put him into ___?"`, `bed`, [`hospital`, `the ward`, `a chair`], `The ending shows his helplessness and isolation.`, P],

    // ================= Blackberry Picking (Heaney) =================
    [C, `'Blackberry Picking' - complete the quote: "Late August, given heavy rain and ___."`, `sun`, [`wind`, `hail`, `cloud`], `The poem begins with a sense of natural abundance.`, P],
    [C, `'Blackberry Picking' - complete the quote: "At first, just one, a glossy purple ___."`, `clot`, [`drop`, `bead`, `gem`], `'Clot' suggests blood, linking the fruit to something bodily.`, P],
    [C, `'Blackberry Picking' - complete the quote: "You ate that first one and its flesh was sweet / Like thickened ___."`, `wine`, [`blood`, `jam`, `syrup`], `The simile shows the fruit's richness.`, P],
    [C, `'Blackberry Picking' - complete the quote: "The fruit fermented, the sweet flesh would turn ___."`, `sour`, [`bitter`, `brown`, `soft`], `The fruit rots as childhood hopes are lost.`, P],
    [C, `'Blackberry Picking' - complete the quote: "It wasn't ___ / That all the lovely canfuls smelt of rot."`, `fair`, [`right`, `kind`, `true`], `A childish complaint that shows his disappointment.`, P],

    // ================= Remains (Armitage) =================
    [C, `'Remains' - complete the quote: "Probably armed, possibly ___."`, `not`, [`drunk`, `afraid`, `hiding`], `The uncertainty shows how quickly the soldiers judged the looter.`, P],
    [C, `'Remains' - complete the quote: "I see every round as it rips through his ___."`, `life`, [`body`, `chest`, `heart`], `'Life' shows the speaker sees the human cost, not just a body.`, P],
    [C, `'Remains' - complete the quote: "I see broad ___ on the other side."`, `daylight`, [`sunlight`, `darkness`, `blood`], `The image is graphic and stays in the speaker's mind.`, P],
    [C, `'Remains' - complete the quote: "His blood-shadow stays on the ___."`, `street`, [`wall`, `floor`, `sand`], `The stain represents the speaker's lasting guilt.`, P],

    // ================= I Shall Return (McKay) =================
    [C, `'I Shall Return' - complete the quote: "I shall return again; I shall return / To laugh and love and watch with ___-eyes."`, `wonder`, [`open`, `happy`, `child`], `The speaker longs to return to the wonder of his homeland.`, P],
    [C, `'I Shall Return' - complete the quote: "At golden noon the forest fires ___."`, `burn`, [`glow`, `rise`, `spread`], `The imagery is vivid and warm.`, P],
    [C, `'I Shall Return' - complete the quote: "Wafting their blue-black smoke to ___ skies."`, `sapphire`, [`sunlit`, `cloudless`, `summer`], `Rich colours show his love for the place.`, P],
    [C, `'I Shall Return' - complete the quote: "That bathe the brown blades of the bending ___."`, `grasses`, [`reeds`, `trees`, `rivers`], `The nature imagery is affectionate and detailed.`, P],
    [C, `'I Shall Return' - what is the speaker longing for?`, `His Caribbean homeland`, [`His wartime home`, `A future wife`, `An English village`], `McKay was born in Jamaica and wrote this while living in America.`, P],

    // ================= Catrin (Clarke) =================
    [C, `'Catrin' - complete the quote: "I can remember you, our first fierce ___."`, `confrontation`, [`argument`, `meeting`, `embrace`], `The poem explores the tension between mother and daughter.`, P],
    [C, `'Catrin' - complete the quote: "The tight red rope of love which we both ___."`, `fought`, [`held`, `tied`, `felt`], `The rope suggests the umbilical cord and the struggle for independence.`, P],

    // ================= poets =================
    [C, `Who wrote 'The Schoolboy'?`, `William Blake`, [`William Wordsworth`, `Thomas Hardy`, `Wilfred Owen`], `It appears in Songs of Experience.`, P],
    [C, `Who wrote 'I Wandered Lonely as a Cloud'?`, `William Wordsworth`, [`William Blake`, `Thomas Hardy`, `Seamus Heaney`], `He is a Romantic poet.`, P],
    [C, `Who wrote 'Cousin Kate'?`, `Christina Rossetti`, [`Claude McKay`, `Gillian Clarke`, `Imtiaz Dharker`], `She was a Victorian poet.`, P],
    [C, `Who wrote 'Drummer Hodge'?`, `Thomas Hardy`, [`Wilfred Owen`, `William Blake`, `Simon Armitage`], `He wrote it during the Boer War.`, P],
    [C, `Who wrote 'Disabled'?`, `Wilfred Owen`, [`Thomas Hardy`, `Simon Armitage`, `Seamus Heaney`], `He was a soldier-poet killed in 1918.`, P],
    [C, `Who wrote 'I Shall Return'?`, `Claude McKay`, [`Zulfikar Ghose`, `Gillian Clarke`, `Thomas Hardy`], `He was a Jamaican-born poet.`, P],
    [C, `Who wrote 'Decomposition'?`, `Zulfikar Ghose`, [`Claude McKay`, `Imtiaz Dharker`, `Simon Armitage`], `The poem is about poverty and the poet's reaction to it.`, P],
    [C, `Who wrote 'Catrin'?`, `Gillian Clarke`, [`Imtiaz Dharker`, `Christina Rossetti`, `Seamus Heaney`], `It is about the poet's daughter.`, P],
    [C, `Who wrote 'Blackberry Picking'?`, `Seamus Heaney`, [`Simon Armitage`, `Gillian Clarke`, `Thomas Hardy`], `He was from Northern Ireland.`, P],
    [C, `Who wrote 'Dusting the Phone'?`, `Imtiaz Dharker`, [`Gillian Clarke`, `Christina Rossetti`, `Zulfikar Ghose`], `She is a poet born in Pakistan and raised in Scotland.`, P],
    [C, `Who wrote 'Remains'?`, `Simon Armitage`, [`Seamus Heaney`, `Wilfred Owen`, `Zulfikar Ghose`], `It is based on the experience of a soldier in Iraq.`, P],

    // ================= language, form and structure / themes / context =================
    [`Themes and connections`, `Which two poems both explore the effects of war on soldiers?`, `Disabled and Remains`, [`Cousin Kate and Catrin`, `The Schoolboy and Blackberry Picking`, `I Wandered Lonely as a Cloud and I Shall Return`], `Both show lasting physical or psychological damage.`, P],
    [`Themes and connections`, `Which poem explores the relationship between a mother and her daughter?`, `Catrin`, [`Blackberry Picking`, `Cousin Kate`, `The Schoolboy`], `The tone is loving but tense.`, P],
    [`Themes and connections`, `Which poem explores a woman betrayed by a powerful man?`, `Cousin Kate`, [`Catrin`, `Drummer Hodge`, `Disabled`], `Rossetti criticises Victorian double standards.`, P],
    [`Themes and connections`, `Which two poems both explore the loss of childhood innocence?`, `The Schoolboy and Blackberry Picking`, [`Disabled and Remains`, `Cousin Kate and Drummer Hodge`, `Catrin and I Shall Return`], `The child in 'Blackberry Picking' learns that good things decay.`, P],

    [`Language, form and structure`, `'I Wandered Lonely as a Cloud' opens with a...`, `Simile comparing the speaker to a cloud`, [`Metaphor about the sea`, `Question to the reader`, `Command to the daffodils`], `The simile suggests drifting aimlessly.`, P],
    [`Language, form and structure`, `In 'The Schoolboy', the caged bird is a...`, `Metaphor for a child trapped in school`, [`Simile for the speaker's father`, `Symbol of war`, `Description of a real pet`], `Blake criticises rigid education.`, P],
    [`Language, form and structure`, `'Cousin Kate' is told from the point of view of...`, `A woman abandoned by a lord who addresses her cousin`, [`The lord himself`, `A narrator watching from afar`, `Cousin Kate`], `The first-person voice makes it personal.`, P],
    [`Language, form and structure`, `Whose voice does the speaker use in 'Remains'?`, `A soldier haunted by having shot a looter`, [`A journalist`, `A police officer`, `A child`], `The colloquial voice makes the horror feel casual and real.`, P],

    [`Context`, `'Drummer Hodge' was written in response to which war?`, `The Boer War in South Africa`, [`The First World War`, `The Crimean War`, `The Napoleonic Wars`], `Hodge is a young English soldier buried far from home.`, P],
    [`Context`, `Wilfred Owen was killed in...`, `1918`, [`1914`, `1916`, `1945`], `He died a week before the Armistice.`, P],
    [`Context`, `In which period did Blake and Wordsworth write?`, `The Romantic period`, [`The Victorian period`, `The Modernist period`, `The Elizabethan period`], `Romantic poets valued nature and emotion.`, P],
    [`Context`, `Christina Rossetti wrote 'Cousin Kate' during which era?`, `The Victorian era`, [`The Romantic era`, `The Elizabethan era`, `The Modernist era`], `The poem challenges Victorian attitudes to class and morality.`, P],
    [`Context`, `Where was Claude McKay born?`, `Jamaica`, [`Nigeria`, `England`, `Trinidad`], `His poem expresses longing for his homeland.`, P],
  ],
};
