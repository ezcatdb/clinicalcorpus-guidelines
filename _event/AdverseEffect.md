---
layout: entry
title: "Adverse effect"
category: "Effects by treatment"
shortdef: "Adverse effect by medical treatment"
order: 6
---

This event is based on the <a href="http://www.nactem.ac.uk/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

 The following words can be triggers of this event:

- adverse effect
- side effect

~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 Adverse_effect 4 26 common adverse effects
T2 Organic_compound_other 30 38 Icotinib
T3 Symptom 44 48 rash
T4 Symptom 53 61 diarrhea
E1 Adverse_effect:T1 has_agent:T2 affects:T3 affects2:T4
~~~

Arguments:

The *has_agent* for this event must be [Organic_compound_other](), [Medical Treatment](), [Administration of medicine]() or [Surgery]().

The *has_subject* for this event must be [Subject]().

The *affects* for this event must be [Disease]() or [Symptom]().

<!---
The *Theme* for this reaction event must be other reaction events.
--->