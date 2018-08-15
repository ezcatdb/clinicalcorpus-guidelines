---
layout: entry
title: "Potential therapeutic effect"
category: "Effects by treatment"
shortdef: "Potential therapeutic effect by medical treatment (PHAEDRA)"
order: 5
---

This event is based on the <a href="http://www.nactem.ac.uk/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

The following words can be triggers of this event:

- induce
- cause
- reduce

~~~ ann
Argon plasma coagulation reduced his symptoms.
T1 Surgery 0 24 Argon plasma coagulation
T2 Potential_therapeutic_effect 25 32 reduced
T3 Symptom 33 45 his symptoms
E1 Surgery:T1
E2 Potential_therapeutic_effect:T2 has_agent:E1 affects:T3
~~~

Arguments:
<div style="background-color: yellow" markdown="1">
The *has_agent* for this event must be [Organic_compound_other](), [Medical Treatment](), [Medication]() or [Surgery]().

The *has_subject* for this event must be [Subject]().

The *affects* for this event must be [Disease]() or [Symptom]().
</div>

<!---
The *Theme* for this reaction event must be other reaction events.
--->