(function() {
  var SCDLStoreSelector, onm,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  onm = require('onm');

  /*jshint shadow: true*/


  SCDLStoreSelector = (function(_super) {
    __extends(SCDLStoreSelector, _super);

    function SCDLStoreSelector(targetScdlStore_, initialAddressSelection_) {
      SCDLStoreSelector.__super__.constructor.call(this, targetScdlStore_, initialAddressSelection_);
    }

    return SCDLStoreSelector;

  })(onm.AddressStore);

  module.exports = SCDLStoreSelector;

}).call(this);
