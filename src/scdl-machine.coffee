onm = require('onm')
common = require('./scdl-common-properties')
pins = require('./scdl-pins')

module.exports = {
    namespaceType: "component"
    jsonTag: "machine"
    ____label: "Machine"
    ____description: "SCDL machine model."
    namespaceProperties: {
        userImmutable: common.ImmutableProperties
        userMutable: common.MutableProperties
    } # namespaceProperties

    subNamespaces: [
        pins.InputPins
        pins.OutputPins
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
                                    finalState: {
                                        ____type: "uuidSelection"
                                        ____selectionSource: "schema.catalogues.catalogue.models.machines.machine.states"
                                        fnCreate: -> onm.util.uuidNull
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