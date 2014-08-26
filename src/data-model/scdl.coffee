
onm = require('onm')
uuid = require('node-uuid')

module.exports = {

    namespaceType: "root"
    jsonTag: "scdl"
    ____label: "SCDL"
    ____description: "SCDL model and specification data object."

    semanticBindings: require('./scdl-semantic-bindings')

    subNamespaces: [

        {
            namespaceType: "extensionPoint"
            jsonTag: "catalogues"
            ____label: "Catalogues"
            ____description: "SCDL catalogue object collection."
            componentArchetype: require('./scdl-catalogue')
        } # catalogues

    ] # SchemaAppData

} # layout object    
    

