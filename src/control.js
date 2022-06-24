import * as Blockly from 'blockly';
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
      {
        'type': 'controls_break',
        "colour": "#FFAB19",
        'message0': 'stop all',
        'previousStatement': null,
      },
]




Blockly.JavaScript['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  const until = true;
  let argument0 =
  Blockly.JavaScript.valueToCode(
          block, 'BOOL',
          until ? Blockly.JavaScript.ORDER_LOGICAL_NOT : Blockly.JavaScript.ORDER_NONE) ||
      'false';
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.JavaScript['controls_forever'] = function(block) {
  
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  return 'while (true) {\n' + branch + '}\n';
};

Blockly.JavaScript['controls_break'] = function(block) {
  
  return 'break;\n';
};