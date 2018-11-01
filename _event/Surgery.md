---
layout: entry
title: "Surgery"
category: "Medical treatment"
shortdef: "Surgery in medical treatment"
order: 3
---

This event, surgery, is categorized into [Medical treatment]().
The following words may be triggers of this event:

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
T3 Disease 58 69 lung cancer
T4 Age_sbjct 2 13 40-year-old
T5 Anatomical_entity 58 62 lung
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
R2 Subject_Attribute Arg1:T1 Arg2:T4
A1 Gender_sbjct T1 Male
~~~
~~~ ann
Subjects who underwent lung resect.
T1 Subject 0 8 Subjects
T2 Surgery 23 34 lung resect
T3 Anatomical_entity 23 27 lung
E1 Surgery:T2 has_subject:T1 occurs_at:T3
~~~

Medical endoscopic procedure can be categorized into this event.
- argon plasma coagulation
- APC

Arguments:
<div style="background-color: yellow" markdown="1">
The *has_subject* for this event must be [Subject]().

The *disorder* for this event must be [Disease](), [Symptom]() or [Phenotype]().

The *occurs_at* for this event must be [Anatomical_entity](), [Cell]() or [Entity Property]().

The *has_cue* for this event must be [Negation Cue](), [Speculation Cue]() or [Method Cue]().

</div>

<!---
The *Theme* for this reaction event must be other reaction events.
--->
