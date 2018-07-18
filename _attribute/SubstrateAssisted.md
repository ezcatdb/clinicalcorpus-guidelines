---
layout: entry
title: "SubstrateAssisted"
shortdef: "Substrate-assisted mechanism type"
order: 12
---

Although functional groups of amino acid residues or cofactor on the enzyme proteins contribute to enzyme reactions, some functional group of substrate may be involved in the reaction occasionally. Such enzyme reactions are called `substrate-assisted` mechanism/reaction.

This attribute is for `substrate-assisted` mechanism/reaction.

~~~ ann
PNP catalyzes the phosphorolysis of purine nucleosides using a substrate-assisted catalytic mechanism.
T1 Enzyme 0 3 PNP
T2 WholeReaction 4 13;18 32 catalyzes phosphorolysis
T3 OtherCompound 36 54 purine nucleosides
T4 FunctionalGroup 36 42 purine
T5 EntityProperty 63 72 substrate
T6 WholeReaction 63 101 substrate-assisted catalytic mechanism
E1 WholeReaction:T2 Agent:T1 Theme:T3
E2 WholeReaction:T6 Agent:T5 Agent2:T1
A1 EnzymeCompoundAttribute T3 Types/family
A2 EntityAttribute T5 ReactionState
A3 SubstrateAssisted E2 SubstrateAssistedCatalysis
R1 whole_part Arg1:T3 Arg2:T4
R2 coreference Arg1:E2 Arg2:E1
~~~
