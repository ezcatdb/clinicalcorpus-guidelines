---
layout: entry
title: "Certainty levels"
order: 2
---

For those events with “speculation” attributes, Certainty levels can be determined according to the Speculation cues/Method cues. However, in some cases, it is difficult to determine the certainty levels, so that those events do not have any certainty levels. 

~~~ ann
Superposition suggests nucleophilic attack by the 4'-phosphopantetheine on the alpha-phosphate of ATP.
T1 MethodCue 0 13 Superposition
T2 SpeculationCue 14 22 suggests
T3 NucleophilicAttack 23 42 nucleophilic attack
T4 OtherCompound 50 71 4'-phosphopantetheine
T5 FunctionalGroup 78 94 alpha-phosphate
T6 OtherCompound 98 101 ATP
E1 NucleophilicAttack:T3 Agent:T4 Theme:T5 Cue:T2 Cue2:T1
R1 whole_part Arg1:T6 Arg2:T5
A1 Speculation E1
A2 Certainty E1 Probable
~~~
~~~ ann
Asp40 is positioned appropriately to protonate the purine leaving group.
T1 AminoAcid 0 5 Asp40
T2 SpeculationCue 9 33 positioned appropriately
T3 Protonation 37 46 protonate
T4 OtherCompound 51 57 purine
T5 EntityProperty 58 71 leaving group
E1 Protonation:T3 Agent:T1 Theme:T4 Cue:T2
R1 corresponds_to Arg1:T5 Arg2:T4
A1 Speculation E1
A2 Certainty E1 Confirmed
A3 EntityAttribute T5 ReactivePart
~~~
~~~ ann
Structural studies show that arcabose is modified upon binding.
T1 MethodCue 0 18 Structural studies
T2 SpeculationCue 19 23 show
T3 OtherCompound 29 37 arcabose
T4 BondFormation 41 49 modified
T5 Interaction 55 62 binding
E1 BondFormation:T4 Theme:T3 Cue:T1 Cue2:T2
E2 Interaction:T5 Theme:T3 Cue:T1 Cue2:T2
A1 Speculation E1
A2 Certainty E1 Confirmed
A3 Speculation E2
A4 Certainty E2 Confirmed
~~~
~~~ ann
Molecular mechanics calculations show possible binding conformations.
T1 MethodCue 0 32 Molecular mechanics calculations
T2 SpeculationCue 33 37 show
T3 SpeculationCue 38 46 possible
T4 Interaction 47 54 binding
T5 EntityProperty 55 68 conformations
E1 Interaction:T4 Agent:T5 Cue:T1 Cue2:T2 Cue3:T3
A1 Speculation E1
A2 Certainty E1 Probable
~~~

The following table indicates Speculation cues/Method cues and corresponding certainty levels
(Confirmed, Probable, Unlikely):

<div style="margin:1em" markdown="1">

| Speculation cues/Method cues | Certainty | Comments |
|------------------|-----------|----------|
| 31P NMR analyses | Confirmed | "Probable" combined with "suggest" |
| Analysis of this structure | Confirmed | "Probable" combined with "suggest" |
| EPR studies | Confirmed | - |
| Solvent isotope effect studies | Confirmed | - |
| Steady-state kinetic analysis | Confirmed | - |
| Structural analyses | Confirmed | - |
| Structural analysis | Confirmed | - |
| Structural studies | Confirmed | - |
| Support for | Confirmed | - |
| These findings emphasize | Confirmed | - |
| These results clearly indicate | Confirmed | - |
| agree well with | Confirmed | - |
| Analysis | Confirmed | - |
| analysis of crystal and molecular structures | Confirmed | - |
| appropriately | Confirmed | - |
| can be concluded | Confirmed | - |
| clearly | Confirmed | - |
| clearly demonstrate importance | Confirmed | - |
| conclude | Confirmed | - |
| concluded | Confirmed | - |
| confirm | Confirmed | - |
| confirmed | Confirmed | - |
| consistent with | Confirmed | - |
| corroborates observation | Confirmed | - |
| crystallographic study | Confirmed | - |
| define | Confirmed | - |
| defined in structure | Confirmed | - |
| demonstrably | Confirmed | - |
| demonstrate | Confirmed | - |
| demonstrated | Confirmed | - |
| demonstrates | Confirmed | - |
| demonstrating | Confirmed | - |
| describe | Confirmed | - |
| enable us to identify | Confirmed | - |
| ensures | Confirmed | - |
| established | Confirmed | - |
| establishes presence of | Confirmed | - |
| evidence | Confirmed | - |
| exhibit | Confirmed | - |
| exhibits | Confirmed | - |
| first detailed biochemical study that probes | Confirmed | - |
| following conclusions | Confirmed | - |
| found | Confirmed | - |
| further evidenced by observation | Confirmed | - |
| generally agreed well with | Confirmed | - |
| have previously shown | Confirmed | - |
| ideally located for | Confirmed | - |
| identification | Confirmed | - |
| identified | Confirmed | - |
| identify | Confirmed | - |
| in agreement with | Confirmed | - |
| in agreement with experimental mutagenesis results | Confirmed | - |
| in support of | Confirmed | - |
| indicate | Confirmed | - |
| indicates | Confirmed | - |
| indicating | Confirmed | - |
| kinetic analyses | Confirmed | "Probable" combined with "suggest" |
| kinetic studies | Confirmed | - |
| known | Confirmed | - |
| leading to conclusion | Confirmed | - |
| manifests | Confirmed | - |
| measured | Confirmed | - |
| model concurs with recent observations | Confirmed | - |
| more likely | Confirmed | - |
| most consistent with | Confirmed | - |
| must | Confirmed | - |
| must be | Confirmed | - |
| mutational analysis | Confirmed | - |
| observed | Confirmed | - |
| observing | Confirmed | - |
| offers direct evidence | Confirmed | - |
| pH-dependent rate analysis | Confirmed | - |
| pinpoint | Confirmed | - |
| placed perfectly for | Confirmed | - |
| poised | Confirmed | - |
| positioned | Confirmed | - |
| positioned appropriately | Confirmed | - |
| positioned approximately for | Confirmed | - |
| present study | Confirmed | - |
| presenting | Confirmed | - |
| previously been shown | Confirmed | - |
| previously known | Confirmed | - |
| previously reported | Confirmed | - |
| proton NMR studies | Confirmed | - |
| provided important information | Confirmed | - |
| proving | Confirmed | - |
| recent identification | Confirmed | - |
| reflecting | Confirmed | - |
| report | Confirmed | - |
| reported | Confirmed | - |
| results support | Confirmed | - |
| reveal | Confirmed | - |
| reveal structural basis | Confirmed | - |
| revealing | Confirmed | - |
| reveals | Confirmed | - |
| should | Confirmed | - |
| show | Confirmed | - |
| showed | Confirmed | - |
| showing evidence | Confirmed | - |
| shown | Confirmed | - |
| shows | Confirmed | - |
| site-directed mutagenesis | Confirmed | - |
| solved | Confirmed | - |
| steady-state rate analysis | Confirmed | - |
| structural basis | Confirmed | - |
| structural studies | Confirmed | - |
| study | Confirmed | - |
| suggested previously | Confirmed | - |
| suggests counterintuitive conclusion | Confirmed | - |
| suitable for | Confirmed | - |
| support | Confirmed | - |
| supports | Confirmed | - |
| supports suggestion | Confirmed | - |
| underscore | Confirmed | - |
| underscored importance | Confirmed | - |
| unified view | Confirmed | - |
| well positioned | Confirmed | - |
| widely-studied | Confirmed | - |
| Implications | Probable | - |
| Insights into | Probable | - |
| MD simulation | Probable | - |
| Modeling | Probable | - |
| Modelling of suggests | Probable | - |
| Modelling suggests | Probable | - |
| Modelling to superpose | Probable | - |
| Models | Probable | - |
| Molecular dynamics simulations | Probable | - |
| Molecular mechanics calculations show | Probable | - |
| Molecular modeling suggests | Probable | - |
| These results favor | Probable | - |
| This model features | Probable | - |
| account at least in part for | Probable | - |
| allows | Probable | - |
| apparent | Probable | - |
| appear to | Probable | - |
| appear to involve | Probable | - |
| appears | Probable | - |
| appears likely | Probable | - |
| appears reasonably favourable | Probable | - |
| appears to | Probable | - |
| appears to be | Probable | - |
| appropriate position for | Probable | - |
| attractive and precedented | Probable | - |
| avoids some serious difficulties | Probable | - |
| believe | Probable | - |
| can | Probable | - |
| can be described | Probable | - |
| can be interpreted | Probable | - |
| can be rationalized | Probable | - |
| can now propose | Probable | - |
| can probably be | Probable | - |
| cannot | Probable | -Also negation cue |
| considered | Probable | - |
| consistent with hypothesis | Probable | - |
| construction observed structure readily allows | Probable | - |
| could | Probable | - |
| could be | Probable | - |
| deserves further exploration | Probable | - |
| equally plausible | Probable | - |
| expected | Probable | - |
| expected to | Probable | - |
| explains | Probable | - |
| explains why | Probable | - |
| for example | Probable | - |
| gain insights into | Probable | - |
| gas-phase calculations | Probable | - |
| give information on | Probable | - |
| highlight importance | Probable | - |
| hypothesize | Probable | - |
| ideally situated for | Probable | - |
| illustrating | Probable | - |
| implicated | Probable | - |
| implicates | Probable | - |
| implication of this work | Probable | - |
| implications | Probable | - |
| imply | Probable | - |
| implying | Probable | - |
| inhibitor binding studies | Probable | - |
| insights from molecular dynamics simulations | Probable | - |
| insights into | Probable | - |
| interpreted | Probable | - |
| likely | Probable | - |
| likely reason | Probable | - |
| likely to be | Probable | - |
| made considerable strides | Probable | - |
| may | Probable | - |
| may also suggest | Probable | - |
| may be | Probable | - |
| may be attributed | Probable | - |
| may be important | Probable | - |
| may explain | Probable | - |
| might | Probable | - |
| might anticipate | Probable | - |
| mimics | Probable | - |
| model | Probable | - |
| model building calculations | Probable | - |
| modelled | Probable | - |
| molecular dynamics simulation | Probable | - |
| molecular modeling suggest | Probable | - |
| most likely | Probable | - |
| most likely combination | Probable | - |
| offers possibility | Probable | - |
| our understanding | Probable | - |
| perhaps | Probable | - |
| polarizable continuum model | Probable | - |
| possible | Probable | - |
| postulated | Probable | - |
| potential | Probable | - |
| predict | Probable | - |
| predicted | Probable | - |
| predicted sequence | Probable | - |
| predicts | Probable | - |
| presumably | Probable | - |
| presumed | Probable | - |
| previously proposed | Probable | - |
| probably | Probable | - |
| promising | Probable | - |
| proposal explains | Probable | - |
| proposals | Probable | - |
| propose | Probable | - |
| propose model | Probable | - |
| proposed | Probable | - |
| provide basis for model | Probable | - |
| provide details that support and extend | Probable | - |
| provide insights into | Probable | - |
| provided structural models | Probable | - |
| provides | Probable | - |
| provides basis for understanding | Probable | - |
| provides new insights | Probable | - |
| providing rationale | Probable | - |
| providing unprecedented insights into | Probable | - |
| putative | Probable | - |
| quantum-classical molecular dynamics simulations | Probable | - |
| rather | Probable | - |
| required | Probable | - |
| revealed | Probable | - |
| seems | Probable | - |
| strongly suggested | Probable | - |
| studied | Probable | - |
| suggest | Probable | - |
| suggested | Probable | - |
| suggested to resemble | Probable | - |
| suggesting | Probable | - |
| suggesting possibility | Probable | - |
| suggestive of | Probable | - |
| suggests | Probable | - |
| support model | Probable | - |
| support proposals | Probable | - |
| tested | Probable | - |
| thought | Probable | - |
| understand | Probable | - |
| would predict | Probable | - |
| would provide | Probable | - |
| favored over | Probable/Unlikely | "probable" before cue and "unlikely" after cue |
| arguing against | Unlikely | - |
| less | Unlikely | - |
| low residual | Unlikely | - |
| lower propensity | Unlikely | - |
| seems unlikely | Unlikely | - |
| showed much lower | Unlikely | - |

</div>
