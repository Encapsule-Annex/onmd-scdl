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
      defaultValue: 0
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
      defaultValue: ""
    },
    description: {
      ____type: "string",
      defaultValue: ""
    },
    tags: {
      ____type: "stringCSV",
      defaultValue: ""
    },
    author: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.people",
      defaultValue: onmutil.uuidNull
    },
    organization: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
      defaultValue: onmutil.uuidNull
    },
    copyright: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.copyrights",
      defaultValue: onmutil.uuidNull
    },
    license: {
      ____type: "uuidSelection",
      ____selectionSource: "schema.catalogues.catalogue.assets.licenses",
      defaultValue: onmutil.uuidNull
    },
    platformBinding: {
      ____type: "uuid",
      ____optional: true,
      defaultValue: void 0
    }
  };

}).call(this);
