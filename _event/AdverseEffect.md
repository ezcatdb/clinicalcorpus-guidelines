---
layout: entry
title: "Adverse effect"
category: "Effects by treatment"
shortdef: "Adverse effect by medical treatment (PHAEDRA)"
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

The following words also can be triggers of this event:

- induce
- cause

~~~ ann
Chemotherapy-induced peripheral neuropathy.
T1 Medication 0 12 Chemotherapy
T2 Adverse_effect 13 20 induced
T3 Symptom 21 42 peripheral neuropathy
E1 Medication:T1
E2 Adverse_effect:T2 has_agent:E1 disoder:T3
~~~

Arguments:

The *has_agent* for this event must be [Organic_compound_other](), [Medical Treatment](), [Medication]() or [Surgery]().

The *has_subject* for this event must be [Subject]().

The *affects* for this event must be [Disease]() or [Symptom]().

<!---
The *Theme* for this reaction event must be other reaction events.
--->