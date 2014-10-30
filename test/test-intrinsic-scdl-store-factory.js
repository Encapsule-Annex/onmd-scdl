// test-intrinisic-scdl-store-factory.js
//

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onm = require('onm');
var onmdScdlExports = require('../index');

describe("Attempt to construct the intrinsic SCDL model store.", function() {

    var store = null;

    before(function() {
        store = onmdScdlExports.intrinsics.createIntrinsicSCDLStore();
    });

    it("A SCDL data store should have been created.", function() {
        assert.isNotNull(store);
        assert.instanceOf(store, onm.Store);
    });

});

