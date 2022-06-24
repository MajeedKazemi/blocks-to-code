import * as Blockly from 'blockly';
export var operator = [
    // -------------------- math_add --------------------
    {
    "type": "math_add",
    "colour": "#59C059",
    "message0": "%1 + %2",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Number",
        
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Number",
      },
    ],
    "inputsInline": true,
    "output": "Number",
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_subtract --------------------
  {
    "type": "math_subtract",
    "colour": "#59C059",
    "message0": "%1 - %2",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Number",
        
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Number",
      },
    ],
    "inputsInline": true,
    "output": "Number",
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },
  
  // -------------------- math_multiply --------------------
  {
    "type": "math_multiply",
    "colour": "#59C059",
    "message0": "%1 * %2",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Number",
        
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Number",
      },
    ],
    "inputsInline": true,
    "output": "Number",
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_divide --------------------
  {
    "type": "math_divide",
    "colour": "#59C059",
    "message0": "%1 / %2",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Number",
        
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Number",
      },
    ],
    "inputsInline": true,
    "output": "Number",
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  {
    "type": "math_random",
    "colour": "#59C059",
    'message0': 'pick random %1 to %2',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
        'check': 'Number',
      },
      {
        'type': 'input_value',
        'name': 'B',
        'check': 'Number',
      },
    ],
    'output': 'Number',
    'inputsInline': true,
  },
  {"type": "logic_greater",
  "colour": "#59C059",
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
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_less",
  "colour": "#59C059",
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
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_equal",
  "colour": "#59C059",
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
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_op_and",
  "colour": "#59C059",
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
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },

  {"type": "logic_op_or",
  "colour": "#59C059",
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
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },
  {
    'type': 'logic_negate',
    "colour": "#59C059",
    'message0': '%{BKY_LOGIC_NEGATE_TITLE}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'BOOL',
        'check': 'Boolean',
      },
    ],
    'output': 'Boolean',
    'tooltip': '%{BKY_LOGIC_NEGATE_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NEGATE_HELPURL}',
  },
  {
    "type": "text_join",
    "colour": "#59C059",
    "message0": "join %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "String",
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "String",
      },
    ],
    "output": "String",
    "inputsInline": true,
  },
  {
    type: "text_charAt",
    colour: "#59C059",
    message0: "letter %1 of %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "String",
      },
    ],
    output: "String",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: true,
  },
  {
    'type': 'text_length',
    "colour": "#59C059",
    'message0': '%{BKY_TEXT_LENGTH_TITLE}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': ['String', 'Array'],
      },
    ],
    'output': 'Number',
    'tooltip': '%{BKY_TEXT_LENGTH_TOOLTIP}',
    'helpUrl': '%{BKY_TEXT_LENGTH_HELPURL}',
  },
  {"type": "text_count",
  "colour": "#59C059",
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
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}"
  },
  {
    'type': 'math_modulo',
    "colour": "#59C059",
    'message0': '%1 mod %2',
    'args0': [
      {
        'type': 'input_value',
        'name': 'DIVIDEND',
        'check': 'Number',
      },
      {
        'type': 'input_value',
        'name': 'DIVISOR',
        'check': 'Number',
      },
    ],
    'inputsInline': true,
    'output': 'Number',
    'tooltip': '%{BKY_MATH_MODULO_TOOLTIP}',
    'helpUrl': '%{BKY_MATH_MODULO_HELPURL}',
  },
  {
    'type': 'math_round',
    "colour": "#59C059",
    'message0': '%1 %2',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['%{BKY_MATH_ROUND_OPERATOR_ROUND}', 'ROUND'],
          ['%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}', 'ROUNDUP'],
          ['%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}', 'ROUNDDOWN'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'NUM',
        'check': 'Number',
      },
    ],
    'output': 'Number',
    'helpUrl': '%{BKY_MATH_ROUND_HELPURL}',
    'tooltip': '%{BKY_MATH_ROUND_TOOLTIP}',
  },
  {
    'type': 'math_single',
    "colour": "#59C059",
    'message0': '%1 %2',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['%{BKY_MATH_SINGLE_OP_ROOT}', 'ROOT'],
          ['%{BKY_MATH_SINGLE_OP_ABSOLUTE}', 'ABS'],
          ['-', 'NEG'],
          ['ln', 'LN'],
          ['log10', 'LOG10'],
          ['e^', 'EXP'],
          ['10^', 'POW10'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'NUM',
        'check': 'Number',
      },
    ],
    'output': 'Number',
    'helpUrl': '%{BKY_MATH_SINGLE_HELPURL}',
    'extensions': ['math_op_tooltip'],
  },

]


Blockly.JavaScript['math_add'] = function(block) {
    const operator = "+"
    const order = Blockly.JavaScript.ORDER_ADDITION
    const argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
    const argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
    let code;
    code = argument0 + operator + argument1;
    return [code, order];
}

Blockly.JavaScript['math_subtract'] = function(block) {
    const operator = "-"
    const order = Blockly.JavaScript.ORDER_SUBTRACTION
    const argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
    const argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
    let code;
    code = argument0 + operator + argument1;
    return [code, order];
}
