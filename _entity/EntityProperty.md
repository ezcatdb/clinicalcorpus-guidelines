---
layout: entry
title: "Entity Property"
shortdef: "various technical terms"
order: 6
---

{% comment %}TODO: entity type introduction {% endcomment %}

<!-- details -->

### Attribute; Reaction states

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
<!---
{% include image.html name="state.png"
   caption="Example 1"
%}
--->

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

<!---
{% include image.html name="state-whole-part-1.png"
   caption="Example 2"
%}
{% include image.html name="state-whole-part-2.png"
   caption="Example 3"
%}
{% include image.html name="state-whole-part-3.png"
   caption="Example 4"
%}
--->

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

<!---
{% include image.html name="state-corresponds-to.png"
   caption="Example 5"
%}
--->

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

<!---
{% include image.html name="complex-whole-part-1.png"
   caption="Example 6"
%}
{% include image.html name="complex-whole-part-2.png"
   caption="Example 7"
%}
--->

### Attribute; Reactive parts

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

### Other entity properties

“Active site” and “binding site” will be annotated in this
category. In addition, some “motif(s)”, “region” and “sequence”, which
indicates some specific part of enzymes, will be annotated in this
category.

~~~ ann
Metal ions bound in the active site of BamHI.
T1 Cofactor 0 10 Metal ions
T2 Interaction 11 16 bound
T3 EntityProperty 24 35 active site
T4 Enzyme 39 44 BamHI
E1 Interaction:T2 Agent:T3 Theme:T1
R1 whole_part Arg1:T4 Arg2:T3
~~~
~~~ ann
the active site residues His295 and His296
T1 EntityProperty 4 15 active site
T2 AminoAcid 4 24 active site residues
T3 AminoAcid 25 31 His295
T4 AminoAcid 36 42 His296
R1 whole_part Arg1:T1 Arg2:T2
R2 group_member Arg1:T2 Arg2:T3
R3 group_member Arg1:T2 Arg2:T4
~~~
~~~ ann
binding motifs in PPAT
T1 Interaction 0 7 binding
T2 EntityProperty 0 14 binding motifs
T3 Enzyme 18 22 PPAT
E1 Interaction:T1 Agent:T2
R1 whole_part Arg1:T3 Arg2:T2
~~~

- binding motif(s)
- signature motif(s)
  - conserved ***(113)RTXGISTT*** motif
  - conserved ***(14)HXGH*** motif
  - analogous ***HXGH*** motifs
  - ***histidine*** motif
- binding region(s)
- region(s)
  - (multiple) regulatory regions
  - ***primed*** region
  - ***single-stranded*** regions
  - ***Mn2*** region

“Mutation” or those words that describe mutations, such as
“replacement”, and “change”, will be included in this category.
<!---
The ***emphasized*** words can be replaced with other phrases.
--->
~~~ ann
the alteration of acid/base functionality (Glu-130 to His Mutation)
T1 EntityProperty 4 14 alteration
T2 Protonation 18 22;28 41 acid functionality
T3 Deprotonation 23 41 base functionality
T4 AminoAcid 43 50 Glu-130
T5 AminoAcid 54 57 His
T6 EntityProperty 58 66 Mutation
E1 Protonation:T2 Agent:T4
E2 Deprotonation:T3 Agent:T4
R1 coreference Arg1:T6 Arg2:T1
~~~

Some parameters, such as the following, will also be annotated as
“entity property”.

~~~ ann
catalytic parameters, k(cat)/K(m), k(cat), and K(m).
T1 EntityProperty 0 20 catalytic parameters
T2 EntityProperty 22 33 k(cat)/K(m)
T3 EntityProperty 35 41 k(cat)
T4 EntityProperty 47 51 K(m)
R1 group_member Arg1:T1 Arg2:T2
R2 group_member Arg1:T1 Arg2:T3
R3 group_member Arg1:T1 Arg2:T4
~~~

- k(cat)
- k(cat) values
- kcat
- k(cat)/K(m)
- k(cat)/K(m) value
- kcat/KM
- kcat/Km
- log(k(cat))
- log(k(cat)/K(m))
- pKa
- pK(a)
- Ki
- Ki values

Moreover, the following phrases/words should be annotated as “entity property”.

- cell wall

