NomNom.Views.RestaurantShow = Backbone.CompositeView.extend({
	template: JST["restaurants/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.reviews(), "sync", this.render); //not sure if this is correct
		this.listenTo(this.model.reviews(), "add", this.addReview);
		this.renderReviews();
		this.renderReviewsForm();
	},
	
	addReview: function (review) {
		var reviewView = new NomNom.Views.ReviewShow({
			model: review
		});
		this.addSubview(".review-list", reviewView);
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	},
	
	renderReviews: function () {
		var that = this
		this.model.reviews().each(function (review) {
			that.addReview(review);
		});
	},
	
	renderReviewsForm: function () {
		var view = new NomNom.Views.ReviewForm({
			collection: this.model.reviews(),
			model: new NomNom.Models.Review()
		});
		this.addSubview(".review-form", view);
	},
	
});

