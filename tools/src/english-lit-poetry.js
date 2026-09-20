// [topic, question, correct answer, [3 wrong answers], one-line explanation, unit hint]
const P = 'Poetry';
const C = `Anthology poems - content and meaning`;

module.exports = {
  subject: 'English Literature',
  qs: [
    // ================= fill-in-the-blank quotes =================
    // Ozymandias (Shelley)
    [C, `'Ozymandias' - complete the quote: "Look on my Works, ye Mighty, and ___!"`, `despair`, [`tremble`, `weep`, `rejoice`], `The boast on the pedestal is ironic because only ruins remain.`, P],
    [C, `'Ozymandias' - complete the quote: "Two vast and ___ legs of stone."`, `trunkless`, [`broken`, `fallen`, `towering`], `The statue is fragmented and ruined.`, P],
    [C, `'Ozymandias' - complete the quote: "Nothing beside remains. Round the ___ of that colossal Wreck."`, `decay`, [`ruins`, `base`, `edge`], `Time destroys even the greatest power.`, P],
    // London (Blake)
    [C, `'London' - complete the quote: "The mind-forg'd ___ I hear."`, `manacles`, [`chains`, `fetters`, `shackles`], `Blake suggests people are trapped by their own attitudes.`, P],
    [C, `'London' - complete the quote: "I wander thro' each ___ street."`, `charter'd`, [`crowded`, `dirty`, `narrow`], `Even the streets and the Thames are owned and controlled.`, P],
    [C, `'London' - complete the quote: "And mark in every face I meet / Marks of weakness, marks of ___."`, `woe`, [`sorrow`, `fear`, `pain`], `The repetition of 'marks' emphasises universal suffering.`, P],
    // The Prelude (Wordsworth)
    [C, `'The Prelude' - complete the quote: "A little boat tied to a ___-tree."`, `willow`, [`birch`, `oak`, `alder`], `The boy steals the boat and later feels guilt and fear.`, P],
    [C, `'The Prelude' - complete the quote: "It was an act of stealth / And troubled ___."`, `pleasure`, [`sorrow`, `excitement`, `fear`], `The oxymoron 'troubled pleasure' shows mixed feelings.`, P],
    // She Walks in Beauty (Byron)
    [C, `'She Walks in Beauty' - complete the quote: "She walks in beauty, like the ___."`, `night`, [`dawn`, `sea`, `morning`], `The opening simile links her beauty to the night sky.`, P],
    [C, `'She Walks in Beauty' - complete the quote: "One shade the more, one ray the ___."`, `less`, [`more`, `fewer`, `best`], `Her beauty is a perfect balance of light and dark.`, P],
    [C, `'She Walks in Beauty' - complete the quote: "A mind at peace with all below, / A heart whose love is ___!"`, `innocent`, [`eternal`, `gentle`, `pure`], `Her outer beauty reflects her goodness.`, P],
    // To Autumn (Keats)
    [C, `'To Autumn' - complete the quote: "Season of mists and mellow ___."`, `fruitfulness`, [`harvest`, `abundance`, `sweetness`], `The poem opens by addressing autumn directly.`, P],
    [C, `'To Autumn' - complete the quote: "Close bosom-friend of the maturing ___."`, `sun`, [`earth`, `moon`, `year`], `Autumn is personified as a friend of the sun.`, P],
    [C, `'To Autumn' - complete the quote: "And gathering swallows twitter in the ___."`, `skies`, [`trees`, `fields`, `air`], `The last line suggests the coming of winter.`, P],
    // Sonnet 43 (Barrett Browning)
    [C, `'Sonnet 43' - complete the quote: "How do I love thee? Let me count the ___."`, `ways`, [`days`, `years`, `times`], `The poem then lists the ways she loves.`, P],
    [C, `'Sonnet 43' - complete the quote: "...I shall but love thee better after ___."`, `death`, [`life`, `time`, `marriage`], `Her love is eternal.`, P],
    // As Imperceptibly as Grief (Dickinson)
    [C, `'As Imperceptibly as Grief' - complete the quote: "As imperceptibly as Grief / The Summer ___ away."`, `lapsed`, [`faded`, `slipped`, `drifted`], `Summer slips away as slowly as grief.`, P],
    [C, `'As Imperceptibly as Grief' - complete the quote: "Our Summer made her light escape / Into the ___."`, `Beautiful`, [`Distance`, `Unknown`, `Silence`], `The ending is calm and accepting.`, P],
    // A Wife in London (Hardy)
    [C, `'A Wife in London' - complete the quote: "She sits in the tawny ___."`, `vapour`, [`fog`, `mist`, `smoke`], `The London fog reflects her dread and grief.`, P],
    // The Soldier (Brooke)
    [C, `'The Soldier' - complete the quote: "That is for ever ___."`, `England`, [`mine`, `home`, `free`], `The speaker imagines his body enriching foreign soil.`, P],
    [C, `'The Soldier' - complete the quote: "A body of England's, breathing English ___."`, `air`, [`soil`, `light`, `wind`], `The repetition of England shows his patriotism.`, P],
    // Dulce et Decorum Est (Owen)
    [C, `'Dulce et Decorum Est' - complete the quote: "Bent double, like old beggars under ___."`, `sacks`, [`packs`, `weights`, `chains`], `The simile makes young soldiers seem old and worn out.`, P],
    [C, `'Dulce et Decorum Est' - complete the quote: "Gas! GAS! Quick, boys! - An ecstasy of ___."`, `fumbling`, [`running`, `panic`, `screaming`], `The frantic pace mirrors the panic.`, P],
    [C, `'Dulce et Decorum Est' - complete the quote: "As under a green sea, I saw him ___."`, `drowning`, [`sinking`, `falling`, `dying`], `The gas is compared to drowning.`, P],
    [C, `'Dulce et Decorum Est' - complete the quote: "The old ___: Dulce et decorum est pro patria mori."`, `Lie`, [`Truth`, `Story`, `Song`], `Owen calls patriotic propaganda a lie.`, P],
    // Death of a Naturalist (Heaney)
    [C, `'Death of a Naturalist' - complete the quote: "All year the flax-dam ___ in the heart of the townland."`, `festered`, [`rotted`, `stank`, `bubbled`], `The verb introduces decay.`, P],
    [C, `'Death of a Naturalist' - complete the quote: "...the warm thick ___ of frogspawn."`, `slobber`, [`jelly`, `slime`, `froth`], `The sensory language is unpleasant.`, P],
    [C, `'Death of a Naturalist' - complete the quote: "I sickened, turned, and ___."`, `ran`, [`fled`, `hid`, `cried`], `The short monosyllabic list shows the boy's panic.`, P],
    // Hawk Roosting (Hughes)
    [C, `'Hawk Roosting' - complete the quote: "I sit in the top of the wood, my eyes ___."`, `closed`, [`open`, `wide`, `narrowed`], `The hawk is so powerful it does not need to watch.`, P],
    [C, `'Hawk Roosting' - complete the quote: "My manners are tearing off ___."`, `heads`, [`wings`, `limbs`, `skin`], `The hawk is proud and violent.`, P],
    [C, `'Hawk Roosting' - complete the quote: "The sun is behind me. Nothing has ___ since I began."`, `changed`, [`moved`, `ended`, `died`], `The hawk believes the world is unchanging and belongs to him.`, P],
    // Valentine (Duffy)
    [C, `'Valentine' - complete the quote: "Not a red rose or a satin ___."`, `heart`, [`ribbon`, `card`, `bow`], `Duffy rejects clichés of romance.`, P],
    [C, `'Valentine' - complete the quote: "I give you an ___."`, `onion`, [`apple`, `egg`, `orange`], `The onion is the central extended metaphor.`, P],
    [C, `'Valentine' - complete the quote: "It will blind you with ___ like a lover."`, `tears`, [`light`, `love`, `pain`], `The onion makes you cry, just as love can.`, P],
    // Afternoons (Larkin)
    [C, `'Afternoons' - complete the quote: "The leaves fall in ones and ___."`, `twos`, [`threes`, `tens`, `fours`], `The falling leaves suggest the passing of time.`, P],
    [C, `'Afternoons' - complete the quote: "Their beauty has ___."`, `thickened`, [`faded`, `withered`, `deepened`], `The young mothers are ageing.`, P],
    // Living Space (Dharker)
    [C, `'Living Space' - complete the quote: "There are just not enough straight ___."`, `lines`, [`walls`, `roads`, `angles`], `The precarious building reflects fragile lives.`, P],

    // ================= content and poets =================
    [C, `Who wrote 'Ozymandias'?`, `Percy Bysshe Shelley`, [`John Keats`, `Lord Byron`, `William Blake`], `It was written in 1817.`, P],
    [C, `Who wrote 'Death of a Naturalist'?`, `Seamus Heaney`, [`Ted Hughes`, `Philip Larkin`, `Simon Armitage`], `He was from Northern Ireland.`, P],
    [C, `Who wrote 'Hawk Roosting'?`, `Ted Hughes`, [`Seamus Heaney`, `Philip Larkin`, `Owen Sheers`], `The hawk speaks in the first person.`, P],
    [C, `Who wrote 'Valentine'?`, `Carol Ann Duffy`, [`Rita Dove`, `Imtiaz Dharker`, `Emily Dickinson`], `It uses an onion as a metaphor for love.`, P],
    [C, `Who wrote 'Afternoons'?`, `Philip Larkin`, [`Ted Hughes`, `Thomas Hardy`, `Simon Armitage`], `It is about young mothers and lost youth.`, P],
    [C, `Who wrote 'Mametz Wood'?`, `Owen Sheers`, [`Wilfred Owen`, `Simon Armitage`, `Rupert Brooke`], `It is about soldiers' remains found on a First World War battlefield.`, P],
    [C, `Who wrote 'The Soldier'?`, `Rupert Brooke`, [`Wilfred Owen`, `Thomas Hardy`, `Owen Sheers`], `It is a patriotic sonnet.`, P],
    [C, `Who wrote 'Dulce et Decorum Est'?`, `Wilfred Owen`, [`Rupert Brooke`, `Siegfried Sassoon`, `Owen Sheers`], `It attacks the glorification of war.`, P],
    [C, `What is 'Mametz Wood' about?`, `The discovery of soldiers' remains from the First World War battle`, [`A modern wildfire`, `A love affair`, `A hunting trip`], `It reflects on the lasting impact of war.`, P],
    [C, `What is 'The Manhunt' about?`, `A woman helping her husband recover from injuries and trauma from war`, [`A police search for an escaped prisoner`, `A hunter tracking a stag`, `Two lovers who part`], `The 'manhunt' is a search for the man he was before.`, P],
    [C, `Which poem is written from the point of view of a bird of prey?`, `Hawk Roosting`, [`To Autumn`, `Afternoons`, `The Soldier`], `The hawk claims to be in control of all Creation.`, P],
    [C, `In 'Valentine', what does the speaker give instead of a rose?`, `An onion`, [`A satin heart`, `A ring`, `A card`], `The onion is a more honest gift.`, P],

    // ================= language, form and structure =================
    [`Language, form and structure`, `What is enjambment?`, `When a sentence runs over a line break without punctuation`, [`When lines all rhyme`, `A break in the middle of a line`, `A repeated line at the end`], `It can create flow or suggest breathlessness.`, P],
    [`Language, form and structure`, `'Sonnet 43' is written as a...`, `Sonnet (14 lines)`, [`Ballad`, `Free verse poem`, `Villanelle`], `It follows a Petrarchan pattern.`, P],
    [`Language, form and structure`, `What is the central extended metaphor of 'Valentine'?`, `An onion`, [`A rose`, `A rainstorm`, `A fire`], `The metaphor is developed across the whole poem.`, P],
    [`Language, form and structure`, `Which technique is used in 'the mind-forg'd manacles'?`, `Metaphor`, [`Simile`, `Onomatopoeia`, `Alliteration only`], `It suggests people trap themselves mentally.`, P],
    [`Language, form and structure`, `In 'To Autumn', how is autumn presented?`, `Personified as a friend of the sun and a harvester`, [`As a warning`, `As a dead season`, `As a storm`], `The poem has three stanzas following the season's progress.`, P],
    [`Language, form and structure`, `What is the irony in 'Ozymandias'?`, `A boastful inscription stands beside a ruined statue`, [`The statue is perfect`, `The king is still alive`, `The desert is green`], `Time has destroyed the king's power.`, P],
    [`Language, form and structure`, `In 'Hawk Roosting', how does Hughes present the hawk?`, `As arrogant and violent, speaking in the first person`, [`As gentle and shy`, `As a symbol of peace`, `As a victim`], `The tone is dominating.`, P],
    [`Language, form and structure`, `The title 'Dulce et Decorum Est' means...`, `'It is sweet and fitting to die for your country'`, [`'War is hell'`, `'Long live the king'`, `'Peace in our time'`], `Owen calls this 'the old Lie'.`, P],

    // ================= themes and connections =================
    [`Themes and connections`, `Which two poems both explore war?`, `Dulce et Decorum Est and The Soldier`, [`London and To Autumn`, `Valentine and Hawk Roosting`, `Ozymandias and Afternoons`], `They present very different views of war.`, P],
    [`Themes and connections`, `Which two poems both explore nature?`, `To Autumn and Death of a Naturalist`, [`Valentine and Sonnet 43`, `London and Ozymandias`, `The Soldier and Afternoons`], `Keats celebrates nature. Heaney shows nature as threatening.`, P],
    [`Themes and connections`, `Which two poems both explore love?`, `Sonnet 43 and Valentine`, [`London and Hawk Roosting`, `Ozymandias and The Soldier`, `To Autumn and Afternoons`], `Their attitudes to love differ.`, P],
    [`Themes and connections`, `Which two poems both explore power?`, `Ozymandias and Hawk Roosting`, [`To Autumn and Afternoons`, `Sonnet 43 and Valentine`, `The Soldier and A Wife in London`], `One power is destroyed by time, the other is arrogant.`, P],
    [`Themes and connections`, `Which poem explores poverty and suffering in a city?`, `London`, [`To Autumn`, `Afternoons`, `The Soldier`], `Blake criticises the powerful for causing suffering.`, P],

    // ================= comparison skills =================
    [`Comparison skills`, `Which word shows a contrast between two poems?`, `Whereas`, [`Similarly`, `Likewise`, `Also`], `Other contrast words are 'however' and 'in contrast'.`, P],
    [`Comparison skills`, `What makes a good comparison?`, `Linking ideas and methods across both poems using connectives`, [`Retelling each poem separately`, `Listing the poets' names`, `Writing only about one poem`], `Compare both ideas (AO1) and methods (AO2).`, P],

    // ================= context =================
    [`Context`, `Wilfred Owen was killed in...`, `1918`, [`1914`, `1916`, `1945`], `He died a week before the Armistice.`, P],
    [`Context`, `Rupert Brooke died in...`, `1915`, [`1918`, `1916`, `1939`], `He died of blood poisoning on his way to Gallipoli.`, P],
    [`Context`, `Seamus Heaney was from...`, `Northern Ireland`, [`England`, `Scotland`, `Wales`], `Many of his poems are set in rural Ireland.`, P],
    [`Context`, `Which official post did Ted Hughes hold from 1984?`, `Poet Laureate`, [`Professor of English`, `Prime Minister's adviser`, `Nobel Laureate`], `He wrote many poems about animals.`, P],
    [`Context`, `Which pharaoh inspired 'Ozymandias'?`, `Ramesses II`, [`Tutankhamun`, `Khufu`, `Cleopatra`], `Ozymandias is the Greek name for him.`, P],
    [`Context`, `Which battle is 'Mametz Wood' linked to?`, `The Battle of the Somme, 1916`, [`The Battle of Hastings`, `The Battle of Waterloo`, `The Falklands War`], `Many Welsh soldiers were killed there.`, P],
    [`Context`, `In which period was Blake's 'London' written?`, `The Romantic era, late 18th century`, [`The Victorian era`, `The Modern era`, `The Elizabethan era`], `It appeared in Songs of Experience (1794).`, P],
  ],
};
