# scdl-store-api.coffee
#

onm = require('onm')
scdlDataModelDeclaration = require('../data-model/scdl');
scdlModel = new onm.Model(scdlDataModelDeclaration)

SCDLCatalogue = require('./scdl-catalogue-api')

###jshint shadow: true###
class SCDLStore extends onm.Store
    constructor: (JSON_) ->
        super(scdlModel, JSON_)

    createNewCatalogue: => new SCDLCatalogue(@)

        
module.exports = SCDLStore
     



