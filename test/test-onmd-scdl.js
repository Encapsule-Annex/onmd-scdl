
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var testDataModelDeclaration = require('onm/test/fixture/test-shared-onmd-generic-suite');
var SCDLDataModelDeclaration = require('../index').dataModelDeclaration;


describe("onmd-scdl module tests", function() {
    testDataModelDeclaration(SCDLDataModelDeclaration);
    require('./test-SCDL-objects');
    require('./test-intrinsic-scdl-store-factory');
});

