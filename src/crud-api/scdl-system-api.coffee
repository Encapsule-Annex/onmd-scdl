# scdl-system-api.coffee
#

SCDLPin = require('./scdl-system-pin-api')
SCDLInputPin = SCDLPin.SCDLInputPin
SCDLOutputPin = SCDLPin.SCDLOutputPin
SCDLSubsystem = require('./scdl-system-subsystem-api')
SCDLSubnode = require('./scdl-system-subnode-api')

class SCDLSystem
    constructor: (scdlCatalogue_) ->
        @scdlStore = scdlCatalogue_.scdlStore
        @scdlCatalogue = scdlCatalogue_
        unresolvedSystemAddress = @scdlCatalogue.namespace.getResolvedAddress().createSubpathAddress("models.systems.system")
        @namespace = @scdlStore.createComponent(unresolvedSystemAddress)

    createNewInputPin: (scdlType_) => new SCDLInputPin(@, scdlType_)

    createNewOutputPin: (scdlType_) => new SCDLOutputPin(@, scdlType_)

    createNewSubsystem: (scdlSystem_) => new SCDLSubsystem(@, scdlSystem_)

    createNewSubnode: (scdlSourcePinId_) => new SCDLSubnode(@, scdlSourcePinId_)
        
module.exports = SCDLSystem



