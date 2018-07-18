---
layout: entry
title: "EventAttribute"
shortdef: "Event Attribute as Catalytic Role"
order: 8
---

The following cases in the events should have EventAttribute as "Catalytic Role" .

- Nucleophile
~~~ ann
The catalytic nucleophile, Glu-210
T1 NucleophilicAttack 4 25 catalytic nucleophile
T2 AminoAcid 27 34 Glu-210
E1 NucleophilicAttack:T1 Agent:T2
A1 EventAttribute E1 CatalyticRole
~~~

- General acid
~~~ ann
Asp40 acts as a general acid to protonate the purine leaving group.
T1 AminoAcid 0 5 Asp40
T2 Protonation 15 28 general acid
T3 Protonation 32 41 protonate
T4 OtherCompound 46 52 purine
T5 EntityProperty 53 66 leaving group
E1 Protonation:T2 Agent:T1 Theme:T4
E2 Protonation:T3 Agent:T1 Theme:T4
R1 coreference Arg1:E2 Arg2:E1
R2 corresponds_to Arg1:T5 Arg2:T4
A1 EventAttribute E1 CatalyticRole
~~~

- General Base
- Catalytic Acid
- Catalytic Base
- Acid catalyst
- Base catalyst

and so on.

