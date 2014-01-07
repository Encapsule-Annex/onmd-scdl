
module.exports.ScdlContract = {
    namespaceType: "component"
    jsonTag: "contract"
    ____label: "Contract"
    ____description: "SCDL contract model."
    namespaceProperties: {
        userImmutable: Encapsule.code.app.ONMjs.SchemaAppDataNamespaceCommonProperties
        userMutable: Encapsule.code.app.ONMjs.ScdlModelUserMutableNamespaceProperties
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
        Encapsule.code.app.ONMjs.SchemaAppDataNodes

    ] # Socket Contract submenus

} # Encapsule.code.app.ONMjs.SchemaAppDataContractArchetype 