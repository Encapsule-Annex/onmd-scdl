(function() {
  var Node, common, pins;

  common = require('./scdl-common-properties');

  pins = require('./scdl-pins');

  Node = {
    namespaceType: "component",
    jsonTag: "node",
    ____label: "Node",
    ____description: "SCDL node object.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties,
      userMutable: {
        name: {
          ____type: "string",
          fnCreate: function() {
            return "";
          }
        },
        description: {
          ____type: "string",
          fnCreate: function() {
            return "";
          }
        },
        tags: {
          ____type: "stringCSV",
          fnCreate: function() {
            return "";
          }
        }
      }
    },
    subNamespaces: [pins.OutputPinChild, pins.InputPins]
  };

  module.exports.Node = Node;

  module.exports.Nodes = {
    namespaceType: "extensionPoint",
    jsonTag: "nodes",
    ____label: "Nodes",
    ____description: "SCDL node descriptor instances.",
    componentArchetype: Node
  };

}).call(this);
