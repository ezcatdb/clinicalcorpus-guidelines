---
layout: entry
title: "EnzymeCompoundyAttribute"
shortdef: "Attribute for Types/family & Coreference"
order: 5
---

This attribute is for Types/family of entities, such as enzymes/compounds, and for either general noun or pronoun which co-refers to more specific word/phrase, prior to the general noun/pronoun.

### Attribute; Types/family
Some enzyme/compound names indicate some kinds of enzymes/compounds, or family names. In such cases, this attribute should be annotated.

~~~ ann
Myrosinase, an S-glycosidase
T1 Enzyme 0 10 Myrosinase
T2 Enzyme 15 28 S-glycosidase
A1 EnzymeCompoundAttribute T2 Types/family
R1 group_member Arg1:T2 Arg2:T1
~~~

### Attribute; Coreference
Either general noun or pronoun may co-refer to more specific word/phrase. In such cases, this attribute should be annotated.

In the following case, "enzyme" co-refers to "Uridylyltransferase". For the "enzyme", the coreference attribute is annotated.

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
