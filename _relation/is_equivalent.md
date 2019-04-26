---
layout: entry
title: "is_equivalent"
shortdef: "Equivalent relations"
order: 1
---

Entity names and their abbreviated names should be connected with this relation.

However, this relation may not be necessary, as those entities should be assigned the same IDs by the normalization process.

~~~ ann
Idiopathic pulmonary fibrosis (IPF) is a fatal condition. 
T1 Disorder 0 29 Idiopathic pulmonary fibrosis
T2 Disorder 31 34 IPF
T3 Disorder 41 56 fatal condition
R1 is_equivalent Arg1:T2 Arg2:T1
~~~

~~~ ann
IPF patients with a forced vital capacity (FVC) of 50-80%.
T1 Disorder 0 3 IPF
T2 Measurement 19 41 forced vital capacity
T3 Measurement 43 46 FVC
T5 Subject 4 12 IPF patients 
R1 is_equivalent Arg1:T3 Arg2:T2
R3 Subject_Disorder Arg1:T5 Arg2:T1
~~~

<!-- details -->
