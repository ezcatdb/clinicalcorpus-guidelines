---
layout: entry
title: "N_sbjct"
shortdef: "Number of subjects"
order: 8
---

<!--
-->

The number of patients, and subjects for clinical trials, and experimental animals, such as mice, is categorized into this entity group.

~~~ ann
70 subjects (50 men and 20 women; mean age, 63.1 y)
T1 Subject 0 11 70 subjects
T2 Subject 13 19 50 men
T3 Subject 24 32 20 women
T4 N_sbjct 0 2 70
T5 N_sbjct 13 15 50
T6 N_sbjct 24 26 20
T7 Age_sbjct 34 50  mean age, 63.1 y
R1 member_of Arg1:T2 Arg2:T1
R2 member_of Arg1:T3 Arg2:T1
R3 Subject_Attribute Arg1:T1 Arg2:T4
R4 Subject_Attribute Arg1:T2 Arg2:T5
R5 Subject_Attribute Arg1:T3 Arg2:T6
R6 Subject_Attribute Arg1:T1 Arg2:T7
A1 Gender_sbjct T1 Both
A2 Gender_sbjct T2 Male
A3 Gender_sbjct T3 Female
~~~

~~~ ann
Ten healthy volunteers took 200 mg itraconazole or matched placebo once daily for 4 days.
T1 Subject 0 22 Ten healthy volunteers
T2 Medication 23 27 took
T3 Medication 23 27 took
T4 Dose 28 34 200 mg
T5 Pharmacological_substance 35 47 itraconazole
T6 Pharmacological_substance 59 66 placebo
T7 Frequency 67 77 once daily
T8 Period 82 88 4 days
T9 N_sbjct 0 3 Ten
E1 Medication:T2 has_subject:T1 has_agent:T5 dose:T4 period:T8 frequent:T7
E2 Medication:T3 has_subject:T1 has_agent:T6 dose:T4 period:T8 frequent:T7
R1 Subject_Attribute Arg1:T1 Arg2:T9
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
R1 Subject_Attribute Arg1:T5 Arg2:T6
~~~

<!-- details -->
