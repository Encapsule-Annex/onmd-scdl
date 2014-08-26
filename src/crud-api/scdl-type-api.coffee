# scdl-type-api.coffee

class SCDLType
    constructor: (scdlCatalogue_) ->
        @scdlStore = scdlCatalogue_.scdlStore
        @scdlCatalogue = scdlCatalogue_
        unresolvedTypeAddress = scdlCatalogue_.namespace.getResolvedAddress().createSubpathAddress("models.types.type")
        @namespace = @scdlStore.createComponent(unresolvedTypeAddress)

module.exports = SCDLType
