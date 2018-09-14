---
layout: entry
title: "Period"
shortdef: "Period for medical treatment"
order: 42
---

The definition of 'Period' is basically related to [Medical_treatment]() and [Medication]().

The following is an example of 'Period' with its corresponding medicine.

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Pharmacological_substance 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
E1 Medication:T2 has_agent:T1 dose:T3 period:T4
~~~

<!-- details -->
