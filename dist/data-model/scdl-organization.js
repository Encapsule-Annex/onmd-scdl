(function() {
  var common;

  common = require('./scdl-common-properties');

  module.exports = {
    namespaceType: "component",
    jsonTag: "person",
    ____label: "Person",
    ____description: "SCDL person object.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties
    }
  };

}).call(this);
