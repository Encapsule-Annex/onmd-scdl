
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var SCDLDataModelDeclaration = require('../index').dataModelDeclaration;
var validateDataModelDeclaration = require('onm-data-model-tests')().validateDataModelDeclaration;

describe("onmd-scdl module tests", function() {
    validateDataModelDeclaration(SCDLDataModelDeclaration);
    require('./test-SCDL-objects');
    require('./test-intrinsic-scdl-store-factory');
});

