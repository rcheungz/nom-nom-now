NomNom.Views.RestaurantShow = Backbone.View.extend({
	template: JST["restaurants/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
	
});