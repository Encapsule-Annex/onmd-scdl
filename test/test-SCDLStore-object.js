// scdl-store-api-test.js

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onm = require('onm');
var onmdScdlExports = require('../index');
var SCDLStore = onmdScdlExports.crudAPI.SCDLStore;
var SCDLCatalogue = onmdScdlExports.crudAPI.SCDLCatalogue;

describe("SCDLStore API tests", function() {

    describe("SCDLStore default constructor", function() {
        var scdlStore = null;

        before(function() {
            scdlStore = new SCDLStore();
        });

        it("should create an object", function() {
            assert.typeOf(scdlStore, 'object');
        });

        it("that is an instance of SCDLStore", function() {
            assert.instanceOf(scdlStore, SCDLStore);
        });

        it("that derives from onm.Store", function() {
            assert.instanceOf(scdlStore, onm.Store);
        });
    });

    describe("SCDLStore.createNewCatalogue method", function() {

        var scdlStore = null;
        var scdlCatalogue = null;

        before(function() {
            scdlStore = new SCDLStore();
            scdlCatalogue = scdlStore.createNewCatalogue();
        });

        it("should create an object", function() {
            assert.typeOf(scdlCatalogue, 'object');
        });

        it("that is an instance of SCDLCatalogue", function() {
            assert.instanceOf(scdlCatalogue, SCDLCatalogue);
        });

        it("that has property 'namespace'", function() {
            expect(scdlCatalogue).to.have.property('namespace');
        });

        it("'namespace' should be an instance of onm.Namespace", function() {
            assert.instanceOf(scdlCatalogue.namespace, onm.Namespace);
        });

    });

});





