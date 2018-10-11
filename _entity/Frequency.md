---
layout: entry
title: "Frequency"
shortdef: "Frequency for medical treatment"
order: 42
---

The definition of 'Frequency' is basically related to [Medical treatment]() and [Medication]().

The following is an example of 'Frequency' with its corresponding medicine.

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


<!-- details -->
