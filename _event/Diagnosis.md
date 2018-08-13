---
layout: entry
title: "Diagnosis"
category: 
shortdef: "Diagnosis of disease"
order: 3
---

This event is for diagnosis of disease. 
The following words may be triggers of this event:

- diagnose
- diagnosis

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 MethodCue 6 12 PET-CT
T3 Diagnosis 17 26 diagnosed
T4 Disease 27 43 liver metastases
T5 Subject 51 63 two patients
E1 Diagnosis:T3 Theme:T4 Cue:T1
A1 Speculation E1
A2 Certainty E1 Confirmed
R1 Subject_Disorder Arg1:T5 Arg2:T4
~~~

Arguments:
The *Theme* for this event must be some kind of disorder, such as [Disease]() or [Symptom]().

