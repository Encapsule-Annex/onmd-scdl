
module.exports.ScdlSocket = {
    namespaceType: "component"
    jsonTag: "socket"
    ____label: "Socket"
    ____description: "SCDL socket model."
    namespaceProperties: {
        userImmutable: Encapsule.code.app.ONMjs.SchemaAppDataNamespaceCommonProperties
        userMutable: Encapsule.code.app.ONMjs.ScdlModelUserMutableNamespaceProperties 
    }
    subNamespaces: [
        Encapsule.code.app.ONMjs.SchemaAppDataInputPins
        Encapsule.code.app.ONMjs.SchemaAppDataOutputPins
    ] # Socket submenus

} # Encapsule.code.app.ONMjs.SchemaAppDataSocketArchetype 