#

module.exports = (grunt) ->

    configObject =
        pkg: grunt.file.readJSON("package.json")

        coffee:
            debug:
                files:
                    'dist/node/scdl.js': 'src/scdl.coffee'
                    'dist/node/scdl-semantic-bindings.js': 'src/scdl-semantic-bindings.coffee'
                    'dist/node/scdl-catalogue.js': 'src/scdl-catalogue.coffee'
                    'dist/node/scdl-common-properties.js': 'src/scdl-common-properties.coffee'
                    'dist/node/scdl-specification.js': 'src/scdl-specification.coffee'
                    'dist/node/scdl-system.js': 'src/scdl-system.coffee'
                    'dist/node/scdl-socket.js': 'src/scdl-socket.coffee'
                    'dist/node/scdl-contract.js': 'src/scdl-contract.coffee'
                    'dist/node/scdl-machine.js': 'src/scdl-machine.coffee'
                    'dist/node/scdl-type.js': 'src/scdl-type.coffee'
                    'dist/node/scdl-pins.js': 'src/scdl-pins.coffee'
                    'dist/node/scdl-nodes.js': 'src/scdl-nodes.coffee'
                    'dist/node/scdl-person.js': 'src/scdl-person.coffee'
                    'dist/node/scdl-organization.js': 'src/scdl-person.coffee'
                    'dist/node/scdl-copyright.js': 'src/scdl-copyright.coffee'
                    'dist/node/scdl-license.js': 'src/scdl-license.coffee'
            releaseDistribution:
                files:
                    'dist/node/onmd-scdl.js': 'src/*.coffee'

        clean: [ 'dist' ]

        browserify:
            'dist/client/onmd-scdl.js': [ './index.js' ]



    grunt.initConfig configObject

    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-clean"
    grunt.loadNpmTasks "grunt-browserify"

    grunt.loadNpmTasks "grunt-contrib-uglify"


    grunt.registerTask "default", [ "clean", "coffee:debug", "browserify" ]
