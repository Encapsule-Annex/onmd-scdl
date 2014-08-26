# scdl-system-subsystem-api.coffee
#

SCDLSubsystemPins = require('./scdl-system-subsystem-pin-api')
SCDLInputPinInstance = SCDLSubsystemPins.SCDLInputPinInstance
SCDLOutputPinInstance = SCDLSubsystemPins.SCDLOutputPinInstance


class SCDLSubsystem
    constructor: (scdlSystemParent_, scdlSystemArchetype_) ->
        @scdlStore = scdlSystemParent_.scdlStore
        @scdlSystemParent = scdlSystemParent_
        @scdlSystemArchetype = scdlSystemArchetype_

        unresolvedSubsystemAddress =
            @scdlSystemParent.namespace.getResolvedAddress().createSubpathAddress("subsystems.subsystem")
        @namespace = @scdlStore.createComponent(unresolvedSubsystemAddress)
        @namespace.data().uuidSystem  = scdlSystemArchetype_.namespace.getComponentKey()

        @inputPinInstances = {}
        @outputPinInstances = {}

        systemInputPinsNamespace = @scdlStore.openNamespace(@scdlSystemArchetype.namespace.getResolvedAddress().createSubpathAddress("inputPins"))
        systemInputPinsNamespace.visitExtensionPointSubcomponents(
            (inputPinAddress_) =>
                inputPinInstance = new SCDLInputPinInstance(@, inputPinAddress_)
                @inputPinInstances[inputPinInstance.getScdlPinId()] = inputPinInstance
                true
            )

        systemOutputPinsNamespace = @scdlStore.openNamespace(@scdlSystemArchetype.namespace.getResolvedAddress().createSubpathAddress("outputPins"))
        systemOutputPinsNamespace.visitExtensionPointSubcomponents(
            (outputPinAddress_) =>
                outputPinInstance = new SCDLOutputPinInstance(@, outputPinAddress_)
                @outputPinInstances[outputPinInstance.getScdlPinId()] = outputPinInstance
                true
            )



module.exports = SCDLSubsystem





