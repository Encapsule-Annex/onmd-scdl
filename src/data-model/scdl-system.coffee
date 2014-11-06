
onm = require('onm')
commonProperties = require('./scdl-common-properties')

pins = require('./scdl-pins')


module.exports = {
    namespaceType: "component"
    jsonTag: "system"
    ____label: "System"
    ____description: "SCDL system model."
    namespaceProperties: {
        userImmutable: commonProperties.ImmutableProperties
        userMutable: commonProperties.MutableProperties
    }

    subNamespaces: [
        pins.InputPins
        pins.OutputPins


        { 
            namespaceType: "extensionPoint"
            jsonTag: "subsystems"
            ____label: "System Instances"
            ____description: "Contained SCDL system model instances."
            componentArchetype: {
                namespaceType: "component"
                jsonTag: "subsystem"
                ____label: "System Instance"
                ____description: "Contained SCDL system instance."
                namespaceProperties: {
                    userImmutable: commonProperties.ImmutableProperties
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
                        systemUuid : {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: -> onm.util.uuidNull
                        }
                    } # userMutable
                } # namespaceProperties
            } # subsystem archetype
        } # subsystems

        { 
            namespaceType: "extensionPoint"
            jsonTag: "submachines"
            ____label: "Machine Instances"
            ____description: "Contained SCDL machine model instances."
            componentArchetype: {
                namespaceType: "component"
                jsonTag: "submachine"
                ____label: "Machine Instance"
                ____description: "SCDL machine instance."
                namespaceProperties: {
                    userImmutable: commonProperties.ImmutableProperties
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
                        machineUuid : {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: -> onm.util.uuidNull
                        }
                    } # userMutable
                } # namespaceProperties
            } # subsystem archetype

        } # submachines


        { 
            namespaceType: "extensionPoint"
            jsonTag: "subsockets"
            ____label: "Socket Instances"
            ____description: "Contained SCDL socket model instances."
            componentArchetype: {
                namespaceType: "component"
                jsonTag: "subsocket"
                ____label: "Socket Instance"
                ____description: "SCDL socket instance."
                namespaceProperties: {
                    userImmutable: commonProperties.ImmutableProperties
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
                        socketUuid : {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: -> onm.util.uuid
                        }
                    } # userMutable
                } # namespaceProperties
            } # subsystem archetype
        } # subsystems

        require('./scdl-nodes').Nodes

    ] # system submenus
} # Encapsule.code.app.ONMjs.SchemaAppDataSystemArchetype
