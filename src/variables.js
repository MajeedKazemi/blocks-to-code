export var variables = [  // BEGIN JSON EXTRACT
// Block for variable getter.

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