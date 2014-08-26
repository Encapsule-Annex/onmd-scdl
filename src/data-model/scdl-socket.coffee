
common = require('./scdl-common-properties')
pins = require('./scdl-pins')

module.exports = {
    namespaceType: "component"
    jsonTag: "socket"
    ____label: "Socket"
    ____description: "SCDL socket model."
    namespaceProperties: {
        userImmutable: common.ImmutableProperties
        userMutable: common.MutableProperties
    }
    subNamespaces: [
        pins.InputPins
        pins.OutputPins
    ]
}