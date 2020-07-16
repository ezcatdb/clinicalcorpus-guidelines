---
layout: entry
title: "Disorder_association"
shortdef: "relationships between two disorders"
order: 111
---

When two different 'Disorders' ([Disorder]()) occur, these 'Disorders' may be connected with this relation.

~~~ ann
IPF-associated pulmonary hypertension
T1 Disorder 0 3 IPF
T2 Disorder 15 37 pulmonary hypertension
R1 Disorder_association Arg1:T2 Arg2:T1
~~~
~~~ ann
interstitial pneumonia associated with collagen vascular diseases.
T1 Disorder 0 22 interstitial pneumonia
T2 Disorder 39 65 collagen vascular diseases
R1 Disorder_association Arg1:T1 Arg2:T2
~~~
~~~ ann
lung fibrosis-associated cancers.
T1 Disorder 0 13 lung fibrosis
T2 Disorder 25 32 cancers
R1 Disorder_association Arg1:T2 Arg2:T1
~~~

~~~ ann
primary Sjögren's syndrome-related interstitial pneumonia
T1 Disorder 0 26 primary Sjögren's syndrome
T2 Disorder 35 57 interstitial pneumonia
R1 Disorder_association Arg1:T2 Arg2:T1
~~~
~~~ ann
CVD-IP
T1 Disorder 0 3 CVD
T2 Disorder 4 6 IP
R1 Disorder_association Arg1:T2 Arg2:T1
~~~
<!--details-->
