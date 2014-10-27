(function() {
  var common, onm;

  onm = require('onm');

  common = require('./scdl-common-properties');

  module.exports = {
    namespaceType: "component",
    jsonTag: "type",
    ____label: "Type",
    ____description: "SCDL type model.",
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
        platformBinding: {
          ____type: "uuid",
          fnCreate: function() {
            return onm.util.uuidNull;
          }
        }
      }
    }
  };

}).call(this);
