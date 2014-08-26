// scdl-store-selector-api-test.js

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onm = require('onm');
var onmdScdlExports =  require('../index');
var SCDLStore = onmdScdlExports.crudAPI.SCDLStore;
var SCDLStoreSelector = onmdScdlExports.crudAPI.SCDLStoreSelector;
var SCDLSystem = onmdScdlExports.crudAPI.SCDLSystem;
var SCDLType = onmdScdlExports.crudAPI.SCDLType;

describe("SCDLStoreSelector API tests", function() {

    var scdlStore = null;
    var scdlStoreSelector = null;

    before(function() {
        scdlStore = new SCDLStore();
        scdlStoreSelector = new SCDLStoreSelector(scdlStore);
    });

    it("scdlStoreSelector should be an object", function() {
        assert.typeOf(scdlStoreSelector, 'object');
    });

    it("scdlStoreSelector should be an instance of SCDLStoreSelector", function() {
        assert.instanceOf(scdlStoreSelector, SCDLStoreSelector);
    });

    it("scdlStoreSelector should be an instance of onm.AddressStore", function() {
        assert.instanceOf(scdlStoreSelector, onm.AddressStore);
    });

    it("scdlStoreSelector should initially have no selection", function() {
        var selectedAddress = scdlStoreSelector.getAddress()
        assert.isUndefined(selectedAddress);
    });

    it("select the root component of the SCDL store", function() {
        var newAddress = scdlStore.model.createRootAddress();
        scdlStoreSelector.setAddress(newAddress);
    });

    it("readback the selected address and compare", function() {
        var address = scdlStoreSelector.getAddress()
        assert.isTrue(address.isEqual(scdlStore.model.createRootAddress()));
    });

    it("clear the selected address", function() {
        scdlStoreSelector.setAddress(undefined);
        assert.isUndefined(scdlStoreSelector.getAddress());
    });

});



