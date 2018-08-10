---
layout: entry
title: "Phenotype"
shortdef: "Phenotype for diseases"
order: 1
---

The definition of 'Phenotype' includes words/phrases, which may suggest characteristics of disease, but which cannot be categorized into 'Disease', 'symptom', nor related 'Measurement'. 

The following words/phrases can be annotated as 'Phenotype'.

- fatal condition
- survival

~~~ ann
Idiopathic pulmonary fibrosis (IPF) is a fatal condition. 
T1 Disease 0 29 Idiopathic pulmonary fibrosis
T2 Disease 31 34 IPF
T3 Phenotype 41 56 fatal condition
R1 is_equivalent Arg1:T2 Arg2:T1
~~~
~~~ ann
The impact of IPF-related sleep breathing disorders (SBDs) on survival.
T1 Disease 14 17 IPF
T2 Symptom 26 51 sleep breathing disorders
T3 Symptom 53 57 SBDs
T4 Phenotype 62 70 survival
R1 is_equivalent Arg1:T3 Arg2:T2
~~~

<!-- details -->
