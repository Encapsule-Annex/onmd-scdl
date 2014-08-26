# scdl-system-subnode-api.coffee
#

class SCDLSubnode
    constructor: (scdlParentSystem_, scdlSourcePin_) ->
        @scdlStore = scdlParentSystem_.scdlStore
        @scdlParentSystem = scdlParentSystem_
        unresolvedSubnodeAddress =
            scdlParentSystem_.namespace.getResolvedAddress().createSubpathAddress("nodes.node")
        @namespace = @scdlStore.createComponent(unresolvedSubnodeAddress)
        sourcePinInstanceData = @namespace.data().sourcePinInstance
        sourcePinInstanceData.systemInstanceUuid = scdlSourcePin_.getReferencingSubsystemUuid()
        sourcePinInstanceData.pinInstanceUuid = scdlSourcePin_.getPinInstanceUuid()

    addConnection: (scdlSinkPin_) =>
        unresolvedSinkPinAddress = @namespace.getResolvedAddress().createSubpathAddress("sinkPinInstances.sinkPinInstance")
        sinkPinNamespace = @scdlStore.createComponent(unresolvedSinkPinAddress)
        sinkPinData = sinkPinNamespace.data()
        sinkPinData.systemInstanceUuid = scdlSinkPin_.getReferencingSubsystemUuid()
        sinkPinData.pinInstanceUuid = scdlSinkPin_.getPinInstanceUuid()
        true

module.exports = SCDLSubnode