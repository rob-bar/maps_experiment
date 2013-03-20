(function() {

  window.experiment = {
    config: {
      servicepath: "../service/"
    },
    map: {
      initialize: function() {
        var mapOptions;
        mapOptions = {
          zoom: 6,
          center: new google.maps.LatLng(50.85034, 4.35171),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: this.style
        };
        return this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
      }
    },
    models: {},
    collections: {},
    views: {},
    router: {}
  };

  $(function() {
    return $.getJSON("assets/json/mapstyle.json", function(json) {
      experiment.map.style = json;
      experiment.map.initialize();
      experiment.city = new experiment.models.City();
      experiment.cities = new experiment.collections.Cities();
      return experiment.cities.fetch({
        success: function(models) {
          return models.each(function(city) {
            return console.log(city);
          });
        }
      });
    });
  });

}).call(this);

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
