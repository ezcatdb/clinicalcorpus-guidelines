---
layout: entry
title: "MechanismType"
shortdef: "Mechanism Type for nucleophilic substitution or elimination"
order: 10
---

The nucleophilic substituion can be largely into two types: SN1 (dissociative) and SN2 (associative).

<a href='https://en.wikipedia.org/wiki/SN1_reaction'>SN1 reaction</a><br>
<a href='https://en.wikipedia.org/wiki/SN2_reaction'>SN2 reaction</a>

{% include image.html name="SN1&SN2_reactions.png" width="90%" %}


"Concerted reaction/mechanism" also indicates SN2 reaction type, as all bonds are formed and broken in concert.

<a href='https://en.wikipedia.org/wiki/Concerted_reaction'>Concerted reaction</a>

~~~ ann
The mutant sialidases operate by a dissociative mechanism, and the wild-type enzyme operates by a concerted mechanism.
T1 Enzyme 4 21 mutant sialidases
T2 NucleophilicAttack 35 57 dissociative mechanism
T3 Enzyme 67 83 wild-type enzyme
T4 NucleophilicAttack 98 117 concerted mechanism
E1 NucleophilicAttack:T2 Agent:T1
E2 NucleophilicAttack:T4 Agent:T3
A1 EnzymeAttribute T1 mutant
A2 EnzymeAttribute T3 Wild-type
A3 MechanismType E1 Dissociative
A4 MechanismType E2 Associative
~~~
