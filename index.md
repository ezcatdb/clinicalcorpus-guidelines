---
layout: entry
title: Annotation Guidelines for Clinical Corpus of lung diseases
---

## Entities
- [General rules for entities](): {% assign i = site.entity | where_exp:"i", "i.title == 'General rules for entities'" | first %}{{ i.shortdef }}

## entities
- [Phenotype](): {% assign i = site.entity | where_exp:"i", "i.title == 'Phenotype'" | first %}{{ i.shortdef }}
  - [Disorder](): {% assign i = site.entity | where_exp:"i", "i.title == 'Disorder'" | first %}{{ i.shortdef }}
  - [Measurement](): {% assign i = site.entity | where_exp:"i", "i.title == 'Measurement'" | first %}{{ i.shortdef }}
  
<!--
  - [Disease](): {% assign i = site.entity | where_exp:"i", "i.title == 'Disease'" | first %}{{ i.shortdef }}
  - [Symptom](): {% assign i = site.entity | where_exp:"i", "i.title == 'Symptom'" | first %}{{ i.shortdef }}
-->

- [Subject](): {% assign i = site.entity | where_exp:"i", "i.title == 'Subject'" | first %}{{ i.shortdef }}

<!--
  - [N_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'N_sbjct'" | first %}{{ i.shortdef }}
  - [Age_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'Age_sbjct'" | first %}{{ i.shortdef }}
  - [Ethnic_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'Ethnic_sbjct'" | first %}{{ i.shortdef }}
  - [History_sbjct](): {% assign i = site.entity | where_exp:"i", "i.title == 'History_sbjct'" | first %}{{ i.shortdef }}
-->

<!--
- [Body_region](): {% assign i = site.entity | where_exp:"i", "i.title == 'Body_region'" | first %}{{ i.shortdef }}
-->

- [Anatomical_entity](): {% assign i = site.entity | where_exp:"i", "i.title == 'Anatomical_entity'" | first %}{{ i.shortdef }}

<!--
- [Tissue_cultured](): {% assign i = site.entity | where_exp:"i", "i.title == 'Tissue_cultured'" | first %}{{ i.shortdef }}
- [Tissue_natural](): {% assign i = site.entity | where_exp:"i", "i.title == 'Tissue_natural'" | first %}{{ i.shortdef }}

- [Cell_cultured](): {% assign i = site.entity | where_exp:"i", "i.title == 'Cell_cultured'" | first %}{{ i.shortdef }}
-->

- [Cell](): {% assign i = site.entity | where_exp:"i", "i.title == 'Cell'" | first %}{{ i.shortdef }}
<!--
  - [Cell_component](): {% assign i = site.entity | where_exp:"i", "i.title == 'Cell_component'" | first %}{{ i.shortdef }}
-->

<!--

-->

- Molecular entities
  - [Pharmacological_substance](): {% assign i = site.entity | where_exp:"i", "i.title == 'Pharmacological_substance'" | first %}{{ i.shortdef }}

  - [Organic_compound_other](): {% assign i = site.entity | where_exp:"i", "i.title == 'Organic_compound_other'" | first %}{{ i.shortdef }}
  - [Inorganic_compound](): {% assign i = site.entity | where_exp:"i", "i.title == 'Inorganic_compound'" | first %}{{ i.shortdef }}

  - [GGPs](): {% assign i = site.entity | where_exp:"i", "i.title == 'GGPs'" | first %}{{ i.shortdef }}

<!--  
- [RNA_molecule](): {% assign i = site.entity | where_exp:"i", "i.title == 'RNA_molecule'" | first %}{{ i.shortdef }}
  - [DNA_molecule](): {% assign i = site.entity | where_exp:"i", "i.title == 'DNA_molecule'" | first %}{{ i.shortdef }}
- [Protein_family_or_group](): {% assign i = site.entity | where_exp:"i", "i.title == 'Protein_family_or_group'" | first %}{{ i.shortdef }}
  - [Protein_molecule](): {% assign i = site.entity | where_exp:"i", "i.title == 'Protein_molecule'" | first %}{{ i.shortdef }}
-->

<!--
    - [Amino_acid_monomer](): {% assign i = site.entity | where_exp:"i", "i.title == 'Amino_acid_monomer'" | first %}{{ i.shortdef }}
-->

- [Value](): {% assign i = site.entity | where_exp:"i", "i.title == 'Value'" | first %}{{ i.shortdef }}
  - [Dose](): {% assign i = site.entity | where_exp:"i", "i.title == 'Dose'" | first %}{{ i.shortdef }}

<!--
  - [Period](): {% assign i = site.entity | where_exp:"i", "i.title == 'Period'" | first %}{{ i.shortdef }}
  - [Frequency](): {% assign i = site.entity | where_exp:"i", "i.title == 'Frequency'" | first %}{{ i.shortdef }}
-->

- [Entity Property](): {% assign i = site.entity | where_exp:"i", "i.title == 'Entity Property'" | first %}{{ i.shortdef }}

- [MENTION](): {% assign i = site.entity | where_exp:"i", "i.title == 'MENTION'" | first %}{{ i.shortdef }}

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

## Events entities
<!--
- [Diagnosis](): {% assign i = site.entity | where_exp:"i", "i.title == 'Diagnosis'" | first %}{{ i.shortdef }}
-->

- [Medical treatment](): {% assign i = site.entity | where_exp:"i", "i.title == 'Medical treatment'" | first %}{{ i.shortdef }}

<!--
- [Prognosis](): {% assign i = site.entity | where_exp:"i", "i.title == 'Prognosis'" | first %}{{ i.shortdef }}
  - [Potential_therapeutic_effect](): {% assign i = site.entity | where_exp:"i", "i.title == 'Potential_therapeutic_effect'" | first %}{{ i.shortdef }}
  - [Adverse Effect](): {% assign i = site.entity | where_exp:"i", "i.title == 'Adverse effect'" | first %}{{ i.shortdef }}
-->

<!--
- [Diagnosis](): {% assign i = site.event | where_exp:"i", "i.title == 'Diagnosis'" | first %}{{ i.shortdef }}
- [Medical treatment](): {% assign i = site.event | where_exp:"i", "i.title == 'Medical treatment'" | first %}{{ i.shortdef }}

  - [Medication](): {% assign i = site.event | where_exp:"i", "i.title == 'Medication'" | first %}{{ i.shortdef }}
  - [Surgery](): {% assign i = site.event | where_exp:"i", "i.title == 'Surgery'" | first %}{{ i.shortdef }}

- [Effect by treatment](): {% assign i = site.event | where_exp:"i", "i.title == 'Effect by treatment'" | first %}{{ i.shortdef }}

- [Prognosis](): {% assign i = site.event | where_exp:"i", "i.title == 'Prognosis'" | first %}{{ i.shortdef }}
  - [Potential_therapeutic_effect](): {% assign i = site.event | where_exp:"i", "i.title == 'Potential_therapeutic_effect'" | first %}{{ i.shortdef }}
  - [Adverse Effect](): {% assign i = site.event | where_exp:"i", "i.title == 'Adverse effect'" | first %}{{ i.shortdef }}
  
- [Biological_process](): {% assign i = site.event | where_exp:"i", "i.title == 'Biological_process'" | first %}{{ i.shortdef }}
--->


<!---
{% assign sorted = site.event | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
--->

## Relations
- [is_equivalent](): {% assign i = site.relation | where_exp:"i", "i.title == 'is_equivalent'" | first %}{{ i.shortdef }}
- [Subject_Disorder](): {% assign i = site.relation | where_exp:"i", "i.title == 'Subject_Disorder'" | first %}{{ i.shortdef }}

<!--
- [Event_Disorder](): {% assign i = site.relation | where_exp:"i", "i.title == 'Event_Disorder'" | first %}{{ i.shortdef }}
- [Event_Agent](): {% assign i = site.relation | where_exp:"i", "i.title == 'Event_Agent'" | first %}{{ i.shortdef }}
- [Event_Location](): {% assign i = site.relation | where_exp:"i", "i.title == 'Event_Location'" | first %}{{ i.shortdef }}
- [Event_fromLoc](): {% assign i = site.relation | where_exp:"i", "i.title == 'Event_fromLoc'" | first %}{{ i.shortdef }}
- [Event_toLoc](): {% assign i = site.relation | where_exp:"i", "i.title == 'Event_toLoc'" | first %}{{ i.shortdef }}
- [Event_Cue](): {% assign i = site.relation | where_exp:"i", "i.title == 'Event_Cue'" | first %}{{ i.shortdef }}
-->

- [Cause_Effect](): {% assign i = site.relation | where_exp:"i", "i.title == 'Cause_Effect'" | first %}{{ i.shortdef }}

<!--
{% assign sorted = site.relation | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
-->

## Attributes

- [Negated](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Negated'" | first %}{{ i.shortdef }}
- [Speculated](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Speculated'" | first %}{{ i.shortdef }}


<!--
  - [Certainty](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Certainty'" | first %}{{ i.shortdef }}

- [Gender_sbjct](): {% assign i = site.attribute | where_exp:"i", "i.title == 'Gender_sbjct'" | first %}{{ i.shortdef }}
- [MutantAttribute](): {% assign i = site.attribute | where_exp:"i", "i.title == 'MutantAttribute'" | first %}{{ i.shortdef }}
-->

<!--
{% assign sorted = site.attribute | sort: 'order' %}
{% for i in sorted %}
- [{{ i.title }}]({{ i.url | remove_first:'/' }}){% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% endfor %}
-->
