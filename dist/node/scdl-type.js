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
        author: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.people",
          fnCreate: function() {
            return onm.util.uuidNull;
          }
        },
        organization: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
          fnCreate: function() {
            return onm.util.uuidNull;
          }
        },
        copyright: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.copyrights",
          fnCreate: function() {
            return onm.util.uuidNull;
          }
        },
        license: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.licenses",
          fnCreate: function() {
            return onm.util.uuidNull;
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
