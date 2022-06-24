import * as Blockly from "blockly";

Blockly.Msg.SENSING_ASKANDWAIT = "ask %1 and wait";
Blockly.Msg.SENSING_ANSWER = "answer";

export var inputoutput = [
  {
    'type': 'text',
    'message0': '%1',
    'args0': [{
      'type': 'field_input',
      'name': 'TEXT',
      'text': 'string',
    }],
    'output': 'String',
    'style': 'text_blocks',
    'helpUrl': '%{BKY_TEXT_TEXT_HELPURL}',
    'tooltip': '%{BKY_TEXT_TEXT_TOOLTIP}',
  },
  {
    'type': 'math_number',
    'message0': '%1',
    'args0': [{
      'type': 'field_number',
      'name': 'NUM',
    }],
    'output': 'Number',
    'helpUrl': '%{BKY_MATH_NUMBER_HELPURL}',
    'style': 'math_blocks',
    'tooltip': '%{BKY_MATH_NUMBER_TOOLTIP}',
    'extensions': ['parent_tooltip_when_inline'],
  },
  {
    'type': 'math_number_constraint',
    'message0': '%1',
    'args0': [{
      'type': 'field_number',
      'name': 'NUM',
      'value': 10,
      'min': 0,
      'precision': 1,
    }],
    'output': 'Number',
    'helpUrl': '%{BKY_MATH_NUMBER_HELPURL}',
    'style': 'math_blocks',
    'tooltip': '%{BKY_MATH_NUMBER_TOOLTIP}',
    'extensions': ['parent_tooltip_when_inline'],
  },
  {
    "type": 'text_print',
    "colour": "#5CB1D6",
    'message0': "say %1",
    'args0': [
      {
        'type': 'input_value',
        'name': 'TEXT',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'tooltip': '%{BKY_TEXT_PRINT_TOOLTIP',
    'helpUrl': '%{BKY_TEXT_PRINT_HELPURL',
  },
  {
    "type": "sensing_askandwait",
    "colour": "#5CB1D6",
    "message0": Blockly.Msg.SENSING_ASKANDWAIT,
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
  },
  {
    "type": "sensing_answer",
    "colour": "#5CB1D6",
    "message0": Blockly.Msg.SENSING_ANSWER,
    "checkboxInFlyout": true,
    "output": "String",
    "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
  },
];

Blockly.JavaScript["sensing_askandwait"] = function (block) {
  // Prompt function.
  if (block.getField("TEXT")) {
    // Internal message.
    var msg = Blockly.JavaScript.quote_(block.getFieldValue("TEXT"));
  } else {
    // External message.
    var msg =
      Blockly.JavaScript.valueToCode(
        block,
        "TEXT",
        Blockly.JavaScript.ORDER_NONE
      ) || "''";
  }
  var code = "var hidden_var = window.prompt(" + msg + ");\n";
  return code;
};

Blockly.JavaScript["sensing_answer"] = function (block) {
  var code = "hidden_var";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript["text_print"] = function (block) {
  const msg =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || "''";
  return (
    `
  var divConsole = document.getElementById("console");
  var content = document.createTextNode(` +
    msg +
    `);
  divConsole.appendChild(content);
  divConsole.innerHTML += '<br>';`
  );
};

Blockly.JavaScript["sensing_askandwait"] = function (block) {
  const msg =
    Blockly.JavaScript.valueToCode(
      block,
      "TEXT",
      Blockly.JavaScript.ORDER_NONE
    ) || "''";

  const sec =
    Blockly.JavaScript.valueToCode(
      block,
      "second",
      Blockly.JavaScript.ORDER_NONE
    ) || "''";

  return (
    `
    var divConsole = document.getElementById("console");
    var content = document.createTextNode(` +
    msg +
    `);
    divConsole.appendChild(content);
    divConsole.innerHTML += '<br>';
    
    var hidden_var = await getValueFromUserInput();
  `
  );
};

Blockly.JavaScript["math_number_constraint"] = Blockly.JavaScript["math_number"] 