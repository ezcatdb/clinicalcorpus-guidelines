---
layout: entry
title: "Medical treatment"
category: "Medical treatment"
shortdef: "Medical treatment"
order: 1
---

This entity describes 'Medical treatment', as follows:

The follwoing words/phrases can be entities for medication:
- be dosed
- administer
- take

- chemotherapy
- pharmacotherapy
- neoadjuvant therapy
- induction therapy

The following words may be categorized into this entity:

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

Medical endoscopic procedure can be categorized into this entity:
- argon plasma coagulation
- APC

The following words/phrases can also suggest medical treatments:

- Radiation therapy/Radiotherapy
  - Fast neutron therapy
  - Neutron capture therapy
- Photodynamic therapy (PDT)
- Dialysis
  - Direct hemoperfusion (DHP)

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Pharmacological_substance 0 11 Pirfenidone
T2 Medical_treatment 16 21 dosed
~~~
~~~ ann
Patients accepted chemotherapy.
T1 Subject 0 8 Patients
T2 Medical_treatment 18 30 chemotherapy
~~~
~~~ ann
Ten healthy volunteers took 200 mg itraconazole or matched placebo once daily for 4 days.
T1 Subject 0 22 Ten healthy volunteers
T2 Medical_treatment 23 27 took
T5 Pharmacological_substance 35 47 itraconazole
T6 Pharmacological_substance 59 66 placebo
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
Subjects who underwent lung resect.
T1 Subject 0 8 Subjects
T2 Medical_treatment 23 34 lung resect
T3 Anatomical_entity 23 27 lung
~~~



<div style="background-color: yellow" markdown="1">
As long as this category will be annotated as an entity, the following arguments will be unnecessary.

Arguments:
The *has_subject* for this event must be [Subject]().

The *disorder* for this event must be [Disorder]().

</div>
