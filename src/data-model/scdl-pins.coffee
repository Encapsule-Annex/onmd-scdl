
onm = require('onm')
common = require('./scdl-common-properties')


module.exports.InputPin = InputPin = {
    namespaceType: "component"
    jsonTag: "inputPin"
    ____label: "Input Pin"
    ____description: "SCDL input pin model."
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
            type: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.models.types"
                fnCreate: -> onm.util.uuidNull
            }
        } # userMutable
    } # namespaceProperties
} # inputPin


module.exports.InputPins = {
    namespaceType: "extensionPoint"
    jsonTag: "inputPins"
    ____label: "Input Pins"
    ____description: "SCDL input pin models."
    componentArchetype: InputPin
} # inputPins



module.exports.OutputPinChild = {
    namespaceType: "child"                                                                     
    jsonTag: "outputPin"
    ____label: "Output Pin"
    ____description: "SCDL output pin model."
    namespaceDescriptor: {
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
            type: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.models.types"
                fnCreate: -> onm.util.uuidNull
            }
        } # userMutable
    } # namespaceProperties
} # outputPinChild


module.exports.OutputPin = OutputPin = {
    namespaceType: "component"
    jsonTag: "outputPin"
    ____label: "Output Pin"
    ____description: "SCDL output pin model."
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
            type: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.models.types"
                fnCreate: -> onm.util.uuidNull
            }
        } # userMutable
    } # namespaceProperties
} # outputPinArchetype



module.exports.OutputPins = {
    namespaceType: "extensionPoint"
    jsonTag: "outputPins"
    ____label: "Output Pins"
    ____description: "SCDL output pin models."
    componentArchetype: OutputPin
} # outputPins


