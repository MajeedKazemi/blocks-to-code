export var control = [
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