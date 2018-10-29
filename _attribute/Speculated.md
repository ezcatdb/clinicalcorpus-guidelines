---
layout: entry
title: "Speculated"
shortdef: "Speculation attributes for events"
order: 1
---

Event triggers, which are connected with Speculation cues or Method cues, should be ticked off with “Speculated” attributes.

~~~ ann
We hypothesized that direct implantation might have led to metastasis.
T1 Speculation_cue 3 15 hypothesized
T2 Surgery 21 40 direct implantation
T3 Speculation_cue 41 46 might
T4 Adverse_effect 52 58 led to
T5 Disease 59 69 metastasis
E1 Surgery:T2 
E2 Adverse_effect:T4 has_agent:E1 affects:T5 cue:T3 cue2:T1 
A1 Speculated E2
~~~

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
