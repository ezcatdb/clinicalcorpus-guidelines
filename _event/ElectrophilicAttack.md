---
layout: entry
title: "Electrophilic Attack"
category: reaction
shortdef: "A reaction step by electrophile"
order: 10
---

This reaction event is quite rare. The following words are typical
triggers of `Electrophilic Attack`:
~~~ ann
The partial positive charge on the electrophilic carbon of an epoxide substrate.
T1 EntityProperty 4 27 partial positive charge
T2 ElectrophilicAttack 35 48 electrophilic
T3 FunctionalGroup 49 55 carbon
T4 OtherCompound 62 69 epoxide
T5 EntityProperty 70 79 substrate
E1 ElectrophilicAttack:T2 Agent:T3
R1 whole_part Arg1:T4 Arg2:T3
R2 corresponds_to Arg1:T5 Arg2:T4
A1 EventAttribute E1 CatalyticRole
A2 EntityAttribute T5 ReactionState
~~~
~~~ ann
The enzyme mechanism involves activation of the electrophile.
T1 Enzyme 4 10 enzyme
T2 WholeReaction 4 20 enzyme mechanism
T3 Activation 30 40 activation
T4 ElectrophilicAttack 47 60 electrophile
E1 WholeReaction:T2 Agent:T1
E2 Activation:T3 Theme:E3
E3 ElectrophilicAttack:T4
A1 EventAttribute E3 CatalyticRole
R1 group_member Arg1:E1 Arg2:E2
R2 group_member Arg1:E1 Arg2:E3
~~~

- electrophilic
- electrophilicity
- electrophile
- electron-withdrawing

Here, `Electrophilic Attack` or `Electrophile` has an opposite characteristics, positive charge, to that of `Nucleophilic Attack` or `Nucleophile`.

The *Agent* for this reaction event tends to be [Amino Acid](),
[Other Compound](), or their [Functional Group](), although Reaction
events can also annotated to be the *Agent* in a few cases.
