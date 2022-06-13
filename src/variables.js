export var variables = [  // BEGIN JSON EXTRACT
// Block for variable getter.
{
  "type": "variables_get",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
    }
  ],
  "output": null,
  "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
  "style": "variable_blocks",
  "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
  "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
  "extensions": ["contextMenu_variableSetterGetter"]
},
// Block for variable getter.
{
  "type": "variables_get_reporter",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable_getter",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
    }
  ],
  "output": null,
  "style": "variable_blocks",
  "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
  "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
  "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
  "extensions": ["contextMenu_variableReporter"]
},
// Block for variable setter.
{
  "type": "variables_set",
  "message0": "%{BKY_VARIABLES_SET}",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
    },
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "style": "variable_blocks",
  "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
  "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
  "extensions": ["contextMenu_variableSetterGetter"]
}
];  // END JSON EXTRACT (Do not delete this comment.)