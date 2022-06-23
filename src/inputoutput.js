import * as Blockly from 'blockly';
Blockly.Msg.SENSING_ASKANDWAIT = "ask %1 and wait"
Blockly.Msg.SENSING_ANSWER = "answer"

export var inputoutput = [
    {
      "type": "sensing_askandwait",
      "message0": Blockly.Msg.SENSING_ASKANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "style": "sensing_blocks"
    },

    {
      "type": "sensing_answer",
      "message0": Blockly.Msg.SENSING_ANSWER,
      "checkboxInFlyout": true,
      
      "output": "String",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "style": "sensing_blocks"
    },
    {
      "type": "text_join",
      'message0': 'join %1 %2',
      'args0': [
        {
          'type': 'input_value',
          'name': 'A',
          'check': 'String',
        },
        {
          'type': 'input_value',
          'name': 'B',
          'check': 'String',
        },
      ],
      'output': 'String',
      'inputsInline': true,
      'style': 'text_blocks',
    },
    {
      'type': 'text_charAt',
      'message0': 'letter %1 of %2',
      'args0': [
        {
          'type': 'input_value',
          'name': 'A',
          'check': 'Number',
        },
        {
          'type': 'input_value',
          'name': 'B',
          'check': 'String',
        },
  
      ],
      'output': 'String',
      'style': 'text_blocks',
      'helpUrl': '%{BKY_TEXT_CHARAT_HELPURL}',
      'inputsInline': true,
      
    },
    
]
Blockly.JavaScript['sensing_askandwait'] = function(block) {
  // Prompt function.
  if (block.getField('TEXT')) {
    // Internal message.
    var msg = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
  }
  var code = 'var hidden_var = window.prompt(' + msg + ');\n'
  return code
}

Blockly.JavaScript['sensing_answer'] = function(block) {
  var code = 'hidden_var'
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['text_charAt'] = function(block) {
  //asdf
}

Blockly.JavaScript['text_print'] = function(block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || "''";
  return `
  var divConsole = document.getElementById("console");
  var content = document.createTextNode(`+msg+`);
  divConsole.appendChild(content);
  divConsole.innerHTML += '<br>';`;
};
