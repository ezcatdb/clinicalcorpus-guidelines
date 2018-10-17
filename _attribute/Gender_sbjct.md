---
layout: entry
title: "Gender_sbjct"
shortdef: "Gender for Subject"
order: 10
---

The attribute for 'Gender_sbjct' describes Gender of 'Subject'.

This attribute includes four categories:
- Male
- Female
- Both
- UNK (Unknown)

~~~ ann
A 40-year-old man had undergone right upper lobectomy for lung cancer.
T1 Subject 2 17 40-year-old man
T2 Surgery 32 53 right upper lobectomy
T3 Disease 58 69 lung cancer
T4 Age_sbjct 2 13 40-year-old
E1 Surgery:T2 has_subject:T1 disorder:T3
R1 Subject_Disorder Arg1:T1 Arg2:T3
R2 Subject_Attribute Arg1:T1 Arg2:T4
A1 Gender_sbjct T1 Male
~~~
~~~ ann
70 subjects (50 men and 20 women; mean age, 63.1 y)
T1 Subject 0 11 70 subjects
T2 Subject 13 19 50 men
T3 Subject 24 32 20 women
T4 N_sbjct 0 2 70
T5 N_sbjct 13 15 50
T6 N_sbjct 24 26 20
T7 Age_sbjct 34 50  mean age, 63.1 y
R1 member_of Arg1:T2 Arg2:T1
R2 member_of Arg1:T3 Arg2:T1
R3 Subject_Attribute Arg1:T1 Arg2:T4
R4 Subject_Attribute Arg1:T2 Arg2:T5
R5 Subject_Attribute Arg1:T3 Arg2:T6
R6 Subject_Attribute Arg1:T1 Arg2:T7
A1 Gender_sbjct T1 Both
A2 Gender_sbjct T2 Male
A3 Gender_sbjct T3 Female
~~~

<!--details-->
