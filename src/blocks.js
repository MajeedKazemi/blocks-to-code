import * as Blockly from "blockly";

class UpgradableBlock {
  constructor(name, array_of_definition, array_of_generator) {
    this.version = 1;
    this.name = name;
    this.definition = array_of_definition;
    this.generator = array_of_generator;
  }
  downgrade(to_version) {
    this.version = to_version;
  }

  upgrade() {
    this.version += 1;
  }

  getBlockDefinition(input_version) {
    if (input_version) {
      return this.definition[input_version - 1];
    } else return this.definition[this.version - 1];
  }

  getBlockGenerator(input_version) {
    if (input_version) {
      return this.generator[input_version - 1];
    } else return this.generator[this.version - 1];
  }
}
var name, array_of_definition, array_of_generator;

name = "text_print";
array_of_definition = [
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
    tooltip: "%{BKY_TEXT_PRINT_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_PRINT_HELPURL}",
  },
  {
    type: "text_print",
    colour: "#5CB1D6",
    message0: "print %1",
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
];

array_of_generator = [
  function (block) {
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
  },
  function (block) {
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
  },
];

export var text_print_block = new UpgradableBlock(
  name,
  array_of_definition,
  array_of_generator
);

name = "sensing_askandwait";
array_of_definition = [
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
    type: "sensing_askandwait",
    colour: "#5CB1D6",
    message0: "input %1",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
    ],
    output: "String",
  },
];
array_of_generator = [
  function (block) {
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
  },
  function (block) {
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

    var console_div = document.getElementById("console");
    var input_label = document.getElementById("label");

    input_label.textContent = msg;
    var input_form = document.getElementById("user-input-form");
    input_form.style.visibility = "visible";
    var code = "await getValueFromUserInput()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  },
];

export var sensing_askandwait_block = new UpgradableBlock(
  name,
  array_of_definition,
  array_of_generator
);
