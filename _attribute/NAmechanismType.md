---
layout: entry
title: "NAmechanismType"
shortdef: "Mechanism Type for hydrolysis & transfer reactions"
order: 11
---

Hydrolysis and transfer reactions usually proceed via either single-displacement mechanism or double-displacement mechanism. In the single-displacement mechanism, nucleophilic substitution occurs only once, whereas it occurs twice in the double-displacement one.

{% include image.html name="single_double-displacement.png" width="90%" %}

Incidentally, inverting mechanisms by some glycosidases are usually "Single-displacement mechanism", whereas retaining mechanisms are "Double-displacement mechanism".

### Attribute; Single-displacement mechanism
- single-displacement
- single-step reaction
- inverting mechanism

~~~ ann
Water efficiently functions as the nucleophile in the inverting mechanism by the mutant sialidase.
T1 OtherCompound 0 5 Water
T2 NucleophilicAttack 35 46 nucleophile
T3 WholeReaction 54 73 inverting mechanism
T4 ConformationalChange 54 63 inverting
T5 Enzyme 81 97 mutant sialidase
E1 NucleophilicAttack:T2 Agent:T1
E2 WholeReaction:T3 Agent:T5
E3 ConformationalChange:T4 Agent:T5
A1 EventAttribute E1 CatalyticRole
A2 EnzymeAttribute T5 mutant
A3 NAmechanismType E2 SingleDisplacementMechanism
A4 ReactionType E2 Hydrolysis
R1 group_member Arg1:E2 Arg2:E1
R2 group_member Arg1:E2 Arg2:E3
~~~

### Attribute; Double-displacement mechanism
- double-displacement
- single-step reaction
- retaining mechanism

~~~ ann
Uridylyltransferase functions by a double-displacement mechanism through the formation of a covalent nucleotidyl-enzyme intermediate.
T1 Enzyme 0 19 Uridylyltransferase
T2 WholeReaction 35 64 double-displacement mechanism
T3 BondFormation 77 86 formation
T4 EntityProperty 92 132 covalent nucleotidyl-enzyme intermediate
T5 FunctionalGroup 101 112 nucleotidyl
T6 Enzyme 113 119 enzyme
E1 WholeReaction:T2 Agent:T1
E2 BondFormation:T3 Agent:T1 Theme:T4
A1 EntityAttribute T4 ReactionState
A2 EnzymeCompoundAttribute T6 Coreference
A3 ReactionType E1 Transfer
A4 NAmechanismType E1 DoubleDisplacementMechanism
R1 group_member Arg1:E1 Arg2:E2
R2 whole_part Arg1:T4 Arg2:T5
R3 whole_part Arg1:T4 Arg2:T6
R4 coreference Arg1:T6 Arg2:T1
~~~
~~~ ann
The two-step double-displacement mechanism involves a glycosyl-enzyme intermediate.
T1 WholeReaction 4 42 two-step double-displacement mechanism
T2 EntityProperty 54 82 glycosyl-enzyme intermediate
T3 FunctionalGroup 54 62 glycosyl
T4 Enzyme 63 69 enzyme
E1 WholeReaction:T1 Agent:T4
A1 NAmechanismType E1 DoubleDisplacementMechanism
A2 ReactionType E1 Hydrolysis
R1 whole_part Arg1:T2 Arg2:T3
R2 whole_part Arg1:T2 Arg2:T4
~~~
