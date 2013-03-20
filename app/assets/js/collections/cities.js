(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  experiment.collections.Cities = (function(_super) {

    __extends(Cities, _super);

    function Cities() {
      return Cities.__super__.constructor.apply(this, arguments);
    }

    Cities.prototype.model = experiment.models.City;

    Cities.prototype.url = "" + experiment.config.servicepath + "cities.json";

    return Cities;

  })(Backbone.Collection);

}).call(this);
