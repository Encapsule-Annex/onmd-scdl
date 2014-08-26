(function() {
  var onm, uuid;

  onm = require('onm');

  uuid = require('node-uuid');

  module.exports = {
    update: function(dataReference_) {
      /*jshint eqnull: true*/

      if (dataReference_.revision != null) {
        dataReference_.revision++;
      }
      if ((dataReference_.updateTime != null) && dataReference_.updateTime) {
        dataReference_.updateTime = onm.util.getEpochTime();
      }
      if ((dataReference_.uuidRevision != null) && dataReference_.uuidRevision) {
        dataReference_.uuidRevision = uuid.v4();
      }
      return true;
    },
    getLabel: function(dataReference_, address_) {
      var label, model;
      model = address_.getModel();
      /*jshint eqnull: true*/

      label = ((dataReference_.name != null) && dataReference_.name) || ((dataReference_.uuid != null) && dataReference_.uuid && ("" + model.____label + " " + dataReference_.uuid)) || model.____label;
      return label;
    },
    setUniqueKey: function(dataReference_) {
      /*jshint eqnull: true*/

      if (!((dataReference_.uuid != null) && dataReference_.uuid)) {
        dataReference_.uuid = uuid.v4();
      }
      return dataReference_.uuid;
    },
    getUniqueKey: function(dataReference_) {
      /*jshint eqnull: true*/

      return (dataReference_.uuid != null) && dataReference_.uuid || void 0;
    }
  };

}).call(this);
