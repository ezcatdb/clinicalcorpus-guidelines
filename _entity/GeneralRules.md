---
layout: entry
title: General rules for entities
shortdef: "Entity rules"
---

There are general rules for entities, as follows:

 - Articles, such as "a", "an" and "the", are not included in the entities.
 
~~~ ann
Dextranase catalyzes the hydrolysis of the alpha-1,6-glycosidic linkage in dextran polymers.
T1 Enzyme 0 10 Dextranase
T2	WholeReaction 11 20;25 35	catalyzes hydrolysis
T3 FunctionalGroup 43 71 alpha-1,6-glycosidic linkage
T4	OtherCompound 75 91	dextran polymers
E1	WholeReaction:T2 Agent:T1 Theme:T3
R1 whole_part Arg1:T4 Arg2:T3
~~~
 
 - Numerals should be included in the entities, as they can suggest groups.

~~~ ann
Two mutants, D150A and S170A.
T1 Enzyme 0 11 Two mutants
T2 Enzyme 13 18 D150A
T3 Enzyme 23 28 S170A
R1 group_member Arg1:T1 Arg2:T2
R2 group_member Arg1:T1 Arg2:T3
~~~
 
 
 <!-- details -->
