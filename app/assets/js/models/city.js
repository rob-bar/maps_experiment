(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  experiment.models.City = (function(_super) {

    __extends(City, _super);

    function City() {
      return City.__super__.constructor.apply(this, arguments);
    }

    City.prototype.defaults = {
      id: 0,
      name: 'Unknown City',
      lat: 0,
      lng: 0
    };

    return City;

  })(Backbone.Model);

}).call(this);
