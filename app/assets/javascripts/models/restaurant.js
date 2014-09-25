NomNom.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "/api/restaurants",
	
	reviews: function () {
    if(!this._reviews) {
      this._reviews = new NomNom.Collections.Reviews([], { restaurant: this });
    }

    return this._reviews;
  },
	
	categories: function () {
		if(!this._categories) {
			this._categories = new NomNom.Collections.Categories([], { restaurant: this });
		}
		
		return this._categories;
	},
	
	parse: function (response) {
		if(response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }

    return response;
	},
});