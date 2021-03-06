import * as Blockly from "blockly";

export var event = [
  {
    type: "event_whenflagclicked",

    message0: "when %1 clicked",
    args0: [
      {
        type: "field_image",
        src: "../media/green-flag.svg",
        width: 24,
        height: 24,
        alt: "flag",
      },
    ],
    style: "hat_blocks",
    //style: {
    //  hat: "cap",
    //},
    //colour: "#FFBF00",
    nextStatement: null,
  },
];

Blockly.JavaScript["event_whenflagclicked"] = function (block) {
  return "// when flag clicked, execute below \n";
};
