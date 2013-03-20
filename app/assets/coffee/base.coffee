window.experiment =
	config:
		servicepath: "../service/"
	map:
		initialize: ->
			mapOptions =
				zoom: 6
				center: new google.maps.LatLng(50.85034,4.35171)
				mapTypeId: google.maps.MapTypeId.ROADMAP
				styles: this.style
			this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions)
	models: {}
	collections: {}
	views: {}
	router: {}

$ ->
	$.getJSON("assets/json/mapstyle.json", (json) ->
		experiment.map.style = json
		experiment.map.initialize()

		experiment.city = new experiment.models.City()
		experiment.cities = new experiment.collections.Cities()

		experiment.cities.fetch({
		success: (models) ->
			models.each((city) -> console.log city)
		})
	)