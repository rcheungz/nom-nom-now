NomNom.Views.ListingShow = Backbone.View.extend({
	template: JST["listings/show"],
	className: "restaurant-listing",
	
	render: function () {
		var renderedContent = this.template({
			listing: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},
});