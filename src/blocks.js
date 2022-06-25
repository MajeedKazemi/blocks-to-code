class UpgradableBlock {

    constructor(name, initial_definition, initial_generator) {
        this.version = 1;
        this.definition = [];
        this.generator = [];
        this.name = name;
        this.definition.push(initial_definition);
        this.generator.push(initial_generator);
        
    }
    downgrade(to_version) {
        this.version = to_version;
    }

    upgrade(new_definition, new_generator) {
        this.definition.push(new_definition);
        this.generator.push(new_generator);
        this.version += 1;
    }

    getBlockDefinition(input_version) {
        if (input_version){
          console.log(this.definition[input_version-1])
            return this.definition[input_version-1];
        }
        else return this.definition[this.version-1];
    }

    getBlockGenerator(input_version) {
        if (input_version){
            return this.generator[input_version-1];
        }
        else return this.generator[this.version-1];
    }


}


var name = "text_print";
var initial_definition = {
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
    'tooltip': '%{BKY_TEXT_PRINT_TOOLTIP}',
    'helpUrl': '%{BKY_TEXT_PRINT_HELPURL}',
};
var initial_generator = function (block) {
    const msg =
      Blockly.JavaScript.valueToCode(
        block,
        "TEXT",
        Blockly.JavaScript.ORDER_NONE
      ) || "''";
    return (
      `
    var divConsole = document.getElementById("console");
    var content = document.createTextNode(` + msg + `);
    divConsole.appendChild(content);
    divConsole.innerHTML += '<br>';`
    );
  };

export var text_print_block = new UpgradableBlock(name, initial_definition, initial_generator);

export var sensing_askandwait_block = new UpgradableBlock("sensing_askandwait",
  {
    "type": "sensing_askandwait",
    "colour": "#5CB1D6",
    "message0": "ask %1 and wait",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
  },
  function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''";
  
    const sec = Blockly.JavaScript.valueToCode(block, "second", Blockly.JavaScript.ORDER_NONE) || "''";
    return (`
      var console_div = document.getElementById("console");
      var input_label = document.getElementById("label");
      
      input_label.textContent = ` + msg + `;
      var input_form = document.getElementById("user-input-form");
      input_form.style.visibility = "visible";
      
      var hidden_var = await getValueFromUserInput();
      input_form.style.visibility = "hidden";
    `
    );
  }
  )
