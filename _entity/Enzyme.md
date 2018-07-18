---
layout: entry
title: "Enzyme"
order: 4
---

This entity may be based on <a href="http://www.sbcs.qmul.ac.uk/iubmb/enzyme/"> Enzyme Nomenclature</a> by Nomenclature Committee of the International Union of Biochemistry and Molecular Biology (NC-IUBMB).

Enzyme names including abbreviated names are annotated.
~~~ ann
Phosphoryl transfer by EcoRV endonuclease (EcoRV)
T1 FunctionalGroup 0 10 Phosphoryl
T2 WholeReaction 11 19 transfer
T3 Enzyme 23 41 EcoRV endonuclease
T4 Enzyme 43 48 EcoRV
E1 WholeReaction:T2 Agent:T3 Theme:T1
R1 is_equivalent Arg1:T4 Arg2:T3
A1 ReactionType E1 Transfer
~~~

Moreover, general description of enzymes should be annotated as follows:
- enzyme(s)
  - both enzymes
  - each enzyme
  - either enzyme
  - homologous enzyme(s)
  - key enzyme(s)
- mutant enzyme(s)
  - E128H (mutant) enzyme
  - E198A (mutant) enzyme
  - E198Q (mutant) enzyme
- wild-type enzyme
- native enzyme

~~~ ann
Two mutants, D150A and S170A.
T1 Enzyme 0 11 Two mutants
T2 Enzyme 13 18 D150A
T3 Enzyme 23 28 S170A
R1 group_member Arg1:T1 Arg2:T2
R2 group_member Arg1:T1 Arg2:T3
A1 EnzymeAttribute T1 mutant
A2 EnzymeAttribute T2 mutant
A3 EnzymeAttribute T3 mutant
~~~
~~~ ann
Trypsin mutants, S195A, H57A, D102A, and D102N.
T1 Enzyme 0 7 Trypsin
T2 Enzyme 0 15 Trypsin mutants
T3 Enzyme 17 22 S195A
T4 Enzyme 24 28 H57A
T5 Enzyme 30 35 D102A
T6 Enzyme 41 46 D102N
A1 EnzymeAttribute T2 mutant
A2 EnzymeAttribute T3 mutant
A3 EnzymeAttribute T4 mutant
A4 EnzymeAttribute T5 mutant
A5 EnzymeAttribute T6 mutant
R1 group_member Arg1:T2 Arg2:T3
R2 group_member Arg1:T2 Arg2:T4
R3 group_member Arg1:T2 Arg2:T5
R4 group_member Arg1:T2 Arg2:T6
~~~

<!-- details -->
