export var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "colour": "#5CB1D6",
        "name": "Input/Output",
        "contents": [
          
          {
            "kind": "block",
            "type": "text_print",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "Hello!"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "sensing_askandwait",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "What's your name?"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "sensing_answer",
          },
    
        ]
      },
      {
        "kind": "category",
        "colour": "#A55B80",
        "name": "Events",
        "contents": [
          {
            "kind": "block",
            "type": "event_whenflagclicked"
          },
        ]
      },
      {
        "kind": "category",
        "colour": "#FFAB19",
        "name": "Control",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "controls_ifelse"
          },
          {
            "kind": "block",
            "type": "controls_forever"
          },
          {
            "kind": "block",
            "type": "controls_repeat",
            "inputs": {
              "TIMES": {
            "shadow": {
              "type": "math_number_constraint",
              'name': 'num',
              
            }
          }}
          },
          {
            "kind": "block",
            "type": "controls_whileUntil"
          },
          
        ]
      },
      {
        "kind": "category",
        "colour": "#59C059",
        "name": "Operators",
        "contents": [
          {
            "kind": "block",
            "type": "math_add"
          },
          {
            "kind": "block",
            "type": "math_subtract"
          },
          {
            "kind": "block",
            "type": "math_multiply"
          },
          {
            "kind": "block",
            "type": "math_divide"
          },
          {
            "kind": "block",
            "type": "math_random"
          },
          {
            "kind": "block",
            "type": "logic_greater"
          },
          {
            "kind": "block",
            "type": "logic_less"
          },
          {
            "kind": "block",
            "type": "logic_equal"
          },
          {
            "kind": "block",
            "type": "logic_op_and"
          },
          {
            "kind": "block",
            "type": "logic_op_or"
          },
          {
            "kind": "block",
            "type": "logic_negate"
          },
          {
            "kind": "block",
            "type": "text_join"
          },
          {
            "kind": "block",
            "type": "text_charAt"
          },
          {
            "kind": "block",
            "type": "text_length"
          },
          {
            "kind": "block",
            "type": "text_count"
          },
          {
            "kind": "block",
            "type": "math_modulo"
          },
          {
            "kind": "block",
            "type": "math_round"
          },
          {
            "kind": "block",
            "type": "math_single"
          },
        ]
      },
      {
        "kind": "category",
        "colour": "#FF8C1A",
        "name": "Variables",
        "custom": "VARIABLE",
      },
    ]
  };