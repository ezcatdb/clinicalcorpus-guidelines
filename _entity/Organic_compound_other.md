---
layout: entry
title: "Organic_compound_other"
shortdef: "Organic Compound, including medicine (GENIA)"
order: 6
---

The name of this entity group is based on the GENIA corpus.

This entity is based on <a href="https://www.ebi.ac.uk/chembl/">ChEMBL</a> database.

Organic compounds, including medicines, are categorized into this entity group.

~~~ ann
The alpha-phosphate of ATP.
T1 Organic_compound_other 23 26 ATP
~~~

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Organic_compound_other 0 11 Pirfenidone
T2 Value 25 35 600 mg/day
~~~

~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 AdverseEffect 4 26 common adverse effects
T2 Organic_compound_other 30 38 Icotinib
T3 Symptom 44 48 rash
T4 Symptom 53 61 diarrhea
E1 AdverseEffect:T1 has_agent:T2 affects:T3 affects:T4
~~~


<!-- details -->
