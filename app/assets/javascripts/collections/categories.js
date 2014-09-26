NomNom.Collections.Categories = Backbone.Collection.extend({
	model: NomNom.Models.Category,
	url: "/api/categories",
	
});

NomNom.Collections.categories = new NomNom.Collections.Categories();