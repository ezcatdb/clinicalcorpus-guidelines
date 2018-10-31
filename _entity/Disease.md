---
layout: entry
title: "Disease"
shortdef: "Diseases"
order: 2
---

The definition of 'Disease' is based on <a href="https://icd.who.int/browse11/l-m/en">ICD-11</a> published by WHO,
although <a href="http://apps.who.int/classifications/icd10/browse/2016/en">ICD-10 version:2016</a> has been more widely used than ICD-11.

Disease, which can be a group in phenotype, will be annotated in this category. 

~~~ ann
Idiopathic pulmonary fibrosis (IPF) is a fatal condition. 
T1 Disease 0 29 Idiopathic pulmonary fibrosis
T2 Disease 31 34 IPF
T3 Phenotype 41 56 fatal condition
R1 is_equivalent Arg1:T2 Arg2:T1
~~~
~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 69 lung cancer
T4 Age_sbjct 2 13 40-year-old
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
R2 Subject_Attribute Arg1:T1 Arg2:T4
A1 Gender_sbjct T1 Male
~~~

The following words/phrases should be annotated as 'Disease'.

<div style="margin:1em" markdown="1">

| Disease name | ICD-10 code | ICD-10 description | ICD-11 code | ICD-11 description |
|--------------------------------------|-------------|------------------------------------------|-------------|------------------------------------------|
| lung cancer | C34 | Malignant neoplasm of bronchus and lung | 2C25 | Malignant neoplasms of bronchus or lung |
| lung adenocarcinoma | - | - | 2C25.0 | Adenocarcinoma of bronchus or lung |
| non-small cell lung cancer | - | - | 2C25.Y | Other specified malignant neoplasms of bronchus or lung |
| multiple myeloma | C90.0 | Multiple myeloma | 2A83.1 | Plasma cell myeloma |
| plasma cell myeloma | C90.0 | Multiple myeloma | 2A83.1 | Plasma cell myeloma |
| chronic obstructive pulmonary disease | J44 | Other chronic obstructive pulmonary disease | CA22 | Chronic obstructive pulmonary disease |
| COPD | J44 | Other chronic obstructive pulmonary disease | CA22 | Chronic obstructive pulmonary disease |
| acute exacerbation of chronic obstructive pulmonary disease | J44.1 | Chronic obstructive pulmonary disease with acute exacerbation, unspecified | CA22.0 | Chronic obstructive pulmonary disease with acute exacerbation, unspecified  |
| bronchiolitis obliterans (syndrome) | J44.8 | Other specified chronic obstructive pulmonary disease  | CA26.Z | Chronic bronchiolitis, unspecified |
| idiopathic pulmonary fibrosis | J84.1 | Other interstitial pulmonary diseases with fibrosis | CB03.4 | Idiopathic pulmonary fibrosis |
| IPF | J84.1 | Other interstitial pulmonary diseases with fibrosis | CB03.4 | Idiopathic pulmonary fibrosis |
| idiopathic interstitial pneumonia | J84.1 | Other interstitial pulmonary diseases with fibrosis | CB03.Z | Idiopathic interstitial pneumonitis, unspecified |
| interstitial lung disease | J84.9 | Interstitial pulmonary disease, unspecified | CB0? | Respiratory diseases principally affecting the lung interstitium |
| pulmonary hypertension | I27.0, I27.2 | Primary pulmonary hypertension, Other secondary pulmonary hypertension | BB01 | Pulmonary hypertension |
| Sarcoidosis | D86 | Sarcoidosis | 4B20 | Sarcoidosis |
| pulmonary sarcoidosis | D86.0 | Sarcoidosis of lung | 4B20.0 | Sarcoidosis of lung |
| pleural effusion | - | - | CB27 | Pleural effusion |
| AECOPD | J44.1 | Chronic obstructive pulmonary disease with acute exacerbation, unspecified | CA22.0 | Chronic obstructive pulmonary disease with acute exacerbation, unspecified  |


</div>

<div style="background-color: yellow" markdown="1">
Some disease names start with 'AE (acute exacerbation)'. Although the following words/phrases are neither in ICD-10 nor in ICD-11, they can also be disease entities as they are widely used as disease names:
- acute exacerbation of idiopathic pulmonary fibrosis
- AE-IPF

</div>

~~~ ann
The pathogenesis of acute exacerbations of idiopathic pulmonary fibrosis (AE-IPF)
T1 Disease 20 72 acute exacerbations of idiopathic pulmonary fibrosis
T2 Disease 43 72 idiopathic pulmonary fibrosis
T3 Disease 74 80 AE-IPF
T4 Disease 77 80 IPF
R1 is_equivalent arg1:T3 arg2:T1
R2 is_equivalent arg1:T4 arg2:T2
~~~


The following words/phrases, whose ICD-10 IDs start with R, or whose ICD-11 IDs start with M, may be annotated as [Symptom](). 
<div style="margin:1em" markdown="1">

| Disease name | ICD-10 code | ICD-10 description | ICD-11 code | ICD-11 description |
|--------------------------------------|-------------|------------------------------------------|-------------|------------------------------------------|
| lung lesions | R91 | Abnormal findings on diagnostic imaging of lung | MD41 | Clinical findings on diagnostic imaging of lung |
| allodynia | - | - | MB40.1 | Allodynia |

</div>

The following words, which indicate the ambiguous degree/state of disease, are currently excluded from this entity, although they should be considered.
- advanced
- severe

Currently, the following words/phrases for stage of disease are tentatively annotated as [Entity Property]().
- stage I
- stage II
- stage IIIB
- stage IV
- stage IIIB/IV

<!-- details -->
