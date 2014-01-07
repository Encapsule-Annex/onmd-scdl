(function() {
  var onmutil, uuid;

  uuid = require('node-uuid');

  onmutil = require('onm').util;

  module.exports.ImmutableProperties = {
    uuid: {
      ____type: "uuid",
      fnCreate: function() {
        return uuid.v4();
      }
    },
    uuidRevision: {
      ____type: "uuid",
      fnCreate: function() {
        return uuid.v4();
      }
    },
    revision: {
      ____type: "revision",
      fnCreate: function() {
        return 0;
      }
    },
    createTime: {
      ____type: "epochTime",
      fnCreate: function() {
        return onmutil.getEpochTime();
      }
    },
    updateTime: {
      ____type: "epochTime",
      fnCreate: function() {
        return onmutil.getEpochTime();
      }
    }
  };

  module.exports.MutableProperties = {
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
        return onmutil.uuidNull;
      }
    },
    organization: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
      fnCreate: function() {
        return onmutil.uuidNull;
      }
    },
    copyright: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.copyrights",
      fnCreate: function() {
        return onmutil.uuidNull;
      }
    },
    license: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.licenses",
      fnCreate: function() {
        return onmutil.uuidNull;
      }
    },
    platformBinding: {
      ____type: "uuid",
      ____optional: true,
      fnCreate: function() {
        return void 0;
      }
    }
  };

}).call(this);
