
module.exports.ScdlSystem = {
    namespaceType: "component"
    jsonTag: "system"
    ____label: "System"
    ____description: "SCDL system model."
    namespaceProperties: {
        userImmutable: Encapsule.code.app.ONMjs.SchemaAppDataNamespaceCommonProperties
        userMutable: Encapsule.code.app.ONMjs.ScdlModelUserMutableNamespaceProperties 
    }

    subNamespaces: [
        Encapsule.code.app.ONMjs.SchemaAppDataInputPins
        Encapsule.code.app.ONMjs.SchemaAppDataOutputPins

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
                        systemUuid : {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: -> Encapsule.code.lib.util.uuidNull
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
                        machineUuid : {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: -> Encapsule.code.lib.util.uuidNull
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
                        socketUuid : {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: -> Encapsule.code.lib.util.uuidNull
                        }
                    } # userMutable
                } # namespaceProperties
            } # subsystem archetype
        } # subsystems

        Encapsule.code.app.ONMjs.SchemaAppDataNodes

    ] # system submenus
} # Encapsule.code.app.ONMjs.SchemaAppDataSystemArchetype
