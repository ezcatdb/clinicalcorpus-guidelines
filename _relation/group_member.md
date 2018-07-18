---
layout: entry
title: "group_member"
order: 4
---

This relation describes relationships between a group and its members.

~~~ ann
Tyr150/Tyr210 as the residues involved in substrate binding.
T1 AminoAcid 0 6 Tyr150
T2 AminoAcid 7 13 Tyr210
T3 AminoAcid 21 29 residues
T4 EntityProperty 42 51 substrate
T5 Interaction 52 59 binding
E1 Interaction:T5 Agent:T3 Theme:T4
A1 EnzymeCompoundAttribute T3 Types/family
A2 EntityAttribute T4 ReactionState
R1 group_member Arg1:T3 Arg2:T1
R2 group_member Arg1:T3 Arg2:T2
~~~

~~~ ann
PPAT belongs to the nucleotidyltransferase superfamily.
T1 Enzyme 0 4 PPAT
T2 Enzyme 20 54 nucleotidyltransferase superfamily
R1 group_member Arg1:T2 Arg2:T1
A1 EnzymeCompoundAttribute T2 Types/family
~~~

This relation can be used to describe the relationships between reaction events.

For example, in the following reaction, "acetylation reaction" is composed of two reaction steps, "deprotonation" and "nucleophilic attack".

~~~ ann
The acetylation reaction requires deprotonation of the epsilon-amino group prior to nucleophilic attack.
T1 WholeReaction 4 24 acetylation reaction
T2 Deprotonation 34 47 deprotonation
T3 FunctionalGroup 55 74 epsilon-amino group
T4 NucleophilicAttack 84 103 nucleophilic attack
E1 WholeReaction:T1
E2 Deprotonation:T2 Theme:T3
E3 NucleophilicAttack:T4
R1 group_member Arg1:E1 Arg2:E2
R2 group_member Arg1:E1 Arg2:E3
A1 ReactionType E1 Transfer
~~~
~~~ ann
The catalytic mechanism involves base-catalyzed attack of water.
T1 WholeReaction 4 23 catalytic mechanism
T2 Deprotonation 33 37 base
T3 NucleophilicAttack 38 54 catalyzed attack
T4 OtherCompound 58 63 water
E1 WholeReaction:T1
E2 Deprotonation:T2 Theme:T4
E3 NucleophilicAttack:T3 Agent:T4
R1 group_member Arg1:E1 Arg2:E2
R2 group_member Arg1:E1 Arg2:E3
~~~
