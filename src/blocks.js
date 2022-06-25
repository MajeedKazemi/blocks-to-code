class UpgradableBlock {

    constructor(name, initial_definition, initial_generator) {
        this.version = 0;
        this.definition = [];
        this.generator = [];
        this.name = name;
        this.definition.push(initial_definition);
        this.generator.push(initial_generator);
        
    }

    upgrade(new_definition, new_generator) {
        definition.push(new_definition);
        generator.push(new_generator);
        version += 1;
    }

    getBlockDefinition(input_version) {
        if (input_version){
            return definition[input_version];
        }
        else return definition[version];
    }

    getBlockGenerator(input_version) {
        if (input_version){
            return generator[input_version];
        }
        else return generator[version];
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

export var print_block = new UpgradableBlock(name, initial_definition, initial_generator);
