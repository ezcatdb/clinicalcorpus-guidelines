---
layout: entry
title: "CompoundAttribute"
shortdef: "Compound Attribute for original & derivative"
order: 7
---

The compound entity may have attributes, which suggest `derivative` of other compounds.
Derivatives are analogous compounds that are derived from a similar compound by some reactions.

The following 'peptide derivative' suggests peptide-like compounds.
~~~ ann
Acetylation with acetic anhydride reduced the rate of inhibition by the peptide derivative.
T1 BondFormation 0 11 Acetylation
T2 OtherCompound 17 33 acetic anhydrid
T3 Modulation 34 41 reduced
T4 EntityProperty 46 50 rate
T5 Inactivation 54 64 inhibition
T6 OtherCompound 71 90 peptide derivative
T7 OtherCompound 71 78 peptide
E1 BondFormation:T1 Agent:T2
E2 Modulation:T3 Agent:E1 Theme:E3 Means:T4
E3 Inactivation:T5 Agent:T6
A1 CompoundAttribute T6 derivative
R1 whole_part Arg1:T6 Arg2:T7
~~~
