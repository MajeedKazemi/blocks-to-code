import * as Blockly from "blockly";

export var inputoutput = [
  {
    type: "text",
    message0: "%1",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "string",
      },
    ],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
  },
  {
    type: "math_number",
    message0: "%1",
    args0: [
      {
        type: "field_number",
        name: "NUM",
      },
    ],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "math_number_constraint",
    message0: "%1",
    args0: [
      {
        type: "field_number",
        name: "NUM",
        value: 10,
        min: 0,
        precision: 1,
      },
    ],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "fix_it_statement",
    colour: "#42f555",
    message0: "fix it %1",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: "text_print",
    colour: "#5CB1D6",
    message0: "say %1",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    tooltip: "%{BKY_TEXT_PRINT_TOOLTIP",
    helpUrl: "%{BKY_TEXT_PRINT_HELPURL",
  },
  {
    type: "sensing_askandwait",
    colour: "#5CB1D6",
    message0: "ask %1 and wait",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: "sensing_answer",
    colour: "#5CB1D6",
    message0: "answer",
    checkboxInFlyout: true,
    output: "String",
    outputShape: Blockly.OUTPUT_SHAPE_ROUND,
  },
];

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
    var console_div = document.getElementById("console");
    var input_label = document.getElementById("label");
    
    input_label.textContent = ` +
    msg +
    `;
    var input_form = document.getElementById("user-input-form");
    input_form.style.visibility = "visible";
    
    var hidden_var = await getValueFromUserInput();
    input_form.style.visibility = "hidden";
  `
  );
};

Blockly.JavaScript["math_number_constraint"] =
  Blockly.JavaScript["math_number"];
