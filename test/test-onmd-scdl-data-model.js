
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onm = require('onm');
var onmdScdlExports = require('../index');

describe("Parse and load the SCDL data model declaration by constructing a new onm.Model object instance", function() {

    var model = null;

    before(function() {
        model = new onm.Model(onmdScdlExports.dataModelDeclaration);
    });

    it("The onm data model should have loaded without error", function() {
        assert.isNotNull(model);
    });
    it("The onm data model should be an instance of onm.Model", function() {
        assert.instanceOf(model, onm.Model);
    });

});

