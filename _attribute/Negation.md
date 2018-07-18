---
layout: entry
title: "Negation"
shortdef: "Negation for Events"
order: 0
---

The attribute for negation is for event triggers, which are negated.

In the following case, the event trigger is combined with the Negation Cue:
~~~ ann
OP-enzyme conjugate cannot be reactivated.
T1 OtherCompound 0 2 OP
T2 Enzyme 3 9 enzyme
T3 EntityProperty 0 19 OP-enzyme conjugate
T4 NegationCue 20 26 cannot
T5 Activation 30 41 reactivated
E1 Activation:T5 Theme:T3 Cue:T4
A1 Negation E1
R1 whole_part Arg1:T3 Arg2:T1
R2 whole_part Arg1:T3 Arg2:T2
~~~

On the other hand, the event trigger itself is negated, without any negation cue, in the following case:
~~~ ann
The unprotonated side chain of the amino acid.
T1 Protonation 4 16 unprotonated
T2 FunctionalGroup 17 27 side chain
T3 AminoAcid 35 45 amino acid
E1 Protonation:T1 Theme:T2
A1 Negation E1
R1 whole_group Arg1:T3 Arg2:T2
~~~
