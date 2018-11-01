---
layout: entry
title: "Cell_component"
shortdef: "Cellular components, including organelle (GENIA)"
order: 15
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/meta-knowledge/">GENIA-Meta-knowledge corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

This entity is based on <a href="https://www.ebi.ac.uk/QuickGO/">Quick GO</a> of <a href="http://geneontology.org/">Gene ontology</a>.
The following ontoloty may be related to this entity:
- <a href="https://www.ebi.ac.uk/ols/ontologies/cl">Cell ontlogy</a> 
- cellular component (<a href="http://amigo.geneontology.org/amigo/term/GO:0005575">GO:0005575</a>) from <a href="http://geneontology.org/">Gene ontology</a>.

'Cell component' is categorized into this entity group.

The following words/phrases are examples of this entity.
- cytoplasm
- cytosol
- nucleus
- transmembrane
- plasma membrame
- extracellular matrix
- mitochondria

~~~ ann
Accumulation of damaged mitochondria in lung epithelial cells.
T1 Biological_process 0 12 Accumulation
T2 Biological_process 16 23 damaged
T3 Cell_component 24 36 mitochondria
T4 Cell 40 61 lung epithelial cells
T5 Anatomical_entity 40 44 lung
E1 Biological_process:T1 Theme:E2 atLoc:T4
E2 Biological_process:T2 Theme:T3
R1 part_of Arg1:T3 Arg2:T4
R1 part_of Arg1:T4 Arg2:T5
~~~


<!-- details -->
