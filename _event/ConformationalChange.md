---
layout: entry
title: "Conformational Change"
category: other
shortdef: "A non-reaction event; change in conformation/configuration of enzyme/ligand"
order: 103
---

This non-reaction event indicates change in conformation/configuration of enzyme/ligand. This non-reaction event may influence the other reaction events.

~~~ ann
The binding-induced conformational change which brings the catalytic general acid into the active site.
T1 Interaction 4 11 binding
T2 Activation 12 19 induced
T3 ConformationalChange 20 41 conformational change
T4 Modulation 48 54 brings
T5 Protonation 59 81 catalytic general acid
T6 EntityProperty 91 102 active site
E1 Interaction:T1
E2 Activation:T2 Agent:E1 Theme:E3
E3 ConformationalChange:T3 Theme:E5
E4 Modulation:T4 Agent:E3 Theme:E5
E5 Protonation:T5
~~~
~~~ ann
Rotational as well as translational motions of HIV-1 RT
T1 ConformationalChange 0 10;22 43 Rotational translational motions
T2 Enzyme 47 55 HIV-1 RT
E1 ConformationalChange:T1 Agent:T2
~~~
~~~ ann
His108 and Gln170 have conformational variation.
T1 AminoAcid 0 6 His108
T2 AminoAcid 11 17 Gln170
T3 ConformationalChange 23 47 conformational variation
E1 ConformationalChange:T3 Theme:T1 Theme2:T2
~~~
~~~ ann
The linker atoms are more flexible and adopt two distinct sets of conformations.
T1 FunctionalGroup 4 16 linker atoms
T2 ConformationalChange 21 34 more flexible
T3 ConformationalChange 39 79 adopt two distinct sets of conformations
T4 EntityProperty 66 79 conformations
E1 ConformationalChange:T2 Theme:T1
E2 ConformationalChange:T3 Theme:T1
~~~
~~~ ann
The uracil and deoxyribose in the flipped-out nucleotide substrate are relieved by glycosylic bond cleavage.
T1 FunctionalGroup 4 10 uracil
T2 FunctionalGroup 15 26 deoxyribose
T3 ConformationalChange 34 45 flipped-out
T4 OtherCompound 46 56 nucleotide
T5 EntityProperty 57 66 substrate
T6 Release 71 79 relieved
T7 FunctionalGroup 83 98 glycosylic bond
T8 Cleavae 99 107 cleavage
E1 ConformationalChange:T3 Theme:T4
E2 Release:T6 Agent:E3 Theme:T1 Theme2:T2
E3 Cleavae:T8 Theme:T7
R1 corresponds_to Arg1:T5 Arg2:T4
R2 whole_part Arg1:T4 Arg2:T1
R3 whole_part Arg1:T4 Arg2:T2
R4 whole_part Arg1:T4 Arg2:T7
A1 EntityAttribute T5 ReactionState
~~~

- conformational change
- conformational changes
- extended conformation
- first major conformational change

- This mutual induced fit
- anti-correlated collective domain motion
- individually collectively moving
- moving collectively
- overall anti-correlation movements
- unexpected movement
- rotational translational motions
- both rotated and translated away

- opening
- closing
- partially open

- dynamics

- flexibility
- flip
- flipped out
- flipping
- passing
- points away from

"Inversion/inverting" suggests configuration change of glycoside compounds (or related compounds) around their anomeric carbon/atom by enzyme reaction, whereas "retention/retaining" indicates that such configuration changes do not occur.
~~~ ann
Inositol is cleaved from phosphorus with inversion of stereochemistry.
T1 OtherCompound 0 8 Inositol
T2 Cleavage 12 19 cleaved
T3 FunctionalGroup 25 35 phosphorus
T4 ConformationalChange 41 50 inversion
T5 EntityProperty 54 69 stereochemistry
E1 Cleavage:T2 Theme:T1 InitialPoint:T3
E2 ConformationalChange:T4 Theme:T1 Theme2:T5
~~~
~~~ ann
A retaining sialidase and an inverting sialidase
T1 Enzyme 2 21 retaining sialidase
T2 ConformationalChange 2 11 retaining
T3 Enzyme 29 48 inverting sialidase
T4 ConformationalChange 29 38 inverting
E1 ConformationalChange:T2 Agent:T1
E2 ConformationalChange:T4 Agent:T3
A1 Negation E1
~~~

- inversion
- inverting
- Stereochemical retention
- overall retention
- retaining
