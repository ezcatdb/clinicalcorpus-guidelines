---
layout: entry
title: General rules for entities
shortdef: "Entity rules"
---

There are general rules for entities, as follows:

 - Articles, such as "a", "an" and "the", are not included in the entities.
 
~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 70 lung cancer
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
~~~
~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 NegationCue 16 19 not
T3 Surgery 28 39 lung resect
E1 Surgery:T3 has_subject:T1 cue:T2
A1 Negation E1
~~~
 
 - Numerals should be included in the entities, as they can suggest groups.

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 MethodCue 6 12 PET-CT
T3 Diagnosis 17 26 diagnosed
T4 Disease 27 43 liver metastases
T5 Subject 51 63 two patients
E1 Diagnosis:T3 disorder:T4 has_subject:T5 cue:T1
A1 Speculation E1
A2 Certainty E1 Confirmed
R1 Subject_Disorder Arg1:T5 Arg2:T4
~~~

 
 
 <!-- details -->
