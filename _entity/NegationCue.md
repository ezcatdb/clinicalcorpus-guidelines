---
layout: entry
title: "Negation Cue"
shortdef: "negation words and phrases"
order: 107
---

Negation words, such as "not", can be combined with event entities.

~~~ ann
The patient did not undergo lung resect.
T1 Subject 4 11 patient
T2 Negation_cue 16 19 not
T3 Medical_treatment 28 39 lung resect
T4 Anatomical_entity 28 32 lung
A1 Negated T3
~~~

However, even if the negation words can be identified as Negation_cue, such cues are not always connected with event entities.

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

The words such as “dysfunction” and “unactivated” should be negated even without any Negation cues.


<!--

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
