---
layout: entry
title: "Nucleophilic Attack"
category: reaction
shortdef: "A reaction step by nucleophile"
order: 2
---

The following words, which describe actions, are triggers for the
reaction event `Nucleophilic Attack`:

~~~ ann
The S(N)2 reaction of acetate with methylstylene oxide to produce diol acetate ester
T1 NucleophilicAttack 4 18 S(N)2 reaction
T2 OtherCompound 22 29 acetate
T3 OtherCompound 35 54 methylstylene oxide
T4 WholeReaction 58 65 produce
T5 OtherCompound 66 84 diol acetate ester
E1 NucleophilicAttack:T1 Agent:T2 Theme:T3
E2 WholeReaction:T4 Agent:E1 Theme:T5
~~~

~~~ann
The nucleophilic attack of hydroxide ion on the scissile phosphate
T1 NucleophilicAttack 4 23 nucleophilic attack
T2 FunctionalGroup 26 40 hydroxide ion
T3 EntityProperty 48 56 scissile
T4 FunctionalGroup 57 66 phosphate
E1 NucleophilicAttack:T1 Agent:T2 Theme:T4
R1 corresponds_to Arg1:T3 Arg2:T4
A1 EntityAttribute T3 ReactivePart
~~~

- S(N)2 reaction; Abbreviation of "bimolecular nucleophilic substitution reaction"
- acylation
- addition
- associative catalytic mechanism
- associative in-line transfer
- attack
- attacked
- attacking
- attacking nucleophilic
- attacks
- attacks nucleophilically
- catalyze in-line displacement
- catalyzed attack
- direct nucleophilic attack
- direct nucleophilic mechanism
- displaces
- dissociative
- dissociative mechanism
- highly concerted
- hydrolytic
- in-line attack
- in-line mechanism
- in-line nucleophilic attack
- mechanism direct attack
- near attack
- nucleophilic addition
- nucleophilic attack
- nucleophilic displacement mechanism
- ping-pong-bi-bi pathway
- react
- reaction nucleophilic addition
- substitution
- transglycosylation

The following words, which are “catalytic roles” for this reaction
event, are also triggers:

~~~ ann
The catalytic nucleophile, Glu-210
T1 NucleophilicAttack 4 25 catalytic nucleophile
T2 AminoAcid 27 34 Glu-210
E1 NucleophilicAttack:T1 Agent:T2
A1 EventAttribute E1 CatalyticRole
~~~
In this case, "CatalyticRole" should be selected for "EventAttribute".

- attacking nucleophile
- catalytic nucleophile
- enzymatic nucleophile
- exogenous nucleophiles
- nucleophile
- nucleophiles
- nucleophilic agents
- nucleophilic catalyst
- nucleophilic nature
- nucleophilic participation
- nucleophilic role

The following words, which are “characteristics” for this reaction
event, are also triggers:

~~~ ann
Nucleophilicity of the active site serine
T1 NucleophilicAttack 0 15 Nucleophilicity
T2 EntityProperty 23 34 active site
T3 AminoAcid 35 41 serine
E1 NucleophilicAttack:T1 Agent:T3
R1 whole_part Arg1:T2 Arg:T3
~~~

- nucleophilic
- nucleophilic properties
- nucleophilicity

Occasionally, the reactions are indicated by demonstrative/relative
pronouns as in the [Whole Reaction]() event.

The *Agent* for this reaction event tends to be [Amino Acid](),
[Other Compound](), [Cofactor]() or their [Functional Group](), although
[Enzyme](), [Entity Property](), whose attribute is either [Reaction State]()
or [Reactive Part](), can also be the *Agent*.

The *Theme* for this reaction event tends to be [Functional Group](),
although [Other Compound](), or [Entity Property](), whose attribute is
either [Reaction State]() or [Reactive Part](), can also be the *Theme*.

In a few cases, this reaction event involves *Initial Point* and *End
Point*, which tend to be [Other Compound]() or [Functional Group]().
