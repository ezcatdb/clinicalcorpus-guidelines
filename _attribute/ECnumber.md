---
layout: entry
title: "ECnumber"
shortdef: "EC number; Enzyme Nomenclature"
order: 6
---

The EC numbers, or Enzyme Commission numbers, represent classical enzyme classification, composed of four numbers, based on <a href="http://www.sbcs.qmul.ac.uk/iubmb/enzyme/"> Enzyme Nomenclature</a> by Nomenclature Committee of the International Union of Biochemistry and Molecular Biology (NC-IUBMB).

The following case is a typical EC number.
- EC 3.2.1.1; alpha-amylase
~~~ ann
Alpha-amylase (EC 3.2.1.1)
T1 Enzyme 0 13 Alpha-amylase
T2 Enzyme 15 25 EC 3.2.1.1
A1  ECnumber T2 EC_number
R1 is_equivalent Arg1:T2 Arg2:T1
~~~
