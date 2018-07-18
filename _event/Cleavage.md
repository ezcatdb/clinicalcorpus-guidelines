---
layout: entry
title: "Cleavage"
category: reaction
shortdef: "A reaction step to break a covalent bond"
order: 11
---

The following words are typical triggers for `Cleavage`:
~~~ ann
DNA cleavage by EcoRV endonuclease
T1 OtherCompound 0 3 DNA
T2 Cleavage 4 12 cleavage
T3 Enzyme 16 34 EcoRV endonuclease
E1 Cleavage:T2 Agent:T3 Theme:T1
~~~
~~~ ann
The enzyme is involved in the removal of abnormal proteins, in the degradation of cyclins, and in the destruction of transcription factors.
T1 Enzyme 4 10 enzyme
T2 Cleavage 30 37 removal
T3 OtherCompound 41 58 abnormal proteins
T4 Cleavage 67 78 degradation
T5 OtherCompound 82 89 cyclins
T6 Cleavage 102 113 destruction
T7 OtherCompound 116 138 transcription factors
E1 Cleavage:T2 Agent:T1 Theme:T3
E2 Cleavage:T4 Agent:T1 Theme:T5
E3 Cleavage:T6 Agent:T1 Theme:T7
~~~

- Cleavage
- These two cleavage reactions
- bond cleavage
- both types of cleavage reaction
- catalyses hydrolytic cleavage
- catalyzed cleavage
- catalyzes degradation
- catalyzing cleavage
- cleavable
- cleavage
- cleavage action
- cleavage reaction
- cleave
- cleaved
- cleaves
- cleaving
- enzymatic cleavage
- mechanisms of cleavage
- precise mechanism of cleavage
- breakage
- breakdown
- breaking
- rate-determining breakdown
- transient break
- departing
- assist departure
- degradation
- destruction
- excision
- fission
- stereospecific fragmentation
- removal
- removes
- Complete removal
- enzymatic removal
- collapse
- collapses

The following words indicate more specific “Cleavage” for some
functional groups:
~~~ ann
The tyrosine anion acts as a general base for deacylation.
T1 AminoAcid 4 12 tyrosine
T2 FunctionalGroup 13 18 anion
T3 Deprotonation 29 41 general base
T4 Cleavage 46 57 deacylation
E1 Deprotonation:T3 Agent:T2
E2 Cleavage:T4 
A1 EventAttribute E1 CatalyticRole
R1 whole_part Arg1:T1 Arg2:T2
R2 group_member Arg1:E2 Arg2:E1
~~~
~~~ ann
The dephosphorylation of p-nitrophenyl phosphate by protein-tyrosine phosphatase (PTPase).
T1 Cleavage 4 21 dephosphorylation
T2 OtherCompound 25 48 p-nitrophenyl phosphate
T3 FunctionalGroup 39 48 phosphate
T4 Enzyme 52 80 protein-tyrosine phosphatase
T5 OtherCompound 52 59 protein
T6 AminoAcid 60 68 tyrosine
T7 Enzyme 82 88 PTPase
E1 Cleavage:T1 Agent:T4 Theme:T2
R1 whole_part Arg1:T2 Arg2:T3
R2 whole_part Arg1:T5 Arg2:T6
R3 is_equivalent Arg1:T7 Arg2:T4
~~~

- deacylation
- deethylation
- deglycosylation
- catalyzes retroaldol cleavage
- demethylation
- dephosphorylation
- dephosphorylation step
- dexylosylation chemical step
- internal dealkylation reaction
- retroaldol cleavage
- retroaldol mechanism
- ring opening step catalyzed
- ring-opening reaction
- ring-opening reaction catalyzed
- opening

The following words indicate a special case of self-cleavage:
~~~ ann
Protein self-cleavage in the proteasome.
T1 OtherCompound 0 7 Protein
T2 Cleavage 8 20 self-cleavage
T3 Enzyme 28 39 proteasome
E1 Cleavage:T2 Agent:T3 Theme:T1 Theme2:T3
R1 corresponds_to Arg1:T1 Arg2:T3
~~~
~~~ ann
Gly-1, an autolysis site in Ntn hydrolases.
T1 AminoAcid 0 5 Gly-1
T2 Cleavage 10 19 autolysis
T3 EntityProperty 10 24 autolysis site
T4 Enzyme 28 42 Ntn hydrolases
E1 Cleavage:T2 Agent:T4 Theme:T3
R1 whole_part Arg1:T4 Arg2:T3
R2 whole_part Arg1:T3 Arg2:T1
~~~

- autolyse
- autolysis
- autoprocessing
- self-cleavage

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

- rate-limiting step
- two-metal mechanism

The *Agent* for this reaction event tends to be [Enzyme](), although
[Amino Acid]() can also be the *Agent*. The *Theme* for this reaction
event tends to be [Other Compound](), their [Functional Group](), or
[Entity Property](), which indicates [Reaction State](), although
[Amino Acid]() or [Cofactor]() can also be the *Theme*. In a special case
of “self-cleavage”, [Enzyme]() can be [Theme]() for this reaction event.

In a few cases, this reaction event may involve additional arguments,
*Initial Point* and *End Point*, which tend to be [Other Compound](),
[Amino Acid](), their [Functional Group](), and [Entity Property](), whose
attributes are [Reaction State]().
