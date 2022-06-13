export var logic = [  // BEGIN JSON EXTRACT
  // Block for repeat n times (external number).
  {
    "type": "math_arithmetic",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"]
        ]
      },
      {
        "type": "input_value",
        "name": "B",
      }
    ],
    "inputsInline": true,
    "output": "Pizza",
    "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
    "style": "math_blocks",
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
    "extensions": ["math_op_tooltip"]
  },
  
  {"type": "logic_compare",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "A"
    },
    {
      "type": "field_dropdown",
      "name": "OP",
      "options": [
        ["=", "EQ"],
        ["\u200F<", "LT"],
        ["\u200F>", "GT"],
      ]
    },
    {
      "type": "input_value",
      "name": "B"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
  "style": "math_blocks",
  "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}",
  "extensions": [
    // "logic_compare",
    "logic_op_tooltip"]
},
]