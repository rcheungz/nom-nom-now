NomNom.Models.Category = Backbone.Model.extend({
	urlRoot: "/api/categories",
	
	restaurants: function () {
    if(!this._restaurants) {
      this._restaurants = new NomNom.Collections.Restaurants([], { category: this });
    }

    return this._restaurants;
  },
	
	parse: function (response) {
		if(response.restaurants) {
      this.restaurants().set(response.restaurants, { parse: true });
      delete response.restaurants;
    }

    return response;
	},
});