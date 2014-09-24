NomNom.Routers.Router = Backbone.Router.exnted({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		"": "search",
		"restaurants": "searchIndex",
		"restaurants/:id": "show"
	},
	
	search: function () {
		var 
	}
	
});