---
layout: entry
title: "part_of"
shortdef: "Relationships between whole and part"
order: 4
---

This relation indicates the relationships between whole entity and its part.  

Typical examples are [Cell]() and its [Cell_component](), or [Protein_molecule]() and [Amino_acid_monomer]().

<!---
{% include image.html name="whole-part-example.png" width="70%" %}
--->

~~~ ann
Ser200 acts as a nucleophile at the active site of AChE.
T1 Amino_acid_monomer 0 6 Ser200
T2 Protein_molecule 51 55 AChE
R1 part_of Arg1:T1 Arg2:T2
~~~
