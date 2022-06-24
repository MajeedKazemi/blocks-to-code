export var control = [
  
  // Block for if/elseif/else condition.
  {
    'type': 'controls_if',
    "colour": "#FFAB19",
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1 then',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': '%1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_if_tooltip'],
  },
  // If/else block that does not use a mutator.
  {
    'type': 'controls_ifelse',
    "colour": "#FFAB19",
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1 then',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': "%1",
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],

    'message2': 'else',
    'message3': '%1',
    'args3': [
      {
        'type': 'input_statement',
        'name': 'ELSE',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'tooltip': '%{BKYCONTROLS_IF_TOOLTIP_2}',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_if_tooltip'],
  },
  {
    
    'type': 'controls_repeat',
    "colour": "#FFAB19",
    'message0': 'repeat %1',
    'args0': [{
      'type': 'input_value',
      'name': 'TIMES',
      
    }],
    'message1': '%1',
    'args1': [{
      'type': 'input_statement',
      'name': 'DO',
    }],
    'previousStatement': null,
    'nextStatement': null,
    'tooltip': '%{BKY_CONTROLS_REPEAT_TOOLTIP}',
    'helpUrl': '%{BKY_CONTROLS_REPEAT_HELPURL}',
  },

    {
        "type": "controls_forever",
        "colour": "#FFAB19",
        "message0": "forever",
       
        "message1": " %1",
        "args1": [{
          "type": "input_statement",
          "name": "DO"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
      },
     
    
      {
        'type': 'controls_whileUntil',
        "colour": "#FFAB19",
        'message0': 'repeat until %1',
        'args0': [
          {
            'type': 'input_value',
            'name': 'BOOL',
            'check': 'Boolean',
          },
        ],
        'message1': '%1',
        'args1': [{
          'type': 'input_statement',
          'name': 'DO',
        }],
        'previousStatement': null,
        'nextStatement': null,
        'helpUrl': '%{BKY_CONTROLS_WHILEUNTIL_HELPURL}',
        'extensions': ['controls_whileUntil_tooltip'],
      },
]