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

~~~ ann
Subjects who underwent lung resect.
T1 Subject 0 8 Subjects
T2 Surgery 23 34 lung resect
E1 Surgery:T2 has_subject:T1
~~~
~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 70 lung cancer
T4 Age_sbjct 2 13 40-year-old
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
~~~
~~~ ann
70 subjects (50 men and 20 women; mean age, 63.1 y)
T1 Subject 0 11 70 subjects
T2 Subject 13 19 50 men
T3 Subject 24 32 20 women
T4 N_sbjct 0 2 70
T5 N_sbjct 13 15 50
T6 N_sbjct 24 26 20
T7 Age_sbjct 34 50  mean age, 63.1 y
R1 member_of Arg1:T2 Arg2:T1
R2 member_of Arg1:T3 Arg2:T1
~~~
~~~ ann
Bleomycin-induced pulmonary fibrosis in mice.
T1 Pharmacological_substance 0 9 Bleomycin
T2 Adverse_effect 10 17 induced
T3 Symptom 18 36 pulmonary fibrosis
T4 Subject 40 44 mice
E1 Adverse_effect:T2 has_agent:T1 has_subject:T4 affects:T3
R1 Subject_Disorder Arg1:T4 Arg2:T3
~~~


<!-- details -->
