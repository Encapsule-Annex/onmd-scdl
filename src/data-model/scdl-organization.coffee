
common = require('./scdl-common-properties')

module.exports = {
    namespaceType: "component"
    jsonTag: "organization"
    ____label: "Organization"
    ____description: "SCDL organization model."
    namespaceProperties: {
        userImmutable: common.ImmutableProperties
    }
}