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

- [Subject](): {% assign i = site.entity | where_exp:"i", "i.title == 'Subject'" | first %}{{ i.shortdef }}
  - [N_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'N_sbjct'" | first %}{{ i.shortdef }}
  - [Age_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'Age_sbjct'" | first %}{{ i.shortdef }}
  - [Ethnic_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'Ethnic_sbjct'" | first %}{{ i.shortdef }}
- [Anatomical_entity](): {% assign i = site.entity | where_exp:"i", "i.title == 'Anatomical_entity'" | first %}{{ i.shortdef }}
- [Cell_natural](): {% assign i = site.entity | where_exp:"i", "i.title == 'Cell_natural'" | first %}{{ i.shortdef }}
- [Organic_compound_other](): {% assign i = site.entity | where_exp:"i", "i.title == 'Organic_compound_other'" | first %}{{ i.shortdef }}
- [Protein_molecule](): {% assign i = site.entity | where_exp:"i", "i.title == 'Protein_molecule'" | first %}{{ i.shortdef }}

- [Value](): {% assign i = site.entity | where_exp:"i", "i.title == 'Value'" | first %}{{ i.shortdef }}
  - [Dose](): {% assign i = site.entity | where_exp:"i", "i.title == 'Dose'" | first %}{{ i.shortdef }}
  - [Period](): {% assign i = site.entity | where_exp:"i", "i.title == 'Period'" | first %}{{ i.shortdef }}
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
- [Diagnosis](): {% assign i = site.event | where_exp:"i", "i.title == 'Diagnosis'" | first %}{{ i.shortdef }}
- [Medical treatment](): {% assign i = site.event | where_exp:"i", "i.title == 'Medical treatment'" | first %}{{ i.shortdef }}
  - [Medication](): {% assign i = site.event | where_exp:"i", "i.title == 'Medication'" | first %}{{ i.shortdef }}
  - [Surgery](): {% assign i = site.event | where_exp:"i", "i.title == 'Surgery'" | first %}{{ i.shortdef }}
- [Effect by treatment](): {% assign i = site.event | where_exp:"i", "i.title == 'Effect by treatment'" | first %}{{ i.shortdef }}
  - [Potential_therapeutic_effect](): {% assign i = site.event | where_exp:"i", "i.title == 'Potential_therapeutic_effect'" | first %}{{ i.shortdef }}
  - [Adverse Effect](): {% assign i = site.event | where_exp:"i", "i.title == 'Adverse effect'" | first %}{{ i.shortdef }}

<!---
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

- [Negated](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Negated'" | first %}{{ i.shortdef }}
- [Speculated](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Speculated'" | first %}{{ i.shortdef }}
  - [Certainty](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Certainty'" | first %}{{ i.shortdef }}
- [Gender_sbjct](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Gender_sbjct'" | first %}{{ i.shortdef }}

<!--
{% assign sorted = site.attribute | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
-->
