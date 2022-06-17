/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Example of including Blockly with using Webpack with 
 *               defaults: (English lang & JavaScript generator).
 * @author samelh@google.com (Sam El-Husseini)
 */

import * as Blockly from 'blockly';
import {loops} from './loops.js';
import {logic} from './logic.js';
import {controls} from './controls.js';
import {variables} from './variables.js';
import {inputoutput} from './inputoutput.js';
import {math} from './math.js';
import {event} from './event.js';

document.addEventListener("DOMContentLoaded", function () {
    var toolbox = {
        "kind": "categoryToolbox",
        "contents": [
          {
            "kind": "category",
            "name": "Control",
            "contents": [
              {
                "kind": "block",
                "type": "controls_if"
              },
            ]
          },
          {
            "kind": "category",
            "name": "Logic",
            "contents": [
              {
                "kind": "block",
                "type": "logic_compare"
              },
              {
                "kind": "block",
                "type": "logic_operation"
              },
              {
                "kind": "block",
                "type": "logic_boolean"
              }
            ]
          }
        ]
      };

      var toolbox = `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">

        <category name="Input/Output">
            <block type="text"></block>
            <block type="text_print"></block>
            <block type="sensing_askandwait">
                <value name="TEXT">
                    <shadow type="text">
                      <field name="TEXT">What's your name?</field>
                    </shadow>
                  </value>
            </block>
            <block type="sensing_answer"></block>
            <block type="text_prompt_ext"></block>


        </category>
        <category name="Events">
            <block type="event_whenflagclicked"></block>

        </category>

        <category name="Control">
            <block type="controls_if"></block>
            <block type="controls_ifelse"></block>
            <block type="controls_forever"></block>
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>

        </category>

        
        
   
        <category name="Operators">
            <block type="math_number"></block>
            <block type="math_add"></block>
            <block type="math_subtract"></block>
            <block type="math_arithmetic"></block>
            <block type="logic_greater"></block>
            <block type="logic_less"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="text_length"></block>
            <block type="text_charAt">
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR">text</field>
                    </block>
                </value>
            </block>  
            
        </category>

        <category name="Variables">
            <block type="variables_set"></block>
            <block type="variables_get"></block>
            
        </category>
    </xml>
      `
      
      
    const workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: toolbox,
            //toolbox: document.getElementById('toolbox'),
            media: 'media/',
            renderer: 'zelos'
        });

    const lang = 'JavaScript';
    const button = document.getElementById('blocklyButton');
    button.addEventListener('click', function () {
        alert("Check the console for the generated output.");
        const code = Blockly[lang].workspaceToCode(workspace);
        console.log(code);
        const F = new Function(code);
        F();
    })
});



Blockly.defineBlocksWithJsonArray(loops)
Blockly.defineBlocksWithJsonArray(logic)
Blockly.defineBlocksWithJsonArray(controls)
Blockly.defineBlocksWithJsonArray(variables)
Blockly.defineBlocksWithJsonArray(inputoutput)
Blockly.defineBlocksWithJsonArray(math)
Blockly.defineBlocksWithJsonArray(event)
