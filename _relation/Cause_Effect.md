---
layout: entry
title: "Cause_Effect"
shortdef: "relationships between cause and its effect"
order: 120
---

This relation indicates the obvious relationships between cause and its effect.

~~~ ann
The common adverse effects of Icotinib were rash and diarrhea.
T1 Adverse_effect 4 26 common adverse effects
T2 Pharmacological_substance 30 38 Icotinib
T3 Disorder 44 48 rash
T4 Disorder 53 61 diarrhea
R1 Cause_Effect Arg1:T2 Arg2:T3
R2 Cause_Effect Arg1:T2 Arg2:T4
~~~

~~~ ann
We hypothesized that direct implantation might have led to metastasis.
T1 Speculation_cue 3 15 hypothesized
T2 Medical_treatment 21 40 direct implantation
T3 Speculation_cue 41 46 might
T4 Adverse_effect 52 58 led to
T5 Disorder 59 69 metastasis
A1 Speculated T4
R1 Cause_Effect Arg1:T2 Arg2:T5
~~~

~~~ ann
Bleomycin-induced pulmonary fibrosis in mice.
T1 Pharmacological_substance 0 9 Bleomycin
T2 Adverse_effect 10 17 induced
T3 Disorder 18 36 pulmonary fibrosis
T4 Subject 40 44 mice
R1 Subject_Disorder Arg1:T4 Arg2:T3
R3 Cause_Effect Arg1:T1 Arg2:T3
~~~

~~~ ann
The impact of IPF-related sleep breathing disorders (SBDs) on survival.
T1 Disorder 14 17 IPF
T2 Disorder 26 51 sleep breathing disorders
T3 Disorder 53 57 SBDs
T4 Phenotype 62 70 survival
R1 is_equivalent Arg1:T3 Arg2:T2
R2 Cause_Effect Arg1:T1 Arg2:T2
R3 Cause_Effect Arg1:T2 Arg2:T4
~~~
