NomNom.Collections.Restaurants = Backbone.Collection.extend({
	model: NomNom.Models.Restaurant,
	url: "/api/restaurants",
	
	getOrFetch: function (id) {
		var restaurant = this.get(id);
		var restaurants = this;
		
		if (!restaurant) {
			restaurant = new NomNom.Models.Restaurant({ id: id })
			restaurant.fetch({
				success: function () {
					restaurants.add(restaurant);
				},
			});
		} else {
			restaurant.fetch();
		}
		return restaurant;
	}
});

NomNom.Collections.restaurants = new NomNom.Collections.Restaurants();