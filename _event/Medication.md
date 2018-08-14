---
layout: entry
title: "Administration of medicine"
category: medical treatment
shortdef: "Administration of medicine in medical treatment"
order: 2
---

This event describes 'Medication', which indicates administration of medicine.

The following words may be triggers of this event:

- be dosed
- administer
- inoculate

- chemotherapy
- pharmacotherapy
- neoadjuvant therapy
- induction therapy

~~~ ann
Pirfenidone was dosed at 600 mg/day for the first 2 weeks.
T1 Organic_compound_other 0 11 Pirfenidone
T2 Medication 16 21 dosed
T3 Value 25 35 600 mg/day
E1 Medication:T2 has_agent:T1
R1 value_of Arg1:T3 Arg2:T1
~~~


Arguments:

The *has_subject* for this event must be [Subject]().

The *has_agent* for this event must be medicine, which should be [Organic_compound_other]().

The *disorder* for this event must be [Disease]() or [Symptom].

<!---
The *Theme* for this reaction event must be other reaction events.
--->