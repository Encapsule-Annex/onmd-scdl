(function() {
  var onm, uuid;

  onm = require('onm');

  uuid = require('node-uuid');

  module.exports = {
    update: function(dataReference_) {
      if (dataReference_.revision != null) {
        dataReference_.revision++;
      }
      if (dataReference_.updateTime != null) {
        dataReference_.updateTime = onm.util.getEpochTime();
      }
      if (dataReference_.uuidRevision != null) {
        dataReference_.uuidRevision = uuid.v4();
      }
      return true;
    },
    getLabel: function(dataReference_, address_) {
      var label, model;
      model = address_.getModel();
      label = ((dataReference_["name"] != null) && dataReference_["name"]) || ((dataReference_["uuid"] != null) && dataReference_["uuid"] && ("" + model.____label + " " + dataReference_["uuid"])) || model.____label;
      return label;
    },
    setUniqueKey: function(dataReference_) {
      return dataReference_.uuid = uuid.v4();
    },
    getUniqueKey: function(dataReference_) {
      var key;
      key = (dataReference_["uuid"] != null) && dataReference_["uuid"] || void 0;
      return key;
    }
  };

}).call(this);
