---
layout: entry
title: "Measurement"
shortdef: "Measurement for lung diseases"
order: 4
---

The definition of 'Measurement' for lung diseases may be mostly based on <a href="https://en.wikipedia.org/wiki/Spirometry">spirometry</a>, and <a href="https://en.wikipedia.org/wiki/Oxygen_saturation_(medicine)">oxygen saturation</a>.

'Measurement', which can be a group in phenotype, will be annotated in this category. 
The following words/phrases should be annotated as 'Measurement'.

The definition of 'Disorder' is based on the Semantic types of 
- 'lbpr' (Laboratory Procedure)
- 'lbtr' (Laboratory or Test Result)
- 'clna' (Clinical Attribute)
- 'diap' (Diagnostic Procedure)

in the <a href="https://www.nlm.nih.gov/research/umls/">UMLS database</a>.


Based on <a href="https://en.wikipedia.org/wiki/Spirometry">spirometry</a>:
- forced vital capacity (UMLS; C3714541)
- FVC (UMLS; C3714541)
- % predicted forced vital capacity (UMLS; C2919678)
- %FVC (UMLS; C2919678) 
- total lung capacity
- TLC
- Diffusion Capacity of the Lung for Carbon Monoxide (UMLS; C1516251)
- DLco (UMLS; C1516251)
- % Predicted Diffusion Capacity of the Lung for Carbon Monoxide (UMLS; C4054207)
- %DLco (UMLS; C4054207)
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
T1 Disorder 0 3 IPF
T2 Measurement 19 41 forced vital capacity
T3 Measurement 43 46 FVC
T5 Subject 4 12 IPF patients 
R1 is_equivalent Arg1:T3 Arg2:T2
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
- 6-min walk distance (UMLS; C4055399)
- 6MWD (UMLS; C4055399)
- 6-min walk test (UMLS; C4055399)
- 6MWT (UMLS; C4055399)
- cardiopulmonary exercise test
- cardiac stress test
- cardiac diagnostic test
- CPX test
- maximal oxygen consumption
- peak oxygen consumption
- VO2 peak
- VO2 max

<!-- details -->
