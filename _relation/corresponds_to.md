---
layout: entry
title: "corresponds_to"
order: 3
---

This relation is similar to [is_equivalent]() and [coreference](), but
it indicates relationships between
substrate/product/cofactor/intermediate/transition-state and their
corresponding molecule names, or between reactive parts and their
corresponding functional groups or atoms, as shown in the two figures.

{% include image.html name="corresponds-to-example-1.png" width="80%" %}

{% include image.html name="corresponds-to-example-2.png" width="80%" %}

A typical example is “histone” as [Other Compound]() and “substrate” as
[Entity Property](), as indicated in the example below.

~~~ ann
Glu-173 deprotonates the histone substrate.
T1 AminoAcid 0 7 Glu-173
T2 Deprotonation 8 20 deprotonates
T3 OtherCompound 25 32 histone
T4 EntityProperty 33 42 substrate
E1 Deprotonation:T2 Agent:T1 Theme:T3
A1 EntityAttribute T4 ReactionState
R1 corresponds_to Arg1:T4 Arg2:T3
~~~

~~~ ann
The intermediate contains a negtively charged nitrogen leaving group.
T1 EntityProperty 4 16 intermediate
T2 FunctionalGroup 28 54 negtively charged nitrogen
T3 EntityProperty 55 68 leaving group
A1 EntityAttribute T1 ReactionState
A2 EntityAttribute T3 ReactivePart
R1 whole_part Arg1:T1 Arg2:T2
R2 corresponds_to Arg1:T3 Arg2:T2
~~~
