---
layout: entry
title: "Value"
shortdef: "Value for Measurement etc."
order: 30
---

The definition of 'Value' is basically related to [Measurement]().


The following is an example of 'Value' with its [Measurement]().

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



<!-- details -->
