// Data model declaration for Encapsule Project's
// Software Circuit Description Language (SCDL).

module.exports = {

    // Software Circuit Description Language (SCDL) onm data model declaration object.
    dataModelDeclaration:      require('./dist/data-model/scdl'),

    // SCDL data model declaration sub-objects for testing, and for building derived
    // data model declarations that leverage SCDL object declarations.
    dataModelDeclarationObjects: {
        SemanticBindings:      require('./dist/data-model/scdl-semantic-bindings'),
        Catalogue:             require('./dist/data-model/scdl-catalogue'),
        Specification:         require('./dist/data-model/scdl-specification'),
        System:                require('./dist/data-model/scdl-system'),
        Socket:                require('./dist/data-model/scdl-socket'),
        Contract:              require('./dist/data-model/scdl-contract'),
        Machine:               require('./dist/data-model/scdl-machine'),
        Type:                  require('./dist/data-model/scdl-type'),
        Person:                require('./dist/data-model/scdl-person'),
        Organization:          require('./dist/data-model/scdl-organization'),
        Copyright:             require('./dist/data-model/scdl-copyright'),
        License:               require('./dist/data-model/scdl-license')
    },

    // A simple helper API over the generic onm API's that simplify client code
    // SCDL model CRUD operations.
    crudAPI: {
        // SCDL API
        SCDLStore:             require('./dist/crud-api/scdl-store-api'),
        SCDLStoreSelector:     require('./dist/crud-api/scdl-store-selector-api'),

        // SCDL API implementation objects.
        SCDLCatalogue:         require('./dist/crud-api/scdl-catalogue-api'),
        SCDLType:              require('./dist/crud-api/scdl-type-api'),
        SCDLSystem:            require('./dist/crud-api/scdl-system-api'),
        SCDLInputPin:          require('./dist/crud-api/scdl-system-pin-api').SCDLInputPin,
        SCDLOutputPin:         require('./dist/crud-api/scdl-system-pin-api').SCDLOutputPin,
        SCDLSubsystem:         require('./dist/crud-api/scdl-system-subsystem-api'),
        SCDLInputPinInstance:  require('./dist/crud-api/scdl-system-subsystem-pin-api').SCDLInputPinInstance,
        SCDLOutputPinInstance: require('./dist/crud-api/scdl-system-subsystem-pin-api').SCDLOutputPinInstance,
        SCDLSubnode:           require('./dist/crud-api/scdl-system-subnode-api')
    }

};
















