---
layout: entry
title: "Subject"
shortdef: "Subjects for clinical trials, patients, and experimental animals (PHAEDRA)"
order: 7
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/PHAEDRA/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

<!--
-->

Patients, and subjects for clinical trials, and experimental animals, such as mice, are categorized into this entity group.

The definition of 'Anatomical_entity' is based on the Semantic types of 
- 'podg' (Patient or Disabled Group),
- 'grup' (Group), and 
- 'mamm' (Mammal)

in the <a href="https://www.nlm.nih.gov/research/umls/">UMLS database</a>.

~~~ ann
Subjects who underwent lung resect.
T1 Subject 0 8 Subjects
T2 Medical_treatment 23 34 lung resect
T3 Anatomical_entity 23 27 lung
~~~
~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Medical_treatment 32 53 right upper lobectomy
T3 Disorder 58 69 lung cancer
T5 Anatomical_entity 58 62 lung
R1 Subject_Disorder Arg1:T1 Arg2:T3
~~~
~~~ ann
70 subjects (50 men and 20 women; mean age, 63.1 y)
T1 Subject 0 11 70 subjects
T2 Subject 13 19 50 men
T3 Subject 24 32 20 women
R1 member_of Arg1:T2 Arg2:T1
R2 member_of Arg1:T3 Arg2:T1
~~~
~~~ ann
Bleomycin-induced pulmonary fibrosis in mice.
T1 Pharmacological_substance 0 9 Bleomycin
T3 Disorder 18 36 pulmonary fibrosis
T4 Subject 40 44 mice
R1 Subject_Disorder Arg1:T4 Arg2:T3
R3 Cause_Effect Arg1:T1 Arg2:T3
~~~

~~~ ann
Ten healthy volunteers took 200 mg itraconazole or matched placebo once daily for 4 days.
T1 Subject 0 22 Ten healthy volunteers
T2 Medical_treatment 23 27 took
T5 Pharmacological_substance 35 47 itraconazole
T6 Pharmacological_substance 59 66 placebo
~~~

~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T2 Anatomical_entity 27 32 liver
T4 Disorder 27 43 liver metastases
T5 Subject 51 63 two patients
T7 Biological_process 33 43 metastases
R1 Subject_Disorder Arg1:T5 Arg2:T4
~~~


<!-- details -->
