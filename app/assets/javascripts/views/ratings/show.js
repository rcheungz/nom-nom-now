NomNom.Views.RatingShow = Backbone.View.extend({
	template: JST["ratings/show"],

	initialize: function(options) {
		this.rating = options.rating;
		this.numReviews = options.numReviews;
	},
	
	render: function () {
		var renderedContent = this.template({
			rating: this.rating,
			numReviews: this.numReviews
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	update: function (rating) {
		this.rating = rating;
		this.render();
	},
});