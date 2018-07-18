---
layout: entry
title: "Speculation attributes"
order: 1
---

Event triggers, which are connected with Speculation cues or Method cues, are ticked off with “Speculation” attributes.

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
