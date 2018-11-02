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
~~~ ann
Using PET-CT, we diagnosed liver metastases in the two patients.
T1 Method_cue 6 12 PET-CT
T2 Anatomical_entity 27 32 liver
T3 Diagnosis 17 26 diagnosed
T4 Disease 27 43 liver metastases
T5 Subject 51 63 two patients
T6 N_sbjct 51 54 two
T7 Biological_process 33 43 metastases
E1 Diagnosis:T3 disorder:T4 has_subject:T5 cue:T1
E2 Biological_process:T7 toLoc:T2
A1 Speculated E1
A2 Certainty E1 Confirmed
R1 Subject_Disorder Arg1:T5 Arg2:T4
R2 Subject_Attribute Arg1:T5 Arg2:T6
~~~
~~~ ann
Cellular crosstalk between epithelial cells and fibroblasts.
T1 Biological_process 0 18 Cellular crosstalk
T2 Cell 27 43 epithelial cells
T3 Cell 48 59 fibroblasts
E1 Biological_process:T1 Participant:T2 Participant2:T3
~~~
~~~ ann
Accumulation of damaged mitochondria in lung epithelial cells.
T1 Biological_process 0 12 Accumulation
T2 Biological_process 16 23 damaged
T3 Cell_component 24 36 mitochondria
T4 Cell 40 61 lung epithelial cells
T5 Anatomical_entity 40 44 lung
E1 Biological_process:T1 Theme:E2 atLoc:T4
E2 Biological_process:T2 Theme:T3
R1 part_of Arg1:T3 Arg2:T4
R1 part_of Arg1:T4 Arg2:T5
~~~
~~~ ann
Infulence of methylenetetrahydrofolate reductase C677T polymorphism on the risk of lung cancer
T1 Protein_molecule 13 54 methylenetetrahydrofolate reductase C677T
T2 Biological_process 55 67 polymorphism
T3 Disease 83 94 lung cancer
T4 Anatomical_entity 83 87 lung
E1 Biological_process:T2 Product:T1
A1 MutantAttribute T1 mutant
~~~
~~~ ann
Studies on MTHFR C677T polymorphism and lung cancer ... The C677T porpmorphism was correlated with a risk of NSCLC.
T1 Protein_molecule 11 22 MTHFR C677T
T2 Biological_process 23 35 polymorphism
T3 Disease 40 51 lung cancer
T4 MENTION 60 65  C677T
T5 Biological_process 66 78 polymorphism
T6 Disease 109 114 NSCLC
E1 Biological_process:T2 Product:T1
E2 Biological_process:T5 Product:T1
A1 MutantAttribute T1 mutant
R1 Coreference Arg1:T4 Arg2:T1
~~~ 


Arguments:

The *atLoc*, *fromLoc* and *toLoc* for this event must be [Subject](), [Anatomical_entity](), [Cell](), [Cell_component]() and [Entity Property]().

The other arguments, such as *Cause*, *Theme*, *Participant*, and *Product*, for this event can be any entities or events.


<!--details-->



