---
layout: entry
title: "Phenotype"
shortdef: "Phenotype for diseases"
order: 1
---

The definition of 'Phenotype' includes words/phrases, which may suggest characteristics of disease, but which cannot be categorized into 'Disease', 'symptom', nor related 'Measurement'. 

The following words/phrases can be annotated as 'Phenotype'.

- survival
  - progression-free survival
  - PFS

~~~ ann
The impact of IPF-related sleep breathing disorders (SBDs) on survival.
T1 Disorder 14 17 IPF
T2 Disorder 26 51 sleep breathing disorders
T3 Disorder 53 57 SBDs
T4 Phenotype 62 70 survival
R1 is_equivalent Arg1:T3 Arg2:T2
R2 Cause_Effect Arg1:T1 Arg2:T2
R3 Cause_Effect Arg1:T2 Arg2:T4
~~~

<!-- details -->
