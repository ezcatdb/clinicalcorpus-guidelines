---
layout: entry
title: Annotation guidelines for clinical corpus for lung diseases
---

## Entities
- [General rules for entities](): {% assign i = site.entity | where_exp:"i", "i.title == 'General rules for entities'" | first %}{{ i.shortdef }}

## entities
- [Phenotype](): {% assign i = site.entity | where_exp:"i", "i.title == 'Phenotype'" | first %}{{ i.shortdef }}
  - [Disease](): {% assign i = site.entity | where_exp:"i", "i.title == 'Disease'" | first %}{{ i.shortdef }}
  - [Symptom](): {% assign i = site.entity | where_exp:"i", "i.title == 'Symptom'" | first %}{{ i.shortdef }}
  - [Measurement](): {% assign i = site.entity | where_exp:"i", "i.title == 'Measurement'" | first %}{{ i.shortdef }}
- [Value](): {% assign i = site.entity | where_exp:"i", "i.title == 'Value'" | first %}{{ i.shortdef }}
- [Organic_compound_other](): {% assign i = site.entity | where_exp:"i", "i.title == 'Organic_compound_other'" | first %}{{ i.shortdef }}
- [Subject](): {% assign i = site.entity | where_exp:"i", "i.title == 'Subject'" | first %}{{ i.shortdef }}
- [Entity Property](): {% assign i = site.entity | where_exp:"i", "i.title == 'Entity Property'" | first %}{{ i.shortdef }}

<!---
- [Amino Acid](): {% assign i = site.entity | where_exp:"i", "i.title == 'Amino Acid'" | first %}{{ i.shortdef }}
- [Cofactor](): {% assign i = site.entity | where_exp:"i", "i.title == 'Cofactor'" | first %}{{ i.shortdef }}
- [Functional Group](): {% assign i = site.entity | where_exp:"i", "i.title == 'Functional Group'" | first %}{{ i.shortdef }}
- [Enzyme](): {% assign i = site.entity | where_exp:"i", "i.title == 'Enzyme'" | first %}{{ i.shortdef }}
- [Other Compound](): {% assign i = site.entity | where_exp:"i", "i.title == 'Other Compound'" | first %}{{ i.shortdef }}
--->

## cues
- [Negation Cue](): {% assign i = site.entity | where_exp:"i", "i.title == 'Negation Cue'" | first %}{{ i.shortdef }}
- [Speculation Cue](): {% assign i = site.entity | where_exp:"i", "i.title == 'Speculation Cue'" | first %}{{ i.shortdef }}
- [Method Cue](): {% assign i = site.entity | where_exp:"i", "i.title == 'Method Cue'" | first %}{{ i.shortdef }}

<!---
## additional
{% assign sorted = site.entity | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
--->

## Events
- [Medical Treatment](): {% assign i = site.event | where_exp:"i", "i.title == 'Medical Treatment'" | first %}{{ i.shortdef }}



<!---


  - [Administration of medicine](): {% assign i = site.event | where_exp:"i", "i.title == 'Administration of medicine'" | first %}{{ i.shortdef }}
  - [Surgery](): {% assign i = site.event | where_exp:"i", "i.title == 'Surgery'" | first %}{{ i.shortdef }}
- [Effects by Treatment](): {% assign i = site.event | where_exp:"i", "i.title == 'Effects by treatment'" | first %}{{ i.shortdef }}
  - [Potential therapeutic effect](): {% assign i = site.event | where_exp:"i", "i.title == 'Potential therapeutic effect'" | first %}{{ i.shortdef }}
  - [Adverse effect](): {% assign i = site.event | where_exp:"i", "i.title == 'Adverse effect'" | first %}{{ i.shortdef }}


- [Whole Reaction](): {% assign i = site.event | where_exp:"i", "i.title == 'Whole Reaction'" | first %}{{ i.shortdef }}
  - [Nucleophilic Attack](): {% assign i = site.event | where_exp:"i", "i.title == 'Nucleophilic Attack'" | first %}{{ i.shortdef }}
  - [Protonation](): {% assign i = site.event | where_exp:"i", "i.title == 'Protonation'" | first %}{{ i.shortdef }}
  - [Deprotonation](): {% assign i = site.event | where_exp:"i", "i.title == 'Deprotonation'" | first %}{{ i.shortdef }}
  - [Stabilisation](): {% assign i = site.event | where_exp:"i", "i.title == 'Stabilisation'" | first %}{{ i.shortdef }}
  - [Destabilisation](): {% assign i = site.event | where_exp:"i", "i.title == 'Destabilisation'" | first %}{{ i.shortdef }}
  - [Activation]():  {% assign i = site.event | where_exp:"i", "i.title == 'Activation'" | first %}{{ i.shortdef }}
  - [Inactivation](): {% assign i = site.event | where_exp:"i", "i.title == 'Inactivation'" | first %}{{ i.shortdef }}
  - [Modulation](): {% assign i = site.event | where_exp:"i", "i.title == 'Modulation'" | first %}{{ i.shortdef }}
  - [Electrophilic Attack](): {% assign i = site.event | where_exp:"i", "i.title == 'Electrophilic Attack'" | first %}{{ i.shortdef }}
  - [Cleavage](): {% assign i = site.event | where_exp:"i", "i.title == 'Cleavage'" | first %}{{ i.shortdef }}
  - [Bond Formation](): {% assign i = site.event | where_exp:"i", "i.title == 'Bond Formation'" | first %}{{ i.shortdef }}
  - [Hybridisation Change](): {% assign i = site.event | where_exp:"i", "i.title == 'Hybridisation Change'" | first %}{{ i.shortdef }}
  - [Coupling Reaction](): {% assign i = site.event | where_exp:"i", "i.title == 'Coupling Reaction'" | first %}{{ i.shortdef }}
  - [Uncoupling Reaction](): {% assign i = site.event | where_exp:"i", "i.title == 'Uncoupling Reaction'" | first %}{{ i.shortdef }}
  
## other events
- [Others](): {% assign i = site.event | where_exp:"i", "i.title == 'Others'" | first %}{{ i.shortdef }}
  - [Interaction](): {% assign i = site.event | where_exp:"i", "i.title == 'Interaction'" | first %}{{ i.shortdef }}
  - [Release](): {% assign i = site.event | where_exp:"i", "i.title == 'Release'" | first %}{{ i.shortdef }}
  - [Conformational Change](): {% assign i = site.event | where_exp:"i", "i.title == 'Conformational Change'" | first %}{{ i.shortdef }}
--->

<!---
{% assign sorted = site.event | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
--->

## Relations

{% assign sorted = site.relation | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}

## Attributes

<!---
{% assign sorted = site.attribute | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
--->
