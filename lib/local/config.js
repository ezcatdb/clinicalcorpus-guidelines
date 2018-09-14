// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

var Config = (function(window, undefined) {

    var bratCollData = {
	'entity_types': [
// this is optional
        {
            'type': 'SPAN_DEFAULT',
            'bgColor': '#7fa2ff',
//	    'bgColor': 'green',
            'borderColor': 'darken'
        },
        {
            'type': 'ARC_DEFAULT',
            'color': 'black',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
        {
            'type': 'token',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
        {
            'type': '-',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
//inserted by Nagano 20180223		
        {
            'type': 'Phenotype',
            'bgColor': 'tan',
            'borderColor': 'darken'
	    },	
	    {
            'type': 'Disease',
            'bgColor': '#c2a47c',
            'borderColor': 'darken'
	    },	
	    {
            'type': 'Symptom',
            'bgColor': '#c2a47c',
            'borderColor': 'darken'
	    },
	    {
	        'type':'Measurement',
	        'bgColor': '#f2d4ac',
	        'borderColor': 'darken'
	    },

	    {	
	        'type':'Subject',
	        'bgColor':'salmon',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'N_sbjct',
	        'bgColor':'#fa6062',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Age_sbjct',
	        'bgColor':'#ff91a4',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Ethnic_sbjct',
	        'bgColor':'#ffa07a',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'History_sbjct',
	        'bgColor':'#e9967a',
	        'borderColor': 'darken'
	    },

	    {
	        'type':'Anatomical_entity',
	        'bgColor': '#11deee',
	        'borderColor': 'darken'
	    },

	    {
	        'type':'Cell_natural',
	        'bgColor': '#9fffff',
	        'borderColor': 'darken'
	    },
	    {
	        'type':'Cell_component',
	        'bgColor': '#afffhh',
	        'borderColor': 'darken'
	    },

	    {	
	        'type':'Inorganic_compound',
	        'bgColor':'#7fff00',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Organic_compound_other',
	        'bgColor':'#00ff7f',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Pharmacological_substance',
	        'bgColor':'#00ff90',
	        'borderColor': 'darken'
	    },

	    {	
	        'type':'DNA_molecule',
	        'bgColor':'#007fff',
	        'borderColor': 'darken'
	    },


	    {	
	        'type':'RNA_molecule',
	        'bgColor':'#007fdd',
	        'borderColor': 'darken'
	    },


	    {	
	        'type':'Protein_family_or_group',
	        'bgColor':'#7fa2ee',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Protein_molecule',
	        'bgColor':'#7fa2ff',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Amino_acid_monomer',
	        'bgColor':'#7fa2f0',
	        'borderColor': 'darken'
	    },

	    {	
	        'type':'Value',
	        'bgColor':'gold',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Dose',
	        'bgColor':'#ffcf00',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Period',
	        'bgColor':'#ffbf22',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Frequency',
	        'bgColor':'#efaf44',
	        'borderColor': 'darken'
	    },


	    {	
	        'type':'EntityProperty',
	        'bgColor':'cyan',
 	        'borderColor': 'darken'
	    },
	    {
	        'type':'Negation_cue',
	        'bgColor':'orange',
	        'borderColor': 'darken'	
	    },	  
	    {
	        'type':'Speculation_cue',	
	        'bgColor':'orange',
	        'borderColor': 'darken'
	    },
	    {
	        'type':'Method_cue',	
	        'bgColor':'white',
	        'borderColor': 'darken'	
	    }
//
	],
  'event_attribute_types': [
// inserted by Nagano 20180312
	{
            'type':   'Negated',
            'values': { 
                'Negation' : {	'box':'crossed' },
             },
	}, 
	{
            'type':   'Certainty',
            'values': { 
                'Confirmed' : { 'glyph': '[C]' },
	  	        'Probable' : { 'glyph': '[P]' },
                'Unlikely' : { 'glyph': '[U]' },		
             },
	 },
	{
            'type':   'SubstrateAssisted',
            'values': { 
                'SubstrateAssistedCatalysis' : { 'glyph': '[SuA]' },
	  	'OtherCatalysis' : { 'glyph': '[OC]' },
             },
	 },

  	],
  'entity_attribute_types': [
// inserted by Nagano 20180312
	{
            'type':   'EntityAttribute',
            'values': { 
		'CatalyticRole' : { 'glyph': '[Role]'},
                'ReactivePart' : { 'glyph': '[Part]'},
    		'ReactionState' : { 'glyph': '[State]'},
	    },
        }, 
	{
            'type':   'EnzymeCompoundAttribute',
            'values': { 
		        'Types/family' : { 'glyph': '[TypeFamily]'},
                'Coreference' : { 'glyph': '[Corefer]'},
	    },
        },	
	{
            'type':   'EnzymeAttribute',
            'values': { 
		        'mutant' : { 'glyph': '[mt]'},
                'Wild-type' : { 'glyph': '[wt]'},
             },
         },  
	{
            'type':   'ECnumber',
            'values': { 
	        'EC_number' : { 'glyph': '[EC]'},
                'OtherDescription' : { 'glyph': '[OD]'},
             },
         }, 
	{
            'type':   'CompoundAttribute',
            'values': { 
		        'original' : { 'glyph': '[orig]'},
                'derivative' : { 'glyph': '[deriv]'},
             },
         }, 
	{
            'type':   'Name',
            'values': { 
                'Name' : { 'glyph': '(N)' },
             },
         }	  
         ],
'relation_types': [
//inserted by Nagano 20180223
	   {
		'type':'is_equivalent',	
        	'arrowHead':'triangle,5', 
		'color':'black'	   	  
	   },
	   {
		'type':'Coreference',	
        	'arrowHead':'triangle,5', 
		'color':'black'	   	  
	   },
	   {
		'type':'member_of',	
        	'arrowHead':'triangle,5', 
		'color':'magenta'	   	  
	   },
	   {
		'type':'part_of',	
        	'arrowHead':'triangle,5', 
		'color':'green'	   	  
	   },
	   {
		'type':'value_of',	
        	'arrowHead':'triangle,5', 
		'color':'cyan'	   	  
	   },
	   {
		'type':'Subject_Disorder',	
        	'arrowHead':'triangle,5', 
		'dashArray': '3-3',
		'color':'black'	   	  
	   }

// this is optional
//         {
//             'type': 'subj',
//             'labels': [ 'subj' ],
//             'dashArray': '3,3',
//             'color': 'green',
//             'args': [
//                 {
//                     'role': 'arg1',
//                     'targets': [ 'token' ]
//                 },
//                 {
//                     'role': 'arg2',
//                     'targets': [ 'token' ]
//                 }
//             ]
//         }
        ],
	'event_types': [
//inserted by Nagano 20180306
        {
            'type': 'SPAN_DEFAULT',
            'bgColor': 'plum',
//	    'bgColor': 'green',
            'borderColor': 'darken'
        },
        {
            'type': 'ARC_DEFAULT',
            'color': 'black',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
	{
	    'type':'Diagnosis',
	    'bgColor':'pink',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Effect_by_treatment',
	    'bgColor':'magenta',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Potential_therapeutic_effect',
	    'bgColor':'magenta',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Adverse_effect',
	    'bgColor':'#ee66ee',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Other_event',
	    'bgColor':'red',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Interaction',
	    'bgColor':'pink',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Release',
	    'bgColor':'pink',
	    'borderColor': 'darken'
	},		
	{
	    'type':'ConformationalChange',
	    'bgColor':'pink',
	    'borderColor': 'darken'
	}		
	],
    };

    return {
        bratCollData: bratCollData,
    };
})(window);
