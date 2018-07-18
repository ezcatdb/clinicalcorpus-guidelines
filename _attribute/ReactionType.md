---
layout: entry
title: "ReactionType"
shortdef: "Reaction type, such as hydrolysis, transfer, addition, elimination & isomerization"
order: 9
---

This attribute indicates the types of [Whole Reaction]().

~~~ ann
Fhit catalyzes the hydrolysis of diadenosine triphosphate to AMP and ADP.
T1 Enzyme 0 4 Fhit
T2 WholeReaction 5 14;19 29 catalyzes hydrolysis
T3 OtherCompound 33 57 diadenosine triphosphate
T4 OtherCompound 61 64 AMP
T5 OtherCompound 69 72 AMP
E1 WholeReaction:T2 Agent:T1 Theme:T3 EndPoint:T4 EndPoint2:T5
A1 ReactionType E1 Hydrolysis
~~~
~~~ ann
COMT catalyses the transfer of the methyl group from AdoMet to one hydroxyl group of catechols.
T1 Enzyme 0 4 COMT
T2 WholeReaction 5 14;19 27 catalyses transfer
T3 FunctionalGroup 35 47 methyl group
T4 OtherCompound 53 59 AdoMet
T5 FunctionalGroup 67 81 hydroxyl group
T6 OtherCompound 85 94 catechols
E1 WholeReaction:T2 Agent:T1 Theme:T3 InitialPoint:T4 EndPoint:T5
A1 ReactionType E1 Transfer
R1 whole_part Arg1:T4 Arg2:T3
R2 whole_part Arg1:T6 Arg2:T5
~~~

~~~ ann
Isomerization of methylenetetrahydrofolate from its N5,N10 bridged form to the N5 iminium ion.
T1 WholeReaction 0 13 Isomerization
T2 OtherCompound 17 42 methylenetetrahydrofolate
T3 FunctionalGroup 52 54 N5
T4 FunctionalGroup 55 58 N10
T5 BondFormation 59 66 bridged
T6 EntityProperty 52 71 N5,N10 bridged form
T7 FunctionalGroup 79 93 N5 iminium ion
E1 WholeReaction:T1 Theme:T2 InitialPoint:T6 EndPoint:T7
E2 BondFormation:T5 Theme:T3 Theme:T4
A1 EntityAttribute T6 ReactionState
A2 ReactionType E1 Isomerisation
R1 whole_part Arg1:T6 Arg2:T3
R2 whole_part Arg1:T6 Arg2:T4
~~~

- hydrolysis
- transfer
- addition
- elimination
- isomerization

The following reactions should be assigned the attribute.

- transglycosylation (transfer)
- transamination reaction (others)
- transformation (isomerization)
- transesterification (transfer)
- acetyltransfer reaction (transfer)
- transaldimination (others)
