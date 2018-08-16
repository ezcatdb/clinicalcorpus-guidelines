---
layout: entry
title: "Others"
category: other
shortdef: "A non-enzymatic reaction event"
order: 100
---

The events that are neither [Interaction](), [Release](), 
[Conformational Change](), nor any enzymatic reaction events, should be categorized
into this `Others` event. 
The spontaneous reactions are also be included in this event.

The following ones will be categorized into this event class:
~~~ ann
The enzymatic and nonenzymatic hydrolysis products of tDPPO.
T1 WholeReaction 4 13;31 41 enzymatic hydrolysis
T2 Others 18 41 nonenzymatic hydrolysis
T3 EntityProperty 42 50 products
T4 OtherCompound 54 59 tDPP
E1 WholeReaction:T1 Theme:T4
E2 Others:T2 Theme:T4
A1 ReactionType E1 Hydrolysis
A2 ReactionType E2 Hydrolysis
A3 EntityAttribute T4 ReactionState
R1 corresponds_to Arg1:T3 Arg2:T4
~~~
~~~ ann
The binary complexes are in slow exchange with free purine riboside on the NMR time scale.
T1 EntityProperty 4 20 binary complexes
T2 Others 28 41 slow exchange
T3 OtherCompound 47 67 free purine riboside
T4 MethodCue 75 78 NMR
E1 Others:T2 Agent:T1 Theme:T3 Cue:T4
~~~
~~~ ann
Detritiation of pyruvate by wild-type YPK occurs.
T1 Others 0 12 Detritiation
T2 OtherCompound 16 24 pyruvate
T3 Enzyme 28 41 wild-type YPK
E1 Others:T1 Agent:T3 Theme:T2
~~~

- Noncatalytic reaction(s)
- Non-catalytic reaction(s)
- Nonenzymatic process(es)
- Nonenzymatic reaction(s)
- Non-enzymatic reaction(s)
- Uncatalyzed reaction(s)
- (isotope) exchange/solvent exchange
  - Slow exchange
  - Fast exchange

"Isotope exchange" can also be MethodCue.
~~~ ann
Ligand-protein interactions were observed in the crystal structures together with the isotope exchange and site-directed mutagenesis data.
T1 OtherCompound 0 6 Ligand
T2 Enzyme 7 14 protein
T3 Interaction 15 27 interactions
T4 SpeculationCue 33 41 observed
T5 MethodCue 49 67 crystal structures
T6 MethodCue 86 102 isotope exchange
T7 Others 86 102 isotope exchange
T8 MethodCue 106 132 site-directed mutagenesis
E1 Interaction:T3 Agent:T2 Theme:T1 Cue:T4 Cue2:T5 Cue3:T6 Cue4:T8
E2 Others:T7
A1 Speculated E1
A2 Certainty E1 Confirmed
~~~

In addition, if the reaction is catalyzed by anything other than enzymes, such as some agents, active oxygen, and ultraviolet radiation, such a reaction is categorized in to this `Others` event.
