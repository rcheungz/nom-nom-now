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
		var areaIndex = url.indexOf("+") + 1;
		var searchString = url.slice(queryIndex + 6, areaIndex - 1);
		var areaString = url.slice(areaIndex);
		var that = this;
		NomNom.Collections.restaurants.fetch({
			data: $.param({ query: searchString }),
			success: function () {
				var indexView = new NomNom.Views.RestaurantIndex({
					collection: NomNom.Collections.restaurants,
					searchArea: areaString
				});
				that._swapView(indexView);
			}
		});
	},
	
	randomRestaurant: function () {
		var that = this;
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