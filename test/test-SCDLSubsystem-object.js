// scdl-system-subsystem-api-test.js
//

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onm = require('onm');

var onmdScdlExports = require('../index');
var SCDLStore = onmdScdlExports.crudAPI.SCDLStore;
var SCDLSubsystem = onmdScdlExports.crudAPI.SCDLSubsystem;

describe("SCDLSubsystem API tests", function() {

    var scdlStore = null;
    var scdlCatalogue = null;
    var scdlTypeA = null;
    var scdlTypeB = null;
    var scdlSystemOuter = null;
    var scdlSystemOuterSubsystemA = null;
    var scdlSystemOuterSubsystemB = null;

    var scdlSystemInner = null;
    var scdlSystemInnerInputA = null;
    var scdlSystemInnerInputB = null;
    var scdlSystemInnerOutputA = null;
    var scdlSystemInnerOutputB = null;

    before(function() {
        scdlStore = new SCDLStore();

        scdlCatalogue = scdlStore.createNewCatalogue();

        scdlTypeA = scdlCatalogue.createNewType();
        scdlTypeB = scdlCatalogue.createNewType();

        scdlSystemOuter = scdlCatalogue.createNewSystem();

        scdlSystemInner = scdlCatalogue.createNewSystem();
        scdlSystemInnerInputA = scdlSystemInner.createNewInputPin(scdlTypeA);
        scdlSystemInnerInputB = scdlSystemInner.createNewInputPin(scdlTypeB);
        scdlSystemInnerOutputA = scdlSystemInner.createNewOutputPin(scdlTypeA);
        scdlSystemInnerOutputB = scdlSystemInner.createNewOutputPin(scdlTypeB);

        scdlSystemOuterSubsystemA = scdlSystemOuter.createNewSubsystem(scdlSystemInner);
        scdlSystemOuterSubsystemB = scdlSystemOuter.createNewSubsystem(scdlSystemInner);

    });

    it("two SCDLSubsystem instances should have been created", function() {
        assert.instanceOf(scdlSystemOuterSubsystemA, SCDLSubsystem);
        assert.instanceOf(scdlSystemOuterSubsystemB, SCDLSubsystem);
    });

    it("SCDLSubsystem should have property 'namespace'", function() {
        expect(scdlSystemOuterSubsystemA).to.have.property('namespace');
        expect(scdlSystemOuterSubsystemB).to.have.property('namespace');
    });

    it("'namespace' value should be of type SCDL onm.Namespace", function() {
        assert.instanceOf(scdlSystemOuterSubsystemA.namespace, onm.Namespace);
        assert.instanceOf(scdlSystemOuterSubsystemB.namespace, onm.Namespace);
    });

    it("SCDLSubsystem should have property 'inputPinInstances'", function() {
        expect(scdlSystemOuterSubsystemA).to.have.property('inputPinInstances');
        expect(scdlSystemOuterSubsystemB).to.have.property('inputPinInstances');
    });

    it("'inputPinInstances' dictionary should have two entries", function() {
        assert.lengthOf(Object.keys(scdlSystemOuterSubsystemA.inputPinInstances), 2);
        assert.lengthOf(Object.keys(scdlSystemOuterSubsystemB.inputPinInstances), 2);
    });

    it("SCDLSubsystem should have property 'outputPinInstances'", function() {
        expect(scdlSystemOuterSubsystemA).to.have.property('outputPinInstances');
        expect(scdlSystemOuterSubsystemB).to.have.property('outputPinInstances');
    });

    it("'outputPinInstances' dictionary should have two entries", function() {
        assert.lengthOf(Object.keys(scdlSystemOuterSubsystemA.outputPinInstances), 2);
        assert.lengthOf(Object.keys(scdlSystemOuterSubsystemB.outputPinInstances), 2);
    });

});