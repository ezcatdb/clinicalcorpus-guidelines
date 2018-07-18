---
layout: entry
title: "Release"
category: other
shortdef: "A non-reaction event; dissociation"
order: 102
---

This event indicates dissociation of molecules, `Release`, which is
opposition to the event, [Interaction]().

The following words/phrases are typical triggers of `Release` events:

- dissociation
- release
- departing
- departure
- distancing
- leave
- moved away from
- replacing
- separation

~~~ ann
Dissociation of guanine.
T1 Release 0 12 Dissociation
T2 OtherCompound 16 23 guanine
E1 Release:T1 Theme:T2
~~~
~~~ ann
The uracil and deoxyribose in the flipped-out nucleotide substrate are relieved by glycosylic bond cleavage.
T1 FunctionalGroup 4 10 uracil
T2 FunctionalGroup 15 26 deoxyribose
T3 ConformationalChange 34 45 flipped-out
T4 OtherCompound 46 56 nucleotide
T5 EntityProperty 57 66 substrate
T6 Release 71 79 relieved
T7 FunctionalGroup 83 98 glycosylic bond
T8 Cleavae 99 107 cleavage
E1 ConformationalChange:T3 Theme:T4
E2 Release:T6 Agent:E3 Theme:T1 Theme2:T2
E3 Cleavae:T8 Theme:T7
R1 corresponds_to Arg1:T5 Arg2:T4
R2 whole_part Arg1:T4 Arg2:T1
R3 whole_part Arg1:T4 Arg2:T2
R4 whole_part Arg1:T4 Arg2:T7
A1 EntityAttribute T5 ReactionState
~~~
