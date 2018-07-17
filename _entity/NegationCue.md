---
layout: entry
title: "Negation Cue"
shortdef: "negation words and phrases"
order: 7
---

Negation words, such as "not", can be combined with event expressions.
~~~ ann
OP-enzyme conjugate cannot be reactivated.
T1 OtherCompound 0 2 OP
T2 Enzyme 3 9 enzyme
T3 EntityProperty 0 19 OP-enzyme conjugate
T4 NegationCue 20 26 cannot
T5 Activation 30 41 reactivated
E1 Activation:T5 Theme:T3 Cue:T4
A1 Negation E1
R1 whole_part Arg1:T3 Arg2:T1
R2 whole_part Arg1:T3 Arg2:T2
~~~

However, even if the negation words can be identified as NegationCue, such cues are not always connected with event expressions.
~~~ ann
A gem-diol intermediate, not an acyl enzyme.
T1 FunctionalGroup 2 10 gem-diol
T2 EntityProperty 2 23 gem-diol intermediate
T3 NegationCue 25 28 not
T4 FunctionalGroup 32 36 acyl
T5 Enzyme 37 43 enzyme
T6 EntityProperty 32 43 acyl enzyme
A1 EntityAttribute T2 ReactionState
A2 EntityAttribute T6 ReactionState
R1 whole_part Arg1:T2 Arg2:T1
R2 whole_part Arg1:T6 Arg2:T4
R3 whole_part Arg1:T6 Arg2:T5
~~~

In addition to typical negation words, such as “no”, “not’, “none” and
“neither ~ nor ~”, the following words/phrases can be negation cues.

~~~ ann
Transition state stabilization by PPAT without involving functional groups of the enzyme.
T1 EntityProperty 0 16 Transition state
T2 Stabilization 17 30 stabilization
T3 Enzyme 34 38 PPAT
T4 NegationCue 39 46 without
T5 FunctionalGroup 57 74 functional groups
T6 Enzyme 82 88 enzyme
E1 Stabilization:T2 Agent:T3 Theme:T1
E2 Stabilization:T2 Agent:T3 Theme:T5 Cue:T4
A1 Negation E2
A2 EntityAttribute T1 ReactionState
A3 EnzymeCompoundAttribute T6 Coreference
R1 coreference Arg1:T6 Arg2:T3
~~~

- instead of
- lack(s)/lacking
- loss/lost
- rather than
- other than
- without
- absence/absent
- barely
- failed to
- inability/incapable
- (very) little
- (very) poor
- (too/very) low

The reaction event words such as “unprotonated” and “unactivated”
should be clicked with “Negation” for the Event attributes, although
they do not have corresponding negation cues.

~~~ ann
"Unactivated" substrates
T1 Activation 1 12 Unactivated
T2 EntityProperty 0 24 "Unactivated" substrates
E1 Activation:T1 Theme:T2
A1 Negation E1
~~~

<!--
{% include image.html name="negated-event.png"
   caption="Example 8"
%}
-->
