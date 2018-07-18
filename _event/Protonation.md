---
layout: entry
title: "Protonation"
category: reaction
shortdef: "A reaction step by general acid"
order: 3
---

The following words, which describe actions of this reaction event,
are triggers for the reaction event, [Protonation]():

~~~ ann
Tyr152 is involved in protonation of the epoxide oxygen.
T1 AminoAcid 0 6 Tyr152
T2 Protonation 22 33 protonation
T3 FunctionalGroup 41 55 epoxide oxygen
E1 Protonation:T2 Agent:T1 Theme:T3
~~~

~~~ ann
Glu-133 donates a proton to the leaving amide ion.
T1 AminoAcid 0 7 Glu-133
T2 Protonation 8 15;18 24 donates proton
T3 FunctionalGroup 18 24 proton
T4 EntityProperty 32 39 leaving
T5 FunctionalGroup 40 50 amide ion
E1 Protonation:T2 Agent:T1 Theme:T5
R1 corresponds_to Arg1:T4 Arg2:T5
A1 EntityAttribute T4 ReactivePart
~~~

- protonation
- donate proton
- prior protonation
- proton destined
- proton donated
- proton donation
- proton for donation
- proton uptake
- this proton uptake
- protonate
- protonated
- protonates
- protonating
- protonation
- serves as proton source to
- transient protonation

However, the following words can be also the [Deprotonation]() event, as well as the [Protonation]() event.

~~~ ann
Glu132 acts as a proton shuttle, deprotonating the water and subsequently protonating the leaving group.
T1 AminoAcid 0 6 Glu132
T2 Protonation 17 31 proton shuttle
T3 Deprotonation 17 31 proton shuttle
T4 FunctionalGroup 17 23 proton
T5 Deprotonation 33 46 deprotonating
T6 OtherCompound 51 56 water
T7 Protonation 74 85 protonating
T8 EntityProperty 90 103 leaving group
E1 Protonation:T2 Agent:T1 
E2 Deprotonation:T3 Agent:T1
E3 Deprotonation:T5 Agent:T1 Theme:T6
E4 Protonation:T7 Agent:T1 Theme:T8
A1 EntityAttribute T8 ReactivePart
A2 EventAttribute E1 CatalyticRole
A3 EventAttribute E2 CatalyticRole
R1 coreference Arg1:E3 Arg2:E2
R2 coreference Arg1:E4 Arg2:E1
~~~

- proton rearrangement
- proton shuttle
- proton transfer
- proton transferred
- proton transferring
- proton transfers
- rate-determining transfer of proton

The following words, which are “catalytic roles” for this reaction
event, are also triggers:

~~~ ann
Asp40 acts as a general acid to protonate the purine leaving group.
T1 AminoAcid 0 5 Asp40
T2 Protonation 15 28 general acid
T3 Protonation 32 41 protonate
T4 OtherCompound 46 52 purine
T5 EntityProperty 53 66 leaving group
E1 Protonation:T2 Agent:T1 Theme:T4
E2 Protonation:T3 Agent:T1 Theme:T4
R1 coreference Arg1:E2 Arg2:E1
R2 corresponds_to Arg1:T5 Arg2:T4
A1 EventAttribute E1 CatalyticRole
~~~
In this case, "CatalyticRole" should be selected for "EventAttribute".

- acid
- acid catalysis
- acid catalyst
- acid functionality
- acid properties
- acid-catalyzed
- catalytic general acid
- general acid
- general acid assistance
- general acid catalysis
- general acid catalyst
- general-acid
- general-acid catalysis
- general-acid catalyst
- general-acid-catalyzed reaction
- GA
- proton donor
- second general acid
- proton shuttle

The following word describes “protonation” state, which is negated.
~~~ ann
The unprotonated side chain of the amino acid.
T1 Protonation 4 16 unprotonated
T2 FunctionalGroup 17 27 side chain
T3 AminoAcid 35 45 amino acid
E1 Protonation:T1 Theme:T2
A1 Negation E1
R1 whole_group Arg1:T3 Arg2:T2
~~~

- unprotonated

The *Agent* and *Theme* for this reaction event tend to be functional
groups of [Amino Acid](), [Other Compound](), or [Cofactor](),
although [Amino Acid](), [Other Compound](), or [Cofactor]() can also
be the *Agent* and *Theme* if those functional groups are not indicated.

The phrases, “proton transfer”, “proton shuttle” and “proton
rearrangement” can be both [Protonation]() and [Deprotonation](),
depending on the nearby words.
