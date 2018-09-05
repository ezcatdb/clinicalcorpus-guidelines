---
layout: entry
title: "Organic_compound_other"
shortdef: "Organic Compound, including medicine (GENIA)"
order: 20
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/meta-knowledge/">GENIA-Meta-knowledge corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

This entity is based on <a href="https://www.ebi.ac.uk/chembl/">ChEMBL</a> database.

Organic compounds, including medicines, are categorized into this entity group.

~~~ ann
The alpha-phosphate of ATP.
T1 Organic_compound_other 23 26 ATP
~~~

The following cases are for medicine.

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Organic_compound_other 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
E1 Medication:T2 has_agent:T1
R1 dose_of Arg1:T3 Arg2:T1
~~~

~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 Adverse_effect 4 26 common adverse effects
T2 Organic_compound_other 30 38 Icotinib
T3 Symptom 44 48 rash
T4 Symptom 53 61 diarrhea
E1 Adverse_effect:T1 has_agent:T2 affects:T3 affects2:T4
~~~


<!-- details -->
