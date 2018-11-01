---
layout: entry
title: "Anatomical_entity"
shortdef: "Anatomical entities, inculding organs and tissues"
order: 12
---

The name of this entity group is based on <a href="https://en.wikipedia.org/wiki/Anatomical_terminology">Anatomical terminology</a>.

Organs, such as lung, and tissues above cells are categorized into this entity group.

This entity may be based on the following ontology databases:
- <a href="https://www.ebi.ac.uk/ols/ontologies/fma">FMA</a>
- <a href="https://www.ebi.ac.uk/ols/ontologies/uberon">UBERON</a>
- <a href="https://www.ebi.ac.uk/ols/search?ontology=ncit">NCIT</a>

Regarding the organ, such as lung, the following words/phrases can also be annotated.
- <a href="https://en.wikipedia.org/wiki/Respiratory_system">respiratory system</a>
- respiratory apparatus 
- ventilatory system
  - right lung
  - left lung
  - main bronchi
  - lobar bronchus
  - lingular division bronchi
  - trachea
  - diaphragm

~~~ ann
Squamous cell carcinoma of the lung invaded the right main bronchus.
T1 Disease 0 23 Squamous cell carcinoma
T2 Cell 0 13 Squamous cell
T3 Anatomical_entity 31 35 lung
T4 Anatomical_entity 48 67 right main bronchus
T5 Biological_process 36 43 invaded
E1 Biological_process:T5 Cause:T1 fromLoc:T3 toLoc:T4
~~~
~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 69 lung cancer
T4 Age_sbjct 2 13 40-year-old
T5 Anatomical_entity 58 62 lung
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
R2 Subject_Attribute Arg1:T1 Arg2:T4
A1 Gender_sbjct T1 Male
~~~
~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 Negation_cue 16 19 not
T3 Surgery 28 39 lung resect
T4 Anatomical_entity 28 32 lung
E1 Surgery:T3 has_subject:T1 occurs_at:T4 has_cue:T2
A1 Negated E1
~~~
~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T2 Anatomical_entity 27 32 liver
T3 Diagnosis 17 26 diagnosed
T4 Disease 27 43 liver metastases
T5 Subject 51 63 two patients
T6 N_sbjct 51 54 two
T7 Biological_process 33 43 metastases
E1 Diagnosis:T3 disorder:T4 has_subject:T5 has_cue:T1
E2 Biological_process:T7 toLoc:T2
A1 Speculated E1
A2 Certainty E1 Confirmed
R1 Subject_Disorder Arg1:T5 Arg2:T4
R2 Subject_Attribute Arg1:T5 Arg2:T6
~~~

Regarding tissues in lung, the following words/phrases can also be annotated.

- blood
- serum
- <a href="https://en.wikipedia.org/wiki/Pulmonary_alveolus">pulmonary alveolus</a>
- pulmonary alveoli
  - alveoli
  - atrium
  - pulmonary artery
  - pulmonary vein
  - alveolar sacs
  - alveolar duct
  - connective tissue
  - capillary beds
  - mucous gland
  - mucosal lining

- <a href="https://en.wikipedia.org/wiki/Pulmonary_pleurae">pulmonary pleurae</a>
- parietal pleura


The following words/phrases are part of <a href="https://en.wikipedia.org/wiki/Circulatory_system">circulatory system</a>.

- aorta
  - ascending aorta
  - descending aorta
- artery
- 'vena cava' or 'venae cavae'
  - inferior vena cava
  - superior vena cava
- vein

<!-- details -->
