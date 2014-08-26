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
        jsonTag: "sourcePinInstance",
        ____label: "Source Pin Instance",
        ____description: "Source pin instance identifier pair.",
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
        jsonTag: "sinkPinInstances",
        ____label: "Sink Pin Instances",
        ____description: "Sink pin instances collection",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "sinkPinInstance",
          ____label: "Sink Pin Instance",
          ____description: "Sink pin instance identifier pair.",
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
