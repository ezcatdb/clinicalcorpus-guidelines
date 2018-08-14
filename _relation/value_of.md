---
layout: entry
title: "value_of"
shortdef: "Relationships of value with its related entity"
order: 100
---

This relation indicates relationships of value with its related entity.

~~~ ann
IPF patients with a forced vital capacity (FVC) of 50-80%.
T1 Disease 0 3 IPF
T2 Measurement 19 41 forced vital capacity
T3 Measurement 43 46 FVC
T4 Value 51 57 50-80%
T5 Subject 0 12 IPF patients 
R1 is_equivalent Arg1:T3 Arg2:T2
R2 value_of Arg1:T4 Arg2:T2
R3 Subject_Disorder Arg1:T5 Arg2:T1
~~~

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Organic_compound_other 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Value 25 35 600 mg/day
E1 Medication:T2 has_agent:T1
R1 value_of Arg1:T3 Arg2:T1
~~~
