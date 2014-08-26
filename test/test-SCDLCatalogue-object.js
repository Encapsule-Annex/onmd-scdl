// scdl-catalogue-api-test.js

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onmdScdlExports = require('../index');
var SCDLStore = onmdScdlExports.crudAPI.SCDLStore;
var SCDLSystem = onmdScdlExports.crudAPI.SCDLSystem;
var SCDLType = onmdScdlExports.crudAPI.SCDLType;

describe("SCDLCatalogue API tests", function() {

    var scdlStore = null;
    var scdlCatalogue = null;

    before(function() {
        scdlStore = new SCDLStore();
        assert.typeOf(scdlStore, 'object');
        scdlCatalogue = scdlStore.createNewCatalogue();
        assert.typeOf(scdlCatalogue, 'object');
    });


    describe("SCDLCatalogue.createNewType method tests", function() {

        var scdlType = null;

        before(function() {
            scdlType = scdlCatalogue.createNewType();
        });

        it("should create an object", function() {
            assert.typeOf(scdlType, 'object');
        });

        it("that is an instance of SCDLType", function() {
            assert.instanceOf(scdlType, SCDLType);
        });

    });

    describe("SCDLCatalogue.createNewSystem method tests", function() {

        var scdlSystem = null;

        before(function() {
            scdlSystem = scdlCatalogue.createNewSystem();
        });

        it("should create an object", function() {
            assert.typeOf(scdlSystem, 'object');
        });

        it("that is an instance of SCDLSystem", function() {
            assert.instanceOf(scdlSystem, SCDLSystem);
        });

    });

});
