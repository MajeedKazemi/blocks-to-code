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
import { ContinuousFlyout, ContinuousMetrics, ContinuousToolbox } from "@blockly/continuous-toolbox";
import * as Blockly from "blockly";

import { control } from "./control.js";
import { event } from "./event.js";
import { inputoutput } from "./inputoutput.js";
import { operator } from "./operator.js";
import { toolbox, helperToolbox } from "./toolbox.js";
import { variables } from "./variables.js";
import { text_print_block, sensing_askandwait_block } from "./blocks.js";

function simplifiedUpdateToolbox(workspace){
  // save all variables before resetting toolbox & workspace
  var all_variables = workspace.getAllVariables();

  // clear toolbox using blank, helper toolbox
  workspace.updateToolbox(helperToolbox);
  workspace.refreshToolboxSelection()
  
  // reload toolbox with (modified) toolbox
  workspace.updateToolbox(toolbox);
  workspace.refreshToolboxSelection();

  // save workspace, clear & reload
  var xml = Blockly.Xml.workspaceToDom(workspace);
  workspace.clear();
  Blockly.Xml.domToWorkspace(xml, workspace);

  // reload variables to toolbox
  for (var i=0; i<all_variables.length; i++){
    workspace.createVariable(all_variables[i].name,all_variables[i].type,all_variables[i].id )
  }
}

var customVariableCategory = function(workspace) {
  const variableModelList = workspace.getVariablesOfType('');

  const xmlList = [];
  if (variableModelList.length > 0) {
    // New variables are added to the end of the variableModelList.
    const mostRecentVariable = variableModelList[variableModelList.length - 1];
    if (Blockly.Blocks['variables_set']) {
      const block = Blockly.utils.xml.createElement('block');
      block.setAttribute('type', 'variables_set');
      block.setAttribute('gap', Blockly.Blocks['math_change'] ? 8 : 24);
      block.appendChild(Blockly.Variables.generateVariableFieldDom(mostRecentVariable));
      const value = Blockly.Xml.textToDom(
        '<value name="VALUE">' +
        '<shadow type="math_number">' +
        '<field name="NUM">0</field>' +
        '</shadow>' +
        '</value>');
    block.appendChild(value);
      xmlList.push(block);
    }
    if (Blockly.Blocks['math_change']) {
      const block = Blockly.utils.xml.createElement('block');
      block.setAttribute('type', 'math_change');
      block.setAttribute('gap', Blockly.Blocks['variables_get'] ? 20 : 8);
      block.appendChild(Blockly.Variables.generateVariableFieldDom(mostRecentVariable));
      const value = Blockly.Xml.textToDom(
          '<value name="DELTA">' +
          '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
          '</shadow>' +
          '</value>');
      block.appendChild(value);
      xmlList.push(block);
    }

    if (Blockly.Blocks['variables_get']) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      for (let i = 0, variable; (variable = variableModelList[i]); i++) {
        const block = Blockly.utils.xml.createElement('block');
        block.setAttribute('type', 'variables_get');
        block.setAttribute('gap', 8);
        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
        xmlList.push(block);
      }
    }
  }
  return xmlList;
}
Blockly.Variables.flyoutCategoryBlocks = customVariableCategory;

/**
 * @fileoverview Example of including Blockly with using Webpack with
 *               defaults: (English lang & JavaScript generator).
 * @author samelh@google.com (Sam El-Husseini)
 */


document.addEventListener("DOMContentLoaded", function () {
  const workspace = Blockly.inject("blockly-container", {
    plugins: {
      toolbox: ContinuousToolbox,
      flyoutsVerticalToolbox: ContinuousFlyout,
      metricsManager: ContinuousMetrics,
    },
    toolbox: toolbox,
    media: "media/",
    renderer: "zelos",
  });

  
  //workspace.addChangeListener(Blockly.Events.disableOrphans);

  workspace.createVariable("my variable");
  
  const lang = "JavaScript";

  document.getElementById("run-button").addEventListener("click", function () {
    const code = Blockly[lang].workspaceToCode(workspace);
    
    var code_arr = code.split('// when flag clicked, execute below');
    
    for (var i = 0; i < topBlocks.length; i++) {
      var topBlock = topBlocks[i];
      if (topBlock.type !== "event_whenflagclicked") {
        topBlock.setEnabled(false);
      }
    }
    if (code_arr.length==1) return;
    else {
      for (var i=1; i<code_arr.length; i++){
        // eval the code one by one
        eval("(async () => {" + code_arr[i] + "})()");
      }
    }
    
  });

  document.getElementById("clear-workspace-button").addEventListener("click", function () {
    workspace.clear()
  });

  document.getElementById("clear-console-button").addEventListener("click", function () {
    document.getElementById("console").textContent = "";
  });

  document.getElementById("print_upgrade").addEventListener('change', () => {
    if (document.getElementById("print_upgrade").checked){
      // upgrade
      var new_definition = {
        "type": 'text_print',
        "colour": "#5CB1D6",
        'message0': "print %1",
        'args0': [
          {
            'type': 'input_value',
            'name': 'TEXT',
          },
        ],
        'previousStatement': null,
        'nextStatement': null,
        'tooltip': '%{BKY_TEXT_PRINT_TOOLTIP',
        'helpUrl': '%{BKY_TEXT_PRINT_HELPURL',
      };
      var new_generator = text_print_block.getBlockGenerator()
      text_print_block.upgrade(new_definition, new_generator);
      Blockly.defineBlocksWithJsonArray([new_definition])
    }
    else {
      // original
      var original_definition = text_print_block.getBlockDefinition(1);
      var original_generator = text_print_block.getBlockGenerator(1);
      Blockly.defineBlocksWithJsonArray([original_definition]);
    }
    simplifiedUpdateToolbox(workspace);
  });

  document.getElementById("input_upgrade").addEventListener('change', () => {
    if (document.getElementById("input_upgrade").checked){
      // upgrade
      var new_definition = {
        "type": "sensing_askandwait",
        "colour": "#5CB1D6",
        "message0": "input %1",
        "args0": [
          {
            "type": "input_value",
            "name": "TEXT",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
      };
      var new_generator = sensing_askandwait_block.getBlockGenerator()
      sensing_askandwait_block.upgrade(new_definition, new_generator);
      Blockly.defineBlocksWithJsonArray([new_definition])
    }
    else {
      // original
      var original_definition = sensing_askandwait_block.getBlockDefinition(1);
      var original_generator = sensing_askandwait_block.getBlockGenerator(1);
      Blockly.defineBlocksWithJsonArray([original_definition]);
    }
    simplifiedUpdateToolbox(workspace);
  });


});

Blockly.defineBlocksWithJsonArray(control);
Blockly.defineBlocksWithJsonArray(variables);
Blockly.defineBlocksWithJsonArray(inputoutput);
Blockly.defineBlocksWithJsonArray(operator);
Blockly.defineBlocksWithJsonArray(event);




/**
 * the getValueFromUserInput() function is called within the `sensing_askandwait` block
 * it will return the value from the user-input asyncronously
 */
async function getValueFromUserInput() {
  let waitForPressResolve;

  function waitForPress() {
    return new Promise((resolve) => (waitForPressResolve = resolve));
  }

  function btnResolver() {
    if (waitForPressResolve) waitForPressResolve();
  }

  let btn = document.getElementById("user-input-form");
  btn.addEventListener("submit", (e) => {
    btnResolver();
    e.preventDefault();
  });

  await waitForPress();

  const inputEl = document.getElementById("user-input");

  return inputEl.value;
}
