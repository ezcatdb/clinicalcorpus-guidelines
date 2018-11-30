---
layout: entry
title: General rules for entities
shortdef: "Entity rules"
order: 0
---

The top ranking of the priority for entities are as follows:
- [Disorder]()
- [Anatomical_entity]()
- [Subject]()
- [Pharmacological_substance]()

<!--
- [Disease]()
- [Symptom]()
- [Measurement]()
- [Cell]()
- [Protein_molecule]() (as biomarker)
-->

There are general rules for entities, as follows:

 - Usually, articles, such as "a", "an" and "the", should not be included in the entities.
 
~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disorder 58 69 lung cancer
T5 Anatomical_entity 58 62 lung
R1 Subject_Disorder Arg1:T1 Arg2:T3
R2 Event_Disorder Arg1:T2 Arg2:T3
~~~
~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 Negation_cue 16 19 not
T3 Surgery 28 39 lung resect
T4 Anatomical_entity 28 32 lung
R1 Event_Location Arg1:T3 Arg2:T4
R2 Event_Cue Arg1:T3 Arg2:T2
A1 Negated T3
~~~
 
 - Numerals should be included in the entities, as they can suggest groups.

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T2 Anatomical_entity 27 32 liver
T3 Diagnosis 17 26 diagnosed
T4 Disorder 27 43 liver metastases
T5 Subject 51 63 two patients
T7 Biological_process 33 43 metastases
R1 Subject_Disorder Arg1:T5 Arg2:T4
R2 Event_Disorder Arg1:T3 Arg2:T4
R3 Event_Cue Arg1:T3 Arg2:T1
R4 Event_Location Arg1:T7 Arg2:T2
~~~
 
 <!-- details -->
