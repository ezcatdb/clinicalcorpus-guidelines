---
layout: entry
title: "Protein_molecule"
shortdef: "Protein molecule (GENIA)"
order: 31
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/meta-knowledge/">GENIA-Meta-knowledge corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

This entity is based on 
<a href="https://www.uniprot.org/">UniProt</a> database and <a href="https://pir.georgetown.edu/pro/"> PIR ontology</a>.

Protein molecules, gene products, are categorized into this entity group.

~~~ ann
Patients with high MMP-9 levels.
T1 Subject 0 8 Patients
T2 Protein_molecule 19 24 MMP-9
~~~

~~~ ann
matrix metalloproteinase 9 (MMP-9), myeloperoxidase (MPO), and arginase 1 (ARG1)
T1 Protein_molecule 0 26 matrix metalloproteinase 9
T2 Protein_molecule 28 33 MMP-9
T3 Protein_molecule 36 51 myeloperoxidase
T4 Protein_molecule 53 56 MPO
T5 Protein_molecule 63 73 arginase 1
T6 Protein_molecule 75 79 ARG1
R1 is_equivalent Arg1:T2 Arg2:T1
R2 is_equivalent Arg1:T4 Arg2:T3
R3 is_equivalent Arg1:T6 Arg2:T5
~~~

In the case of mutant information, mutation info should be annotated with protein name. 
Moreover, the attribute for [Protein_molecule](), [MutantAttribute](), should be 'mutant' instead of 'wild-type'.

~~~ ann
Infulence of methylenetetrahydrofolate reductase C677T polymorphism on the risk of lung cancer
T1 Protein_molecule 13 54 methylenetetrahydrofolate reductase C677T
T2 Biological_process 55 67 polymorphism
T3 Disease 83 94 lung cancer
T4 Anatomical_entity 83 87 lung
E1 Biological_process:T2 Product:T1
A1 MutantAttribute T1 mutant
~~~

<!-- details -->
