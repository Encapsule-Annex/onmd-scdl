(function() {
  var SCDLType;

  SCDLType = (function() {
    function SCDLType(scdlCatalogue_) {
      var unresolvedTypeAddress;
      this.scdlStore = scdlCatalogue_.scdlStore;
      this.scdlCatalogue = scdlCatalogue_;
      unresolvedTypeAddress = scdlCatalogue_.namespace.getResolvedAddress().createSubpathAddress("models.types.type");
      this.namespace = this.scdlStore.createComponent(unresolvedTypeAddress);
    }

    return SCDLType;

  })();

  module.exports = SCDLType;

}).call(this);
