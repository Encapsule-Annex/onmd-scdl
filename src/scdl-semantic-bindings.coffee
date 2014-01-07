
module.exports =

    update: (dataReference_) ->
        if dataReference_.revision?
            dataReference_.revision++
        if dataReference_.updateTime?
            dataReference_.updateTime = Encapsule.code.lib.util.getEpochTime()
        if dataReference_.uuidRevision?
            dataReference_.uuidRevision = uuid.v4()
        return true

    getLabel: (dataReference_, address_) ->
        model = address_.getModel();
        label = (dataReference_["name"]? and dataReference_["name"]) or
            (dataReference_["uuid"]? and dataReference_["uuid"] and "#{model.____label} #{dataReference_["uuid"]}") or model.____label
        return label

    setUniqueKey: (dataReference_) ->
        dataReference_.uuid = uuid.v4()

    getUniqueKey: (dataReference_) ->
        key = dataReference_["uuid"]? and dataReference_["uuid"] or undefined
        return key

