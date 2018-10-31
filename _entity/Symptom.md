---
layout: entry
title: "Symptom"
shortdef: "Symptoms for diseases"
order: 3
---

The definition of 'Symptom' is as follows: 
- "disorders" that are neither registered in <a href="http://apps.who.int/classifications/icd10/browse/2016/en">ICD-10 version:2016</a> nor <a href="https://icd.who.int/browse11/l-m/en">ICD-11</a>, 
- "disorders" that are registered in many categories of the disease databases, ICD-10 or ICD-11,
- "disorders", whose ICD-10 IDs start with R, or whose ICD-11 IDs start with M.

<div style="background-color: pink" markdown="1">
The following words/phrases, whose ICD-10 IDs start with R, or whose ICD-11 IDs start with M, can be annotated in this entity. 
</div>
<div style="margin:1em" markdown="1">

| Disease name | ICD-10 code | ICD-10 description | ICD-11 code | ICD-11 description |
|--------------------------------------|-------------|------------------------------------------|-------------|------------------------------------------|
| lung lesions | R91 | Abnormal findings on diagnostic imaging of lung | MD41 | Clinical findings on diagnostic imaging of lung |
| allodynia | - | - | MB40.1 | Allodynia |

</div>


'Symptom', which can be a group in phenotype, will be annotated in this category. 
The following words/phrases should be annotated as 'Symptom'.

- breathing disorder
  - sleep breathing disorder
- rash
- diarrhea
- hematologic toxicity


~~~ ann
The impact of IPF-related sleep breathing disorders (SBDs) on survival.
T1 Disease 14 17 IPF
T2 Symptom 26 51 sleep breathing disorders
T3 Symptom 53 57 SBDs
T4 Phenotype 62 70 survival
R1 is_equivalent Arg1:T3 Arg2:T2
~~~
~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 Adverse_effect 4 26 common adverse effects
T2 Pharmacological_substance 30 38 Icotinib
T3 Symptom 44 48 rash
T4 Symptom 53 61 diarrhea
E1 Adverse_effect:T1 has_agent:T2 affects:T3 affects2:T4
~~~

- fatal condition

~~~ ann
Idiopathic pulmonary fibrosis (IPF) is a fatal condition. 
T1 Disease 0 29 Idiopathic pulmonary fibrosis
T2 Disease 31 34 IPF
T3 Symptom 41 56 fatal condition
R1 is_equivalent Arg1:T2 Arg2:T1
~~~

<div style="background-color: yellow" markdown="1">
The following phrases are suspended for the time being, although they contain the words such as 'dysfunction' or 'syndrome'.

- chronic lung allograft dysfunction 
- restrictive allograft syndrome 

</div>

<!-- details -->
