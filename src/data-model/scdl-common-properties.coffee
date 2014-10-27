
uuid = require('node-uuid')
onmutil = require('onm').util


module.exports =
    ImmutableProperties:
        uuid:
            ____type: "uuid"
            defaultValue: ''

        uuidRevision:
            ____type: "uuid"
            defaultValue: ''

        revision:
            ____type: "revision"
            defaultValue:  0

        createTime:
            ____type: "epochTime"
            defaultValue: 0

        updateTime:
            ____type: "epochTime"
            defaultValue: 0

    MutableProperties:
        name:
            ____type: "string"
            defaultValue: ""

        description:
            ____type: "string"
            defaultValue: ""

        platformBinding:
            ____type: "uuid"
            ____optional: true
            defaultValue:  undefined

        tags:
            ____type: "stringCSV"
            defaultValue: ""
