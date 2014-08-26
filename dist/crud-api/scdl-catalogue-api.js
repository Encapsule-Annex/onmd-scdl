(function() {
  var SCDLCatalogue, SCDLSystem, SCDLType,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  SCDLType = require('./scdl-type-api');

  SCDLSystem = require('./scdl-system-api');

  SCDLCatalogue = (function() {
    function SCDLCatalogue(scdlStore_) {
      this.createNewSystem = __bind(this.createNewSystem, this);
      this.createNewType = __bind(this.createNewType, this);
      var unresolvedCatalogueAddress;
      this.scdlStore = scdlStore_;
      unresolvedCatalogueAddress = scdlStore_.model.createPathAddress("scdl.catalogues.catalogue");
      this.namespace = scdlStore_.createComponent(unresolvedCatalogueAddress);
    }

    SCDLCatalogue.prototype.createNewType = function() {
      return new SCDLType(this);
    };

    SCDLCatalogue.prototype.createNewSystem = function() {
      return new SCDLSystem(this);
    };

    return SCDLCatalogue;

  })();

  module.exports = SCDLCatalogue;

}).call(this);
