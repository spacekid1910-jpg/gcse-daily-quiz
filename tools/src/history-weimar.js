// [topic, question, correct answer, [3 wrong answers], one-line explanation]
// Edexcel Paper 3: Weimar and Nazi Germany, 1918-39. Key topic 1: The Weimar Republic, 1918-29 (the mock focus).
const T = `The Weimar Republic, 1918-29`;
module.exports = {
  subject: 'GCSE History',
  qs: [
    // ---------- Origins of the Republic, 1918-19 ----------
    [T, `Who was Kaiser of Germany until November 1918?`, `Wilhelm II`, [`Friedrich Ebert`, `Paul von Hindenburg`, `Gustav Stresemann`], `He abdicated on 9 November 1918 and fled to the Netherlands.`],
    [T, `Which event in late October and early November 1918 helped to spark the German Revolution?`, `The mutiny of sailors at Kiel`, [`The Spartacist Uprising`, `The Kapp Putsch`, `The invasion of the Ruhr`], `Sailors refused to sail on a last, hopeless battle; the unrest spread across Germany.`],
    [T, `When was the armistice that ended the First World War signed?`, `11 November 1918`, [`9 November 1918`, `28 June 1919`, `11 August 1919`], `The new German government agreed to stop fighting, two days after the Kaiser abdicated.`],
    [T, `Why did the Kaiser abdicate in November 1918?`, `Germany was close to defeat and a revolution had broken out`, [`He was defeated in a general election`, `He was assassinated by the Spartacists`, `The Treaty of Versailles removed him`], `He lost the support of the army, the navy and the people.`],
    [T, `Who became the first president of the Weimar Republic?`, `Friedrich Ebert`, [`Paul von Hindenburg`, `Adolf Hitler`, `Gustav Stresemann`], `Ebert was leader of the SPD (Social Democratic Party).`],
    [T, `Who declared Germany a republic on 9 November 1918?`, `Philipp Scheidemann`, [`Friedrich Ebert`, `Rosa Luxemburg`, `Wolfgang Kapp`], `He announced it from a window of the Reichstag in Berlin.`],
    [T, `Why did the new government meet in Weimar rather than Berlin?`, `Berlin was too violent and unstable after the revolution`, [`Weimar was the Kaiser's old capital`, `The Treaty of Versailles ordered it`, `Berlin was occupied by France`], `The republic got its name from the town where the National Assembly met.`],
    [T, `When was the Weimar Constitution introduced?`, `1919`, [`1918`, `1921`, `1923`], `It set up Germany as a democratic republic.`],
    [T, `Under the Weimar Constitution, how often was the president elected?`, `Every 7 years`, [`Every 4 years`, `Every 5 years`, `Every 10 years`], `The president could appoint the chancellor and had powerful emergency powers.`],
    [T, `What was Article 48 of the Weimar Constitution?`, `It let the president rule by decree in an emergency`, [`It banned the army from politics`, `It guaranteed women the vote`, `It set the level of reparations`], `This was a weakness because it could be used to bypass the Reichstag.`],
    [T, `Which voting system for the Reichstag made it hard for any party to win a majority?`, `Proportional representation`, [`First past the post`, `Rule by decree`, `A single-party list`], `Seats matched each party's share of votes, so many small parties won seats and coalitions were needed.`],
    [T, `Which of these was a weakness of the Weimar Constitution?`, `Coalition governments were often weak and short-lived`, [`Women could not vote`, `There was no elected parliament`, `The Kaiser still held real power`], `Proportional representation meant no party won a majority.`],
    [T, `What was the Reichsrat?`, `The body representing the German states`, [`The German army`, `The president's cabinet`, `The Nazi Party's council`], `The Reichstag was the main elected parliament.`],
    [T, `What voting rights did the Weimar Constitution give?`, `All men and women aged 20 and over could vote`, [`Only men over 21`, `Only property owners`, `Everyone over 16`], `Women voted for the first time in 1919.`],
    [T, `Which groups from the Kaiser's time stayed in their jobs under the Weimar Republic?`, `Judges, civil servants and army officers`, [`Only the Kaiser's family`, `Nobody; they were all replaced`, `Only the old Reichstag members`], `Many were not loyal to the new republic.`],

    // ---------- Treaty of Versailles ----------
    [T, `When was the Treaty of Versailles signed?`, `28 June 1919`, [`11 November 1918`, `11 August 1919`, `1 January 1920`], `Germany was not allowed to take part in the negotiations.`],
    [T, `Why did Germans call the Treaty of Versailles a "Diktat"?`, `They were forced to accept it without negotiation`, [`It was written in German`, `Hitler wrote it`, `It was signed by the Kaiser`], `They had to sign or face invasion.`],
    [T, `What did the War Guilt Clause (Article 231) say?`, `Germany had to accept blame for starting the war`, [`Germany had to pay no reparations`, `Germany had to give up its army`, `Germany could not join the League of Nations`], `It was the basis for reparations and was hated by Germans.`],
    [T, `How much were reparations set at in 1921?`, `£6.6 billion`, [`£660 million`, `£66 billion`, `£1.8 billion`], `Germany was to pay in instalments.`],
    [T, `What was the limit on the German army under the Treaty of Versailles?`, `100,000 men`, [`1 million men`, `10,000 men`, `500,000 men`], `Conscription was banned, and Germany could have no tanks or air force.`],
    [T, `Which area of Germany was demilitarised by the Treaty of Versailles?`, `The Rhineland`, [`Bavaria`, `The Ruhr`, `Silesia`], `No German troops were allowed in this area next to France.`],
    [T, `What happened to the Saar under the Treaty of Versailles?`, `It was run by the League of Nations for 15 years`, [`It went to Poland`, `It became part of Austria`, `It was made a free city`], `France took the output of its coal mines.`],
    [T, `Which territory was returned to France under the Treaty of Versailles?`, `Alsace-Lorraine`, [`The Saar`, `Danzig`, `The Rhineland`], `It had been taken by Germany in 1871.`],
    [T, `What was the Polish Corridor?`, `Land taken from Germany to give Poland access to the sea`, [`A demilitarised strip along the Rhine`, `A railway line to Russia`, `A zone run by the League of Nations`], `It separated East Prussia from the rest of Germany.`],
    [T, `Which of these was banned for Germany by the Treaty of Versailles?`, `Union (Anschluss) with Austria`, [`Trading with Britain`, `Having a president`, `Holding elections`], `Germany also lost all of its overseas colonies.`],
    [T, `What were the "November Criminals"?`, `The politicians who signed the armistice (and later the Treaty)`, [`The Spartacist leaders`, `Members of the Kapp Putsch`, `The French who occupied the Ruhr`], `Right-wing groups blamed them for betraying Germany.`],
    [T, `What was the "stab in the back" myth?`, `The claim that Germany had been betrayed by politicians, not beaten by the army`, [`The claim that Hitler had been poisoned`, `The idea that the Kaiser was murdered`, `The belief that France invaded Germany`], `It damaged the reputation of the Weimar government.`],
    [T, `Which three leaders were known as the "Big Three" at the Paris Peace Conference?`, `Clemenceau, Lloyd George and Wilson`, [`Clemenceau, Churchill and Roosevelt`, `Stalin, Lloyd George and Wilson`, `Ebert, Clemenceau and Wilson`], `France, Britain and the USA had different aims.`],

    // ---------- Challenges 1919-23 ----------
    [T, `Which group led the Spartacist Uprising of January 1919?`, `Communists, led by Rosa Luxemburg and Karl Liebknecht`, [`Right-wing army officers`, `The Nazi Party`, `Sailors from Kiel`], `They wanted a communist revolution like Russia's.`],
    [T, `Who did Ebert use to crush the Spartacist Uprising?`, `The Freikorps`, [`The French army`, `The Reichstag`, `The SA`], `The Freikorps were right-wing ex-soldiers; they murdered Luxemburg and Liebknecht.`],
    [T, `What did the Kapp Putsch of March 1920 try to do?`, `Overthrow the Weimar government and restore a right-wing government`, [`Start a communist revolution`, `Cancel reparations`, `Bring back the League of Nations`], `Wolfgang Kapp and the Freikorps seized Berlin.`],
    [T, `What defeated the Kapp Putsch?`, `A general strike by Berlin workers`, [`The army fighting the rebels`, `The French invasion`, `A new election`], `Gas, water and transport stopped; Kapp fled.`],
    [T, `What did the Kapp Putsch show about the army?`, `It was unwilling to fire on fellow soldiers to defend the government`, [`It was fully loyal to Ebert`, `It was too small to fight`, `It had been disbanded`], `The Weimar government had to rely on a strike instead.`],
    [T, `Which minister was assassinated in 1922 by right-wing extremists?`, `Walther Rathenau`, [`Gustav Stresemann`, `Friedrich Ebert`, `Philipp Scheidemann`], `Matthias Erzberger, who signed the armistice, was killed in 1921.`],
    [T, `Why did French and Belgian troops occupy the Ruhr in January 1923?`, `Germany had missed a reparations payment`, [`Germany had invaded Belgium`, `The Kaiser had returned`, `There was a communist revolution`], `They took coal and goods as payment.`],
    [T, `How did the German government respond to the Ruhr occupation?`, `It told workers to carry out passive resistance (strike)`, [`It declared war on France`, `It paid all reparations immediately`, `It surrendered the Ruhr permanently`], `It printed money to pay the striking workers.`],
    [T, `What was the main cause of hyperinflation in 1923?`, `The government printed huge amounts of money`, [`The Wall Street Crash`, `Germany's gold ran out because of the Kaiser`, `Taxes were abolished by Stresemann`], `Prices rose so fast that money became almost worthless.`],
    [T, `Who suffered most from hyperinflation?`, `People with savings or fixed incomes, such as pensioners`, [`People who owed money`, `Foreign investors`, `Owners of land`], `Savings were wiped out; people with debts could pay them off cheaply.`],
    [T, `Who benefited from hyperinflation?`, `People with debts, who could pay them off with worthless money`, [`People living on savings`, `Pensioners`, `Workers paid monthly`], `Debts and mortgages became easy to clear.`],
    [T, `What was a long-term effect of hyperinflation?`, `Many middle-class Germans lost trust in the Weimar Republic`, [`Germany stopped paying reparations`, `The Kaiser returned to power`, `Unemployment disappeared`], `Some later turned to extremist parties.`],

    // ---------- Recovery 1924-29 ----------
    [T, `Which politician led the recovery of the Weimar Republic from 1923?`, `Gustav Stresemann`, [`Wolfgang Kapp`, `Friedrich Ebert`, `Rosa Luxemburg`], `He was chancellor in 1923 and then foreign minister until 1929.`],
    [T, `What did Stresemann do in 1923 to stop hyperinflation?`, `Introduced a new currency, the Rentenmark`, [`Printed more money`, `Stopped paying wages`, `Increased reparations`], `It was limited in supply and backed by German land and industry; Hjalmar Schacht helped.`],
    [T, `Which plan of 1924 reorganised reparation payments and brought American loans to Germany?`, `The Dawes Plan`, [`The Young Plan`, `The Locarno Pact`, `The Kellogg-Briand Pact`], `Payments were spread out to match what Germany could afford.`],
    [T, `Which country lent money to Germany under the Dawes Plan?`, `The USA`, [`France`, `Britain`, `Russia`], `About 800 million gold marks were loaned.`],
    [T, `What was the weakness of the recovery that depended on the Dawes Plan?`, `It relied on American loans that could be withdrawn`, [`It stopped all trade`, `It ended the Treaty of Versailles`, `It ignored industry`], `When the Wall Street Crash happened in 1929, the loans were recalled.`],
    [T, `What did the Locarno Pact of 1925 do?`, `Germany accepted its western borders with France and Belgium`, [`Germany joined the League of Nations`, `Reparations were cancelled`, `Germany regained the Saar`], `Britain and Italy guaranteed the agreement.`],
    [T, `When did Germany join the League of Nations?`, `1926`, [`1919`, `1923`, `1929`], `This showed that Germany was once again accepted as a major power.`],
    [T, `What did the Kellogg-Briand Pact of 1928 say?`, `Countries agreed not to use war to achieve their aims`, [`Germany would pay no more reparations`, `Germany could rebuild its army`, `France would leave the Rhineland`], `Over 60 countries signed it.`],
    [T, `What did the Young Plan of 1929 do?`, `Reduced Germany's total reparations and gave longer to pay`, [`Removed the army limit`, `Gave the Saar back to Germany`, `Started the Ruhr occupation`], `It extended payments to 1988 and was attacked by German nationalists.`],
    [T, `Which of these was a sign of economic recovery between 1924 and 1929?`, `New houses, factories and public buildings were built using loans`, [`Unemployment benefit was removed`, `The Rentenmark was abolished`, `Reparations stopped`], `Unemployment insurance was also introduced in 1927.`],
    [T, `Which weakness remained in the German economy in the late 1920s?`, `Farmers had low prices and many were in debt`, [`Industrial output was far below 1913`, `Germany could not trade abroad`, `Hyperinflation returned`], `Some groups did not share in the "golden years".`],
    [T, `How well did the Nazis do in the 1928 Reichstag election?`, `Badly, winning about 2.6% of the vote`, [`They won the most seats`, `They won over 30% of the vote`, `They did not stand`], `Extremist parties did poorly during the stable years.`],

    // ---------- Culture and society in the 1920s ----------
    [T, `What was the Bauhaus?`, `A German school of art, design and architecture`, [`A political party`, `A Berlin cabaret`, `A film studio`], `It was founded by Walter Gropius and was known for functional modern design.`],
    [T, `Who wrote The Threepenny Opera (1928)?`, `Bertolt Brecht`, [`Thomas Mann`, `Walter Gropius`, `Fritz Lang`], `He used theatre to criticise society.`],
    [T, `Which artists painted sharp, critical pictures of Weimar society?`, `Otto Dix and George Grosz`, [`Walter Gropius and Fritz Lang`, `Claude Monet and Pablo Picasso`, `Max Weber and Karl Marx`], `This style is often called the "New Objectivity".`],
    [T, `Which German film of 1927 was directed by Fritz Lang?`, `Metropolis`, [`The Blue Angel`, `All Quiet on the Western Front`, `Cabaret`], `It showed a futuristic city and was an example of Weimar cinema.`],
    [T, `Which novel of 1929 by Erich Maria Remarque showed the horror of the First World War?`, `All Quiet on the Western Front`, [`Mein Kampf`, `Buddenbrooks`, `The Magic Mountain`], `It was hugely popular and later banned by the Nazis.`],
    [T, `Why did many conservative Germans dislike Weimar culture?`, `They saw it as decadent and against traditional values`, [`It was only available to the rich`, `It had been banned by Ebert`, `It copied Nazi art`], `They preferred traditional German art, music and morals.`],
    [T, `What new opportunities did women have in the Weimar Republic?`, `They could vote and stand for election, and more worked in offices and professions`, [`They were banned from voting`, `They all had to stay at home`, `They could join the army`], `Attitudes were still traditional in many places.`],
    [T, `Which feature of Berlin life in the 1920s is often described as part of the "Golden Age"?`, `A lively nightlife with cabarets, jazz and clubs`, [`Strict curfews`, `Banned theatres`, `A ban on foreign music`], `Berlin became one of Europe's cultural centres.`]
  ]
};
