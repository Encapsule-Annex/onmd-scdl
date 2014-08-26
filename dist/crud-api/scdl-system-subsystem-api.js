(function() {
  var SCDLInputPinInstance, SCDLOutputPinInstance, SCDLSubsystem, SCDLSubsystemPins;

  SCDLSubsystemPins = require('./scdl-system-subsystem-pin-api');

  SCDLInputPinInstance = SCDLSubsystemPins.SCDLInputPinInstance;

  SCDLOutputPinInstance = SCDLSubsystemPins.SCDLOutputPinInstance;

  SCDLSubsystem = (function() {
    function SCDLSubsystem(scdlSystemParent_, scdlSystemArchetype_) {
      var systemInputPinsNamespace, systemOutputPinsNamespace, unresolvedSubsystemAddress,
        _this = this;
      this.scdlStore = scdlSystemParent_.scdlStore;
      this.scdlSystemParent = scdlSystemParent_;
      this.scdlSystemArchetype = scdlSystemArchetype_;
      unresolvedSubsystemAddress = this.scdlSystemParent.namespace.getResolvedAddress().createSubpathAddress("subsystems.subsystem");
      this.namespace = this.scdlStore.createComponent(unresolvedSubsystemAddress);
      this.namespace.data().uuidSystem = scdlSystemArchetype_.namespace.getComponentKey();
      this.inputPinInstances = {};
      this.outputPinInstances = {};
      systemInputPinsNamespace = this.scdlStore.openNamespace(this.scdlSystemArchetype.namespace.getResolvedAddress().createSubpathAddress("inputPins"));
      systemInputPinsNamespace.visitExtensionPointSubcomponents(function(inputPinAddress_) {
        var inputPinInstance;
        inputPinInstance = new SCDLInputPinInstance(_this, inputPinAddress_);
        _this.inputPinInstances[inputPinInstance.getScdlPinId()] = inputPinInstance;
        return true;
      });
      systemOutputPinsNamespace = this.scdlStore.openNamespace(this.scdlSystemArchetype.namespace.getResolvedAddress().createSubpathAddress("outputPins"));
      systemOutputPinsNamespace.visitExtensionPointSubcomponents(function(outputPinAddress_) {
        var outputPinInstance;
        outputPinInstance = new SCDLOutputPinInstance(_this, outputPinAddress_);
        _this.outputPinInstances[outputPinInstance.getScdlPinId()] = outputPinInstance;
        return true;
      });
    }

    return SCDLSubsystem;

  })();

  module.exports = SCDLSubsystem;

}).call(this);
