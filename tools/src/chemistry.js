// [topic, question, correct answer, [3 wrong answers], one-line explanation]
module.exports = {
  subject: 'Chemistry',
  qs: [
    // ---------- 5.1 Atomic structure and the periodic table ----------
    [`Atoms, elements and compounds`, `What is a compound?`, `Two or more elements chemically bonded together`, [`Two or more substances mixed but not bonded`, `A substance made of only one type of atom`, `A mixture of gases`], `Compounds can only be separated by chemical reactions.`],
    [`Atoms, elements and compounds`, `Which of these is an element?`, `Oxygen (O2)`, [`Water`, `Carbon dioxide`, `Sodium chloride`], `Elements contain only one type of atom.`],

    [`Mixtures and separation`, `Which technique separates a soluble solid from its solution?`, `Crystallisation`, [`Filtration`, `Chromatography`, `Fractional distillation`], `Filtration separates an insoluble solid from a liquid.`],
    [`Mixtures and separation`, `Fractional distillation separates liquids with different...`, `Boiling points`, [`Densities`, `Colours`, `Particle sizes`], `The liquid with the lowest boiling point evaporates first.`],

    [`Development of the model of the atom`, `In Rutherford's alpha scattering experiment, most alpha particles...`, `Passed straight through the gold foil`, [`Bounced straight back`, `Were absorbed by the foil`, `Turned into gold atoms`], `This showed that most of the atom is empty space.`],
    [`Development of the model of the atom`, `Who discovered the neutron?`, `James Chadwick`, [`Niels Bohr`, `J. J. Thomson`, `Ernest Rutherford`], `Bohr suggested electrons orbit in shells.`],
    [`Development of the model of the atom`, `The plum pudding model was proposed by...`, `J. J. Thomson`, [`Rutherford`, `Bohr`, `Chadwick`], `It pictured a ball of positive charge with electrons embedded in it.`],

    [`Subatomic particles`, `An atom has 17 protons and 18 neutrons. What is its mass number?`, `35`, [`17`, `18`, `52`], `Mass number = protons + neutrons.`],
    [`Subatomic particles`, `What is the relative charge of an electron?`, `-1`, [`+1`, `0`, `-2`], `Protons are +1 and neutrons are 0.`],
    [`Subatomic particles`, `Isotopes of an element have different numbers of...`, `Neutrons`, [`Protons`, `Electrons`, `Shells`], `They have the same number of protons, so the same atomic number.`],

    [`Electronic structure`, `What is the electronic structure of sodium (atomic number 11)?`, `2,8,1`, [`2,8,8`, `2,1`, `2,9`], `Fill the shells 2, 8, 8 in order.`],
    [`Electronic structure`, `How many electrons can the second shell hold?`, `8`, [`2`, `18`, `10`], `The first shell holds 2.`],

    [`The periodic table`, `Elements in the same group have the same number of...`, `Outer-shell electrons`, [`Protons`, `Shells`, `Neutrons`], `This gives them similar chemical properties.`],
    [`The periodic table`, `Metals tend to ___ electrons to form ___ ions.`, `Lose; positive`, [`Gain; positive`, `Lose; negative`, `Gain; negative`], `Non-metals gain electrons to form negative ions.`],

    [`Development of the periodic table`, `Why did Mendeleev leave gaps in his periodic table?`, `He predicted that undiscovered elements would fit there`, [`He ran out of space`, `Those elements were radioactive`, `He had not measured atomic masses`], `His predictions of the properties of missing elements later proved correct.`],
    [`Development of the periodic table`, `Newlands arranged the elements in order of...`, `Atomic weight`, [`Melting point`, `Density`, `Colour`], `His Law of Octaves noticed repeating properties.`],

    [`Group 0, Group 1 and Group 7`, `Why are the noble gases unreactive?`, `They have full outer shells`, [`They have one outer electron`, `They are all metals`, `They have no electrons`], `Full outer shells are very stable.`],
    [`Group 0, Group 1 and Group 7`, `Going down Group 1, reactivity...`, `Increases`, [`Decreases`, `Stays the same`, `Increases then decreases`], `The outer electron is further from the nucleus and easier to lose.`],
    [`Group 0, Group 1 and Group 7`, `What happens when chlorine is bubbled through potassium bromide solution?`, `Bromine is displaced and an orange solution forms`, [`Iodine is displaced`, `Nothing happens`, `Chlorine is displaced`], `A more reactive halogen displaces a less reactive one.`],
    [`Group 0, Group 1 and Group 7`, `Going down Group 7, the melting point...`, `Increases`, [`Decreases`, `Stays the same`, `Falls to zero`], `Larger molecules have stronger intermolecular forces.`],

    [`Transition metals`, `Compared with Group 1 metals, transition metals have...`, `Higher melting points and higher density`, [`Lower melting points`, `Lower density`, `Higher reactivity`], `They are also harder and stronger.`],
    [`Transition metals`, `Transition metals and their compounds are often used as...`, `Catalysts`, [`Fuels`, `Insulators`, `Solvents`], `They also form coloured compounds.`],

    // ---------- 5.2 Bonding, structure and properties ----------
    [`Chemical bonds`, `Which type of bonding occurs between a metal and a non-metal?`, `Ionic`, [`Covalent`, `Metallic`, `Hydrogen`], `Electrons are transferred from the metal to the non-metal.`],
    [`Chemical bonds`, `Which type of bonding occurs between non-metal atoms?`, `Covalent`, [`Ionic`, `Metallic`, `Electrostatic`], `Electrons are shared.`],

    [`Ionic bonding and compounds`, `What is the formula of magnesium chloride?`, `MgCl2`, [`MgCl`, `Mg2Cl`, `MgCl3`], `Mg forms 2+ and Cl forms 1-, so two chlorides are needed.`],
    [`Ionic bonding and compounds`, `Which describes a giant ionic lattice?`, `A regular arrangement of oppositely charged ions held by strong electrostatic forces`, [`Small molecules held by weak forces`, `Atoms sharing pairs of electrons`, `Positive ions in a sea of delocalised electrons`], `This gives ionic compounds high melting points.`],

    [`Covalent bonding`, `What is a covalent bond?`, `A shared pair of electrons between two atoms`, [`A transfer of electrons`, `An attraction between ions`, `A sea of delocalised electrons`], `Covalent bonds are strong.`],
    [`Covalent bonding`, `How many covalent bonds does a carbon atom usually form?`, `4`, [`1`, `2`, `6`], `Carbon has four outer electrons.`],

    [`Metallic bonding`, `Why can metals conduct electricity?`, `Delocalised electrons can move through the structure`, [`Ions can move freely`, `They have covalent bonds`, `They contain free protons`], `Delocalised electrons also carry thermal energy.`],
    [`Metallic bonding`, `Metallic bonding is...`, `The attraction between positive metal ions and delocalised electrons`, [`The attraction between oppositely charged ions`, `The sharing of electrons between atoms`, `The attraction between molecules`], `The bonding is strong, which gives metals high melting points.`],

    [`States of matter and changes of state`, `In a gas the particles are...`, `Far apart and moving randomly at high speed`, [`Close together and vibrating in fixed positions`, `Close together and sliding past each other`, `Arranged in a regular pattern`], `Liquids slide past each other. Solids vibrate in fixed positions.`],
    [`States of matter and changes of state`, `Which change of state is condensing?`, `Gas to liquid`, [`Liquid to gas`, `Solid to liquid`, `Solid to gas`], `Gas to solid is deposition, and solid to gas is sublimation.`],

    [`Properties of substances`, `Why do simple molecular substances have low boiling points?`, `Weak intermolecular forces need little energy to overcome`, [`Strong covalent bonds break easily`, `They have delocalised electrons`, `They are made of ions`], `The covalent bonds inside the molecules do not break.`],
    [`Properties of substances`, `Ionic compounds conduct electricity when...`, `Molten or dissolved`, [`Solid`, `Always`, `Never`], `Ions are free to move only when molten or dissolved.`],
    [`Properties of substances`, `Why does diamond have a very high melting point?`, `Many strong covalent bonds must be broken`, [`Weak forces between molecules`, `Delocalised electrons`, `It is an ionic lattice`], `It is a giant covalent structure.`],

    [`Structure and bonding of carbon`, `Why can graphite conduct electricity?`, `It has delocalised electrons between its layers`, [`It has free ions`, `It is a metal`, `It has free protons`], `Each carbon forms only 3 bonds, leaving one delocalised electron.`],
    [`Structure and bonding of carbon`, `What is a single layer of graphite called?`, `Graphene`, [`Diamond`, `A fullerene`, `A nanotube`], `Graphene is very strong and conducts electricity.`],
    [`Structure and bonding of carbon`, `Graphite is soft because...`, `Its layers can slide over each other`, [`It has weak covalent bonds`, `It has ionic bonds`, `It is a liquid`], `There are only weak forces between the layers.`],

    [`Nanoparticles`, `Nanoparticles are roughly what size?`, `1 to 100 nm`, [`1 to 100 mm`, `0.1 to 1 mm`, `100 to 1000 micrometres`], `1 nm is 10^-9 m.`],
    [`Nanoparticles`, `A use of nanoparticles is in...`, `Sun creams`, [`Fuels`, `Building bricks`, `Alloys`], `Their large surface area to volume ratio makes them very effective.`],

    // ---------- 5.3 Quantitative chemistry ----------
    [`Conservation of mass and balanced equations`, `When magnesium burns in air, the mass of the solid increases because...`, `Oxygen from the air combines with it`, [`Mass is created in the reaction`, `Magnesium absorbs light`, `Nitrogen is destroyed`], `Mass is conserved overall. The oxygen was not counted at the start.`],
    [`Conservation of mass and balanced equations`, `Which is the correct balanced equation for the formation of water?`, `2H2 + O2 -> 2H2O`, [`H2 + O2 -> 2H2O`, `2H2 + 2O2 -> 2H2O`, `H2 + 2O2 -> H2O`], `The same number of each atom must be on both sides.`],

    [`Relative formula mass`, `What is the Mr of CO2? (C = 12, O = 16)`, `44`, [`28`, `32`, `56`], `12 + 16 + 16 = 44.`],
    [`Relative formula mass`, `What is the Mr of water, H2O? (H = 1, O = 16)`, `18`, [`17`, `16`, `34`], `1 + 1 + 16 = 18.`],

    [`Moles`, `How many moles are in 44 g of CO2 (Mr = 44)?`, `1 mole`, [`44 moles`, `0.5 mole`, `2 moles`], `Moles = mass / Mr.`],
    [`Moles`, `How many moles are in 9 g of water (Mr = 18)?`, `0.5 mole`, [`2 moles`, `9 moles`, `0.05 mole`], `9 / 18 = 0.5.`],
    [`Moles`, `The Avogadro constant is...`, `6.02 x 10^23`, [`6.02 x 10^32`, `3.01 x 10^23`, `6.02 x 10^-23`], `It is the number of particles in one mole.`],

    [`Amounts of substances in equations`, `2Mg + O2 -> 2MgO. What mass of MgO forms from 24 g of Mg? (Mg = 24, O = 16)`, `40 g`, [`24 g`, `80 g`, `64 g`], `1 mol Mg gives 1 mol MgO, which has Mr 40.`],

    [`Limiting reactants`, `The limiting reactant is the one that...`, `Is used up first, so stops the reaction`, [`Is in excess`, `Is a catalyst`, `Has the highest Mr`], `The amount of product depends on the limiting reactant.`],

    [`Concentration of solutions`, `5 g of solute is dissolved in 0.5 dm3 of solution. What is the concentration in g/dm3?`, `10`, [`2.5`, `5`, `0.1`], `Concentration = mass / volume = 5 / 0.5.`],
    [`Concentration of solutions`, `What is the concentration of a solution containing 2 mol in 4 dm3?`, `0.5 mol/dm3`, [`8 mol/dm3`, `2 mol/dm3`, `0.25 mol/dm3`], `Concentration = moles / volume.`],

    [`Percentage yield and atom economy`, `Percentage yield is calculated as...`, `(actual yield / theoretical yield) x 100`, [`(theoretical yield / actual yield) x 100`, `actual yield x theoretical yield`, `(actual yield - theoretical yield) / actual yield`], `The actual yield is always less than or equal to the theoretical yield.`],
    [`Percentage yield and atom economy`, `A reaction has a theoretical yield of 20 g and an actual yield of 15 g. What is the percentage yield?`, `75%`, [`133%`, `25%`, `5%`], `15 / 20 x 100 = 75%.`],

    [`Using concentrations - titrations`, `25.0 cm3 of NaOH is neutralised by 20.0 cm3 of 0.10 mol/dm3 HCl (1:1). What is the concentration of the NaOH?`, `0.080 mol/dm3`, [`0.125 mol/dm3`, `0.10 mol/dm3`, `0.0020 mol/dm3`], `Moles HCl = 0.020 x 0.10 = 0.0020. Concentration = 0.0020 / 0.025.`],

    [`Volumes of gases`, `At room temperature and pressure, one mole of any gas occupies...`, `24 dm3`, [`22.4 dm3`, `12 dm3`, `1 dm3`], `This is the molar volume used in GCSE.`],
    [`Volumes of gases`, `What volume does 0.5 mol of gas occupy at room temperature and pressure?`, `12 dm3`, [`24 dm3`, `48 dm3`, `6 dm3`], `0.5 x 24 = 12.`],

    // ---------- 5.4 Chemical changes ----------
    [`Reactivity of metals`, `Which of these metals is the most reactive?`, `Potassium`, [`Magnesium`, `Zinc`, `Copper`], `The order is K, Na, Ca, Mg, Al, C, Zn, Fe, H, Cu.`],
    [`Reactivity of metals`, `What is produced when iron is added to copper sulfate solution?`, `Iron sulfate and copper`, [`No reaction`, `Copper sulfate and iron`, `Iron oxide and copper`], `Iron is more reactive than copper, so it displaces it.`],
    [`Reactivity of metals`, `Metals less reactive than carbon can be extracted by...`, `Heating with carbon`, [`Electrolysis`, `Filtration`, `Crystallisation`], `Carbon takes the oxygen from the metal oxide. This is reduction.`],

    [`Oxidation and reduction in terms of electrons`, `What does OIL RIG stand for?`, `Oxidation Is Loss, Reduction Is Gain (of electrons)`, [`Oxidation Is Gain, Reduction Is Loss`, `Oxygen In Liquid, Reduction In Gas`, `Oxidation In Liquid, Reduction In Gas`], `A useful memory aid for redox questions.`],
    [`Oxidation and reduction in terms of electrons`, `In Mg -> Mg2+ + 2e-, the magnesium is...`, `Oxidised`, [`Reduced`, `Neutralised`, `Displaced`], `It loses electrons.`],

    [`Reactions of acids`, `Acid + metal carbonate produces...`, `A salt, water and carbon dioxide`, [`A salt and hydrogen`, `A salt and water only`, `A salt and oxygen`], `Metal + acid gives a salt and hydrogen.`],
    [`Reactions of acids`, `Which salts does sulfuric acid produce?`, `Sulfates`, [`Chlorides`, `Nitrates`, `Carbonates`], `Hydrochloric acid gives chlorides. Nitric acid gives nitrates.`],
    [`Reactions of acids`, `Which gas is produced when zinc reacts with hydrochloric acid?`, `Hydrogen`, [`Carbon dioxide`, `Oxygen`, `Chlorine`], `Test: it burns with a squeaky pop.`],

    [`pH, neutralisation and titrations`, `Which pH is neutral?`, `7`, [`0`, `14`, `1`], `Below 7 is acidic and above 7 is alkaline.`],
    [`pH, neutralisation and titrations`, `In neutralisation, H+ ions react with OH- ions to make...`, `Water`, [`Hydrogen gas`, `Hydrogen peroxide`, `Oxygen`], `H+ + OH- -> H2O.`],

    [`Strong and weak acids`, `A strong acid is one that...`, `Completely ionises in water`, [`Is very concentrated`, `Has a pH of exactly 7`, `Only partially ionises`], `Concentration and strength are different things.`],
    [`Strong and weak acids`, `Each decrease of 1 in pH changes the hydrogen ion concentration by a factor of...`, `10`, [`2`, `100`, `1`], `pH is a logarithmic scale.`],

    [`Electrolysis`, `What forms at the cathode during electrolysis of molten lead bromide?`, `Lead`, [`Bromine`, `Oxygen`, `Hydrogen`], `Metals form at the negative electrode. Bromine forms at the anode.`],
    [`Electrolysis`, `What is formed at the anode when aqueous copper chloride is electrolysed?`, `Chlorine`, [`Copper`, `Hydrogen`, `Oxygen`], `Halide ions are discharged at the anode.`],
    [`Electrolysis`, `Why is cryolite added when extracting aluminium?`, `It lowers the melting point of aluminium oxide`, [`It reacts with oxygen`, `It is a catalyst`, `It conducts electricity to the anode`], `This saves energy and money.`],
    [`Electrolysis`, `In electrolysis, positive ions move to the...`, `Cathode`, [`Anode`, `Salt bridge`, `Electrolyte only`], `Opposites attract: the cathode is negative.`],

    [`Half equations at electrodes`, `Which is the correct half equation for copper ions being discharged?`, `Cu2+ + 2e- -> Cu`, [`Cu -> Cu2+ + 2e-`, `Cu2+ -> Cu + 2e-`, `Cu2+ + e- -> Cu`], `Positive ions gain electrons at the cathode. This is reduction.`],
    [`Half equations at electrodes`, `2Cl- -> Cl2 + 2e- takes place at the...`, `Anode (oxidation)`, [`Cathode (reduction)`, `Cathode (oxidation)`, `Anode (reduction)`], `Negative ions lose electrons at the anode.`],

    // ---------- 5.5 Energy changes ----------
    [`Exothermic and endothermic reactions`, `An exothermic reaction...`, `Transfers energy to the surroundings, so the temperature rises`, [`Takes in energy, so the temperature falls`, `Has no energy change`, `Only happens at high temperatures`], `Combustion and neutralisation are exothermic.`],
    [`Exothermic and endothermic reactions`, `Which is an endothermic process?`, `Thermal decomposition`, [`Combustion`, `Neutralisation`, `Respiration`], `Endothermic reactions take in energy from the surroundings.`],

    [`Reaction profiles`, `Activation energy is...`, `The minimum energy needed for a reaction to start`, [`The energy released in the reaction`, `The energy of the products`, `The difference between reactants and products`], `Shown as the hump on a reaction profile.`],
    [`Reaction profiles`, `A catalyst works by...`, `Lowering the activation energy`, [`Raising the activation energy`, `Changing the overall energy change`, `Being used up in the reaction`], `It provides an alternative pathway.`],

    [`Bond energy calculations`, `Bonds broken need 2000 kJ/mol and bonds made release 2500 kJ/mol. What is the energy change?`, `-500 kJ/mol (exothermic)`, [`+500 kJ/mol (endothermic)`, `-4500 kJ/mol`, `+4500 kJ/mol`], `Energy change = broken - made.`],
    [`Bond energy calculations`, `Breaking bonds is...`, `Endothermic`, [`Exothermic`, `Neither`, `Both at once`], `Energy must be put in to break bonds.`],

    [`Chemical cells and fuel cells`, `A hydrogen fuel cell produces...`, `Water`, [`Carbon dioxide`, `Methane`, `Hydrogen peroxide`], `Hydrogen and oxygen react to give water and release energy.`],
    [`Chemical cells and fuel cells`, `The voltage of a simple cell depends on...`, `The difference in reactivity of the two metals`, [`The size of the electrodes`, `The colour of the electrolyte`, `The temperature only`], `A bigger difference gives a bigger voltage.`],

    // ---------- 5.6 Rate and extent of chemical change ----------
    [`Calculating rates of reaction`, `The mean rate of reaction is...`, `The amount of product formed (or reactant used) divided by time`, [`Time divided by the amount formed`, `Mass multiplied by time`, `Concentration multiplied by volume`], `Units might be g/s or cm3/s.`],
    [`Calculating rates of reaction`, `10 cm3 of gas is made in 5 seconds. What is the mean rate?`, `2 cm3/s`, [`50 cm3/s`, `0.5 cm3/s`, `15 cm3/s`], `10 / 5 = 2.`],

    [`Factors affecting rate`, `Which change would NOT increase the rate of reaction?`, `Decreasing the temperature`, [`Increasing the concentration`, `Increasing the surface area`, `Adding a catalyst`], `Higher temperature, concentration and surface area all speed up reactions.`],
    [`Factors affecting rate`, `Powdered marble reacts faster than lumps because...`, `The larger surface area exposes more particles`, [`It has more energy`, `It is a different substance`, `It has a lower activation energy`], `More collisions can occur per second.`],

    [`Collision theory and catalysts`, `According to collision theory, reactions happen when particles...`, `Collide with enough energy`, [`Just touch each other`, `Are heated to boiling`, `Collide slowly`], `The minimum energy is the activation energy.`],
    [`Collision theory and catalysts`, `Why does raising the temperature increase the rate?`, `Particles move faster, so collide more often and with more energy`, [`The activation energy falls`, `More particles are created`, `The concentration increases`], `More collisions become successful.`],

    [`Reversible reactions and equilibrium`, `Dynamic equilibrium means...`, `The forward and reverse reactions happen at the same rate in a closed system`, [`The reaction has stopped`, `All the reactants have been used up`, `The concentrations are always equal`], `The concentrations stay constant.`],
    [`Reversible reactions and equilibrium`, `Which symbol shows a reversible reaction?`, `A double arrow (⇌)`, [`A single arrow (->)`, `An equals sign (=)`, `A reverse arrow (<-)`], `If the forward reaction is exothermic, the reverse is endothermic.`],

    [`Le Chatelier's Principle`, `If temperature is increased for a reaction where the forward direction is exothermic, the equilibrium shifts...`, `Towards the reactants`, [`Towards the products`, `It does not shift`, `In both directions at once`], `The system opposes the change by favouring the endothermic direction.`],
    [`Le Chatelier's Principle`, `Increasing the pressure shifts the equilibrium towards the side with...`, `Fewer gas molecules`, [`More gas molecules`, `Equal numbers of gas molecules`, `No gases`], `The system opposes the increase in pressure.`],
  ],
};
