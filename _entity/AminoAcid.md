---
layout: entry
title: "Amino Acid"
shortdef: "Amino acid residues in proteins"
order: 1
---

{% include image.html name="amino-acids.png" width="90%" %}

Amino acids such as alanine, serine and cysteine, will be annotated in
this category. Since these amino acids can be accompanied by residue
number, like Ser105 or Ser-105, the residue number should be included
in the amino acid entity. Several types of abbreviation, particularly
3-letter-codes (Ala, Ser and Cys) or 1-letter-codes (A, S and C), are
used to describe amino acids.

~~~ ann
Carboxylate group of Asp-10
T1 FunctionalGroup 0 17 Carboxylate group
T2 AminoAcid 21 27 Asp-10
R1 whole_part Arg1:T2 Arg2:T1
~~~

Although protein molecules consist of amino acids, they can be separate from protein molecules, acting as substrates/products.

<!-- details -->
