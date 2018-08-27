---
layout: entry
title: "Disease"
shortdef: "Diseases"
order: 2
---

The definition of 'Disease' is based on either 
<a href="http://apps.who.int/classifications/icd10/browse/2016/en">ICD-10 version:2016</a> or <a href="https://icd.who.int/browse11/l-m/en">ICD-11</a>, published by WHO.

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
T3 Disease 58 70 lung cancer
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
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
| idiopathic pulmonary fibrosis | J84.1 | Other interstitial pulmonary diseases with fibrosis | CB03.4 | Idiopathic pulmonary fibrosis |
| IPF | J84.1 | Other interstitial pulmonary diseases with fibrosis | CB03.4 | Idiopathic pulmonary fibrosis |
| idiopathic interstitial pneumonia | J84.1 | Other interstitial pulmonary diseases with fibrosis | CB03.Z | Idiopathic interstitial pneumonitis, unspecified |
| bronchiolitis obliterans (syndrome) | J44.8 | Other specified chronic obstructive pulmonary disease  | CA26.Z | Chronic bronchiolitis, unspecified |
| pulmonary hypertension | I27.0, I27.2 | Primary pulmonary hypertension, Other secondary pulmonary hypertension | BB01 | Pulmonary hypertension |
| Sarcoidosis | D86 | Sarcoidosis | 4B20 | Sarcoidosis |
| pulmonary sarcoidosis | D86.0 | Sarcoidosis of lung | 4B20.0 | Sarcoidosis of lung |
| lung lesions | R91 | Abnormal findings on diagnostic imaging of lung | MD41 | Clinical findings on diagnostic imaging of lung |
| pleural effusion | - | - | CB27 | Pleural effusion |



</div>


<!-- details -->
