
onm = require('onm')
uuid = require('node-uuid')

module.exports =

    update: (dataReference_) ->
        ###jshint eqnull: true###
        if dataReference_.revision?
            dataReference_.revision++
        if (dataReference_.updateTime? and dataReference_.updateTime)
            dataReference_.updateTime = onm.util.getEpochTime()
        if (dataReference_.uuidRevision? and dataReference_.uuidRevision)
            dataReference_.uuidRevision = uuid.v4()
        return true

    getLabel: (dataReference_, address_) ->
        model = address_.getModel();
        ###jshint eqnull: true###
        label = (dataReference_.name? and dataReference_.name) or
            (dataReference_.uuid? and dataReference_.uuid and "#{model.____label} #{dataReference_.uuid}") or model.____label
        return label

    setUniqueKey: (dataReference_, keyOverride_) ->
        ###jshint eqnull: true###
        if not (dataReference_.uuid? and dataReference_.uuid)
            dataReference_.uuid = keyOverride_? and keyOverride_ or uuid.v4()
        dataReference_.uuid

    getUniqueKey: (dataReference_) ->
        ###jshint eqnull: true###
        dataReference_.uuid? and dataReference_.uuid or undefined




