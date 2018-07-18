---
layout: entry
title: "Stabilisation"
category: reaction
shortdef: "A reaction step for stabilisation"
order: 5
---

The following words are typical triggers for the reaction event,
`Stabilisation`:

~~~ ann
The intermediate is stabilized by the epsilon-amino group of Lys602.
T1 EntityProperty 4 16 intermediate
T2 Stabilisation 20 30 stabilized
T3 FunctionalGroup 38 57 epsilon-amino group
T4 AminoAcid 61 67 Lys602
E1 Stabilisation:T2 Agent:T3 Theme:T1
A1 EntityAttribute T1 ReactionState
R1 whole_group Arg1:T4 Arg2:T3
~~~

- electrostatic stabilisation
- electrostatic stabilization
- stabilisation
- stabilised
- stabilises
- stability
- stabilization
- stabilization effect
- stabilize
- stabilized
- stabilizes
- stabilizing

Some phrases do not indicate `Stabilisation` directly, as follows:

~~~ ann
Arg255 and Arg305 probably have a role in neutralizing excess charge on the 2-phosphate.
T1 AminoAcid 0 6 Arg255
T2 AminoAcid 11 17 Arg305
T3 SpeculationCue 18 26 probably
T4 Stabilisation 34 54 role in neutralizing
T5 EntityProperty 55 68 excess charge
T6 FunctionalGroup 76 87 2-phosphate
E1 Stabilisation:T4 Agent:T1 Agent2:T2 Theme:T5 Cue:T3
A1 Speculation E1
A2 Certainty E1 Probable
A3 EventAttribute E1 CatalyticRole
~~~

- neutralization
- role in neutralizing
- held rigidly in place
- helps to fix position
- maintain
- maintaining
- offset
- overcome
- substantial contribution

<div style="background-color: yellow" markdown="1">
The *Agent* and *Theme* for this reaction event tend to be functional
groups of [Amino Acid](), [Other Compound](), or [Cofactor](), although
[Amino Acid](), [Other Compound](), or [Cofactor]() can also be the
*Agent* and *Theme* if those functional groups are not indicated.
</div>
