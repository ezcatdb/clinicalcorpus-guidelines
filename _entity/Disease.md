---
layout: entry
title: "Disease"
shortdef: "Diseases for lung"
order: 2
---

The definition of 'Disease' is based on ICD-11((<a href="https://icd.who.int/browse11/l-m/en">ICD-11</a>), published by WHO.

Disease, which can be a group in phenotype, will be annotated in this category. 
The following entities should be annotated as 'Disease'.

- lung cancer
- idiopathic pulmonary fibrosis 
- IPF 

~~~ ann
Idiopathic pulmonary fibrosis (IPF) is a fatal condition. 
T1 Disease 0 29 Idiopathic pulmonary fibrosis
T2 Disease 31 34 IPF
T3 Phenotype 41 56 fatal condition
R1 is_eqivalent Arg1:T2 Arg2:T1
~~~

<!-- details -->
