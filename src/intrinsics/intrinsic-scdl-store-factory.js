// intrinsic-scdl-store-factory.js
//

var onm = require('onm');
var intrinsicSCDLCatalogueProperties = require('./intrinsic-scdl-catalogue-properties');
var intrinsicSCDLTypeProperties = require('./intrinsic-scdl-type-properties');


var createIntrinsicSCDLStore = function() {

    // Create a default-constructed SCDL data store.
    var scdlModelDeclaration = require('../../index').dataModelDeclaration;
    var scdlModel = new onm.Model(scdlModelDeclaration);
    var scdlStore = new onm.Store(scdlModel);

    // Inject SCDL catalogue component into the store.
    var addressNewSCDLCatalogue = scdlModel.createRootAddress().createSubpathAddress("catalogues.catalogue");
    var namespaceCatalogue = scdlStore.createComponent(addressNewSCDLCatalogue, [ intrinsicSCDLCatalogueProperties.uuid ], intrinsicSCDLCatalogueProperties);

    // Inject intrinisic SCDL type models into the intrinsic SCDL model catalogue.
    var addressNewSCDLType = namespaceCatalogue.getResolvedAddress().createSubpathAddress("models.types.type");
    var key, value;
    for (key in intrinsicSCDLTypeProperties) {
        value = intrinsicSCDLTypeProperties[key];
        scdlStore.createComponent(addressNewSCDLType, [ value.uuid ], value);
    }

};

module.exports = createIntrinsicSCDLStore;
