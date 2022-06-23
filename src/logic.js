import * as Blockly from 'blockly';
export var logic = [
  {"type": "logic_greater",
  "message0": "%1 > %2",
  "args0": [
    {
      "type": "input_value",
      "name": "A"
    },
    {
      "type": "input_value",
      "name": "B"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  'style': 'logic_blocks',
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_less",
  "message0": "%1 < %2",
  "args0": [
    {
      "type": "input_value",
      "name": "A"
    },
    {
      "type": "input_value",
      "name": "B"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  'style': 'logic_blocks',
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_equal",
  "message0": "%1 = %2",
  "args0": [
    {
      "type": "input_value",
      "name": "A"
    },
    {
      "type": "input_value",
      "name": "B"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  'style': 'logic_blocks',
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_op_and",
  "message0": "%1 and %2",
  "args0": [
    {
      "type": "input_value",
      "name": "A",
      'check': 'Boolean',
    },
    {
      "type": "input_value",
      "name": "B",
      'check': 'Boolean',
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  'style': 'logic_blocks',
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_op_or",
  "message0": "%1 or %2",
  "args0": [
    {
      "type": "input_value",
      "name": "A",
      'check': 'Boolean',
    },
    {
      "type": "input_value",
      "name": "B",
      'check': 'Boolean',
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  'style': 'logic_blocks',
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "text_count",
  "message0": "%1 contains %2 ?",
  "args0": [
    {
      "type": "input_value",
      "name": "A",
      'check': 'String',
    },
    {
      "type": "input_value",
      "name": "B",
      'check': 'String',
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  'style': 'logic_blocks',
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },
  
  // Block for if/elseif/else condition.
  {
    'type': 'controls_if',
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
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_if_tooltip'],
  },
  // If/else block that does not use a mutator.
  {
    'type': 'controls_ifelse',
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
    'style': 'logic_blocks',
    'tooltip': '%{BKYCONTROLS_IF_TOOLTIP_2}',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_if_tooltip'],
  },
]

Blockly.JavaScript['logic_greater'] = function(block) {
  const operator = ">"
  const order = Blockly.JavaScript.ORDER_RELATIONAL
  const argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
}

Blockly.JavaScript['logic_less'] = function(block) {
  const operator = "<"
  const order = Blockly.JavaScript.ORDER_RELATIONAL
  const argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
}

Blockly.JavaScript['logic_equal'] = function(block) {
  const operator = "=="
  const order = Blockly.JavaScript.ORDER_EQUALITY
  const argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
}