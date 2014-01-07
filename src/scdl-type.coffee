
onm = require('onm')
common = require('./scdl-common-properties')

module.exports = {
    namespaceType: "component"                                                                    
    jsonTag: "type"
    ____label: "Type"
    ____description: "SCDL type model."
    namespaceProperties: {
        userImmutable: common.ImmutableProperties
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
                fnCreate: -> onm.util.uuidNull
            }
            organization: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                fnCreate: -> onm.util.uuidNull
            }
            copyright: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.copyrights"
                fnCreate: -> onm.util.uuidNull
            }
            license: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.licenses"
                fnCreate: -> onm.util.uuidNull
            }
            platformBinding: {
                ____type: "uuid"
                fnCreate: -> onm.util.uuidNull
            }
        } # type userMutable
    } # type namespaceDescriptor

} # SchemaAppDataTypeArchetype
