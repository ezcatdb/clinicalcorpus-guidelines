---
layout: entry
title: "Disease"
shortdef: "Diseases for lung"
order: 2
---

The definition of 'Disease' is based on <a href="https://icd.who.int/browse11/l-m/en">ICD-11</a>, published by WHO.

Disease, which can be a group in phenotype, will be annotated in this category. 

~~~ ann
Idiopathic pulmonary fibrosis (IPF) is a fatal condition. 
T1 Disease 0 29 Idiopathic pulmonary fibrosis
T2 Disease 31 34 IPF
T3 Phenotype 41 56 fatal condition
R1 is_eqivalent Arg1:T2 Arg2:T1
~~~

The following words/phrases should be annotated as 'Disease'.

<div style="margin:1em" markdown="1">

| Disease name | ICD-11 code | ICD-11 description |
|--------------------------------------|-------------|------------------------------------------|
| lung cancer | 2C25 | Malignant neoplasms of bronchus or lung |
| idiopathic pulmonary fibrosis | CB03.4 | Idiopathic pulmonary fibrosis |
| IPF | CB03.4 | Idiopathic pulmonary fibrosis |
| idiopathic interstitial pneumonia | CB03.Z | Idiopathic interstitial pneumonitis, unspecified |
| bronchiolitis obliterans (syndrome) | CA26.Z | Chronic bronchiolitis, unspecified |
| Pulmonary hypertension | BB01 | Pulmonary hypertension |
| chronic lung allograft dysfunction | -  | - |
| restrictive allograft syndrome | -  | - |

</div>


<!-- details -->
