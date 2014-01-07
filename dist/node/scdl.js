(function() {
  var onm, uuid;

  onm = require('onm');

  uuid = require('node-uuid');

  module.exports = {
    namespaceType: "root",
    jsonTag: "scdl",
    ____label: "SCDL",
    ____description: "SCDL model and specification data object.",
    semanticBindings: require('./scdl-semantic-bindings'),
    subNamespaces: [
      {
        namespaceType: "child",
        jsonTag: "client",
        ____label: "Client",
        ____description: "Client child namespace.",
        namespaceProperties: {
          userImmutable: {
            clientDeployment: {
              ____type: "uuid",
              fnCreate: function() {
                return uuid.v4();
              }
            },
            localSession: {
              ____type: "object",
              fnCreate: function() {
                return {
                  uuid: uuid.v4(),
                  timeStart: onm.util.getEpochTime()
                };
              }
            }
          }
        },
        subNamespaces: [
          {
            namespaceType: "extensionPoint",
            jsonTag: "catalogues",
            ____label: "Catalogues",
            ____description: "SCDL catalogue object collection.",
            componentArchetype: require('./scdl-catalogue')
          }
        ]
      }
    ]
  };

}).call(this);
