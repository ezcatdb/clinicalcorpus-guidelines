---
layout: entry
title: "Measurement"
shortdef: "Measurement for lung diseases"
order: 4
---

The definition of 'Measurement' for lung diseases may be mostly based on <a href="https://en.wikipedia.org/wiki/Spirometry">spirometry</a>, and <a href="https://en.wikipedia.org/wiki/Oxygen_saturation_(medicine)">oxygen saturation</a>.

'Measurement', which can be a group in phenotype, will be annotated in this category. 
The following words/phrases should be annotated as 'Measurement'.

Based on <a href="https://en.wikipedia.org/wiki/Spirometry">spirometry</a>:
- forced vital capacity
- FVC
- total lung capacity
- TLC
- Diffusing capacity
- DLCO
- forced expiratory volume in 1 second
- FEV1
- FEV1/FVC ratio
- FEV1%


- Forced expiratory flow
- FEF
- maximal (mid-)expiratory flow
- MMEF
- MEF
- peak expiratory flow
- PEF
- tidal volume
- TV

~~~ ann
IPF patients with a forced vital capacity (FVC) of 50-80%.
T1 Disease 0 3 IPF
T2 Measurement 19 41 forced vital capacity
T3 Measurement 43 46 FVC
T4 Value 51 57 50-80%
T5 Subject 0 12 IPF patients 
R1 is_equivalent Arg1:T3 Arg2:T2
R2 value_of Arg1:T4 Arg2:T2
R3 Subject_Disorder Arg1:T5 Arg2:T1
~~~

Based on <a href="https://en.wikipedia.org/wiki/Oxygen_saturation_(medicine)">oxygen saturation</a>:
- oxygen saturation
  - arterial oxygen saturation
  - SaO2
  - venous oxygen saturation
  - SvO2
  - peripheral oxygen saturation
  - SpO2


The following words/phrases are not from Spirometry, but definitely 'Measurement'.
- 6-min walk distance
- 6MWD
- 6-min walk test
- 6MWT
- cardiopulmonary exercise test
- cardiac stress test
- cardiac diagnostic test
- CPX test
- maximal oxygen consumption
- peak oxygen consumption
- VO2 peak
- VO2 max

<!-- details -->
