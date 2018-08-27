---
layout: entry
title: "Symptom"
shortdef: "Symptoms for diseases"
order: 3
---

The definition of 'Symptom' is 
either "disorders" that are not registered in <a href="http://apps.who.int/classifications/icd10/browse/2016/en">ICD-10 version:2016</a> nor <a href="https://icd.who.int/browse11/l-m/en">ICD-11</a>, or 
those ones that are registered in many categories of the disease databases.
 
'Symptoms', which can be a group in phenotype, will be annotated in this category. 
The following words/phrases should be annotated as 'Symptom'.

- breathing disorder
  - sleep breathing disorder
- rash
- diarrhea
- hematologic toxicity
- chronic lung allograft dysfunction 
- restrictive allograft syndrome 

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
T2 Organic_compound_other 30 38 Icotinib
T3 Symptom 44 48 rash
T4 Symptom 53 61 diarrhea
E1 Adverse_effect:T1 has_agent:T2 affects:T3 affects2:T4
~~~

The following words/phrases are registered in <a href="http://apps.who.int/classifications/icd10/browse/2016/en">ICD-10 version:2016</a> or <a href="https://icd.who.int/browse11/l-m/en">ICD-11</a>, published by WHO.

<div style="margin:1em" markdown="1">

| Disease name | ICD-10 code | ICD-10 description | ICD-11 code | ICD-11 description |
|--------------------------------------|-------------|------------------------------------------|-------------|------------------------------------------|
| lung lesions | R91 | Abnormal findings on diagnostic imaging of lung | MD41 | Clinical findings on diagnostic imaging of lung |
| pleural effusion | - | - | CB27 | Pleural effusion |

</div>

<!-- details -->
