---
layout: entry
title: "Dose"
shortdef: "Dose for medicine"
order: 41
---

The definition of 'Dose' is basically related to [Pharmacological_substance]().

The following is an example of 'Dose' with its corresponding medicine.

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Pharmacological_substance 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
E1 Medication:T2 has_agent:T1 dose:T3 period:T4
~~~


<!-- details -->
