(function() {
  var SCDLInputPin, SCDLOutputPin, SCDLPin, onm,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  onm = require('onm');

  SCDLPin = (function() {
    function SCDLPin(scdlSystem_, scdlType_, isDataSource_) {
      this.getScdlPinId = __bind(this.getScdlPinId, this);
      this.getPinInstanceUuid = __bind(this.getPinInstanceUuid, this);
      this.getReferencingSubsystemUuid = __bind(this.getReferencingSubsystemUuid, this);
      var address, subpath;
      this.scdlSystem = scdlSystem_;
      this.scdlType = scdlType_;
      subpath = (isDataSource_ && "inputPins.inputPin") || "outputPins.outputPin";
      address = this.scdlSystem.namespace.getResolvedAddress().createSubpathAddress(subpath);
      this.namespace = this.scdlSystem.scdlStore.createComponent(address);
      this.namespace.data().typeUuid = scdlType_.namespace.getComponentKey();
    }

    SCDLPin.prototype.getReferencingSubsystemUuid = function() {
      return onm.util.uuidNull;
    };

    SCDLPin.prototype.getPinInstanceUuid = function() {
      return this.namespace.getComponentKey();
    };

    SCDLPin.prototype.getScdlPinId = function() {
      return "" + (this.getReferencingSubsystemUuid()) + ":" + (this.getPinInstanceUuid());
    };

    return SCDLPin;

  })();

  /*jshint shadow: true*/


  SCDLInputPin = (function(_super) {
    __extends(SCDLInputPin, _super);

    function SCDLInputPin(scdlSystem_, scdlType_) {
      SCDLInputPin.__super__.constructor.call(this, scdlSystem_, scdlType_, true);
    }

    return SCDLInputPin;

  })(SCDLPin);

  /*jshint shadow: true*/


  SCDLOutputPin = (function(_super) {
    __extends(SCDLOutputPin, _super);

    function SCDLOutputPin(scdlSystem_, scdlType_) {
      SCDLOutputPin.__super__.constructor.call(this, scdlSystem_, scdlType_, false);
    }

    return SCDLOutputPin;

  })(SCDLPin);

  module.exports.SCDLInputPin = SCDLInputPin;

  module.exports.SCDLOutputPin = SCDLOutputPin;

}).call(this);
