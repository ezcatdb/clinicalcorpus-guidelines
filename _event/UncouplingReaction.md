---
layout: entry
title: "Uncoupling Reaction"
category: reaction
shortdef: "An event that separates associated reaction steps"
order: 15
---

This reaction event is very rare, and uncouples other reaction
events. The following words may be triggers of this reaction event:

- Uncoupling

~~~ ann
Uncoupling of steps which are coupled for the wild-type enzyme.
T1 UncouplingReaction 0 10 Uncoupling
T2 WholeReaction 14 19 steps
T3 CouplingReaction 30 37 coupled
T4 Enzyme 46 62 wild-type enzyme
E1 UncouplingReaction:T1 Theme:E2
E2 WholeReaction:T2 Agent:T4
E3 CouplingReaction:T3 Agent:T4 Theme:E2
A1 EnzymeAttribute T4 Wild-type
~~~
~~~ ann
Uncoupling of deprotonation and alkylation with the mutant enzyme.
T1 UncouplingReaction 0 10 Uncoupling
T2 Deprotonation 14 27 deprotonation
T3 WholeReaction 32 42 alkylation
T4 Enzyme 52 65 mutant enzyme
E1 UncouplingReaction:T1 Agent:T4 Theme:E2 Theme2:E3
E2 Deprotonation:T2
E3 WholeReaction:T3
A1 ReactionType E3 Transfer
A2 EnzymeAttribute T4 mutant
~~~

The *Agent* for this reaction event tends to be [Enzyme]().

The *Theme* for this reaction event must be other reaction events.
