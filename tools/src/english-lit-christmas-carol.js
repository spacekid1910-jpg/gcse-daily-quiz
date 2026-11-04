// [topic, question, correct answer, [3 wrong answers], one-line explanation, unit hint]
// A Christmas Carol (Dickens, 1843) - Eduqas Component 2B. The text is out of copyright; quotes are from the original.
const H = `Christmas`;
const P = `Plot and structure`, C = `Characters`, T = `Themes`, L = `Language, form and structure`, X = `Context`;
module.exports = {
  subject: 'English Literature',
  qs: [
    // ---------- Plot and structure ----------
    [P, `How many staves (chapters) are there in A Christmas Carol?`, `Five`, [`Three`, `Four`, `Seven`], `A "stave" is a musical term, linking the book to a carol.`, H],
    [P, `What is the title of Stave One?`, `Marley's Ghost`, [`The First of the Three Spirits`, `The End of It`, `The Last of the Spirits`], `Marley warns Scrooge that three spirits will visit him.`, H],
    [P, `What is the title of Stave Two?`, `The First of the Three Spirits`, [`Marley's Ghost`, `The Second of the Three Spirits`, `The End of It`], `The Ghost of Christmas Past shows Scrooge scenes from his earlier life.`, H],
    [P, `What is the title of Stave Three?`, `The Second of the Three Spirits`, [`The First of the Three Spirits`, `The Last of the Spirits`, `Marley's Ghost`], `The Ghost of Christmas Present takes Scrooge to the Cratchits and to Fred's party.`, H],
    [P, `What is the title of Stave Four?`, `The Last of the Spirits`, [`The Second of the Three Spirits`, `The End of It`, `Marley's Ghost`], `The Ghost of Christmas Yet to Come shows Scrooge's own death.`, H],
    [P, `What is the title of Stave Five?`, `The End of It`, [`The Last of the Spirits`, `Marley's Ghost`, `A Merry Christmas`], `Scrooge wakes up changed and makes amends.`, H],
    [P, `Who visits Scrooge first on Christmas Eve?`, `The ghost of Jacob Marley`, [`The Ghost of Christmas Past`, `The Ghost of Christmas Present`, `Fred`], `Marley appears in his door knocker and then in his room.`, H],
    [P, `How many spirits does Marley say will visit Scrooge?`, `Three`, [`Two`, `Four`, `One`], `They will come on three successive nights.`, H],
    [P, `Which of these does the Ghost of Christmas Past show Scrooge?`, `His lonely schooldays and Fezziwig's Christmas party`, [`The Cratchits' Christmas dinner`, `His own grave`, `Ignorance and Want`], `It also shows his broken engagement to Belle.`, H],
    [P, `Why does Belle end her engagement to Scrooge?`, `He has come to love money more than her`, [`She falls in love with Fred`, `Her family disapproves of him`, `Scrooge goes abroad`], `She says another idol, gain, has replaced her.`, H],
    [P, `Which character shows Scrooge a happy, generous employer in his youth?`, `Mr Fezziwig`, [`Mr Cratchit`, `Mr Marley`, `Old Joe`], `Fezziwig throws a Christmas Eve ball for his workers.`, H],
    [P, `What does the Ghost of Christmas Present show Scrooge?`, `The Cratchits' Christmas, Fred's party and Ignorance and Want`, [`Scrooge's boyhood and schooldays`, `Scrooge's death and grave`, `Marley in chains`], `It shows how happiness is possible even in poverty.`, H],
    [P, `What are the two children hidden under the Ghost of Christmas Present's robe?`, `Ignorance and Want`, [`Hope and Charity`, `Poverty and Death`, `Peter and Belinda`], `The ghost warns Scrooge to beware them, especially Ignorance.`, H],
    [P, `Which of the three spirits does not speak?`, `The Ghost of Christmas Yet to Come`, [`The Ghost of Christmas Past`, `The Ghost of Christmas Present`, `Marley's ghost`], `It points silently and wears a black hooded robe.`, H],
    [P, `What does the Ghost of Christmas Yet to Come show Scrooge?`, `People stealing from a dead man, and his own neglected grave`, [`A joyful Christmas dinner`, `The streets of old London`, `Fezziwig's party`], `Scrooge realises the dead man is himself.`, H],
    [P, `What does Scrooge do on Christmas morning after waking up?`, `Sends a prize turkey to the Cratchits and gives to charity`, [`Goes back to work`, `Leaves London`, `Sells his business`], `He also visits Fred's dinner and raises Bob's salary.`, H],
    [P, `What happens to Tiny Tim at the end of the story?`, `He does not die; Scrooge becomes like a second father to him`, [`He dies of illness`, `He moves to Fred's house`, `He is sent to the workhouse`], `The Ghost of Christmas Yet to Come showed a possible future in which Tim dies.`, H],

    // ---------- Characters ----------
    [C, `How is Scrooge described in Stave One?`, `Tight-fisted, cold and solitary`, [`Warm and friendly`, `Cheerful and generous`, `Shy and nervous`], `He is a "covetous old sinner" who keeps Christmas out of his life.`, H],
    [C, `Who is Scrooge's nephew?`, `Fred`, [`Bob`, `Peter`, `Jacob`], `Fred repeatedly invites Scrooge to Christmas dinner.`, H],
    [C, `Who is Scrooge's clerk?`, `Bob Cratchit`, [`Fred Fezziwig`, `Jacob Marley`, `Old Joe`], `He earns fifteen shillings a week and has a large family.`, H],
    [C, `What is Tiny Tim's role in the story?`, `He represents the vulnerable poor and the hope of change`, [`He is Scrooge's rival`, `He is Marley's son`, `He works for Fezziwig`], `His illness makes Scrooge understand the cost of his selfishness.`, H],
    [C, `What does Jacob Marley represent?`, `The consequences of greed and a warning to Scrooge`, [`The poor of London`, `The joy of Christmas`, `Scrooge's good conscience`], `He is condemned to wander in chains he "forged in life".`, H],
    [C, `What is Fred's attitude to Christmas?`, `He loves it as a kind, forgiving, charitable time`, [`He thinks it is a waste of money`, `He ignores it completely`, `He thinks it is only for the rich`], `Fred contrasts with Scrooge, who says "Bah! Humbug!".`, H],
    [C, `Why is Belle important in the story?`, `She shows what Scrooge lost by choosing money over love`, [`She is Fred's wife`, `She is Marley's sister`, `She runs the workhouse`], `The Ghost of Christmas Past shows her ending their engagement.`, H],
    [C, `Who is Fan?`, `Scrooge's kind younger sister`, [`Bob Cratchit's wife`, `Fezziwig's daughter`, `Belle's friend`], `She comes to take him home from school; she is Fred's mother.`, H],
    [C, `Which character is shown as proud to be poor but happy?`, `Bob Cratchit`, [`Old Joe`, `Mr Fezziwig`, `Jacob Marley`], `The Cratchits celebrate Christmas despite their poverty.`, H],
    [C, `What do the charity collectors ask Scrooge for in Stave One?`, `Money to help the poor at Christmas`, [`A job for the Cratchits`, `A room in his house`, `Candles for the church`], `Scrooge asks if the prisons and workhouses are still open.`, H],
    [C, `What does Scrooge feel when he sees his own grave?`, `Terror and a desire to change`, [`Amusement`, `Anger at the spirit`, `Relief`], `He begs to be allowed to change his future.`, H],
    [C, `How does Scrooge's character change by the end?`, `He becomes generous, warm and joyful`, [`He becomes more bitter`, `He becomes more religious but still mean`, `He gives up his business and leaves`], `He says he will honour Christmas all year.`, H],
    [C, `Which character is shown as a harsh, self-satisfied businessman who is later punished after death?`, `Jacob Marley`, [`Fezziwig`, `Fred`, `Bob Cratchit`], `Marley's fate warns Scrooge what will happen to him.`, H],
    [C, `What does Mrs Cratchit say when Bob toasts "the Founder of the Feast"?`, `She will not drink to Scrooge, who she calls an "odious, stingy, hard, unfeeling man"`, [`She happily toasts him`, `She asks Bob to quit his job`, `She says nothing`], `Bob persuades her for the sake of Christmas Day.`, H],

    // ---------- Quotations (fill the gap) ----------
    [P, `Complete the quote (opening line): "Marley was ___: to begin with."`, `dead`, [`dying`, `gone`, `rich`], `Dickens begins with a plain fact so that the ghost story seems believable.`, H],
    [C, `Complete the quote (Scrooge): "Bah! ___!"`, `Humbug`, [`Nonsense`, `Christmas`, `Charity`], `He dismisses Christmas as a fraud.`, H],
    [C, `Complete the quote: "Hard and sharp as ___, from which no steel had ever struck out generous fire."`, `flint`, [`iron`, `stone`, `ice`], `Flint is hard and cold; no kindness could be sparked from him.`, H],
    [C, `Complete the quote: "...secret, and self-contained, and solitary as an ___."`, `oyster`, [`island`, `owl`, `orphan`], `The simile shows how closed off he is.`, H],
    [C, `Complete the quote: "a squeezing, wrenching, grasping, scraping, clutching, covetous, old ___!"`, `sinner`, [`miser`, `fool`, `man`], `The list of verbs builds up the image of Scrooge's greed.`, H],
    [T, `Complete the quote (Scrooge): "Are there no ___? ... And the Union workhouses?"`, `prisons`, [`schools`, `churches`, `hospitals`], `He refers to the harsh institutions for the poor.`, H],
    [T, `Complete the quote (Scrooge): "If they would rather die, they had better do it, and decrease the surplus ___."`, `population`, [`workforce`, `poverty`, `crowd`], `The Spirit later throws these words back at him.`, H],
    [C, `Complete the quote (Marley): "I wear the ___ I forged in life."`, `chain`, [`shame`, `burden`, `crown`], `The chain symbolises the guilt created by his own greed.`, H],
    [T, `Complete the quote (Marley): "Mankind was my ___."`, `business`, [`burden`, `concern`, `family`], `He realises too late that he should have cared for others.`, H],
    [T, `Complete the quote (the Ghost of Christmas Present): "This boy is Ignorance. This girl is ___."`, `Want`, [`Poverty`, `Hunger`, `Doom`], `They represent the social problems that Dickens wanted readers to address.`, H],
    [T, `Complete the quote (the Ghost of Christmas Present): "...for on his brow I see that written which is ___."`, `Doom`, [`Death`, `Shame`, `Fear`], `The ghost warns that ignorance, above all, will destroy society.`, H],
    [C, `Complete the quote (Tiny Tim): "God bless us, every ___!"`, `one`, [`day`, `man`, `child`], `Tim's blessing sums up the Christmas spirit of kindness.`, H],
    [T, `Complete the quote (Fred): "...a kind, forgiving, charitable, ___ time."`, `pleasant`, [`quiet`, `happy`, `special`], `Fred sees Christmas as a time for open hearts.`, H],
    [C, `Complete the quote (Scrooge at the end): "I will honour Christmas in my ___, and try to keep it all the year."`, `heart`, [`home`, `life`, `church`], `He promises to change for good.`, H],
    [C, `Complete the quote (Scrooge at the end): "I am as light as a ___, I am as happy as an angel."`, `feather`, [`bird`, `cloud`, `child`], `The similes show his joy and relief.`, H],
    [C, `Complete the quote (about Scrooge at the end): "...as good a friend, as good a master, and as good a ___, as the good old city knew."`, `man`, [`neighbour`, `king`, `father`], `The triple structure shows his full transformation.`, H],
    [C, `Complete the quote: "It was always said of him, that he knew how to keep ___ well, if any man alive possessed the knowledge."`, `Christmas`, [`money`, `peace`, `house`], `The final lines praise Scrooge's changed character.`, H],
    [T, `Complete the quote (Fezziwig): "The happiness he gives, is quite as great as if it cost a ___."`, `fortune`, [`kiss`, `penny`, `lifetime`], `A good employer can make others happy without spending much.`, H],

    // ---------- Themes ----------
    [T, `What is the main message of A Christmas Carol?`, `People should care for others, and it is never too late to change`, [`Wealth always brings happiness`, `The poor are to blame for their poverty`, `Ghosts are real`], `Dickens wanted to encourage generosity and social responsibility.`, H],
    [T, `What does the story suggest about money and happiness?`, `Money without kindness leaves a person lonely`, [`Money guarantees happiness`, `Poor people can never be happy`, `Happiness comes from fame`], `The Cratchits are poor but happy; Scrooge is rich but miserable.`, H],
    [T, `What do Ignorance and Want represent?`, `The social problems caused by poverty and lack of education`, [`Scrooge's guilty thoughts`, `Marley's children`, `The two ghosts' servants`], `Dickens uses them to challenge his readers.`, H],
    [T, `Which theme is shown by the Cratchits' Christmas dinner?`, `Family and happiness despite poverty`, [`Greed and selfishness`, `Religion and punishment`, `Social class conflict only`], `Their small goose and pudding are treated as a feast.`, H],
    [T, `Which theme is shown by Scrooge's transformation?`, `Redemption`, [`Revenge`, `Isolation`, `Ambition`], `He is given the chance to change before it is too late.`, H],
    [T, `How does Dickens present the theme of time in the story?`, `Through the three spirits of past, present and future`, [`Through one long flashback`, `Through a diary`, `Through a countdown clock`], `Seeing all three helps Scrooge understand the consequences of his actions.`, H],
    [T, `How does Fred contrast with Scrooge?`, `Fred is warm, forgiving and generous; Scrooge is cold and selfish`, [`Fred is rich and Scrooge is poor`, `Fred is religious and Scrooge is not`, `They are identical`], `Fred shows the Christmas spirit Scrooge lacks.`, H],
    [T, `Which theme links Scrooge's treatment of Bob Cratchit to society?`, `The unfair treatment of the poor by the rich`, [`The importance of education`, `The danger of the supernatural`, `The value of ambition`], `Bob works long hours for low pay in a cold office.`, H],
    [T, `What does the story suggest about people who ignore the suffering of others, like Marley?`, `They will suffer for it after death`, [`They will be rewarded`, `They will become wealthy`, `Nothing will happen`], `Marley is doomed to walk the earth in chains.`, H],

    // ---------- Language, form and structure ----------
    [L, `What type of narrator tells the story?`, `A third-person narrator who sometimes speaks directly to the reader`, [`Scrooge in the first person`, `Bob Cratchit`, `Marley's ghost`], `The narrator's friendly voice draws readers into the story.`, H],
    [L, `Which technique is "as solitary as an oyster"?`, `Simile`, [`Metaphor`, `Alliteration`, `Personification`], `It compares Scrooge to a closed shell.`, H],
    [L, `What does the list "squeezing, wrenching, grasping, scraping, clutching" show?`, `Scrooge's relentless greed, built up through a list of verbs`, [`His love of money and charity`, `His ability to work hard`, `His joy at Christmas`], `The sound of the verbs also feels harsh.`, H],
    [L, `What does the weather (fog and frost) around Scrooge suggest?`, `That his heart is cold and shuts people out`, [`That it is going to snow`, `That the spirits are near`, `That London is unhealthy`], `It is an example of pathetic fallacy.`, H],
    [L, `What do Marley's chains symbolise?`, `The burden of guilt created by greed and selfishness`, [`Marley's imprisonment`, `The weight of Scrooge's money bags`, `The Victorian legal system`], `Each link was made by his own actions: "I made it link by link".`, H],
    [L, `Why is A Christmas Carol described as a moral tale or allegory?`, `It teaches a lesson about how people should behave`, [`It is based on true events`, `It has no characters`, `It is written as a poem`], `Dickens wants readers to learn from Scrooge's mistakes.`, H],
    [L, `Why does Dickens use a ghost story form?`, `It was popular at Christmas and lets Scrooge see his life from outside`, [`He believed in ghosts`, `It was cheaper to print`, `It avoided censorship`], `Ghost stories were a Victorian Christmas tradition.`, H],
    [L, `What does light and dark imagery often represent in the novella?`, `Light stands for warmth and goodness; dark stands for fear and misery`, [`Light stands for money`, `Dark stands for peace`, `Nothing`], `The Ghost of Christmas Present carries a torch of light; Scrooge works in the dark.`, H],
    [L, `Why does Dickens use repetition, such as "Are there no prisons?"`, `To remind Scrooge of his own cruel words and increase their impact`, [`To pad out the story`, `To confuse readers`, `To show Scrooge is forgetful`], `The Spirit throws his words back at him.`, H],
    [L, `What effect does the structure of the five staves have on the story?`, `It builds from Scrooge's hardness through the three visions to his change`, [`It shows time standing still`, `It repeats the same events`, `It starts at the end`], `The pattern follows a journey of redemption.`, H],

    // ---------- Context ----------
    [X, `When was A Christmas Carol published?`, `1843`, [`1813`, `1883`, `1901`], `It came out on 19 December 1843.`, H],
    [X, `Why did Dickens write A Christmas Carol?`, `To criticise the treatment of the poor and encourage charity`, [`To make Victorian ghost stories popular`, `To support the workhouse system`, `To celebrate the rich`], `He had read reports on child poverty and wanted people to care.`, H],
    [X, `What was Dickens' own childhood experience of poverty?`, `His father was imprisoned for debt and he worked in a factory as a boy`, [`He grew up rich and educated`, `He was a priest's son`, `He never went to school or work`], `This inspired his concern for the poor.`, H],
    [X, `What was the Poor Law of 1834?`, `A law that made workhouses harsh to discourage people from asking for help`, [`A law that abolished workhouses`, `A law that paid every poor person`, `A law that created the NHS`], `Scrooge's "Are there no workhouses?" refers to this.`, H],
    [X, `What were workhouses?`, `Places where poor people lived and worked in return for food and shelter`, [`Factories owned by the rich`, `Schools for rich children`, `Hospitals for soldiers`], `They were deliberately unpleasant.`, H],
    [X, `Which economist's ideas about the "surplus population" does Scrooge echo?`, `Thomas Malthus`, [`Karl Marx`, `Adam Smith`, `Charles Darwin`], `Malthus argued that population growth would outstrip food supply.`, H],
    [X, `Which Victorian idea about the poor did Dickens challenge?`, `That the poor were lazy and deserved their poverty`, [`That the poor should vote`, `That education was wasteful`, `That the rich were generous`], `Dickens showed poverty as a social problem the rich were responsible for.`, H],
    [X, `Which Christmas traditions became popular in Victorian Britain?`, `Christmas trees, cards and family gatherings`, [`Fireworks and bonfires`, `Easter eggs`, `Harvest festivals`], `Prince Albert helped to popularise the Christmas tree.`, H],
    [X, `What religious idea is important in A Christmas Carol?`, `Redemption and the Christian duty of charity`, [`Atheism and science`, `The importance of wealth`, `Fear of other faiths`], `Scrooge is given a chance to repent and save his soul.`, H],
    [X, `Which social change in the 1840s made inequality more obvious in cities like London?`, `The Industrial Revolution`, [`The Great Fire`, `The Napoleonic Wars`, `The Reformation`], `Factories brought wealth for some and crowded slums for many.`, H]
  ]
};
