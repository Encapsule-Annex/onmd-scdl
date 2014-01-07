
module.exports = {

    namespaceType: "root"
    jsonTag: "scdl"
    ____label: "SCDL"
    ____description: "SCDL model and specification data object."

    semanticBindings: require('./scdl-semantic-bindings')

    subNamespaces: [

        {
            namespaceType: "child"
            jsonTag: "client"
            ____label: "Client"
            ____description: "Client child namespace."
            namespaceProperties: {
                userImmutable: {
                    clientDeployment: {
                        ____type: "uuid"
                        fnCreate: -> uuid.v4()
                    } # clientDeployment
                    localSession: {
                        ____type: "object"
                        fnCreate: -> {
                            uuid: uuid.v4()
                            timeStart: Encapsule.code.lib.util.getEpochTime()
                        }
                    } # localSession
                } # userImmutable
            } # namespaceProperties
    
            subNamespaces: [

                {
                    namespaceType: "extensionPoint"
                    jsonTag: "catalogues"
                    ____label: "Catalogues"
                    ____description: "SCDL catalogue object collection."
                    componentArchetype: require('./scdl-catalogue')
                } # catalogues


            ] # Schema submenus
        } # Schema

    ] # SchemaAppData
} # layout object    
    

