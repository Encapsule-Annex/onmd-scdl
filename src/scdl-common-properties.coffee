
uuid = require('node-uuid')
onmutil = require('onm').util


module.exports.CommonProperties = {
    uuid: {
        ____type: "uuid"
        fnCreate: -> uuid.v4()
    }
    uuidRevision: {
        ____type: "uuid"
        fnCreate: -> uuid.v4()
    }
    revision: {
        ____type: "revision"
        fnCreate: -> 0
    }
    createTime: {
        ____type: "epochTime"
        fnCreate: -> onmutil.getEpochTime()
    }
    updateTime: {
        ____type: "epochTime"
        fnCreate: -> onmutil.getEpochTime()
    }
}



Encapsule.code.app.ONMjs.ScdlModelUserMutableNamespaceProperties = {
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
    platformBinding: {
        ____type: "uuid"
        ____optional: true
        fnCreate: -> undefined
    }
}