---
layout: entry
title: "Method Cue"
shortdef: "Study/test types (cue for diagnosis etc.)"
order: 109
---

This cue indicates the types of studies/tests to identify/diagnose diseases or conditions. 

- ***(experimental/computational)*** analyses/tests 

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

More concrete keywords for the cue are as follows:

- Positron-emission tomography
- PET
- computed tomography (scan)
- CT (scan)
- Positron emission tomography–computed tomography
- PET-CT
- PET/CT
- chest X-ray
