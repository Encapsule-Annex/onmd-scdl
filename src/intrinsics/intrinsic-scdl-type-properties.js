// intrinsic-scdl-type-properties.js
//

// These aren't actual SCDL type models but rather 'cherry-pick' objects
// that are used to override data model namespace properties value defaults.

var intrinsicSCDLTypeProperties = module.exports = {

    dataModel: {
        uuid: '0fcca222-5330-11e4-a9e1-080027d17300',
        uuidRevision: '1500d3f6-16dd-4d6b-bd8e-7699dbf1aab0',
        name: 'Data Model',
        description: 'JSON-format serialized onm data model declaration.',
        createTime: 0,
        updateTime: 0
    },

    dataStore: {
        uuid: 'b743ab1c-5331-11e4-9f08-080027d17300',
        uuidRevision: '0febfa40-8349-4339-8dd1-f911c225b264',
        name: 'Data Store',
        description: 'JSON-format serialized onm data store.',
        tags: 'intrinsic',
        createTime: 0,
        updateTime: 0
    },

    dataBus: {
        uuid: 'c029d695-6805-4eaa-905d-e94e5358ad48',
        uuidRevision: 'a1e1fbb6-1d27-4483-bc94-3519f7d2527f',
        name: 'Data Bus',
        description: 'Composite onm model/store subsystem communication bus.',
        tags: 'intrinsic',
        createTime: 0,
        updateTime: 0
    },

    power: {
        uuid: '06d9ff88-bd4d-4c24-bf5f-c7004bb89b8f',
        uuidRevision: 'd0749146-3b0f-46a5-a6e3-be1a8d53742d',
        name: 'Power',
        description: 'Power type is used to indicate enable/disable state of a SCDL system instance within the context of its containing SCDL system host.',
        tags: 'intrinsic',
        createTime: 0,
        updateTime: 0
    },

    clock: {
        uuid: 'e5ac5caf-3c9e-4024-af52-e32cc75898f9',
        uuidRevision: '6140218a-2a4b-4719-a20c-40de83c05924',
        name: 'Clock',
        description: 'Clock type is used to indicate the flow of control through a network of interconnected SCDL system models.',
        tags: 'intrinsic',
        createTime: 0,
        updateTime: 0
    },

    reset: {
        uuid: 'c3611c45-ea8a-4dee-b847-1996c54c976e',
        uuidRevision: 'ef59659b-52a5-4b54-b635-1b72e4c5af2c',
        name: 'Reset',
        description: 'Reset type is used to indicate administrative reset signals issued to SCDL system(s) by their SCDL system host.',
        tags: 'intrinsic',
        createTime: 0,
        updateTime: 0
    },

    state: {
        uuid: '187c8f26-04e6-4569-b6cb-fb5f9c8877a9',
        uuidRevision: '886d7fe6-7694-4719-a75f-7bdaad6a2bf5',
        name: 'State',
        description: 'State type is used to indicate the observable state of a SCDL entity (e.g. a SCDL system).',
        tags: 'intrinsic',
        createTime: 0,
        updateTime: 0
    }

};

