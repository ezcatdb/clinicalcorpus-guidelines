---
layout: entry
title: "Speculation Cue"
shortdef: "speculation words and phrases"
order: 8
---

In addition to verbs, such as “suggest”, “show”, and “indicate”, the
following phrases can be speculation cues.

- can/could ***(be) (concluded/considered/described/interpreted/rationalized)***
- may/might
- Analyze(d/s)/analyse(d/s)
- Implication   
- Insight(s)
- Proposal(s)
- probability
- (is/are) positioned (for/to do)
- ~ consistent with
- ~ agree(s) (well) with
- ~ appear(s) ***(likely/favorable/to involve)***
- Argue against
- apparent/apparently
- understand(ing)
- hypothesize
- test(ed)
- suggestive (of)
- Putative
- Presumably/probably
- presume(d)
- unclear
- unknown


~~~ ann
We hypothesized that direct implantation might have led to metastasis.
T1 Speculation_cue 3 15 hypothesized
T2 Surgery 21 40 direct implantation
T3 Speculation_cue 41 46 might
T4 Adverse_effect 52 58 led to
T5 Disease 59 69 metastasis
E1 Surgery:T2 
E2 Adverse_effect:T4 has_agent:E1 affects:T5 cue:T3 cue2:T1 
A1 Speculated E2
~~~
