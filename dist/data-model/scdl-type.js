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
          defaultValue: ''
        },
        description: {
          ____type: "string",
          defaultValue: ''
        },
        tags: {
          ____type: "stringCSV",
          defaultValue: ''
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
