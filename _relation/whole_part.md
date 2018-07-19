---
layout: entry
title: "whole_part"
order: 4
---

This relation indicates the relationships between whole entity and its
part.  Typical examples are [Enzyme]() and its “active site”, or “active
site” and [Amino Acid]() residues in the active site.

{% include image.html name="whole-part-example.png" width="70%" %}

~~~ ann
Ser200 acts as a nucleophile at the active site of AChE.
T1 AminoAcid 0 6 Ser200
T2 NucleophilicAttack 17 28 nucleophile
T3 EntityProperty 36 47 active site
T4 Enzyme 51 55 AChE
E1 NucleophilicAttack:T2 Agent:T1
A1 EventAttribute E1 CatalyticRole
R1 whole_part Arg1:T3 Arg2:T1
R2 whole_part Arg1:T4 Arg2:T3
~~~
~~~ ann
The active site of Fhit contains a histidine motif.
T1 EntityProperty 4 15 active site
T2 Enzyme 19 23 Fhit
T3 AminoAcid 35 44 histidine
T4 EntityProperty 35 50 histidine motif
R1 whole_part Arg1:T2 Arg2:T1
R2 whole_part Arg1:T1 Arg2:T4
R3 whole_part Arg1:T4 Arg2:T3
~~~
~~~ ann
The role of Tyr70 at the active site of the enzyme.
T1 WholeReaction 4 8 role
T2 AminoAcid 12 17 Tyr70
T3 EntityProperty 25 36 active site
T4 Enzyme 44 50 enzyme
E1 WholeReaction:T1 Agent:T2
R1 whole_part Arg1:T4 Arg2:T3
R2 whole_part Arg1:T3 Arg2:T2
A1	EventAttribute E1 CatalyticRole
A2	EnzymeCompoundAttribute T4 Coreference
~~~
