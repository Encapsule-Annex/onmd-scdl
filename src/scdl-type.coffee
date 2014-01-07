
module.exports.ScdlType = {
    namespaceType: "component"                                                                    
    jsonTag: "type"
    ____label: "Type"
    ____description: "SCDL type model."
    namespaceProperties: {
        userImmutable: Encapsule.code.app.ONMjs.SchemaAppDataNamespaceCommonProperties
        userMutable: {
            name: {
                ____type: "string"
                fnCreate: -> ""
            }
            description: {
                ____type: "string"
                fnCreate: -> ""
            }
            tags: {
                ____type: "stringCSV"
                fnCreate: -> ""
            }
            author: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.people"
                fnCreate: -> Encapsule.code.lib.util.uuidNull
            }
            organization: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                fnCreate: -> Encapsule.code.lib.util.uuidNull
            }
            copyright: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.copyrights"
                fnCreate: -> Encapsule.code.lib.util.uuidNull
            }
            license: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.licenses"
                fnCreate: -> Encapsule.code.lib.util.uuidNull
            }
            platformBinding: {
                ____type: "uuid"
                fnCreate: -> Encapsule.code.lib.util.uuidNull
            }
        } # type userMutable
    } # type namespaceDescriptor

} # SchemaAppDataTypeArchetype
