class experiment.collections.Cities extends Backbone.Collection
	model: experiment.models.City
	url: "#{experiment.config.servicepath}cities.json"