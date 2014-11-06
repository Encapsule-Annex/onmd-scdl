(function() {
  var onmutil, uuid;

  uuid = require('node-uuid');

  onmutil = require('onm').util;

  module.exports = {
    ImmutableProperties: {
      uuid: {
        ____type: "uuid",
        defaultValue: void 0
      },
      uuidRevision: {
        ____type: "uuid",
        defaultValue: void 0
      },
      revision: {
        ____type: "revision",
        defaultValue: 0
      },
      createTime: {
        ____type: "epochTime",
        defaultValue: 0
      },
      updateTime: {
        ____type: "epochTime",
        defaultValue: 0
      }
    },
    MutableProperties: {
      name: {
        ____type: "string",
        defaultValue: ""
      },
      description: {
        ____type: "string",
        defaultValue: ""
      },
      platformBinding: {
        ____type: "uuid",
        ____optional: true,
        defaultValue: void 0
      },
      tags: {
        ____type: "stringCSV",
        defaultValue: ""
      }
    }
  };

}).call(this);
