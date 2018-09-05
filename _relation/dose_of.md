---
layout: entry
title: "dose_of"
shortdef: "Relationships of dose with its related medicine"
order: 101
---

This relation indicates relationships of [Dose]() with its related entity, medicine.


~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Organic_compound_other 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
E1 Medication:T2 has_agent:T1
R1 value_of Arg1:T3 Arg2:T1
~~~

