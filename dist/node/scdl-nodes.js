(function() {
  var Node, common, onmutil;

  onmutil = require('onm').util;

  common = require('./scdl-common-properties');

  Node = {
    namespaceType: "component",
    jsonTag: "node",
    ____label: "Node",
    ____description: "SCDL node object.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties
    },
    subNamespaces: [
      {
        namespaceType: "child",
        jsonTag: "outputPinInstance",
        ____label: "Output Pin Instance",
        ____description: "Output pin instance identifier pair.",
        namespaceProperties: {
          userMutable: {
            systemInstanceUuid: {
              ____type: "uuid",
              defaultValue: onmutil.uuidNull
            },
            pinInstanceUuid: {
              ____type: "uuid",
              defaultValue: onmutil.uuidNull
            }
          }
        }
      }, {
        namespaceType: "extensionPoint",
        jsonTag: "inputPinInstances",
        ____label: "Input Pin Instances",
        ____description: "Input pin instances collection",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "inputPinInstance",
          ____label: "Input Pin Instance",
          ____description: "Input pin instance identifier pair.",
          namespaceProperties: {
            userMutable: {
              systemInstanceUuid: {
                ____type: "uuid",
                defaultValue: onmutil.uuidNull
              },
              pinInstanceUuid: {
                ____type: "uuid",
                defaultValue: onmutil.uuidNull
              }
            }
          }
        }
      }
    ]
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
