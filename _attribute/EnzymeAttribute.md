---
layout: entry
title: "EnzymeAttribute"
shortdef: "Enzyme Attribute for wild-type & mutant"
order: 5
---

Enzyme Attributes should be annotated as follows:
- mutant enzyme(s)
  - E128H (mutant) enzyme
  - E198A (mutant) enzyme
  - E198Q (mutant) enzyme
- wild-type enzyme
  - WT
  - native enzyme

~~~ ann
Two mutants, D150A and S170A.
T1 Enzyme 0 11 Two mutants
T2 Enzyme 13 18 D150A
T3 Enzyme 23 28 S170A
R1 group_member Arg1:T1 Arg2:T2
R2 group_member Arg1:T1 Arg2:T3
A1 EnzymeAttribute T1 mutant
A2 EnzymeAttribute T2 mutant
A3 EnzymeAttribute T3 mutant
~~~
~~~ ann
Wild-type YPK and K240M
T1 Enzyme 0 13 Wild-type YPK
T2 Enzyme 18 23 K240M
A1 EnzymeAttribute T1 Wild-type
A2 EnzymeAttribute T2 mutant
~~~
~~~ ann
An oxygen in the native xylanase and a nitrogen in the mutant.
T1 FunctionalGroup 3 9 oxygen
T2 Enzyme 17 32 native xylanase
T3 FunctionalGroup 39 47 nitrogen
T4 Enzyme 55 61 mutant
A1 EnzymeAttribute T2 Wild-type
A2 EnzymeAttribute T4 mutant
R1 whole_part Arg1:T2 Arg2:T1
R2 whole_part Arg1:T4 Arg2:T3
~~~

Without any description of wild-type or mutant, this annotation of the attribute should not be performed.
