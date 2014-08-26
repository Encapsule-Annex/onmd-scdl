# scdl-store-selector.coffee

onm = require('onm')

###jshint shadow: true###
class SCDLStoreSelector extends onm.AddressStore
    constructor: (targetScdlStore_, initialAddressSelection_) ->
        super(targetScdlStore_, initialAddressSelection_)

module.exports = SCDLStoreSelector





