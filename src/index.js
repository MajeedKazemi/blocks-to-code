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
import {toolbox} from './toolbox.js';
import {loops} from './loops.js';
import {logic} from './logic.js';
import {controls} from './controls.js';
import {variables} from './variables.js';
import {inputoutput} from './inputoutput.js';
import {math} from './math.js';
import {event} from './event.js';
import {ContinuousToolbox, ContinuousFlyout, ContinuousMetrics} from '@blockly/continuous-toolbox';


Blockly.Msg.MATH_MODULO_TITLE = "%1 mod %2"
Blockly.Msg.TEXT_PRINT_TITLE = "say %1"

document.addEventListener("DOMContentLoaded", function () {
      
    const workspace = Blockly.inject('blocklyDiv',
        {
            plugins: {
              'toolbox': ContinuousToolbox,
              'flyoutsVerticalToolbox': ContinuousFlyout,
              'metricsManager': ContinuousMetrics,
            },
            toolbox: toolbox,
            media: 'media/',
            renderer: 'zelos'
        });
    
    workspace.createVariable("my variable")

    const lang = 'JavaScript';
    const button = document.getElementById('blocklyButton');
    button.addEventListener('click', function () {
        //alert("Check the console for the generated output.");
        const code = Blockly[lang].workspaceToCode(workspace);
        const divCode = document.getElementById('code');
        const divConsole = document.getElementById('console');
        console.log(code);
        divCode.textContent = code;
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
