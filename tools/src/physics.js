// [topic, question, correct answer, [3 wrong answers], one-line explanation]
module.exports = {
  subject: 'Physics',
  qs: [
    // ---------- 6.1 Energy ----------
    [`Energy stores and systems`, `A ball rolls down a hill. Which energy transfer happens?`, `Gravitational potential to kinetic`, [`Kinetic to gravitational potential`, `Chemical to elastic`, `Thermal to nuclear`], `Some energy is also dissipated as thermal energy by friction.`],
    [`Energy stores and systems`, `Which of these is an energy store?`, `Elastic potential`, [`Heating`, `Waves`, `Electric current`], `Heating, waves and current are ways energy is transferred.`],

    [`Kinetic and potential energy`, `What is the kinetic energy of a 2 kg object moving at 3 m/s?`, `9 J`, [`6 J`, `18 J`, `3 J`], `KE = 0.5 x m x v^2 = 0.5 x 2 x 9.`],
    [`Kinetic and potential energy`, `What is the gravitational potential energy gained by a 5 kg mass raised 2 m? (g = 10 N/kg)`, `100 J`, [`10 J`, `50 J`, `25 J`], `GPE = m x g x h = 5 x 10 x 2.`],
    [`Kinetic and potential energy`, `Which equation gives the elastic potential energy of a stretched spring?`, `0.5 x k x e^2`, [`k x e`, `0.5 x m x v^2`, `m x g x h`], `k is the spring constant and e is the extension.`],

    [`Specific heat capacity`, `What is the unit of specific heat capacity?`, `J/kg C`, [`J/kg`, `J C`, `kg/J`], `It is the energy needed to raise 1 kg by 1 C.`],
    [`Specific heat capacity`, `How much energy is needed to heat 2 kg of water by 10 C? (c = 4200 J/kg C)`, `84 000 J`, [`8400 J`, `42 000 J`, `420 000 J`], `E = m x c x change in temperature = 2 x 4200 x 10.`],

    [`Power`, `Power is...`, `The rate of energy transfer`, [`The total energy transferred`, `Force multiplied by distance`, `Energy multiplied by time`], `Measured in watts (J/s).`],
    [`Power`, `A 60 W bulb is on for 10 s. How much energy does it transfer?`, `600 J`, [`6 J`, `70 J`, `0.17 J`], `E = P x t = 60 x 10.`],

    [`Conservation and dissipation of energy`, `Energy cannot be created or destroyed, only...`, `Transferred or dissipated`, [`Created`, `Destroyed`, `Used up`], `This is the principle of conservation of energy.`],
    [`Conservation and dissipation of energy`, `Which reduces unwanted energy transfer by friction?`, `Lubricating moving parts`, [`Adding more friction`, `Using thinner insulation`, `Increasing the speed`], `Thermal insulation reduces heat loss.`],

    [`Efficiency`, `A motor takes in 200 J and gives 150 J of useful output. What is its efficiency?`, `75%`, [`25%`, `133%`, `50%`], `Efficiency = useful output / total input.`],
    [`Efficiency`, `Efficiency can never be...`, `More than 100%`, [`Less than 50%`, `Zero`, `A decimal`], `Some energy is always dissipated.`],

    [`National and global energy resources`, `Which is a renewable energy resource?`, `Wind`, [`Coal`, `Oil`, `Natural gas`], `Renewable resources will not run out.`],
    [`National and global energy resources`, `A disadvantage of solar power is that it...`, `Only works well when it is sunny`, [`Produces carbon dioxide`, `Needs uranium`, `Uses up fuel`], `It also has a high initial cost.`],

    // ---------- 6.2 Electricity ----------
    [`Standard circuit diagram symbols`, `Which component measures current?`, `An ammeter connected in series`, [`A voltmeter connected in series`, `A thermistor`, `A resistor`], `A voltmeter is connected in parallel.`],
    [`Charge and current`, `A current of 3 A flows for 10 s. How much charge flows?`, `30 C`, [`0.3 C`, `13 C`, `3.3 C`], `Q = I x t.`],

    [`Current, resistance and potential difference`, `A component has 12 V across it and 3 A through it. What is its resistance?`, `4 ohms`, [`36 ohms`, `0.25 ohms`, `9 ohms`], `R = V / I.`],
    [`Current, resistance and potential difference`, `Which equation links potential difference, current and resistance?`, `V = I x R`, [`V = I / R`, `I = V x R`, `R = I x V`], `Potential difference is measured in volts.`],

    [`Resistance of components`, `As temperature increases, the resistance of a thermistor...`, `Decreases`, [`Increases`, `Stays the same`, `Doubles`], `Thermistors are used in temperature sensors.`],
    [`Resistance of components`, `The I-V graph of a filament lamp is...`, `Curved, because resistance increases as it heats up`, [`A straight line through the origin`, `A horizontal line`, `A vertical line`], `A fixed resistor gives a straight line.`],
    [`Resistance of components`, `A diode allows current to flow...`, `In one direction only`, [`In both directions`, `In neither direction`, `Only when it is hot`], `Diodes have very high resistance in the reverse direction.`],

    [`Series and parallel circuits`, `In a series circuit, the current is...`, `The same everywhere`, [`Shared between components`, `Greatest at the start`, `Zero at the end`], `The potential difference is shared.`],
    [`Series and parallel circuits`, `Two 6 ohm resistors are connected in series. What is the total resistance?`, `12 ohms`, [`3 ohms`, `6 ohms`, `36 ohms`], `Resistances in series add together.`],
    [`Series and parallel circuits`, `Adding another resistor in parallel makes the total resistance...`, `Smaller`, [`Larger`, `The same`, `Infinite`], `Current has more paths to flow through.`],

    [`Mains electricity`, `What are the potential difference and frequency of UK mains?`, `230 V and 50 Hz`, [`110 V and 60 Hz`, `230 V and 60 Hz`, `12 V and 50 Hz`], `Mains supply is alternating current.`],
    [`Mains electricity`, `What colour is the live wire?`, `Brown`, [`Blue`, `Green and yellow`, `Black`], `Neutral is blue and earth is green and yellow.`],
    [`Mains electricity`, `What is the purpose of the earth wire?`, `To stop the casing becoming live if there is a fault`, [`To carry current back to the supply`, `To increase the current`, `To make the appliance work faster`], `It carries current safely to the ground.`],

    [`Energy transfers and power`, `What is the power of a device with 230 V across it and 2 A through it?`, `460 W`, [`115 W`, `232 W`, `4600 W`], `P = V x I.`],
    [`Energy transfers and power`, `How much energy is transferred when 5 C of charge moves through 12 V?`, `60 J`, [`2.4 J`, `17 J`, `0.42 J`], `E = Q x V.`],

    [`The National Grid`, `Why does the National Grid transmit electricity at high potential difference?`, `To reduce the current, so less energy is lost as heat`, [`To increase the current`, `To use thicker cables`, `To avoid using transformers`], `Power loss depends on I^2 x R.`],
    [`The National Grid`, `A step-up transformer is used at the power station to...`, `Increase the potential difference for transmission`, [`Decrease the potential difference`, `Increase the current`, `Store electricity`], `Step-down transformers near homes reduce it again.`],

    [`Static electricity`, `When a balloon is rubbed on hair, it becomes charged because...`, `Electrons are transferred from one surface to the other`, [`Protons move between them`, `Electrons are created`, `Charge is destroyed`], `The object that gains electrons becomes negative.`],
    [`Static electricity`, `Two positively charged objects will...`, `Repel each other`, [`Attract each other`, `Have no effect on each other`, `Swap charge`], `Like charges repel and unlike charges attract.`],

    [`Electric fields`, `Electric field lines around a positive charge point...`, `Away from the charge`, [`Towards the charge`, `In circles around it`, `Parallel to each other`], `The field is strongest where the lines are closest.`],

    // ---------- 6.3 Particle model of matter ----------
    [`Density of materials`, `Density is calculated by...`, `Mass divided by volume`, [`Volume divided by mass`, `Mass multiplied by volume`, `Weight divided by area`], `Density = m / V.`],
    [`Density of materials`, `A block has a mass of 100 g and a volume of 50 cm3. What is its density?`, `2 g/cm3`, [`0.5 g/cm3`, `5000 g/cm3`, `150 g/cm3`], `100 / 50 = 2.`],

    [`Changes of state and internal energy`, `Internal energy is...`, `The total kinetic and potential energy of all the particles`, [`Only the kinetic energy of the particles`, `The temperature of a substance`, `The energy stored in the bonds only`], `Heating increases internal energy.`],
    [`Changes of state and internal energy`, `During melting, the temperature of a substance...`, `Stays constant`, [`Rises steadily`, `Falls`, `Doubles`], `The energy goes into breaking bonds, not raising temperature.`],

    [`Specific latent heat`, `Specific latent heat of fusion is the energy to...`, `Change 1 kg of a substance from solid to liquid with no temperature change`, [`Change 1 kg from liquid to gas`, `Raise 1 kg by 1 C`, `Change 1 kg from gas to liquid`], `Vaporisation is liquid to gas.`],
    [`Specific latent heat`, `How much energy is needed to melt 2 kg of ice? (L = 300 kJ/kg)`, `600 kJ`, [`150 kJ`, `302 kJ`, `1200 kJ`], `E = m x L.`],

    [`Particle motion in gases`, `Gas pressure is caused by...`, `Particles colliding with the walls of the container`, [`Particles colliding with each other`, `The mass of the gas`, `Gravity on the particles`], `More collisions or harder collisions mean higher pressure.`],
    [`Particle motion in gases`, `If a gas in a sealed container is heated, the pressure...`, `Increases`, [`Decreases`, `Stays the same`, `Falls to zero`], `The particles move faster and hit the walls harder and more often.`],

    [`Pressure in gases`, `At constant temperature, if the volume of a gas is halved, the pressure...`, `Doubles`, [`Halves`, `Stays the same`, `Quadruples`], `pressure x volume = constant.`],

    // ---------- 6.4 Atomic structure ----------
    [`The structure of an atom`, `What is the approximate radius of an atom?`, `1 x 10^-10 m`, [`1 x 10^-15 m`, `1 x 10^-6 m`, `1 x 10^-2 m`], `The nucleus is about 10,000 times smaller.`],
    [`The structure of an atom`, `An electron moves to a higher energy level by...`, `Absorbing electromagnetic radiation`, [`Emitting electromagnetic radiation`, `Gaining a proton`, `Losing a neutron`], `It emits radiation when it falls back down.`],

    [`Development of the model of the atom`, `Rutherford's scattering experiment showed that an atom has...`, `A small, dense, positively charged nucleus`, [`Electrons spread through a ball of positive charge`, `Neutrons in the outer shell`, `A negative nucleus`], `This replaced the plum pudding model.`],

    [`Radioactive decay and nuclear radiation`, `Which type of radiation is the most ionising?`, `Alpha`, [`Beta`, `Gamma`, `Radio waves`], `Alpha is the least penetrating: a few cm of air stops it.`],
    [`Radioactive decay and nuclear radiation`, `Which type of radiation is the most penetrating?`, `Gamma`, [`Alpha`, `Beta`, `They are all equal`], `Thick lead or concrete is needed to reduce it.`],
    [`Radioactive decay and nuclear radiation`, `An alpha particle is...`, `Two protons and two neutrons`, [`A fast-moving electron`, `A high-energy electromagnetic wave`, `A single neutron`], `Alpha decay reduces the mass number by 4 and the atomic number by 2.`],
    [`Radioactive decay and nuclear radiation`, `A beta particle is...`, `A fast-moving electron emitted from the nucleus`, [`A helium nucleus`, `An electromagnetic wave`, `A proton`], `A neutron turns into a proton.`],

    [`Half-life`, `What is the half-life of a radioactive isotope?`, `The time for the activity (or number of nuclei) to halve`, [`The time for the isotope to decay completely`, `Half the time it takes to be safe`, `The time for the mass to double`], `It cannot be changed by temperature or pressure.`],
    [`Half-life`, `A sample has an activity of 800 Bq and a half-life of 2 hours. What is its activity after 6 hours?`, `100 Bq`, [`400 Bq`, `200 Bq`, `0 Bq`], `Three half-lives: 800 to 400 to 200 to 100.`],

    [`Hazards and uses of radiation; contamination and irradiation`, `Irradiation is...`, `Exposure to radiation from a source outside the body`, [`Radioactive atoms getting on or into the body`, `A source becoming radioactive`, `A reduction in radioactivity`], `Contamination is when radioactive atoms get on or in an object.`],
    [`Hazards and uses of radiation; contamination and irradiation`, `Which is best for a medical tracer injected into the body?`, `A gamma emitter with a short half-life`, [`An alpha emitter with a long half-life`, `A beta emitter with a long half-life`, `An alpha emitter with a short half-life`], `Gamma can leave the body and a short half-life limits the dose.`],

    [`Background radiation and half-life uses`, `What is the largest source of natural background radiation in the UK?`, `Radon gas from rocks`, [`Cosmic rays`, `Nuclear power stations`, `Medical X-rays`], `Radon is released from certain rocks.`],
    [`Background radiation and half-life uses`, `Carbon-14 dating can be used to date...`, `Once-living material`, [`Any rock`, `Metals`, `Plastic`], `Living things take in carbon-14. It decays after death.`],

    [`Nuclear fission and fusion`, `Nuclear fission is...`, `The splitting of a large, unstable nucleus`, [`The joining of two light nuclei`, `The decay of an electron`, `The emission of a gamma ray only`], `It releases energy and neutrons.`],
    [`Nuclear fission and fusion`, `Nuclear fusion is...`, `The joining of two light nuclei to form a heavier nucleus`, [`The splitting of a heavy nucleus`, `The absorption of neutrons`, `Radioactive decay`], `It powers the Sun.`],
    [`Nuclear fission and fusion`, `In a nuclear reactor, the chain reaction is controlled by...`, `Control rods that absorb neutrons`, [`Moderator water flowing faster`, `Adding more uranium`, `Heating the reactor`], `The moderator slows neutrons down.`],

    // ---------- 6.5 Forces ----------
    [`Scalar and vector quantities`, `Which of these is a vector quantity?`, `Velocity`, [`Speed`, `Mass`, `Time`], `Vectors have magnitude and direction.`],
    [`Scalar and vector quantities`, `Which of these is a scalar quantity?`, `Speed`, [`Velocity`, `Displacement`, `Force`], `Scalars only have magnitude.`],

    [`Contact and non-contact forces; gravity`, `Which of these is a non-contact force?`, `Gravity`, [`Friction`, `Tension`, `Air resistance`], `Magnetic and electrostatic forces are also non-contact.`],
    [`Contact and non-contact forces; gravity`, `What is the weight of a 5 kg mass? (g = 10 N/kg)`, `50 N`, [`5 N`, `0.5 N`, `15 N`], `W = m x g.`],

    [`Resultant forces`, `A force of 10 N acts right and 4 N acts left. What is the resultant force?`, `6 N to the right`, [`14 N to the right`, `6 N to the left`, `40 N`], `Subtract forces acting in opposite directions.`],
    [`Resultant forces`, `A car travels at a constant velocity. The resultant force on it is...`, `Zero`, [`In the direction of travel`, `Backwards`, `Increasing`], `Balanced forces mean no acceleration.`],

    [`Work done and energy transfer`, `Work done is calculated as...`, `Force multiplied by distance moved`, [`Force divided by distance`, `Mass multiplied by speed`, `Force multiplied by time`], `1 joule is 1 newton-metre.`],
    [`Work done and energy transfer`, `A 20 N force pushes a box 3 m. How much work is done?`, `60 J`, [`23 J`, `6.7 J`, `17 J`], `W = F x s.`],

    [`Forces and elasticity`, `A spring with k = 20 N/m is stretched by 0.5 m. What force is needed?`, `10 N`, [`40 N`, `20.5 N`, `2.5 N`], `F = k x e.`],
    [`Forces and elasticity`, `The limit of proportionality is the point beyond which...`, `Extension is no longer proportional to force`, [`The spring becomes shorter`, `The force is zero`, `The spring returns to its original length`], `Beyond this point the graph curves.`],

    [`Moments, levers and gears`, `A moment is calculated as...`, `Force multiplied by the perpendicular distance from the pivot`, [`Force divided by distance`, `Force multiplied by time`, `Mass multiplied by gravity`], `Measured in newton-metres.`],
    [`Moments, levers and gears`, `A 20 N force acts 2 m to the left of a pivot. What force at 4 m to the right balances it?`, `10 N`, [`5 N`, `20 N`, `40 N`], `20 x 2 = 40 Nm, so F x 4 = 40.`],

    [`Pressure in fluids`, `Pressure is calculated as...`, `Force divided by area`, [`Force multiplied by area`, `Area divided by force`, `Mass divided by volume`], `Measured in pascals (N/m^2).`],
    [`Pressure in fluids`, `As altitude increases, atmospheric pressure...`, `Decreases`, [`Increases`, `Stays the same`, `Doubles`], `There is less air above you.`],
    [`Pressure in fluids`, `A force of 200 N acts on an area of 4 m^2. What is the pressure?`, `50 Pa`, [`800 Pa`, `204 Pa`, `0.02 Pa`], `P = F / A.`],

    [`Distance, displacement, speed and velocity`, `What is the typical walking speed of a person?`, `About 1.5 m/s`, [`About 15 m/s`, `About 0.15 m/s`, `About 150 m/s`], `Running is about 3 m/s and cycling about 6 m/s.`],
    [`Distance, displacement, speed and velocity`, `A runner covers 100 m in 20 s. What is the average speed?`, `5 m/s`, [`2000 m/s`, `0.2 m/s`, `120 m/s`], `Speed = distance / time.`],

    [`Acceleration`, `A car accelerates from 0 to 20 m/s in 5 s. What is its acceleration?`, `4 m/s^2`, [`100 m/s^2`, `25 m/s^2`, `0.25 m/s^2`], `a = change in velocity / time.`],
    [`Acceleration`, `A skydiver reaches terminal velocity when...`, `The resultant force is zero`, [`Air resistance is zero`, `Weight is zero`, `They stop moving`], `Weight and air resistance are balanced.`],

    [`Distance-time and velocity-time graphs`, `On a distance-time graph, the gradient represents...`, `Speed`, [`Acceleration`, `Distance travelled`, `Time`], `A horizontal line means the object is stationary.`],
    [`Distance-time and velocity-time graphs`, `On a velocity-time graph, the area under the line represents...`, `Distance travelled`, [`Acceleration`, `Speed`, `Force`], `The gradient gives acceleration.`],

    [`Newton's Laws of motion`, `A 5 kg object accelerates at 2 m/s^2. What is the resultant force?`, `10 N`, [`2.5 N`, `7 N`, `3 N`], `F = m x a.`],
    [`Newton's Laws of motion`, `Newton's Third Law states that...`, `Every force has an equal and opposite reaction force on a different object`, [`Force equals mass times acceleration`, `Objects at rest stay at rest`, `Energy is conserved`], `The two forces act on different objects.`],
    [`Newton's Laws of motion`, `Newton's First Law states that an object with no resultant force...`, `Stays at rest or keeps moving at constant velocity`, [`Always slows down`, `Always accelerates`, `Moves in a circle`], `This is the idea of inertia.`],

    [`Stopping distance`, `Stopping distance is equal to...`, `Thinking distance plus braking distance`, [`Braking distance minus thinking distance`, `Speed multiplied by time`, `Reaction time divided by speed`], `Both parts increase with speed.`],
    [`Stopping distance`, `Which factor increases the thinking distance?`, `Being tired or having taken alcohol`, [`Worn brakes`, `A wet road`, `Worn tyres`], `Brakes, tyres and road condition affect braking distance.`],

    [`Momentum`, `What is the momentum of a 2 kg object moving at 3 m/s?`, `6 kg m/s`, [`1.5 kg m/s`, `5 kg m/s`, `18 kg m/s`], `p = m x v.`],
    [`Momentum`, `In a closed system, the total momentum before a collision is...`, `Equal to the total momentum after`, [`Greater than after`, `Less than after`, `Always zero`], `This is the conservation of momentum.`],
  ],
};
