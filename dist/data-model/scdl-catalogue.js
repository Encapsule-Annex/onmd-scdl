(function() {
  var util;

  util = require('onm').util;

  module.exports = {
    namespaceType: "component",
    jsonTag: "catalogue",
    ____label: "Catalogue",
    ____description: "SCDL Model Catalogue object.",
    namespaceProperties: {
      userImmutable: require('./scdl-common-properties'),
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
      }, {
        namespaceType: "child",
        jsonTag: "resources",
        ____label: "Resources",
        ____description: "SCDL common resource namespace.",
        subNamespaces: [
          {
            namespaceType: "child",
            jsonTag: "attribution",
            ____label: "Attribution",
            ____description: "Shared attribution namespace.",
            subNamespaces: [
              {
                namespaceType: "extensionPoint",
                jsonTag: "people",
                ____label: "People",
                ____description: "SCDL person models.",
                componentArchetype: require('./scdl-person')
              }, {
                namespaceType: "extensionPoint",
                jsonTag: "organizations",
                ____label: "Organizations",
                ____description: "SCDL organization models.",
                componentArchetype: require('./scdl-organization')
              }, {
                namespaceType: "extensionPoint",
                jsonTag: "licenses",
                ____label: "Licenses",
                ____description: "SCDL license models.",
                componentArchetype: require('./scdl-license')
              }, {
                namespaceType: "extensionPoint",
                jsonTag: "copyrights",
                ____label: "Copyrights",
                ____description: "SCDL copyright models.",
                componentArchetype: require('./scdl-copyright')
              }
            ]
          }
        ]
      }
    ]
  };

}).call(this);
