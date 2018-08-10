---
layout: entry
title: "Surgery"
category: medical treatment
shortdef: "Surgery in medical treatment"
order: 3
---

This reaction event is very rare, and uncouples other reaction
events. The following words may be triggers of this event:

- thoracotomy
- lobectomy
- pneumonectomy
- right pneumonectomy
- left pneumonectomy
- lung resect
- segmentectomy
- segmental resection
- mastectomy
- lymphadenectomy
- lymph node dissection

~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 70 lung cancer
E1 Surgery:T2 has_subject:T1
R1 Subject_Disorder Arg1:T1 Arg2:T3
~~~
~~~ ann
Subjects who underwent lung resect.
T1 Subject 0 8 Subjects
T2 Surgery 23 34 lung resect
E1 Surgery:T2 has_subject:T1
~~~

Arguments:
The *has_subject* for this event must be [Subject]().

<!---
The *Theme* for this reaction event must be other reaction events.
--->