---
layout: entry
title: "is_equivalent"
order: 1
---

Enzyme/compound formal name and its abbreviated names should be connected
with this relation.

~~~ ann
Organophosphorus acid anhydride (OP) rapidly phosphonylate acetylcholinesterase (AChE).
T1 OtherCompound 0 31 Organophosphorus acid anhydride
T2 OtherCompound 33 35 OP
T3 BondFormation 45 58 phosphonylate
T4 Enzyme 59 79 acetylcholinesterase
T5 Enzyme 81 85 AChE
E1 BondFormation:T3 Agent:T1 Theme:T4
R1 is_equivalent Arg1:T2 Arg2:T1
R2 is_equivalent Arg1:T5 Arg2:T4
~~~

<!-- details -->
