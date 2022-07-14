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
import {
  ContinuousFlyout,
  ContinuousMetrics,
  ContinuousToolbox,
} from "@blockly/continuous-toolbox";
import * as Blockly from "blockly";

import { control } from "./control.js";
import { event } from "./event.js";
import { inputoutput } from "./inputoutput.js";
import { operator } from "./operator.js";
import { toolbox, helperToolbox } from "./toolbox.js";
import { variables } from "./variables.js";
import {
  text_print_block,
  sensing_askandwait_block,
  controls_whileUntil_block,
} from "./blocks.js";

function simplifiedUpdateToolbox(workspace) {
  // helper function to refresh toolbox and workspace

  // save all variables before resetting toolbox & workspace
  var all_variables = workspace.getAllVariables();

  // clear toolbox using blank, helper toolbox
  workspace.updateToolbox(helperToolbox);
  workspace.refreshToolboxSelection();

  // reload toolbox with (modified) toolbox
  workspace.updateToolbox(toolbox);
  workspace.refreshToolboxSelection();

  // save workspace, clear & reload
  var xml = Blockly.Xml.workspaceToDom(workspace);
  workspace.clear();
  Blockly.Xml.domToWorkspace(xml, workspace);

  // reload variables to toolbox
  for (var i = 0; i < all_variables.length; i++) {
    workspace.createVariable(
      all_variables[i].name,
      all_variables[i].type,
      all_variables[i].id
    );
  }
}

function addLoopCounter(code) {
  // helper function to add a counter variable at start of the code
  // this counter is used to break infinite loops

  // add counter called hidden_loop_counter
  var new_code = "var hidden_loop_counter = 0;\n" + code;

  // code to output an Overflow message
  var output_code = `
  var divConsole = document.getElementById("console");
  var content = document.createTextNode('Overflow: Too many lines to execute!');
  divConsole.appendChild(content);
  divConsole.innerHTML += '<br>';`;

  // code to append to loop statements
  // if counter reaches a MAX, break the loop by return
  var replacement_code =
    "if (hidden_loop_counter==100) {" +
    output_code +
    "return;}; hidden_loop_counter+=1; ";

  // the code above is added at the '// in_loop' marker
  // this marker is set in the generator code of all types of loops
  new_code = new_code.replaceAll("// in_loop", replacement_code);

  // return code that contains protection from infinite loop
  return new_code;
}

// basic scratch blocks in the toolbox are defined statically, in toolbox.js
// the variable category is defined dynamically, as variables can be added during runtime
// the code below implements the dynamic filling of the variable category
var customVariableCategory = function (workspace) {
  // get all variables
  const variableModelList = workspace.getVariablesOfType("");

  // init xml
  const xmlList = [];

  if (variableModelList.length > 0) {
    // New variables are added to the end of the variableModelList.
    const mostRecentVariable = variableModelList[variableModelList.length - 1];

    if (Blockly.Blocks["variables_set"]) {
      const block = Blockly.utils.xml.createElement("block");
      block.setAttribute("type", "variables_set");
      block.setAttribute("gap", Blockly.Blocks["math_change"] ? 8 : 24);
      block.appendChild(
        Blockly.Variables.generateVariableFieldDom(mostRecentVariable)
      );
      const value = Blockly.Xml.textToDom(
        '<value name="VALUE">' +
          '<shadow type="math_number">' +
          '<field name="NUM">0</field>' +
          "</shadow>" +
          "</value>"
      );
      block.appendChild(value);
      xmlList.push(block);
    }
    if (Blockly.Blocks["math_change"]) {
      const block = Blockly.utils.xml.createElement("block");
      block.setAttribute("type", "math_change");
      block.setAttribute("gap", Blockly.Blocks["variables_get"] ? 20 : 8);
      block.appendChild(
        Blockly.Variables.generateVariableFieldDom(mostRecentVariable)
      );
      const value = Blockly.Xml.textToDom(
        '<value name="DELTA">' +
          '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
          "</shadow>" +
          "</value>"
      );
      block.appendChild(value);
      xmlList.push(block);
    }
    if (Blockly.Blocks["variables_get"]) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      for (let i = 0, variable; (variable = variableModelList[i]); i++) {
        const block = Blockly.utils.xml.createElement("block");
        block.setAttribute("type", "variables_get");
        block.setAttribute("gap", 8);
        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
        xmlList.push(block);
      }
    }
  }
  return xmlList;
};

// build variable category
Blockly.Variables.flyoutCategoryBlocks = customVariableCategory;

// ---------- MAIN FUNCTION: DOM LOADED EVENT ----------
document.addEventListener("DOMContentLoaded", function () {
  // inject blockly
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

  // create one initial variable (as scratch does)
  workspace.createVariable("my variable");

  // generator language set to JavaScript
  const lang = "JavaScript";

  // ---------- FLAG/RUN BUTTON CLICKED EVENT ----------
  document.getElementById("run-button").addEventListener("click", function () {
    // convert workspace blocks to code
    const code = Blockly[lang].workspaceToCode(workspace);
    var json = Blockly.serialization.workspaces.save(workspace);

    // Store top blocks separately, and remove them from the JSON.
    var blocks = json["blocks"]["blocks"];
    var topBlocks = blocks.slice(); // Create shallow copy.
    blocks.length = 0;

    // Load each block into the workspace individually and generate code.
    var allCode = [];
    var headless = new Blockly.Workspace();

    // loop thru topBlocks to check if it is 'event_whenflagclicked'
    // ignore blocks that do not start with the 'event_whenflagclicked' block
    for (var i = 0; i < topBlocks.length; i++) {
      if (topBlocks[i].type != "event_whenflagclicked") continue;
      var block = topBlocks[i];
      blocks.push(block);
      Blockly.serialization.workspaces.load(json, headless);
      allCode.push(Blockly.JavaScript.workspaceToCode(headless));
      blocks.length = 0;
    }

    // parallel execution of blocks that start with the 'event_whenflagclicked' block
    for (var i = 0; i < allCode.length; i++) {
      // add infinite loop protection to make the code "clean"
      var clean_code = addLoopCounter(allCode[i]);

      // hide the user-input-form after execution
      clean_code +=
        'document.getElementById("user-input-form").style.visibility = "hidden";';

      // log the code that is run
      console.log(clean_code);

      // run the code
      eval("(async () => {" + clean_code + "})()");
    }

    // ensure that the console-div is always showing the latest output
    document.getElementById("console").scrollTop =
      document.getElementById("console").scrollHeight;
  });

  // clear workspace button
  document
    .getElementById("clear-workspace-button")
    .addEventListener("click", function () {
      workspace.clear();
    });

  // clear console button
  document
    .getElementById("clear-console-button")
    .addEventListener("click", function () {
      document.getElementById("console").textContent = "";
    });

  // -------------------- BELOW ARE EXPERIMENTAL FEATURES --------------------

  // print upgrade
  document.getElementById("print_upgrade").addEventListener("change", () => {
    if (document.getElementById("print_upgrade").checked) {
      // run the upgrade method of the object/class
      text_print_block.upgrade();

      // actually execute the definition change
      Blockly.defineBlocksWithJsonArray([
        text_print_block.getBlockDefinition(),
      ]);

      // actually execute the generator change
      Blockly.JavaScript["text_print"] = text_print_block.getBlockGenerator(); // happens to be the same
    } else {
      // run the downgrade method of the object/class
      text_print_block.downgrade(text_print_block.version - 1);

      // actually execute the definition change
      Blockly.defineBlocksWithJsonArray([
        text_print_block.getBlockDefinition(),
      ]);

      // actually execute the generator change
      Blockly.JavaScript["text_print"] = text_print_block.getBlockGenerator(); // happens to be the same
    }

    // update toolbox & workspace
    simplifiedUpdateToolbox(workspace);
  });

  // input upgrade
  // I managed to make it work, but it's too messy.
  // Don't bother reading it

  document.getElementById("input_upgrade").addEventListener("change", () => {
    if (document.getElementById("input_upgrade").checked) {
      // upgrade

      const list_of_sensing_blocks =
        workspace.getBlocksByType("sensing_askandwait");
      if (list_of_sensing_blocks.length == 0) {
        sensing_askandwait_block.upgrade();
        Blockly.defineBlocksWithJsonArray([
          sensing_askandwait_block.getBlockDefinition(),
        ]);
        Blockly.JavaScript["sensing_askandwait"] =
          sensing_askandwait_block.getBlockGenerator();
        toolbox.contents[0].contents.splice(2, 1);
      } else {
        var thisBlock = [];
        var question = [];
        var fixBlock = [];
        for (var i = 0; i < list_of_sensing_blocks.length; i++) {
          thisBlock.push(list_of_sensing_blocks[i]);
          var a_question =
            Blockly.JavaScript.valueToCode(
              thisBlock[i],
              "TEXT",
              Blockly.JavaScript.ORDER_NONE
            ) || "What's your name?";
          a_question = a_question.replaceAll("\\", "");
          a_question = a_question.slice(1, -1);
          question.push(a_question);
          // This is where the fix_it_statement block is used
          fixBlock.push(workspace.newBlock("fix_it_statement"));
        }

        sensing_askandwait_block.upgrade();
        Blockly.defineBlocksWithJsonArray([
          sensing_askandwait_block.getBlockDefinition(),
        ]);
        Blockly.JavaScript["sensing_askandwait"] =
          sensing_askandwait_block.getBlockGenerator();

        toolbox.contents[0].contents.splice(2, 1);
        for (var i = 0; i < list_of_sensing_blocks.length; i++) {
          var a_newInputBlock = workspace.newBlock("sensing_askandwait");
          a_newInputBlock.initSvg();
          a_newInputBlock.render();

          var a_newText = workspace.newBlock("text");
          a_newText.setFieldValue(question[i], "TEXT");
          a_newText.initSvg();
          a_newText.render();
          a_newText.outputConnection.connect(
            a_newInputBlock.getInput("TEXT").connection
          );
          a_newInputBlock.outputConnection.connect(
            fixBlock[i].getInput("TEXT").connection
          );

          fixBlock[i].initSvg();
          fixBlock[i].render();

          if (thisBlock[i].getPreviousBlock()) {
            thisBlock[i]
              .getPreviousBlock()
              .nextConnection.connect(fixBlock[i].previousConnection);
          }
          if (thisBlock[i].getNextBlock()) {
            thisBlock[i]
              .getNextBlock()
              .previousConnection.connect(fixBlock[i].nextConnection);
          }
          thisBlock[i].dispose(false);
        }
      }
      const list_of_answer_blocks = workspace.getBlocksByType("sensing_answer");
      for (var i = 0; i < list_of_answer_blocks.length; i++) {
        list_of_answer_blocks[i].dispose(false);
      }
      simplifiedUpdateToolbox(workspace);
    } else {
      // original
      alert("Please don't attempt to uncheck this... It's too much work!");
      document.getElementById("input_upgrade").checked = true;
    }
  });

  // while upgrade
  document.getElementById("while_upgrade").addEventListener("change", () => {
    if (document.getElementById("while_upgrade").checked) {
      const list_of_while_blocks = workspace.getBlocksByType(
        "controls_whileUntil"
      );

      controls_whileUntil_block.upgrade();
      Blockly.defineBlocksWithJsonArray([
        controls_whileUntil_block.getBlockDefinition(),
      ]);
      Blockly.JavaScript["controls_whileUntil"] =
        controls_whileUntil_block.getBlockGenerator();
      for (var i = 0; i < list_of_while_blocks.length; i++) {
        var while_block = list_of_while_blocks[i];
        // This is where the fix_it_boolean block is used
        var fixBlock = workspace.newBlock("fix_it_boolean");
        while_block
          .getInput("BOOL")
          .connection.connect(fixBlock.outputConnection);
      }
      simplifiedUpdateToolbox(workspace);
    } else {
      // original
      alert("Please don't attempt to uncheck this... It's too much work!");
      document.getElementById("while_upgrade").checked = true;
    }
  });

  document.getElementById("ifelseif_upgrade").addEventListener("change", () => {
    var block = { kind: "block", type: "controls_ifelseif", enabled: true };
    if (document.getElementById("ifelseif_upgrade").checked) {
      // add
      toolbox.contents[2].contents.splice(2, 0, block);
    } else {
      // remove
      toolbox.contents[2].contents.splice(2, 1);
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
