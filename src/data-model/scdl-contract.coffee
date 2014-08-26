
common = require('./scdl-common-properties')

module.exports = {
    namespaceType: "component"
    jsonTag: "contract"
    ____label: "Contract"
    ____description: "SCDL contract model."
    namespaceProperties: {
        userImmutable: common.ImmutableProperties
        userMutable: common.MutableProperties
    } # namespaceProperties

    subNamespaces: [
        {
            namespaceType: "child"
            jsonTag: "socketReference"
            ____label: "Socket Reference"
            ____description: "SCDL socket reference."
        } # socketReference

        {
            namespaceType: "child"
            jsonTag: "modelReference"
            ____label: "Model Reference"
            ____description: "SCDL model reference."
        } # modelReference

        # Easy to miss this slipped in down here.
        require('./scdl-nodes').Nodes

    ] # Socket Contract submenus

} # Encapsule.code.app.ONMjs.SchemaAppDataContractArchetype 