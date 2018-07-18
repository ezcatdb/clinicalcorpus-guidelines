---
layout: entry
title: "Inactivation"
category: reaction
shortdef: "A reaction step for inactivation/inhibition"
order: 8
---

The following words are typical triggers for the reaction events,
`Inactivation`:
~~~ ann
The Fe(2+) enzyme is undergoing rapid inactiation upon exposure to molecular oxygen.
T1 Cofactor 4 10 Fe(2+)
T2 Enzyme 4 17 Fe(2+) enzyme
T3 Inactivation 32 49 rapid inactiation
T4 OtherCompound 67 83 molecular oxygen
E1 Inactivation:T3 Agent:T4 Theme:T2
R1 whole_part Arg1:T2 Arg2:T1
~~~
~~~ ann
The inactive Asn-152 mutant
T1 Inactivation 4 12 inactive
T2 AminoAcid 13 20 Asn-152
T3 Enzyme 13 27 Asn-152 mutant
E1 Inactivation:T1 Theme:T3
A1 EnzymeAttribute T3 mutant
~~~
~~~ ann
An inactive substrate analogue 2-propenyl-NeuAc.
T1 Inactivation 3 11 inactive
T2 EntityProperty 12 21 substrate
T3 OtherCompound 12 30 substrate analogue
T4 OtherCompound 31 48 2-propenyl-NeuAc
E1 Inactivation:T1 Theme:T3
R1 corresponds_to Arg1:T3 Arg2:T4
A1 EntityAttribute T2 ReactionState
~~~

- inactivated
- inactivates
- inactivating
- inactivation
- inactivation mechanism
- inactive
- covalently inactivated
- suicide inactivation

The following words, such as “inhibit”, also suggest reaction events,
`Inactivation`:
~~~ ann
Acetylation with acetic anhydride reduced the rate of inhibition by the peptide derivative.
T1 BondFormation 0 11 Acetylation
T2 OtherCompound 17 33 acetic anhydrid
T3 Modulation 34 41 reduced
T4 EntityProperty 46 50 rate
T5 Inactivation 54 64 inhibition
T6 OtherCompound 71 90 peptide derivative
T7 OtherCompound 71 78 peptide
E1 BondFormation:T1 Agent:T2
E2 Modulation:T3 Agent:E1 Theme:E3 Means:T4
E3 Inactivation:T5 Agent:T6
A1 CompoundAttribute T6 derivative
R1 whole_part Arg1:T6 Arg2:T7
~~~

- inhibit
- inhibition
- inhibitory potency
- irreversible inhibition
- competitive inhibition

The following words also suggest indirectly the reaction event,
`Inactivation`:
~~~ ann
Mutation of Lys99 to Ala prevented the cleavage of trypsinogen.
T1 EntityProperty 0 8 Mutation
T2 AminoAcid 12 17 Lys99
T3 AminoAcid 21 24 Ala
T4 Inactivation 25 34 prevented
T5 Cleavage 39 47 cleavage
T6 Enzyme 51 62 trypsinogen
E1 Inactivation:T4 Agent:T1 Theme:E2
E2 Cleavage:T5 Theme:T6
~~~

- prevent
- preventing
- resistance
- steric hindrance
- Elimination
- eliminate
- eliminated
- blocked
- intervention
- less active
- loss
- lost
- complete loss

Unlike the other reaction events, the *Agent* for this reaction event
tends to be [Other Compound](), or even mutant [Enzyme](), although
[Amino Acid](), [Other Compound](), or [Cofactor]() can also be the
*Agent*. The *Theme* for this reaction event tends to be [Enzyme]().
Occasionally, the *Theme* can be [Other Compound]() or [Entity Property]().
