NomNom.Views.RestaurantIndex = Backbone.View.extend({
	template: JST["restaurants/index"],
	
	className: "restaurants-index",
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurants: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	},
});