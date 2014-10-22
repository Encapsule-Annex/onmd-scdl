(function() {
  var onmutil, uuid;

  uuid = require('node-uuid');

  onmutil = require('onm').util;

  module.exports = {
    ImmutableProperties: {
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
