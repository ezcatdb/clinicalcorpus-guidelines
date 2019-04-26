---
layout: entry
title: "Negated"
shortdef: "Negation for Events"
order: 0
---

The attribute for 'Negated' is for event entities that are negated.

In the following case, the event entities, which is along with the Negation Cue, is negated, and indicated with a cross:


~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 Negation_cue 16 19 not
T3 Medical_treatment 28 39 lung resect
T4 Anatomical_entity 28 32 lung
A1 Negated T3
~~~

The entities themselves can be negated, without any negation cue, in the case of the words such as "dysfunction" and "untreated".

<!--
On the other hand, the event trigger itself is negated, without any negation cue, in the following case:
~~~ ann
The unprotonated side chain of the amino acid.
T1 Protonation 4 16 unprotonated
T2 FunctionalGroup 17 27 side chain
T3 AminoAcid 35 45 amino acid
E1 Protonation:T1 Theme:T2
A1 Negated E1
R1 whole_group Arg1:T3 Arg2:T2
~~~
-->
