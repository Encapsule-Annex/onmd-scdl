(function() {
  var SCDLInputPinInstance, SCDLOutputPinInstance,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  SCDLInputPinInstance = (function() {
    function SCDLInputPinInstance(scdlSubsystem_, scdlInputPinAddress_) {
      this.getScdlPinId = __bind(this.getScdlPinId, this);
      this.getPinInstanceUuid = __bind(this.getPinInstanceUuid, this);
      this.getReferencingSubsystemUuid = __bind(this.getReferencingSubsystemUuid, this);
      this.scdlStore = scdlSubsystem_.scdlStore;
      this.scdlSubsystem = scdlSubsystem_;
      this.scdlInputPinAddress = scdlInputPinAddress_.clone();
    }

    SCDLInputPinInstance.prototype.getReferencingSubsystemUuid = function() {
      return this.scdlSubsystem.namespace.getComponentKey();
    };

    SCDLInputPinInstance.prototype.getPinInstanceUuid = function() {
      return this.scdlInputPinAddress.getComponentKey();
    };

    SCDLInputPinInstance.prototype.getScdlPinId = function() {
      return "" + (this.getReferencingSubsystemUuid()) + ":" + (this.getPinInstanceUuid());
    };

    return SCDLInputPinInstance;

  })();

  SCDLOutputPinInstance = (function() {
    function SCDLOutputPinInstance(scdlSubsystem_, scdlOutputPinAddress_) {
      this.getScdlPinId = __bind(this.getScdlPinId, this);
      this.getPinInstanceUuid = __bind(this.getPinInstanceUuid, this);
      this.getReferencingSubsystemUuid = __bind(this.getReferencingSubsystemUuid, this);
      this.scdlStore = scdlSubsystem_.scdlStore;
      this.scdlSubsystem = scdlSubsystem_;
      this.scdlOutputPinAddress = scdlOutputPinAddress_.clone();
    }

    SCDLOutputPinInstance.prototype.getReferencingSubsystemUuid = function() {
      return this.scdlSubsystem.namespace.getComponentKey();
    };

    SCDLOutputPinInstance.prototype.getPinInstanceUuid = function() {
      return this.scdlOutputPinAddress.getComponentKey();
    };

    SCDLOutputPinInstance.prototype.getScdlPinId = function() {
      return "" + (this.getReferencingSubsystemUuid()) + ":" + (this.getPinInstanceUuid());
    };

    return SCDLOutputPinInstance;

  })();

  module.exports.SCDLInputPinInstance = SCDLInputPinInstance;

  module.exports.SCDLOutputPinInstance = SCDLOutputPinInstance;

}).call(this);
