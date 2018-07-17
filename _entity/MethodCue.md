---
layout: entry
title: "Method Cue"
shortdef: "Research types;experimental or computationnal ones"
order: 9
---

This cue indicates the types of studies. Structural analyses, such as
crystallography and NMR, gives us more direct observation for enzyme
reactions, whereas computational studies only suggest possibilities,
for which Certainty levels of events are annotated as “Probable”..

- ***(experimental/computational)*** study/studies
- ***(experimental/computational)*** analysis/analyses simulation(s)
- ***(computational)*** simulation(s)
- ***(computational or support/provide)*** model(s)

More concrete keywords are as follows:

The following cues are related to structural analyses including X-ray
crystallography or NMR study:

~~~ ann
Structural studies show that arcabose is modified upon binding.
T1 MethodCue 0 18 Structural studies
T2 SpeculationCue 19 23 show
T3 OtherCompound 29 37 arcabose
T4 BondFormation 41 49 modified
T5 Interaction 55 62 binding
E1 BondFormation:T4 Theme:T3 Cue:T1 Cue2:T2
E2 Interaction:T5 Theme:T3 Cue:T1 Cue2:T2
A1 Speculation E1
A2 Certainty E1 Confirmed
A3 Speculation E2
A4 Certainty E2 Confirmed
~~~

- structural analyse
- structural and biochemical studies
- structural and functional analyses
- structures
- structural basis
- structural characterization
- structural comparison
- structural consequences
- structural data
- structural models
- structural perturbation
- structural studies
- structural work
- structurally
- structurally characterized
- structure
- structure and function analysis
- Detailed structural analysis
- Structural analyses
- Structural analysis
- Structural basis
- Structural comparison
- Structural determinants
- Structural studies
- Structural study
- defined in structure
- Molecular structure
- atomic and ultra-high resolution
- atomic co-ordinates
- atomic level
- atomic resolution
- atomic structure refinement

The following cues are X-ray crystallography:
~~~ ann
The information on ligand-enzyme interactions is observed in the crystal structures.
T1 OtherCompound 19 25 ligand
T2 Enzyme 26 32 enzyme
T3 Interaction 33 45 interactions
T4 SpeculationCue 49 57 observed
T5 MethodCue 65 83 crystal structures
E1 Interaction:T3 Agent:T2 Theme:T1 Cue:T5 Cue2:T4
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~

- structure of crystal
- Structure at 2.5-A resolution
- Structure determination
- These structures
- Structure
- This structure
- X-ray analysis
- X-ray crystal structure
- X-ray crystal structures
- X-ray crystallographic analyses
- X-ray crystallographic data
- X-ray crystallographic structure
- X-ray crystallographic studies
- X-ray crystallographic study
- X-ray crystallographic techniques
- X-ray crystallography
- X-ray data
- X-ray diffraction
- X-ray diffraction data
- X-ray diffraction techniques
- X-ray spectroscopic
- X-ray structure
- X-ray structure refinement and comparison
- X-ray structures
- X-ray work
- x-ray crystallographic methods
- x-ray crystallography
- x-ray crystallography studies
- x-ray structure
- Crystal structure
- Crystal structures
- Crystallographic
- Crystallographic analysis
- Crystallographic evidence
- Crystallographic structural analysis
- Crystallographic structure
- Crystallographic studies
- crystal
- crystal and molecular structure
- crystal form
- crystal forms
- crystal habit
- crystal soaking experiment
- crystal structure
- crystal structure data
- crystal structures
- crystalline
- crystalline form
- crystalline state
- crystallization
- crystallize in tetragonal and orthorhombic space groups
- crystallized
- crystallizes
- crystallographic
- crystallographic agreement factors
- crystallographic analyses
- crystallographic analysis
- crystallographic assignments
- crystallographic asymmetric unit
- crystallographic data
- crystallographic evidence
- crystallographic refinement
- crystallographic results
- crystallographic structure
- crystallographic studies
- crystallographic study
- crystallographically
- crystallography
- crystals
- cocrystal structure
- cocrystal structures
- cocrystallization
- cocrystallized
- cocrystallizing
- collecting data from crystals
- this X-ray structure
- three-dimensional coordinates
- three-dimensional structure
- three-dimensional structures
- two crystal structures
- two different monoclinic crystal lattices
- small crystalline
- solved structures
- resolution structure
- refined crystal structure
- refined high-resolution crystal structure
- room-temperature X-ray synchrotron data
- static x-ray structure
- High-resolution crystal structures
- High-resolution structures
- high-resolution complex structure
- high-resolution crystal structure
- high-resolution crystal structures
- high-resolution structures
- Proton-Induced x-ray Emission
- PIXE
- Refined structure
- Restrained crystallographic refinement
- analysis of crystal and molecular structures
- anisotropic X-ray diffraction
- anomalous scattering method
- earlier crystallographic interpretation
- known crystal structures

The following methods are those by NMR techniques:
~~~ ann
Strong hydrogen bonds at the active site of cholinesterase: proton NMR studies.
T1 Interaction 0 21 Strong hydrogen bonds
T2 EntityProperty 29 40 active site
T3 Enzyme 44 58 cholinesterase
T4 FunctionalGroup 60 66 proton
T5 MethodCue 60 78 proton NMR studies
E1 Interaction:T1 Agent:T2 Cue:T5
R1 whole_part Arg1:T3 Arg2:T2
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~

- (1)H NMR
- (1)H-(15)N HSQC
- (1)H-(15)N HSQC data
- (1)H-(15)N NMR spectroscopy
- (13)C NMR
- (13)C distortionless enhancement by polarization transfer
- DEPT
- (15)N-kinetic isotope effects
- (1H, 15N) heteronuclear multiple-quantum coherence (HMQC) experiments
- 13C NMR
- 13C NMR spectra
- 13C magnetic resonances
- 13C-NMR study
- 13C-NMR titrations
- 19F-NMR
- 19F-NMR resonance
- 1D NMR and 2D NOESY analyses
- 1H NMR
- 1H NMR monitoring
- 1H NMR spectrum
- 31P NMR
- 31P NMR analyses
- 31P NMR spectroscopy
- two-dimensional 31P-31P COSY experiments
- structural and biochemical NMR studies
- proton NMR
- proton NMR studies
- liquid-state NMR
- NMR
- NMR results
- NMR spectroscopic analyses
- NMR spectroscopy
- NMR study
- one- and two-dimensional proton NMR spectroscopy
- heteronuclear single quantum correlation
- HSQC

The following studies are mass spectrometry:
~~~ ann
LC/MS analyses revealed that Asn10 attacks the substrate to form an imidate.
T1 MethodCue 0 14 LC/MS analyses
T2 SpeculationCue 15 23 revealed
T3 AminoAcid 29 34 Asn10
T4 NucleophilicAttack 35 42 attacks
T5 EntityProperty 47 56 substrate
T6 BondFormation 60 64 form
T7 OtherCompound 68 75 imidate
E1 NucleophilicAttack:T4 Agent:T3 Theme:T5 Cue:T1 Cue2:T2
E2 BondFormation:T6 Agent:T3 Theme:T7 Cue:T1 Cue2:T2
A1 ReactionState T5
A2 Speculation E1
A3 Speculation E2
A4 Certainty E1 Confirmed
A5 Certainty E2 Confirmed
~~~

- ESI
- ESI-MS-MS
- ESMS
- Electrospray mass spectrometry
- tandem MS
- tandem MS/MS analyses
- tandem mass spectrometry
- LC-ESI-tandem MS
- LC/MS analyses
- MS
- MS-MS
- Mass spectrometric analysis
- electrospray ionization mass spectrometry
- electrospray ionization mass spectrum
- electrospray ionization triple quadrupole mass spectrometry
- electrospray mass spectrometry
- ion-spray mass spectrometry
- mass spectrometric monitoring
- mass spectrometry
- daughter-ion spectrum

The following are kinetic analyses including isotopic effects:
~~~ ann
Kinetic isotope effect studies of the reaction catalyzed by uracil DNA glycosylase
T1 MethodCue 0 30 Kinetic isotope effect studies
T2 WholeReaction 38 56 reaction catalyzed
T3 FunctionalGroup 60 66 uracil
T4 OtherCompound 67 70 DNA
T5 Enzyme 59 82 uracil DNA glycosylase
R1 whole_part Arg1:T4 Arg2:T3
E1 WholeReaction:T2 Agent:T5 Cue:T1
A1 Speculation E1
A2 Certainty E1 Confirmed
~~~

- Kinetic
- Kinetic analyses
- Kinetic analysis
- Kinetic characterization
- Kinetic isotope effect studies
- KIE
- KIEs
- beta-deuterium KIEs
- alpha-deuterium kinetic isotope effects
- analyzed kinetically
- Kinetic studies
- isotope effect
- isotope effect data
- isotope effects
- isotope exchange
- isotope ratio mass spectrometer
- kinetic
- kinetic analyses
- kinetic analysis
- kinetic consequences
- kinetic data
- kinetic evaluation
- kinetic evidence
- kinetic investigation
- kinetic isotope effect
- kinetic isotope effect measurements
- kinetic isotope effect results
- kinetic isotope effects
- kinetic results
- kinetic studies
- kinetic study
- kinetically
- kinetically observed
- kinetics
- kinetics studies
- This kinetic outcome
- solvent deuterium isotope effect
- solvent deuterium isotope effects
- solvent isotope effect
- solvent isotope effects
- solvent kinetic deuterium-isotope effect
- solvent kinetic isotope effects
- these enzymatic isotope effects
- secondary alpha-deuterium KIE
- secondary beta-deuterium KIEs
- primary (13)C KIE
- Isotope effect studies
- Isotope effects
- studies kinetic
- subjected to detailed kinetic investigation
- techniques kinetic
- steady-state kinetic analyses
- steady-state kinetic data
- steady-state rate analysis
- Multiple kinetic isotope effects
- Primary deuterium kinetic isotope effects
- intrinsic isotope effects
- inverse beta-secondary isotope effects
- measured kinetic isotope effects
- measurement of heavy-atom isotope effects
- Solvent deuterium kinetic isotope effects
- Solvent isotope effect studies
- Steady-state kinetic analysis
- Steady-state kinetic assays
- Steady-state kinetic experiments
- Steady-state kinetics
- pre-steady-state kinetic analyses
- 15N-KIE
- 18(V/K)nonbridge isotope effect
- Beta-secondary and solvent deuterium kinetic isotope effects
- stopped-flow kinetic measurements
- stopped-flow studies

The following is mutagenesis:
~~~ ann
Mutagenesis studies were carried out to examine the effects of replacement of the nucleophile Glu236 of the F/19 xylanase by a histidine.
T1 MethodCue 0 19 Mutagenesis studies
T2 SpeculationCue 40 47 examine
T3 Modulation 52 59 effects
T4 EntityProperty 63 74 replacement
T5 NucleophilicAttack 81 93 nucleophile
T6 AminoAcid 93 100 Glu236
T7 Enzyme 107 121 F/19 xylanase
T8 AminoAcid 126 136 histidine
E1 Modulation:T3 Agent:T4 Theme:E2 Cue:T1 Cue2:T2
E2 NucleophilicAttack:T5 Agent:T6 
R1 whole_part Arg1:T7 Arg2:T6
A1 Speculation E1
A2 EventAttribute E2 CatalyticRole
A3 EnzymeCompoundAttribute T7 Types/family
~~~

- Mutagenesis
- Mutagenesis experiments
- Mutagenesis studies
- Mutational analysis
- Mutational studies
- site-directed mutagenesis
- site-directed mutagenesis studies
- site-directed mutations
- Site-directed mutagenesis
- new mutational data
- mutagenesis
- mutagenesis experiments
- mutagenesis techniques
- mutation studies
- mutational analysis
- experimental mutagenesis results
- experimental site-directed mutagenesis
- truncation experiments

The following phrases are other methods:

- Primary and tertiary structure
- SIRAS

- Stereochemical analysis
- absorption changes
- atomic absorption analysis
- biochemical characterization
- biochemical studies
- Genetic and biochemical studies
- chemical evidence
- chemical modification
- chemical sequencing
- classical enzymological studies
- cloning
- collision-induced fragmentation
- comparing kinetic results
- comparison
- competitive method
- empirical correlation of delta
- enzymatically characterized
- equilibrium perturbation
- establishes kinetically
- expression
- functional studies
- heavy-atom isotope effects
- highly sensitive new kinetic assay
- higher resolution structural information
- intense absorption
- liquid chromatography
- HPLC
- HPLC analysis
- mechanistic study
- minimal perturbation
- molecular explanation
- molecular replacement
- molecular structure and comparison
- multiple isomorphous replacement
- multipole refinement
- one-turnover kinetics
- pH dependence studies
- pH studies
- pH titration study
- pH-dependent kinetic analysis
- pH-dependent kinetics
- pH-dependent rate analysis
- pH-dependent studies
- peptic digests
- potential energy surface
- provides convenient model system for studies
- single isomorphous replacement with anomalous scattering method
- Multipole refinement
- Analysis of this structure
- Atomic structure
- Bronsted analysis
- Chemical evidence
- Cryoquenching
- substrate depletion
- techniques structural
- tetragonal crystal form
- tetrameric quaternary structure
- thermodynamic results
- viscosity measurements

The following ones are other spectroscopic analyses:

- difference FTIR spectroscopic analysis
- difference FTIR spectroscopy
- difference Fourier map
- electronic absorption properties
- faint absorption
- far UV CD spectra
- near UV CD spectra
- circular dichroism
- circular dichroism spectroscopy
- CD spectroscopic studies
- first detailed biochemical study
- fluorescence
- fluorescence studies
- fluorescent
- UV absorption maxima
- UV spectroscopic
- UV--visible
- Analysis of absorption spectra
- spectral characterization
- spectral probes
- spectrophotometric analysis
- spectrophotometric assay
- spectrophotometrically
- spectroscopic characterization
- spectroscopic data
- spectroscopically
- stereochemical studies
- Spectroscopic analyses
- Steady-state fluorescence titration data

- Difference Fourier comparisons
- Difference Fourier maps
- electron paramagnetic resonance spectroscopy
- EPR studies

- stopped-flow UV/Vis spectrophotometry
- visible absorbance spectroscopy


The following methods are computational or theoretical ones:
~~~ ann
Molecular mechanics calculations show possible binding conformations.
T1 MethodCue 0 32 Molecular mechanics calculations
T2 SpeculationCue 33 37 show
T3 SpeculationCue 38 46 possible
T4 Interaction 47 54 binding
T5 EntityProperty 55 68 conformations
E1 Interaction:T4 Agent:T5 Cue:T1 Cue2:T2 Cue3:T3
A1 Speculation E1
A2 Certainty E1 Probable
~~~

- ab initio calculations
- ab initio quantum chemical calculations
- ab initio quantum mechanical modeling
- Ab initio and density functional calculations
- approximate valence bond method
- AVB 
- Calculations
- calculated
- calculated using DelPhi program
- calculation
- calculations
- computational docking
- computational site-directed mutagenesis
- computationally docked
- computer fitting
- computer graphics
- computer simulations
- construction observed structure readily allows
- conventional molecular dynamics
- conventional, classical force field
- allow construction detailed model
- structural alignment methods
- structure-based model
- stereoelectronic theory
- theoretical calculations
- theoretical considerations
- theoretical data
- theoretical examination
- theoretical pK(a) calculations
- theoretical results
- theoretical work
- theoretically
- provides model
- classical molecular mechanics model
- quantum chemistry
- quantum mechanical modeling
- quantum mechanics
- quantum-classical molecular dynamics simulations
- Quantum chemical calculations
- Quantum mechanics
- smaller models
- This model
- Two simulations
- docked structures
- density functional calculations
- density functional theory
- MD
- MD simulation
- MD simulations
- MD studies
- Model building
- Modeling
- Modeling studies
- Modelling
- Models
- Molecular dynamic studies
- Molecular dynamics simulations
- long-term molecular dynamics simulation
- Molecular mechanics calculations show
- Molecular modeling
- model
- model building calculations
- model-building studies
- modeled
- modelled
- modelling
- modelling studies
- models
- molecular dynamics simulation
- molecular dynamics simulation techniques
- molecular dynamics simulations
- molecular dynamics study
- molecular mechanics
- molecular mechanics potential
- molecular mechanics simulation techniques
- molecular modeling
- predicted earlier from crystal structures
- predicted from crystal structures
- predicted sequence
- refined model
- relative large models
- search model
- simulates well
- simulations
- Electrostatic calculations
- Poisson-Boltzmann equation
- polarizable continuum model
- Simulated
- Single point energy calculations
- gas-phase calculations
- energies calculated
- in silico

