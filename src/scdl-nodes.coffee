
common = require('./scdl-common-properties')
pins = require('./scdl-pins')

Node = {
    namespaceType: "component"
    jsonTag: "node"
    ____label: "Node"
    ____description: "SCDL node object."
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
        } # user mutable
    } # node namespaceProperties
    subNamespaces: [
        pins.OutputPinChild
        pins.InputPins
    ] # node subMenus
}

module.exports.Node = Node

module.exports.Nodes = {
    namespaceType: "extensionPoint"
    jsonTag: "nodes"
    ____label: "Nodes"
    ____description: "SCDL node descriptor instances."
    componentArchetype: Node
}
