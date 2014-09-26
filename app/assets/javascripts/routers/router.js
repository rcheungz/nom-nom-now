NomNom.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		"": "search",
		"restaurants": "searchResults",
		"restaurants/:id": "show"
	},
	
	// searchResults: function (searchString) {
		// NomNom.Collections.restaurants.fetch();
	// 	debugger;
	// 	var indexView = new NomNom.Views.RestaurantIndex({
	// 		collection: NomNom.Collections.categories,
	// 		keyword: searchString
	// 	});
	// 	this._swapView(indexView);
	// },
	
	searchResults: function () {
		var url = decodeURI(window.location.hash);
		var queryIndex = url.indexOf("query=");
		var searchString = url.slice(queryIndex + 6);
		debugger;
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
	
	show: function (id) {
		var restaurant = NomNom.Collections.restaurants.getOrFetch(id);
		
		var showView = new NomNom.Views.RestaurantShow({
			model: restaurant
		});
		this._swapView(showView);
	},
	
	search: function () {
		var searchView = new NomNom.Views.RestaurantSearch();
		this._swapView(searchView);
	},
	
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	},
	
	
});