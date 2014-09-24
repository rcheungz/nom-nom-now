NomNom.Views.RestaurantShow = Backbone.CompositeView.extend({
	template: JST["restaurants/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.reviews(), "sync add remove", this.render); //not sure if this is correct
	},
	
	addReview: function (review) {
		var reviewView = new NomNom.Views.ReviewShow({
			review: review
		});
		this.addSubview(".review-list", reviewView);
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model
		});
		this.$el.html(renderedContent);
		this.renderReviews();
		this.renderReviewsForm();
		return this;
	},
	
	renderReviews: function () {
		 this.model.reviews().each(this.addReview.bind(this));
	},
	
	renderReviewsForm: function () {
		var view = new NomNom.Views.ReviewForm({
			collection: this.collection
		});
		this.addSubview(".review-form", view);
	},
	
});

