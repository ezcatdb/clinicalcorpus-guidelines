---
layout: entry
title: "Whole Reaction"
category: reaction
shortdef: "A reaction event (by enzyme), composed of reaction steps"
order: 1
---

The ambiguous reaction-related words, such as “catalysis”, “activity”,
“reaction”, “action” and “mechanism”, which do not describe any
detailed reaction steps, can be annotated as trigger words in this
reaction event category. For this reaction event, *Agent* tends to be
[Enzyme]() rather than [Functional group]() or [Other compound]().

<!--
 {% include image.html name="hydrolysis-event.jpg"
     caption="Example 9"
  %}
-->

~~~ ann
Myrosinase hydrolyzes plant anionic 1-thio-beta-d-glucosides.
T1 Enzyme 0 10 Myrosinase
T2 WholeReaction 11 21 hydrolyzes 
T3 OtherCompound 36 60 1-thio-beta-d-glucosides
E1 WholeReaction:T2 Agent:T1 Theme:T3
A1 ReactionType E1 Hydrolysis
~~~

Typical triggers of this reaction event are as follows:

~~~ ann
The catalytic mechanism of the metallo-beta-lactamase
T1 WholeReaction 4 23 catalytic mechanism
T2 Enzyme 31 53 metallo-beta-lactamase
T3 Cofactor 31 38 metallo
E1 WholeReaction:T1 Agent:T2
~~~

- Catalysis
- Catalytic mechanism
- Hydrolysis
- Its activity
- pre-steady-state reactions
- One of first catalytic steps
- This reaction
- This reaction catalysed
- Two distinct steps
- acting as
- action
- activities
- activity
- all activity
- alternative function
- autocatalytic processing
- biocatalyst
- biochemical mechanism
- biosynthesis
- both hydrolytic processes
- both mechanisms
- both of chemical steps
- both reaction paths
- both steps
- catalyses production
- catalyses rate-limiting step
- catalysis 
- catalysis of bimolecular reactions
- catalytic
- catalytic activity
- catalytic cycle
- catalytic diversity
- catalytic efficiency
- catalytic function
- catalytic functions
- catalytic machinery
- catalytic mechanism
- catalytic mechanisms
- catalytic reaction
- catalytically-involved
- catalyze analogous reactions
- chemical mechanism
- chemical step
- common catalyzed mechanisms
- complete mechanism
- efficient catalysis
- entropic mechanism for catalytic turnover
- enzymatic activity
- enzymatic function
- enzymatic reaction
- enzymatic reaction catalyzed
- enzymatic significance
- enzyme activity
- mechanism
- mechanism of action
- mechanistic
- mechanistic consequences
- Reaction mechanism
- This mechanism
- Two possible mechanisms
- enzyme mechanism
- enzymic mechanism
- enzymological properties
- mechanism
- mechanism of action
- mechanism of catalysis
- its mechanism
- mechanism-based
- mechanisms
- mechanistic
- mechanistic basis
- mechanistic steps
- metabolizes
- Electrostatic guidance
- GA/GB mechanism
- minimum kinetic mechanism
- high catalytic efficiency
- high catalytic power
- molecular mechanism
- molecular mechanisms
- ordered kinetic mechanism
- ordered reaction mechanism
- overall catalytic activity
- overall mechanism
- precise mechanism
- new mechanism
- same chemical mechanism for catalysis
- same general catalytic mechanism
- substrate-assisted catalysis
- substrate-assisted catalysis mechanism
- three-metal mechanism
- two metal ion mechanism
- two-metal-ion mechanism
- two-step mechanism
- two models
- these gas-phase reactions
- this bimolecular reaction
- unimolecular reactions
- turnover
- various genetic processes
- series of reactions
- significant activity
- similar catalytic mechanism
- full enzymatic activity
- structural mechanism
- solution reaction
- specific activity
- step
- steps
- rate-determining step
- this step
- first committed step
- first step
- single reaction step
- second step of catalysis
- react
- reaction
- reaction catalyzed
- reaction mechanism
- reaction mechanism o
- reaction pathway
- reactions
- reactions catalyzed
- this reaction
- reactivity
- operate
- normal function
- unusually high activity
- utilize

Non-specific catalytic roles described in the following are also
categorized into this reaction event.

~~~ ann
Role of lys-230 in the mechanism of pyruvate kinase
T1 WholeReaction 0 4 Role
T2 AminoAcid 8 15 lys-230
T3 WholeReaction 23 32 mechanism
T4 Enzyme 36 51 pyruvate kinase
T5 OtherCompound 36 44 pyruvate
E1 WholeReaction:T1 Agent:T2
E2 WholeReaction:T3 Agent:T4
R1 whole_part Arg1:T4 Arg2:T2
A1 EventAttribute E1 CatalyticRole
~~~

In this case, "CatalyticRole" should be selected for "EventAttribute".

- catalytic role(s)
- function
- functional properties
- functional role(s)
- important but non-essential role
- important role in catalysis
- its role in catalysis
- their role
- major roles
- minor roles
- play(s) role
- plays important role
- primary role
- role
- roles
- role in catalysis
- Roles in catalysis
- dual functionality
- dual role
- three elements

The reaction events which “form” some compounds of functional groups are also categorized in this
reaction event:

~~~ ann
Cytidylyltransferases utilizes CTP to form CDP-alcohols or CMP-acid sugars plus inorganic pyrophosphates.
T1 Enzyme 0 21 Cytidylyltransferases
T2 WholeReaction 22 30 utilizes
T3 OtherCompound 31 34 CTP
T4 WholeReaction 38 42 form
T5 OtherCompound 43 55 CDP-alcohols
T6 OtherCompound 59 74 CMP-acid sugars
T7 OtherCompound 80 104 inorganic pyrophosphates
T8 FunctionalGroup 47 55 alcohols
T9 FunctionalGroup 68 74 sugars
T10 FunctionalGroup 90 104 pyrophosphates
E1 WholeReaction:T2 Agent:T1 Theme:T3
E2 WholeReaction:T4 Agent:T1 Theme:T5 Theme2:T6 Theme3:T7
R1 whole_part Arg1:T5 Arg2:T8
R2 whole_part Arg1:T6 Arg2:T9
R1 whole_part Arg1:T7 Arg2:T10
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

- form
- formed
- forms
- formation
- transient formation
- generate
- generated
- generates
- generating
- produced
- production
- provide
- lead to
- resulting
- (whose action) produces
- yielding
- yields

More specific types of whole reactions, such as hydrolysis, transfer
and isomerization, are also categorized in this reaction event,
`WholeReaction`, as follows:

~~~ ann
Fhit catalyzes the hydrolysis of diadenosine triphosphate to AMP and ADP.
T1 Enzyme 0 4 Fhit
T2 WholeReaction 5 14;19 29 catalyzes hydrolysis
T3 OtherCompound 33 57 diadenosine triphosphate
T4 OtherCompound 61 64 AMP
T5 OtherCompound 69 72 AMP
E1 WholeReaction:T2 Agent:T1 Theme:T3 EndPoint:T4 EndPoint2:T5
A1	ReactionType E1 Hydrolysis
~~~

~~~ ann
COMT catalyses the transfer of the methyl group from AdoMet to one hydroxyl group of catechols.
T1 Enzyme 0 4 COMT
T2 WholeReaction 5 14;19 27 catalyses transfer
T3 FunctionalGroup 35 47 methyl group
T4 OtherCompound 53 59 AdoMet
T5 FunctionalGroup 67 81 hydroxyl group
T6 OtherCompound 85 94 catechols
E1 WholeReaction:T2 Agent:T1 Theme:T3 InitialPoint:T4 EndPoint:T5
A1 ReactionType E1 Transfer
R1 whole_part Arg1:T4 Arg2:T3
R2 whole_part Arg1:T6 Arg2:T5
~~~

- addition
- ability to convert
- ability to process
- acetylation (reaction)
- catalytic hydrolysis
- catalyze buffering
- catalyze conversion
- catalyze hydrolysis
- catalyzes hydrolysis
- catalyze their reactions
- catalyze transfers
- catalyses transfer
- catalyzes transfer
- catalyzing transfer
- catalyzed hydrolysis
- catalyzed reaction
- catalyzed tritium exchange
- catalyzes addition
- catalyzes formation
- catalyzes irreversible conversion
- catalyzes posttranscriptional transglycosylation reaction
- catalyzes reversible interconversion
- Transglycosylation
- condensation mechanism
- conversion
- converts
- copied
- damaged
- direct hydrolysis
- dissociative
- double-displacement mechanism
- elimination reaction
- enolization step
- enzymatic hydrolysis
- highly dissociative
- hydration catalyzed
- hydride transfer
- hydrolysis
- hydrolysis catalyzed
- hydrolysis event
- hydrolysis mechanism
- hydrolytic activity
- hydrolytic reaction
- hydrolytic reaction mechanism
- hydrolyze
- hydrolyzed
- hydrolyzes
- hydrolyzing
- initial ketonization
- interconversion
- interconversions
- isomerase activity
- isomerization
- ketonisation
- mechanism of hydrolysis
- mechanism retaining anomeric configuration at cleavage point
- modification to retroaldol mechanism
- modified
- modifies
- oxidation
- processing
- proteolytic activities
- rearrangement
- reduction
- regenerating
- repair
- retroaldol mechanism
- reversible acetylation
- same retroaldol mechanism
- side reaction converting
- separating
- subsequent hydrolysis step
- subsequent transfer
- suicidal side reaction that converts
- supplies
- synthesis
- synthesize
- synthesize de novo
- synthesized
- this double-displacement reaction
- this enzymatic reaction
- this isomerization
- transaminase reaction
- transfer
- transfer catalyzing
- transfer reaction
- transferred
- transferring
- transglycosylation
- translocation
- two-step double-displacement mechanism
- unknots
- untangles

Occasionally, the reactions are indicated by demonstrative/relative
pronouns as follows:

- former event
- latter
- that
- this
- those
- which

This reaction event involves arguments, such as *Agent*, *Theme*,
*Initial Point*, and *End Point*.

The *Agent* tends to be [Enzyme](), [Amino Acid](), and [Cofactor](),
although occasionally [Functional Group](), [Other Compound](), and
[Entity Property]() can be *Agent*.

The *Theme* tends to be [Other Compound](), their [Functional Group]()
and [Entity Property](), whose attributes are [Reaction State](), although
occasionally [Cofactor](), [Enzyme](), and [Amino Acid](), can be *Theme*.

In some cases, this reaction event may involve *Initial Point*, and
*End Point*. The *Initial Point* tends to be [Other Compound](),
[Amino Acid](), [Cofactor]() and their [Functional Group](). The *End
Point* tends to be [Other Compound](), [Amino Acid](), [Cofactor]() and
their [Functional Group](), as well as [Entity Property]().
