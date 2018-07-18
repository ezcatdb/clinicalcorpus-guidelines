---
layout: entry
title: "Interaction"
category: other
shortdef: "A non-reaction event; mainly interaction between atoms/functional groups"
order: 101
---
This non-reaction event corresponds to interaction mainly between atoms/functional groups.

Regarding Agent and Theme for `Interaction`, there is hierarchy from enzyme protein to ligand, where entity in the higher rank will be Agent and the lower rank will be Theme. For instance, enzyme protein or its parts will be Agent, whereas ligand or its parts will be Theme. The hierarch is as follows:

Enzyme protein or its parts;

Cofactor (metal ion, etc.) or its parts;

ligand or its parts; 

solvent (water moleclues)

~~~ ann
Ligand-protein interactions were observed in the crystal structures.
T1 OtherCompound 0 6 Ligand
T2 Enzyme 7 14 protein
T3 Interaction 15 27 interactions
T4 SpeculationCue 33 41 observed
T5 MethodCue 49 67 crystal structures
E1 Interaction:T3 Agent:T2 Theme:T1 Cue:T4 Cue2:T5
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~
~~~ ann
PPAT subunit displays a dinucleotide-binding fold.
T1 Enzyme 0 4 PPAT
T2 SpeculationCue 13 21 displays
T3 OtherCompound 23 36 dinucleotide
T4 Interaction 37 44 binding
T5 EntityProperty 45 49 fold
E1 Interaction:T4 Agent:T5 Theme:T3 Cue:T2
A1 Speculation E1
A2 Certainty E1 Confirmed
R1 whole_part Arg1:T1 Arg2:T5
~~~

- Binding
- Specific binding
- bind
- bind directly
- binding
- binding mode
- binding affinity
- binds
- its role in binding
- bound
- strongly bound
- non-specific binding
- noncovalently bind
- noncovalently bound
- partly-bound
- remain bound 
- bridged
- bridges
- bridging
- Contact
- contacts
- intimate indirect contacts 
- interact
- interaction
- interactions
- interacts
- direct and specific interactions
- direct interactions
- numerous interactions
- significantly favorable interaction
- this interaction
- These interactions
- crucial role in enzymic interactions
- unfavorable interactions
- Recognition
- recognition
- recognize
- recognized
- specific recognition
- distinguishing

~~~ ann
The water molecule has been found at hydrogen bond distance to His275 in the crystal structure.
T1 OtherCompound 4 18 water molecule
T2 SpeculationCue 28 33 found
T3 Interaction 37 59 hydrogen bond distance
T4 AminoAcid 63 69 His275
T5 MethodCue 77 94 crystal structure
E1 Interaction:T3 Agent:T4 Theme:T1 Cue:T2 Cue2:T5
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~

- hydrogen bond
- hydrogen bond donor
- hydrogen bond donors
- hydrogen bond network
- hydrogen bonded
- hydrogen-bonded
- hydrogen bonding
- Hydrogen bonding
- hydrogen bonding distance
- hydrogen-bonding distance
- hydrogen bonding interactions
- hydrogen-bonding interactions
- hydrogen bonding network
- hydrogen bonds
- hydrogen-bond
- hydrogen-bonds
- one hydrogen bond
- forms intricate network of three-centered hydrogen bonds
- forms hydrogen bond
- forms two hydrogen-bonds
- form hydrogen bond
- formed hydrogen bond
- forming hydrogen bonds
- Short, strong hydrogen bonds
- Strong hydrogen bonds
- SSHB
- SSHBs
- this SSHB
- above hydrogen bonded network
- bifurcated hydrogen bond
- extensive hydrogen bond network
- extensive hydrogen bonding
- short, strong hydrogen bond
- single-well hydrogen bond
- two hydrogen bonds
- this hydrogen bond
- tightly H-bonded

Although "lingand" are usually annotated as [Other Compound](), it can suggest `Interaction`.
~~~ ann
Specific amino acids function as the direct metal ligands.
T1 AminoAcid 0 20 Specific amino acids
T2 Interaction 37 43;50 57 direct ligands
T3 OtherCompound 37 43;50 57 direct ligands
T4 Cofactor 44 49 metal
E1 Interaction:T2 Agent:T1 Theme:T4
A1 EventAttribute E1 CatalyticRole
A2 EntityAttribute T3 CatalyticRole
~~~

- Ligands
- direct ligands
- liganded
- ligands
- forming ligand
- serves as ligand

~~~ ann
The ionization of metal-ligated water generates the attacking hydroxide ion.
T1 Activation 4 14 ionization
T2 Cofactor 18 23 metal
T3 Interaction 24 31 ligated
T4 OtherCompound 32 37 water
T5 WholeReaction 38 47 generates
T6 NucleophilicAttack 52 61 attacking
T7 FunctionalGroup 62 75 hydroxide ion
E1 Activation:T1 Theme:T4 Agent:T2
E2 Interaction:T3 Agent:T2 Theme:T4
E3 WholeReaction:T5 Agent:E1 Theme:T7
E4 NucleophilicAttack:T6 Agent:T7
~~~
~~~ ann
Three magnesium ions are octahedrally coordinated at the active site of the inositol monophosphatase dimer.
T1 Cofactor 0 20 Three magnesium ions
T2 Interaction 25 49 octahedrally coordinated
T3 EntityProperty 57 68 active site
T4 Enzyme 76 100 inositol monophosphatase
T5 OtherCompound 76 84 inositol
E1 Interaction:T2 Agent:T3 Theme:T1
R1 whole_part Arg1:T4 Arg2:T3
~~~

- ligated
- ligates
- ligating
- ligation
- Ligation
- linkage
- linked

- coordinate
- coordinated
- co-ordinated
- coordinated directly
- coordinated indirectly
- coordination
- direct coordination
- *-coordinate
- penta-coordinated
- loosely coordinated
- octahedrally coordinated
- tetrahedral co-ordination
- tetrahedrally coordinated
- tightly coordinated
- trigonal bipyramidal co-ordination
- trigonal bipyramidal coordination
- bidentate

The following examples suggest pi-pi interaction.
~~~ ann
The phenyl group of the substrate is pi-sandwiched between two aromatic residues.
T1 FunctionalGroup 4 16 phenyl group
T2 EntityProperty 24 33 substrate
T3 Interaction 37 50 pi-sandwiched
T4 AminoAcid 59 80 two aromatic residues
T5 FunctionalGroup 63 71 aromatic
E1 Interaction:T3 Agent:T4 Theme:T1
A1 EntityAttribute T2 ReactionState
R1 whole_part Arg1:T2 Arg2:T1
R2 whole_part Arg1:T4 Arg2:T5
~~~

- Stacking
- pi-stacked
- pi-sandwiched
- intercalated

The following words/phrases which indicate "affinity" or "specificity" can suggest `Interaction`.
~~~ ann
The affinity for the p-nitrophenyl-beta-D-xylobioside substarte was increased in the case of the mutant enzyme.
T1 Interaction 4 12 affinity
T2 OtherCompound 21 53 p-nitrophenyl-beta-D-xylobioside
T3 EntityProperty 54 63 substarte
T4 Modulation 68 77 increased
T5 Enzyme 97 110 mutant enzyme
E1 Interaction:T1 Agent:T5 Theme:T2
E2 Modulation:T4 Agent:T5 Means:E1
A1 EntityAttribute T3 ReactionState
A2 EnzymeAttribute T5 mutant
R1 corresponds_to Arg1:T3 Arg2:T2
~~~
~~~ ann
Substrate specificity in the glycoside hydrolase.
T1 EntityProperty 0 9 Substrate
T2 Interaction 10 21 specificity
T3 Enzyme 29 48 glycoside hydrolase
E1 Interaction:T2 Agent:T3 Theme:T1
A1 EntityAttribute T1 ReactionState
A2 EnzymeCompoundAttribute T3 Types/family
~~~

- affinity
- low affinity
- specificity
- similar specificities
- extreme specificity 
- broad specificity
- selectivity
- selects

The following words/phrases suggest electrostatic interactions.
~~~ ann
The electrostatic interaction between the negatively charged intermediate and the positively charged dinuclear Zn(II) center of the enzyme is important.
T1 Interaction 4 29 electrostatic interaction
T2 EntityProperty 42 73 negatively charged intermediate
T3 EntityProperty 82 124 positively charged dinuclear Zn(II) center
T4 Enzyme 132 138 enzyme
E1 Interaction:T1 Agent:T3 Theme:T2
A1 EntityAttribute T2 ReactionState
R1 whole_part Arg1:T4 Arg2:T3
~~~

- electrostatic effects
- electrostatic interaction
- forming salt-bridge
- satisfying stereoelectronic requirements

The following words/phrases suggest hydrophobic/van der Waals interactions.
~~~ ann
The hydrophobic interactions of the enzyme with the substrate leaving group.
T1 Interaction 4 28 hydrophobic interactions
T2 Enzyme 36 42 enzyme
T3 EntityProperty 52 61 substrate
T4 EntityProperty 62 75 leaving group
E1 Interaction:T1 Agent:T2 Theme:T4
A1 EntityAttribute T3 ReactionState
A2 EntityAttribute T4 ReactivePart
R1 whole_part Arg1:T3 Arg2:T4
~~~

- hydrophobic interactions
- van der Waals contact
- van der Waals interaction
- Noncovalent

The following words describe the interaction of solvent with molecules
or some ions, which are annotated as [Other Compound](), [Cofactor](),
[Amino Acid](), [Enzyme]() or [Functional Group]().

~~~ ann
The solvation of acetate ion nucleophile.
T1 Interaction 4 13 solvation
T2 FunctionalGroup 17 28 acetate ion
T3 NucleophilicAttack 29 40 nucleophile
E1 Interaction:T1 Theme:T2
E2 NucleophilicAttack:T3 Agent:T2
A1 EventAttribute E2 CatalyticRole
~~~

- solvation
- aqueous solvation

The following words/phrases also suggest some interaction.
~~~ ann
The water molecule lies between the two zinc ions.
T1 OtherCompound 4 18 water molecule
T2 Interaction 19 31 lies between
T3 Cofactor 36 49 two zinc ions
E1 Interaction:T2 Agent:T3 Theme:T1
~~~
~~~ ann
Penicillin is readily accommodated within the active site cleft of the enzyme.
T1 OtherCompound 0 10 Penicillin
T2 Interaction 22 34 accommodated
T3 EntityProperty 46 57 active site
T4 Enzyme 71 77 enzyme
E1 Interaction:T2 Agent:T3 Theme:T1
R1 whole_part Arg1:T4 Arg2:T3
~~~

- lies between
- in proximity to
- proximity
- locate
- migrated closer
- occupies
- accepts
- accommodate
- accommodated
- approach
- approached
- attachment
- closely spaced
- containing
- contains
- pair
- pairs
- physical association
- resides
- sandwiched
- spans
- strain
- entry
- held
- fills

Although "form/formation" suggests various meanings, it may occasionally indicates `Interaction` in combination with other related words, such as "complex" and "diad". 
~~~ ann
The mutant was able to form a stable complex with the RNA.
T1 Enzyme 4 10 mutant
T2 Interaction 23 27 form
T3 EntityProperty 30 44 stable complex
T4 OtherCompound 54 57 RNA
E1 Interaction:T2 Agent:T1 Theme:T3
A1 EnzymeAttribute T1 mutant
A2 EntityAttribute T3 ReactionState
R1 whole_part Arg1:T3 Arg2:T4
R2 whole_part Arg1:T3 Arg2:T1
~~~

- <span style="background-color: yellow">form</span>
- <span style="background-color: yellow">formation</span>
- <span style="background-color: yellow">formed</span>
- forms diad

The following examples may suggest interaction between protein subunits, rather than interaction between atoms/functional groups.
- complexation
- tetramerization

The following one suggests `Interaction` which may corefer to related interaction.

- that
