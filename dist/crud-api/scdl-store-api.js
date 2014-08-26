(function() {
  var SCDLCatalogue, SCDLStore, onm, scdlDataModelDeclaration, scdlModel,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  onm = require('onm');

  scdlDataModelDeclaration = require('../data-model/scdl');

  scdlModel = new onm.Model(scdlDataModelDeclaration);

  SCDLCatalogue = require('./scdl-catalogue-api');

  /*jshint shadow: true*/


  SCDLStore = (function(_super) {
    __extends(SCDLStore, _super);

    function SCDLStore(JSON_) {
      this.createNewCatalogue = __bind(this.createNewCatalogue, this);
      SCDLStore.__super__.constructor.call(this, scdlModel, JSON_);
    }

    SCDLStore.prototype.createNewCatalogue = function() {
      return new SCDLCatalogue(this);
    };

    return SCDLStore;

  })(onm.Store);

  module.exports = SCDLStore;

}).call(this);
