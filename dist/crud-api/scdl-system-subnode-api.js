(function() {
  var SCDLSubnode,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  SCDLSubnode = (function() {
    function SCDLSubnode(scdlParentSystem_, scdlSourcePin_) {
      this.addConnection = __bind(this.addConnection, this);
      var sourcePinInstanceData, unresolvedSubnodeAddress;
      this.scdlStore = scdlParentSystem_.scdlStore;
      this.scdlParentSystem = scdlParentSystem_;
      unresolvedSubnodeAddress = scdlParentSystem_.namespace.getResolvedAddress().createSubpathAddress("nodes.node");
      this.namespace = this.scdlStore.createComponent(unresolvedSubnodeAddress);
      sourcePinInstanceData = this.namespace.data().sourcePinInstance;
      sourcePinInstanceData.systemInstanceUuid = scdlSourcePin_.getReferencingSubsystemUuid();
      sourcePinInstanceData.pinInstanceUuid = scdlSourcePin_.getPinInstanceUuid();
    }

    SCDLSubnode.prototype.addConnection = function(scdlSinkPin_) {
      var sinkPinData, sinkPinNamespace, unresolvedSinkPinAddress;
      unresolvedSinkPinAddress = this.namespace.getResolvedAddress().createSubpathAddress("sinkPinInstances.sinkPinInstance");
      sinkPinNamespace = this.scdlStore.createComponent(unresolvedSinkPinAddress);
      sinkPinData = sinkPinNamespace.data();
      sinkPinData.systemInstanceUuid = scdlSinkPin_.getReferencingSubsystemUuid();
      sinkPinData.pinInstanceUuid = scdlSinkPin_.getPinInstanceUuid();
      return true;
    };

    return SCDLSubnode;

  })();

  module.exports = SCDLSubnode;

}).call(this);
