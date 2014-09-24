NomNom.Collections.Reviews = Backbone.Collection.extend({
	model: NomNom.Models.Review,
	url: "/api/reviews", 
	
	initialize: function (models, options) {
		this.restaurant = options.restaurant;
	}
	// getOrFetch: function (id) {
	// 	var restaurant = this.get(id);
	// 	var restaurants = this;
	//
	// 	if (!restaurant) {
	// 		restaurant = new NomNom.Models.Restaurant({ id: id })
	// 		restaurant.fetch({
	// 			success: function () {
	// 				restaurants.add(restaurant);
	// 			},
	// 		});
	// 	} else {
	// 		restaurant.fetch();
	// 	}
	// 	return restaurant;
	// }
})