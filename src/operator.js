import * as Blockly from "blockly";
export var operator = [
  // -------------------- math_add --------------------
  {
    type: "math_add",
    colour: "#59C059",
    message0: "%1 + %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "Number",
      },
    ],
    inputsInline: true,
    output: "Number",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_subtract --------------------
  {
    type: "math_subtract",
    colour: "#59C059",
    message0: "%1 - %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "Number",
      },
    ],
    inputsInline: true,
    output: "Number",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_multiply --------------------
  {
    type: "math_multiply",
    colour: "#59C059",
    message0: "%1 * %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "Number",
      },
    ],
    inputsInline: true,
    output: "Number",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  // -------------------- math_divide --------------------
  {
    type: "math_divide",
    colour: "#59C059",
    message0: "%1 / %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "Number",
      },
    ],
    inputsInline: true,
    output: "Number",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
  },

  {
    type: "math_random",
    colour: "#59C059",
    message0: "pick random %1 to %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "Number",
      },
    ],
    output: "Number",
    inputsInline: true,
  },
  {
    type: "logic_greater",
    colour: "#59C059",
    message0: "%1 > %2",
    args0: [
      {
        type: "input_value",
        name: "A",
      },
      {
        type: "input_value",
        name: "B",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
  },

  {
    type: "logic_less",
    colour: "#59C059",
    message0: "%1 < %2",
    args0: [
      {
        type: "input_value",
        name: "A",
      },
      {
        type: "input_value",
        name: "B",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
  },

  {
    type: "logic_equal",
    colour: "#59C059",
    message0: "%1 = %2",
    args0: [
      {
        type: "input_value",
        name: "A",
      },
      {
        type: "input_value",
        name: "B",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
  },

  {
    type: "logic_op_and",
    colour: "#59C059",
    message0: "%1 and %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Boolean",
      },
      {
        type: "input_value",
        name: "B",
        check: "Boolean",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
  },

  {
    type: "logic_op_or",
    colour: "#59C059",
    message0: "%1 or %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Boolean",
      },
      {
        type: "input_value",
        name: "B",
        check: "Boolean",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
  },
  {
    type: "logic_negate",
    colour: "#59C059",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [
      {
        type: "input_value",
        name: "BOOL",
        check: "Boolean",
      },
    ],
    output: "Boolean",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}",
  },
  {
    type: "text_join",
    colour: "#59C059",
    message0: "join %1 %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "String",
      },
      {
        type: "input_value",
        name: "B",
        check: "String",
      },
    ],
    output: "String",
    inputsInline: true,
  },
  {
    type: "text_charAt",
    colour: "#59C059",
    message0: "letter %1 of %2",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Number",
      },
      {
        type: "input_value",
        name: "B",
        check: "String",
      },
    ],
    output: "String",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: true,
  },
  {
    type: "text_length",
    colour: "#59C059",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"],
      },
    ],
    output: "Number",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}",
  },
  {
    type: "text_count",
    colour: "#59C059",
    message0: "%1 contains %2 ?",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "String",
      },
      {
        type: "input_value",
        name: "B",
        check: "String",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
  },
  {
    type: "math_modulo",
    colour: "#59C059",
    message0: "%1 mod %2",
    args0: [
      {
        type: "input_value",
        name: "DIVIDEND",
        check: "Number",
      },
      {
        type: "input_value",
        name: "DIVISOR",
        check: "Number",
      },
    ],
    inputsInline: true,
    output: "Number",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}",
  },
  {
    type: "math_round",
    colour: "#59C059",
    message0: "round %1",
    args0: [
      {
        type: "input_value",
        name: "NUM",
        check: "Number",
      },
    ],
    output: "Number",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}",
  },
  {
    type: "math_single",
    colour: "#59C059",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
          ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
          ["-", "NEG"],
          ["ln", "LN"],
          ["log10", "LOG10"],
          ["e^", "EXP"],
          ["10^", "POW10"],
        ],
      },
      {
        type: "input_value",
        name: "NUM",
        check: "Number",
      },
    ],
    output: "Number",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"],
  },

  {
    type: "type_tostring",
    colour: "#59C059",
    message0: "str (%1)",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["String", "Number"],
      },
    ],
    output: "String",
  },

  {
    type: "type_toint",
    colour: "#59C059",
    message0: "int (%1)",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["String", "Number"],
      },
    ],
    output: "Number",
  },
];

Blockly.JavaScript["math_add"] = function (block) {
  const operator = "+";
  const order = Blockly.JavaScript.ORDER_ADDITION;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.JavaScript["math_subtract"] = function (block) {
  const operator = "-";
  const order = Blockly.JavaScript.ORDER_SUBTRACTION;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.JavaScript["math_multiply"] = function (block) {
  const operator = "*";
  const order = Blockly.JavaScript.ORDER_MULTIPLICATION;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.JavaScript["math_divide"] = function (block) {
  const operator = "/";
  const order = Blockly.JavaScript.ORDER_DIVISION;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  let code;
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.JavaScript["math_random"] = function (block) {
  // Random integer between [X] and [Y].
  const argument0 =
    Blockly.JavaScript.valueToCode(block, "A", Blockly.JavaScript.ORDER_NONE) ||
    "0";
  const argument1 =
    Blockly.JavaScript.valueToCode(block, "B", Blockly.JavaScript.ORDER_NONE) ||
    "0";
  const functionName = Blockly.JavaScript.provideFunction_(
    "mathRandomInt",
    `
function ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}
`
  );
  const code = functionName + "(" + argument0 + ", " + argument1 + ")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript["logic_op_and"] = function (block) {
  // Operations 'and', 'or'.
  const operator = "&&";
  const order =
    operator === "&&"
      ? Blockly.JavaScript.ORDER_LOGICAL_AND
      : Blockly.JavaScript.ORDER_LOGICAL_OR;
  let argument0 = Blockly.JavaScript.valueToCode(block, "A", order);
  let argument1 = Blockly.JavaScript.valueToCode(block, "B", order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = "false";
    argument1 = "false";
  } else {
    // Single missing arguments have no effect on the return value.
    const defaultArgument = operator === "&&" ? "true" : "false";
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};

Blockly.JavaScript["logic_op_or"] = function (block) {
  // Operations 'and', 'or'.
  const operator = "||";
  const order =
    operator === "&&"
      ? Blockly.JavaScript.ORDER_LOGICAL_AND
      : Blockly.JavaScript.ORDER_LOGICAL_OR;
  let argument0 = Blockly.JavaScript.valueToCode(block, "A", order);
  let argument1 = Blockly.JavaScript.valueToCode(block, "B", order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = "false";
    argument1 = "false";
  } else {
    // Single missing arguments have no effect on the return value.
    const defaultArgument = operator === "&&" ? "true" : "false";
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};

Blockly.JavaScript["logic_negate"] = function (block) {
  // Negation.
  const order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
  const argument0 =
    Blockly.JavaScript.valueToCode(block, "BOOL", order) || "true";
  const code = "!" + argument0;
  return [code, order];
};

Blockly.JavaScript["logic_greater"] = function (block) {
  // Comparison operator.

  const operator = ">";
  const order =
    operator === "==" || operator === "!="
      ? Blockly.JavaScript.ORDER_EQUALITY
      : Blockly.JavaScript.ORDER_RELATIONAL;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
Blockly.JavaScript["logic_less"] = function (block) {
  // Comparison operator.

  const operator = "<";
  const order =
    operator === "==" || operator === "!="
      ? Blockly.JavaScript.ORDER_EQUALITY
      : Blockly.JavaScript.ORDER_RELATIONAL;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
Blockly.JavaScript["logic_equal"] = function (block) {
  // Comparison operator.

  const operator = "==";
  const order =
    operator === "==" || operator === "!="
      ? Blockly.JavaScript.ORDER_EQUALITY
      : Blockly.JavaScript.ORDER_RELATIONAL;
  const argument0 = Blockly.JavaScript.valueToCode(block, "A", order) || "0";
  const argument1 = Blockly.JavaScript.valueToCode(block, "B", order) || "0";
  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};

Blockly.JavaScript["text_join"] = function (block) {
  const A =
    Blockly.JavaScript.valueToCode(block, "A", Blockly.JavaScript.ORDER_NONE) ||
    "''";

  const B =
    Blockly.JavaScript.valueToCode(block, "B", Blockly.JavaScript.ORDER_NONE) ||
    "''";

  return [
    `
    (${A}.toString() + ${B}.toString())
  `,
    Blockly.JavaScript.ORDER_FUNCTION_CALL,
  ];
};

Blockly.JavaScript["text_length"] = function (block) {
  // String or array length.
  const text =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_MEMBER
    ) || "''";
  return [text + ".length", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript["text_count"] = function (block) {
  const text =
    Blockly.JavaScript.valueToCode(block, "A", Blockly.JavaScript.ORDER_NONE) ||
    "''";
  const sub =
    Blockly.JavaScript.valueToCode(block, "B", Blockly.JavaScript.ORDER_NONE) ||
    "''";
  const code = text + ".includes(" + sub + ")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript["text_charAt"] = function (block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  const where =
    Blockly.JavaScript.valueToCode(
      block,
      "A",
      Blockly.JavaScript.ORDER_MEMBER
    ) || "1";
  const textOrder =
    where === "RANDOM"
      ? Blockly.JavaScript.ORDER_NONE
      : Blockly.JavaScript.ORDER_MEMBER;
  const text = Blockly.JavaScript.valueToCode(block, "B", textOrder) || "''";
  console.log(where);
  const code = text + ".charAt(" + (where - 1) + ")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript["math_round"] = function (block) {
  // Math operators with single operand.
  const operator = "ROUND";
  let code;
  let arg;
  if (operator === "NEG") {
    // Negation is a special case given its different operator precedence.
    arg =
      Blockly.JavaScript.valueToCode(
        block,
        "NUM",
        Blockly.JavaScript.ORDER_UNARY_NEGATION
      ) || "0";
    if (arg[0] === "-") {
      // --3 is not legal in JS.
      arg = " " + arg;
    }
    code = "-" + arg;
    return [code, Blockly.JavaScript.ORDER_UNARY_NEGATION];
  }
  if (operator === "SIN" || operator === "COS" || operator === "TAN") {
    arg =
      Blockly.JavaScript.valueToCode(
        block,
        "NUM",
        Blockly.JavaScript.ORDER_DIVISION
      ) || "0";
  } else {
    arg =
      Blockly.JavaScript.valueToCode(
        block,
        "NUM",
        Blockly.JavaScript.ORDER_NONE
      ) || "0";
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case "ABS":
      code = "Math.abs(" + arg + ")";
      break;
    case "ROOT":
      code = "Math.sqrt(" + arg + ")";
      break;
    case "LN":
      code = "Math.log(" + arg + ")";
      break;
    case "EXP":
      code = "Math.exp(" + arg + ")";
      break;
    case "POW10":
      code = "Math.pow(10," + arg + ")";
      break;
    case "ROUND":
      code = "Math.round(" + arg + ")";
      break;
    case "ROUNDUP":
      code = "Math.ceil(" + arg + ")";
      break;
    case "ROUNDDOWN":
      code = "Math.floor(" + arg + ")";
      break;
    case "SIN":
      code = "Math.sin(" + arg + " / 180 * Math.PI)";
      break;
    case "COS":
      code = "Math.cos(" + arg + " / 180 * Math.PI)";
      break;
    case "TAN":
      code = "Math.tan(" + arg + " / 180 * Math.PI)";
      break;
  }
  if (code) {
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case "LOG10":
      code = "Math.log(" + arg + ") / Math.log(10)";
      break;
    case "ASIN":
      code = "Math.asin(" + arg + ") / Math.PI * 180";
      break;
    case "ACOS":
      code = "Math.acos(" + arg + ") / Math.PI * 180";
      break;
    case "ATAN":
      code = "Math.atan(" + arg + ") / Math.PI * 180";
      break;
    default:
      throw Error("Unknown math operator: " + operator);
  }
  return [code, Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.JavaScript["math_single"] = function (block) {
  // Math operators with single operand.
  const operator = block.getFieldValue("OP");
  let code;
  let arg;
  if (operator === "NEG") {
    // Negation is a special case given its different operator precedence.
    arg =
      Blockly.JavaScript.valueToCode(
        block,
        "NUM",
        Blockly.JavaScript.ORDER_UNARY_NEGATION
      ) || "0";
    if (arg[0] === "-") {
      // --3 is not legal in JS.
      arg = " " + arg;
    }
    code = "-" + arg;
    return [code, Blockly.JavaScript.ORDER_UNARY_NEGATION];
  }
  if (operator === "SIN" || operator === "COS" || operator === "TAN") {
    arg =
      Blockly.JavaScript.valueToCode(
        block,
        "NUM",
        Blockly.JavaScript.ORDER_DIVISION
      ) || "0";
  } else {
    arg =
      Blockly.JavaScript.valueToCode(
        block,
        "NUM",
        Blockly.JavaScript.ORDER_NONE
      ) || "0";
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case "ABS":
      code = "Math.abs(" + arg + ")";
      break;
    case "ROOT":
      code = "Math.sqrt(" + arg + ")";
      break;
    case "LN":
      code = "Math.log(" + arg + ")";
      break;
    case "EXP":
      code = "Math.exp(" + arg + ")";
      break;
    case "POW10":
      code = "Math.pow(10," + arg + ")";
      break;
    case "ROUND":
      code = "Math.round(" + arg + ")";
      break;
    case "ROUNDUP":
      code = "Math.ceil(" + arg + ")";
      break;
    case "ROUNDDOWN":
      code = "Math.floor(" + arg + ")";
      break;
    case "SIN":
      code = "Math.sin(" + arg + " / 180 * Math.PI)";
      break;
    case "COS":
      code = "Math.cos(" + arg + " / 180 * Math.PI)";
      break;
    case "TAN":
      code = "Math.tan(" + arg + " / 180 * Math.PI)";
      break;
  }
  if (code) {
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case "LOG10":
      code = "Math.log(" + arg + ") / Math.log(10)";
      break;
    case "ASIN":
      code = "Math.asin(" + arg + ") / Math.PI * 180";
      break;
    case "ACOS":
      code = "Math.acos(" + arg + ") / Math.PI * 180";
      break;
    case "ATAN":
      code = "Math.atan(" + arg + ") / Math.PI * 180";
      break;
    default:
      throw Error("Unknown math operator: " + operator);
  }
  return [code, Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.JavaScript["type_tostring"] = function (block) {
  // String or array length.
  const text =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_MEMBER
    ) || "''";
  // note: toString() does not work for 100.toString()

  return ["'" + text + "'" + ".toString()", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript["type_toint"] = function (block) {
  // String or array length.
  const text =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_MEMBER
    ) || "''";
  return ["parseInt(" + text + ")", Blockly.JavaScript.ORDER_MEMBER];
};
