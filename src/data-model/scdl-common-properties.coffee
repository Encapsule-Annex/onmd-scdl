
uuid = require('node-uuid')
onmutil = require('onm').util


module.exports.ImmutableProperties = {
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
        defaultValue:  0
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



module.exports.MutableProperties = {
    name: {
        ____type: "string"
        defaultValue: ""
    }
    description: {
        ____type: "string"
        defaultValue: ""
    }
    platformBinding: {
        ____type: "uuid"
        ____optional: true
        defaultValue:  undefined
    }
    tags: {
        ____type: "stringCSV"
        defaultValue: ""
    }
}