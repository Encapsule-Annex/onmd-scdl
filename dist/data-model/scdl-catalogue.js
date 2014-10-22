(function() {
  var common, util;

  util = require('onm').util;

  common = require('./scdl-common-properties');

  module.exports = {
    namespaceType: "component",
    jsonTag: "catalogue",
    ____label: "Catalogue",
    ____description: "SCDL Model Catalogue object.",
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
        author: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.people",
          fnCreate: function() {
            return util.uuidNull;
          }
        },
        organization: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
          fnCreate: function() {
            return util.uuidNull;
          }
        }
      }
    },
    subNamespaces: [
      {
        namespaceType: "extensionPoint",
        jsonTag: "specifications",
        ____label: "Specifications",
        ____description: "SCDL specification collection.",
        componentArchetype: require('./scdl-specification')
      }, {
        namespaceType: "child",
        jsonTag: "models",
        ____label: "Models",
        ____description: "SCDL model namespace.",
        subNamespaces: [
          {
            namespaceType: "extensionPoint",
            jsonTag: "systems",
            ____label: "Systems",
            ____description: "SCDL system model collection.",
            componentArchetype: require('./scdl-system')
          }, {
            namespaceType: "extensionPoint",
            jsonTag: "sockets",
            ____label: "Sockets",
            ____description: "SCDL socket model collection.",
            componentArchetype: require('./scdl-socket')
          }, {
            namespaceType: "extensionPoint",
            jsonTag: "contracts",
            ____label: "Contracts",
            ____description: "SCDL contract model collection.",
            componentArchetype: require('./scdl-contract')
          }, {
            namespaceType: "extensionPoint",
            jsonTag: "machines",
            ____label: "Machines",
            ____description: "SCDL machine model collection.",
            componentArchetype: require('./scdl-machine')
          }, {
            namespaceType: "extensionPoint",
            jsonTag: "types",
            ____label: "Types",
            ____description: "SCDL type model collection.",
            componentArchetype: require('./scdl-type')
          }
        ]
      }
    ]
  };

}).call(this);
