NomNom.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		"": "index",
		"restaurants": "search",
		"restaurants/:id": "show"
	},
	
	index: function () {
		NomNom.Collections.restaurants.fetch();
		var indexView = new NomNom.Views.RestaurantIndex({
			collection: NomNom.Collections.restaurants
		});
		this._swapView(indexView);
	},
	
	show: function (id) {
		var restaurant = NomNom.Collections.restaurants.getOrFetch(id);
		
		var showView = new NomNom.Views.RestaurantShow({
			model: restaurant
		});
		this._swapView(showView);
	},
	
	search: function () {
		
	},
	
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	},
	
	
});