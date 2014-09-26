NomNom.Views.RestaurantSearch = Backbone.View.extend({
	template: JST["restaurants/search"],
	
	events: {
		"click .search": "submitSearch"
	},
	
	submitSearch: function (event) {
		event.preventDefault
	}
	
	
});