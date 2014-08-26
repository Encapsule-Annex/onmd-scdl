var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var onm = require('onm');
var onmdScdl = require('../index');

describe("Parse and load the SCDL data model declaration by constructing a new onm.Model object instance", function() {

    var model = null;

    before(function() {
        model = new onm.Model(onmdScdl.DataModel);
    });

    it("The onm data model should have loaded without error", function() {
        assert.isNotNull(model);
    });
    it("The onm data model should be an instance of onm.Model", function() {
        assert.instanceOf(model, onm.Model);
    });

});

