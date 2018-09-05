---
layout: entry
title: "Subject_Disorder"
shortdef: "relationships between subject and disorder (PHAEDRA)"
order: 110
---

This relation indicates relationships of [Subject]() with its disorder, [Disease]() or [Symptom]().

This relation is based on the <a href="http://www.nactem.ac.uk/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

~~~ ann
IPF patients with a forced vital capacity (FVC) of 50-80%.
T1 Disease 0 3 IPF
T2 Measurement 19 41 forced vital capacity
T3 Measurement 43 46 FVC
T4 Value 51 57 50-80%
T5 Subject 0 12 IPF patients 
R1 is_equivalent Arg1:T3 Arg2:T2
R2 value_of Arg1:T4 Arg2:T2
R3 Subject_Disorder Arg1:T5 Arg2:T1
~~~

~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 70 lung cancer
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
~~~

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T3 Diagnosis 17 26 diagnosed
T4 Disease 27 43 liver metastases
T5 Subject 51 63 two patients
E1 Diagnosis:T3 disorder:T4 has_subject:T5 cue:T1
A1 Speculated E1
A2 Certainty E1 Confirmed
R1 Subject_Disorder Arg1:T5 Arg2:T4
~~~
