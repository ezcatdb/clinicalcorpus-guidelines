---
layout: entry
title: "Destabilisation"
category: reaction
shortdef: "A reaction step for destabilisation"
order: 6
---

The following words are typical triggers for the reaction event,
`Destabilisation`:

~~~ ann
An extensive hydrogen bond network may destabilize the intermediate.
T1 Interaction 3 34 extensive hydrogen bond network
T2 SpeculationCue 35 38 may
T3 Destabilisation 39 50 destabilize
T4 EntityProperty 55 67 intermediate
E1 Interaction:T1 
E2 Destabilisation:T3 Agent:E1 Theme:T4 Cue:T2
A1 EntityAttribute T4 ReactionState
A2 Speculation E2
A3 Certainty E2 Probable
~~~

- destabilize
- electrostatic destabilization

Although some phrases, such as “distortion”, do not indicate `Destabilisation`
directly, they can be triggers for the reaction event, `Destabilisation`, as follows:

~~~ ann
Sugar ring distortion
T1 FunctionalGroup 0 10 Sugar ring
T2 Destabilisation 11 21 distortion
E1 Destabilisation:T2 Theme:T1
~~~

- denature
- denaturing
- distorted
- distortion
- this distortion
- distortion from planarity
- electrostatic repulsion
- electrostatic repulsions
- exploded
- make too short-lived for

The following word is negated.

~~~ ann
The sugar adopts an undistorted 4C1 conformation.
T1 FunctionalGroup 4 9 sugar 
T2 Destabilization 20 31 undistorted
T3 EntityProperty 32 48 4C1 conformation
E1 Destabilization:T2 Theme:T3 Theme2:T1
A1 Negation E1
~~~

- undistorted

<div style="background-color: yellow" markdown="1">
The *Agent* and *Theme* for this reaction event tend to be functional
groups of [Amino Acid](), [Other Compound](), or [Cofactor](), although
[Amino Acid](), [Other Compound](), or [Cofactor]() can also be the
*Agent* and *Theme* if those functional groups are not indicated.
</div>

