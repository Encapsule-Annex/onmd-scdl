
module.exports.ScdlMachine = {
    namespaceType: "component"
    jsonTag: "machine"
    ____label: "Machine"
    ____description: "SCDL machine model."
    namespaceProperties: {
        userImmutable: Encapsule.code.app.ONMjs.SchemaAppDataNamespaceCommonProperties
        userMutable: Encapsule.code.app.ONMjs.ScdlModelUserMutableNamespaceProperties 
    } # namespaceProperties

    subNamespaces: [
        Encapsule.code.app.ONMjs.SchemaAppDataInputPins
        Encapsule.code.app.ONMjs.SchemaAppDataOutputPins
        {
            namespaceType: "extensionPoint"
            jsonTag: "states"
            ____label: "States"
            ____description: "SCDL state descriptors."
            componentArchetype: {
                namespaceType: "component"
                jsonTag: "state"
                ____label: "State"
                ____description: "SCDL state descriptor."
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
                        stateEnterExpression: {
                            ____type: "string"
                            fnCreate: -> ""
                        }
                        stateExitExpression: {
                            ____type: "string"
                            fnCreate: -> ""
                        }
                    } # userMutable
                } # state namespaceProperties

                subNamespaces: [
                    {
                        namespaceType: "extensionPoint"
                        jsonTag: "transitions"
                        ____label: "Transitions"
                        ____description: "SCDL state transition descriptors."
                        componentArchetype: {
                            namespaceType: "component"
                            jsonTag: "transition"
                            ____label: "Transition"
                            ____description: "SCDL state transition descriptor."
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
                                    finalState: {
                                        ____type: "uuidSelection"
                                        ____selectionSource: "schema.catalogues.catalogue.models.machines.machine.states"
                                        fnCreate: -> Encapsule.code.lib.util.uuidNull
                                    }
                                    vectorExpression: {
                                        ____type: "string"
                                        fnCreate: -> ""
                                    }
                                } # userMutable
                            } # namespaceProperties
                        } # transition
                    } # transition
                ] # state subNamespaces

            } # states objectDescriptor
        } # States
     ] # Machine submenus
} # Encapsule.code.app.ONMjs.SchemaAppDataMachineArchetype