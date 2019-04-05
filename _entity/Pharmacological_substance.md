---
layout: entry
title: "Pharmacological_substance"
shortdef: "Medicine (PHAEDRA)"
order: 21
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/PHAEDRA/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

<!--
This entity is based on <a href="https://www.ebi.ac.uk/chembl/">ChEMBL</a> database.
-->

The definition of 'Anatomical_entity' is based on the Semantic types of 
- 'phsu' (Pharmacologic Substance)
- 'antb' (Antibiotic), and
- 'irda' (Indicator, Reagent, or Diagnostic Aid)

in the <a href="https://www.nlm.nih.gov/research/umls/">UMLS database</a>.

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Pharmacological_substance 0 11 Pirfenidone
T2 Medical_treatment 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
R1 Medication Arg1:T2 Arg2:T1
~~~

~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 Adverse_effect 4 26 common adverse effects
T2 Pharmacological_substance 30 38 Icotinib
T3 Disorder 44 48 rash
T4 Disorder 53 61 diarrhea
R1 Event_Disorder Arg1:T1 Arg2:T3
R2 Event_Disorder Arg1:T1 Arg2:T4
R3 Cause_Effect Arg1:T2 Arg2:T1
~~~

~~~ ann
Bleomycin-induced pulmonary fibrosis in mice.
T1 Pharmacological_substance 0 9 Bleomycin
T2 Adverse_effect 10 17 induced
T3 Disorder 18 36 pulmonary fibrosis
T4 Subject 40 44 mice
R1 Subject_Disorder Arg1:T4 Arg2:T3
R2 Event_Disorder Arg1:T2 Arg2:T3
R3 Cause_Effect Arg1:T1 Arg2:T2
~~~

Medicines are categorized into this entity group.
The following protein medicines can also be categorized in to this group.

- Nivolumab
- Tocilizumab


Although 'placebo' is not any medicine, this word can be tentatively categorized into this entity.

~~~ ann
Ten healthy volunteers took 200 mg itraconazole or matched placebo once daily for 4 days.
T1 Subject 0 22 Ten healthy volunteers
T2 Medical_treatment 23 27 took
T3 Medical_treatment 23 27 took
T4 Dose 28 34 200 mg
T5 Pharmacological_substance 35 47 itraconazole
T6 Pharmacological_substance 59 66 placebo
T7 Frequency 67 77 once daily
T8 Period 82 88 4 days
R1 Medication Arg1:T2 Arg2:T5
R2 Medication Arg1:T3 Arg2:T6
~~~
<!-- details -->
