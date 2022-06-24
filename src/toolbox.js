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
          {
            "kind": "block",
            "type": "controls_break"
          }
          
        ]
      },
      {
        "kind": "category",
        "colour": "#59C059",
        "name": "Operators",
        "contents": [
          {
            "kind": "block",
            "type": "math_add",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "math_subtract",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "math_multiply",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "math_divide",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "math_random",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "logic_greater",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "logic_less",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "logic_equal",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
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
            "type": "text_join",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "apple"
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "banana"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "text_charAt",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number_constraint",
                  "fields": {
                    "NUM": "1"
                  }
                  
                }
              },
              "B": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "apple"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "text_length",
            "inputs": {
              "VALUE": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "apple"
                  }
                  
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_count",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "apple"
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "a"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "math_modulo",
            "inputs": {
              "DIVIDEND": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              "DIVISOR": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "math_round",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              
            }
          },
          {
            "kind": "block",
            "type": "math_single",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": ""
                  }
                }
              },
              
            }
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