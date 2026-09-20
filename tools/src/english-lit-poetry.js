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

    // ================= Sonnet 29 (Elizabeth Barrett Browning) =================
    [C, `'Sonnet 29' - complete the quote: "I think of thee! - my thoughts do twine and ___."`, `bud`, [`grow`, `climb`, `bloom`], `The speaker's thoughts spread like a plant.`, P],
    [C, `'Sonnet 29' - complete the quote: "About thee, as wild ___, about a tree."`, `vines`, [`roses`, `weeds`, `ivy`], `The extended metaphor: her thoughts are vines and her lover is the tree.`, P],
    [C, `'Sonnet 29' - complete the quote: "Except the straggling ___ which hides the wood."`, `green`, [`leaves`, `growth`, `vines`], `Her thoughts have overgrown and hidden him.`, P],
    [C, `'Sonnet 29' - complete the quote: "Yet, O my ___, be it understood."`, `palm-tree`, [`oak`, `willow`, `cedar`], `She addresses her lover as a strong, tall tree.`, P],
    [C, `'Sonnet 29' - complete the quote: "Rather, instantly / Renew thy ___."`, `presence`, [`love`, `memory`, `strength`], `She wants his real presence, not just thoughts of him.`, P],
    [C, `'Sonnet 29' - complete the quote: "Rustle thy ___ and set thy trunk all bare."`, `boughs`, [`leaves`, `roots`, `branches`], `She wants her lover to shake off her overgrown thoughts.`, P],
    [C, `'Sonnet 29' - complete the quote: "Drop heavily down, - burst, shattered, ___!"`, `everywhere`, [`scattered`, `broken`, `fallen`], `The violent verbs show her impatience to see him.`, P],
    [C, `Which is the final line of 'Sonnet 29'?`, `I do not think of thee - I am too near thee.`, [`I shall but love thee better after death.`, `I think of thee always - I am too far from thee.`, `I cannot think of thee - I am too full of thee.`], `Being with him removes the need to think of him.`, P],
    [C, `What is the extended metaphor in 'Sonnet 29'?`, `Her thoughts are vines growing over her lover, who is a tree`, [`Her love is a river`, `Her lover is a rose`, `Her thoughts are a storm`], `She wants the real tree, not the covering vines.`, P],
    [C, `'Sonnet 29' comes from which collection?`, `Sonnets from the Portuguese`, [`Songs of Innocence`, `Goblin Market`, `Aurora Leigh`], `The collection was published in 1850.`, P],
    [`Language, form and structure`, `'Sonnet 29' follows which sonnet form?`, `Petrarchan (an octave followed by a sestet)`, [`Shakespearean (three quatrains and a couplet)`, `Villanelle`, `Free verse`], `The rhyme scheme is ABBAABBA CDCDCD.`, P],
    [`Themes and connections`, `In 'Sonnet 29', what does the speaker want most?`, `Her lover's real presence rather than thoughts of him`, [`To forget her lover`, `To leave the countryside`, `A longer poem to describe him`], `Real presence is better than memory.`, P],

    // ================= Decomposition (Ghose) =================
    [C, `'Decomposition' - complete the quote: "I have a picture I took in ___."`, `Bombay`, [`Delhi`, `Calcutta`, `Karachi`], `The speaker photographed a sleeping beggar in an Indian city.`, P],
    [C, `'Decomposition' - complete the quote: "his shadow thrown aside like a ___."`, `blanket`, [`cloak`, `shroud`, `curtain`], `The simile shows the man has only his shadow for comfort.`, P],
    [C, `'Decomposition' - complete the quote: "His arms and legs could be ___ in the stone."`, `cracks`, [`lines`, `veins`, `marks`], `The man is dehumanised and becomes part of the pavement.`, P],
    [C, `'Decomposition' - complete the quote: "he lies veined into stone, a ___ man."`, `fossil`, [`dead`, `ancient`, `broken`], `A fossil is lifeless and ancient, which suggests he is barely alive.`, P],
    [C, `'Decomposition' - complete the quote: "Brain-washed by the ___ into exhaustion."`, `sun`, [`heat`, `city`, `crowd`], `The harsh climate has worn him out.`, P],
    [C, `'Decomposition' - complete the quote: "Behind him there is a crowd passingly bemused... and quite indifferent to this very ___ sight."`, `common`, [`sad`, `daily`, `strange`], `Poverty is so normal that nobody notices it.`, P],
    [C, `'Decomposition' - complete the quote: "I thought it then a good ___."`, `composition`, [`picture`, `photograph`, `subject`], `The speaker first saw the beggar only as an artistic subject.`, P],
    [C, `'Decomposition' - complete the quote: "and glibly called it 'The Man in the ___.'"`, `Street`, [`Crowd`, `City`, `Sun`], `'Glibly' shows he was casual and shallow.`, P],
    [C, `'Decomposition' - complete the quote: "His head in the posture of one ___ / into a pillow."`, `weeping`, [`sleeping`, `resting`, `praying`], `The speaker later realises the man's pain.`, P],
    [C, `'Decomposition' - complete the quote: "...presumption at attempting to compose / art of his hunger and ___."`, `solitude`, [`poverty`, `sleep`, `suffering`], `The speaker feels guilty for turning suffering into art.`, P],
    [C, `In 'Decomposition', how does the speaker's attitude to the photograph change?`, `From pleased and casual to guilty and ashamed`, [`From angry to proud`, `From sad to cheerful`, `It stays the same`], `He realises he treated the man's suffering as art.`, P],
    [C, `In 'Decomposition', who is 'indifferent' to the beggar?`, `The passing crowd`, [`The speaker`, `The photographer's friends`, `The beggar himself`], `They are more interested in a street trickster.`, P],
    [`Language, form and structure`, `The title 'Decomposition' has a double meaning. What are the two meanings?`, `The composition of a photograph, and decay or rotting`, [`A musical piece and a poem`, `A painting and a building`, `A crowd and a shadow`], `It links art with the man's decaying, neglected body.`, P],
    [`Language, form and structure`, `What does the metaphor 'a fossil man' suggest?`, `He is lifeless, motionless and part of the landscape`, [`He is very wise`, `He is a rich traveller`, `He is dangerous`], `It dehumanises him, which mirrors how others see him.`, P],
    [`Language, form and structure`, `How many lines are in each stanza of 'Decomposition'?`, `Four`, [`Two`, `Three`, `Six`], `The regular quatrains give a controlled, observational tone.`, P],

    // ================= Dusting the Phone =================
    [C, `'Dusting the Phone' - complete the quote: "I am spending my time imagining the worst that could ___."`, `happen`, [`come`, `occur`, `follow`], `The speaker is anxious and expects disaster.`, P],
    [C, `'Dusting the Phone' - complete the quote: "The phone rings heralding some ___. Sirens."`, `disaster`, [`news`, `danger`, `emergency`], `Sirens create a sense of panic.`, P],
    [C, `'Dusting the Phone' - complete the quote: "The future is a long gloved ___."`, `hand`, [`arm`, `road`, `glove`], `The image is mysterious and unsettling.`, P],
    [C, `'Dusting the Phone' - complete the quote: "I assault the ___ for a letter."`, `postman`, [`post office`, `doorbell`, `neighbour`], `'Assault' shows how desperate she is.`, P],
    [C, `'Dusting the Phone' - complete the quote: "Silver ___. I polish it. I dress for it."`, `service`, [`phone`, `plate`, `spoon`], `She treats the phone like an honoured guest.`, P],
    [C, `'Dusting the Phone' - complete the quote: "Infuriatingly, it sends me ___, wrong numbers."`, `hoaxes`, [`letters`, `messages`, `rings`], `The phone is personified as if it is teasing her.`, P],
    [C, `'Dusting the Phone' - complete the quote: "Your voice / disappears into my lonely cotton ___."`, `sheets`, [`pillows`, `dreams`, `rooms`], `The bed shows her loneliness.`, P],
    [C, `What is the speaker in 'Dusting the Phone' waiting for?`, `A phone call from someone she loves`, [`A letter from a bank`, `A visit from her family`, `News from a hospital`], `Her anxiety builds as the call does not come.`, P],
    [`Language, form and structure`, `What effect do the short, abrupt sentences in 'Dusting the Phone' create?`, `Anxiety and tension`, [`Calm and peace`, `Humour`, `A sense of history`], `They mirror the speaker's racing thoughts.`, P],
    [`Language, form and structure`, `Why does the speaker 'polish' and 'dress for' the phone?`, `It is personified to show how much she wants the call`, [`She is a cleaner`, `She works in a shop`, `She wants to sell it`], `It shows obsessive behaviour caused by love.`, P],

    // ================= Origin Story =================
    [C, `'Origin Story' - complete the quote: "my mother and my father / met at the Greyhound bus ___."`, `station`, [`stop`, `terminal`, `depot`], `The poem begins with how the speaker's parents met.`, P],
    [C, `'Origin Story' - complete the quote: "in the mid-eighties in ___."`, `Chicago`, [`Detroit`, `New York`, `Atlanta`], `The setting places the story in America.`, P],
    [C, `'Origin Story' - complete the quote: "my mother, all thick glass and afro ___."`, `puff`, [`curls`, `hair`, `braid`], `The list-like description gives a vivid picture of her.`, P],
    [C, `'Origin Story' - complete the quote: "played tambourine in a Chaka ___ cover band."`, `Khan`, [`Franklin`, `Ross`, `Simone`], `Details about music bring the parents to life.`, P],
    [C, `'Origin Story' - complete the quote: "my father, all sleeveless and soft ___."`, `eye`, [`heart`, `smile`, `voice`], `The description matches the way the mother is described.`, P],
    [C, `'Origin Story' - complete the quote: "mimeographed ___ newspapers."`, `communist`, [`political`, `student`, `union`], `The father was an idealistic young rebel.`, P],
    [C, `'Origin Story' - complete the quote: "love is like a ___ book. it's fragile."`, `comic`, [`picture`, `story`, `library`], `The extended metaphor is the heart of the poem.`, P],
    [C, `'Origin Story' - complete the quote: "love is ___."`, `paper`, [`glass`, `fragile`, `fire`], `The short line makes a striking, simple claim.`, P],
    [C, `'Origin Story' - complete the quote: "it never saw polyvinyl, never felt a ___."`, `backing`, [`cover`, `case`, `wrapper`], `Their love was never carefully protected.`, P],
    [C, `'Origin Story' - complete the quote: "memorized, mishandled, worn thin, ___ rusted."`, `staples`, [`pages`, `edges`, `corners`], `The list shows the comic was well loved and well used.`, P],
    [C, `'Origin Story' - complete the quote: "a love like that doesn't last / but it has a good ___."`, `ending`, [`start`, `story`, `memory`], `The tone is accepting and positive.`, P],
    [C, `What is the central metaphor in 'Origin Story'?`, `Love is like a comic book`, [`Love is like a river`, `Love is like a bus journey`, `Love is like a song`], `Comics are fragile, well used and hard to preserve.`, P],
    [`Language, form and structure`, `In comics, an 'origin story' explains...`, `How a character came to be`, [`How a story ends`, `Who published the comic`, `Where the comic was printed`], `The title suggests the speaker is telling how they came to be.`, P],

    // ================= Kamikaze (Garland) =================
    [C, `'Kamikaze' - complete the quote: "Her father embarked at ___."`, `sunrise`, [`dawn`, `midnight`, `noon`], `The rising sun links to Japan's imperial symbol.`, P],
    [C, `'Kamikaze' - complete the quote: "with a flask of water, a ___ sword in the cockpit."`, `samurai`, [`silver`, `ceremonial`, `Japanese`], `The sword symbolises honour and duty.`, P],
    [C, `'Kamikaze' - complete the quote: "a shaven head full of powerful ___."`, `incantations`, [`prayers`, `memories`, `thoughts`], `The word suggests ritual and spiritual belief.`, P],
    [C, `'Kamikaze' - complete the quote: "enough fuel for a one-way journey into ___."`, `history`, [`war`, `death`, `glory`], `He expects to die and be remembered.`, P],
    [C, `'Kamikaze' - complete the quote: "the little fishing boats strung out like ___."`, `bunting`, [`flags`, `pearls`, `beads`], `The simile suggests celebration and peace.`, P],
    [C, `'Kamikaze' - complete the quote: "on a green-blue ___ sea."`, `translucent`, [`shimmering`, `endless`, `glittering`], `The calm sea contrasts with his mission.`, P],
    [C, `'Kamikaze' - complete the quote: "in a figure of ___."`, `eight`, [`seven`, `ten`, `four`], `The shoals of fish move like a waving flag.`, P],
    [C, `'Kamikaze' - complete the quote: "flashing silver as their bellies swivelled towards the ___."`, `sun`, [`sea`, `moon`, `boat`], `The natural beauty draws his thoughts to life.`, P],
    [C, `'Kamikaze' - complete the quote: "built cairns of pearl-grey ___."`, `pebbles`, [`stones`, `shells`, `rocks`], `The memory of childhood makes him think of his own father.`, P],
    [C, `'Kamikaze' - complete the quote: "bringing their father's boat ___."`, `safe`, [`home`, `back`, `in`], `Safe return is a central theme.`, P],
    [C, `'Kamikaze' - complete the quote: "with cloud-marked ___, black crabs, feathery prawns."`, `mackerel`, [`salmon`, `tuna`, `herring`], `The detailed imagery makes the memory vivid.`, P],
    [C, `'Kamikaze' - complete the quote: "a tuna, the dark prince, muscular, ___."`, `dangerous`, [`powerful`, `beautiful`, `silver`], `The tuna is a symbol of the sea's power.`, P],
    [C, `'Kamikaze' - complete the quote: "my mother never spoke again in his ___."`, `presence`, [`company`, `house`, `sight`], `The family shuns him for returning alive.`, P],
    [C, `'Kamikaze' - complete the quote: "only we children still chattered and ___."`, `laughed`, [`played`, `sang`, `cried`], `The children take longer to learn the silence.`, P],
    [C, `Why does his family treat the pilot as though he no longer existed?`, `He returned alive instead of completing his suicide mission, bringing shame`, [`He had lied to them`, `He had left them for another family`, `He had committed a crime`], `Honour mattered more than life.`, P],
    [C, `In 'Kamikaze', who tells the story?`, `His daughter, recounting it later to her children`, [`The pilot himself`, `An officer`, `His wife`], `The story is told at a distance in time.`, P],
    [C, `What does the pilot see and remember that makes him turn back?`, `The beauty of the sea and his childhood memories of his father`, [`A warning from his commander`, `Enemy ships`, `A storm`], `The memories remind him of the value of life.`, P],
    [`Language, form and structure`, `What does the simile 'like bunting' suggest?`, `Peace and celebration, in contrast to the mission`, [`Danger`, `War`, `Sadness`], `The gentle imagery makes him pause.`, P],
    [`Language, form and structure`, `What does 'a one-way journey into history' suggest?`, `He expected to die and be remembered as a hero`, [`He was going on holiday`, `He planned to escape`, `He was going to write a book`], `The phrase mixes duty and death.`, P],
    [`Context`, `What was a kamikaze pilot?`, `A Japanese pilot on a suicide mission in the Second World War`, [`A British fighter pilot`, `A Japanese fisherman`, `A German paratrooper`], `The word means 'divine wind'.`, P],
    [`Themes and connections`, `Which two poems both show how society treats a man after his war experience?`, `Kamikaze and Disabled`, [`Cousin Kate and Catrin`, `The Schoolboy and Blackberry Picking`, `Drummer Hodge and I Shall Return`], `Both men are isolated.`, P],

    // ================= War Photographer (Duffy) =================
    [C, `'War Photographer' - complete the quote: "In his dark room he is finally ___."`, `alone`, [`silent`, `calm`, `safe`], `The dark room is his private space.`, P],
    [C, `'War Photographer' - complete the quote: "with spools of ___ set out in ordered rows."`, `suffering`, [`film`, `memory`, `horror`], `'Ordered rows' contrasts with the chaos of war.`, P],
    [C, `'War Photographer' - complete the quote: "The only light is ___ and softly glows."`, `red`, [`dim`, `white`, `pale`], `The red light also suggests blood.`, P],
    [C, `'War Photographer' - complete the quote: "as though this were a ___ and he a priest."`, `church`, [`temple`, `hospital`, `prison`], `The religious imagery shows his work is sacred.`, P],
    [C, `'War Photographer' - complete the quote: "a priest preparing to intone a ___."`, `Mass`, [`prayer`, `hymn`, `psalm`], `The photographer treats the images with respect.`, P],
    [C, `'War Photographer' - complete the quote: "Belfast. Beirut. Phnom Penh. All flesh is ___."`, `grass`, [`dust`, `ash`, `pain`], `A biblical allusion: human life is fleeting.`, P],
    [C, `'War Photographer' - complete the quote: "Solutions slop in ___."`, `trays`, [`buckets`, `baths`, `bowls`], `The verb 'slop' is casual, which contrasts with the subject.`, P],
    [C, `'War Photographer' - complete the quote: "beneath his hands, which did not ___ then."`, `tremble`, [`shake`, `freeze`, `hesitate`], `His hands shake now that he is safe.`, P],
    [C, `'War Photographer' - complete the quote: "to fields which don't explode beneath the feet of running ___."`, `children`, [`soldiers`, `animals`, `strangers`], `He contrasts safe England with war zones.`, P],
    [C, `'War Photographer' - complete the quote: "of running children in a nightmare ___."`, `heat`, [`sun`, `dream`, `fear`], `The heat adds to the atmosphere of horror.`, P],
    [C, `'War Photographer' - complete the quote: "A stranger's features faintly start to twist before his eyes, a half-formed ___."`, `ghost`, [`shadow`, `memory`, `face`], `The image gradually appears in the developing tray.`, P],
    [C, `'War Photographer' - complete the quote: "and how the blood stained into foreign ___."`, `dust`, [`soil`, `sand`, `earth`], `The foreign setting keeps the horror at a distance.`, P],
    [C, `'War Photographer' - complete the quote: "A hundred ___ in black and white."`, `agonies`, [`images`, `horrors`, `pictures`], `'Agonies' shows the scale of suffering.`, P],
    [C, `'War Photographer' - complete the quote: "The reader's eyeballs ___ / with tears between the bath and pre-lunch beers."`, `prick`, [`burn`, `fill`, `sting`], `The reaction is brief and shallow.`, P],
    [C, `'War Photographer' - complete the quote: "From the aeroplane he stares ___ at where he earns his living."`, `impassively`, [`sadly`, `angrily`, `silently`], `He appears emotionless but is deeply affected.`, P],
    [C, `Why is the dark room compared to a church in 'War Photographer'?`, `His work is treated like a sacred ritual, like a priest performing Mass`, [`It is very old`, `He prays while he works`, `It is very quiet`], `It shows respect for the victims.`, P],
    [C, `What contrast does the poem draw between rural England and war zones?`, `Ordinary, peaceful pain that weather can dispel versus violent conflict`, [`Wealth versus poverty`, `Old versus young`, `Town versus country`], `The photographer cannot forget what he has seen.`, P],
    [C, `How do the readers of the Sunday supplement react?`, `Briefly moved, but they soon carry on with their normal lives`, [`They protest against war`, `They send money`, `They stop reading the paper`], `The final line says 'they do not care'.`, P],
    [`Language, form and structure`, `What is the rhyme scheme of each stanza in 'War Photographer'?`, `ABBCDD`, [`ABABAB`, `AABBCC`, `ABCABC`], `The regular structure mirrors his need for control.`, P],
    [`Language, form and structure`, `'All flesh is grass' is...`, `A biblical allusion about how fragile human life is`, [`A description of a field`, `A line about farming`, `A simile about food`], `It comes from the Book of Isaiah.`, P],
    [`Themes and connections`, `Which two poems both explore the emotional impact of war on one person after it has ended?`, `War Photographer and Remains`, [`The Schoolboy and Cousin Kate`, `Catrin and Blackberry Picking`, `I Wandered Lonely as a Cloud and Sonnet 29`], `Both men are haunted by what they saw.`, P],

    // ================= poets =================
    [C, `Who wrote 'War Photographer'?`, `Carol Ann Duffy`, [`Simon Armitage`, `Gillian Clarke`, `Seamus Heaney`], `Duffy was Poet Laureate from 2009 to 2019.`, P],
    [C, `Who wrote 'Kamikaze'?`, `Beatrice Garland`, [`Carol Ann Duffy`, `Simon Armitage`, `Gillian Clarke`], `The poem was published in 2013.`, P],
    [C, `Who wrote 'Dusting the Phone'?`, `Jackie Kay`, [`Carol Ann Duffy`, `Gillian Clarke`, `Christina Rossetti`], `She is a Scottish poet.`, P],
    [C, `Who wrote 'Origin Story'?`, `Eve L. Ewing`, [`Claude McKay`, `Zulfikar Ghose`, `Simon Armitage`], `She is an American poet and writer from Chicago.`, P],
    [C, `Who wrote 'Sonnet 29'?`, `Elizabeth Barrett Browning`, [`Christina Rossetti`, `Gillian Clarke`, `Imtiaz Dharker`], `She was a Victorian poet.`, P],
    [C, `Who wrote 'The Schoolboy'?`, `William Blake`, [`William Wordsworth`, `Thomas Hardy`, `Wilfred Owen`], `It appears in Songs of Experience.`, P],
    [C, `Who wrote 'I Wandered Lonely as a Cloud'?`, `William Wordsworth`, [`William Blake`, `Thomas Hardy`, `Seamus Heaney`], `He is a Romantic poet.`, P],
    [C, `Who wrote 'Cousin Kate'?`, `Christina Rossetti`, [`Claude McKay`, `Gillian Clarke`, `Imtiaz Dharker`], `She was a Victorian poet.`, P],
    [C, `Who wrote 'Drummer Hodge'?`, `Thomas Hardy`, [`Wilfred Owen`, `William Blake`, `Simon Armitage`], `He wrote it during the Boer War.`, P],
    [C, `Who wrote 'Disabled'?`, `Wilfred Owen`, [`Thomas Hardy`, `Simon Armitage`, `Seamus Heaney`], `He was a soldier-poet killed in 1918.`, P],
    [C, `Who wrote 'I Shall Return'?`, `Claude McKay`, [`Zulfikar Ghose`, `Gillian Clarke`, `Thomas Hardy`], `He was a Jamaican-born poet.`, P],
    [C, `Who wrote 'Decomposition'?`, `Zulfikar Ghose`, [`Claude McKay`, `Imtiaz Dharker`, `Simon Armitage`], `The poem is about poverty and the poet's reaction to it.`, P],
    [C, `Who wrote 'Catrin'?`, `Gillian Clarke`, [`Imtiaz Dharker`, `Christina Rossetti`, `Seamus Heaney`], `It is about the poet's daughter.`, P],
    [C, `Who wrote 'Blackberry Picking'?`, `Seamus Heaney`, [`Simon Armitage`, `Gillian Clarke`, `Thomas Hardy`], `He was from Northern Ireland.`, P],
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
