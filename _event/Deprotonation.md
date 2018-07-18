---
layout: entry
title: "Deprotonation"
category: reaction
shortdef: "A reaction step by general base"
order: 4
---

The following words, which describe actions of this reaction event, are triggers for the reaction event, [Deprotonation]():

~~~ ann
The enolate anion abstracts a proton from water.
T1 FunctionalGroup 4 17 enolate anion
T2 Deprotonation 18 27;30 36 abstracts proton
T3 FunctionalGroup 30 36 proton
T4 OtherCompound 42 47 water
E1 Deprotonation:T2 Agent:T1 Theme:T4
~~~
~~~ ann
Lys486 may deprotonate the hydroxyl O1 of the intermediate.
T1 AminoAcid 0 6 Lys486
T2 SpeculationCue 7 10 may
T3 Deprotonation 11 22 deprotonate
T4 FunctionalGroup 27 38 hydroxyl O1
T5 EntityProperty 46 58 intermediate
E1 Deprotonation:T3 Agent:T1 Theme:T4 Cue:T2
R1 whole_part Arg1:T5 Arg2:T4
A1 EntityAttribute T5 ReactionState
A2 Speculation E1
A3 Certainty E1 Probable
~~~

- Abstraction of proton
- deprotonate
- deprotonated
- deprotonates
- deprotonating
- deprotonation
- proton transfer
- abstract proton
- abstracting proton
- abstracts proton
- accept proton
- accept proton from
- rapid release of proton
- uptake of proton
- general-base mechanism

<div style="background-color: yellow" markdown="1"></div>
As described in [Protonation](), the phrases, “proton transfer”, “proton shuttle” and “proton rearrangement” can be both [Protonation]() and [Deprotonation](), depending on the nearby words.

~~~ ann
The side chain of E95 participates in concert with the water molecule in proton transfer.
T1 FunctionalGroup 4 14 side chain
T2 AminoAcid 18 21 E95
T3 OtherCompound 54 69 water molecule
T4 Protonation 73 88 proton transfer
T5 Deprotonation 73 88 proton transfer
T6 FunctionalGroup 73 79 proton
E1 Protonation:T4 Agent:T1 Theme:T3
E2 Deprotonation:T5 Agent:T1 Theme:T3
R1 whole_part Arg1:T2 Arg2:T1
~~~

- proton shuttle
- proton rearrangement
- proton release
- proton transfer
- proton transferred
- proton transfers
- rate-determining transfer of proton

The following words, which are “catalytic roles” for this reaction event, are also triggers:

~~~ ann
Glu-173 acts as a general base catalyst by deprotonating the histone substrate.
T1 AminoAcid 0 7 Glu-173
T2 Deprotonation 18 39 general base catalyst
T3 Deprotonation 43 56 deprotonating
T4 OtherCompound 61 68 histone
T5 EntityProperty 69 78 substrate
E1 Deprotonation:T2 Agent:T1 Theme:T4
E2 Deprotonation:T3 Agent:T1 Theme:T4
A1 EventAttribute E1 CatalyticRole
A2 EntityAttribute T5 ReactionState
R1 corresponds_to Arg1:T5 Arg2:T4
R2 coreference Arg1:E2 Arg2:E1
~~~

In this case, "CatalyticRole" should be selected for "EventAttribute".

- base
- base catalysis
- base catalyst
- base functionality
- base properties
- catalytic base
- This general base function
- virtual base
- general bases
- general base
- general base catalysis
- general base catalyst
- general-base
- GB

<div style="background-color: yellow" markdown="1"></div>
The *Agent* and *Theme* for this reaction event tend to be functional
groups of [Amino Acid](), [Other Compound](), or [Cofactor](), although
[Amino Acid](), [Other Compound](), or [Cofactor]() can also be the *Agent*
and *Theme* if those functional groups are not indicated.



