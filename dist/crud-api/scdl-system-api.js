(function() {
  var SCDLInputPin, SCDLOutputPin, SCDLPin, SCDLSubnode, SCDLSubsystem, SCDLSystem,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  SCDLPin = require('./scdl-system-pin-api');

  SCDLInputPin = SCDLPin.SCDLInputPin;

  SCDLOutputPin = SCDLPin.SCDLOutputPin;

  SCDLSubsystem = require('./scdl-system-subsystem-api');

  SCDLSubnode = require('./scdl-system-subnode-api');

  SCDLSystem = (function() {
    function SCDLSystem(scdlCatalogue_) {
      this.createNewSubnode = __bind(this.createNewSubnode, this);
      this.createNewSubsystem = __bind(this.createNewSubsystem, this);
      this.createNewOutputPin = __bind(this.createNewOutputPin, this);
      this.createNewInputPin = __bind(this.createNewInputPin, this);
      var unresolvedSystemAddress;
      this.scdlStore = scdlCatalogue_.scdlStore;
      this.scdlCatalogue = scdlCatalogue_;
      unresolvedSystemAddress = this.scdlCatalogue.namespace.getResolvedAddress().createSubpathAddress("models.systems.system");
      this.namespace = this.scdlStore.createComponent(unresolvedSystemAddress);
    }

    SCDLSystem.prototype.createNewInputPin = function(scdlType_) {
      return new SCDLInputPin(this, scdlType_);
    };

    SCDLSystem.prototype.createNewOutputPin = function(scdlType_) {
      return new SCDLOutputPin(this, scdlType_);
    };

    SCDLSystem.prototype.createNewSubsystem = function(scdlSystem_) {
      return new SCDLSubsystem(this, scdlSystem_);
    };

    SCDLSystem.prototype.createNewSubnode = function(scdlSourcePinId_) {
      return new SCDLSubnode(this, scdlSourcePinId_);
    };

    return SCDLSystem;

  })();

  module.exports = SCDLSystem;

}).call(this);
