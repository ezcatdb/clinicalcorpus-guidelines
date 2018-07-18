---
layout: entry
title: "Modulation"
category: reaction
shortdef: "A reaction step for modulation/regulation, or an event to change something"
order: 9
---

Unlike other reaction events, this reaction event may involve an additional argument, *Means*, in addition to *Agent* and *Theme*.
<div style="background-color: cyan" markdown="1">
The arguments, *Means*, are usually [Entity Property](), which indicates some parameters,
such as pH and pKa.
</div>

~~~ ann
Mutation of Lys90 to Ala reduced the rate of inhibition by the compound.
T1 EntityProperty 0 8 Mutation
T2 AminoAcid 12 17 Lys90
T3 AminoAcid 21 24 Ala
T4 Modulation 25 32 reduced
T5 EntityProperty 37 41 rate
T6 Inactivation 45 55 inhibition
T7 OtherCompound 63 71 compound
E1 Modulation:T4 Agent:T1 Means:T5 Theme:E2
E2 Inactivation:T6 Agent:T7
~~~

The following words are triggers for this reaction event, `Modulation`.

~~~ ann
The mutation changes the apparent Km value for the substrate.
T1 EntityProperty 4 12 mutation
T2 Modulation 13 20 changes
T3 EntityProperty 25 36 apparent Km
T4 EntityProperty 51 60 substrate
E1 Modulation:T2 Agent:T1 Means:T3 Theme:T4
A1 EntityAttribute T4 ReactionState
~~~
~~~ ann
Amino acid substitution can change the pH optimum of a glycosidase.
T1 AminoAcid 0 10 Amino acid
T2 EntityProperty 11 23 substitution
T3 MethodCue 0 24 Amino acid substitution
T4 SpeculationCue 24 27 can
T5 Modulation 28 34 change
T6 EntityProperty 39 49 pH optimum
T7 Enzyme 55 66 glycosidase
E1 Modulation:T5 Agent:T2 Means:T6 Theme:T7 Cue:T4 Cue2:T3
A1 Speculation E1
A2 Certainty E1 Probable
A3 EnzymeCompoundAttribute T7 Types/family
~~~

~~~ ann
Lys 230 affects enolate protonation.
T1 AminoAcid 0 7 Lys 230
T2 Modulation 8 15 affects
T3 FunctionalGroup 16 23 enolate
T4 Protonation 24 35 protonation
E1 Modulation:T2 Agent:T1 Theme:E2
E2 Protonation:T4 Theme:T3
~~~

- Changes
- change
- changed
- changes
- appreciably changed
- significant changes
- significantly changed
- greater changes
- induces change
- results in change
- net change
- only minor change
- Altering
- alter
- alteration
- induces alteration
- altered
- affected
- greatly affected
- severely affected
- influence
- influences
- mediate
- mediated
- mediation
- modified
- modify
- modulate
- modulated
- control
- controlling
- regulation
- dictates

The following words, which suggest decrease, may be annotated as
`Modulation`:

~~~ ann
H218A mutant exhibits 10(3)-fold increased K(m) over that of native enzyme.
T1 Enzyme 0 12 H218A mutant
T2 SpeculationCue 13 21 exhibits 
T3 Modulation 33 42 increased
T4 EntityProperty 43 47 K(m)
T5 EntityProperty 53 57 that
T6 Enzyme 61 74 native enzyme
E1 Modulation:T3 Agent:T1 Means:T4 Cue:T2
A1 EnzymeAttribute T1 mutant
A2 EnzymeAttribute T6 Wild-type
A3 Speculation E1
A4 Certainty E1 Confirmed
A5 EnzymeCompoundAttribute T5 Coreference
R1 coreference Arg1:T5 Arg2:T4
~~~
~~~ ann
The rate of phosphoryl transfer in K241A has been decreased 1000-fold compared to the wild-type enzyme.
T1 EntityProperty 4 8 rate
T2 FunctionalGroup 12 22 phosphoryl
T3 WholeReaction 23 31 transfer
T4 Enzyme 35 40 K241A
T5 Modulation 49 59 decreased
T6 Enzyme 86 102 wild-type enzyme
E1 WholeReaction:T3 Theme:T2 Agent:T4
E2 Modulation:T5 Agent:T4 Means:T1 Theme:E1
A1 ReactionType E1 Transfer
A2 EnzymeAttribute T4 mutant
A3 EnzymeAttribute T6 Wild-type
~~~

- minimized
- decrease
- decreased
- decreases
- This large decrease
- abolishes
- depressed
- disrupt
- disruption
- suppresses
- drop
- drops
- reduced
- reduces
- reducing
- reduction
- large reduction
- severe reduction
- lower
- lowering
- very low levels
- weaker
- results in *%
- loss
- lost
- extensive loss
- slight loss
- induced complete loss
- essential loss
- severe loss
- slowed much more
- exhibit slow
- exhibits very slow
- overall impairment

The following words, which suggest increase and enhancement, may be
annotated as `Modulation`:

~~~ ann
The mutant D18A showed a fivefold increase in the apparent Km value for the acceptor substrate erythrose 4-phosphate.
T1 Enzyme 4 15 mutant D18A
T2 SpeculationCue 16 22 showed
T3 Modulation 33 42 increase
T4 EntityProperty 49 61 apparent Km
T5 EntityProperty 75 94 acceptor substrate
T6 OtherCompound 95 116 erythrose 4-phosphate
E1 Modulation:T3 Agent:T1 Means:T4 Theme:T6 Cue:T2
A1 EnzymeAttribute T1 mutant
A2 EntityAttribute T5 ReactionState
A3 Speculation E1
A4 Certainty E1 Confirmed
R1 corresponds_to Arg1:T5 Arg2:T6
~~~

- enhance
- enhancement
- enhances
- Significant enhancement
- greatly enhanced
- increase
- increased
- increases
- increasing
- concomitant increase
- effects of this increase
- development
- appearance
- appeared
- induced appearance
- exhibit fast
- greater

The following words suggest `Modulation` by positioning some entities
or some catalyst (role in catalysis).

~~~ ann
The side-chains of Thr11 and Lys43 orient the nucleophile.
T1 FunctionalGroup 4 15 side-chains
T2 AminoAcid 19 24 Thr11
T3 AminoAcid 29 34 Lys43
T4 Modulation 35 41 orient
T5 NucleophilicAttack 46 57 nucleophile
E1 Modulation:T4 Agent:T1 Theme:E2
E2 NucleophilicAttack:T5
R1 whole_part Arg1:T2 Arg2:T1
R2 whole_part Arg1:T3 Arg2:T1
~~~

~~~ ann
ATP and arginine are pre-aligned precisely by the enzyme.
T1 OtherCompound 0 3 ATP
T2 AminoAcid 8 16 arginine
T3 Modulation 21 42 pre-aligned precisely
T4 Enzyme 50 56 enzyme
E1 Modulation:T3 Agent:T4 Theme:T1 Theme2:T2
~~~

- orient
- orientated
- orientation
- orienting
- functions by orienting
- place
- positioning
- positions
- positioned
- precise positioning
- relative positioning
- aligned
- alignment
- Alignment
- precise alignment
- precisely pre-aligned
- exposing
- sequestering
- this rearrangement
- transformation
- any effect
- effect
- effects
- greater effect
- very fast

The following words may suggest `Modulation` depending on the
situations:

- assistance
- perturbed
- chemical rescue
- confer
- forcing
- keeping from being disrupted

The following is a special case, which refers to another reaction
event:

- latter explanation [coreference to another reaction event]

The following words are negated.

~~~ ann
The active site is unperturbed.
T1 EntityProperty 4 15 active site
T2 Modulation 19 30 unperturbed
E1 Modulation:T2 Theme:T1
A1 Negation E1
~~~

- unaltered
- unchanged
- unperturbed

The *Agent* for this reaction event tends to be [Amino Acid](),
[Other Compound](), [Enzyme](), and [Entity Property](), although
[Functional Group]() and [Cofactor]() can also be *Agent*.

The *Theme* for this reaction event tends to be [Amino Acid](),
[Other Compound](), [Functional Group]() and [Entity Property](), although
[Enzyme]() and [Cofactor]() can also be *Theme*.


