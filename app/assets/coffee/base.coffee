window.experiment =
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
	)