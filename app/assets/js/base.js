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
