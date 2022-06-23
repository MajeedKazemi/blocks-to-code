import * as Blockly from 'blockly';
export var math = [
    // -------------------- math_add --------------------
    {
    "type": "math_add",
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
    'style': 'logic_blocks',
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_subtract --------------------
  {
    "type": "math_subtract",
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
    'style': 'logic_blocks',
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },
  
  // -------------------- math_multiply --------------------
  {
    "type": "math_multiply",
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
    'style': 'logic_blocks',
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_divide --------------------
  {
    "type": "math_divide",
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
    'style': 'logic_blocks',
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  {
    "type": "math_random",
    'message0': 'pick random %1 to %2',
    'args0': [
      {
        'type': 'input_value',
        'name': 'SUB',
        'check': 'Number',
      },
      {
        'type': 'input_value',
        'name': 'TEXT',
        'check': 'Number',
      },
    ],
    'output': 'Number',
    'inputsInline': true,
    'style': 'logic_blocks',
  }

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