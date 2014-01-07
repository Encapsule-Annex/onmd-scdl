
util = require('onm').util

module.exports.ScdlCatalogue = {

    namespaceType: "component"
    jsonTag: "catalogue"
    ____label: "Catalogue"
    ____description: "SCDL Model Catalogue object."
    namespaceProperties: {
        userImmutable: require('./scdl-common-properties')
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
                fnCreate: -> util.uuidNull
            }
            organization: {
                ____type: "uuidSelection"
                ____selectionSource: "schema.catalogues.catalogue.assets.organizations"
                fnCreate: -> util.uuidNull
            }
        }
    }
    subNamespaces: [
        {
            namespaceType: "extensionPoint"
            jsonTag: "specifications"
            ____label: "Specifications"
            ____description: "SCDL specification collection."
            componentArchetype: require('./scdl-specification')

        } # Specifications
        {
            namespaceType: "child"
            jsonTag: "models"
            ____label: "Models"
            ____description: "SCDL model namespace."

            subNamespaces: [
                {
                    namespaceType: "extensionPoint"
                    jsonTag: "systems"
                    ____label: "Systems"
                    ____description: "SCDL system model collection."
                    componentArchetype: require('./scdl-system')

                } # Systems
                {
                    namespaceType: "extensionPoint"
                    jsonTag: "sockets"
                    ____label: "Sockets"
                    ____description: "SCDL socket model collection."
                    componentArchetype: require('./scdl-socket')
                } # Sockets
                {
                    namespaceType: "extensionPoint"
                    jsonTag: "contracts"
                    ____label: "Contracts"
                    ____description: "SCDL contract model collection."
                    componentArchetype: require('./scdl-contract')
                } # sockets
                {
                    namespaceType: "extensionPoint"
                    jsonTag: "machines"
                    ____label: "Machines"
                    ____description: "SCDL machine model collection."
                    componentArchetype: require('./scdl-machine')
                } # machines
                {
                    namespaceType: "extensionPoint"
                    jsonTag: "types"
                    ____label: "Types"
                    ____description: "SCDL type model collection."
                    componentArchetype:  require('./scdl-type')
                } # types
            ] # Models submenus
        } # Models
        {
            namespaceType: "child"
            jsonTag: "resources"
            ____label: "Resources"
            ____description: "SCDL common resource namespace."
            subNamespaces: [
                {
                    namespaceType: "child"
                    jsonTag: "attribution"
                    ____label: "Attribution"
                    ____description: "Shared attribution namespace."

                    subNamespaces: [
                        {
                            namespaceType: "extensionPoint"
                            jsonTag: "people"
                            ____label: "People"
                            ____description: "SCDL person models."
                            componentArchetype: require('./scdl-person')
                        } # people
                        {
                            namespaceType: "extensionPoint"
                            jsonTag: "organizations"
                            ____label: "Organizations"
                            ____description: "SCDL organization models."
                            componentArchetype: require('./scdl-organization')
                        } # organizations
                        {
                            namespaceType: "extensionPoint"
                            jsonTag: "licenses"
                            ____label: "Licenses"
                            ____description: "SCDL license models."
                            componentArchetype: require('./scdl-license')
                        } # licenses
                        {
                            namespaceType: "extensionPoint"
                            jsonTag: "copyrights"
                            ____label: "Copyrights"
                            ____description: "SCDL copyright models."
                            componentArchetype: require('./scdl-copyright')
                        } # copyrights
                    ] # assets submenu
                } # assets
            ] # attribution subMenus
        } # attribution
    ] # Catalogue submenus
} # Catalogue archetype

