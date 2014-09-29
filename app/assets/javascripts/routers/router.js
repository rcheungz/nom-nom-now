NomNom.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		"": "search",
		"random": "randomRestaurant",
		"restaurants": "searchResults",
		"restaurants/:id": "show"
	},
	
	searchResults: function () {
		var url = decodeURI(window.location.hash);
		var queryIndex = url.indexOf("query=");
		var searchString = url.slice(queryIndex + 6);
		var that = this;
		NomNom.Collections.categories.fetch({
			data: $.param({ query: searchString }),
			success: function () {
				var indexView = new NomNom.Views.RestaurantIndex({
					collection: NomNom.Collections.categories
				});
				that._swapView(indexView);
			}
		});
	},
	
	randomRestaurant: function () {
		//pass in the collection of restaurants then in the view access the user's current position and filter out all results that are within a 5 mile radius, then randomly select
		//one of those results and then display the information on it including a map displaying the location relative to where the user is now.
		var that = this;
		// NomNom.Collections.categories.fetch({ // don't know what the best way to do this is, these seems fucked up!
// 			success: function () {
// 				var randomView = new NomNom.Views.RestaurantRandom({
// 					collection: NomNom.Collections.categories.first().restaurants()
// 				});
// 				that._swapView(randomView);
// 			}
// 		});
		NomNom.Collections.restaurants.fetch({
			success: function () {
				var randomView = new NomNom.Views.RestaurantRandom({
					collection: NomNom.Collections.restaurants
				});
				that._swapView(randomView);
			}
		});
	},
	
	show: function (id) {
		var restaurant = NomNom.Collections.restaurants.getOrFetch(id);
		
		var showView = new NomNom.Views.RestaurantShow({
			model: restaurant
		});
		this._swapView(showView);
	},
	
	search: function () {
		var searchView = new NomNom.Views.RestaurantSearch({
			collection: NomNom.Collections.restaurants
		});
		this._swapView(searchView);
	},
	
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
		view.onRender && view.onRender();
	},
	
	
});