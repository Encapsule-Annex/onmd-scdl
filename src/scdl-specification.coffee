onmutil = require('onm').util

module.exports = {
    namespaceType: "component"                                                                             
    jsonTag: "specification"
    ____label: "Specification"
    ____description: "SCDL specification."
    namespaceProperties: {
        userImmutable:  require('./scdl-common-properties').CommonProperties
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
                ____type: "string"
                fnCreate: -> ""
            }
            author: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.people"
                fnCreate: -> onmutil.uuidNull
            }
            organization: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                fnCreate: -> onmutil.uuidNull
            }
            copyright: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.copyrights"
                fnCreate: -> onmutil.uuidNull
            }
            license: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.licenses"
                fnCreate: -> onmutil.uuidNull
            }
        }
    }
    subNamespaces: [
        {
            namespaceType: "extensionPoint"
            jsonTag: "systemInstances"
            ____label: "System Instances"
            ____description: "SCDL system model instances."
            componentArchetype: {
                namespaceType: "component"
                jsonTag: "systemInstance"
                ____label: "System Instance"
                ____description: "SCDL system model instance."
                namespaceProperties: {
                    userImmutable: require('./scdl-common-properties').CommonProperties
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
                        uuidModel: {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.models.systems"
                            fnCreate: ->  onmutil.uuidNull
                        }
                        author: {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.assets.people"
                            fnCreate: -> onmutil.uuidNull
                        }
                        organization: {
                            ____type: "uuidSelection"
                            ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                            fnCreate: -> onmutil.uuidNull
                        }
                    }
                }
                subNamespaces: [
                    {
                        namespaceType: "extensionPoint"
                        jsonTag: "socketInstances"
                        ____label: "Socket Instances"
                        ____description: "SCDL socket model instances."
                        componentArchetype: {
                            namespaceType: "component"
                            jsonTag: "socketInstance"
                            ____label: "Socket Instance"
                            ____description: "SCDL socket model instance."
                            namespaceProperties: {
                                userImmutable: require('./scdl-common-properties').CommonProperties
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
                                    uuidModel: {
                                        ____type: "uuidSelection"
                                        ____selectionSource: "schema.catalogues.catalogue.models.sockets"
                                        fnCreate: ->  onmutil.uuidNull
                                    }
                                    author: {
                                        ____type: "uuidSelection"
                                        ____selectionSource: "schema.catalogues.catalogue.assets.people"
                                        fnCreate: -> onmutil.uuidNull
                                    }
                                    organization: {
                                        ____type: "uuidSelection"
                                        ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                                        fnCreate: -> onmutil.uuidNull
                                    }
                                }
                            }
                            subNamespaces: [
                                {
                                    namespaceType: "extensionPoint"
                                    jsonTag: "instanceBindings"
                                    ____label: "Instance Bindings"
                                    ____description: "SCDL socket model instance bindings."
                                    componentArchetype: {
                                        namespaceType: "component"
                                        jsonTag: "instanceBinding"
                                        ____label: "Instance Binding"
                                        ____description: "SCDL socket model instance binding."
                                        namespaceProperties: {
                                            userImmutable: require('./scdl-common-properties').CommonProperties
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
                                                uuidModel: {
                                                    ____type: "uuidSelection"
                                                    ____selectionSource: "schema.catalogues.catalogue.models.sockets"
                                                    fnCreate: ->  onmutil.uuidNull
                                                }
                                                author: {
                                                    ____type: "uuidSelection"
                                                    ____selectionSource: "schema.catalogues.catalogue.assets.people"
                                                    fnCreate: -> onmutil.uuidNull
                                                }
                                                organization: {
                                                    ____type: "uuidSelection"
                                                    ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                                                    fnCreate: -> onmutil.uuidNull
                                                }
                                            }
                                        } # namespaceProperties
                                    } # componentArchetype
                                } #instanceBinding
                            ] # instanceBindings subNamespaces
                        } #instanceBindings componentArchetype
                    }
                ]
            }
        }
    ]
}

