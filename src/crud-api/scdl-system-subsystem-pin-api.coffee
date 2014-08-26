# scdl-system-subsystem-pin-api.coffee
#

class SCDLInputPinInstance
    constructor: (scdlSubsystem_, scdlInputPinAddress_) ->
        @scdlStore = scdlSubsystem_.scdlStore
        @scdlSubsystem = scdlSubsystem_
        @scdlInputPinAddress = scdlInputPinAddress_.clone()

    getReferencingSubsystemUuid: => @scdlSubsystem.namespace.getComponentKey()

    getPinInstanceUuid: => @scdlInputPinAddress.getComponentKey();

    getScdlPinId: =>
        "#{@getReferencingSubsystemUuid()}:#{@getPinInstanceUuid()}"

class SCDLOutputPinInstance
    constructor: (scdlSubsystem_, scdlOutputPinAddress_) ->
        @scdlStore = scdlSubsystem_.scdlStore
        @scdlSubsystem = scdlSubsystem_
        @scdlOutputPinAddress = scdlOutputPinAddress_.clone()

    getReferencingSubsystemUuid: => @scdlSubsystem.namespace.getComponentKey()

    getPinInstanceUuid: => @scdlOutputPinAddress.getComponentKey();

    getScdlPinId: =>
        "#{@getReferencingSubsystemUuid()}:#{@getPinInstanceUuid()}"

module.exports.SCDLInputPinInstance = SCDLInputPinInstance
module.exports.SCDLOutputPinInstance = SCDLOutputPinInstance

