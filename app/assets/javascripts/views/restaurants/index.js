NomNom.Views.RestaurantIndex = Backbone.View.extend({
	template: JST["restaurants/index"],
	
	className: "restaurants-index",
	
	initialize: function (options) {
		this.searchString = options.keyword;
		this.listenTo(this.collection, "sync", this.render);
	},
	
	filterCollection: function () {
		var filteredCollection = new NomNom.Collections.Restaurants();
		this.collection.each(function(restaurant) {
			if (restaurant.categories().where({category: this.searchString})) { //not sure if this is valid?
				filteredCollection.add(restaurant);//also not sure if this is cool, should I create a copy of restaurant and add it? does this take restaurant out of the original collection and add it to filtered?
			}
		});
		return filteredCollection;
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurants: this.collection
			//restaurants: this.filterCollection
		});
		this.$el.html(renderedContent);
		return this;
	},
});

