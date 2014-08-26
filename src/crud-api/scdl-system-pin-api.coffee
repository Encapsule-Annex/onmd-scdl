# scdl-system-pin-api.coffee
#

onm = require('onm')


class SCDLPin
    constructor: (scdlSystem_, scdlType_, isDataSource_) ->
        @scdlSystem = scdlSystem_
        @scdlType = scdlType_
        subpath = (isDataSource_ and "inputPins.inputPin") or "outputPins.outputPin"
        address = @scdlSystem.namespace.getResolvedAddress().createSubpathAddress(subpath)
        @namespace = @scdlSystem.scdlStore.createComponent(address)
        @namespace.data().typeUuid = scdlType_.namespace.getComponentKey()

    getReferencingSubsystemUuid: => onm.util.uuidNull

    getPinInstanceUuid: => @namespace.getComponentKey()

    getScdlPinId: =>
        "#{@getReferencingSubsystemUuid()}:#{@getPinInstanceUuid()}"



###jshint shadow: true###
class SCDLInputPin extends SCDLPin
    constructor: (scdlSystem_, scdlType_) ->
        super(scdlSystem_, scdlType_, true)

###jshint shadow: true###
class SCDLOutputPin extends SCDLPin
    constructor: (scdlSystem_, scdlType_) ->
        super(scdlSystem_, scdlType_, false)

module.exports.SCDLInputPin = SCDLInputPin;
module.exports.SCDLOutputPin = SCDLOutputPin;


    
        


