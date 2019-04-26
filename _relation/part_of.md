---
layout: entry
title: "part_of"
shortdef: "Relationships between whole and part"
order: 4
---

This relation indicates the relationships between whole entity and its part. 

Typical examples are relationships between [Cell]() and its [Anatomical_entity]().

~~~ ann
Accumulation of damaged mitochondria in lung epithelial cells.
T1 Biological_process 0 12 Accumulation
T2 Biological_process 16 23 damaged
T3 Cell_component 24 36 mitochondria
T4 Cell 45 61 epithelial cells
T5 Anatomical_entity 40 44 lung
R1 part_of Arg1:T3 Arg2:T4
R2 part_of Arg1:T4 Arg2:T5
~~~

<!---
{% include image.html name="whole-part-example.png" width="70%" %}

~~~ ann
Ser200 acts as a nucleophile at the active site of AChE.
T1 Amino_acid_monomer 0 6 Ser200
T2 Protein_molecule 51 55 AChE
R1 part_of Arg1:T1 Arg2:T2
~~~
--->
