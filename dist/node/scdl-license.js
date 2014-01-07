(function() {
  var common;

  common = require('./scdl-common-properties');

  module.exports = {
    namespaceType: "component",
    jsonTag: "license",
    ____label: "License",
    ____description: "SCDL license model.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties
    }
  };

}).call(this);
