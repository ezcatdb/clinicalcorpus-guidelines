---
layout: entry
title: "MutantAttribute"
shortdef: "Attribute for Protein_molecule, DNA_molecule or RNA_molecule"
order: 10
---

The attribute for [Protein_molecule](), [DNA_molecule](), or [RNA_molecule](), 'MutantAttribute', should be 'mutant', if these molecules are mutant.


~~~ ann
Infulence of methylenetetrahydrofolate reductase C677T polymorphism on the risk of lung cancer
T1 Protein_molecule 13 54 methylenetetrahydrofolate reductase C677T
T2 Biological_process 55 67 polymorphism
T3 Disease 83 94 lung cancer
T4 Anatomical_entity 83 87 lung
E1 Biological_process:T2 Product:T1
A1 MutantAttribute T1 mutant
~~~


