---
layout: entry
title: "Anatomical_entity"
shortdef: "Anatomical entities, inculding organs and tissues"
order: 12
---

The name of this entity group is based on <a href="https://en.wikipedia.org/wiki/Anatomical_terminology">Anatomical terminology</a>.

Organs, such as lung, and tissues above cells are categorized into this entity group.

Regarding the organ, such as lung, the following words/phrases can also be annotated.
- <a href="https://en.wikipedia.org/wiki/Respiratory_system">respiratory system</a>
- respiratory apparatus 
- ventilatory system
  - right lung
  - left lung
  - main bronchi
  - lobar bronchus
  - lingular division bronchi
  - trachea
  - diaphragm
 
Regarding tissues in lung, the following words/phrases can also be annotated.

- blood
- serum
- <a href="https://en.wikipedia.org/wiki/Pulmonary_alveolus">pulmonary alveolus</a>
- pulmonary alveoli
  - alveoli
  - atrium
  - pulmonary artery
  - pulmonary vein
  - alveolar sacs
  - alveolar duct
  - connective tissu
  - capillary beds
  - mucous gland
  - mucosal lining

- <a href="https://en.wikipedia.org/wiki/Pulmonary_pleurae">pulmonary pleurae</a>
- parietal pleura

~~~ ann
Squamous cell carcinoma of the lung invaded the right main bronchus.
T1 Disease 0 23 Squamous cell carcinoma
T2 Cell 0 13 Squamous cell
T3 Anatomical_entity 31 35 lung
T4 Anatomical_entity 48 67 right main bronchus
T5 Biological_process 36 43 invaded
E1 Biological_process:T5 Cause:T1 fromLoc:T3 toLoc:T4
~~~

- aorta
  - ascending aorta
  - descending aorta
- artery
- vena cava
  - inferior vena cava
  - superior vena cava
- vein

<!-- details -->
