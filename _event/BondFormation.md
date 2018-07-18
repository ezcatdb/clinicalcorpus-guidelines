---
layout: entry
title: "Bond Formation"
category: reaction
shortdef: "A reaction step to form a new covalent bond"
order: 12
---

The following words are typical triggers of this reaction event, `Bond
Formation`:
~~~ ann
The histidine residue serves as the nucleophilic catalyst to which the nucleotidyl group is bonded covalently in the covalent intermediate.
T1 AminoAcid 4 21 histidine residue
T2 NucleophilicAttack 36 57 nucleophilic catalyst
T3 FunctionalGroup 71 88 nucleotidyl group
T4 BondFormation 91 109 bonded covalently
T5 EntityProperty 117 138 covalent intermediate
E1 NucleophilicAttack:T2 Agent:T1 Theme:T3
E2 BondFormation:T4 Agent:T1 Theme:T3
A1 EntityAttribute T5 ReactionState
A2 EventAttribute E1 CatalyticRole
R1 whole_part Arg1:T5 Arg2:T1
R2 whole_part Arg1:T5 Arg2:T3
~~~
~~~ ann
Glu78 functions as a nucleophile to form the intermediate.
T1 AminoAcid 0 5 Glu78
T2 NucleophilicAttack 21 32 nucleophile
T3 BondFormation 36 40 form
T4 EntityProperty 45 57 intermediate
E1 NucleophilicAttack:T2 Agent:T1
E2 BondFormation:T3 Agent:T1 Theme:T4
A1 EventAttribute E1 CatalyticRole
A2 EntityAttribute T4 ReactionState
~~~
~~~ ann
Isomerization of methylenetetrahydrofolate from its N5,N10 bridged form to the N5 iminium ion.
T1 WholeReaction 0 13 Isomerization
T2 OtherCompound 17 42 methylenetetrahydrofolate
T3 FunctionalGroup 52 54 N5
T4 FunctionalGroup 55 58 N10
T5 BondFormation 59 66 bridged
T6 EntityProperty 52 71 N5,N10 bridged form
T7 FunctionalGroup 79 93 N5 iminium ion
E1 WholeReaction:T1 Theme:T2 InitialPoint:T6 EndPoint:T7
E2 BondFormation:T5 Theme:T3 Theme:T4
A1 EntityAttribute T6 ReactionState
A2 ReactionType E1 Isomerisation
R1 whole_part Arg1:T6 Arg2:T3
R2 whole_part Arg1:T6 Arg2:T4
~~~

- bond-making step
- bonded covalently
- bonding
- <span style="background-color: yellow">bridged</span>
- constrained covalently
- covalent
- covalent bonding distance
- covalent modification
- covalently
- covalently bound
- form
- formation
- formation step
- formed
- forming
- forms
- reversible formation
- linkage
- anchoring
- attached
- catalyzes synthesis
- produce
- producing

The following words indicate more specific `Bond Formation` involving
some functional groups:
~~~ ann
D-ribose must be phosphorylated at O5'.
T1 FunctionalGroup 0 8 D-ribose
T2 SpeculationCue 9 16 must be
T3 BondFormation 17 31 phosphorylated
T4 FunctionalGroup 35 38 O5'
E1 BondFormation:T3 Theme:T4 Cue:T2
R1 whole_part Arg1:T1 Arg2:T4
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~
~~~ ann
Acylation of the active site serine
T1 BondFormation 0 9 Acylation
T2 EntityProperty 17 28 active site
T3 AminoAcid 29 35 serine
E1 BondFormation:T1 Theme:T3
R1 whole_part Arg1:T2 Arg2:T3
~~~

- N-myristoylation
- Phosphorylation
- acylation
- carboxymethylation
- catalyzes acylation
- glycosylation
- hydrated
- phosphonylate
- phosphorylated
- phosphorylation
- xylosylation step
- polymerization
- polymerize
- replication
- alkylation
- catalyze alkylation
- alkylated

The following words also suggest indirectly the reaction event, `Bond
Formation`:
~~~ ann
Incorporation of (18)O from H(2)(18)O into the carbonyl group of 4-keto-nona-1,9-dionic acid was observed in the presence of MhpC.
T1 BondFormation 0 13 Incorporation
T2 FunctionalGroup 17 22 (18)O
T3 FunctionalGroup 28 37 H(2)(18)O
T4 FunctionalGroup 47 61 carbonyl group
T5 OtherCompound 65 92 4-keto-nona-1,9-dionic acid
T6 SpeculationCue 97 105 observed
T7 Enzyme 125 129 MhpC
E1 BondFormation:T1 Agent:T7 Theme:T2 EndPoint:T4 Cue:T6
R1 whole_part Arg1:T3 Arg2:T2
R2 whole_part Arg1:T5 Arg2:T4
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~

- accumulation
- accumulate
- incorporation
- resulted in appearance
- trapping
- modified


The following phrases are special cases, which may refer to another
reaction event:
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

- rate-limiting
- rate-limiting step

The *Agent* for this reaction event tends to be [Enzyme]() and
[Amino Acid](), although [Other Compound](), [Functional Group](), or
[Entity Property]() can also be the *Agent*.

The *Theme* for this reaction event tends to be [Other Compound](),
[Functional Group](), and [Entity Property](), which indicates
[Reaction State]() such as `Intermediate`, although [Amino Acid](), [Enzyme]() and [Cofactor]()
can also be the *Theme*.

Occasionally, this reaction event may have an argument, *End Point*,
which can be [Other Compound]() or [Functional Group]().

