(function() {
  var common, onm, pins;

  onm = require('onm');

  common = require('./scdl-common-properties');

  pins = require('./scdl-pins');

  module.exports = {
    namespaceType: "component",
    jsonTag: "machine",
    ____label: "Machine",
    ____description: "SCDL machine model.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties,
      userMutable: common.MutableProperties
    },
    subNamespaces: [
      pins.InputPins, pins.OutputPins, {
        namespaceType: "extensionPoint",
        jsonTag: "states",
        ____label: "States",
        ____description: "SCDL state descriptors.",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "state",
          ____label: "State",
          ____description: "SCDL state descriptor.",
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
              },
              stateEnterExpression: {
                ____type: "string",
                fnCreate: function() {
                  return "";
                }
              },
              stateExitExpression: {
                ____type: "string",
                fnCreate: function() {
                  return "";
                }
              }
            }
          },
          subNamespaces: [
            {
              namespaceType: "extensionPoint",
              jsonTag: "transitions",
              ____label: "Transitions",
              ____description: "SCDL state transition descriptors.",
              componentArchetype: {
                namespaceType: "component",
                jsonTag: "transition",
                ____label: "Transition",
                ____description: "SCDL state transition descriptor.",
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
                    },
                    finalState: {
                      ____type: "uuidSelection",
                      ____selectionSource: "schema.catalogues.catalogue.models.machines.machine.states",
                      fnCreate: function() {
                        return onm.util.uuidNull;
                      }
                    },
                    vectorExpression: {
                      ____type: "string",
                      fnCreate: function() {
                        return "";
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      }
    ]
  };

}).call(this);
