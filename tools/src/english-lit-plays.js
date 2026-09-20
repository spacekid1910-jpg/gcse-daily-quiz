// [topic, question, correct answer, [3 wrong answers], one-line explanation, unit hint]
// The 6th element picks the text: 'Macbeth' or 'Inspector'.
const M = 'Macbeth';
const I = 'Inspector';

module.exports = {
  subject: 'English Literature',
  qs: [
    // ================= MACBETH: key quotations (fill in the blank) =================
    [`Key quotations`, `Complete the quote: "Fair is foul, and foul is ___."`, `fair`, [`false`, `good`, `true`], `The witches, Act 1 Scene 1. It sets up the theme of appearance and reality.`, M],
    [`Key quotations`, `Complete the quote: "Is this a dagger which I see before me, the ___ toward my hand?"`, `handle`, [`blade`, `point`, `hilt`], `Macbeth's dagger soliloquy, Act 2 Scene 1, shows his guilt and confusion.`, M],
    [`Key quotations`, `Complete the quote: "Out, damned ___! Out, I say!"`, `spot`, [`blood`, `stain`, `mark`], `Lady Macbeth sleepwalking, Act 5 Scene 1.`, M],
    [`Key quotations`, `Complete the quote: "Life's but a walking ___, a poor player."`, `shadow`, [`dream`, `ghost`, `story`], `Macbeth reacts to news of his wife's death, Act 5 Scene 5.`, M],
    [`Key quotations`, `Complete the quote: "Look like th' innocent flower, but be the ___ under't."`, `serpent`, [`thorn`, `weed`, `wolf`], `Lady Macbeth advises Macbeth to hide his intentions from Duncan.`, M],
    [`Key quotations`, `Complete the quote: "I have no spur to prick the sides of my intent, but only vaulting ___."`, `ambition`, [`courage`, `anger`, `pride`], `Macbeth admits that only ambition drives him to kill Duncan.`, M],
    [`Key quotations`, `Complete the quote: "All the perfumes of Arabia will not sweeten this little ___."`, `hand`, [`heart`, `soul`, `spot`], `Lady Macbeth cannot wash away her guilt.`, M],
    [`Key quotations`, `Complete the quote: "Stars, hide your ___!"`, `fires`, [`lights`, `eyes`, `faces`], `Macbeth asks the darkness to hide his desires, Act 1 Scene 4.`, M],
    [`Key quotations`, `Complete the quote: "Unsex me here, and fill me from the crown to the toe top-full of direst ___."`, `cruelty`, [`hatred`, `malice`, `evil`], `Lady Macbeth rejects her femininity to gain the strength to kill.`, M],
    [`Key quotations`, `Complete the quote: "But screw your courage to the ___-place, and we'll not fail."`, `sticking`, [`breaking`, `fighting`, `starting`], `Lady Macbeth persuades Macbeth to go through with the murder.`, M],
    [`Key quotations`, `Complete the quote: "What's done cannot be ___."`, `undone`, [`forgotten`, `forgiven`, `repeated`], `Lady Macbeth sleepwalking, Act 5 Scene 1.`, M],
    [`Key quotations`, `Complete the quote: "I am in blood stepped in so far that, should I wade no more, returning were as ___ as go o'er."`, `tedious`, [`easy`, `hard`, `hasty`], `Macbeth feels it is too late to turn back.`, M],
    [`Key quotations`, `Complete the quote: "Tomorrow, and tomorrow, and ___ creeps in this petty pace."`, `tomorrow`, [`yesterday`, `today`, `forever`], `Macbeth's despair, Act 5 Scene 5.`, M],
    [`Key quotations`, `Complete the quote: "O, full of scorpions is my ___, dear wife!"`, `mind`, [`heart`, `bed`, `soul`], `Macbeth reveals his torment and paranoia, Act 3 Scene 2.`, M],
    [`Key quotations`, `Complete the quote: "So foul and fair a ___ I have not seen."`, `day`, [`night`, `storm`, `deed`], `Macbeth's first words echo the witches' 'fair is foul'.`, M],
    [`Key quotations`, `Complete the quote: "Double, double toil and ___."`, `trouble`, [`turmoil`, `strife`, `torment`], `The witches chant around the cauldron, Act 4 Scene 1.`, M],
    [`Key quotations`, `Complete the quote: "By the pricking of my thumbs, something wicked this way ___."`, `comes`, [`goes`, `walks`, `creeps`], `The second witch senses Macbeth arriving.`, M],
    [`Key quotations`, `Complete the quote: "Nought's had, all's spent, where our desire is got without ___."`, `content`, [`regret`, `reason`, `delay`], `Lady Macbeth notes that getting what you want does not bring happiness.`, M],
    [`Key quotations`, `Complete the quote: "Come, thick night, and pall thee in the dunnest smoke of ___."`, `hell`, [`night`, `fire`, `death`], `Lady Macbeth calls on darkness to hide the murder.`, M],
    [`Key quotations`, `Complete the quote: "Yet do I fear thy nature; it is too full o' the milk of human ___."`, `kindness`, [`sorrow`, `warmth`, `blood`], `Lady Macbeth worries that Macbeth is too gentle to seize the crown.`, M],
    [`Key quotations`, `Complete the quote: "There's daggers in men's ___."`, `smiles`, [`hands`, `eyes`, `hearts`], `Donalbain says this after Duncan's murder.`, M],
    [`Key quotations`, `Complete the quote: "The raven himself is ___ that croaks the fatal entrance of Duncan."`, `hoarse`, [`silent`, `black`, `weary`], `Lady Macbeth uses nature imagery to foreshadow the murder.`, M],
    [`Key quotations`, `Complete the quote: "Sleep no more! Macbeth does murder ___."`, `sleep`, [`peace`, `trust`, `sense`], `Macbeth hears a voice after killing Duncan.`, M],
    [`Key quotations`, `Complete the quote: "Will all great Neptune's ocean wash this blood clean from my ___?"`, `hand`, [`heart`, `soul`, `face`], `Macbeth realises the murder will stain him forever.`, M],
    [`Key quotations`, `Complete the quote: "Had he not resembled my father as he slept, I had ___ 't."`, `done`, [`killed`, `struck`, `stabbed`], `Lady Macbeth could not kill Duncan herself.`, M],
    [`Key quotations`, `Complete the quote: "When shall we three meet again? In thunder, lightning, or in ___?"`, `rain`, [`snow`, `fire`, `storm`], `The opening of the play sets an atmosphere of chaos.`, M],
    [`Key quotations`, `Complete the quote: "He was a gentleman on whom I built an absolute ___."`, `trust`, [`faith`, `hope`, `love`], `Duncan on the traitorous Thane of Cawdor. He then trusts Macbeth.`, M],
    [`Key quotations`, `Complete the quote (witches to Banquo): "Lesser than Macbeth, and ___."`, `greater`, [`equal`, `worse`, `stronger`], `The witches speak in riddles and paradoxes.`, M],
    [`Key quotations`, `Who says: "Out, damned spot! Out, I say!"?`, `Lady Macbeth`, [`Macbeth`, `Banquo`, `Macduff`], `She is sleepwalking and imagining blood on her hands.`, M],
    [`Key quotations`, `Who says: "There's daggers in men's smiles"?`, `Donalbain`, [`Macduff`, `Malcolm`, `Banquo`], `He suspects danger and flees to Ireland.`, M],

    // ================= MACBETH: plot and structure =================
    [`Plot and structure`, `What title is Macbeth already holding when the play begins?`, `Thane of Glamis`, [`Thane of Cawdor`, `Thane of Fife`, `King of Scotland`], `He is then made Thane of Cawdor and becomes king.`, M],
    [`Plot and structure`, `Why does Duncan give the title Thane of Cawdor to Macbeth?`, `The old Thane of Cawdor was executed for treason`, [`He was killed in battle`, `He retired`, `He was a witch`], `This fulfils part of the witches' prophecy.`, M],
    [`Plot and structure`, `Where does Macbeth murder Duncan?`, `In Macbeth's castle at Inverness`, [`On the battlefield`, `At Dunsinane`, `In the woods near Forres`], `Duncan is a guest there.`, M],
    [`Plot and structure`, `Why does Macbeth have Banquo murdered?`, `The witches said Banquo's descendants would be kings`, [`Banquo saw him kill Duncan`, `Banquo wanted to marry Lady Macbeth`, `Banquo joined Malcolm's army`], `Fleance escapes.`, M],
    [`Plot and structure`, `Whose ghost appears to Macbeth at the banquet?`, `Banquo's`, [`Duncan's`, `Lady Macduff's`, `Old Siward's`], `Only Macbeth can see it.`, M],
    [`Plot and structure`, `Whom does Macbeth order to be killed after Macduff flees to England?`, `Macduff's wife and children`, [`Malcolm and Donalbain`, `Fleance`, `The doctor`], `It shows Macbeth's tyranny.`, M],
    [`Plot and structure`, `What is Lady Macbeth doing in her sleepwalking scene?`, `Trying to wash imaginary blood from her hands`, [`Praying at an altar`, `Writing a letter`, `Plotting another murder`], `The scene shows her guilt.`, M],
    [`Plot and structure`, `How does Macbeth die?`, `He is killed by Macduff`, [`He is executed by Malcolm`, `He is poisoned by Lady Macbeth`, `He dies of guilt`], `Macduff was not 'of woman born'. He was cut from his mother's womb.`, M],
    [`Plot and structure`, `What do Malcolm's soldiers carry to disguise their numbers?`, `Branches from Birnam Wood`, [`Shields from Dunsinane`, `White flags`, `Torches`], `This fulfils the prophecy of 'Birnam Wood to Dunsinane'.`, M],
    [`Plot and structure`, `Who becomes king at the end of the play?`, `Malcolm`, [`Macduff`, `Fleance`, `Donalbain`], `Order is restored with a legitimate king.`, M],
    [`Plot and structure`, `In which act is Duncan murdered?`, `Act 2`, [`Act 1`, `Act 3`, `Act 5`], `The murder happens offstage.`, M],

    // ================= MACBETH: characters =================
    [`Characters`, `How is Macbeth described at the start of the play?`, `A brave and loyal soldier`, [`A cowardly deserter`, `A cruel tyrant`, `A weak king`], `The Captain calls him 'brave Macbeth'.`, M],
    [`Characters`, `What does Lady Macbeth mean when she asks the spirits to 'unsex' her?`, `She wants to lose feminine gentleness so she can commit murder`, [`She wants to become a man`, `She wants to become a witch`, `She wants to leave Scotland`], `It links masculinity with violence.`, M],
    [`Characters`, `How does Banquo differ from Macbeth?`, `He resists the temptation of the witches' prophecies`, [`He becomes king`, `He kills Duncan`, `He believes everything the witches say`], `He stays loyal to Duncan.`, M],
    [`Characters`, `How is King Duncan presented?`, `As a kind, trusting and virtuous king`, [`As a cruel tyrant`, `As a weak fool`, `As a violent warrior`], `He misjudges the Thane of Cawdor and Macbeth.`, M],

    // ================= MACBETH: themes =================
    [`Themes`, `Which theme is shown by the phrase 'vaulting ambition'?`, `Ambition`, [`Friendship`, `Loyalty`, `Justice`], `Macbeth's fatal flaw is his ambition.`, M],
    [`Themes`, `What does the repeated imagery of blood show in Macbeth?`, `Guilt`, [`Happiness`, `Friendship`, `Justice`], `Blood cannot be washed away.`, M],
    [`Themes`, `Which theme is shown by 'Fair is foul, and foul is fair'?`, `Appearance versus reality`, [`Friendship`, `Kingship`, `Justice`], `Nothing is as it seems.`, M],
    [`Themes`, `How is kingship explored through Duncan and Macbeth?`, `Duncan is a virtuous king. Macbeth becomes a tyrant`, [`Both are cruel`, `Both are weak`, `Macbeth is a better king`], `Malcolm restores order at the end.`, M],

    // ================= MACBETH: language, form and structure =================
    [`Language, form and structure`, `What is a soliloquy?`, `A speech in which a character speaks their thoughts aloud while alone on stage`, [`A conversation between two characters`, `A speech by a narrator`, `A comic scene`], `Soliloquies reveal a character's private thoughts.`, M],
    [`Language, form and structure`, `What verse form do most noble characters in Macbeth speak in?`, `Blank verse (unrhymed iambic pentameter)`, [`Rhyming couplets`, `Free verse`, `Prose only`], `The witches use rhyming couplets and short lines.`, M],
    [`Language, form and structure`, `Why do the witches speak in rhyming couplets?`, `It makes them sound like chants and marks them as supernatural`, [`They are poets`, `It is more realistic`, `Shakespeare ran out of ideas`], `It sets them apart from the other characters.`, M],
    [`Language, form and structure`, `Duncan praises the pleasant look of Macbeth's castle before being murdered there. This is...`, `Dramatic irony`, [`A soliloquy`, `An aside`, `A simile`], `The audience knows what is planned.`, M],
    [`Language, form and structure`, `Macbeth's 'fatal flaw' that leads to his downfall is...`, `Ambition`, [`Cowardice`, `Kindness`, `Honesty`], `This makes him a tragic hero.`, M],

    // ================= MACBETH: context =================
    [`Context`, `Macbeth was written around 1606 during the reign of...`, `James I`, [`Elizabeth I`, `Henry VIII`, `Charles I`], `It is set in Scotland, James's home country.`, M],
    [`Context`, `What was the Gunpowder Plot of 1605?`, `A plan to blow up Parliament and kill King James I`, [`A war with Spain`, `A plague`, `A witch trial`], `It made regicide a live fear.`, M],
    [`Context`, `What did the 'Divine Right of Kings' mean?`, `Kings were chosen by God, so killing one was a sin`, [`Kings were chosen by the people`, `Kings had no power`, `Only the Church could crown a king`], `It explains why killing Duncan is so serious.`, M],
    [`Context`, `Which book on witchcraft did James I write?`, `Daemonologie`, [`Leviathan`, `The Faerie Queene`, `Malleus Maleficarum`], `Belief in witches was widespread.`, M],
    [`Context`, `The Great Chain of Being was...`, `A belief in a divine order from God down to plants and objects`, [`A type of Elizabethan jewellery`, `A law about kings`, `A witches' spell`], `Killing a king disrupts the natural order.`, M],
    [`Context`, `Which historical figure did James I claim descent from, according to legend?`, `Banquo`, [`Duncan`, `Macbeth`, `Macduff`], `This is why Banquo is presented favourably.`, M],

    // ================= AN INSPECTOR CALLS: key quotations =================
    [`Plot and structure`, `Complete the quote: "We don't live alone. We are members of one ___."`, `body`, [`family`, `community`, `nation`], `The Inspector's final speech. It sums up Priestley's message.`, I],
    [`Plot and structure`, `Complete the quote: "...they will be taught it in fire and blood and ___."`, `anguish`, [`tears`, `pain`, `war`], `The Inspector warns of the consequences of ignoring social responsibility.`, I],
    [`Plot and structure`, `Complete the quote (Sheila): "But these girls aren't cheap ___ - they're people."`, `labour`, [`help`, `servants`, `workers`], `Sheila shows she has begun to change.`, I],
    [`Plot and structure`, `Complete the quote (Birling): "...unsinkable, absolutely ___."`, `unsinkable`, [`safe`, `strong`, `perfect`], `Dramatic irony: the audience knows the Titanic sank.`, I],
    [`Plot and structure`, `Complete the quote (Birling): "...as if we were all mixed up together like bees in a ___."`, `hive`, [`nest`, `farm`, `field`], `He mocks the idea of community.`, I],
    [`Plot and structure`, `Complete the quote (Birling): "Community and all that ___."`, `nonsense`, [`rubbish`, `talk`, `business`], `He rejects social responsibility.`, I],
    [`Plot and structure`, `Complete the quote (Inspector): "Public men, Mr Birling, have responsibilities as well as ___."`, `privileges`, [`rights`, `profits`, `duties`], `He challenges Birling's view of his own role.`, I],
    [`Plot and structure`, `Complete the quote (Mrs Birling): "I accept no ___ at all."`, `blame`, [`help`, `guilt`, `shame`], `She refuses to accept responsibility.`, I],
    [`Plot and structure`, `Complete the quote (Inspector): "One Eva Smith has gone - but there are millions and millions of Eva Smiths and John ___ still left with us."`, `Smiths`, [`Browns`, `Joneses`, `Does`], `Eva represents all working-class people.`, I],
    [`Plot and structure`, `Complete the quote (Inspector): "Each of you helped to ___ her."`, `kill`, [`hurt`, `destroy`, `ruin`], `He makes them face their shared responsibility.`, I],
    [`Plot and structure`, `Complete the quote (Eric): "You're not the kind of ___ a chap could go to when he's in trouble."`, `father`, [`brother`, `friend`, `man`], `Eric criticises his father.`, I],

    // ================= AN INSPECTOR CALLS: plot and structure =================
    [`Plot and structure`, `Where and when is An Inspector Calls set?`, `The Birlings' dining room in Brumley in 1912`, [`London in 1945`, `Manchester in 1920`, `A courtroom in Brumley in 1912`], `It was written in 1945.`, I],
    [`Plot and structure`, `What is the Inspector's name?`, `Goole`, [`Gould`, `Croft`, `Birling`], `His name sounds like 'ghoul'.`, I],
    [`Plot and structure`, `In which order does the Inspector question people about Eva Smith?`, `Mr Birling, Sheila, Gerald, Mrs Birling, Eric`, [`Sheila, Mr Birling, Eric, Mrs Birling, Gerald`, `Gerald, Sheila, Eric, Mr Birling, Mrs Birling`, `Mr Birling, Mrs Birling, Sheila, Gerald, Eric`], `Each interrogation links to the next.`, I],
    [`Plot and structure`, `Why did Mr Birling dismiss Eva Smith in 1910?`, `She led a strike for higher wages`, [`She stole money`, `She was often late`, `She insulted his wife`], `He would not pay the workers more.`, I],
    [`Plot and structure`, `Why did Sheila get Eva sacked from Milwards?`, `She was jealous and angry because Eva seemed to laugh at her`, [`Eva stole a dress`, `Eva was rude to Gerald`, `Eva refused to work`], `Sheila abused her position as a customer.`, I],
    [`Plot and structure`, `What was Gerald Croft's relationship with Eva (Daisy Renton)?`, `He kept her as his mistress for the summer of 1911`, [`He employed her at his factory`, `He was her landlord`, `He was her cousin`], `He ended it and left her.`, I],
    [`Plot and structure`, `What did Mrs Birling do to Eva?`, `She refused her help as chair of a charity while Eva was pregnant`, [`She sacked her`, `She had her arrested`, `She gave her money`], `She judged Eva by her class.`, I],
    [`Plot and structure`, `What did Eric do?`, `Got Eva pregnant and stole money from his father's business`, [`Sacked her`, `Lied to the police`, `Refused to help her`], `He is the father of Eva's unborn child.`, I],
    [`Plot and structure`, `How did Eva Smith die?`, `By drinking disinfectant`, [`In a car accident`, `By drowning`, `From an illness`], `The Inspector describes her painful death.`, I],
    [`Plot and structure`, `How does the play end?`, `A phone call says a girl has just died and a police inspector is on his way`, [`The Inspector arrests Birling`, `Gerald and Sheila marry`, `Eric confesses to the police`], `The ending is cyclical.`, I],

    // ================= AN INSPECTOR CALLS: characters =================
    [`Characters`, `How is Mr Birling presented?`, `As a pompous, self-important capitalist`, [`As a kind socialist`, `As shy and timid`, `As a wise leader`], `He puts profit before people.`, I],
    [`Characters`, `How does Sheila change during the play?`, `From a spoilt, naive girl to someone who accepts responsibility`, [`From responsible to selfish`, `She does not change`, `From poor to wealthy`], `She and Eric represent the younger generation.`, I],
    [`Characters`, `What does the Inspector represent?`, `Priestley's socialist message and the conscience of the family`, [`The law`, `The upper class`, `Capitalism`], `He teaches the Birlings a lesson.`, I],
    [`Characters`, `Which character is introduced as 'half shy, half assertive'?`, `Eric`, [`Gerald`, `Sheila`, `Mr Birling`], `A stage direction describes him this way.`, I],
    [`Characters`, `Which family is Gerald Croft from?`, `A wealthy, aristocratic business family`, [`A poor working-class family`, `A family of politicians`, `A family of doctors`], `The engagement joins the Birlings and Crofts.`, I],

    // ================= AN INSPECTOR CALLS: themes =================
    [`Themes`, `What is Priestley's main message in An Inspector Calls?`, `Everyone is responsible for each other`, [`Money brings happiness`, `The rich should stay separate`, `Only the law matters`], `He promotes social responsibility.`, I],
    [`Themes`, `Which generation is more willing to change in the play?`, `The younger generation (Sheila and Eric)`, [`The older generation`, `Both equally`, `Neither`], `Sheila and Eric feel guilt. Mr and Mrs Birling do not.`, I],

    // ================= AN INSPECTOR CALLS: language, form and structure =================
    [`Language, form and structure`, `How does the lighting change when the Inspector arrives?`, `From pink and intimate to brighter and harder`, [`From bright to dark`, `From blue to red`, `It does not change`], `The change signals scrutiny.`, I],
    [`Language, form and structure`, `Why is Birling's claim that the Titanic is unsinkable dramatic irony?`, `The audience knows it sank in 1912`, [`Birling built the ship`, `It never sailed`, `It was a different ship`], `It shows he is wrong about many things.`, I],
    [`Language, form and structure`, `What does the Inspector's name 'Goole' suggest?`, `A ghoul, suggesting something supernatural`, [`A police badge`, `A colour`, `A place in Brumley`], `It adds mystery.`, I],
    [`Language, form and structure`, `Why is An Inspector Calls described as a morality play?`, `It teaches a moral lesson`, [`It is about religion`, `It is a comedy`, `It has no plot`], `The Inspector is a moral guide.`, I],

    // ================= AN INSPECTOR CALLS: context =================
    [`Context`, `When was An Inspector Calls written and when is it set?`, `Written in 1945, set in 1912`, [`Written in 1912, set in 1945`, `Written in 1939, set in 1914`, `Both in 1945`], `Priestley looks back on a class-divided society.`, I],
    [`Context`, `What was Priestley's political view?`, `Socialist`, [`Conservative`, `Fascist`, `Monarchist`], `He wanted a fairer society after WWII.`, I],
    [`Context`, `Which two world wars had happened by 1945?`, `The First World War and the Second World War`, [`The Boer War and WWI`, `WWI and the Cold War`, `The Crimean War and WWII`], `Birling's 1912 predictions look foolish in hindsight.`, I],
  ],
};
