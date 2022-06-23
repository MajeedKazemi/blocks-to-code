Blockly.Msg.CONTROLS_REPEAT_TITLE = "repeat %1";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "";

export var loops = [  // BEGIN JSON EXTRACT
  // Block for repeat n times (external number).

  {
    'type': 'controls_repeat',
    'message0': '%{BKY_CONTROLS_REPEAT_TITLE}',
    'args0': [{
      'type': 'field_number',
      'name': 'TIMES',
      'value': 10,
      'min': 0,
      'precision': 1,
    }],
    'message1': '%{BKY_CONTROLS_REPEAT_INPUT_DO} %1',
    'args1': [{
      'type': 'input_statement',
      'name': 'DO',
    }],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_CONTROLS_REPEAT_TOOLTIP}',
    'helpUrl': '%{BKY_CONTROLS_REPEAT_HELPURL}',
  },

  {
    'type': 'controls_whileUntil',
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
    'style': 'loop_blocks',
    'helpUrl': '%{BKY_CONTROLS_WHILEUNTIL_HELPURL}',
    'extensions': ['controls_whileUntil_tooltip'],
  },
  
  
];  // END JSON EXTRACT (Do not delete this comment.)