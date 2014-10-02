NomNom.Views.ListingShow = Backbone.View.extend({
	template: JST["listings/show"],
	// className: "restaurant-listing",

	initialize: function (options) {
		this.rating = options.rating;
		this.numReviews = options.numReviews;
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model,
			rating: this.rating,
			numReviews: this.numReviews
		});
		this.$el.html(renderedContent);
		return this;
	},
});