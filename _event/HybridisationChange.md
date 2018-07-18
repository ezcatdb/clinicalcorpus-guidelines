---
layout: entry
title: "Hybridisation Change"
category: reaction
shortdef: "A reaction step to change bond types"
order: 13
---

This reaction event is to change bond types from single bond to double bond, and vice versa. 

Hybridization, sp(3), corresponds to characteristics of single bond, whereas that of sp(2) corresponds to those of double bond.

The following words are typical triggers of this reaction event:
~~~ ann
PEP assumes a distorted geometry at C-2, which might anticipate the conversion from sp(2) to sp(3) hybridization occuring.
T1 OtherCompound 0 3 PEP
T2 Destabilisation 14 23 distorted
T3 EntityProperty 14 32 distorted geometry
T4 FunctionalGroup 36 39 C-2
T5 SpeculationCue 47 63 might anticipate
T6 HybridisationChange 68 78;99 112 conversion hybridization
T7 EntityProperty 84 89 sp(2)
T8 EntityProperty 93 98 sp(3)
E1 Destabilisation:T2 Agent:T1 Theme:T3
E2 HybridisationChange:T6 Agent:T3 InitialPoint:T7 EndPoint:T8 Cue:T5 
R1 whole_part Arg1:T1 Arg2:T4
A1 Speculation E1
A2 Certainty E1 Probable
~~~
~~~ ann
The hybridization of C-6 changes from sp2 to sp3.
T1 HybridisationChange 4 17;25 32 hybridization
T2 FunctionalGroup 21 24 C-6
T3 EntityProperty 38 41 sp2
T4 EntityProperty 45 48 sp3
E1 HybridisationChange:T1 Theme:T2 InitialPoint:T3 EndPoint:T4
~~~
~~~ ann
The enzyme alters the orientation of three orthogonal electron orbitals to favor electron transpositions for glycosylic bond cleavage.
T1 Enzyme 4 10 enzyme
T2 Modulation 11 17 alters
T3 EntityProperty 22 33 orientation
T4 EntityProperty 37 71 three orthogonal electron orbitals
T5 HybridisationChange 11 17;22 71 alters orientation of three orthogonal electron orbitals
T6 SpeculationCue 75 80 favor
T7 HybridisationChange 81 104 electron transpositions
T8 FunctionalGroup 109 124 glycosylic bond
T9 Cleavage 125 133 cleavage
E1 Modulation:T2 Agent:T1 Theme:T4 Means:T3
E2 HybridisationChange:T5 Agent:T1 
E3 HybridisationChange:T7 Agent:T1 Theme:T8 Cue:T6 
E4 Cleavage:T9 Agent:T1 Theme:T8 Cue:T6
A1 Speculation E3
A2 Certainty E3 Probable
A3 Speculation E4
A4 Certainty E4 Probable
~~~

- change hybridization
- conversion hybridization
- hybridized
- hyperconjugation
- rehybridization
- alters orientation of electron orbitals
- electron transpositions
- delocalization of electrons

The *Theme* for this reaction event tends to be [Functional Group]()
or [Other Compound]() in a few cases. The *Initial Point* and *End
Point* tend to be [Entity Property](), which indicates types of
orbital hybridization, such as “sp(2)” and “sp(3)”.

