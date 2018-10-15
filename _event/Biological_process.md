---
layout: entry
title: "Biological_process"
category: "Biological process"
shortdef: "Biological process"
order: 10
---

This event is based on the <a href="http://www.nactem.ac.uk/meta-knowledge/">GENIA-Meta-knowledge corpus</a> at <a href="http://www.nactem.ac.uk/">NaCTeM</a>.

The following words/phrases can be triggers of this event:

- apoptosis
- infection
- differentiation
- metastasis
- mutation
- pathway
- carcinogenesis
- angiogenesis

~~~ ann
Squamous cell carcinoma of the lung invaded the right main bronchus.
T1 Disease 0 23 Squamous cell carcinoma
T2 Cell 0 13 Squamous cell
T3 Anatomical_entity 31 35 lung
T4 Anatomical_entity 48 67 right main bronchus
T5 Biological_process 36 43 invaded
E1 Biological_process:T5 Cause:T1 fromLoc:T3 toLoc:T4
~~~

Arguments:

The *atLoc*, *fromLoc* and *toLoc* for this event must be [Subject](), [Anatomical_entity](), [Cell](), [Cell_component]() and [Entity Property]().

The other arguments, such as *Cause*, *Theme*, *Participant*, and *Product*, for this event can be any entities.


<!--details-->



