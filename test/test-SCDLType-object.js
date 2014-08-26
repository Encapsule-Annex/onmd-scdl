// scdl-type-api-test.js

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onmdScdlExports = require('../index');
var SCDLStore = onmdScdlExports.crudAPI.SCDLStore;
var SCDLCatalogue = onmdScdlExports.crudAPI.SCDLCatalogue;
var SCDLType = onmdScdlExports.crudAPI.SCDLType;

describe("SCDLType API tests", function() {

    var scdlStore = null;
    var scdlCatalogue = null;
    var scdlType = null;

    before(function() {
        scdlStore = new SCDLStore();
        scdlCatalogue = scdlStore.createNewCatalogue();
        scdlType = scdlCatalogue.createNewType();
        assert.instanceOf(scdlStore, SCDLStore);
        assert.instanceOf(scdlCatalogue, SCDLCatalogue);
    });

    it("should be an instance of SCDLType", function() {
        assert.instanceOf(scdlType, SCDLType);
    });

});