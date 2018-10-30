---
layout: entry
title: General rules for entities
shortdef: "Entity rules"
order: 0
---

The top ranking of the priority for entities are as follows:
- Disease
- Symptom
- Subject
- Pharmacological substance
- Anatomical entity
- Cell
- Protein molecule (as biomarker)


There are general rules for entities, as follows:

 - Articles, such as "a", "an" and "the", are not included in the entities.
 
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
~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 Negation_cue 16 19 not
T3 Surgery 28 39 lung resect
E1 Surgery:T3 has_subject:T1 cue:T2
A1 Negated E1
~~~
 
 - Numerals should be included in the entities, as they can suggest groups.

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T3 Diagnosis 17 26 diagnosed
T4 Disease 27 43 liver metastases
T5 Subject 51 63 two patients
T6 N_sbjct 51 54 two
E1 Diagnosis:T3 disorder:T4 has_subject:T5 cue:T1
A1 Speculated E1
A2 Certainty E1 Confirmed
R1 Subject_Disorder Arg1:T5 Arg2:T4
R2 Subject_Attribute Arg1:T5 Arg2:T6
~~~

 
 
 <!-- details -->
