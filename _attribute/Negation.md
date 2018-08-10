---
layout: entry
title: "Negation"
shortdef: "Negation for Events"
order: 0
---

The attribute for negation is for event triggers, which are negated.

In the following case, the event trigger is combined with the Negation Cue:
~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 NegationCue 16 19 not
T3 Surgery 28 39 lung resect
E1 Surgery:T3 has_subject:T1 Cue:T2
A1 Negation E1
~~~

<!--
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
-->
