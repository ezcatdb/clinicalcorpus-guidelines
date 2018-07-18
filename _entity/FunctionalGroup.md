---
layout: entry
title: "Functional Group"
order: 3
---

The definition of 'functional groups' might be similar to the that by the group and atom in ChEBI((<a href="http://purl.obolibrary.org/obo/CHEBI_24433">CHEBI:24433</a>) and (<a href="http://purl.obolibrary.org/obo/CHEBI_33250">CHEBI:33250</a>)), respectively.

Functional groups, such as hydroxyl group, imidazole group, amine, and
carboxylate, will be annotated in this category. Moreover, atom-level
description will also be included in this category.


~~~ ann
The epsilon-amino group of Lys102
T1 FunctionalGroup 5 23 epsilon-amino group
T2 AminoAcid 27 33 Lys102
R1 whole_part Arg1:T2 Arg2:T1
~~~

An example of atom-level description for the Functional group entity
~~~ ann
Atoms C5, O5, C1 and C2 of the sugar
T1 FunctionalGroup 0 5 Atoms
T2 FunctionalGroup 6 8 C5
T3 FunctionalGroup 10 12 O5
T4 FunctionalGroup 13 16 C1
T5 FunctionalGroup 20 23 C2
T6 FunctionalGroup 31 36 sugar
R1 group_member Arg1:T1 Arg2:T2
R2 group_member Arg1:T1 Arg2:T3
R3 group_member Arg1:T1 Arg2:T4
R4 group_member Arg1:T1 Arg2:T5
R5 whole_part Arg1:T6 Arg2:T1
~~~

<!-- details -->
