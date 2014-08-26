# scdl-catalogue-api.coffee

SCDLType = require('./scdl-type-api')
SCDLSystem = require('./scdl-system-api')

class SCDLCatalogue
    constructor: (scdlStore_) ->
        @scdlStore = scdlStore_
        unresolvedCatalogueAddress = scdlStore_.model.createPathAddress("scdl.catalogues.catalogue")
        @namespace = scdlStore_.createComponent(unresolvedCatalogueAddress)

    createNewType: => new SCDLType(@)

    createNewSystem: => new SCDLSystem(@)

module.exports = SCDLCatalogue

        


