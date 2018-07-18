---
layout: entry
title: "EntityAttribute"
shortdef: "Attribute for Catalytic Role, Reactive Part and Reaction State"
order: 4
---

There are three types in this `EntityAttribute`, Catalytic Role, Reactive Part, and Reaction State.

### EntityAttribute; Catalytic Role
This category of the attribute may be rare, as most of catalytic roles are described in the Reaction Events ([EventAttribute]()).

~~~ ann
Ascorbate is a cofactor for myrosinase.
T1 Cofactor 0 9 Ascorbate
T2 Cofactor 15 23 cofactor
T3 Enzyme 28 38 myrosinase
A1 EntityAttribute T2 CatalyticRole
R1 corresponds_to Arg1:T2 Arg2:T1
~~~

### EntityAttribute; Reactive part

The phrases such as “leaving group”, “acceptor group”, “scissile bond”
and “cleavage bond”, which generally describe reactive parts of
compounds or enzyme functional groups, will be annotated in this
category. Occasionally, the words “group”, “moiety” or “bond” can be
abbreviated in these phrases.

~~~ ann
general acid catalysis for protonation of the leaving 3'-O anion
T1 Protonation 0 23 general acid catalysis
T2 Protonation 27 38 protonation
T3 EntityProperty 46 53 leaving
T4 FunctionalGroup 54 64 3'-O anion
E1 Protonation:T1 Theme:T4
E2 Protonation:T2 Theme:T4
A1 EntityAttribute T3 ReactivePart
R1 corresponds_to Arg1:T3 Arg2:T4
R2 coreference Arg1:T2 Arg2:T1
~~~
~~~ ann
the nucleophilic attack of hydroxide ion on the scissile phosphate
T1 NucleophilicAttack 4 23 nucleophilic attack
T2 FunctionalGroup 27 40 hydroxide ion
T3 EntityProperty 48 56 scissile
T4 FunctionalGroup 57 66 phosphate
E1 NucleophilicAttack:T1 Agent:T2 Theme:T4
A1 EntityAttribute T3 ReactivePart
R1 corresponds_to Arg1:T3 Arg2:T4
~~~
~~~ ann
the proton for donation to the leaving group.
T1 FunctionalGroup 4 10 proton
T2 Protonation 4 23 proton for donation
T3 EntityProperty 31 44 leaving group
E1 Protonation:T2 Theme:T3
A1 EntityAttribute T3 ReactivePart
~~~

### EntityAttribute; Reaction state

"Substrate(s)", "product(s)", "intermediate(s)", and "transition
state(s)", which are reaction states, will be annotated in this
category. In addition, their `EntityAttribute` will be identified as
`ReactionState`.  Those words, which describe the characteristics of
these reaction states, such as "covalent", "tetrahedral", and
"negatively-charged", will be included in the annotation.

~~~ ann
covalent intermediate
T1 EntityProperty 0 21 covalent intermediate
A1 EntityAttribute T1 ReactionState
~~~


Moreover, if the functional groups or “enzyme” are indicated adjacent
to these words, these functional groups or “enzyme” must be included
into the reaction states. Such functional groups or “enzyme” must be
connected by “whole_part” relations with the words indicating
“Reaction States”, described below in the section of “Relations”.

~~~ ann
an acyl enzyme intermediate
T1 FunctionalGroup 3 7 acyl
T2 Enzyme 8 14 enzyme
T3 EntityProperty 3 27 acyl enzyme intermediate
A1 EntityAttribute T3 ReactionState
R1 whole_part Arg1:T3 Arg2:T1
R2 whole_part Arg1:T3 Arg2:T2
~~~
~~~ ann
The dienol substrate
T1 FunctionalGroup 4 10 dienol
T2 EntityProperty 4 20 dienol substrate
A1 EntityAttribute T2 ReactionState
R1 whole_part Arg1:T2 Arg2:T1
~~~
~~~ ann
A gem-diol intermediate
T1 FunctionalGroup 2 10 gem-diol
T2 EntityProperty 2 23 gem-diol intermediate
A1 EntityAttribute T2 ReactionState
R1 whole_part Arg1:T2 Arg2:T1
~~~


On the other hand, if the independent “compounds” are indicated
adjacent to these words, such compounds are not included in the
annotation. In that case, the compounds must be connected by
“correspond_to” relations with the words indicating “Reaction States”,
described below in the section of “Relations”.

~~~ ann
histone substrate
T1 OtherCompound 0 7 histone
T2 EntityProperty 8 17 substrate
A1 EntityAttribute T2 ReactionState
R1 corresponds_to Arg1:T2 Arg2:T1
~~~


Furthermore, “complexes” of enzyme structures with their
corresponding ligand will be annotated in this category, with their
“EntityAttribute” identified as “ReactionState”. If the enzyme and its
ligand molecules are indicated along with “complex”, the “enzyme”
and “ligand molecules” will be included along with “complex” in the
annotation, and the relationships will be annotated with “whole_part”
from “complex” to “enzyme” or “ligand”, described below in the section of “Relations”.

~~~ ann
the complex between adenylate kinase and the inhibitor Ap5A
T1 EntityProperty 4 11 complex
T2 Enzyme 20 36 adenylate kinase
T3 OtherCompound 45 54 inhibitor
T4 OtherCompound 55 59 Ap5A
A1 EntityAttribute T1 ReactionState
R1 whole_part Arg1:T1 Arg2:T2
R2 whole_part Arg1:T1 Arg2:T4
R3 corresponds_to Arg1:T3 Arg2:T4
~~~
~~~ ann
the enzyme-substrate complex
T1 Enzyme 4 10 enzyme
T2 EntityProperty 11 20 substrate
T3 EntityProperty 4 28 enzyme-substrate complex
A1 EntityAttribute T2 ReactionState
A2 EntityAttribute T3 ReactionState
R1 whole_part Arg1:T3 Arg2:T1
R2 whole_part Arg1:T3 Arg2:T2
~~~

