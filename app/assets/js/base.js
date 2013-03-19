(function() {

  window.experiment = {
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
      return experiment.map.initialize();
    });
  });

}).call(this);
