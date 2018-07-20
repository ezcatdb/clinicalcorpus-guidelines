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
            'bgColor': '#ffccaa',
            'borderColor': 'darken'
	    },	
	    {
            'type': 'Disease',
            'bgColor': '#ffddbb',
            'borderColor': 'darken'
	    },	
	    {
            'type': 'Symptom',
            'bgColor': '#ffddcc',
            'borderColor': 'darken'
	    },
	    {
	        'type':'Measurement',
	        'bgColor': '#ffdddd',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'Value',
	        'bgColor':'lightgreen',
	        'borderColor': 'darken'
	    },
	    {	
	        'type':'EntityProperty',
	        'bgColor':'cyan',
 	        'borderColor': 'darken'
	    },
	    {
	        'type':'NegationCue',
	        'bgColor':'orange',
	        'borderColor': 'darken'	
	    },	  
	    {
	        'type':'SpeculationCue',	
	        'bgColor':'orange',
	        'borderColor': 'darken'
	    },
	    {
	        'type':'MethodCue',	
	        'bgColor':'white',
	        'borderColor': 'darken'	
	    }
//
	],
  'event_attribute_types': [
// inserted by Nagano 20180312
	{
            'type':   'Negation',
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
            'type':   'ReactionType',
            'values': { 
                'Hydrolysis' : { 'glyph': '[Hydrolysis]' },
	  	'Transfer' : { 'glyph': '[Transfer]' },
		'Elimination' : { 'glyph': '[Elimin]' },
		'Isomerisation' : { 'glyph': '[Isomer]' },
		'Racemisation' : { 'glyph': '[Racemi]' },
		'Addition' : { 'glyph': '[Add]' },
		'Redox' : { 'glyph': '[Redox]' },
		'Reduction' : { 'glyph': '[Reduct]' },
		'Oxidation' : { 'glyph': '[Oxidat]' },
		'Hydride-transfer' : { 'glyph': '[Hydride]' },
		'Electron-transfer' : { 'glyph': '[Electron]' },
		'Oxygenation' : { 'glyph': '[Oxygenat]' },
		'Others' : { 'glyph': '[Others]' },
             },
	 },	  
	{
            'type':   'EventAttribute',
            'values': { 
                'CatalyticRole' : { 'glyph': '[Role]' },
	  	'Others' : { 'glyph': '[Other]' },
             },
	 },
	{
            'type':   'MechanismType',
            'values': { 
                'Associative' : { 'glyph': '[SN2]' },
	  	'Dissociative' : { 'glyph': '[SN1]' },
                'E1cb' : { 'glyph': '[E1cb]' },
                'E1' : { 'glyph': '[E1]' },
                'E2' : { 'glyph': '[E2]' },		
             },
	 },
	{
            'type':   'NAmechanismType',
            'values': { 
                'SingleDisplacementMechanism' : { 'glyph': '[Single]' },
	  	'DoubleDisplacementMechanism' : { 'glyph': '[Double]' },
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
		'type':'coreference',	
        	'arrowHead':'triangle,5', 
		'color':'black'	   	  
	   },
	   {
		'type':'corresponds_to',	
        	'arrowHead':'triangle,5', 
		'dashArray': '3-3',
		'color':'black'	   	  
	   },
	   {
		'type':'group_member',	
        	'arrowHead':'triangle,5', 
		'color':'magenta'	   	  
	   },
	   {
		'type':'whole_part',	
        	'arrowHead':'triangle,5', 
		'color':'green'	   	  
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
            'bgColor': 'Plum',
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
	    'type':'ElectrophilicAttack',
	    'bgColor':'#ff00ff',
	    'borderColor': 'darken'
	},		
	{
	    'type':'HybridisationChange',
	    'bgColor':'#ff00ff',
	    'borderColor': 'darken'
	},		
	{
	    'type':'CouplingReaction',
	    'bgColor':'#ff00ff',
	    'borderColor': 'darken'
	},		
	{
	    'type':'UncouplingReaction',
	    'bgColor':'#ff00ff',
	    'borderColor': 'darken'
	},		
	{
	    'type':'Others',
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
