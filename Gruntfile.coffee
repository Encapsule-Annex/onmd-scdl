module.exports = (grunt) ->

    configObject =
        pkg: grunt.file.readJSON("package.json")

        coffee:
            debug:
                files:
                    'dist/data-model/scdl.js':                                'src/data-model/scdl.coffee'
                    'dist/data-model/scdl-semantic-bindings.js':              'src/data-model/scdl-semantic-bindings.coffee'
                    'dist/data-model/scdl-catalogue.js':                      'src/data-model/scdl-catalogue.coffee'
                    'dist/data-model/scdl-common-properties.js':              'src/data-model/scdl-common-properties.coffee'
                    'dist/data-model/scdl-specification.js':                  'src/data-model/scdl-specification.coffee'
                    'dist/data-model/scdl-system.js':                         'src/data-model/scdl-system.coffee'
                    'dist/data-model/scdl-socket.js':                         'src/data-model/scdl-socket.coffee'
                    'dist/data-model/scdl-contract.js':                       'src/data-model/scdl-contract.coffee'
                    'dist/data-model/scdl-machine.js':                        'src/data-model/scdl-machine.coffee'
                    'dist/data-model/scdl-type.js':                           'src/data-model/scdl-type.coffee'
                    'dist/data-model/scdl-pins.js':                           'src/data-model/scdl-pins.coffee'
                    'dist/data-model/scdl-nodes.js':                          'src/data-model/scdl-nodes.coffee'
                    'dist/crud-api/scdl-store-api.js':                        'src/crud-api/scdl-store-api.coffee'
                    'dist/crud-api/scdl-store-selector-api.js':               'src/crud-api/scdl-store-selector-api.coffee'
                    'dist/crud-api/scdl-catalogue-api.js':                    'src/crud-api/scdl-catalogue-api.coffee'
                    'dist/crud-api/scdl-type-api.js':                         'src/crud-api/scdl-type-api.coffee'
                    'dist/crud-api/scdl-system-api.js':                       'src/crud-api/scdl-system-api.coffee'
                    'dist/crud-api/scdl-system-pin-api.js':                   'src/crud-api/scdl-system-pin-api.coffee'
                    'dist/crud-api/scdl-system-subnode-api.js':               'src/crud-api/scdl-system-subnode-api.coffee'
                    'dist/crud-api/scdl-system-subsystem-api.js':             'src/crud-api/scdl-system-subsystem-api.coffee'
                    'dist/crud-api/scdl-system-subsystem-pin-api.js':         'src/crud-api/scdl-system-subsystem-pin-api.coffee'

        jshint:
            options: {}
            files: [ 'index.js', './dist/*.js', './dist/**/*.js', './dist/**/**/*.js' ]

        mochaTest:
            options:
                reporter: 'spec'
            src: [ 'test/tests.js' ]

        clean: [ 'dist' ]

    grunt.initConfig configObject

    grunt.loadNpmTasks "grunt-contrib-clean"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-jshint"
    grunt.loadNpmTasks "grunt-mocha-test"

    grunt.registerTask "lint", [ "jshint" ]
    grunt.registerTask "test", [ "mochaTest" ]
    grunt.registerTask "default", [ "clean", "coffee:debug", "lint", "test" ]
