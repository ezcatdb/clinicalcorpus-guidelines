---
layout: entry
title: "Negation Cue"
shortdef: "negation words and phrases"
order: 7
---

Negation words, such as "not", can be combined with event expressions.

~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 NegationCue 16 19 not
T3 Surgery 28 39 lung resect
E1 Surgery:T3 has_subject:T1 Cue:T2
A1 Negation E1
~~~

However, even if the negation words can be identified as NegationCue, such cues are not always connected with event expressions.

<!--

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
-->

In addition to typical negation words, such as “no”, “not’, “none” and
“neither ~ nor ~”, the following words/phrases can be negation cues.

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

<!--
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


{% include image.html name="negated-event.png"
   caption="Example 8"
%}
-->
