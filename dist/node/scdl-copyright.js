(function() {
  var common;

  common = require('./scdl-common-properties');

  module.exports = {
    namespaceType: "component",
    jsonTag: "copyright",
    ____label: "Copyright",
    ____description: "SCDL copyright model.",
    namespaceProperties: {
      userImmutable: common.ImmutableProperties
    }
  };

}).call(this);
