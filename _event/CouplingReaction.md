---
layout: entry
title: "Coupling Reaction"
category: reaction
shortdef: "An event that involves more than one reaction steps"
order: 14
---

This reaction event is very rare, and couples other events. 
The following words may be triggers of this reaction event:

- (tightly) coupled
- associated

~~~ ann
Phosphoryl transfer is highly coupled to proton transfer.
T1 FunctionalGroup 0 10 Phosphoryl
T2 WholeReaction 11 19 transfer
T3 CouplingReaction 23 37 highly coupled
T4 Protonation 41 56 proton transfer
T5 Deprotonation 41 56 proton transfer
T6 FunctionalGroup 41 47 proton
E1 WholeReaction:T2 Theme:T1
E2 CouplingReaction:T3 Agent:E1 Theme:E3 Theme2:E4
E3 Protonation:T4
E4 Deprotonation:T5
A1 ReactionType E1 Transfer
~~~
~~~ ann
Reaction steps are tightly coupled for the enzyme.
T1 WholeReaction 0 14 Reaction steps
T2 CouplingReaction 19 34 tightly coupled
T3 Enzyme 43 50 enzyme
E1 WholeReaction:T1 Agent:T3
E2 CouplingReaction:T2 Agent:T3 Theme:E1
~~~
~~~ ann
Specific binding is accompanied by conformational changes.
T1 Interaction 0 16 Specific binding
T2 CouplingReaction 20 31 accompanied
T3 ConformationalChange 35 57 conformational changes
E1 Interaction:T1
E2 CouplingReaction:T2 Agent:E3 Theme:E1
E3 ConformationalChange:T3
~~~

The *Agent* for this reaction event tends to be other reaction events,
although [Enzyme]() can be the *Agent* in a few cases.

The *Theme* for this reaction event must be other reaction events.

