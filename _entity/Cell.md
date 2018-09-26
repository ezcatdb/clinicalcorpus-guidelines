---
layout: entry
title: "Cell"
shortdef: "Cell types and cell lines"
order: 11
---

This entity group is based on Cell_natural and Cell_cultured in the <a href="http://www.nactem.ac.uk/meta-knowledge/">GENIA-Meta-knowledge corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

This entity is based on 
<a href="https://www.ebi.ac.uk/ols/ontologies/cl">
Cell ontlogy
</a>.

'Cells' are categorized into this entity group.

The following words/phrases are examples of this entity.
- T lympohocytes
  - T lymophoblasts
- T cells
  - T cell blasts
- epithelial cells
  - alveolar epithelial cells
- endothelial cells
  - capillary endothelial cells
- platelets
- thrombocytes
- mononuclear phagocyte
- monocytes
- white blood cells
- macrophages
- fibroblasts

~~~ ann
Cellular crosstalk between epithelial cells and fibroblasts.
T1 Cellular_process 0 18 Cellular crosstalk
T2 Cell 27 43 epithelial cells
T3 Cell 48 59 fibroblasts
E1 Cellular_process:T1 Theme:T2 Theme2:T3
~~~
~~~ann
T cell blasts were treated with PMA.
T1 Cell 0 13 T cell blasts
T2 Artificial_process 19 26 treated
T3 Organic_compound_other 32 35 PMA
E1 Artificial_process:T2 Theme:T1 Theme2:T3
~~~


<!-- details -->
