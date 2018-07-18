---
layout: entry
title: "coreference"
order: 2
---
Coreference is used when additional expressions refer to the same thing, which is usually located prior to the expressions. 

There are two types of coreference, entity coreference and event coreference.

Entity coreference
~~~ ann
Glu172 is an essential catalytic residue.
T1 AminoAcid 0 6 Glu172
T2 AminoAcid 13 40 essential catalytic residue
R1 coreference Arg1:T2 Arg2:T1
~~~

Event coreference
~~~ ann
both the intermediate formation (k2) and breakdown (k3)....for the wild-type and D128E mutant, the rate-limiting step is k3, whereas k2 has become rate-limiting for the D128N mutant.
T1 EntityProperty 9 21 intermediate
T2 BondFormation 22 31 formation
T3 EntityProperty 33 35 k2
T4 Cleavage 41 50 breakdown
T5 EntityProperty 52 54 k3
T6 Enzyme 67 76 wild-type
T7 Enzyme 81 93 D128E mutant
T8 Cleavage 99 117 rate-limiting step
T9 EntityProperty 121 123 k3
T10 EntityProperty 133 135 k2
T11 BondFormation 147 160 rate-limiting
T12 Enzyme 169 182 D128N mutant
E1 BondFormation:T2 Theme:T1
E2 Cleavage:T4 Theme:T1
E3 Cleavage:T8 Agent:T6 Agent2:T7
E4 BondFormation:T11 Agent:T12
A1 EntityAttribute T1 ReactionState
A2 EnzymeAttribute T6 Wild-type
A3 EnzymeAttribute T7 mutant
A4 EnzymeAttribute T12 mutant
R1 coreference Arg1:E3 Arg2:E2
R2 coreference Arg1:E4 Arg2:E1
~~~

The expressions that corefer the prior expressions can be located out of the sentence that contains the corefered word/phrase.

~~~ ann
The x-ray structure of epoxide hydrolase from Agrobacterium radiobacter AD1. An enzyme to detoxify harmful epoxides.
T1 MethodCue 4 19 x-ray structure
T2 Enzyme 23 40 epoxide hydrolase
T3 Enzyme 80 86 enzyme
T4 WholeReaction 90 98 detoxify
T5 OtherCompound 107 116 epoxides
E1 WholeReaction:T4 Agent:T3 Theme:T5 Cue:T1
A1 EnzymeCompoundAttribute T3 Coreference
A2 ReactionType E1 Hydrolysis
A3 Speculation E1
A4 Certainty E1 Confirmed
R1 coreference Arg1:T3 Arg2:T2
~~~

