---
layout: entry
title: "Medication"
category: "Medical treatment"
shortdef: "Administration of medicine in medical treatment"
order: 2
---

This event describes 'Medication', which indicates administration of medicine.

The following words may be triggers of this event:

- be dosed
- administer

- chemotherapy
- pharmacotherapy
- neoadjuvant therapy
- induction therapy

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Pharmacological_substance 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Dose 25 35 600 mg/day
T4 Period 44 57 first 2 weeks
E1 Medication:T2 has_agent:T1 dose:T3 period:T4
~~~
~~~ ann
Patients accepted chemotherapy.
T1 Subject 0 8 Patients
T2 Medication 18 3 chemotherapy
E1 Medication:T2 has_subject:T1
~~~

Arguments:

The *has_subject* for this event must be [Subject]().

The *has_agent* for this event must be medicine, which should be [Pharmacological_substance]().

The *disorder* for this event must be [Disease]() or [Symptom]().

The *dose* for this event must be [Dose]().

The *period* for this event must be [Period]().

<!---
The *Theme* for this reaction event must be other reaction events.
--->
