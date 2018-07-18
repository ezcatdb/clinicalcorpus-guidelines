---
layout: entry
title: "Cofactor"
shortdef: non-proteins that assist enzyme reactions
order: 2
---

{% include image.html name="cofactors.png" width="60%" %}

Cofactors are non-proteins that assist enzyme functions, and can be
metal ions, some organic compounds or complexes between metals and
organic compounds.  As organic-compound cofactors, pyridoxal phosphate
and NAD will be included in this category. As complex cofactors,
heme, will be included in this category.

An example of organic cofactor
~~~ ann
coenzyme A (CoA)
T1 Cofactor 0 10 coenzyme A
T2 Cofactor 12 15 CoA
R1 is_equivalent Arg1:T2 Arg2:T1
~~~


Examples of inorganic cofactors
~~~ ann
The required divalent metal ion cofactor for EcoRV
T1 Cofactor 13 31 divalent metal ion
T2 Cofactor 32 40 cofactor
T3 Enzyme 45 50 EcoRV
R1 corresponds_to Arg1:T2 Arg2:T1
~~~

~~~ ann
Mg2+ ion as a cofactor
T1 Cofactor 0 8 Mg2+ ion
T2 Cofactor 14 22 cofactor
R1 corresponds_to Arg1:T2 Arg2:T1
~~~

<!-- details -->
