---
layout: entry
title: "Other Compound"
order: 5
---

Those compounds, which are neither cofactors nor amino acids, are categorized in to this entity group.
~~~ ann
The alpha-phosphate of ATP.
T1 FunctionalGroup 4 19 alpha-phosphate
T2 OtherCompound 23 26 ATP
R1 whole_part Arg1:T2 Arg2:T1
~~~
~~~ ann
This enzyme catalyzes the hydrolysis of dianodesine triphosphate (Ap3A) to AMP and ADP.
T1 Enzyme 0 11 This enzyme
T2 WholeReaction 12 21;26 36 catalyzes hydrolysis
T3 OtherCompound 40 64 dianodesine triphosphate
T4 OtherCompound 66 70 Ap3A
T5 OtherCompound 75 78 AMP
T6 OtherCompound 83 86 ADP
E1 WholeReaction:T2 Agent:T1 Theme:T3 EndPoint:T5 EndPoint2:T6
R1 is_equivalent Arg1:T4 Arg2:T3
~~~

In addition to ordinary compounds, water molecules and solvent molecules will be included in this category, as they can be substrates or products.

~~~ ann
The metal ion activates the water molecule.
T1 Cofactor 4 13 metal ion
T2 Activation 14 23 activates
T3 OtherCompound 28 42 water molecule
E1 Activation:T2 Agent:T1 Theme:T3
~~~

Macromolecules, such as DNA, RNA, and protein, will be included in this category as well.

~~~ ann
DNA cleavage by EcoRV endonuclease.
T1 OtherCompound 0 3 DNA
T2 Cleavage 4 12 cleavage
T3 Enzyme 16 34 EcoRV endonuclease
E1 Cleavage:T2 Agent:T3 Theme:T1
~~~
~~~ ann
Protein acetylation in transcriptional control.
T1 OtherCompound 0 7 Protein
T2 WholeReaction 8 19 acetylation
E1 WholeReaction:T2 Theme:T1
A1 ReactionType E1 Transfer
~~~

<!-- details -->
