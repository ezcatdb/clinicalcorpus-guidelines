---
layout: entry
title: "Speculated"
shortdef: "Speculation attributes for events"
order: 1
---

Event entities, which are along with Speculation cues or Method cues, should be ticked off with “Speculated” attributes.

~~~ ann
We hypothesized that direct implantation might have led to metastasis.
T1 Speculation_cue 3 15 hypothesized
T2 Medical_treatment 21 40 direct implantation
T3 Speculation_cue 41 46 might
T4 Adverse_effect 52 58 led to
T5 Disorder 59 69 metastasis
A1 Speculated T4
R1 Cause_Effect Arg1:T2 Arg2:T5
~~~

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T2 Diagnosis 17 26 diagnosed
T3 Anatomical_entity 27 32 liver
T4 Disorder 27 43 liver metastases
T5 Subject 51 63 two patients
A1 Speculated T2
R1 Subject_Disorder Arg1:T5 Arg2:T4
~~~