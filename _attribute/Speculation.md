---
layout: entry
title: "Speculation attributes"
shortdef: "Speculation attributes for events"
order: 1
---

Event triggers, which are connected with Speculation cues or Method cues, are ticked off with “Speculation” attributes.

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
