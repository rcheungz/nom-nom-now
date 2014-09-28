NomNom.Views.RestaurantShow = Backbone.CompositeView.extend({
	template: JST["restaurants/show"],
	
	initialize: function () {
		this.renderRating();
		this.listenTo(this.model, "sync", this.render);
		// this.listenTo(this.model, "sync", this.renderRating);
		this.listenTo(this.model.reviews(), "add", this.addReview);
		this.listenTo(this.model.reviews(), "add", this.updateRating);
		this.renderReviews();
		this.renderReviewsForm();
	},
	
	updateRating: function () {
		this.ratingView.update(this._calculateRating());
	},
	
	addReview: function (review) {
		var reviewView = new NomNom.Views.ReviewShow({
			model: review
		});
		this.addSubview(".review-list", reviewView);
	},
	
	_roundToHalf: function (num) {
	    num = Math.round(num*2)/2;
	    return num;
	},

	_calculateRating: function () {
		var sum = 0;
		var nums = 0;
		this.model.reviews().each( function (review) {
			nums++;
			sum += review.attributes.rating;
		});
		this.rating = this._roundToHalf(sum / nums);//allows outside to access rating
		return this._roundToHalf(sum / nums);
	},
	
	render: function () {
		var renderedContent = this.template({
			restaurant: this.model,
			rating: this._calculateRating()
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	},
	
	renderRating: function () {
		var updatedRating = this._calculateRating();
		this.ratingView = new NomNom.Views.RatingShow({
			rating: updatedRating
		});
		this.addSubview(".restaurant-rating", this.ratingView);
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
		this.$(".review-form").val("");
		this.addSubview(".review-form", view);
	},
	
});

