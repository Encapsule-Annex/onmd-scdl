(function() {
  var common;

  common = require('./scdl-common-properties');

  module.exports = {
    namespaceType: "component",
    jsonTag: "contract",
    ____label: "Contract",
    ____description: "SCDL contract model.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties,
      userMutable: common.MutableProperties
    },
    subNamespaces: [
      {
        namespaceType: "child",
        jsonTag: "socketReference",
        ____label: "Socket Reference",
        ____description: "SCDL socket reference."
      }, {
        namespaceType: "child",
        jsonTag: "modelReference",
        ____label: "Model Reference",
        ____description: "SCDL model reference."
      }, require('./scdl-nodes').Nodes
    ]
  };

}).call(this);
