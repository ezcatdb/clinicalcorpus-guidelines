---
layout: entry
title: "Activation"
category: reaction
shortdef: "A reaction step for activation"
order: 7
---

The following words are typical triggers for the reaction event,
`Activation`:

~~~ ann
Enteropeptidase initiates the activation of pancreatic hydrolases by cleaving and activating trypsinogen.
T1 Enzyme 0 15 Enteropeptidase
T2 Activation 30 40 activation
T3 Enzyme 44 65 pancreatic hydrolases
T4 Cleavage 69 77 cleaving
T5 Activation 82 92 activating
T6 Enzyme 93 104 trypsinogen
A1 EnzymeCompoundAttribute T3 Types/family
E1 Activation:T2 Agent:T1 Theme:T3
E2 Cleavage:T4 Agent:T1 Theme:T6
E3 Activation:T5 Agent:T1 Theme:T6
~~~
~~~ ann
The phosphoryl groups of the substrates are polarized through Lewis acid catalysis via complexation with the metal ion.
T1 FunctionalGroup 4 21  phosphoryl groups
T2 EntityProperty 29 39 substrates
T3 Activation 44 53 polarized
T4 Activation 62 82 Lewis acid catalysis
T5 Interaction 87 99 complexation
T6 Cofactor 109 118 metal ion
E1 Activation:T3 Agent:T6 Theme:T1
E2 Activation:T4 Agent:T6 Theme:T1
E3 Interaction:T5 Agent:T6 Theme:T1
R1 whole_part Arg1:T2 Arg2:T1
R2 coreference Arg1:E2 Arg2:E1
A1 EventAttribute E2 CatalyticRole
A2 EntityAttribute T2 ReactionState
~~~
~~~ ann
The proton made a slightly elongated covalent bond.
T1 FunctionalGroup 4 10 proton
T2 Activation 27 36 elongated
T3 EntityProperty 37 50 covalent bond
E1 Activation:T2 Agent:T1 Theme:T3
A1 EntityAttribute T3 ReactivePart
~~~
~~~ ann
The ionization of metal-ligated water generates the attacking hydroxide ion.
T1 Activation 4 14 ionization
T2 Cofactor 18 23 metal
T3 Interaction 24 31 ligated
T4 OtherCompound 32 37 water
T5 WholeReaction 38 47 generates
T6 NucleophilicAttack 52 61 attacking
T7 FunctionalGroup 62 75 hydroxide ion
E1 Activation:T1 Theme:T4 Agent:T2
E2 Interaction:T3 Agent:T2 Theme:T4
E3 WholeReaction:T5 Agent:E1 Theme:T7
E4 NucleophilicAttack:T6 Agent:T7
~~~

- activation
- ionization
- ionizations
- Lewis acid (catalysis)
- reactivation
- accelerate
- accelerated
- activate
- activated
- activates
- activation
- activator
- assistance
- assisted
- augmented
- become active
- contribute to ability of
- driving force
- elongated
- enhance
- facilitate
- facilitated
- facilitates
- facilitating
- polarization
- polarized
- polarizes
- preactivated
- reactivated
- reactivation
- stimulate
- triggering
- induced
- mediated
- helper function
- role in polarizing

The following word is negated.
~~~ ann
Unactivated substrates, maltopentaose.
T1 Activation 0 11 Unactivated
T2 EntityProperty 0 22 Unactivated substrates
T3 OtherCompound 24 37 maltopentaose
E1 Activation:T1 Theme:T2
A1 EntityAttribute T2 ReactionState
A2 Negation E1
R1 corresponds_to Arg1:T2 Arg2:T3
~~~

- unactivated

The *Agent* for this reaction event tends to be [Amino Acid](),
[Other Compound](), [Cofactor]() or their [Functional Group](), although
[Enzyme]() and [Entity Property]() can also annotated to be the *Agent* in
a few cases. The *Theme* for this reaction event tends to be [Enzyme](),
[Other Compound](), [Entity Property](), which indicates “reaction state”,
or [Functional Group](), although [Amino Acid]() can also annotated to be
the *Theme* in a few cases.
