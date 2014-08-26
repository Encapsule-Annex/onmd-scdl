// scdl-system-api-test.js

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var onm = require('onm');

var onmdScdlExports = require('../index');
var SCDLStore = onmdScdlExports.crudAPI.SCDLStore;
var SCDLSystem = onmdScdlExports.crudAPI.SCDLSystem;
var SCDLType = onmdScdlExports.crudAPI.SCDLType;
var SCDLSubsystem = onmdScdlExports.crudAPI.SCDLSubsystem;
var SCDLInputPin = onmdScdlExports.crudAPI.SCDLInputPin;
var SCDLOutputPin = onmdScdlExports.crudAPI.SCDLOutputPin;
var SCDLSubnode = onmdScdlExports.crudAPI.SCDLSubnode;
var SCDLInputPinInstance = onmdScdlExports.crudAPI.SCDLInputPinInstance;
var SCDLOutputPinInstance = onmdScdlExports.crudAPI.SCDLOutputPinInstance;


describe("SCDLSystem API tests", function() {

    var scdlStore = null;
    var scdlCatalogue = null;
    var scdlType = null;
    var scdlSystemOuter = null;
    var scdlSystemInner = null;

    before(function() {
        scdlStore = new SCDLStore();
        scdlCatalogue = scdlStore.createNewCatalogue();
        scdlType = scdlCatalogue.createNewType();
        scdlSystemOuter = scdlCatalogue.createNewSystem();
        scdlSystemInner = scdlCatalogue.createNewSystem();
        assert.instanceOf(scdlSystemOuter, SCDLSystem);
        assert.instanceOf(scdlSystemOuter, SCDLSystem);
    });

    describe("SCDLSystem.createNewInputPin method", function() {

        var scdlInputPin = null;

        before(function() {
            scdlInputPin = scdlSystemOuter.createNewInputPin(scdlType);
        });

        it("should be an object", function() {
            assert.typeOf(scdlInputPin, 'object');
        });

        it("that is an instance of SCDLInputPin", function() {
            assert.instanceOf(scdlInputPin, SCDLInputPin);
        });

        it("SCDLInputPin instance should have property 'namespace'", function() {
            expect(scdlInputPin).to.have.property('namespace');
        });

        it("'namespace' property should have value of type onm.Namespace", function() {
            assert.instanceOf(scdlInputPin.namespace, onm.Namespace);
        });

    });

    describe("SCDLSystem.createNewOutputPin method", function() {

        var scdlOutputPin = null;

        before(function() {
            scdlOutputPin = scdlSystemOuter.createNewOutputPin(scdlType);
        });

        it("should be an object", function() {
            assert.typeOf(scdlOutputPin, 'object');
        });

        it("that is an instance of SCDLOutputPin", function() {
            assert.instanceOf(scdlOutputPin, SCDLOutputPin);
        });

        it("SCDLOutputPin instance should have property 'namespace'", function() {
            expect(scdlOutputPin).to.have.property('namespace');
        });

        it("'namespace' property should have value of type onm.Namespace", function() {
            assert.instanceOf(scdlOutputPin.namespace, onm.Namespace);
        });

    });

    describe("SCDLSystem.createNewSubsystem method", function() {

        var scdlSubsystem = null;

        before(function() {
            scdlSubsystem = scdlSystemOuter.createNewSubsystem(scdlSystemInner);
        });

        it("should create an object", function() {
            assert.typeOf(scdlSubsystem, 'object');
        });

        it("that is an instance of SCDLSystem", function() {
            assert.instanceOf(scdlSubsystem, SCDLSubsystem);
        });

    });

    describe("SCDLSystem.createNewSubnode method", function() {

        var scdlSystemOuterInput = null;
        var scdlSystemOuterOutputA = null;
        var scdlSystemOuterOutputB = null;

        var scdlSystemInnerInput = null;
        var scdlSystemInnerOutput = null;

        var scdlNodeOuterInput = null;
        var scdlNodeInnerOutput = null;

        before(function() {

            scdlSystemOuterInput = scdlSystemOuter.createNewInputPin(scdlType);
            scdlSystemOuterOutputA = scdlSystemOuter.createNewOutputPin(scdlType);
            scdlSystemOuterOutputB = scdlSystemOuter.createNewOutputPin(scdlType);

            scdlSystemInnerInput = scdlSystemInner.createNewInputPin(scdlType);
            scdlSystemInnerOutput = scdlSystemInner.createNewOutputPin(scdlType);

            scdlNodeOuterInput = scdlSystemOuter.createNewSubnode(scdlSystemOuterInput);
            scdlNodeOuterInput.addConnection(scdlSystemOuterOutputA);
            scdlNodeOuterInput.addConnection(scdlSystemInnerInput);

            scdlNodeInnerOutput = scdlSystemOuter.createNewSubnode(scdlSystemInnerOutput);
            scdlNodeInnerOutput.addConnection(scdlSystemOuterOutputB);

        });
        
        it("created instance of SCDLInputPin", function() {
            assert.instanceOf(scdlSystemOuterInput, SCDLInputPin);
        });

        it("created instance of SCDLOutputPin", function() {
            assert.instanceOf(scdlSystemOuterOutputA, SCDLOutputPin);
        });

        it("created instance of SCDLSubnode bound to the outer system's input", function() {
            assert.instanceOf(scdlNodeOuterInput, SCDLSubnode);
        });

        it("creted instance of SCDLSubnode bount to the inner system's output", function() {
            assert.instanceOf(scdlNodeInnerOutput, SCDLSubnode);
        });

    });

});