// AQA GCSE required practicals (Biology RP1-10, Chemistry RP1-8, Physics RP1-10).
// Short 1-2 mark style questions: method, variables, safety, results and "why did we..." questions.
// [topic, question, correct answer, [3 wrong answers], one-line explanation]
module.exports = {
  subject: 'Required Practicals',
  qs: [
    // ================= BIOLOGY =================
    // ---- RP1 Microscopy ----
    [`RP1: Microscopy`, `Which objective lens should you start with when using a light microscope?`, `The lowest power lens`, [`The highest power lens`, `Whichever is clearest`, `The oil immersion lens`], `Start low to find the specimen, then increase magnification.`],
    [`RP1: Microscopy`, `Why is a cover slip lowered onto the slide at an angle?`, `To avoid trapping air bubbles`, [`To squash the cells`, `To stain the cells`, `To keep the slide warm`], `Air bubbles would hide the cells.`],
    [`RP1: Microscopy`, `Why is a stain, such as iodine, added to a specimen?`, `To make structures easier to see`, [`To kill bacteria`, `To magnify the image`, `To stop the cells moving`], `Stain adds contrast.`],
    [`RP1: Microscopy`, `Which focusing knob do you use first to bring the specimen into focus?`, `The coarse focus`, [`The fine focus`, `The stage clips`, `The diaphragm`], `Then use the fine focus to sharpen the image.`],
    [`RP1: Microscopy`, `When drawing what you see through a microscope, what should you do?`, `Use a sharp pencil, clear lines and no shading, and label the drawing`, [`Use coloured pens and shading`, `Draw only the nucleus`, `Draw as small as possible`], `Include a title and the magnification.`],

    // ---- RP2 Microbiology ----
    [`RP2: Microbiology (Triple only)`, `Why is the inoculating loop passed through a flame before use?`, `To sterilise it and kill unwanted microorganisms`, [`To make it cool`, `To make it stick to agar`, `To add nutrients`], `It prevents contamination (aseptic technique).`],
    [`RP2: Microbiology (Triple only)`, `Why are school cultures incubated at about 25°C?`, `To reduce the chance of growing harmful pathogens`, [`Because bacteria cannot grow at 37°C`, `To kill the bacteria`, `To speed up growth to the maximum`], `Human pathogens grow best at about 37°C.`],
    [`RP2: Microbiology (Triple only)`, `How can you tell which antibiotic is most effective on an agar plate?`, `It has the largest clear zone around its disc`, [`It has the smallest clear zone`, `The agar turns green`, `There are the most bacteria`], `Bacteria cannot grow in the clear zone.`],
    [`RP2: Microbiology (Triple only)`, `What is the purpose of a control disc soaked in sterile water?`, `To show that the clear zones are caused by the antibiotics, not the paper`, [`To feed the bacteria`, `To sterilise the plate`, `To mark the position of the antibiotic`], `It gives a comparison with no antibiotic.`],
    [`RP2: Microbiology (Triple only)`, `Why is the lid of the Petri dish taped on after inoculating?`, `To stop microorganisms entering or escaping`, [`To keep the plate warm`, `To keep air out completely`, `To stop condensation`], `Tape in two places only; the dish is not sealed completely.`],

    // ---- RP3 Osmosis ----
    [`RP3: Osmosis`, `In the potato osmosis experiment, what is the independent variable?`, `The concentration of the sucrose solution`, [`The mass of the potato`, `The time`, `The temperature`], `The dependent variable is the change in mass.`],
    [`RP3: Osmosis`, `Why are the potato cylinders blotted with a paper towel before weighing?`, `To remove excess liquid from the surface`, [`To warm them`, `To make them smaller`, `To stop osmosis`], `Water on the surface would give a false mass.`],
    [`RP3: Osmosis`, `Why is the percentage change in mass calculated rather than just the change in mass?`, `The cylinders may have different starting masses`, [`It is quicker`, `It removes the need to weigh`, `It makes the graph steeper`], `It allows a fair comparison.`],
    [`RP3: Osmosis`, `What does the point where the graph crosses the x-axis (no change in mass) tell you?`, `The concentration of the solution inside the potato cells`, [`The mass of the potato`, `The temperature`, `The rate of diffusion`], `There is no net movement of water.`],
    [`RP3: Osmosis`, `Name one control variable in the potato osmosis experiment.`, `The size (surface area and length) of the potato cylinders`, [`The sucrose concentration`, `The mass change`, `The colour`], `Also volume of solution, temperature and time.`],

    // ---- RP4 Food tests ----
    [`RP4: Food tests`, `What colour does Benedict's solution turn with reducing sugar when heated?`, `Brick red (via green, yellow and orange)`, [`Blue-black`, `Purple`, `Colourless`], `Heat in a water bath.`],
    [`RP4: Food tests`, `What colour does iodine solution turn when starch is present?`, `Blue-black`, [`Brick red`, `Purple`, `Colourless`], `It stays orange-brown if no starch.`],
    [`RP4: Food tests`, `What colour does Biuret solution turn when protein is present?`, `Purple (lilac)`, [`Brick red`, `Blue-black`, `Cloudy white`], `It starts blue.`],
    [`RP4: Food tests`, `Which test shows that lipids are present?`, `Sudan III stain, which forms a red layer on top (or the ethanol emulsion test)`, [`Benedict's solution`, `Iodine solution`, `Biuret solution`], `Lipids do not dissolve in water.`],
    [`RP4: Food tests`, `Why must you wear eye protection when carrying out the Benedict's test?`, `The solution is hot and can splash`, [`It is radioactive`, `It makes the eyes dry`, `The test gives off toxic gas`], `Use a water bath and tongs.`],

    // ---- RP5 Enzymes ----
    [`RP5: Enzymes`, `In the amylase and pH experiment, what does it mean if iodine solution stays orange-brown?`, `The starch has been broken down`, [`There is still starch`, `The enzyme has been denatured`, `The sample is too hot`], `Amylase digests starch.`],
    [`RP5: Enzymes`, `Why are buffer solutions used in the enzyme experiment?`, `To keep the pH constant at each value`, [`To change the temperature`, `To speed up the enzyme`, `To add starch`], `pH is the independent variable.`],
    [`RP5: Enzymes`, `Why should the mixtures be kept in a water bath?`, `To keep the temperature constant`, [`To change the pH`, `To dissolve the starch`, `To kill the enzyme`], `Temperature is a control variable.`],
    [`RP5: Enzymes`, `How can you calculate the rate of the reaction from the time taken for starch to disappear?`, `Rate = 1 ÷ time`, [`Rate = time ÷ 1`, `Rate = time × 2`, `Rate = time − 1`], `Shorter time means a faster rate.`],
    [`RP5: Enzymes`, `Why are samples tested on a spotting tile at regular intervals?`, `To find the time when the starch is all broken down`, [`To make a colour chart`, `To heat the enzyme`, `To stop the reaction`], `Test every 30 seconds with iodine.`],

    // ---- RP6 Photosynthesis ----
    [`RP6: Photosynthesis`, `In the pondweed experiment, what is the independent variable when the lamp is moved?`, `The distance of the lamp (light intensity)`, [`The number of bubbles`, `The temperature`, `The type of pondweed`], `The dependent variable is the number of bubbles per minute.`],
    [`RP6: Photosynthesis`, `What gas is given off as bubbles by pondweed during photosynthesis?`, `Oxygen`, [`Carbon dioxide`, `Hydrogen`, `Nitrogen`], `Oxygen is a product of photosynthesis.`],
    [`RP6: Photosynthesis`, `Why is a beaker of water placed between the lamp and the pondweed?`, `To absorb heat so the temperature stays constant`, [`To increase light intensity`, `To add carbon dioxide`, `To make bubbles larger`], `Temperature is a control variable.`],
    [`RP6: Photosynthesis`, `Why is sodium hydrogencarbonate added to the water?`, `It provides carbon dioxide so it is not a limiting factor`, [`It adds oxygen`, `It reduces light`, `It kills bacteria`], `Carbon dioxide is needed for photosynthesis.`],
    [`RP6: Photosynthesis`, `How could the measurement of oxygen be made more accurate than counting bubbles?`, `Collect the gas in a gas syringe or measuring tube and measure its volume`, [`Count the bubbles faster`, `Use a bigger lamp`, `Use more plants`], `Bubbles vary in size.`],

    // ---- RP7 Reaction time ----
    [`RP7: Reaction time`, `In the ruler drop test, what is measured to find the reaction time?`, `The distance the ruler falls before it is caught`, [`The time on a stopwatch`, `The weight of the ruler`, `The speed of the hand`], `The distance is converted to a time.`],
    [`RP7: Reaction time`, `Why should the test be repeated and a mean calculated?`, `To reduce the effect of random errors`, [`To make the results bigger`, `To remove the need for a control`, `To change the variable`], `More repeats improve reliability.`],
    [`RP7: Reaction time`, `Name one control variable in a reaction-time investigation.`, `The same person drops the ruler, and the same hand is used to catch it`, [`The distance the ruler falls`, `The person's age only`, `The result`], `Keep everything else the same.`],
    [`RP7: Reaction time`, `Which part of the nervous system processes the signal from the eyes to the hand in the ruler test?`, `The brain and spinal cord (the CNS)`, [`The hormones`, `The muscles only`, `The sensory organs only`], `Reaction time is the time between stimulus and response.`],

    // ---- RP8 Plant responses ----
    [`RP8: Plant responses (Triple only)`, `What is phototropism?`, `Growth of a plant shoot towards light`, [`Growth of roots towards water`, `Growth away from gravity`, `Growth of leaves in the dark`], `Shoots show positive phototropism.`],
    [`RP8: Plant responses (Triple only)`, `Which plant hormone causes cells on the shaded side of a shoot to elongate?`, `Auxin`, [`Insulin`, `Adrenaline`, `Chlorophyll`], `Auxin moves to the shaded side.`],
    [`RP8: Plant responses (Triple only)`, `What would be a suitable control in a phototropism experiment?`, `Seedlings with light from all sides (or in the dark)`, [`Seedlings with light from one side only`, `No seedlings`, `Seedlings in the fridge`], `The control shows growth without a one-sided stimulus.`],

    // ---- RP9 Field investigation ----
    [`RP9: Field investigation`, `Why should quadrats be placed randomly?`, `To avoid bias in the results`, [`To save time`, `To find the most plants`, `To make results look neat`], `Use random numbers as coordinates.`],
    [`RP9: Field investigation`, `How can you estimate the population size of a plant in a field using quadrats?`, `Mean number per quadrat ÷ quadrat area × total area`, [`Total number counted × 2`, `Highest count in any quadrat`, `Sum of all quadrat areas`], `Use enough quadrats for a good estimate.`],
    [`RP9: Field investigation`, `When would you use a transect instead of random quadrats?`, `To investigate how a species changes along a gradient, such as away from a tree`, [`To count every plant`, `To avoid bias`, `To measure soil mass`], `Place quadrats at regular intervals along a line.`],
    [`RP9: Field investigation`, `Why should a large number of quadrats be used?`, `To give more reliable, representative results`, [`To save time`, `To make the area look larger`, `To include rare species only`], `Small samples may not be typical.`],
    [`RP9: Field investigation`, `What could you use to measure light intensity in a field investigation?`, `A light meter`, [`A pH probe`, `A thermometer`, `A metre ruler`], `Other factors: soil pH, moisture and temperature.`],

    // ---- RP10 Rate of decay ----
    [`RP10: Rate of decay (Triple only)`, `In the milk and lipase experiment, why does the indicator change colour?`, `Fatty acids are produced and lower the pH`, [`The milk warms up`, `Lactose is made`, `Carbon dioxide forms`], `Phenolphthalein turns from pink to colourless in acid.`],
    [`RP10: Rate of decay (Triple only)`, `Why are water baths used in the decay experiment?`, `To keep each reaction mixture at a fixed temperature`, [`To change the pH`, `To add enzyme`, `To make bubbles`], `Temperature is the independent variable.`],
    [`RP10: Rate of decay (Triple only)`, `What is measured in the milk and lipase decay practical?`, `The time taken for the indicator to change colour`, [`The mass of milk`, `The volume of lipase`, `The number of bacteria`], `Rate = 1 ÷ time.`],

    // ================= CHEMISTRY =================
    // ---- RP1 Making a soluble salt ----
    [`RP1: Making a soluble salt`, `Why is excess copper oxide added to the acid?`, `To make sure all the acid reacts`, [`To make the reaction cooler`, `To make the salt insoluble`, `To change the colour`], `The unreacted solid is filtered off.`],
    [`RP1: Making a soluble salt`, `How is the unreacted copper oxide removed from the mixture?`, `Filtration`, [`Distillation`, `Chromatography`, `Evaporation`], `The salt solution passes through the filter paper.`],
    [`RP1: Making a soluble salt`, `Why is the solution not evaporated to dryness?`, `Crystals form better when the solution is left to crystallise slowly from a saturated solution`, [`The acid would explode`, `The salt would burn`, `The filtrate would turn blue`], `Heat to the point of crystallisation, then leave to cool.`],
    [`RP1: Making a soluble salt`, `Why is the sulfuric acid warmed before adding copper oxide?`, `To speed up the reaction`, [`To make it more concentrated`, `To neutralise it`, `To filter it`], `Use a water bath, not a flame.`],

    // ---- RP2 Titration ----
    [`RP2: Titration`, `Which piece of equipment measures exactly 25.0 cm³ of alkali into the conical flask?`, `A pipette`, [`A beaker`, `A burette`, `A measuring cylinder`], `The burette adds the acid.`],
    [`RP2: Titration`, `Why is a white tile placed under the conical flask?`, `To make the colour change easier to see`, [`To keep the flask warm`, `To neutralise spills`, `To weigh the flask`], `It improves the accuracy.`],
    [`RP2: Titration`, `Why is the acid added drop by drop near the end-point?`, `To avoid adding too much`, [`To make the reaction faster`, `To save acid`, `To mix the indicator`], `A single drop can change the colour.`],
    [`RP2: Titration`, `What colour is methyl orange in an alkali?`, `Yellow`, [`Red`, `Orange`, `Colourless`], `It is red in acid and orange at the end-point.`],
    [`RP2: Titration`, `What are concordant results?`, `Results that agree to within 0.10 cm³`, [`Results that are identical`, `Results that are too high`, `Results that use different indicators`], `Take a mean of the concordant results only.`],

    // ---- RP3 Electrolysis ----
    [`RP3: Electrolysis`, `What is the test for hydrogen gas?`, `A lit splint makes a squeaky pop`, [`A glowing splint relights`, `Damp litmus paper is bleached`, `Limewater turns cloudy`], `Hydrogen forms at the cathode in most aqueous solutions.`],
    [`RP3: Electrolysis`, `What is the test for oxygen gas?`, `A glowing splint relights`, [`A lit splint makes a squeaky pop`, `Damp litmus paper is bleached`, `Limewater turns milky`], `Oxygen forms at the anode when no halide is present.`],
    [`RP3: Electrolysis`, `What is the test for chlorine gas?`, `It bleaches damp litmus paper`, [`It relights a glowing splint`, `It makes a squeaky pop`, `It turns limewater cloudy`], `Chlorine forms at the anode from chloride solutions.`],
    [`RP3: Electrolysis`, `Why are inert (graphite) electrodes used in electrolysis of solutions?`, `They do not react with the products`, [`They are cheaper`, `They melt easily`, `They are magnetic`], `Reactive electrodes would take part in the reaction.`],

    // ---- RP4 Temperature changes ----
    [`RP4: Temperature changes`, `Why is a polystyrene cup used in a temperature change experiment?`, `It is a good insulator and reduces energy loss to the surroundings`, [`It is a conductor`, `It reacts with acids`, `It is transparent`], `A lid reduces losses further.`],
    [`RP4: Temperature changes`, `Why is the mixture stirred?`, `To make sure the temperature is even throughout`, [`To make it react faster only`, `To mix in air`, `To stop the reaction`], `The thermometer then gives a reliable reading.`],
    [`RP4: Temperature changes`, `What do you record in a neutralisation temperature change experiment?`, `The highest temperature reached`, [`The final volume`, `The starting pH`, `The time only`], `The temperature change shows how much energy was released.`],

    // ---- RP5 Rates of reaction ----
    [`RP5: Rates of reaction`, `In the sodium thiosulfate and acid reaction, why does the solution turn cloudy?`, `Solid sulfur forms`, [`Carbon dioxide forms`, `Hydrogen forms`, `The acid is neutralised`], `The cross disappears from view.`],
    [`RP5: Rates of reaction`, `How do you calculate the rate in the disappearing cross experiment?`, `Rate = 1 ÷ time taken for the cross to disappear`, [`Rate = time × 2`, `Rate = mass ÷ time`, `Rate = volume × time`], `A shorter time means a faster rate.`],
    [`RP5: Rates of reaction`, `What happens to the rate of reaction if the concentration of a reactant is increased?`, `It increases, because there are more frequent collisions`, [`It decreases`, `It stays the same`, `It stops`], `More particles per volume.`],
    [`RP5: Rates of reaction`, `What can be used to measure the rate when a gas is produced?`, `A gas syringe, collecting the volume in a set time`, [`A thermometer only`, `A filter paper`, `A burette`], `Or measure the loss of mass on a balance.`],

    // ---- RP6 Chromatography ----
    [`RP6: Chromatography`, `Why is the start line drawn in pencil rather than pen?`, `Pencil does not dissolve in the solvent`, [`Pencil is darker`, `Pen runs faster`, `Pencil dries quicker`], `Ink would run up the paper.`],
    [`RP6: Chromatography`, `Why must the start line be above the level of the solvent?`, `So the samples don't dissolve into the solvent`, [`To keep the paper dry`, `To slow the solvent`, `To make larger spots`], `The solvent rises up the paper.`],
    [`RP6: Chromatography`, `A spot travels 3 cm while the solvent travels 6 cm. What is the Rf value?`, `0.5`, [`2`, `18`, `0.3`], `Rf = distance moved by spot ÷ distance moved by solvent.`],
    [`RP6: Chromatography`, `What does a single spot on a chromatogram suggest?`, `The substance is probably pure`, [`It is a mixture`, `It has a high Rf`, `It contains ink`], `A mixture gives more than one spot.`],

    // ---- RP7 Identifying ions ----
    [`RP7: Identifying ions (Triple only)`, `What colour is a sodium flame test?`, `Yellow`, [`Lilac`, `Crimson`, `Green`], `Potassium is lilac, lithium crimson, calcium orange-red, copper green.`],
    [`RP7: Identifying ions (Triple only)`, `What colour is a potassium flame test?`, `Lilac`, [`Yellow`, `Orange-red`, `Green`], `Use a clean wire loop.`],
    [`RP7: Identifying ions (Triple only)`, `What colour precipitate forms when sodium hydroxide is added to copper(II) ions?`, `Blue`, [`Green`, `Brown`, `White`], `Iron(II) is green and iron(III) is brown.`],
    [`RP7: Identifying ions (Triple only)`, `Which test shows that a solution contains sulfate ions?`, `Add dilute hydrochloric acid, then barium chloride: a white precipitate forms`, [`Add silver nitrate: a cream precipitate`, `Add limewater`, `Add sodium hydroxide: a blue precipitate`], `The acid removes carbonate ions first.`],
    [`RP7: Identifying ions (Triple only)`, `What colour precipitate does silver nitrate give with chloride ions?`, `White`, [`Cream`, `Yellow`, `Blue`], `Bromide gives cream and iodide gives yellow.`],

    // ---- RP8 Water purification ----
    [`RP8: Water purification (Triple only)`, `What is removed from salty water by distillation?`, `The dissolved salt (water is boiled off and condensed)`, [`The water`, `The sodium ions only`, `The colour`], `The pure water is collected in the condenser.`],
    [`RP8: Water purification (Triple only)`, `How can you test whether distilled water is pure?`, `It boils at exactly 100°C and leaves no residue when evaporated`, [`It turns blue`, `It has a pH of 10`, `It conducts electricity`], `Pure water boils at 100°C.`],
    [`RP8: Water purification (Triple only)`, `What is potable water?`, `Water that is safe to drink`, [`Pure water`, `Distilled water`, `Sea water`], `It need not be pure: it can contain dissolved substances.`],

    // ================= PHYSICS =================
    // ---- RP1 Specific heat capacity ----
    [`RP1: Specific heat capacity`, `Why is the block wrapped in insulation?`, `To reduce energy transferred to the surroundings`, [`To make it heavier`, `To make it heat more slowly`, `To protect the thermometer`], `This makes the result more accurate.`],
    [`RP1: Specific heat capacity`, `Why is a little oil placed in the thermometer hole of the block?`, `To improve thermal contact so the thermometer reads the block's temperature`, [`To reduce friction`, `To stop the block overheating`, `To lubricate the heater`], `Air is a poor conductor.`],
    [`RP1: Specific heat capacity`, `A 40 W heater is on for 100 s and a 0.5 kg block rises by 10°C. What is the specific heat capacity?`, `800 J/kg°C`, [`80 J/kg°C`, `8000 J/kg°C`, `200 J/kg°C`], `E = 40 × 100 = 4000 J; c = 4000 ÷ (0.5 × 10).`],

    // ---- RP2 Thermal insulation ----
    [`RP2: Thermal insulation (Physics only)`, `In a thermal insulation experiment, how do you decide which material is the best insulator?`, `The beaker with the smallest temperature drop in the same time`, [`The beaker that cools fastest`, `The heaviest material`, `The cheapest material`], `Insulators reduce energy transfer.`],
    [`RP2: Thermal insulation (Physics only)`, `Name two control variables in an insulation investigation.`, `Starting temperature of the water and the volume of water`, [`The type of insulation and the temperature drop`, `The colour of the beaker and the type of insulation`, `The time and the temperature drop`], `Thickness of insulation and room temperature must also be the same.`],

    // ---- RP3 Resistance ----
    [`RP3: Resistance`, `In the resistance of a wire experiment, why should the current be kept low?`, `A large current would heat the wire and change its resistance`, [`To save the ammeter`, `To make the wire longer`, `To stop the battery draining`], `Temperature changes resistance.`],
    [`RP3: Resistance`, `How should an ammeter and a voltmeter be connected to the wire?`, `Ammeter in series, voltmeter in parallel`, [`Both in series`, `Both in parallel`, `Ammeter in parallel, voltmeter in series`], `The voltmeter measures the potential difference across the wire.`],
    [`RP3: Resistance`, `What does a graph of resistance against length for a wire look like?`, `A straight line through the origin`, [`A curve`, `A horizontal line`, `A downward curve`], `Resistance is directly proportional to length.`],

    // ---- RP4 I-V characteristics ----
    [`RP4: I-V characteristics`, `What is the purpose of the variable resistor in an I-V circuit?`, `To change the current and potential difference`, [`To measure current`, `To measure potential difference`, `To increase resistance of the lamp`], `Several readings are needed to plot a graph.`],
    [`RP4: I-V characteristics`, `Which component gives a straight line through the origin on an I-V graph?`, `A fixed resistor at constant temperature`, [`A filament lamp`, `A diode`, `A thermistor`], `It is an ohmic conductor.`],
    [`RP4: I-V characteristics`, `What does the I-V graph of a diode show?`, `Current only flows in one direction`, [`Resistance is constant`, `Current flows equally in both directions`, `Resistance falls as current rises in both directions`], `Almost no current flows in reverse.`],
    [`RP4: I-V characteristics`, `Why does the I-V graph of a filament lamp curve?`, `Its resistance increases as it gets hotter`, [`Its resistance decreases as it heats`, `Its current is constant`, `It is a diode`], `Greater ion vibration means more collisions.`],

    // ---- RP5 Density ----
    [`RP5: Density`, `How can you find the volume of an irregular solid?`, `Submerge it in a displacement (eureka) can and measure the water displaced`, [`Measure its sides with a ruler`, `Weigh it`, `Heat it`], `Use a measuring cylinder to collect the water.`],
    [`RP5: Density`, `An object has a mass of 120 g and a volume of 40 cm³. What is its density?`, `3 g/cm³`, [`0.33 g/cm³`, `80 g/cm³`, `4800 g/cm³`], `Density = mass ÷ volume.`],
    [`RP5: Density`, `How do you find the mass of a liquid using a measuring cylinder and balance?`, `Weigh the empty cylinder, then weigh it with the liquid and subtract`, [`Weigh only the liquid`, `Measure its volume only`, `Heat the liquid`], `Subtract the container's mass.`],

    // ---- RP6 Force and extension ----
    [`RP6: Force and extension`, `How is the extension of a spring calculated?`, `New length minus original length`, [`New length plus original length`, `Original length only`, `The force divided by the length`], `Measure with the ruler at eye level.`],
    [`RP6: Force and extension`, `What does Hooke's law say about a spring?`, `Extension is directly proportional to force, up to the limit of proportionality`, [`Extension is inversely proportional to force`, `Force is constant`, `Extension is the same for any force`], `The graph is a straight line through the origin.`],
    [`RP6: Force and extension`, `What does the gradient of a force–extension graph (in the linear region) represent?`, `The spring constant`, [`The original length`, `The elastic limit`, `The work done`], `F = k × e.`],
    [`RP6: Force and extension`, `Why should the ruler be read at eye level?`, `To avoid parallax error`, [`To make it faster`, `To keep the spring still`, `To reduce friction`], `Looking from an angle changes the apparent reading.`],

    // ---- RP7 Acceleration ----
    [`RP7: Acceleration`, `In the trolley acceleration experiment, why are masses moved from the trolley to the hanger rather than added?`, `To keep the total mass of the system constant`, [`To make the trolley heavier`, `To reduce friction`, `To increase the time`], `Only the force changes.`],
    [`RP7: Acceleration`, `In the acceleration experiment investigating force, what is the independent variable?`, `The force (weight on the hanger)`, [`The acceleration`, `The trolley's mass`, `The time`], `The dependent variable is acceleration.`],
    [`RP7: Acceleration`, `Which equipment can be used to find the trolley's speed at two points?`, `Light gates connected to a data logger`, [`A thermometer`, `A balance`, `A newtonmeter`], `Acceleration = change in speed ÷ time.`],

    // ---- RP8 Waves ----
    [`RP8: Waves`, `A wave has a frequency of 5 Hz and a wavelength of 2 cm. What is its speed?`, `10 cm/s`, [`2.5 cm/s`, `7 cm/s`, `0.4 cm/s`], `v = f × λ.`],
    [`RP8: Waves`, `How can you make a more accurate measurement of wavelength in a ripple tank?`, `Measure the length of several wavelengths and divide by the number`, [`Measure just one wavelength`, `Use a longer lamp`, `Use fewer waves`], `This reduces the error in one measurement.`],
    [`RP8: Waves`, `How can you measure the frequency of ripples in a ripple tank?`, `Count the number of waves passing a point in a set time`, [`Measure the water depth`, `Weigh the water`, `Measure the amplitude`], `Frequency = waves per second.`],

    // ---- RP9 Reflection and refraction ----
    [`RP9: Reflection and refraction (Physics only)`, `From which line are angles of incidence and refraction measured?`, `The normal`, [`The surface of the block`, `The ray box`, `The tangent`], `The normal is at 90° to the surface.`],
    [`RP9: Reflection and refraction (Physics only)`, `What happens to a ray of light as it enters a glass block from air?`, `It bends towards the normal`, [`It bends away from the normal`, `It does not change direction`, `It reflects completely`], `Light slows down in the denser material.`],
    [`RP9: Reflection and refraction (Physics only)`, `Why should a narrow beam of light be used?`, `To make the ray easy to trace and the angles easier to measure accurately`, [`To make the glass heat up`, `To increase reflection`, `To save the bulb`], `A wide beam gives blurry edges.`],

    // ---- RP10 Infrared radiation ----
    [`RP10: Infrared radiation (Physics only)`, `Which surface is the best emitter of infrared radiation?`, `Matt black`, [`Shiny silver`, `Shiny white`, `Shiny black`], `Dull dark surfaces emit and absorb the most.`],
    [`RP10: Infrared radiation (Physics only)`, `In the Leslie cube experiment, why must the detector be placed the same distance from each surface?`, `So the comparison is fair`, [`To increase the temperature`, `To reduce emission`, `To change the colour`], `Distance is a control variable.`],
    [`RP10: Infrared radiation (Physics only)`, `What is the Leslie cube filled with?`, `Hot water`, [`Ice`, `Oil`, `Air`], `The surfaces are at the same temperature.`]
  ]
};
