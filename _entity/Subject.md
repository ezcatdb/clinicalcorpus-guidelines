---
layout: entry
title: "Subject"
shortdef: "Subjects for clinical trials, and patients (PHAEDRA)"
order: 7
---

The name of this entity group is based on the <a href="http://www.nactem.ac.uk/">PHAEDRA corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

<!--
This entity is based on <a href="https://www.ebi.ac.uk/chembl/">ChEMBL</a> database.
-->

Patients, and subjects for clinical trials are categorized into this entity group.

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
E1 Surgery:T2 has_subject:T1
R1 Subject_Disorder Arg1:T1 Arg2:T3
~~~




<!-- details -->
