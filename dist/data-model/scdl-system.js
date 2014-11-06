(function() {
  var commonProperties, onm, pins;

  onm = require('onm');

  commonProperties = require('./scdl-common-properties');

  pins = require('./scdl-pins');

  module.exports = {
    namespaceType: "component",
    jsonTag: "system",
    ____label: "System",
    ____description: "SCDL system model.",
    namespaceProperties: {
      userImmutable: commonProperties.ImmutableProperties,
      userMutable: commonProperties.MutableProperties
    },
    subNamespaces: [
      pins.InputPins, pins.OutputPins, {
        namespaceType: "extensionPoint",
        jsonTag: "subsystems",
        ____label: "System Instances",
        ____description: "Contained SCDL system model instances.",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "subsystem",
          ____label: "System Instance",
          ____description: "Contained SCDL system instance.",
          namespaceProperties: {
            userImmutable: commonProperties.ImmutableProperties,
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
              systemUuid: {
                ____type: "uuidSelection",
                ____selectionSource: "schema.catalogues.catalogue.models.systems",
                fnCreate: function() {
                  return onm.util.uuidNull;
                }
              }
            }
          }
        }
      }, {
        namespaceType: "extensionPoint",
        jsonTag: "submachines",
        ____label: "Machine Instances",
        ____description: "Contained SCDL machine model instances.",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "submachine",
          ____label: "Machine Instance",
          ____description: "SCDL machine instance.",
          namespaceProperties: {
            userImmutable: commonProperties.ImmutableProperties,
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
              machineUuid: {
                ____type: "uuidSelection",
                ____selectionSource: "schema.catalogues.catalogue.models.systems",
                fnCreate: function() {
                  return onm.util.uuidNull;
                }
              }
            }
          }
        }
      }, {
        namespaceType: "extensionPoint",
        jsonTag: "subsockets",
        ____label: "Socket Instances",
        ____description: "Contained SCDL socket model instances.",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "subsocket",
          ____label: "Socket Instance",
          ____description: "SCDL socket instance.",
          namespaceProperties: {
            userImmutable: commonProperties.ImmutableProperties,
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
              socketUuid: {
                ____type: "uuidSelection",
                ____selectionSource: "schema.catalogues.catalogue.models.systems",
                fnCreate: function() {
                  return onm.util.uuid;
                }
              }
            }
          }
        }
      }, require('./scdl-nodes').Nodes
    ]
  };

}).call(this);
