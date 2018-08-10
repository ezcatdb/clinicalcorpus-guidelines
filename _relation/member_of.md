---
layout: entry
title: "member_of"
shortdef: "Relationships between member and its group"
order: 3
---

This relation describes relationships of a member with a group, to which the member belong.

~~~ ann
70 subjects (50 men and 20 women; mean age, 63.1 y)
T1 Subject 0 11 70 subjects
T2 Subject 13 19 50 men
T3 Subject 24 32 20 women
R1 member_of Arg1:T2 Arg2:T1
R2 member_of Arg1:T3 Arg2:T1
~~~

This relation can be used to describe the relationships between events.

