NomNom.Collections.Categories = Backbone.Collection.extend({
	model: NomNom.Models.Category,
	url: "/api/categories",
	
	initialize: function (models, options) {
		this.restaurant = options.restaurant;
	},
	
});