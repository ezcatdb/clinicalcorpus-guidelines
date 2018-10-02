---
layout: entry
title: "Pharmacological_substance"
shortdef: "Medicine (PHAEDRA)"
order: 21
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/PHAEDRA/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

This entity is based on <a href="https://www.ebi.ac.uk/chembl/">ChEMBL</a> database.

Medicines are categorized into this entity group.

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Pharmacological_substance 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
E1 Medication:T2 has_agent:T1 dose:T3 period:T4
~~~

~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 Adverse_effect 4 26 common adverse effects
T2 Pharmacological_substance 30 38 Icotinib
T3 Symptom 44 48 rash
T4 Symptom 53 61 diarrhea
E1 Adverse_effect:T1 has_agent:T2 affects:T3 affects2:T4
~~~

Although 'placebo' is not any medicine, this word can be tentatively categorized into this entity.

~~~ ann
Ten healthy volunteers took 200 mg itraconazole or matched placebo once daily for 4 days.
T1 Subject 0 22 Ten healthy volunteers
T2 Medication 23 27 took
T3 Medication 23 27 took
T4 Dose 28 34 200 mg
T5 Pharmacological_substance 35 47 itraconazole
T6 Pharmacological_substance 59 66 placebo
T7 Frequency 67 77 once daily
T8 Period 82 88 4 days
E1 Medication:T2 has_subject:T1 has_agent:T5 dose:T4 period:T8 frequent:T7
E2 Medication:T3 has_subject:T1 has_agent:T6 dose:T4 period:T8 frequent:T7
~~~
<!-- details -->
